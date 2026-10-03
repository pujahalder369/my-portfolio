import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";

const Skills = ({ data }) => {
  return (
    <section id="skills" className="w-full">
      <div className="!pt-12 lg:!pt-26">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full text-center container"
        >
          <h3 className="font-semibold text-3xl md:text-5xl mb-1 md:mb-3">
            {data?.title}
          </h3>
          <p className="text-gray-300 text-[14px] md:text-[16px]">
            {data?.subtitle}
          </p>
        </motion.div>
        <div className="full flex items-center gap-12 mt-10">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            slidesPerView="auto"
            spaceBetween={40}
            speed={3000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            allowTouchMove={false}
            className="skillsSwiper"
          >
            {data?.selfSkills?.map((skill, index) => {
              const Icon = skill?.icon;

              return (
                <SwiperSlide key={`${skill.name}-${index}`} className="!w-[100px] sm:!w-[130px] mr-0! sm:mr-[10px]!">
                  <div className="flex flex-col items-center justify-center gap-3 text-center">
                    <Icon className="text-4xl sm:text-5xl lg:text-6xl" />

                    <p className="uppercase text-[15px] sm:text-[16px] sm:font-medium whitespace-nowrap">
                      {skill?.name}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Skills;
