import React, { useState } from 'react';
import type { UserSession } from '../types';

interface NavbarProps {
  user: UserSession | null;
  onOpenLogin: () => void;
  onOpenRegister: () => void;
  onOpenProfile: () => void;
  onLogout: () => void;
  backendOnline: boolean | null;
}

export const Navbar: React.FC<NavbarProps> = ({
  user,
  onOpenLogin,
  onOpenRegister,
  onOpenProfile,
  onLogout,
  backendOnline,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Productos', href: '#productos' },
    { label: 'Anuncios', href: '#anuncios' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <>
      {/* =====================================================================
           CABEZA (HEADER) - ELEMENTO 1, 2 y 13
           ===================================================================== */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* ELEMENTO 1 y 2: Título, nombre de la empresa y Logo */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold shadow-md">
                <i className="fa-solid fa-staff-snake"></i>
              </div>
              <span className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
                  Farmacia Farma
                </h1>
                <span className="text-xs bg-blue-100 text-blue-800 font-semibold px-2 py-0.5 rounded">
                  Avance 1 - UTP
                </span>
              </div>
              <p className="text-xs text-gray-500 font-medium">
                Cuidado integral de tu salud y bienestar
              </p>
            </div>
          </div>

          {/* Backend Connection Indicator & ELEMENTO 13: Login y Registro */}
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {/* Indicador de estado del Backend */}
            <div
              className={`text-xs px-2.5 py-1 rounded-full flex items-center gap-1.5 font-medium border ${
                backendOnline === true
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                  : backendOnline === false
                  ? 'bg-rose-50 text-rose-700 border-rose-200'
                  : 'bg-amber-50 text-amber-700 border-amber-200'
              }`}
              title={
                backendOnline === true
                  ? 'Conectado a Spring Boot (Farma)'
                  : backendOnline === false
                  ? 'No se puede conectar al backend en /api'
                  : 'Verificando backend...'
              }
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  backendOnline === true
                    ? 'bg-emerald-500 animate-pulse'
                    : backendOnline === false
                    ? 'bg-rose-500'
                    : 'bg-amber-500 animate-ping'
                }`}
              ></span>
              <span>
                {backendOnline === true
                  ? 'Backend: Conectado'
                  : backendOnline === false
                  ? 'Backend: Sin conexión'
                  : 'Conectando...'}
              </span>
            </div>

            {/* ELEMENTO 13: Interfaz de login y registro funcional */}
            {user ? (
              <div className="flex items-center gap-2">
                <button
                  onClick={onOpenProfile}
                  className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-semibold rounded-lg transition flex items-center gap-2 border border-slate-300"
                  title="Ver perfil de usuario y datos del backend"
                >
                  <i className="fa-solid fa-user-circle text-blue-600"></i>
                  <span className="font-bold">{user.username}</span>
                  <span className="text-xs bg-blue-600 text-white px-1.5 py-0.5 rounded">
                    {user.role}
                  </span>
                </button>
                <button
                  onClick={onLogout}
                  className="px-3.5 py-2 border border-red-300 text-red-600 text-sm font-semibold rounded-lg hover:bg-red-50 transition flex items-center gap-1.5"
                  title="Cerrar sesión"
                >
                  <i className="fa-solid fa-right-from-bracket"></i>
                  <span>Salir</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={onOpenLogin}
                  className="px-4 py-2 border border-blue-600 text-blue-600 text-sm font-semibold rounded-lg hover:bg-blue-50 transition flex items-center gap-1.5"
                >
                  <i className="fa-solid fa-arrow-right-to-bracket"></i>
                  <span>Login</span>
                </button>
                <button
                  onClick={onOpenRegister}
                  className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition shadow-sm flex items-center gap-1.5"
                >
                  <i className="fa-solid fa-user-plus"></i>
                  <span>Registro</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* =====================================================================
           BARRA DE NAVEGACIÓN - ELEMENTO 3
           ===================================================================== */}
      <nav className="bg-gray-800 text-gray-200 sticky top-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            <ul className="hidden sm:flex flex-wrap gap-6 font-medium text-sm md:text-base">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-blue-400 transition flex items-center gap-1.5"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="sm:hidden flex items-center justify-between w-full">
              <span className="font-semibold text-sm text-gray-300">Menú de Navegación</span>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-300 hover:text-white p-1 focus:outline-none"
              >
                <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
              </button>
            </div>
          </div>

          {/* Mobile menu dropdown */}
          {mobileMenuOpen && (
            <div className="sm:hidden border-t border-gray-700 py-3 space-y-2">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  );
};
