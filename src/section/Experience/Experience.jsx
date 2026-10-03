import { SiListmonk } from "react-icons/si";
import { motion } from "framer-motion";

const Experience = ({ data }) => {
  return (
    <section
      id="experience"
      className="w-full min-h-screen container relative z-30 !pt-12 lg:!pt-26"
    >
      <motion.div
        className="w-full text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <h3 className="font-semibold text-3xl md:text-5xl mb-1 md:mb-3">
          {data?.title}
        </h3>
        <p className="text-gray-300 text-[14px] md:text-[16px]">
          {data?.subtitle}
        </p>
      </motion.div>

      <div className="pt-8 lg:pt-12">
        {data?.experiences?.map((experience, index) => (
          <div
            key={index}
            className="relative grid lg:grid-cols-[200px_1fr] gap-8"
          >
            <motion.div
              className="hidden lg:flex flex-col items-center"
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-pink-500 to-blue-500" />
              <div className="w-[2px] h-full bg-white/20" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8 mb-5"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                <div>
                  <h4 className="text-xl md:text-2xl font-semibold">
                    {experience?.role}
                  </h4>
                  <p className="text-[#08bfff] font-medium mt-1 flex items-center gap-2">
                    <span className="h-10 w-10">
                      <img
                        src="/images/profile/scwebtech_logo.jpeg"
                        alt=""
                        className="w-full h-full"
                      />
                    </span>
                    <span>{experience?.company}</span>
                  </p>
                </div>
                <div className="text-md text-gray-300">
                  {experience?.duration}
                </div>
              </div>
              <p className="text-lg text-white mt-4">
                {experience?.experience}
              </p>
              <p className="text-gray-300 leading-7 mt-4">
                {experience?.description}
              </p>

              <div className="mt-6">
                <h5 className="font-semibold text-xl mb-3">Responsibilities</h5>
                <ul className="space-y-2">
                  {experience?.responsibilities?.map((item, index) => (
                    <li key={index} className="text-gray-300 flex gap-3">
                      <span className="text-[#08bfff] mt-[7px]">
                        <SiListmonk size={10} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-7 flex flex-wrap gap-2">
                {experience?.technologies?.map((technology) => (
                  <span
                    key={technology}
                    className="px-3 py-1.5 rounded-full text-sm bg-white/10 border border-white/10 text-gray-200"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
