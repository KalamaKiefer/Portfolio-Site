import React from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Bounded from "./Bounded";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = React.useRef();
  const [loading, isLoading] = React.useState(false);
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

  const handleSubmit = (e) => {};

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
          <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Contact Me.
          </h3>

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
                className="py-4 px-6 text-white border-none focus:ring-0 outline-none rounded-lg font-medium w-full"
              />
            </label>
            <label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="py-4 px-6 text-white border-none focus:ring-0 outline-none rounded-lg font-medium w-full"
              />
            </label>
            <label>
              <textarea
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                className="py-4 px-6 text-white border-none focus:ring-0 outline-none rounded-lg font-medium w-full"
              />
            </label>

            <button
              type="submit"
              className="bg-matte py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
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
