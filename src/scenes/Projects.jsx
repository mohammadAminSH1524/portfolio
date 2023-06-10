import { useState } from "react";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Projects = () => {
  const [isMobino, setIsMobino] = useState(true);
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

  return (
    <section id="projects" className="pb-48 pt-40">
      {/* HEADINGS */}
      <motion.div
        className="mx-auto text-center ss:w-4/5 m:w-[70%] xlg:w-1/2 xl:w-2/5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair text-4xl font-semibold">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="mt-5 flex justify-center">
            <LineGradient width="w-2/3" />
          </div>
        </div>

        <div className="mx-auto mb-10 mt-10 flex w-2/3 items-center justify-between text-xl">
          <button onClick={() => setIsMobino(!isMobino)}>
            <div className="mb-1">
              <span style={isMobino ? { color: "#DC4492" } : {}}>M</span>obino
            </div>
            {isMobino ? (
              <div>
                <LineGradient />
              </div>
            ) : (
              <div className="h-0.5 bg-white"></div>
            )}
          </button>

          <button onClick={() => setIsMobino(!isMobino)}>
            <div className="mb-1">
              <span style={!isMobino ? { color: "#DC4492" } : {}}>D</span>
              ashboard
            </div>
            {!isMobino ? (
              <div>
                <LineGradient />
              </div>
            ) : (
              <div className="h-0.5 bg-white"></div>
            )}
          </button>
        </div>
      </motion.div>
      {/* PROJECTS 1-mobono 2-dashboard */}

      {isMobino ? (
        <div className="flex flex-1 justify-center ">
          <motion.div
            className="m:grid m:grid-cols-2 md:grid-cols-3 "
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Item 1  ___ BEAUTIFUL USER INTERFACES*/}
            <div
              className="flex  max-h-[400px] max-w-[400px] items-center justify-center bg-red
              p-10 text-center font-playfair text-2xl font-semibold"
            >
              BEAUTIFUL USER INTERFACES
            </div>

            {/* ITEM 2 ___ MOBINO HOMEPAGE */}

            <motion.div variants={projectVariant} className="relative">
              <div className={overlayStyles}>
                <p className="font-playfair text-2xl">Home page</p>
                <p className="mt-7">
                  Main page of the project . you can see suggested products in
                  here.
                </p>
              </div>
              <img
                className=" w-[400px]"
                src={require("../assets/mobino/mobino-homepage.png")}
                alt="mobino-homepage"
              />
            </motion.div>

            {/* ITEM 3 ___  MOBINO PRODUCTS*/}
            <motion.div variants={projectVariant} className="relative">
              <div className={overlayStyles}>
                <p className="font-playfair text-2xl">Products page</p>
                <p className="mt-7">
                  This is Products page . here you can see all of the products.
                </p>
              </div>
              <img
                className=" w-[400px]"
                src={require("../assets/mobino/mobino-products.png")}
                alt="mobino-products"
              />
            </motion.div>
            {/* ITEM 4 ___ MOBINO SINGLE-PRODUCT */}
            <motion.div variants={projectVariant} className="relative">
              <div className={overlayStyles}>
                <p className="font-playfair text-2xl">SingleProduct page</p>
                <p className="mt-7">
                  SingleProduct page , you can see a product with all of its
                  specifications and detail.
                </p>
              </div>
              <img
                className=" w-[400px]"
                src={require("../assets/mobino/mobino-singleproduct.png")}
                alt="mobino-singleProduct"
              />
            </motion.div>
            {/* ITEM 5 ___ MOBINO FOOTR SECTION */}
            <motion.div variants={projectVariant} className="relative">
              <div className={overlayStyles}>
                <p className="font-playfair text-2xl">Footer section</p>
                <p className="mt-7">
                  Footer section of an online store which is present on all
                  pages.
                </p>
              </div>
              <img
                className=" w-[400px]"
                src={require("../assets/mobino/mobino-footer.png")}
                alt="mobino-homepage"
              />
            </motion.div>
            {/* ITEM 6 ___ MOBINO CART PAGE */}
            <motion.div variants={projectVariant} className="relative">
              <div className={overlayStyles}>
                <p className="font-playfair text-2xl">Cart page</p>
                <p className="mt-7">Cart page for order completion</p>
              </div>
              <img
                className=" w-[400px]"
                src={require("../assets/mobino/mobino-cart.png")}
                alt="mobino-cartPage"
              />
            </motion.div>
            {/* ITEM 7 ___ MOBINO EMPTY CART PAGE  */}
            <motion.div variants={projectVariant} className="relative">
              <div className={overlayStyles}>
                <p className="font-playfair text-2xl">EmptyCart page</p>
                <p className="mt-7">
                  EmptyCart page is shown when the shopping cart is empty
                </p>
              </div>
              <img
                className=" w-[400px]"
                src={require("../assets/mobino/mobino-emptycart.png")}
                alt="EmptyCart-page"
              />
            </motion.div>
            {/* ITEM 8 ___ MOBINO NOTFOUND PAGE */}
            <motion.div variants={projectVariant} className="relative">
              <div className={overlayStyles}>
                <p className="font-playfair text-2xl">Notfound page</p>
                <p className="mt-7">
                  Notfound page is shown when the url in wrong
                </p>
              </div>
              <img
                className=" w-[400px]"
                src={require("../assets/mobino/mobino-notfound.png")}
                alt="mobino-homepage"
              />
            </motion.div>

            {/* ITEM 9 ___ SMOOTH USER EXPERIENCE */}
            <div
              className=" flex max-h-[400px] max-w-[400px] items-center justify-center bg-blue p-10 text-center
              font-playfair text-2xl font-semibold m:hidden md:flex"
            >
              SMOOTH USER EXPERIENCE
            </div>
          </motion.div>
        </div>
      ) : (
        <div className="flex justify-center">
          <motion.div
            className="m:grid m:grid-cols-2 md:grid-cols-3 "
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Item 1  ___ BEAUTIFUL USER INTERFACES*/}
            <div
              className="flex  max-h-[400px] max-w-[400px] items-center justify-center bg-red
              p-10 text-center font-playfair text-2xl font-semibold"
            >
              BEAUTIFUL USER INTERFACES
            </div>

            {/* ITEM 2 ___ DASHBOARD HOMEPAGE */}

            <motion.div variants={projectVariant} className="relative">
              <div className={overlayStyles}>
                <p className="font-playfair text-2xl">Home page</p>
                <p className="mt-7">
                  Main page of the project . you can see summary of all things
                  in here.
                </p>
              </div>
              <img
                className=" w-[400px]"
                src={require("../assets/dashboard/dashboard-home.png")}
                alt="dashboard-homepage"
              />
            </motion.div>

            {/* ITEM 3 ___  DASHBOARD AUTH*/}
            <motion.div variants={projectVariant} className="relative">
              <div className={overlayStyles}>
                <p className="font-playfair text-2xl">Create user page</p>
                <p className="mt-7">
                  Create user page. developed to create a new user with valid
                  information.
                </p>
              </div>
              <img
                className=" w-[400px]"
                src={require("../assets/dashboard/dashboard-auth.png")}
                alt="dashboard-createUser"
              />
            </motion.div>
            {/* ITEM 4 ___ DASHBOARD FAQ */}
            <motion.div variants={projectVariant} className="relative">
              <div className={overlayStyles}>
                <p className="font-playfair text-2xl">FAQ page</p>
                <p className="mt-7">
                  Frequently asked questions page for answer common questions.
                </p>
              </div>
              <img
                className=" w-[400px]"
                src={require("../assets/dashboard/dashboard-faq.png")}
                alt="dashboard-faq"
              />
            </motion.div>
            {/* ITEM 5 ___ DASHBOARD BARCHART */}
            <motion.div variants={projectVariant} className="relative">
              <div className={overlayStyles}>
                <p className="font-playfair text-2xl">Bar chart</p>
                <p className="mt-7">
                  Bar chart which can display multiple data series, stacked or
                  side by side.
                </p>
              </div>
              <img
                className=" w-[400px]"
                src={require("../assets/dashboard/dashboard-barchart.png")}
                alt="dashboard-barchart"
              />
            </motion.div>
            {/* ITEM 6 ___ DASHBOARD LINECHART */}
            <motion.div variants={projectVariant} className="relative">
              <div className={overlayStyles}>
                <p className="font-playfair text-2xl">Line chart</p>
                <p className="mt-7">Line chart with stacking ability.</p>
              </div>
              <img
                className=" w-[400px]"
                src={require("../assets/dashboard/dashboard-linechart.png")}
                alt="dashboard-linechart"
              />
            </motion.div>
            {/* ITEM 7 ___ DASHBOARD PIECHART  */}
            <motion.div variants={projectVariant} className="relative">
              <div className={overlayStyles}>
                <p className="font-playfair text-2xl">Pie chart</p>
                <p className="mt-7">
                  Pie chart for displaying information .well suited for large
                  data sets
                </p>
              </div>
              <img
                className=" w-[400px]"
                src={require("../assets/dashboard/dashboard-piechart.png")}
                alt="dashboard-piechart"
              />
            </motion.div>
            {/* ITEM 8 ___ DASHBOARD GEOCHART */}
            <motion.div variants={projectVariant} className="relative">
              <div className={overlayStyles}>
                <p className="font-playfair text-2xl">Geo chart</p>
                <p className="mt-7">
                The Choropleth component displays divided geographical areas shaded in relation to some data variable.
                </p>
              </div>
              <img
                className=" w-[400px]"
                src={require("../assets/dashboard/dashboard-geochart.png")}
                alt="dashboard-geochart"
              />
            </motion.div>

            {/* ITEM 9 ___ SMOOTH USER EXPERIENCE */}
            <div
              className=" flex max-h-[400px] max-w-[400px] items-center justify-center bg-blue p-10 text-center
              font-playfair text-2xl font-semibold m:hidden md:flex"
            >
              SMOOTH USER EXPERIENCE
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Projects;
