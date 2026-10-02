import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full container relative z-30 !py-12 lg:!py-26"
    >
      <div className="w-full flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="bg-white/10 rounded-lg w-full md:w-[70%] py-6 px-4 md:py-8 md:px-6"
        >
          <h4 className="text-xl sm:text-3xl font-semibold capitalize mb-4">
            Let's work together
          </h4>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-lg border border-white/20 bg-white/5 backdrop-blur-lg px-2.5 md:px-4 py-1.5 md:py-3 outline-none"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="email">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-lg border border-white/20 bg-white/5 backdrop-blur-lg px-2.5 md:px-4 py-1.5 md:py-3 outline-none"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="service">
                Service Needed <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="What service do you need?"
                className="w-full rounded-lg border border-white/20 bg-white/5 backdrop-blur-lg px-2.5 md:px-4 py-1.5 md:py-3 outline-none"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                rows="5"
                placeholder="Your Message"
                className="w-full resize-none rounded-lg border border-white/20 bg-white/5 backdrop-blur-lg px-2.5 md:px-4 py-1.5 md:py-3 outline-none"
              ></textarea>
            </div>

            <div className="mt-4">
              <button type="submit" className="primaryBtn w-full">
                Send Message
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
