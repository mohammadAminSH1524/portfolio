import { useFormik } from "formik";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import * as yup from "yup";
const validationSchema = yup.object().shape({
  name: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  message: yup
    .string()
    .required("message is required")
    .max(500, "Max length is 500 char."),
});

const initialValues = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log("on submit", values);
    },
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  return (
    <section id="contact" className="contact py-48">
      {/* HEADINGS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex w-full justify-end"
      >
        <div>
          <p className="font-playfair text-4xl font-semibold">
            <span className="text-yellow">CONTACT ME</span> TO GET STARTED
          </p>
          <div className="my-5 flex md:justify-end">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>

      {/* FORM & IMAGE */}
      <div className="mt-5 gap-16 md:flex md:justify-between">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="flex basis-1/2 justify-center"
        >
          <img src={require("../assets/contact-image.jpeg")} alt="contact" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mt-10 basis-1/2 md:mt-0"
        >
          <form
            target="_blank"
            action="https://formsubmit.co/harrywill1524@mailfa.com"
            method="POST"
            // onSubmit={formik.handleSubmit}
          >
            <input
              name="name"
              className=" w-full bg-blue p-3 font-semibold placeholder-opaque-black"
              type="text"
              placeholder="NAME"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.touched.name && formik.errors.name && (
              <p className="mt-1 text-red">{formik.errors.name}</p>
            )}

            <input
              name="email"
              className="mt-4 w-full bg-blue p-3 font-semibold placeholder-opaque-black"
              type="text"
              placeholder="EMAIL"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.touched.email && formik.errors.email && (
              <p className="mt-1 text-red">{formik.errors.email}</p>
            )}

            <textarea
              className="mt-5 w-full bg-blue p-3 font-semibold placeholder-opaque-black"
              name="message"
              placeholder="MESSAGE"
              rows="4"
              cols="50"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.touched.message && formik.errors.message && (
              <p className="mt-1 text-red">{formik.errors.message}</p>
            )}
            <button
              // disabled={!formik.isValid}
              className="mt-5 bg-yellow p-5 font-semibold text-deep-blue transition duration-500 hover:cursor-pointer hover:bg-red hover:text-white"
              type="submit"
            >
              SEND ME A MESSAGE
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
