import React from "react";
import contact from "../assets/contacts.png"
function Contact() {

  return (

    <div className="w-full min-h-screen bg-[#fdf7fa] relative overflow-hidden">

      {/* Background */}

      <div className="absolute -top-40 -right-40 w-96 h-96 border-[40px] border-pink-100 rounded-full opacity-60"></div>

      <div className="absolute -bottom-40 -left-40 w-96 h-96 border-[40px] border-pink-100 rounded-full opacity-60"></div>

      {/* Dots */}

      <div className="absolute left-8 top-12 grid grid-cols-4 gap-3">

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

            <span className="text-pink-500">✦</span>

            <span className="uppercase tracking-[5px] text-pink-500 font-semibold">

              Contact Us

            </span>

            <span className="text-pink-500">✦</span>

          </div>

        </div>

        {/* Heading */}

        <h1 className="text-center text-6xl md:text-7xl font-bold mt-8">

          <span className="text-[#1e1b4b]">

            GET IN

          </span>

          <span className="bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent">

            {" "}TOUCH

          </span>

        </h1>

        <div className="flex justify-center items-center gap-6 mt-8">

          <div className="w-28 h-[2px] bg-pink-500"></div>

          <span className="text-pink-500 text-xl">

            ✦

          </span>

          <div className="w-28 h-[2px] bg-pink-500"></div>

        </div>

        <p className="text-center max-w-2xl mx-auto mt-8 text-gray-500 text-lg">

          We'd love to hear from you. Whether you have a question,
          feedback, or just want to say hello, our team is here to help.

        </p>

                <div className="grid lg:grid-cols-2 gap-16 mt-24 items-center">

          {/* Left Side */}

          <img
            src={contact}
            alt="contact"
            className="rounded-[40px] shadow-xl h-[500px] object-cover"
          />

          {/* Form */}

          <div className="bg-white rounded-[40px] shadow-xl p-10">

            <h2 className="text-4xl font-bold text-[#1e1b4b]">

              Send a Message

            </h2>

            <p className="text-gray-500 mt-4">

              Fill in the details below and we'll get back to you shortly.

            </p>

            <form className="mt-10 space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-xl p-4 outline-none focus:border-pink-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-xl p-4 outline-none focus:border-pink-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border rounded-xl p-4 outline-none focus:border-pink-500"
              />

              <textarea
                rows="6"
                placeholder="Write your message..."
                className="w-full border rounded-xl p-4 outline-none focus:border-pink-500"
              ></textarea>

              <button
                className="bg-gradient-to-r from-pink-500 to-pink-400 text-white px-10 py-4 rounded-full font-semibold hover:scale-105 duration-300"
              >

                Send Message

              </button>

            </form>

          </div>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-24">

  <div className="bg-white rounded-[35px] shadow-lg p-10 text-center">

    <div className="text-5xl">📍</div>

    <h3 className="text-2xl font-bold mt-5">
      Address
    </h3>

    <p className="text-gray-500 mt-3">
      Bhopal, Madhya Pradesh, India
    </p>

  </div>

  <div className="bg-white rounded-[35px] shadow-lg p-10 text-center">

    <div className="text-5xl">📞</div>

    <h3 className="text-2xl font-bold mt-5">
      Phone
    </h3>

    <p className="text-gray-500 mt-3">
      +91 9876543210
    </p>

  </div>

  <div className="bg-white rounded-[35px] shadow-lg p-10 text-center">

    <div className="text-5xl">✉️</div>

    <h3 className="text-2xl font-bold mt-5">
      Email
    </h3>

    <p className="text-gray-500 mt-3">
      support@oneecart.com
    </p>

  </div>

</div>
<div className="mt-24">

  <div className="bg-gradient-to-r from-pink-500 to-pink-400 rounded-[45px] py-20 text-center text-white">

    <h2 className="text-5xl font-bold">

      Let's Build Something Amazing Together

    </h2>

    <p className="max-w-2xl mx-auto mt-6 text-lg">

      Thank you for visiting OneeCart.
      We appreciate your trust and look forward
      to serving you.

    </p>

  </div>

</div>

      </div>

    </div>

  );

}

export default Contact;                             