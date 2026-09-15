import React from 'react';

export const AnnouncementsSection: React.FC = () => {
  const announcements = [
    {
      id: 1,
      tag: 'Campaña de Salud',
      date: 'Septiembre 2026',
      title: 'Despistaje Gratuito de Glucosa y Presión Arterial',
      description: 'Acércate a cualquiera de nuestras sedes este sábado para tu control preventivo sin costo.',
      icon: 'fa-heart-pulse',
      color: 'bg-rose-50 text-rose-600',
    },
    {
      id: 2,
      tag: 'Beneficio',
      date: 'Válido todo el mes',
      title: '20% de Descuento en Medicamentos Genéricos',
      description: 'Presenta tu receta médica oficial y accede a precios preferenciales en genéricos esenciales.',
      icon: 'fa-tags',
      color: 'bg-amber-50 text-amber-600',
    },
    {
      id: 3,
      tag: 'Servicio Digital',
      date: 'Nuevo lanzamiento',
      title: 'Validación de Recetas Electrónicas en Línea',
      description: 'Ahora puedes subir tu receta desde la web y recibir tus medicinas con delivery programado.',
      icon: 'fa-mobile-screen-button',
      color: 'bg-blue-50 text-blue-600',
    },
  ];

  return (
    <section id="anuncios" className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
            Novedades y Promociones
          </span>
          <h2 className="text-2xl font-extrabold text-gray-900 border-b-2 border-blue-600 pb-1 inline-block">
            Anuncios de la Farmacia
          </h2>
        </div>
        <p className="text-sm text-gray-500">
          Infórmate de nuestras campañas de salud comunitarias y promociones vigentes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {announcements.map((item) => (
          <div
            key={item.id}
            className="p-6 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-md hover:border-blue-200 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-100 text-blue-700">
                  {item.tag}
                </span>
                <span className="text-xs text-gray-400 font-medium">{item.date}</span>
              </div>
              <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center text-xl mb-4`}>
                <i className={`fa-solid ${item.icon}`}></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-200/60">
              <span className="text-xs font-semibold text-blue-600 hover:text-blue-700 cursor-pointer flex items-center gap-1">
                Leer más información <i className="fa-solid fa-angle-right text-[10px]"></i>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
