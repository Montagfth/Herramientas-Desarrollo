import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroCarousel } from './components/HeroCarousel';
import { AboutCompany } from './components/AboutCompany';
import { ProductsSection } from './components/ProductsSection';
import { AnnouncementsSection } from './components/AnnouncementsSection';
import { ClientsPartnersSection } from './components/ClientsPartnersSection';
import { Footer } from './components/Footer';
import { LoginModal } from './components/LoginModal';
import { RegisterModal } from './components/RegisterModal';
import { ProfileModal } from './components/ProfileModal';
import { authApi } from './api/auth';
import type { UserSession } from './types';
import './App.css';

function App() {
  const [user, setUser] = useState<UserSession | null>(() => {
    const saved = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    if (saved && token) {
      try {
        return JSON.parse(saved);
      } catch {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
      }
    }
    return null;
  });
  const [backendOnline, setBackendOnline] = useState<boolean | null>(null);
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  useEffect(() => {
    let isMounted = true;

    const runHealthCheck = () => {
      authApi
        .checkHealth()
        .then((res) => {
          if (isMounted) {
            setBackendOnline(res?.status === 'UP');
          }
        })
        .catch(() => {
          if (isMounted) {
            setBackendOnline(false);
          }
        });
    };

    runHealthCheck();
    const interval = setInterval(runHealthCheck, 30000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  const handleLoginSuccess = (session: UserSession) => {
    setUser(session);
    showToast(`¡Bienvenido de nuevo, ${session.username}!`);
  };

  const handleRegisterSuccess = (session: UserSession) => {
    setUser(session);
    showToast(`¡Cuenta creada con éxito! Bienvenido, ${session.username}.`);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    showToast('Has cerrado sesión exitosamente.');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 bg-gray-900 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-gray-700 animate-in fade-in slide-in-from-top-4 duration-300">
          <i className="fa-solid fa-circle-check text-emerald-400 text-lg"></i>
          <span className="text-sm font-medium">{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="text-gray-400 hover:text-white text-xs ml-2"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      )}

      {/* CABEZA (HEADER) Y BARRA DE NAVEGACIÓN */}
      <Navbar
        user={user}
        backendOnline={backendOnline}
        onOpenLogin={() => setLoginOpen(true)}
        onOpenRegister={() => setRegisterOpen(true)}
        onOpenProfile={() => setProfileOpen(true)}
        onLogout={handleLogout}
      />

      {/* CONTENIDO PRINCIPAL - AVANCE 1 UTP */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 py-8 space-y-12">
        {/* ELEMENTO 4: Portada o carrusel de 3 a 5 imágenes (HERO) */}
        <HeroCarousel />

        {/* ELEMENTO 5 y 6: Información de la empresa y Videos */}
        <AboutCompany />

        {/* ELEMENTO 7: 6 productos o servicios representativos */}
        <ProductsSection />

        {/* Sección de Anuncios y Novedades de la Farmacia */}
        <AnnouncementsSection />

        {/* ELEMENTO 8 y 9: Clientes representativos y Aliados/Proveedores */}
        <ClientsPartnersSection />
      </main>

      {/* PIE DE PÁGINA (FOOTER) - ELEMENTOS 10, 11 y 12 */}
      <Footer />

      {/* MODALES INTERACTIVOS CONECTADOS AL BACKEND */}
      <LoginModal
        isOpen={loginOpen}
        onClose={() => setLoginOpen(false)}
        onSuccess={handleLoginSuccess}
        onSwitchToRegister={() => {
          setLoginOpen(false);
          setRegisterOpen(true);
        }}
      />

      <RegisterModal
        isOpen={registerOpen}
        onClose={() => setRegisterOpen(false)}
        onSuccess={handleRegisterSuccess}
        onSwitchToLogin={() => {
          setRegisterOpen(false);
          setLoginOpen(true);
        }}
      />

      {user && (
        <ProfileModal
          isOpen={profileOpen}
          onClose={() => setProfileOpen(false)}
          user={user}
          onLogout={handleLogout}
        />
      )}
    </div>
  );
}

export default App;
