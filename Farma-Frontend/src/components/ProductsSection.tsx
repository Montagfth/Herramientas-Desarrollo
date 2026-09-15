import React, { useState } from 'react';
import type { Product } from '../types';

const defaultProducts: Product[] = [
  {
    id: 1,
    name: 'Paracetamol 500mg (Caja x 20 tab)',
    category: 'Analgésicos y Antipiréticos',
    description: 'Eficaz para el alivio de dolores moderados de cabeza, musculares y reducción de la fiebre.',
    price: 'S/. 8.50',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=500&q=80',
    stock: 120,
  },
  {
    id: 2,
    name: 'Amoxicilina 500mg (Caja x 30 cap)',
    category: 'Antibióticos',
    description: 'Tratamiento de amplio espectro para infecciones respiratorias, odontológicas y bacterianas.',
    price: 'S/. 18.00',
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=500&q=80',
    stock: 45,
  },
  {
    id: 3,
    name: 'Ibuprofeno 400mg (Blíster x 10 tab)',
    category: 'Antiinflamatorios',
    description: 'Alivio rápido de inflamaciones musculares, articulares, dolor dental y cólicos menstruales.',
    price: 'S/. 6.20',
    image: 'https://images.unsplash.com/photo-1550572017-ed200f5e6343?auto=format&fit=crop&w=500&q=80',
    stock: 90,
  },
  {
    id: 4,
    name: 'Jarabe Pediátrico Antitusivo 120ml',
    category: 'Respiratorio Infantil',
    description: 'Fórmula pediátrica segura con agradable sabor a frutas para la tos seca y productiva.',
    price: 'S/. 22.50',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=500&q=80',
    stock: 35,
  },
  {
    id: 5,
    name: 'Multivitamínico Complete + Zinc (60 cap)',
    category: 'Suplementos y Vitaminas',
    description: 'Refuerza el sistema inmunológico, aumenta la vitalidad y previene deficiencias nutricionales.',
    price: 'S/. 38.90',
    image: 'https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&w=500&q=80',
    stock: 60,
  },
  {
    id: 6,
    name: 'Termómetro Infrarrojo Digital Clínico',
    category: 'Dispositivos Médicos',
    description: 'Medición instantánea sin contacto con pantalla retroiluminada LCD y alarma sonora de fiebre.',
    price: 'S/. 45.00',
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=500&q=80',
    stock: 25,
  },
];

export const ProductsSection: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id="productos" className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
            Catálogo Destacado
          </span>
          {/* ELEMENTO 7: 6 productos o servicios representativos */}
          <h2 className="text-2xl font-extrabold text-gray-900 border-b-2 border-blue-600 pb-1 inline-block">
            6 Productos o Servicios
          </h2>
        </div>
        <p className="text-sm text-gray-500 max-w-md">
          Medicamentos certificados y dispositivos para el cuidado integral de tu salud con garantía farmacéutica.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {defaultProducts.map((prod) => (
          <div
            key={prod.id}
            className="group border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col bg-white"
          >
            <div className="relative h-44 overflow-hidden bg-gray-100">
              <img
                src={prod.image}
                alt={prod.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow">
                {prod.price}
              </span>
              <span className="absolute bottom-2 left-2 bg-gray-900/70 text-white text-[10px] font-semibold px-2 py-0.5 rounded backdrop-blur-sm">
                {prod.category}
              </span>
            </div>

            <div className="p-5 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-gray-900 text-base mb-2 group-hover:text-blue-600 transition">
                  {prod.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {prod.description}
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                  <i className="fa-solid fa-circle-check text-[10px]"></i>
                  Stock disponible ({prod.stock})
                </span>
                <button
                  onClick={() => setSelectedProduct(prod)}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 group-hover:translate-x-1 transition"
                >
                  <span>Detalles</span>
                  <i className="fa-solid fa-arrow-right text-[10px]"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de detalle de producto */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1"
            >
              <i className="fa-solid fa-xmark text-xl"></i>
            </button>
            <div className="h-44 rounded-xl overflow-hidden mb-4 bg-gray-100">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs font-bold text-blue-600 uppercase">
              {selectedProduct.category}
            </span>
            <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">
              {selectedProduct.name}
            </h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              {selectedProduct.description}
            </p>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-xl mb-4">
              <span className="text-sm font-medium text-gray-700">Precio sugerido:</span>
              <span className="text-xl font-extrabold text-blue-600">
                {selectedProduct.price}
              </span>
            </div>
            <button
              onClick={() => setSelectedProduct(null)}
              className="w-full py-2.5 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
