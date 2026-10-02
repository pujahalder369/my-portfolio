import "../common.css";
import Background from "../../components/Background/Background";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const Hero = ({ data }) => {
  const roles = useMemo(
    () => ["Frontend Developer", "React.js Developer", "Web Developer"],
    [],
  );
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[index];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayedText < currentRole.length) {
            setDisplayedText((prev) => prev + 1);
          } else {
            setIsDeleting(true);
          }
        } else {
          if (displayedText > 0) {
            setDisplayedText((prev) => prev - 1);
          } else {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : displayedText === currentRole.length ? 1200 : 80,
    );
    return () => clearTimeout(timeout);
  }, [isDeleting, index, roles, displayedText]);

  return (
    <section id="home" className="w-full h-full bg-black overflow-hidden pt-[75px]">
      <Background />
      <div className="insert-0 absolute">
        <div className="absolute -top-32 -left-32 h-[70vh] w-[70vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-10 blur-[150px] animate-pulse"></div>
      </div>
      <div className="grid lg:grid-cols-2 justify-center gap-4 md:gap-8 text-center lg:text-left items-center !pt-12 lg:!pt-26 container relative z-20">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="text-white text-[16px] lg:text-[20px] font-semibold mb-2 lg:mb-4 capitalize">
            <span>{roles[index].slice(0, displayedText)}</span>
            <span className="animate-pulse"> |</span>
          </div>
          <h1 className="mb-3">
            <span className="h1">Hello, I'm</span> {data?.name}
          </h1>
          <p>{data?.description}</p>

          <div className="flex gap-2 lg:gap-4 items-center justify-center lg:justify-start mt-6">
            <a href={data.hireLink} className="btn primaryBtn">
              Hire Me
            </a>
            <a href={data.resumeLink} className="btn tranfarateBtn">
              My Resume
            </a>
          </div>
          <div className="flex gap-2 items-center justify-center lg:justify-start mt-4 md:mt-6">
            {data?.socialLinks?.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item?.name}
                  href={item?.link}
                  target="_blank"
                  aria-label={item?.name}
                  className="rounded-full p-2 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)]"
                >
                  <Icon size={26} />
                </a>
              );
            })}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center"
        >
          <img
            src={data?.profileImage}
            alt="profile-image"
            className="h-[100%] w-[300px] lg:w-[450px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
