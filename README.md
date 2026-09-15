# Sistema de Gestión de Farmacia (Farma)

###### Desarrollador(es): Montañez Fabrizio | Proyecto UTP - Herramientas de Desarrollo

---

## 🏛️ Arquitectura del Proyecto

El sistema está dividido en dos servicios principales completamente desacoplados y contenerizados:

- **Frontend (`Farma-Frontend/`)**: Aplicación desarrollada en **React 19**, **TypeScript** y **Vite**, servida mediante un contenedor de producción **Nginx Alpine**. Incluye el diseño institucional (Avance 1 UTP) con carrusel, catálogo de 6 productos/servicios, información corporativa, video institucional, clientes, proveedores, pie de página y autenticación reactiva por ventanas modales.
- **Backend (`Farma/`)**: API REST desarrollada en **Java 21** con **Spring Boot 3.4.5**, **Spring Security 6**, **JJWT 0.12.5**, y **Spring Data JPA**. Gestiona usuarios, roles y autenticación stateless por tokens JWT.
- **Base de Datos (`postgres_db`)**: **PostgreSQL 16 Alpine** persistido en un volumen Docker (`pgdata`).

---

## 🚀 Despliegue con Docker Compose

Para construir y levantar todos los contenedores:

```bash
sudo docker compose up --build
```

Para detener los contenedores:

```bash
sudo docker compose down
```

---

## 🌐 Enlaces de Acceso y Puertos

Una vez iniciado el sistema con `sudo docker compose up --build`:

| Componente | URL de Acceso | Puerto Host | Descripción |
| :--- | :--- | :--- | :--- |
| **Frontend Web** | [http://localhost:5173](http://localhost:5173) | `5173` | Interfaz gráfica completa (Nginx) |
| **Frontend Web (Alternativo)** | [http://localhost](http://localhost) | `80` | Puerto HTTP estándar |
| **Backend REST API** | [http://localhost:8080](http://localhost:8080) | `8080` | Spring Boot 3 API |
| **Backend Health Check** | [http://localhost:8080/api/v1/auth/health](http://localhost:8080/api/v1/auth/health) | `8080` | Endpoint de salud y diagnóstico |
| **Base de Datos** | `localhost:5432` | `5432` | PostgreSQL 16 |

---

## 🔑 Credenciales de Acceso Precargadas

El sistema inicializa automáticamente un usuario administrador en la base de datos:

- **Usuario:** `admin`
- **Contraseña:** `Password123!`
- **Rol:** `ROLE_ADMIN`

*(En el modal de Login del Frontend también se dispone de un botón para autorellenar estas credenciales con un solo clic).*

---

## 📂 Estructura de Directorios

```text
├── docker-compose.yml       # Orquestación de contenedores (db, backend, frontend)
├── .env                     # Variables de entorno para servicios y base de datos
├── README.md                # Documentación del proyecto
├── Farma/                   # Microservicio Backend (Spring Boot + Java 21)
│   ├── Dockerfile           # Multi-stage build (Maven + Temurin 21 JRE)
│   ├── pom.xml              # Dependencias Maven
│   └── src/                 # Código fuente Java y configuración
└── Farma-Frontend/          # Microservicio Frontend (React + Vite)
    ├── Dockerfile           # Multi-stage build (Node 20 + Nginx Alpine)
    ├── nginx.conf           # Proxy inverso y servidor web SPA
    ├── package.json         # Dependencias NPM
    └── src/                 # Código fuente React, componentes y diseño
```
