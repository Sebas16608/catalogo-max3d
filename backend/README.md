# Max3D Creations — Backend API

Backend del catálogo de productos de impresión 3D de **Max3D Creations**. Desarrollado con Django 6.0 y Django REST Framework, expone una API REST para consultar productos y gestionar solicitudes de contacto.

---

## Apps

| App | Estado | Descripción |
|---|---|---|
| `products` | Modelos creados | Modelos `Category` y `Product`, migración aplicada. |
| `contact` | Esqueleto | App preparada para el formulario de contacto. Sin modelos aún. |
| `config` | Configuración | Proyecto Django: settings, URLs raíz, WSGI/ASGI. |

### products

Dos modelos con migración aplicada:

- **Category** — `name`, `slug`, `descrption` (sic), `created_at`, `updated_at`.
- **Product** — `name`, `slug` (único), `description`, `price`, `image` (URL), `category` (FK), `is_available`, timestamps.

> ⚠️ El campo `Category.descrption` contiene un error tipográfico (falta la *i*) que está presente en la migración inicial.

### contact

App vacía. Está registrada en `INSTALLED_APPS` y lista para implementar el formulario de contacto.

---

## Tecnologías

- **Python** 3.12+
- **Django** 6.0.6
- **Django REST Framework** 3.17.1
- **django-cors-headers** 4.9.0
- **django-filter** 25.2
- **Cloudinary** / **django-cloudinary-storage** 0.3.0
- **python-dotenv** 1.2.2
- **SQLite** (desarrollo)

---

## Instalación

```bash
# 1. Clonar el repositorio y entrar al backend
cd backend

# 2. Crear entorno virtual
python -m venv .venv

# 3. Activar entorno virtual
source .venv/bin/activate   # Linux / macOS
# .venv\Scripts\activate    # Windows

# 4. Instalar dependencias
pip install -r requirements.txt

# 5. Ejecutar migraciones
python manage.py migrate

# 6. Iniciar servidor de desarrollo
python manage.py runserver
```

El servidor se ejecutará en `http://localhost:8000`.

---

## Endpoints actuales

Actualmente solo está disponible la ruta del panel de administración:

```
GET /admin/         Panel de administración de Django
```

No hay endpoints REST implementados todavía. Están planificados para una próxima fase.

---

## Desarrollo futuro

- Creación de **serializers** y **viewsets** para `Category` y `Product`.
- Definición de **URLs** de la API bajo `/api/`.
- Filtros, búsqueda y paginación vía `django-filter`.
- Modelo y endpoints para el formulario de contacto (`contact`).
- Configuración de CORS y Cloudinary.
- Variables de entorno con `python-dotenv`.
- Registro de modelos en el admin de Django.
- Tests unitarios y de integración.

---

## Notas

- El archivo `esquema_db.png` contiene el diagrama entidad-relación de la base de datos.
- El archivo `db.sqlite3` no se versiona (incluido en `.gitignore`).
