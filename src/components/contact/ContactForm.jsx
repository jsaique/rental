"use client";

import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const initialValues = {
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  //Getting the key and value of the form
  const handleChange = (e) => {
    const { name, value } = e.target;
    //[name] will assign the name to the key when typing in that form "same for other forms"
    setFormValues({ ...formValues, [name]: value });
    // console.log(formValues);
  };

  //Form
  const form = useRef();

  //EmailJS
  const sendEmail = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setSubmitted(true);

    if (formValues.email && formValues.subject && formValues.message) {
      emailjs
        .sendForm(
          "service_9fehgbc",
          "template_771d0za",
          form.current,
          "DovzGJEX_b7hIpw4A"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      form.current.reset();
    }
  };

  useEffect(() => {
    // console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && submitted) {
      // console.log(formValues);
    }
  }, [formErrors]);

  //Form validation
  const validate = (values) => {
    const errors = {};
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!values.name) {
      errors.name = "* Name is required";
    }
    if (!values.phone) {
      errors.phone = "Phone number is required";
    }
    if (!values.email) {
      errors.email = "* Email is required";
    }
    if (!regex.test(values.email)) {
      errors.email = "* Enter a valid email";
    }
    if (!values.subject) {
      errors.subject = "* Subject is required";
    }
    if (!values.message) {
      errors.message = "* Write a message";
    }
    return errors;
  };

  return (
    <section
      className="max-w-[1240px] m-auto p-4 h-screen scroll-mt-28"
      id="contact"
    >
      <h1 className="text-2xl font-bold text-center p-4">
        Interested on renting?
      </h1>
      <form className="max-w-[600px] m-auto " ref={form} onSubmit={sendEmail}>
        <input
          className="border shadow-lg p-3 w-full my-4 focus-visible:outline-cyan-700"
          onChange={handleChange}
          type="text"
          placeholder="Name"
          name="name"
        />
        <p className="text-sm font-medium text-red-500">{formErrors.name}</p>
        <input
          className="border shadow-lg p-3 focus-visible:outline-cyan-700 w-full"
          onChange={handleChange}
          type="text"
          placeholder="Phone Number"
          name="phone"
        />
        <p className="text-sm font-medium text-red-500">{formErrors.phone}</p>
        <input
          className="border shadow-lg p-3 w-full my-4 focus-visible:outline-cyan-700"
          onChange={handleChange}
          type="email"
          placeholder="Email"
          name="email"
        />
        <p className="text-sm font-medium text-red-500">{formErrors.email}</p>
        <input
          className="border shadow-lg p-3 w-full mb-4 focus-visible:outline-cyan-700"
          onChange={handleChange}
          type="text"
          placeholder="Subject"
          name="subject"
        />
        <p className="text-sm font-medium text-red-500">{formErrors.subject}</p>
        <textarea
          className="border shadow-lg p-3 w-full resize-none focus-visible:outline-cyan-700"
          onChange={handleChange}
          cols="30"
          rows="10"
          placeholder="Message"
          name="message"
        ></textarea>
        <p className="text-sm font-medium text-red-500">{formErrors.message}</p>
        {Object.keys(formErrors).length === 0 && submitted ? (
          <p className="text-lg font-semibold text-green-500 text-center">
            {formValues.name} your message has been sent!
          </p>
        ) : (
          ""
        )}
        <button
          type="submit"
          className="border bg-cyan-700 text-slate-200 shadow-lg p-3 w-full mt-2 mb-3"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
