import React from "react";
import about from "../assets/about.png"
function About(){
  return (
    <div className="w-full min-h-screen bg-[#fdf7fa] relative overflow-hidden">

      {/* Background Circles */}

      <div className="absolute -top-40 -right-40 w-96 h-96 border-[40px] border-pink-100 rounded-full opacity-60"></div>

      <div className="absolute -bottom-40 -left-40 w-96 h-96 border-[40px] border-pink-100 rounded-full opacity-60"></div>

      {/* Dots */}

      <div className="absolute top-12 left-8 grid grid-cols-4 gap-3">

        {[...Array(16)].map((_, i) => (

          <div
            key={i}
            className="w-2.5 h-2.5 rounded-full bg-pink-300"
          ></div>

        ))}

      </div>

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 relative z-10">

        {/* Badge */}

        <div className="flex justify-center">

          <div className="inline-flex items-center gap-3 bg-white px-8 py-3 rounded-full shadow-lg">

            <span className="text-pink-500 text-xl">
              ✦
            </span>

            <span className="uppercase tracking-[5px] text-pink-500 font-semibold">
              About OneeCart
            </span>

            <span className="text-pink-500 text-xl">
              ✦
            </span>

          </div>

        </div>

        {/* Heading */}

        <h1 className="text-center mt-8 text-6xl md:text-7xl font-bold">

          <span className="text-[#1e1b4b]">
            ABOUT
          </span>

          <span className="bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent">
            {" "}ONEECART
          </span>

        </h1>

        <div className="flex justify-center items-center gap-6 mt-8">

          <div className="w-28 h-[2px] bg-pink-500"></div>

          <span className="text-pink-500 text-xl">
            ✦
          </span>

          <div className="w-28 h-[2px] bg-pink-500"></div>

        </div>

        <p className="text-center max-w-3xl mx-auto mt-8 text-gray-500 text-lg">

          At OneeCart, fashion is more than clothing—it's confidence,
          creativity, and self-expression. We curate premium collections
          that blend timeless elegance with modern trends to help you
          express your unique style every day.

        </p>

                {/* About Section */}

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-24">

          {/* Image */}

          <div className="relative">

  {/* Pink Glow */}
  <div className="absolute -inset-6 bg-pink-200 rounded-[45px] blur-3xl opacity-30"></div>

  

  {/* Image */}
  <img
    src={about}
    alt="OneeCart About"
    className="relative w-full h-[600px] object-cover rounded-[40px] shadow-2xl transition-all duration-500 hover:scale-[1.03]"
  />

  {/* Floating Badge */}
  <div className="absolute bottom-6 left-6 bg-white px-6 py-4 rounded-2xl shadow-xl">
    <h3 className="text-2xl font-bold text-pink-500">
      Premium Fashion
    </h3>
    <p className="text-gray-500 text-sm">
      Quality • Style • Confidence
    </p>
  </div>

</div>

          {/* Content */}

          <div>

            <p className="uppercase tracking-[4px] text-pink-500 font-semibold">
              Our Story
            </p>

            <h2 className="text-5xl font-bold mt-4 text-[#1e1b4b]">
              Fashion That Speaks
            </h2>

            <p className="text-gray-600 leading-8 mt-8">

              OneeCart was created with a simple vision—to make
              premium fashion accessible to everyone. We believe
              clothing is not just something you wear; it's a
              reflection of your personality.

            </p>

            <p className="text-gray-600 leading-8 mt-6">

              Every collection is carefully selected with quality,
              comfort, and elegance in mind. Whether you're looking
              for everyday essentials or statement outfits, OneeCart
              offers styles that inspire confidence.

            </p>

            <div className="grid grid-cols-2 gap-6 mt-12">

              <div className="bg-white rounded-3xl shadow-lg p-6">

                <h3 className="text-4xl font-bold text-pink-500">
                  10K+
                </h3>

                <p className="text-gray-500 mt-2">
                  Happy Customers
                </p>

              </div>

              <div className="bg-white rounded-3xl shadow-lg p-6">

                <h3 className="text-4xl font-bold text-pink-500">
                  500+
                </h3>

                <p className="text-gray-500 mt-2">
                  Premium Products
                </p>

              </div>

              <div className="bg-white rounded-3xl shadow-lg p-6">

                <h3 className="text-4xl font-bold text-pink-500">
                  50+
                </h3>

                <p className="text-gray-500 mt-2">
                  Fashion Brands
                </p>

              </div>

              <div className="bg-white rounded-3xl shadow-lg p-6">

                <h3 className="text-4xl font-bold text-pink-500">
                  24/7
                </h3>

                <p className="text-gray-500 mt-2">
                  Customer Support
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Why Choose Us */}

<div className="mt-28">

  <div className="text-center">

    <p className="uppercase tracking-[5px] text-pink-500 font-semibold">
      Why Choose Us
    </p>

    <h2 className="text-5xl font-bold mt-4">

      <span className="text-[#1e1b4b]">
        EXPERIENCE THE
      </span>

      <span className="bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent">
        {" "}ONEECART DIFFERENCE
      </span>

    </h2>

    <p className="text-gray-500 mt-6 max-w-3xl mx-auto">

      We combine premium fashion, quality craftsmanship,
      and exceptional customer service to deliver a shopping
      experience you'll love.

    </p>

  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

    {/* Card */}

    <div className="bg-white rounded-[35px] p-10 shadow-lg hover:-translate-y-3 duration-300 text-center">

      <div className="w-20 h-20 mx-auto rounded-full bg-pink-100 flex items-center justify-center text-4xl">
        🚚
      </div>

      <h3 className="text-2xl font-bold mt-6 text-[#1e1b4b]">
        Fast Delivery
      </h3>

      <p className="text-gray-500 mt-4 leading-7">

        Lightning-fast delivery with secure packaging across India.

      </p>

    </div>

    {/* Card */}

    <div className="bg-white rounded-[35px] p-10 shadow-lg hover:-translate-y-3 duration-300 text-center">

      <div className="w-20 h-20 mx-auto rounded-full bg-pink-100 flex items-center justify-center text-4xl">
        💎
      </div>

      <h3 className="text-2xl font-bold mt-6 text-[#1e1b4b]">
        Premium Quality
      </h3>

      <p className="text-gray-500 mt-4 leading-7">

        Every product is carefully selected to meet high-quality standards.

      </p>

    </div>

    {/* Card */}

    <div className="bg-white rounded-[35px] p-10 shadow-lg hover:-translate-y-3 duration-300 text-center">

      <div className="w-20 h-20 mx-auto rounded-full bg-pink-100 flex items-center justify-center text-4xl">
        🔒
      </div>

      <h3 className="text-2xl font-bold mt-6 text-[#1e1b4b]">
        Secure Payments
      </h3>

      <p className="text-gray-500 mt-4 leading-7">

        Shop with confidence using safe and encrypted payment methods.

      </p>

    </div>

    {/* Card */}

    <div className="bg-white rounded-[35px] p-10 shadow-lg hover:-translate-y-3 duration-300 text-center">

      <div className="w-20 h-20 mx-auto rounded-full bg-pink-100 flex items-center justify-center text-4xl">
        ❤️
      </div>

      <h3 className="text-2xl font-bold mt-6 text-[#1e1b4b]">
        Customer First
      </h3>

      <p className="text-gray-500 mt-4 leading-7">

        Our support team is always ready to help you with every order.

      </p>

    </div>

  </div>

</div>

{/* ========================= CTA SECTION ========================= */}

<div className="mt-28">

  <div className="bg-gradient-to-r from-pink-500 to-pink-400 rounded-[45px] px-10 py-20 text-center text-white shadow-2xl">

    <p className="uppercase tracking-[5px] font-semibold opacity-90">
      Join Our Community
    </p>

    <h2 className="text-5xl md:text-6xl font-bold mt-6">
      Fashion Begins Here
    </h2>

    <p className="max-w-3xl mx-auto mt-8 text-lg leading-8 opacity-90">

      Join thousands of fashion lovers discovering premium collections,
      exclusive offers, and timeless styles only at OneeCart.

    </p>

    <div className="flex flex-wrap justify-center gap-6 mt-12">

      <button className="bg-white text-pink-500 px-10 py-4 rounded-full font-semibold hover:scale-105 duration-300">

        Shop Now

      </button>

      <button className="border-2 border-white px-10 py-4 rounded-full font-semibold hover:bg-white hover:text-pink-500 duration-300">

        Contact Us

      </button>

    </div>

  </div>

</div>

{/* ========================= STATS ========================= */}

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">

  <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

    <h3 className="text-5xl font-bold text-pink-500">
      10K+
    </h3>

    <p className="text-gray-500 mt-3">
      Happy Customers
    </p>

  </div>

  <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

    <h3 className="text-5xl font-bold text-pink-500">
      500+
    </h3>

    <p className="text-gray-500 mt-3">
      Premium Products
    </p>

  </div>

  <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

    <h3 className="text-5xl font-bold text-pink-500">
      50+
    </h3>

    <p className="text-gray-500 mt-3">
      Fashion Brands
    </p>

  </div>

  <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

    <h3 className="text-5xl font-bold text-pink-500">
      24/7
    </h3>

    <p className="text-gray-500 mt-3">
      Customer Support
    </p>

  </div>

</div>


</div>
</div>
);
}


export default About;

