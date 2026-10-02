import { motion } from "framer-motion";

const About = ({ data }) => {
  return (
    <section
      id="about"
      className="w-full h-full container relative z-30 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-full text-center !pt-12 lg:!pt-26"
      >
        <h3 className="font-semibold text-3xl md:text-5xl mb-1 md:mb-3">
          {data?.title}
        </h3>
        <p className="text-gray-300 text-[14px] md:text-[16px]">
          {data?.subtitle}
        </p>
      </motion.div>

      <div className="pt-8 sm:pt-14 lg:pt-18 grid lg:grid-cols-2 gap-5 items-center">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative flex justify-center lg:justify-end order-2 lg:order-1"
        >
          <div className="aboutImg">
            <img
              src={data?.image}
              alt={data?.name}
              className="h-[80%] sm:h-[100%] w-[350px] sm:w-[550px] lg:w-[450px] relative z-20"
            />
          </div>
          <div className="mt-10 flex flex-col lg:hidden justify-center items-center text-center gap-6 w-full">
            {data?.stats?.map((stat) => {
              return (
                <div key={stat?.label} className="expBox">
                  <span>{stat?.value}</span>

                  <p className="font-light! text-[15px] sm:text-[18px]">
                    {stat?.label}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="aboutP text-center lg:text-left order-1 lg:order-2"
        >
          {data?.paragraphs?.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}

          <div className="flex gap-3 lg:gap-8 items-center justify-center md:justify-start mt-6">
            <a href={data?.button?.link} className="btn primaryBtn">
              {data?.button?.text}
            </a>
          </div>

          <div className="mt-10 hidden lg:flex items-center text-center gap-4 w-full">
            {data?.stats?.map((stat) => {
              return (
                <div key={stat?.label} className="expBox">
                  <span>{stat?.value}</span>

                  <p className="font-light! text-[15px] sm:text-[18px]">
                    {stat?.label}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
