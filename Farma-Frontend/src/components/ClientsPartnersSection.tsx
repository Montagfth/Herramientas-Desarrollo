import React from 'react';

export const ClientsPartnersSection: React.FC = () => {
  const clients = [
    {
      id: 1,
      name: 'Clínica San Gabriel',
      code: 'C1',
      type: 'Sector Hospitalario',
      comment: 'Abastecimiento continuo y seguro para el área de hospitalización y emergencias.',
    },
    {
      id: 2,
      name: 'Centro Médico Familiar',
      code: 'C2',
      type: 'Atención Primaria',
      comment: 'Convenio corporativo con entrega preferencial y asesoramiento en farmacia.',
    },
    {
      id: 3,
      name: 'Red de Salud Integral',
      code: 'C3',
      type: 'Consultorios Médicos',
      comment: 'Dispensación garantizada de medicamentos oncológicos y de alta especialidad.',
    },
  ];

  const partners = [
    { id: 1, name: 'Laboratorios Bayer', type: 'Farmacéutica Global' },
    { id: 2, name: 'Pfizer Salud', type: 'Innovación Biomédica' },
    { id: 3, name: 'Farmindustria Perú', type: 'Producción Nacional' },
    { id: 4, name: 'Droguería Central', type: 'Distribución Logística' },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* ELEMENTO 8: Clientes representativos */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-lg">
            <i className="fa-solid fa-users"></i>
          </div>
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
              Confianza Comprobada
            </span>
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-blue-600 pb-1 inline-block">
              Clientes Representativos
            </h2>
          </div>
        </div>

        <div className="space-y-4">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-blue-200 transition transform hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex-shrink-0 flex items-center justify-center font-extrabold text-sm shadow-sm">
                {client.code}
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-gray-900 text-sm">{client.name}</h4>
                  <span className="text-[11px] text-blue-600 bg-blue-50 px-2 py-0.5 rounded font-medium">
                    {client.type}
                  </span>
                </div>
                <p className="text-gray-600 text-xs mt-1 leading-relaxed">
                  "{client.comment}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ELEMENTO 9: Proveedores, aliados y socios */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-lg">
              <i className="fa-solid fa-handshake"></i>
            </div>
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                Alianzas Estratégicas
              </span>
              <h2 className="text-xl font-bold text-gray-900 border-b-2 border-blue-600 pb-1 inline-block">
                Aliados y Proveedores
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="p-4 rounded-xl bg-gray-50 border border-gray-100 flex flex-col items-center justify-center text-center hover:bg-white hover:border-blue-300 hover:shadow-sm transition transform hover:scale-105"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-100/60 text-blue-700 flex items-center justify-center text-xl mb-2">
                  <i className="fa-solid fa-boxes-packing"></i>
                </div>
                <h4 className="font-bold text-gray-900 text-sm">{partner.name}</h4>
                <p className="text-[11px] text-gray-500 mt-0.5">{partner.type}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 p-4 rounded-xl bg-blue-50/70 border border-blue-100 text-center">
          <p className="text-xs text-blue-800 font-medium">
            <i className="fa-solid fa-shield-halved mr-1.5 text-blue-600"></i>
            Todos nuestros medicamentos cuentan con registro sanitario DIGEMID vigente.
          </p>
        </div>
      </div>
    </section>
  );
};
