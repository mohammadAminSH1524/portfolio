import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { BsGithub, BsInstagram, BsLinkedin, BsTelegram } from "react-icons/bs";

const Landing = ({ setSelectedPage }) => {
  const isAbove1060 = useMediaQuery("(min-width: 1060px)");
  const isAbove530 = useMediaQuery("(min-width: 530px)");
  return (
    <section
      id="home"
      className="gap-16 py-10 pb-12 md:flex md:h-full md:items-center md:justify-between"
    >
      {/* IMAGE SECTION */}
      <div className="z-10 mt-16 flex basis-3/5 justify-center md:order-2 md:mt-32">
        {isAbove1060 ? (
          <div
            className="relative z-0  ml-20 before:absolute before:-left-20 before:-top-20 before:z-[-1]
            before:h-full before:w-full before:max-w-[400px] before:rounded-t-[400px] before:border-2
             before:border-blue md:before:max-w-[600px]"
          >
            <img
              alt="profile"
              className="z-10 w-full max-w-[400px] rounded-t-[400px] bg-[#fd7fa4] 
                transition    duration-500 hover:filter md:max-w-[600px]"
              src={require("../assets/IMG_6361_prev_ui.png")}
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[400px] rounded-t-[400px] bg-[#fd7fa4] md:max-w-[600px]"
            src={require("../assets/IMG_6361_prev_ui.png")}
          />
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 mt-12 basis-2/5 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div
            className={` ${
              isAbove530 ? "" : "justify-center"
            }  flex items-center gap-4 font-playfair text-6xl `}
          >
            {isAbove530 ? <p>Mohammad</p> : <p>M</p>}
            <p className="">Amin</p>
          </div>

          <p className="mb-7 mt-10  text-justify  ">
            Born in the summer of 2003, I always seek to improve and now I work
            in the field of website design and development. Trying to improve is
            one of my characteristics that made me enter the web world because
            the web space has no end and there is always room for further
            development.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="mt-5 flex justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="rounded-sm bg-gradient-rainblue px-7 py-3 font-semibold text-deep-blue
              transition duration-500 hover:bg-blue hover:text-white"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>

          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="flex h-full w-full items-center justify-center bg-deep-blue px-10 font-playfair transition duration-500 hover:text-red">
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="mt-5 flex justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {/* SocialMediaIcons  */}
          <div className="my-10 flex justify-center gap-7 md:justify-start">
            <a
              className="text-3xl  transition duration-500 hover:opacity-50"
              href="https://github.com/mohammadAminSH1524"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
            {/*  */}
            <a
              className="text-3xl  transition duration-500 hover:opacity-50"
              href="https://www.linkedin.com/in/m-aminshavandi/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin />
            </a>
            {/*  */}
            <a
              className="text-3xl  transition duration-500 hover:opacity-50"
              href="https://t.me/Svnd152"
              target="_blank"
              rel="noreferrer"
            >
              <BsTelegram />
            </a>
            {/*  */}
            <a
              className="text-3xl  transition duration-500 hover:opacity-50"
              href="https://instagram.com/m_amin_shavandi82?igshid=MzNlNGNkZWQ4Mg==/"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
