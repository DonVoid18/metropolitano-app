import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader

import {
  faAddressCard,
  faBook,
  faBuildingColumns,
  faGlobe,
  faHeart,
  faPeopleCarryBox,
  faRankingStar,
  faSackDollar,
  faUsers,
  faVideo,
} from "@fortawesome/free-solid-svg-icons"

import { Carousel } from "react-responsive-carousel"
import Developers from "../assets/seguros.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ImagenTeam2 from "../assets/home1.jpg"
import { Link } from "react-router-dom"
import Person from "../assets/person.jpg"
import { motion } from "framer-motion"

function Home() {
  return (
    <div className="flex w-full flex-col items-center justify-center overflow-hidden text-left sm:text-center xl:text-left">
      <div className="flex min-h-screen w-containerWitdhMain max-w-containerMax items-center justify-center">
        <div className="flex w-full flex-col-reverse items-center justify-center gap-10 pt-52 xl:flex-row xl:gap-20 xl:pt-0">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.1 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="relative flex h-[300px] w-[300px] items-center justify-center sm:h-[600px] sm:w-[600px] xl:min-h-[530px] xl:min-w-[530px]"
          >
            <img className="w-full" src={ImagenTeam2} alt="Image Banner" />
            <div className="ctn-tiket-hd bottom-12 sm:bottom-auto sm:top-36 sm:left-1/3">
              <div className="shadow-violetC flex h-10 w-10 items-center justify-center rounded-full bg-[#8567db]">
                <FontAwesomeIcon
                  icon={faPeopleCarryBox}
                  className="text-white"
                />
              </div>
              Soporte emocional
            </div>
            <div className="ctn-tiket-hd bottom-28 sm:bottom-32 sm:left-5">
              <div className="shadow-greenC flex h-10 w-10 items-center justify-center rounded-full bg-[#e63946]">
                <FontAwesomeIcon icon={faHeart} className="text-white" />
              </div>
              Compromiso
            </div>
            <div className="ctn-tiket-hd bottom-44 sm:bottom-44 sm:left-2/3">
              <div className="shadow-greenLightC flex h-10 w-10 items-center justify-center rounded-full bg-[#1fddd2]">
                <FontAwesomeIcon icon={faUsers} className="text-white" />
              </div>
              Solidaridad
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div>
              <h1 className="text-5xl font-bold md:text-6xl md:leading-12">
                EsSalud Huánuco <br />
                <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                  CAP III Metropolitano
                </span>
              </h1>
            </div>
            <div className="pt-5">
              <p className="text-xl text-colorTextSecundary">
                Un gran avance que beneficia a cerca de 40 mil asegurados se ha iniciado en el CAP III Metropolitano, con
                las atenciones del consultorio especializado de gastroenterología y la realización de procedimientos que
                permite un diagnóstico oportuno y tratamiento adecuado.
              </p>
            </div>

          </motion.div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center bg-colorSection_1">
        <div className="grid w-containerWitdhMain max-w-containerMax gap-12 py-28 md:gap-20 xl:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex flex-col items-start gap-8 text-main sm:items-center xl:items-start"
          >
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              ¿Qué es Seguro Social del Perú - EsSalud?
            </h2>
            <p className="text-justify text-xl text-colorTextSecundary">
              El Seguro Social de Salud del Perú, más conocido como EsSalud, es el seguro de salud
              contributivo dirigido a todos los ciudadanos peruanos que cumplan con ciertas
              características. EsSalud brinda servicios de prevención, promoción, recuperación,
              rehabilitación, prestaciones económicas y prestaciones sociales.
            </p>

          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex w-full items-center justify-center"
          >
            <div className="flex w-full items-center justify-center md:w-10/12 xl:w-full">
              <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop
                autoPlay
              >
                <div className="h-96">
                  <img
                    src="public/imgessf1.jpg"
                    alt="Image 2"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="h-96">
                  <img
                    src="public/imgessf2.jpg"
                    alt="Image 3"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="h-96">
                  <img
                    src="public/imgessf3.jpg"
                    alt="Image 3"
                    className="h-full w-full object-cover"
                  />
                </div>
              </Carousel>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center bg-blue-600 text-white shadow-3xl">
        <div className="flex w-containerWitdhMain max-w-containerMax flex-col gap-12 py-28 md:gap-20">
          <div className="flex flex-col items-center gap-10 text-center">
            <h2 className="mini:text-4xl text-3xl font-bold tracking-tight md:text-5xl pb-10">
              Directorio del Consejo Directivo
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-20">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="flex flex-col items-center justify-center gap-4"
              >
                <div className="flex h-44 w-44 items-center justify-center overflow-hidden rounded-full">
                  <img src="/public/repesmaria.jpg" alt="" />
                </div>
                <div>
                  <p className="text-main font-bold">
                    María Elena Aguilar Del Águila
                  </p>
                  <p className="text-main text-colorTextFooter">Representante del Estado</p>
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="flex flex-col items-center justify-center gap-4"
              >
                <div className="flex h-44 w-44 items-center justify-center overflow-hidden rounded-full">
                  <img src="/public/repespetitt.jpg" alt="" />
                </div>
                <div>
                  <p className="text-main font-bold">
                    Petitt Yolanda Meza Ostos
                  </p>
                  <p className="text-main text-colorTextFooter">Representante del Estado</p>
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.9 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="flex flex-col items-center justify-center gap-4"
              >
                <div className="flex h-44 w-44 items-center justify-center overflow-hidden rounded-full">
                  <img src="/public/repminsaciro.jpg" alt="" />
                </div>
                <div>
                  <p className="text-main font-bold">
                    Ciro Abel Mestas Valero
                  </p>
                  <p className="text-main text-colorTextFooter">
                    Representante del Ministerio de Salud
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center overflow-hidden xl:h-[700px] xl:flex-row">
        <div className="grid w-containerWitdhMain max-w-containerMax gap-14 py-20 xl:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex flex-col items-start justify-start gap-5 sm:items-center xl:items-start"
          >
            <h3 className="text-4xl font-bold tracking-tight md:text-5xl">
              Atencion al asegurado.
            </h3>
            <p className="text-xl text-colorTextSecundary">
              La Gerencia Central de Atención al Asegurado es el órgano de apoyo, responsable de conducir
              el sistema de gestión de atención al asegurado EsSalud, en todas las plataformas de atención
              a nivel nacional, tanto presenciales como no presenciales, de acuerdo a los objetivos de nivel
              de servicio definidos por la institución; y de monitorear el nivel de satisfacción del
              asegurado respecto a las prestaciones de salud, económicas y sociales que brinda la institución.
              Depende de la Gerencia General.
            </p>
            <Link className="btn bg-black p-5" to="/register">
              ¿Donde me atiendo?
            </Link>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.1 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex items-center justify-center text-left"
          >
            <div className="relative flex flex-col gap-16">
              <div className="absolute top-10 left-8 h-5/6 w-1 bg-gradient-to-t from-teal-500 to-blue-600 max-[380px]:hidden"></div>
              <div className="z-0 flex items-center gap-5 max-[380px]:flex-col">
                <div className="flex items-center justify-center rounded-full bg-primary p-5">
                  <FontAwesomeIcon
                    icon={faBuildingColumns}
                    className="h-7 w-7 text-white"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div>
                    <h3 className="text-2xl font-bold">
                      ESSALUD EN LÍNEA
                    </h3>
                  </div>
                  <div>
                    <p className="text-main">
                      El objetivo de EsSalud en Línea es ofrecer servicios médicos, incluyendo citas oportunas y empáticas.
                    </p>
                  </div>
                </div>
              </div>
              <div className="z-0 flex items-center gap-5 max-[380px]:flex-col">
                <div className="flex items-center justify-center rounded-full bg-black p-5">
                  <FontAwesomeIcon
                    icon={faAddressCard}
                    className="h-7 w-7 text-white"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div>
                    <h3 className="text-2xl font-bold">LÍNEA 107</h3>
                  </div>
                  <div>
                    <p className="text-main">
                      Inició el 18.03.2020 debido a la pandemia del COVID-19 para orientar sobre los síntomas. Disponible las 24 horas a nivel nacional.
                    </p>
                  </div>
                </div>
              </div>
              <div className="z-0 flex items-center gap-5 max-[380px]:flex-col">
                <div className="flex items-center justify-center rounded-full bg-teal-500 p-5">
                  <FontAwesomeIcon
                    icon={faSackDollar}
                    className="h-7 w-7 text-white"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div>
                    <h3 className="text-2xl font-bold">FARMACIA VECINA</h3>
                  </div>
                  <div>
                    <p className="text-main">
                      El programa inició sus operaciones y funciona con
                      su propia central telefónica 350 -0800 desde el 04 de noviembre del 2022.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-blue-600 text-white xl:h-[580px] xl:flex-row">
        <div className="md:px-10 xl:absolute xl:-left-64 xl:h-full min-[1400px]:-left-52">
          <img className="xl:h-full" src={Developers} alt="Imagen developers" />
        </div>
        <div className="grid w-10/12 max-w-7xl py-20 xl:grid-cols-2 xl:gap-20">
          <div></div>
          <div className="flex flex-col items-start justify-center gap-7 sm:items-center xl:items-start">
            <h3 className="text-4xl font-bold tracking-tight md:text-5xl">
              Seguros de EsSalud
            </h3>

            <div className="grid w-full grid-cols-1 gap-2 text-main md:grid-cols-2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, scale: 0.5 },
                  visible: { opacity: 1, scale: 1 },
                }}
                className="flex items-center gap-3 rounded-md bg-teal-500 p-4 shadow-lg"
              >

                <div className="font-medium">+ Seguro Regular</div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, scale: 0.5 },
                  visible: { opacity: 1, scale: 1 },
                }}
                className="flex items-center gap-3 rounded-md bg-primary p-4 shadow-lg"
              >

                <div className="font-medium">+ Seguro Potestativo</div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, scale: 0.5 },
                  visible: { opacity: 1, scale: 1 },
                }}
                className="flex items-center gap-3 rounded-md bg-[#2b2d42] p-4 shadow-lg"
              >

                <div className="font-medium">Seguro Agrario Independiente</div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, scale: 0.5 },
                  visible: { opacity: 1, scale: 1 },
                }}
                className="flex items-center gap-3 rounded-md bg-[#e63946] p-4 shadow-lg"
              >

                <div className="font-medium">Seguro de Accidentes</div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, scale: 0.5 },
                  visible: { opacity: 1, scale: 1 },
                }}
                className="flex items-center gap-3 rounded-md bg-teal-800 p-4 shadow-lg"
              >

                <div className="font-medium">Seguro Complementario de Trabajo de Riesgo de EsSalud</div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
