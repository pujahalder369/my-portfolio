
const Footer = ({ data }) => {
  return (
    <footer className="w-full bg-white/10 backdrop-blur-md relative z-30">
      <div className="!pt-12 lg:!pt-22 !pb-6 lg:!pb-10 container text-center">
        <div>
          <h3 className="font-semibold text-3xl md:text-5xl capitalize mb-4">
            {data?.name}
          </h3>
          <div className="w-full flex gap-4 items-center justify-center my-4 md:my-6">
            {data?.socialLinks?.map((social, index) => {
              const Icon = social?.icon;
              return (
                <a
                  key={`${social?.name}-${index}`}
                  href={social?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social?.name}
                  className="rounded-full border border-white/15 p-2.5 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)]"
                >
                  <Icon size={26} />
                </a>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-12 items-center justify-center">
            {data?.contact?.map((item, index) => {
              const Icon = item?.icon;

              return (
                <a
                  key={`${item?.type}-${index}`}
                  href={item?.link}
                  className="flex gap-2 items-center hover:text-[#4d70ff] transition-all duration-300"
                >
                  <span>
                    <Icon size={18} />
                  </span>

                  <span>{item?.text}</span>
                </a>
              );
            })}
          </div>
        </div>
        <div className="w-full border-t border-white/10 mt-5 text-[15px]">
          <p className="mt-5 text-gray-400">
            © 2026{" "}
            <a
              href="/"
              className="font-semibold hover:text-[#4d70ff] transition-all duration-300"
            >
              Puja Halder
            </a>{" "}
            | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
