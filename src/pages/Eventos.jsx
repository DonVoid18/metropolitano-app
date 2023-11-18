import EventList from "../components/EventList";
const Eventos = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center gap-20 overflow-hidden pt-40 pb-24 text-main">
      {/* <section className="flex w-containerWitdhMain max-w-containerMax items-center justify-center">
        <div className="flex w-full flex-col gap-5">
          <h1 className="text-3xl font-bold">Próximos eventos</h1>
          <EventList></EventList>
        </div>
      </section>
      <section className="flex w-containerWitdhMain max-w-containerMax items-center justify-center">
        <div className="flex w-full flex-col gap-5">
          <h1 className="text-3xl font-bold">Eventos pasados</h1>
          <EventList></EventList>
        </div>
      </section> */}
      <section className="flex w-containerWitdhMain max-w-containerMax items-center justify-center">
        <div className="flex w-full flex-col gap-5">
          <h1 className="text-3xl font-bold">
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                EsSalud Huánuco CAP III Metropolitano
              </h2>
              <p className="text-justify text-xl text-colorTextSecundary">
              * <a href="http://www.essalud.gob.pe/downloads/dia_mundial_de_la_diabetes_2023.zip">Campaña Día Mundial de la Diabetes 2023</a>  Act. 08/11/2023             
              </p>
              <p>
                <img src="/public/camp/1cam.jpg" alt="" />
              </p>
              <p className="text-justify text-xl text-colorTextSecundary">
              * <a href="https://portal.essalud.gob.pe/wp-content/uploads/2023/10/essalud_tiene_talento_2023.zip">EsSalud Tiene Talento 2023</a>  26/10/2023
              </p>
              <p>
                <img src="/public/camp/2cam.jpg" alt="" />
              </p>
              <p className="text-justify text-xl text-colorTextSecundary">
              * <a href="https://portal.essalud.gob.pe/wp-content/uploads/2023/10/essalud_tiene_talento_2023.zip">Campaña de Prevención de la Rabia Humana</a>  20/10/2023
              </p>
              <p>
                <img src="/public/camp/3cam.jpg" alt="" />
              </p>
              <p className="text-justify text-xl text-colorTextSecundary">
              * <a href="http://www.essalud.gob.pe/downloads/semana_de_lucha_contra_el_cancer_16102023.zip">Campaña de Prevención de Lucha contra el Cáncer</a>  16/10/2023
              </p>
              <p>
                <img src="/public/camp/4cam.jpg" alt="" />
              </p>
              <p className="text-justify text-xl text-colorTextSecundary">
              * <a href="https://portal.essalud.gob.pe/wp-content/uploads/2023/10/dia_mundial_del_cancer_de_mama_2023.zip">Día Mundial del Cáncer de Mama</a>  13/10/2023
              </p>
              <p>
                <img src="/public/camp/5cam.jpg" alt="" />
              </p>
              <p className="text-justify text-xl text-colorTextSecundary">
              * <a href="https://portal.essalud.gob.pe//wp-content/uploads/2023/10/dia_mundial_de_la_alimentacion_saludable.zip">Día Mundial de la Alimentación Saludable</a>  13/10/2023
              </p>
              <p>
                <img src="/public/camp/6cam.jpg" alt="" />
              </p>
              <p className="text-justify text-xl text-colorTextSecundary">
              * <a href="http://www.essalud.gob.pe/downloads/manos_limpias_salvan_vidas_lavate_las_manos_siempre_adultos_y_ninos_11102023.zip">Paso y recomendaciones para Lavado de Manos</a>  12/10/2023
              </p>
              <p>
                <img src="/public/camp/7cam.jpg" alt="" />
              </p>                    
          </h1>
        </div>
      </section>
    </div>
  );
};
export default Eventos;
