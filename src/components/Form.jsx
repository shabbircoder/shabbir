import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      to_name: name,
      to_email: email,
      message: msg,
    };

    const service_id = "service_9k5xejn";
    const template_id = "template_zhzllcn";
    const user_id = "0ZdYszff9cbT2OG4i";

    emailjs
      .send(service_id, template_id, templateParams, user_id)
      .then((response) => {
        toast.success("Message sent successfully", response);
        console.log("Message sent successfully", response);
        // Clear input values after successful submission
        setName("");
        setEmail("");
        setMsg("");
      })

      .catch((error) => {
        toast.error("Error occurred while sending message", error);
      });
  };

  return (
    <div className="w-full bg-[#3d3d3d] pb-4">
      <div className="max-w-[1240px] mx-auto p-8 border shadow-md rounded-md">
        <h2 className="text-4xl text-white font-bold mb-4">Contact Me</h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-[#f5f6fa] text-[18px] font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full bg-[#3d3d3d] px-3 py-2 leading-tight focus:outline-none focus:shadow-outline border   hover:border-gray-900 rounded-md text-white"
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-[#f5f6fa] text-[18px] font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-3 bg-[#3d3d3d] py-2 leading-tight focus:outline-none focus:shadow-outline border hover:border-gray-900  rounded-md text-white "
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block  text-[#f5f6fa] text-[18px] font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className="w-full  bg-[#3d3d3d] px-3 py-2 leading-tight focus:outline-none focus:shadow-outline border  hover:border-gray-900 rounded-md text-white"
              name="description"
              id="description"
              placeholder="Describe your query..."
              rows="5"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={sendEmail}
            >
              Submit
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Form;
