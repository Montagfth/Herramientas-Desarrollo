import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { authApi } from '../api/auth';
import type { UserSummary } from '../api/auth';
import type { UserSession } from '../types';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: UserSession;
  onLogout: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  user,
  onLogout,
}) => {
  const [summary, setSummary] = useState<UserSummary | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const fetchSummary = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await authApi.getLobbySummary();
        setSummary(data);
      } catch (err: unknown) {
        if (axios.isAxiosError(err) && err.response?.data && typeof err.response.data === 'object' && 'message' in err.response.data) {
          setError(String(err.response.data.message));
        } else {
          setError('Error al cargar el resumen de usuario desde /api/v1/lobby/summary');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchSummary();
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative animate-in fade-in zoom-in duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1 text-xl"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-2xl shadow-md">
            <i className="fa-solid fa-user-shield"></i>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              Perfil de Usuario & Sesión
            </h3>
            <p className="text-xs text-gray-500">
              Datos obtenidos de Spring Boot (<code className="text-blue-600 font-mono">/api/v1/lobby/summary</code>)
            </p>
          </div>
        </div>

        {loading ? (
          <div className="py-10 text-center text-gray-500">
            <i className="fa-solid fa-circle-notch fa-spin text-2xl text-blue-600 mb-2"></i>
            <p className="text-sm">Consultando backend Spring Boot...</p>
          </div>
        ) : error ? (
          <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl mb-4">
            <p className="font-semibold mb-1">Error de autenticación:</p>
            <p>{error}</p>
          </div>
        ) : summary ? (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                <span className="text-[11px] text-gray-400 block uppercase font-bold">
                  ID Usuario
                </span>
                <span className="text-sm font-bold text-gray-800 font-mono">
                  #{summary.id}
                </span>
              </div>
              <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                <span className="text-[11px] text-gray-400 block uppercase font-bold">
                  Nombre de Usuario
                </span>
                <span className="text-sm font-bold text-gray-800">
                  {summary.username}
                </span>
              </div>
            </div>

            <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
              <span className="text-[11px] text-gray-400 block uppercase font-bold">
                Correo Electrónico
              </span>
              <span className="text-sm font-semibold text-gray-800">
                {summary.email}
              </span>
            </div>

            <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
              <span className="text-[11px] text-gray-400 block uppercase font-bold mb-1.5">
                Roles Asignados
              </span>
              <div className="flex gap-2 flex-wrap">
                {summary.roles.map((r) => (
                  <span
                    key={r}
                    className="text-xs bg-blue-100 text-blue-800 font-semibold px-2.5 py-1 rounded-md"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
              <span className="text-[11px] text-gray-400 block uppercase font-bold">
                Estado de la Cuenta
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                {summary.enabled ? 'Activo / Habilitado' : 'Deshabilitado'}
              </span>
            </div>

            {/* Token preview */}
            <div className="p-3 bg-slate-900 rounded-xl text-slate-200">
              <div className="flex items-center justify-between text-[11px] mb-1 text-slate-400">
                <span>JWT Bearer Token activo:</span>
                <span className="text-emerald-400 font-mono">HMAC-SHA256</span>
              </div>
              <p className="text-[10px] font-mono break-all text-slate-400 line-clamp-2">
                {user.token}
              </p>
            </div>
          </div>
        ) : null}

        <div className="mt-6 pt-4 border-t border-gray-100 flex gap-3">
          <button
            onClick={() => {
              onLogout();
              onClose();
            }}
            className="flex-1 py-2.5 border border-red-300 text-red-600 rounded-xl font-semibold hover:bg-red-50 transition text-sm flex items-center justify-center gap-2"
          >
            <i className="fa-solid fa-right-from-bracket"></i>
            <span>Cerrar Sesión</span>
          </button>
          <button
            onClick={onClose}
            className="flex-1 py-2.5 bg-gray-800 hover:bg-gray-900 text-white rounded-xl font-semibold transition text-sm"
          >
            Volver
          </button>
        </div>
      </div>
    </div>
  );
};
