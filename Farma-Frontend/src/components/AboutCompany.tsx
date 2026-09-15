import React from 'react';

export const AboutCompany: React.FC = () => {
  return (
    <section id="nosotros" className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
      {/* ELEMENTO 5: Información de la empresa (Concepto redactado de 10 líneas a más) */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-lg">
            <i className="fa-solid fa-building"></i>
          </div>
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
              Conócenos
            </span>
            <h2 className="text-2xl font-extrabold text-gray-900 border-b-2 border-blue-600 pb-1 inline-block">
              La Empresa
            </h2>
          </div>
        </div>

        {/* Texto generado con la longitud suficiente para cubrir el requisito de >10 líneas */}
        <p className="text-gray-600 leading-relaxed text-justify text-sm md:text-base">
          Somos una organización farmacéutica comprometida con la excelencia y la
          innovación en el sector de la salud. Desde nuestra fundación, nos hemos
          dedicado a proporcionar soluciones terapéuticas y medicamentos de alta calidad
          que superen las expectativas de nuestros clientes y médicos tratantes. Nuestro
          equipo está conformado por químicos farmacéuticos y profesionales de la salud
          altamente capacitados que trabajan incansablemente para garantizar la eficacia,
          seguridad y trazabilidad de cada producto dispensado. Creemos firmemente en el
          poder de la tecnología para transformar la atención al paciente y optimizar los
          procesos de distribución hospitalaria y ambulatoria. Por ello, invertimos
          constantemente en sistemas de gestión modernos y almacenamiento controlado,
          asegurándonos de cumplir con los más estrictos estándares de buenas prácticas de
          farmacovigilancia. Nuestra misión trasciende la dispensación comercial; buscamos
          generar un impacto positivo en la calidad de vida de las familias peruanas y
          fomentar una cultura de prevención médica. Mirando hacia el futuro, proyectamos
          expandir nuestra red logística a nivel nacional con canales digitales de acceso
          inmediato, respaldados en la ética profesional, la honestidad y el compromiso social.
        </p>

        <div className="mt-6 pt-4 border-t border-gray-100 grid grid-cols-3 gap-4 text-center">
          <div className="bg-blue-50/50 p-3 rounded-lg">
            <p className="text-xl font-bold text-blue-600">+10</p>
            <p className="text-xs text-gray-500">Años de servicio</p>
          </div>
          <div className="bg-blue-50/50 p-3 rounded-lg">
            <p className="text-xl font-bold text-blue-600">100%</p>
            <p className="text-xs text-gray-500">Certificados</p>
          </div>
          <div className="bg-blue-50/50 p-3 rounded-lg">
            <p className="text-xl font-bold text-blue-600">24/7</p>
            <p className="text-xs text-gray-500">Atención continua</p>
          </div>
        </div>
      </div>

      {/* ELEMENTO 6: Videos representativos de la empresa */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition h-full">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-lg">
              <i className="fa-solid fa-circle-play"></i>
            </div>
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                Multimedia Institucional
              </span>
              <h2 className="text-2xl font-extrabold text-gray-900 border-b-2 border-blue-600 pb-1 inline-block">
                Video Corporativo
              </h2>
            </div>
          </div>

          <div className="aspect-video w-full rounded-xl overflow-hidden shadow-inner bg-gray-900 relative">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/ScMzIvxBSi4"
              title="Video Institucional de la Empresa"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="mt-4 p-3 bg-gray-50 rounded-lg text-center">
          <p className="text-sm text-gray-600 font-medium">
            <i className="fa-solid fa-video mr-2 text-blue-600"></i>
            Conoce nuestras instalaciones y procesos farmacéuticos en este video.
          </p>
        </div>
      </div>
    </section>
  );
};
