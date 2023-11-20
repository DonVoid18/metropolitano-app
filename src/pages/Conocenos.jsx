import Mision from "../assets/mision.svg"
import Objetivos from "../assets/objetivos.svg"
import Vision from "../assets/vision.svg"
import { motion } from "framer-motion"
const Conocenos = () => {
  return (
    <div className="mt-24 flex min-h-screen w-full flex-col items-center overflow-hidden text-main">
      <section
        className="flex max-w-containerMax items-center justify-center pt-32"
      >
        <div className="flex w-containerWitdhMain_2 flex-col gap-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-col items-center justify-center gap-10 text-center">
            <h3 className="text-6xl font-bold uppercase">
              Conoce sobre nosotros
            </h3>
            <p className="text-xl text-colorTextSecundary">
              El Seguro Social de Salud está vinculado al Ministerio de Salud para elaborar lineamientos generales en el sector 
              salud. Además, en la actualidad, está relacionado con el Ministerio de Economía y Finanzas porque a través 
              del Fondo Nacional de Financiamiento de la Actividad Empresarial del Estado – FONAFE se le autoriza su presupuesto 
              anual, formando parte de las empresas del Estado Peruano.n todos estos años, el Seguro Social de Salud ha sufrido 
              numerosos cambios estructurales, del cual se han ido modificando para mejorar la gestión institucional en beneficio de los asegurados y sus derechohabientes.
              A inicios del 2013, el Ministerio de Trabajo y Promoción del Empleo declara en reorganización al Seguro Social de Salud mediante Decreto Supremo N° 016-2012-TR.
            </p>
          </motion.div>
          <div className="flex items-center justify-center">
            <div className="h-full w-full">
              <img
                src="/public/huan.jpg"
                alt="Image 2"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="flex max-w-containerMax items-center justify-center py-24">
        <div className="flex max-w-containerMax items-center justify-center">
          <div className="flex w-containerWitdhMain_2 flex-col gap-24">
            <div className="grid gap-10 xl:grid-cols-2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.1 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="flex flex-col gap-5"
              >
                <h2 className="text-4xl font-bold">Misión</h2>
                <p className="text-justify text-xl text-colorTextSecundary">
                   "La misión de Essalud es brindar servicios de salud integrales y de 
                   calidad a todos los asegurados y sus familias, con un enfoque en la prevención,
                   recuperación y rehabilitación de la salud. Esto implica no solo la atención médica, 
                   sino también la promoción de estilos de vida saludables y la educación sobre la prevención 
                   de enfermedades. Prestaciones de salud, económicas y sociales a nuestros asegurados con una 
                   gestión eficiente e innovadora que garantiza la protección financiera de las prestaciones integrales"
                </p>
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
                className="flex w-full items-center justify-center"
              >
                <div className="w-5/6">
                  <img src={Mision} alt="Imagen misión" />
                </div>
              </motion.div>
            </div>
            <div className="grid gap-10 xl:grid-cols-2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.1 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="order-2 flex w-full items-center justify-center xl:order-1"
              >
                <div className="w-5/6">
                  <img src={Vision} alt="Imagen visión" />
                </div>
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
                className="order-1 flex flex-col gap-5 xl:order-2 xl:text-right"
              >
                <h2 className="text-4xl font-bold">Visión</h2>
                <p className="text-justify text-xl text-colorTextSecundary">
                    "Essalud aspira a ser líder en la prestación de servicios de salud, destacándose 
                    por su excelencia en la atención médica, calidez en el trato a los pacientes y 
                    accesibilidad a sus servicios. La visión también incluye el compromiso de contribuir 
                    al bienestar y desarrollo de la sociedad peruana en su conjunto, no solo a través de la
                   atención médica, sino también a través de programas de salud comunitaria y colaboraciones con otras entidades de salud."
                </p>
              </motion.div>
            </div>
            <div className="grid gap-10 xl:grid-cols-2">


            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Conocenos
