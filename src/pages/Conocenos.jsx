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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium ducimus ullam laboriosam doloremque error similique quisquam explicabo eos, aut pariatur magni voluptates fugiat, enim aliquam alias ex velit labore perspiciatis, doloribus veniam sit? Dolorum, tempora fugiat. Doloribus natus consequatur quas possimus cumque, iusto vero? Animi, molestiae asperiores repellendus, et deleniti ducimus alias, accusamus numquam sed aut ipsa beatae quae quibusdam eligendi quas dolore sapiente deserunt laboriosam corporis totam nisi. Totam dolorum expedita sint doloremque aliquid molestias nihil nobis error consequatur aliquam earum necessitatibus, odio ipsa atque nisi porro! Eum, modi incidunt provident culpa tempora laboriosam adipisci magni expedita cumque atque!
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
                  “Brindamos prestaciones de salud, económicas y sociales a
                  nuestros asegurados con una gestión eficiente e innovadora
                  que garantiza la protección financiera de las prestaciones integrales”.

                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, recusandae.
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
                  “Ser una institución moderna y en mejora continua, centrada en
                  los asegurados, que garantiza el acceso a la seguridad social
                  en salud con ética, oportunidad y calidad”.
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
