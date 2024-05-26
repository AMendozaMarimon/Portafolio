import { useSelector } from "react-redux";
import ContentTexts from "./contentTexts";
import Congress from "../../assets/imgs/Congress.webp";
import AwaqLogo from "../../assets/imgs/AwaqLogo.webp";
import HenryLogo from "../../assets/imgs/Henry.webp";
import CatBio from "../../assets/imgs/CatBio.webp";
import VehiBuy from "../../assets/imgs/VehiBuy.webp";
import food from "../../assets/imgs/food..webp";
import RaM from "../../assets/imgs/RaM.webp";
import Ant_Port from "../../assets/imgs/Ant_PortFolio.webp";
import NewP from "../../assets/imgs/NewP.webp";
import { FaGithub } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiReact } from "react-icons/di";
import { SiRedux } from "react-icons/si";
import { FaNode } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import { BsFillLightningChargeFill } from "react-icons/bs";

// Define el tipo del estado
interface AppState {
  idiom: keyof typeof ContentTexts;
  darkMode: boolean;
}

export default function Projects() {
  // Obtener el idioma del estado
  const idiom = useSelector((state: AppState) => state.idiom);

  // Obtener el modo oscuro del estado
  const darkMode = useSelector((state: AppState) => state.darkMode);

  // Accedo al contenido del idioma
  const content = ContentTexts[idiom];

  return (
    <section
      className={`flex flex-col relative lg:justify-between lg:flex-row relative px-11 md:px-24 py-32 justify-center  gap-20 ${
        darkMode ? "dark" : ""
      } transition-colors duration-200 dark:bg-gray-800`}
    >
      {/* Contenido de la izquierda */}
      <div className="lg:sticky lg:top-14 w-full h-full lg:w-1/2">
        {/* Título */}
        <h2 className="text-5xl font-telegraf mb-12 text-balance text-center lg:text-left lg:text-6xl">
          <span className="dark:text-white">{content?.title.first}</span> <br />
          <span className="italic font-bold text-pinkMain">
            {content?.title.second}
          </span>
        </h2>
        {/* Descripción */}
        <p className="font-garet text-lg dark:text-white">
          {content?.description}
        </p>
      </div>
      {/* Contenido de la derecha */}
      <div className="flex flex-col justify-center items-center w-full gap-10 lg:w-1/2">
        {/* --------- Card Congress --------- */}
        <div
          className="w-full lg:w-3/4 h-auto rounded-lg shadow-md overflow-hidden"
          data-aos="fade-up"
        >
          {/* Icono de Awaq */}
          <div className="flex flex-col gap-3 absolute z-10 top-4 right-4">
            <a href="https://es.linkedin.com/company/awaq-ongd" target="_blank">
              <button className="bg-white p-1 rounded-full shadow-lg transition duration-300 ease-in-out hover:scale-125">
                <img
                  className="w-7 h-7 rounded-full"
                  src={AwaqLogo}
                  alt={AwaqLogo}
                  draggable="false"
                  loading="lazy"
                />
              </button>
            </a>
          </div>
          {/* Imagen de Congress */}
          <div className="w-full h-[15rem] bg-grayMain dark:bg-gray-700 overflow-hidden">
            <img
              className="w-full h-full object-cover object-center"
              src={Congress}
              alt="Congress..."
              draggable="false"
              loading="lazy"
            />
          </div>
          {/* Texto de Congress */}
          <div className="p-7 bg-white dark:bg-gray-800">
            <p className="font-telegraf text-grayText text-xl text-balance lg:text-left dark:text-textDark">
              {content?.cardCongress.title}
            </p>
            <div className="flex justify-between gap-2 lg:gap-0 items-center pt-5">
              <div className="flex flex-wrap items-center gap-3 text-2xl text-grayText dark:gray-700">
                <BiLogoTypescript className="hover:text-colorTypescript" />
                <DiReact className="hover:text-colorReact" />
                <FaHtml5 className="hover:text-colorHTML" />
                <RiTailwindCssFill className="hover:text-colorTailwind" />
                <FaGitAlt className="hover:text-colorGit" />
                <FaGithub className="hover:text-black" />
              </div>
              {/* Boton de reedirigir */}
              <a href="https://congreso.somosawaq.org/" target="_blank">
                <button className="bg-white p-2 rounded-full border-2 border-black transition duration-300 ease-in-out hover:bg-orangeBoton dark:border-orangeBoton dark:bg-gray-700 dark:hover:bg-orangeBoton dark:text-white dark:hover:text-gray-800">
                  <MdOutlineArrowOutward className="text-2xl" />
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* --------- Card Nuevo Portafolio --------- */}
        <div
          className="w-full lg:w-3/4 h-auto rounded-lg shadow-md overflow-hidden"
          data-aos="fade-up"
        >
          {/* Icono de GitHub */}
          <div className="flex flex-col gap-3 absolute z-10 top-4 right-4">
            <a
              href="https://github.com/AMendozaMarimon/Portafolio"
              target="_blank"
            >
              <button className="bg-white p-1 rounded-full shadow-lg transition duration-300 ease-in-out hover:scale-125">
                <FaGithub className="w-7 h-7" />
              </button>
            </a>
          </div>
          {/* Imagen de Nuevo Portafolio */}
          <div className="w-full h-[15rem] bg-grayMain dark:bg-gray-700 overflow-hidden">
            <img
              className="w-full h-full object-cover object-top"
              src={NewP}
              alt="NewP..."
              draggable="false"
              loading="lazy"
            />
          </div>
          {/* Texto de Nuevo Portafolio */}
          <div className="p-7 bg-white dark:bg-gray-800">
            <p className="font-telegraf text-grayText text-xl text-balance lg:text-left dark:text-textDark pb-5">
              {content?.cardNewP.title}
            </p>
            {/* Alerta de Estado */}
            <p className="flex items-center gap-2 font-garet font-bold italic text-colorWhatsApp">
            <div className="w-2 h-2 rounded-full bg-colorWhatsApp animate-ping"></div>
              {content?.cardNewP.state}
            </p>
            <div className="flex justify-between gap-2 lg:gap-0 pt-5">
              <div className="flex flex-wrap items-center gap-3 text-2xl text-grayText dark:gray-700">
                <BiLogoTypescript className="hover:text-colorTypescript" />
                <DiReact className="hover:text-colorReact" />
                <SiRedux className="hover:text-colorRedux" />
                <FaHtml5 className="hover:text-colorHTML" />
                <RiTailwindCssFill className="hover:text-colorTailwind" />
                <FaGitAlt className="hover:text-colorGit" />
                <FaGithub className="hover:text-black" />
              </div>
              {/* Boton de reedirigir */}
              {/* <a href="https://congreso.somosawaq.org/" target="_blank">
                <button className="bg-white p-2 rounded-full border-2 border-black transition duration-300 ease-in-out hover:bg-orangeBoton dark:border-orangeBoton dark:bg-gray-700 dark:hover:bg-orangeBoton dark:text-white dark:hover:text-gray-800">
                  <MdOutlineArrowOutward className="text-2xl" />
                </button>
              </a> */}
            </div>
          </div>
        </div>
        {/* --------- Card Catálogo Bio --------- */}
        <div
          className="w-full lg:w-3/4 h-auto rounded-lg shadow-md overflow-hidden"
          data-aos="fade-up"
        >
          {/* Icono de Awaq */}
          <div className="flex flex-col gap-3 absolute z-10 top-4 right-4">
            <a href="https://es.linkedin.com/company/awaq-ongd" target="_blank">
              <button className="bg-white p-1 rounded-full shadow-lg transition duration-300 ease-in-out hover:scale-125">
                <img
                  className="w-7 h-7 rounded-full"
                  src={AwaqLogo}
                  alt={AwaqLogo}
                  draggable="false"
                  loading="lazy"
                />
              </button>
            </a>
          </div>
          {/* Imagen de CatBio */}
          <div className="w-full h-[15rem] bg-grayMain dark:bg-gray-700 overflow-hidden">
            <img
              className="w-full h-full object-cover object-top"
              src={CatBio}
              alt="CatBio..."
              draggable="false"
              loading="lazy"
            />
          </div>
          {/* Texto de CatBio */}
          <div className="p-7 bg-white dark:bg-gray-800">
            <p className="font-telegraf text-grayText text-xl text-balance lg:text-left dark:text-textDark pb-5">
              {content?.cardCatBio.title}
            </p>
            {/* Alerta de Desarrollo */}
            <p className="flex items-center gap-2 font-garet font-bold italic text-pinkMain  dark:text-orangeBoton">
              <BsFillLightningChargeFill />
              {content?.cardCatBio.inProcess}
            </p>
            <div className="flex justify-between gap-2 lg:gap-0 pt-5">
              <div className="flex flex-wrap items-center gap-3 text-2xl text-grayText dark:gray-700">
                <BiLogoTypescript className="hover:text-colorTypescript" />
                <DiReact className="hover:text-colorReact" />
                <SiRedux className="hover:text-colorRedux" />
                <FaHtml5 className="hover:text-colorHTML" />
                <RiTailwindCssFill className="hover:text-colorTailwind" />
                <FaGitAlt className="hover:text-colorGit" />
                <FaGithub className="hover:text-black" />
              </div>
              {/* Boton de reedirigir */}
              {/* <a href="https://congreso.somosawaq.org/" target="_blank">
                <button className="bg-white p-2 rounded-full border-2 border-black transition duration-300 ease-in-out hover:bg-orangeBoton dark:border-orangeBoton dark:bg-gray-700 dark:hover:bg-orangeBoton dark:text-white dark:hover:text-gray-800">
                  <MdOutlineArrowOutward className="text-2xl" />
                </button>
              </a> */}
            </div>
          </div>
        </div>
        {/* --------- Card E-Commerce VehiBuy --------- */}
        <div
          className="w-full lg:w-3/4 h-auto rounded-lg shadow-md overflow-hidden"
          data-aos="fade-up"
        >
          {/* Icono de Henry */}
          <div className="flex flex-col gap-3 absolute z-10 top-4 right-4">
            <a
              href="https://www.linkedin.com/posts/aimar-mendoza_fullstackdeveloper-graduaciaejn-desarrolloweb-activity-7113643813323075584-T4PH?utm_source=share&utm_medium=member_desktop"
              target="_blank"
            >
              <button className="bg-white p-1 rounded-full shadow-lg transition duration-300 ease-in-out hover:scale-125">
                <img
                  className="w-7 h-7 rounded-full object-cover"
                  src={HenryLogo}
                  alt={HenryLogo}
                  draggable="false"
                  loading="lazy"
                />
              </button>
            </a>
            {/* Icono de GitHub */}
            <a
              href="https://github.com/GeroPazPapa1/Proyecto-Final-De-La-Graduacion"
              target="_blank"
            >
              <button className="bg-white p-1 rounded-full shadow-lg transition duration-300 ease-in-out hover:scale-125">
                <FaGithub className="w-7 h-7" />
              </button>
            </a>
          </div>
          {/* Imagen de VehiBuy */}
          <div className="w-full h-[15rem] bg-grayMain dark:bg-gray-700 overflow-hidden">
            <img
              className="w-full h-full object-cover object-top"
              src={VehiBuy}
              alt="VehiBuy..."
              draggable="false"
              loading="lazy"
            />
          </div>
          {/* Texto de VehiBuy */}
          <div className="p-7 bg-white dark:bg-gray-800">
            <p className="font-telegraf text-grayText text-xl text-balance lg:text-left dark:text-textDark">
              {content?.cardVehi.title}
            </p>
            <div className="flex justify-between gap-2 lg:gap-0 pt-5">
              <div className="flex flex-wrap items-center gap-3 text-2xl text-grayText dark:gray-700">
                <IoLogoJavascript className="hover:text-colorJavascript" />
                <DiReact className="hover:text-colorReact" />
                <SiRedux className="hover:text-colorRedux" />
                <FaHtml5 className="hover:text-colorHTML" />
                <IoLogoCss3 className="hover:text-colorCSS" />
                <FaNode className="hover:text-colorNode" />
                <SiExpress className="hover:text-black" />
                <BiLogoPostgresql className="hover:text-colorPostgresql" />
                <FaGitAlt className="hover:text-colorGit" />
                <FaGithub className="hover:text-black" />
              </div>
            </div>
          </div>
        </div>
        {/* --------- Card food. --------- */}
        <div
          className="w-full lg:w-3/4 h-auto rounded-lg shadow-md overflow-hidden"
          data-aos="fade-up"
        >
          {/* Icono de Henry */}
          <div className="flex flex-col gap-3 absolute z-10 top-4 right-4">
            <a
              href="https://www.linkedin.com/posts/aimar-mendoza_fullstackdeveloper-graduaciaejn-desarrolloweb-activity-7113643813323075584-T4PH?utm_source=share&utm_medium=member_desktop"
              target="_blank"
            >
              <button className="bg-white p-1 rounded-full shadow-lg transition duration-300 ease-in-out hover:scale-125">
                <img
                  className="w-7 h-7 rounded-full object-cover"
                  src={HenryLogo}
                  alt={HenryLogo}
                  draggable="false"
                  loading="lazy"
                />
              </button>
            </a>
            {/* Icono de GitHub */}
            <a
              href="https://github.com/AMendozaMarimon/API_food_Client/tree/main/Client"
              target="_blank"
            >
              <button className="bg-white p-1 rounded-full shadow-lg transition duration-300 ease-in-out hover:scale-125">
                <FaGithub className="w-7 h-7" />
              </button>
            </a>
          </div>
          {/* Imagen de food. */}
          <div className="w-full h-[15rem] bg-grayMain dark:bg-gray-700 overflow-hidden">
            <img
              className="w-full h-full object-cover object-top"
              src={food}
              alt="food..."
              draggable="false"
              loading="lazy"
            />
          </div>
          {/* Texto de food. */}
          <div className="p-7 bg-white dark:bg-gray-800">
            <p className="font-telegraf text-grayText text-xl text-balance lg:text-left dark:text-textDark">
              {content?.cardfood.title}
            </p>
            <div className="flex justify-between items-center pt-6">
              <div className="flex flex-wrap items-center gap-3 text-2xl text-grayText dark:gray-700">
                <IoLogoJavascript className="hover:text-colorJavascript" />
                <DiReact className="hover:text-colorReact" />
                <SiRedux className="hover:text-colorRedux" />
                <FaHtml5 className="hover:text-colorHTML" />
                <IoLogoCss3 className="hover:text-colorCSS" />
                <FaNode className="hover:text-colorNode" />
                <SiExpress className="hover:text-black" />
                <BiLogoPostgresql className="hover:text-colorPostgresql" />
                <FaGitAlt className="hover:text-colorGit" />
                <FaGithub className="hover:text-black" />
              </div>
            </div>
          </div>
        </div>
        {/* --------- Card Rick And Morty --------- */}
        <div
          className="w-full lg:w-3/4 h-auto rounded-lg shadow-md overflow-hidden"
          data-aos="fade-up"
        >
          {/* Icono de Henry */}
          <div className="flex flex-col gap-3 absolute z-10 top-4 right-4">
            <a
              href="https://www.linkedin.com/posts/aimar-mendoza_fullstackdeveloper-graduaciaejn-desarrolloweb-activity-7113643813323075584-T4PH?utm_source=share&utm_medium=member_desktop"
              target="_blank"
            >
              <button className="bg-white p-1 rounded-full shadow-lg transition duration-300 ease-in-out hover:scale-125">
                <img
                  className="w-7 h-7 rounded-full object-cover"
                  src={HenryLogo}
                  alt={HenryLogo}
                  draggable="false"
                  loading="lazy"
                />
              </button>
            </a>
            {/* Icono de GitHub */}
            <a
              href="https://github.com/AMendozaMarimon/RickandMortyAPI_FRONT"
              target="_blank"
            >
              <button className="bg-white p-1 rounded-full shadow-lg transition duration-300 ease-in-out hover:scale-125">
                <FaGithub className="w-7 h-7" />
              </button>
            </a>
          </div>
          {/* Imagen de Rick And Morty */}
          <div className="w-full h-[15rem] bg-grayMain dark:bg-gray-700 overflow-hidden">
            <img
              className="w-full h-full object-cover object-top"
              src={RaM}
              alt="RaM..."
              draggable="false"
              loading="lazy"
            />
          </div>
          {/* Texto de Rick And Morty */}
          <div className="p-7 bg-white dark:bg-gray-800">
            <p className="font-telegraf text-grayText text-xl text-balance lg:text-left dark:text-textDark">
              {content?.cardRaM.title}
            </p>
            <div className="flex justify-between items-center pt-6">
              <div className="flex flex-wrap items-center gap-3 text-2xl text-grayText dark:gray-700">
                <IoLogoJavascript className="hover:text-colorJavascript" />
                <DiReact className="hover:text-colorReact" />
                <SiRedux className="hover:text-colorRedux" />
                <FaHtml5 className="hover:text-colorHTML" />
                <IoLogoCss3 className="hover:text-colorCSS" />
                <FaNode className="hover:text-colorNode" />
              </div>
            </div>
          </div>
        </div>
        {/* --------- Card Antiguo Portafolio --------- */}
        <div
          className="w-full lg:w-3/4 h-auto rounded-lg shadow-md overflow-hidden"
          data-aos="fade-up"
        >
          <div className="flex flex-col gap-3 absolute z-10 top-4 right-4">
            {/* Icono de GitHub */}
            <a
              href="https://github.com/AMendozaMarimon/My-Portfolio"
              target="_blank"
            >
              <button className="bg-white p-1 rounded-full shadow-lg transition duration-300 ease-in-out hover:scale-125">
                <FaGithub className="w-7 h-7" />
              </button>
            </a>
          </div>
          {/* Imagen de Antiguo Portafolio */}
          <div className="w-full h-[15rem] bg-grayMain dark:bg-gray-700 overflow-hidden">
            <img
              className="w-full h-full object-cover object-top"
              src={Ant_Port}
              alt="Antigua..."
              draggable="false"
              loading="lazy"
            />
          </div>
          {/* Texto de Antiguo Portafolio */}
          <div className="p-7 bg-white dark:bg-gray-800">
            <p className="font-telegraf text-grayText text-xl text-balance lg:text-left dark:text-textDark">
              {content?.cardOldP.title}
            </p>
            <div className="flex justify-between gap-2 lg:gap-0 pt-5">
              <div className="flex flex-wrap items-center gap-3 text-2xl text-grayText dark:gray-700">
                <IoLogoJavascript className="hover:text-colorJavascript" />
                <DiReact className="hover:text-colorReact" />
                <SiRedux className="hover:text-colorRedux" />
                <FaHtml5 className="hover:text-colorHTML" />
                <IoLogoCss3 className="hover:text-colorCSS" />
                <FaNode className="hover:text-colorNode" />
              </div>
              {/* Boton de reedirigir */}
              <a href="https://aimar-mendoza.netlify.app/" target="_blank">
                <button className="bg-white p-2 rounded-full border-2 border-black transition duration-300 ease-in-out hover:bg-orangeBoton dark:border-orangeBoton dark:bg-gray-700 dark:hover:bg-orangeBoton dark:text-white dark:hover:text-gray-800">
                  <MdOutlineArrowOutward className="text-2xl" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
