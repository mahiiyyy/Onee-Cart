import React, { useState, useRef, useEffect, useContext } from "react";
import axios from "axios";
import { Send, Mic, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

import ai from "../assets/Ai.png";
import openSound from "../assets/openSound.wav";

import ProductCard from "./ProductCard";
import Typing from "./Typing";
import { shopDataContext } from "../context/ShopContext";

function Ai() {

  const serverUrl = "http://localhost:8000";

  const navigate = useNavigate();

  const { addToCart } = useContext(shopDataContext);

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);

  const [input, setInput] = useState("");

  const [lastProducts, setLastProducts] = useState([]);

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "👋 Hello Mahi! I'm Onee AI. I can help you find products, open products, add items to your cart and even help you checkout."
    }
  ]);

  const chatRef = useRef(null);
  const recognitionRef = useRef(null);

  useEffect(() => {

    if (chatRef.current) {

      chatRef.current.scrollTop =
        chatRef.current.scrollHeight;

    }

  }, [messages, loading]);

  const playOpenSound = () => {

    try {

      const audio = new Audio(openSound);

      audio.volume = 0.5;

      audio.play();

    } catch (error) {

      console.log(error);

    }

  };

  const openAI = () => {

    playOpenSound();

    setOpen(true);

  };

  const closeAI = () => {

    setOpen(false);

  };

  const speak = (text) => {

    window.speechSynthesis.cancel();

    const speech =
      new SpeechSynthesisUtterance(text);

    speech.lang = "en-US";
    speech.rate = 1;

    window.speechSynthesis.speak(speech);

  };

  // ===========================
  // Send Message
  // ===========================

  const sendMessage = async () => {

    if (!input.trim()) return;

    const userMessage = input;

    setMessages(prev => [
      ...prev,
      {
        sender: "user",
        text: userMessage
      }
    ]);

    setInput("");

    setLoading(true);

    try {

      const { data } = await axios.post(

        serverUrl + "/api/ai/chat",

        {
          message: userMessage
        }

      );

      setMessages(prev => [

        ...prev,

        {
          sender: "ai",
          text: data.reply,
          products: data.products || []
        }

      ]);

      setLastProducts(data.products || []);

      speak(data.reply);

      if (
        data.action === "OPEN_PRODUCT" &&
        data.productId
      ) {

        navigate(`/product/${data.productId}`);

      }

      if (
  data.action === "ADD_TO_CART" &&
  data.productId
) {

  addToCart(
    data.productId,
    data.products[0]?.sizes?.[0] || "M"
  );

  setMessages(prev => [
    ...prev,
    {
      sender: "ai",
      text: "✅ Product added to your cart."
    }
  ]);

}
      if (
        data.action === "BUY_NOW"
      ) {

        navigate("/place-order");

      }

    }

    catch (error) {

      console.log(error);

      setMessages(prev => [

        ...prev,

        {

          sender: "ai",

          text: "Sorry, something went wrong."

        }

      ]);

    }

    setLoading(false);

  };

    // ===========================
  // Voice Recognition
  // ===========================

  const startListening = () => {

    if (
      !("webkitSpeechRecognition" in window) &&
      !("SpeechRecognition" in window)
    ) {

      alert("Speech Recognition is not supported.");

      return;

    }

    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();

    recognitionRef.current = recognition;

    recognition.lang = "en-US";

    recognition.interimResults = false;

    recognition.continuous = false;

    recognition.start();

    setListening(true);

    recognition.onresult = async (event) => {

      const voiceText =
        event.results[0][0].transcript;

      setMessages(prev => [
        ...prev,
        {
          sender: "user",
          text: voiceText
        }
      ]);

      setLoading(true);

      try {

        const { data } = await axios.post(

          serverUrl + "/api/ai/chat",

          {
            message: voiceText
          }

        );

        setMessages(prev => [

          ...prev,

          {
            sender: "ai",
            text: data.reply,
            products: data.products || []
          }

        ]);

        setLastProducts(data.products || []);

        speak(data.reply);

        if (
          data.action === "OPEN_PRODUCT" &&
          data.productId
        ) {

          navigate(`/product/${data.productId}`);

        }

        if (
          data.action === "ADD_TO_CART" &&
          data.products &&
          data.products.length
        ) {

          addToCart(

            data.products[0]._id,

            data.products[0].sizes?.[0] || "M"

          );

        }

        if (
          data.action === "BUY_NOW"
        ) {

          navigate("/place-order");

        }

      }

      catch (error) {

        console.log(error);

      }

      setLoading(false);

    };

    recognition.onend = () => {

      setListening(false);

    };

    recognition.onerror = () => {

      setListening(false);

    };

  };

  return (
  <>

    {/* Floating AI Button */}

    <div
      onClick={openAI}
      className="fixed bottom-8 right-8 z-50 cursor-pointer group"
    >

      <div className="relative">

        <div className="absolute inset-0 rounded-full bg-pink-500 blur-2xl opacity-40 group-hover:opacity-70 animate-pulse"></div>

        <img
          src={ai}
          alt="Onee AI"
          className="relative w-20 h-20 rounded-full border-4 border-white shadow-2xl hover:scale-110 transition-all duration-300"
        />

        <span className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-green-500 border-2 border-white"></span>

      </div>

    </div>

    {open && (

      <div className="fixed bottom-28 right-8 z-50 w-[420px] h-[700px] rounded-[32px] overflow-hidden border border-white/60 bg-white/90 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.18)]">

        {/* Header */}

        <div className="h-24 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 px-6 flex justify-between items-center">

          <div className="flex items-center gap-4">

            <img
              src={ai}
              alt=""
              className="w-16 h-16 rounded-full border-2 border-white shadow-lg"
            />

            <div>

              <h2 className="text-white text-2xl font-bold">
                Onee AI
              </h2>

              <p className="text-pink-100 text-sm">
                Your Smart Shopping Assistant
              </p>

            </div>

          </div>

          <button
            onClick={closeAI}
            className="w-10 h-10 rounded-full bg-white/20 text-white hover:bg-white hover:text-pink-600 transition flex justify-center items-center"
          >

            <X size={22} />

          </button>

        </div>

        {/* Messages */}

        <div
          ref={chatRef}
          className="h-[510px] overflow-y-auto px-5 py-6 space-y-5 bg-gradient-to-b from-pink-50 via-white to-purple-50"
        >

          {messages.map((msg, index) => (

            <div
              key={index}
              className={`flex ${
                msg.sender === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >

              <div
                className={`max-w-[85%] px-5 py-4 shadow-md transition-all duration-300 ${
                  msg.sender === "user"
                    ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-3xl rounded-br-md"
                    : "bg-white border border-pink-100 rounded-3xl rounded-bl-md"
                }`}
              >

                <p className="leading-7 whitespace-pre-wrap">

                  {msg.text}

                </p>

                {msg.products &&
                  msg.products.length > 0 && (

                    <div className="grid grid-cols-2 gap-4 mt-5">

                      {msg.products.map(product => (

                        <ProductCard
                          key={product._id}
                          product={product}
                        />

                      ))}

                    </div>

                  )}

              </div>

            </div>

          ))}

          {loading && (

            <div className="flex justify-start">

              <Typing />

            </div>

          )}

                  </div>

        {/* Footer */}

        <div className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-xl border-t border-pink-100 p-4">

          <div className="flex items-center gap-3">

            {/* Voice Button */}

            <button
              onClick={startListening}
              className={`w-12 h-12 rounded-full flex justify-center items-center transition-all duration-300 ${
                listening
                  ? "bg-red-500 text-white animate-pulse"
                  : "bg-pink-100 text-pink-600 hover:bg-pink-200"
              }`}
            >
              <Mic size={20} />
            </button>

            {/* Input */}

            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
              placeholder="Ask me about products..."
              className="flex-1 h-12 rounded-full bg-pink-50 border border-pink-200 px-5 outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
            />

            {/* Send Button */}

            <button
              onClick={sendMessage}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white flex justify-center items-center shadow-lg hover:scale-110 transition-all duration-300"
            >
              <Send size={20} />
            </button>

          </div>

        </div>

      </div>

    )}

  </>

);

}

export default Ai;