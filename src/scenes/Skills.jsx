import LineGradient from "../components/LineGradient";

import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript, SiRedux, SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { BsGit } from "react-icons/bs";

const MySkills = () => {
  const isAbove1060 = useMediaQuery("(min-width: 1060px)");

  const strokeOffsetCalc = (percent) => {
    return 440 - (440 * percent) / 100;
  };
  const dotRotateCalc = (percent) => {
    return `${3.6 * percent}deg`;
  };

  return (
    <section id="skills" className="h-full pb-24 pt-10">
      {/* HEADER AND IMAGE SECTION */}
      <div className="mb-12 mt-20 md:flex md:justify-between md:gap-16">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="mb-5 font-playfair text-4xl font-semibold">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/2" />
        </motion.div>
      </div>

      {/* SKILLS */}

      <motion.div className="flex flex-col gap-x-8 gap-y-8 m:grid m:grid-cols-2 xlg:grid-cols-3 xxl:grid-cols-4 ">
        {/* HTML */}
        <div
          className="flex flex-col items-center  gap-y-8
          rounded-xl border-2 border-[#d8472383] p-4 shadow-2xl "
        >
          <div className="flex w-full  items-center justify-between md:px-8 lg:px-16  xlg:px-0 ">
            <div className="PERRCENT relative h-[150px] w-[150px] ">
              <div
                style={{
                  "--strokeColor": "#d84823",
                  "--rotateDeg": dotRotateCalc(95),
                }}
                className="dot"
              ></div>
              <svg className="relative h-[150px] w-[150px] -rotate-90">
                <circle
                  className="h-full w-full  translate-x-[5px] translate-y-[5px] fill-transparent stroke-[#191919] stroke-[2]"
                  cx="70"
                  cy="70"
                  r="70"
                ></circle>
                <circle
                  style={{
                    "--stroke-dashoffset": strokeOffsetCalc(95),
                    "--strokeColor": "#d84823",
                  }}
                  className="second-circle h-full w-full translate-x-[5px] translate-y-[5px] fill-transparent
                  stroke-[2] "
                  cx="70"
                  cy="70"
                  r="70"
                ></circle>
              </svg>
              <div className="number absolute inset-0 flex items-center justify-center text-3xl ">
                95%
              </div>
            </div>
            <div className="flex  items-center gap-1.5 xlg:w-full xlg:justify-center">
              <span className="text-[22px]">HTML</span>
              <span className="h-6 w-6 pt-0.5 text-2xl text-[#d84823]">
                <AiFillHtml5 />
              </span>
            </div>
          </div>

          <p className="hidden px-2 text-justify xlg:block">
            <span className="font-opensans font-semibold text-[#d84823] ">
              HTML
            </span>{" "}
            is the first thing I learned and still use to build web pages with
            it .
          </p>
        </div>
        {/* CSS */}
        <div
          className="flex flex-col items-center  gap-y-8 rounded-xl border-2
          border-[#2448d885] p-4 shadow-2xl "
        >
          <div className="flex w-full items-center justify-between md:px-8 lg:px-16  xlg:px-0 ">
            <div className="PERRCENT relative h-[150px] w-[150px] ">
              <div
                style={{
                  "--strokeColor": "#2449d8",
                  "--rotateDeg": dotRotateCalc(90),
                }}
                className="dot"
              ></div>
              <svg className="relative h-[150px] w-[150px] -rotate-90">
                <circle
                  className="h-full w-full  translate-x-[5px] translate-y-[5px] fill-transparent stroke-[#191919] stroke-[2]"
                  cx="70"
                  cy="70"
                  r="70"
                ></circle>
                <circle
                  style={{
                    "--stroke-dashoffset": strokeOffsetCalc(90),
                    "--strokeColor": "#2449d8",
                  }}
                  className="second-circle h-full w-full translate-x-[5px] translate-y-[5px] fill-transparent
                  stroke-[2] "
                  cx="70"
                  cy="70"
                  r="70"
                ></circle>
              </svg>
              <div className="number absolute inset-0 flex items-center justify-center text-3xl ">
                90%
              </div>
            </div>
            <div className="flex items-center gap-1.5 xlg:w-full xlg:justify-center">
              <span className="text-[22px]">CSS</span>
              <span className="w-6 pt-0.5 text-2xl text-[#2449d8]">
                <IoLogoCss3 />
              </span>
            </div>
          </div>

          <p className="hidden px-2 text-justify xlg:block">
            <span className="font-opensans font-semibold text-[#2449d8]">
              Css
            </span>{" "}
            is a language that help me to make my html pages pretty. I used pure{" "}
            <span className="font-opensans font-semibold text-[#2449d8]">
              Css
            </span>{" "}
            without any framework to style my online store project named mobino
          </p>
        </div>
        {/* JAVA SCRIPT */}
        <div
          className="flex flex-col items-center gap-y-8 rounded-xl border-2 
           border-[#ead51c80] p-4 shadow-2xl "
        >
          <div className="flex w-full items-center justify-between md:px-8 lg:px-16  xlg:px-0 ">
            <div className="PERRCENT relative h-[150px] w-[150px] ">
              <div
                style={{
                  "--strokeColor": "#ead41c",
                  "--rotateDeg": dotRotateCalc(85),
                }}
                className="dot"
              ></div>
              <svg className="relative h-[150px] w-[150px] -rotate-90">
                <circle
                  className="h-full w-full  translate-x-[5px] translate-y-[5px] fill-transparent stroke-[#191919] stroke-[2]"
                  cx="70"
                  cy="70"
                  r="70"
                ></circle>
                <circle
                  style={{
                    "--stroke-dashoffset": strokeOffsetCalc(85),
                    "--strokeColor": "#ead41c",
                  }}
                  className="second-circle h-full w-full translate-x-[5px] translate-y-[5px] fill-transparent
                  stroke-[2] "
                  cx="70"
                  cy="70"
                  r="70"
                ></circle>
              </svg>
              <div className="number absolute inset-0 flex items-center justify-center text-3xl ">
                85%
              </div>
            </div>
            <div className="flex items-center gap-1.5 xlg:w-full xlg:justify-center">
              <span className="text-[22px]">JAVA SCRIPT</span>
              <span className="w-6 pt-0.5 text-2xl text-[#ead41c]">
                <SiJavascript />
              </span>
            </div>
          </div>

          <p className="hidden px-2 text-justify xlg:block">
            I used to develop my project with pure{" "}
            <span className="font-opensans font-semibold text-[#ead41c]">
              JS
            </span>{" "}
            but nowdays i use react framework to develop my projects
          </p>
        </div>
        {/* REACT */}
        <div
          className="flex flex-col items-center  gap-y-8 rounded-xl border-2
           border-[#5dcfef8d] p-4 shadow-2xl "
        >
          <div className="flex w-full items-center justify-between md:px-8 lg:px-16  xlg:px-0 ">
            <div className="PERRCENT relative h-[150px] w-[150px] ">
              <div
                style={{
                  "--strokeColor": "#5dcfef",
                  "--rotateDeg": dotRotateCalc(75),
                }}
                className="dot"
              ></div>
              <svg className="relative h-[150px] w-[150px] -rotate-90">
                <circle
                  className="h-full w-full  translate-x-[5px] translate-y-[5px] fill-transparent stroke-[#191919] stroke-[2]"
                  cx="70"
                  cy="70"
                  r="70"
                ></circle>
                <circle
                  style={{
                    "--stroke-dashoffset": strokeOffsetCalc(75),
                    "--strokeColor": "#5dcfef",
                  }}
                  className="second-circle h-full w-full translate-x-[5px] translate-y-[5px] fill-transparent
                  stroke-[2] "
                  cx="70"
                  cy="70"
                  r="70"
                ></circle>
              </svg>
              <div className="number absolute inset-0 flex items-center justify-center text-3xl ">
                75%
              </div>
            </div>
            <div className="flex items-center gap-1.5 xlg:w-full xlg:justify-center">
              <span className="text-[22px]">REACT</span>
              <span className="w-6 pt-0.5 text-2xl text-[#5dcfef]">
                <FaReact />
              </span>
            </div>
          </div>

          <p className="hidden px-2 text-justify xlg:block">
            All of my projects are developed with
            <span className="font-opensans font-semibold text-[#5dcfef]">
              {" "}
              React{" "}
            </span>{" "}
            and i use libraries like framer-motion,
            formik,react-icons,toastify,loadash to make projects better.
          </p>
        </div>
        {/* REDUX */}
        <div
          className="flex flex-col items-center  gap-y-8 rounded-xl border-2
          border-[#7145b284] p-4 shadow-2xl "
        >
          <div className="flex w-full items-center justify-between md:px-8 lg:px-16  xlg:px-0 ">
            <div className="PERRCENT relative h-[150px] w-[150px] ">
              <div
                style={{
                  "--strokeColor": "#7045b2",
                  "--rotateDeg": dotRotateCalc(60),
                }}
                className="dot"
              ></div>
              <svg className="relative h-[150px] w-[150px] -rotate-90">
                <circle
                  className="h-full w-full  translate-x-[5px] translate-y-[5px] fill-transparent stroke-[#191919] stroke-[2]"
                  cx="70"
                  cy="70"
                  r="70"
                ></circle>
                <circle
                  style={{
                    "--stroke-dashoffset": strokeOffsetCalc(60),
                    "--strokeColor": "#7045b2",
                  }}
                  className="second-circle h-full w-full translate-x-[5px] translate-y-[5px] fill-transparent
                  stroke-[2] "
                  cx="70"
                  cy="70"
                  r="70"
                ></circle>
              </svg>
              <div className="number absolute inset-0 flex items-center justify-center text-3xl ">
                60%
              </div>
            </div>
            <div className="flex items-center gap-1.5 xlg:w-full xlg:justify-center">
              <span className="text-[22px]">REDUX</span>
              <span className="w-6 pt-0.5 text-2xl text-[#7045b2]">
                <SiRedux />
              </span>
            </div>
          </div>

          <p className="hidden px-2 text-justify xlg:block">
            I choose{" "}
            <span className="font-opensans font-semibold text-[#7045b2]">
              Redux
            </span>{" "}
            for state-management in some of my projects like mobino and i use
            context in dashboard
          </p>
        </div>
        {/* GIT */}
        <div
          className="flex flex-col items-center  gap-y-8 rounded-xl border-2
           border-[#e44c3084] p-4 shadow-2xl "
        >
          <div className="flex w-full items-center justify-between md:px-8 lg:px-16  xlg:px-0 ">
            <div className="PERRCENT relative h-[150px] w-[150px] ">
              <div
                style={{
                  "--strokeColor": "#e44c30",
                  "--rotateDeg": dotRotateCalc(70),
                }}
                className="dot"
              ></div>
              <svg className="relative h-[150px] w-[150px] -rotate-90">
                <circle
                  className="h-full w-full  translate-x-[5px] translate-y-[5px] fill-transparent stroke-[#191919] stroke-[2]"
                  cx="70"
                  cy="70"
                  r="70"
                ></circle>
                <circle
                  style={{
                    "--stroke-dashoffset": strokeOffsetCalc(70),
                    "--strokeColor": "#e44c30",
                  }}
                  className="second-circle h-full w-full translate-x-[5px] translate-y-[5px] fill-transparent
                  stroke-[2] "
                  cx="70"
                  cy="70"
                  r="70"
                ></circle>
              </svg>
              <div className="number absolute inset-0 flex items-center justify-center text-3xl ">
                70%
              </div>
            </div>
            <div className="flex items-center gap-1.5 xlg:w-full xlg:justify-center">
              <span className="text-[22px]">GIT</span>
              <span className="w-6 pt-0.5 text-2xl text-[#e44c30]">
                <BsGit />
              </span>
            </div>
          </div>

          <p className="hidden px-2 text-justify xlg:block">
            I use{" "}
            <span className="font-opensans font-semibold text-[#e44c30]">
              Git
            </span>{" "}
            for more than a 6 month and git is far better than its competitors.
          </p>
        </div>
        {/* MATERIAL UI  */}
        <div
          className="flex flex-col items-center  gap-y-8 rounded-xl border-2
          border-[#0079f284] p-4 shadow-2xl "
        >
          <div className="flex w-full items-center justify-between md:px-8 lg:px-16  xlg:px-0 ">
            <div className="PERRCENT relative h-[150px] w-[150px] ">
              <div
                style={{
                  "--strokeColor": "#0079f2",
                  "--rotateDeg": dotRotateCalc(65),
                }}
                className="dot"
              ></div>
              <svg className="relative h-[150px] w-[150px] -rotate-90">
                <circle
                  className="h-full w-full  translate-x-[5px] translate-y-[5px] fill-transparent stroke-[#191919] stroke-[2]"
                  cx="70"
                  cy="70"
                  r="70"
                ></circle>
                <circle
                  style={{
                    "--stroke-dashoffset": strokeOffsetCalc(65),
                    "--strokeColor": "#0079f2",
                  }}
                  className="second-circle h-full w-full translate-x-[5px] translate-y-[5px] fill-transparent
                  stroke-[2] "
                  cx="70"
                  cy="70"
                  r="70"
                ></circle>
              </svg>
              <div className="number absolute inset-0 flex items-center justify-center text-3xl ">
                65%
              </div>
            </div>
            <div className="flex items-center gap-1 xlg:w-full xlg:justify-center">
              <span className="text-[22px]">MATERIAL UI</span>
              <span className="w-8 pt-0.5 text-2xl text-[#0079f2]">
                <img
                  src={require("../assets/tailwindLogo.png")}
                  alt="tailwind-logo"
                />
              </span>
            </div>
          </div>

          <p className="hidden px-2 text-justify xlg:block">
            <span className="font-opensans font-semibold text-[#0079f2]">
              MUI
            </span>{" "}
            is an open-source React component library that implements Google's
            Material Design.I use{" "}
            <span className="font-opensans font-semibold text-[#0079f2]">
              MUI
            </span>{" "}
            in Dashboard project
          </p>
        </div>
        {/* TAILWIND CSS */}
        <div
          className="flex flex-col items-center  gap-y-8 rounded-xl border-2
           border-[#13b5b084] p-4 shadow-2xl "
        >
          <div className="flex w-full items-center justify-between md:px-8 lg:px-16  xlg:px-0 ">
            <div className="PERRCENT relative h-[150px] w-[150px] ">
              <div
                style={{
                  "--strokeColor": "#13b5b0",
                  "--rotateDeg": dotRotateCalc(75),
                }}
                className="dot"
              ></div>
              <svg className="relative h-[150px] w-[150px] -rotate-90">
                <circle
                  className="h-full w-full  translate-x-[5px] translate-y-[5px] fill-transparent stroke-[#191919] stroke-[2]"
                  cx="70"
                  cy="70"
                  r="70"
                ></circle>
                <circle
                  style={{
                    "--stroke-dashoffset": strokeOffsetCalc(75),
                    "--strokeColor": "#13b5b0",
                  }}
                  className="second-circle h-full w-full translate-x-[5px] translate-y-[5px] fill-transparent
                  stroke-[2] "
                  cx="70"
                  cy="70"
                  r="70"
                ></circle>
              </svg>
              <div className="number absolute inset-0 flex items-center justify-center text-3xl ">
                75%
              </div>
            </div>
            <div className="flex items-center gap-1.5 xlg:w-full xlg:justify-center">
              <span className="text-[22px]">TAILWIND</span>
              <span className="w-6 pt-0.5 text-2xl text-[#13b5b0]">
                <SiTailwindcss />
              </span>
            </div>
          </div>

          <p className="hidden px-2 text-justify xlg:block">
            <span className="font-opensans font-semibold text-[#13b5b0] ">
              Tailwind
            </span>{" "}
            is one of the Css frameworks that I recently got to know, and if you
            want to see its effect, you should know that the Css of this project
            was developed with{" "}
            <span className="font-opensans font-semibold text-[#13b5b0] ">
              Tailwind.
            </span>
          </p>
        </div>
        {/*  */}
      </motion.div>
    </section>
  );
};

export default MySkills;
