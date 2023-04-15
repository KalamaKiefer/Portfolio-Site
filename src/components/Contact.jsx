import React from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Bounded from "./Bounded";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = React.useRef();
  const [state, setState] = React.useState("init");
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setState("loading");

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_KEY,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Basing",
          reply_to: form.email,
          to_email: import.meta.env.VITE_EMAIL,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setState("submitted");
        },
        (error) => {
          console.log(error);
          setState("error");
        }
      );
  };

  return (
    <Bounded xPad="default" yPad="default" className="mx-auto max-w-7xl">
      <span className="hash-span" id={"contact"}>
        &nbsp;
      </span>
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden bg-transparent ">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-transparent p-8 rounded-2xl"
        >
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
            Reach Out
          </p>
          <h3 className="text-creme font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Contact Me.
          </h3>
          {state === "init" || state === "loading" ? (
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-12 flex flex-col gap-8"
            >
              <label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="First & Last Name"
                  className="py-4 px-6 text-creme border-none focus:ring-0 outline-none rounded-lg font-medium w-full bg-matte"
                  required
                />
              </label>
              <label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="py-4 px-6 text-creme border-none focus:ring-0 outline-none rounded-lg font-medium w-full bg-matte"
                  required
                />
              </label>
              <label>
                <textarea
                  rows="7"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="py-4 px-6 text-creme border-none focus:ring-0 outline-none rounded-lg font-medium w-full bg-matte"
                  required
                />
              </label>

              <button
                type="submit"
                className="bg-transparent border border-matte py-3 px-8 outline-none w-full text-creme font-bold rounded-xl hover:bg-matte transition duration-200 ease-in-out inline-flex justify-center"
              >
                {state === "loading" ? "Sending..." : "Send"}
              </button>
            </form>
          ) : state === "submitted" ? (
            <div className="flex flex-col gap-8  mt-10 lg:mt-20 lg:items-center xl:items-start">
              <p className="text-lg lg:text-2xl text-creme lg:max-w-[400px]">
                Thanks for reaching out! I'll get back to you as soon as
                possible!
              </p>
              <button
                className=" bg-transparent border border-matte text-creme w-full py-4 rounded lg:max-w-[400px] mb-20 font-bold hover:bg-matte transition duration-200 ease-in-out"
                onClick={() => {
                  setForm({
                    name: "",
                    email: "",
                    message: "",
                  });
                  setState("init");
                }}
              >
                Submit Another Form?
              </button>
            </div>
          ) : (
            state === "error" && (
              <div className="mt-12 lg:mt-28">
                <p className="text-creme lg:text-2xl text-lg text-center">
                  Error: Sorry something went wrong try again?
                </p>
              </div>
            )
          )}
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </Bounded>
  );
};

export default Contact;
