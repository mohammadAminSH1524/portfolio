import { BsGithub, BsInstagram, BsLinkedin, BsTelegram } from "react-icons/bs";


const Footer = () => {
  return (
    <footer className="h-64 bg-red pt-10">
      <div className="mx-auto w-10/12">
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
        <div className="justify-center text-center md:flex md:justify-between ">
          <p className="font-playfair text-2xl font-semibold text-yellow">
            MOHAMMAD AMIN
          </p>
          <p className="text-md font-playfair text-yellow">
            ©2023 AMIN. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
