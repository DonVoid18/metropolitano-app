import MembersList from "../components/MembersList"
import { motion } from "framer-motion"

const Miembros = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center gap-10 overflow-hidden text-main">
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        className="flex w-containerWitdhMain max-w-containerMax items-center justify-center"
      >
      </motion.section>
      <div className="flex w-full items-center justify-center text-white bg-black">
        <div className="flex w-containerWitdhMain max-w-containerMax flex-col gap-12 py-28 md:gap-40">
          <div className="flex flex-col items-center gap-10 text-center">
            <h5 className="mini:text-4xl text-3xl font-bold tracking-tight md:text-5xl pb-10">
              Representantes del estado
            </h5>
            <div className="flex flex-wrap items-center justify-center gap-28">
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
                  <img src="https://i.ibb.co/cN5Yz0y/1rep.jpg" alt="" />
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
                  <img src="https://i.ibb.co/Yb7m77f/2petitt.jpg" alt="" />
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
                  <img src="https://i.ibb.co/g4yHDfF/3ciro.jpg" alt="" />
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
          <div className="flex flex-col items-center gap-10 text-center">
            <h5 className="mini:text-4xl text-3xl font-bold tracking-tight md:text-5xl pb-10">
              Representantes de los Asegurados
            </h5>

            <div className="flex flex-wrap items-center justify-center gap-28">
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
                  <img src="https://i.ibb.co/rHjdZtx/7ronaldo.jpg" alt="" />
                </div>
                <div>
                  <p className="text-main font-bold">
                    Rolando Alfonso Torres Prieto
                  </p>
                  <p className="text-main text-colorTextFooter">Representante de los Trabajadores</p>
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
                  <img src="https://i.ibb.co/7S636pP/9oscar.jpg" alt="" />
                </div>
                <div>
                  <p className="text-main font-bold">
                    Oscar Alarcón Delgado
                  </p>
                  <p className="text-main text-colorTextFooter">Representante de los Pensionistas</p>
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
                  <img src="https://i.ibb.co/R6jnD2H/8vicente.jpg" alt="" />
                </div>
                <div>
                  <p className="text-main font-bold">
                    Vicente Castro Yacila
                  </p>
                  <p className="text-main text-colorTextFooter">
                    Representante de los Trabajadores
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-10 text-center">
            <h5 className="mini:text-4xl text-3xl font-bold tracking-tight md:text-5xl pb-10">
              Representantes de los Empleadores
            </h5>

            <div className="flex flex-wrap items-center justify-center gap-28">
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
                  <img src="https://i.ibb.co/GPzZYmp/4angel.jpg" alt="" />
                </div>
                <div>
                  <p className="text-main font-bold">
                    Angel Néstor Acevedo Villalba
                  </p>
                  <p className="text-main text-colorTextFooter">Representante de la gran empresa</p>
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
                  <img src="https://i.ibb.co/C1cLs63/5mariasol.jpg" alt="" />
                </div>
                <div>
                  <p className="text-main font-bold">
                    María Soledad Melania Guiulfo Suárez Durand
                  </p>
                  <p className="text-main text-colorTextFooter">Representante de la mediana empresa</p>
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
                  <img src="https://i.ibb.co/803MqD6/6cesar.jpg" alt="" />
                </div>
                <div>
                  <p className="text-main font-bold">
                    César Enrique Chanamé Zapata
                  </p>
                  <p className="text-main text-colorTextFooter">
                    Representante de la pequeña y microempresa
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Miembros
