import React from 'react';
import { toast } from 'react-toastify';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "7230a4fa-c1be-435a-aa87-c7581255e953");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Form Submitted Successfully ✅");
        event.target.reset();
      } else {
        toast.error(data.message || "Something went wrong ❌");
      }
    } catch (error) {
      toast.error("Network Error ❌");
    }

    setResult("");
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-zinc-900 -mt-10"
      id="contact">
      <div className="bg-zinc-800 rounded-2xl shadow-xl p-10 w-full max-w-2xl text-white">
        <h1 className="text-4xl font-bold text-center mb-2">
          Contact <span className="font-light">With Us</span>
        </h1>

        <p className="text-zinc-400 text-center mb-8">
          Ready to Make a Move? Let’s Build Your Future Together
        </p>

        <form onSubmit={onSubmit} className="pt-4">
          <div className="flex flex-wrap gap-4">
            <div className="w-full md:w-[48%]">
              <label className="text-sm">Your Name</label>
              <input
                className="w-full bg-zinc-900 border border-zinc-700 rounded py-3 px-4 mt-2 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="w-full md:w-[48%]">
              <label className="text-sm">Your Email</label>
              <input
                className="w-full bg-zinc-900 border border-zinc-700 rounded py-3 px-4 mt-2 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
          </div>

          <div className="my-6">
            <label className="text-sm">Message</label>
            <textarea
              className="w-full bg-zinc-900 border border-zinc-700 rounded py-3 px-4 mt-2 h-40 resize-none text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
              name="message"
              placeholder="Write your message..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded bg-linear-to-r from-violet-500 to-violet-700 text-white font-semibold shadow-lg hover:opacity-90 transition"
          >
            {result || "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
