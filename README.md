
````markdown
# 📸 Photo Gallery App - Ionic + Capacitor

Aplicación móvil desarrollada con Ionic y Capacitor que permite tomar fotos, almacenarlas localmente y mostrarlas en una galería.


## 🚀 Funcionalidades

✅ Capturar fotos usando la cámara del dispositivo  
✅ Guardar fotos con nombre personalizado (incluye apellido)  
✅ Mostrar las fotos en una galería (Tab 3)  
✅ Mostrar una alerta desde un botón (Tab 1)  
✅ Guardar fotos en la galería del teléfono (`saveToGallery: true`)  


## 🧱 Tecnologías utilizadas

- Ionic Framework
- Angular
- Capacitor
- Android Studio


## 📂 Estructura de la App

- **Tab 1:** Botón para mostrar alerta  
- **Tab 2:** Captura de fotos  
- **Tab 3:** Visualización de fotos guardadas  



## ⚙️ Instalación

Clonar el repositorio:

```bash
git clone https://github.com/Odaliz2105/PhothoGallery.git
cd photo-gallery
````

Instalar dependencias:

```bash
npm install


## 🛠️ Ejecutar en navegador

```bash
ionic serve

## 📱 Ejecutar en Android

1. Construir la app:

```bash
ionic build
```

2. Sincronizar con Capacitor:

```bash
ionic cap sync
```

3. Abrir en Android Studio:

```bash
ionic cap open android
```

4. Ejecutar en emulador o dispositivo físico

---

## 🔐 Permisos necesarios (Android)

En `AndroidManifest.xml`:

```xml
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
```

---

## 📸 Captura de fotos

Se utiliza el plugin de Capacitor Camera:

```ts
const capturedPhoto = await Camera.getPhoto({
  resultType: CameraResultType.Uri,
  source: CameraSource.Camera,
  quality: 100,
  saveToGallery: true,
});
```

---

## 💾 Guardado de imágenes

Las imágenes se almacenan en el sistema de archivos del dispositivo con un nombre personalizado:

```ts
const fileName = `Balseca_${new Date().getTime()}.jpeg`;
```

---

## ⚠️ Notas importantes

* Es necesario aceptar los permisos de cámara y almacenamiento en el dispositivo
* Se recomienda probar en un dispositivo físico
* Después de cambios:

```bash
ionic build
ionic cap copy
```

---

## 👩‍💻 Autor

**Odaliz Balseca Valencia**

---

## 📌 Estado del proyecto

✔ Proyecto funcional
✔ Probado en Android

<img width="720" height="1280" alt="image" src="https://github.com/user-attachments/assets/8f5a2cef-cd8a-4f92-8f41-7660f6b760b6" />

<img width="717" height="1600" alt="image" src="https://github.com/user-attachments/assets/14e7e3c4-d942-4f9f-8f53-4e076d2b5d26" />

<img width="960" height="2142" alt="image" src="https://github.com/user-attachments/assets/9d1c811b-b93f-44a9-bdf5-f0c341081c0d" />

<img width="717" height="1600" alt="image" src="https://github.com/user-attachments/assets/86959ecc-fd63-4079-87c9-6b17de2c80ab" />

<img width="899" height="1599" alt="image" src="https://github.com/user-attachments/assets/ce6eac52-fb96-4bb9-ae99-8fe6901a738e" />

<img width="717" height="1600" alt="image" src="https://github.com/user-attachments/assets/5e6bc1e4-119d-4211-9fb2-d220cc91c1ff" />

<img width="717" height="1600" alt="image" src="https://github.com/user-attachments/assets/50e07ef5-5f36-480b-9e4b-146bcf5b9856" />

```
