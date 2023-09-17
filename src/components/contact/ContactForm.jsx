"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // Email Validation
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  // Form and EmailJS
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_id", "template_id", form.current, "API_ID").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  // End of emailJS

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Name is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Email is required!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid email!");
    } else if (subject === "") {
      setErrMsg("Subject is required!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      setSuccessMsg(`Thank you ${username}, Your Message Has Been Sent!`);
      setErrMsg("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
      console.log(username, phoneNumber, email, subject, message);
    }
  };

  return (
    <section className="max-w-[1240px] m-auto p-4 h-screen" id="contact">
      <h1 className="text-2xl font-bold text-center p-4">
        Interested on renting?
      </h1>
      <form ref={form} onSubmit={sendEmail} className="max-w-[600px] m-auto ">
        {errMsg && (
          <p className="py-3 text-center text-red-600 text-base tracking-wide animate-bounce">
            *{errMsg}
          </p>
        )}
        {successMsg && (
          <p className="py-3 text-center text-cyan-700 text-base tracking-wide animate-bounce">
            {successMsg}
          </p>
        )}
        <div className="grid grid-cols-2 gap-2">
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            className="border shadow-lg p-3 focus-visible:outline-cyan-700"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
            className="border shadow-lg p-3 focus-visible:outline-cyan-700"
            type="text"
            placeholder="Phone Number"
            name="phone"
          />
        </div>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="border shadow-lg p-3 w-full my-4 focus-visible:outline-cyan-700"
          type="email"
          placeholder="Email"
          name="email"
        />
        <input
          onChange={(e) => setSubject(e.target.value)}
          value={subject}
          className="border shadow-lg p-3 w-full mb-4 focus-visible:outline-cyan-700"
          type="text"
          placeholder="Subject"
          name="subject"
        />
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          className="border shadow-lg p-3 w-full resize-none focus-visible:outline-cyan-700"
          cols="30"
          rows="10"
          placeholder="Message"
          name="message"
        ></textarea>
        <button
          type="submit"
          onClick={handleSend}
          className="border bg-cyan-700 text-slate-200 shadow-lg p-3 w-full mt-2 mb-3"
        >
          Send Message
        </button>
        {errMsg && (
          <p className="py-3 text-center text-red-600 text-base tracking-wide animate-bounce">
            *{errMsg}
          </p>
        )}
        {successMsg && (
          <p className="py-3 text-center text-cyan-700 text-base tracking-wide animate-bounce">
            {successMsg}
          </p>
        )}
      </form>
    </section>
  );
}
