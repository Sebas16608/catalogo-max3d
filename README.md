<div align="center">
  <h1>Catálogo Max3D</h1>
  <p><strong>Plataforma de catálogo e-commerce para productos de impresión 3D</strong></p>
  <p>Proyecto desarrollado para <strong>Max3D Creations</strong></p>
</div>

---

## Descripción

**Catálogo Max3D** es una plataforma web diseñada para exhibir y gestionar productos de impresión 3D fabricados por Max3D Creations. El sistema expone una API RESTful que permite consultar el catálogo de productos organizados por categorías y gestionar solicitudes de contacto de clientes interesados. La comunicación comercial se canaliza a través de WhatsApp, integrado directamente desde el frontend.

El proyecto sigue una arquitectura desacoplada entre frontend y backend, con el objetivo de servir como carta de presentación técnica y comercial del taller.

---

## Tecnologías

### Backend

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| Python     | 3.12    | Lenguaje base |
| Django     | 6.0.6   | Framework web |
| Django REST Framework | 3.17.1 | Construcción de API REST |
| SQLite     | —       | Base de datos en desarrollo |
| Cloudinary | —       | Alojamiento de imágenes (pendiente de configuración) |
| django-cors-headers | — | Gestión de CORS (pendiente de configuración) |
| django-filter | —    | Filtrado de consultas en la API |
| Pillow     | —       | Procesamiento de imágenes |

### Frontend

*Por definir — el directorio `frontend/` se encuentra en etapa de planificación inicial.*

---

## Arquitectura

```
┌─────────────────────────────────────────────────┐
│                   Frontend                       │
│  (Cliente web — tecnología por definir)          │
│                                                   │
│  ┌───────────┐  ┌──────────┐  ┌──────────────┐  │
│  │ Catálogo  │  │ Categorías│  │ Contacto     │  │
│  └─────┬─────┘  └────┬─────┘  └──────┬───────┘  │
│        └──────────────┴──────────────┘           │
│                        │ HTTP/REST               │
└────────────────────────┼─────────────────────────┘
                         │
                  API REST (DRF)
                         │
┌────────────────────────┼─────────────────────────┐
│                 Backend (Django)                  │
│                                                   │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐ │
│  │   config    │  │  products   │  │  contact    │ │
│  │ (proyecto)  │  │  (app)     │  │  (app)     │ │
│  └────────────┘  └────────────┘  └────────────┘ │
│                         │                        │
│                   ┌─────┴─────┐                  │
│                   │  SQLite   │                  │
│                   └───────────┘                  │
└──────────────────────────────────────────────────┘
```

### Backend — Django (`backend/`)

El backend se estructura como un proyecto Django convencional con dos aplicaciones:

- **`config/`** — Configuración del proyecto Django (settings, URLs raíz, ASGI/WSGI).
- **`products/`** — Gestión del catálogo. Define los modelos `Category` y `Product` con relaciones de clave foránea, y expondrá endpoints CRUD a través de DRF.
- **`contact/`** — Gestión de solicitudes de contacto. Actualmente en fase de esqueleto, con modelos y vistas por implementar.

La base de datos en desarrollo es SQLite. Se planea migrar a PostgreSQL en producción. El alojamiento de imágenes se realizará mediante Cloudinary.

### Frontend (`frontend/`)

El frontend se encuentra en etapa de planificación. Se consumirá la API REST expuesta por el backend para mostrar productos, categorías y formularios de contacto. La comunicación con los clientes se realizará mediante enlaces directos a WhatsApp.

---

## Estructura del repositorio

```
catalogo-max3d/
├── backend/
│   ├── config/                    # Configuración del proyecto Django
│   │   ├── settings.py            # Configuración general
│   │   ├── urls.py                # Enrutamiento raíz
│   │   ├── asgi.py                # Servidor ASGI
│   │   └── wsgi.py                # Servidor WSGI
│   ├── products/                  # Aplicación de catálogo
│   │   ├── models.py              # Modelos Category y Product
│   │   ├── views.py               # Vistas (pendiente de implementar)
│   │   ├── admin.py               # Registro en admin (pendiente)
│   │   ├── apps.py                # Configuración de la app
│   │   └── migrations/            # Migraciones de base de datos
│   ├── contact/                   # Aplicación de contacto
│   │   ├── models.py              # Modelos (pendiente de implementar)
│   │   ├── views.py               # Vistas (pendiente de implementar)
│   │   ├── admin.py               # Registro en admin (pendiente)
│   │   └── migrations/            # Migraciones de base de datos
│   ├── esquema_db.png             # Diagrama entidad-relación
│   ├── manage.py                  # Script de gestión de Django
│   └── requirements.txt           # Dependencias del proyecto
├── frontend/                      # Frontend (en etapa de planificación)
├── .gitignore                     # Exclusiones de control de versiones
└── README.md                      # Este archivo
```

---

## Modelo de datos

Actualmente se cuenta con dos modelos implementados en la aplicación `products`:

- **`Category`** — Agrupación de productos con nombre, slug y descripción.
- **`Product`** — Producto individual con nombre, slug, descripción, precio, imagen (URL), categoría (relación N:1 con `Category`) y disponibilidad.

La aplicación `contact` no cuenta aún con modelos definidos.

---

## Estado actual del proyecto

| Componente | Estado |
|------------|--------|
| Configuración del proyecto Django | Completado |
| Modelos `Product` y `Category` | Completado |
| Migración inicial de base de datos | Aplicada |
| Diagrama entidad-relación | Completado |
| Instalación de dependencias (DRF, Cloudinary, CORS, filtros) | Completado |
| Serializers (DRF) | Pendiente |
| Vistas y endpoints de la API | Pendiente |
| Enrutamiento de la API | Pendiente |
| Configuración de CORS | Pendiente |
| Configuración de Cloudinary | Pendiente |
| Registro de modelos en el admin | Pendiente |
| Aplicación `contact` | Esqueleto vacío |
| Frontend | Sin iniciar |
| README | Completado |

---

## Objetivos

- Proveer una API REST documentada y robusta para consultar el catálogo de productos y gestionar contactos.
- Ofrecer una interfaz de usuario moderna, responsiva y optimizada para dispositivos móviles.
- Integrar Cloudinary para la gestión eficiente de imágenes de productos.
- Canalizar las consultas de clientes hacia WhatsApp de forma directa desde el frontend.
- Servir como portafolio técnico del taller Max3D Creations, demostrando buenas prácticas de desarrollo web.

---

## Comenzar

```bash
# Clonar el repositorio
git clone <url-del-repositorio>
cd catalogo-max3d

# Crear y activar un entorno virtual
python -m venv .venv
source .venv/bin/activate  # Linux / macOS
# .venv\Scripts\activate   # Windows

# Instalar dependencias del backend
pip install -r backend/requirements.txt

# Ejecutar migraciones
python backend/manage.py migrate

# Iniciar servidor de desarrollo
python backend/manage.py runserver
```

---

<div align="center">
  <p>Desarrollado para <strong>Max3D Creations</strong> &mdash; 2026</p>
</div>
