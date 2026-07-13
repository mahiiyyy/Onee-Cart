import { GoogleGenerativeAI } from "@google/generative-ai";
import Product from "../model/productModel.js";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const chatWithAI = async (req, res) => {

  try {

    const { message } = req.body;

    if (!message) {

      return res.status(400).json({
        success: false,
        message: "Message is required",
      });

    }

    // Get all products
    const products = await Product.find({});

    const query = message.toLowerCase();

    // ===========================
    // Ignore common words
    // ===========================

    const ignoreWords = [
      "show",
      "me",
      "find",
      "search",
      "want",
      "need",
      "please",
      "the",
      "a",
      "an",
      "open",
      "view",
      "buy",
      "purchase",
      "checkout",
      "add",
      "cart",
      "to",
      "for",
      "of",
      "this",
      "product",
      "products",
      "under",
      "below"
    ];

    const keywords = query
      .split(" ")
      .filter(word =>
        word &&
        !ignoreWords.includes(word)
      );

    // ===========================
    // Search Products
    // ===========================

    const matchedProducts = products.filter((product) => {

      const searchable = `
      ${product.name}
      ${product.category}
      ${product.subCategory}
      ${product.description}
      `.toLowerCase();

      return keywords.every(keyword =>
        searchable.includes(keyword)
      );

    });

    const recommendedProducts =
      matchedProducts.slice(0, 4);

    // ===========================
    // Detect User Action
    // ===========================

    let action = null;

    if (
      query.includes("open") ||
      query.includes("view")
    ) {

      action = "OPEN_PRODUCT";

    }

    if (
      query.includes("add") &&
      query.includes("cart")
    ) {

      action = "ADD_TO_CART";

    }

    if (
      query.includes("buy") ||
      query.includes("checkout") ||
      query.includes("purchase")
    ) {

      action = "BUY_NOW";

    }

    const showProducts =
      query.includes("show") ||
      query.includes("find") ||
      query.includes("search");

    // ===========================
    // Create Prompt
    // ===========================

    // ===========================
// Gemini Prompt
// ===========================

const productList = recommendedProducts
  .map(
    (item) => `
Name: ${item.name}
Price: ₹${item.price}
Category: ${item.category}
Description: ${item.description}
`
  )
  .join("\n");

const prompt = `
You are Onee AI Shopping Assistant.

Customer Message:
${message}

Matching Products:
${productList || "No matching products found."}

Rules:

- You help customers shop on OneeCart.
- Recommend products only from the matching products above.
- You can show products.
- You can open product pages.
- You can add products to the cart.
- You can help users buy products.

If the user asks to add a product to the cart,
reply as if it has been added successfully.

If the user asks to open a product,
reply as if you are opening the product page.

If the user asks to buy a product,
reply as if you are taking them to checkout.

If there are no matching products,
politely tell the user they are unavailable.

Never say:
- "I can't"
- "I am unable"
- "I don't have access"

Always behave as if you control the OneeCart website.

Keep replies under 60 words.
`;



const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

const result = await model.generateContent(prompt);

const reply = result.response.text();

return res.json({
  success: true,
  reply,
  products: recommendedProducts,
  action,
  productId:
    recommendedProducts.length === 1
      ? recommendedProducts[0]._id
      : null,
});

} catch (error) {

  console.log("AI Error:", error);

  return res.status(500).json({
    success: false,
    message: error.message,
  });

}

};