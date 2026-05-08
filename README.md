# Anime Explorer 📱✨

  PRUEBA 1 BIMESTRE 1 APLICACIONES MOVILES

Anime Explorer es una aplicación móvil desarrollada con Ionic + Angular como proyecto académico para la materia de Aplicaciones Móviles.

La aplicación permite autenticación de usuarios, exploración de anime mediante una API pública, búsqueda dinámica, visualización de detalles, uso de cámara y almacenamiento local de imágenes.

---

# 🚀 Tecnologías utilizadas

* Ionic Framework
* Angular
* TypeScript
* Capacitor
* Supabase Authentication
* Jikan API
* HTML5
* SCSS

---

# 🎯 Objetivo del proyecto

Desarrollar una aplicación móvil híbrida que cumpla con los siguientes requisitos:

* Registro e inicio de sesión
* Protección de rutas
* Navegación mediante Tabs
* Consumo de API externa
* Búsqueda dinámica
* Página de detalle
* Uso de cámara del dispositivo
* Almacenamiento local
* Splash screen personalizado
* Ícono personalizado

---

# 🔐 Autenticación

La autenticación fue implementada utilizando Supabase Authentication.

## Funcionalidades

* Registro de usuarios
* Inicio de sesión
* Cierre de sesión
* Persistencia de sesión
* Protección de rutas internas

---

# 🧭 Navegación de la aplicación

La aplicación cuenta con las siguientes pantallas:

## 📌 Tab 1 — Inicio

Pantalla principal con:

* Bienvenida al usuario
* Información del proyecto
* Resumen de funcionalidades
* Navegación rápida

---

## 📷 Tab 2 — Cámara

Permite:

* Tomar fotografías
* Visualizar imágenes
* Guardar fotografías localmente

Implementado utilizando Capacitor Camera.

---

## 🖼️ Tab 3 — Galería

Permite:

* Mostrar imágenes guardadas
* Recuperar imágenes al volver a abrir la aplicación
* Visualizar almacenamiento local

---

## 🔎 Tab 4 — Catálogo / Búsqueda

Pantalla conectada con Jikan API.

Funciones:

* Buscar anime
* Mostrar listado dinámico
* Mostrar imagen y descripción
* Manejo de errores
* Loading spinner
* Página de detalle

---

## 👤 Tab 5 — Perfil

Pantalla de usuario con:

* Información personal
* Imagen de perfil
* Botón de cerrar sesión

---

# 🌸 API utilizada

Se utilizó la API pública Jikan API.

## Documentación oficial

[https://docs.api.jikan.moe/](https://docs.api.jikan.moe/)

## Endpoint principal

```bash
https://api.jikan.moe/v4/anime
```

## Características implementadas

* Consumo HTTP
* Listado dinámico
* Búsqueda
* Página de detalle
* Manejo de errores
* Loading

---

# 📷 Cámara y almacenamiento local

La aplicación cumple con el requisito de almacenamiento local:

* Captura de imágenes
* Persistencia de fotografías
* Recuperación automática de imágenes
* Uso de almacenamiento del dispositivo

---

# 🎨 Personalización visual

La aplicación incluye:

* Splash screen personalizado
* Ícono personalizado
* Diseño responsive
* Componentes Ionic estilizados

---

# 🧩 Componentes Ionic utilizados

Se utilizaron los siguientes componentes obligatorios:

* ion-card
* ion-list
* ion-item
* ion-input
* ion-button
* ion-icon
* ion-toast
* ion-toolbar
* ion-tabs
* ion-content
* ion-header

---

# ⚙️ Instalación del proyecto

## 1. Clonar repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

---

## 2. Instalar dependencias

```bash
npm install
```

---

## 3. Ejecutar aplicación

```bash
ionic serve
```

---

# 🔑 Variables de entorno

Crear:

```bash
src/environments/environment.ts
```

Agregar:

```ts
export const environment = {
  production: false,

  supabaseUrl: 'TU_URL',
  supabaseKey: 'TU_KEY'
};
```

---

# 📱 Generar APK Android

## Build del proyecto

```bash
ionic build
```

## Generar assets

```bash
npx capacitor-assets generate
```

## Sincronizar Capacitor

```bash
npx cap sync
```

## Abrir Android Studio

```bash
npx cap open android
```

---

# 👤 Autor

Proyecto desarrollado por:

* Odaliz Balseca

---

# 📄 Licencia

Proyecto académico desarrollado con fines educativos.



