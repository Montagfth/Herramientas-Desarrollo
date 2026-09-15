import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-[#111827] text-gray-400 py-12 mt-auto border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8 items-center text-center sm:text-left">
        {/* ELEMENTO 10: Logos de redes sociales */}
        <div>
          <h4 className="text-white font-bold text-base mb-3">Redes Sociales</h4>
          <div className="flex justify-center sm:justify-start gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition duration-300 text-lg text-gray-300"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center hover:bg-sky-500 hover:text-white hover:border-sky-500 transition duration-300 text-lg text-gray-300"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center hover:bg-pink-600 hover:text-white hover:border-pink-600 transition duration-300 text-lg text-gray-300"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center hover:bg-blue-700 hover:text-white hover:border-blue-700 transition duration-300 text-lg text-gray-300"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Síguenos en nuestras redes oficiales para noticias y ofertas.
          </p>
        </div>

        {/* ELEMENTO 11: Logo de la universidad (UTP) */}
        <div className="flex flex-col items-center">
          <div className="bg-white p-3 rounded-xl shadow-lg border border-gray-200 w-56 flex flex-col items-center justify-center">
            <span className="text-red-600 font-extrabold text-2xl tracking-tighter">
              UTP
            </span>
            <span className="text-gray-800 text-[11px] font-semibold tracking-wide uppercase text-center">
              Universidad Tecnológica del Perú
            </span>
            <span className="text-[10px] text-gray-500 font-medium mt-0.5">
              Herramientas de Desarrollo
            </span>
          </div>
          <p className="text-[11px] text-gray-400 mt-2 text-center">
            Proyecto Académico - Avance 1
          </p>
        </div>

        {/* ELEMENTO 12: Contacto real de un trabajador */}
        <div className="sm:text-right">
          <h4 className="text-white font-bold text-lg mb-1">Contacto Corporativo</h4>
          <p className="font-semibold text-gray-200 text-base">
            Sebastian Alexander Lopez Cutipa
          </p>
          <p className="text-xs text-gray-400 mb-2">
            Coordinador de Farmacia & Desarrollo
          </p>
          <p className="text-blue-400 hover:text-blue-300 transition text-sm">
            <a href="mailto:correo@empresa.com" className="inline-flex items-center gap-1.5">
              <i className="fa-solid fa-envelope"></i>
              <span>correo@empresa.com</span>
            </a>
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Teléfono: +51 987 654 321 | Lima, Perú
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-8 pt-6 border-t border-gray-800/80 text-center text-xs text-gray-500 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p>© 2026 Farmacia Farma - Todos los derechos reservados.</p>
        <p>Backend: Spring Boot 3.4.5 Java 21 | Frontend: React 19 + TypeScript + Vite + Nginx</p>
      </div>
    </footer>
  );
};
