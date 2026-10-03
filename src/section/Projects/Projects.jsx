import { GrShare } from "react-icons/gr";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";

const Projects = ({ data }) => {
  return (
    <section
      id="projects"
      className="w-full container relative z-30 !pt-8 lg:!pt-22"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-full text-center"
      >
        <h3 className="font-semibold text-3xl md:text-5xl mb-1 md:mb-3">
          Projects
        </h3>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="mt-10"
      >
        <Swiper
          modules={[Autoplay]}
          loop={true}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },

            768: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 3,
            },
          }}
          className="projectsSwiper"
        >
          {data?.map((project) => (
            <SwiperSlide key={project?.id}>
              <div className="bg-white/5 backdrop-blur-md rounded-xl overflow-hidden h-full">
                <div className="h-[250px] overflow-hidden">
                  <a href={project?.liveLink} target="_blank">
                    <img
                      src={project?.image}
                      alt={project?.title}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </a>
                </div>
                <div className="p-6 pb-8">
                  <h4 className="font-semibold text-xl md:text-2xl mb-1 hover:text-[#4d70ff] transition-all duration-300">
                    <a href={project?.liveLink} target="_blank">
                      {project?.title}
                    </a>
                  </h4>
                  <p className="text-gray-300 text-[14px] md:text-[16px]">
                    {project?.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project?.technologies?.map((technology) => (
                      <div
                        key={technology}
                        className="px-3 py-1.5 rounded-full text-sm bg-white/10 border border-white/10 text-gray-200"
                      >
                        {technology}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-2 border-t border-white/20">
                    <a
                      href={project?.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex gap-3 items-center hover:text-[#4d70ff] transition-all duration-300"
                    >
                      <GrShare />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Projects;
