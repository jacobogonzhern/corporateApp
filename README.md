# Corporate App

Aplicación corporativa multiplataforma desarrollada con **Ionic 9 + Angular 22 (standalone, zoneless) + Capacitor 8**.
Funciona como web (desplegada en Vercel) y como app nativa Android.

🌐 **Demo:** https://corporate-app-kappa.vercel.app

## Funcionalidades

| Página | Qué hace |
|---|---|
| **Home** | Menú horizontal (`ion-segment`) hacia el resto de secciones. |
| **Productos** | Tabla con id, nombre, unidades, precio y foto, cargada desde un JSON local mediante un servicio. |
| **Nosotros** | Obtiene la ubicación del dispositivo (`@capacitor/geolocation`) y calcula la distancia a la oficina con la fórmula de Haversine. |
| **Contacto** | Formulario (correo + mensaje) con persistencia local mediante `@capacitor/preferences`. |

## Tecnologías

- Ionic 9 · Angular 22 (componentes standalone, *signals*, lazy loading con `loadComponent`)
- Capacitor 8 (Geolocation, Preferences, Android)
- TypeScript
- GitHub + Vercel (despliegue automático en cada push)

## Arquitectura

```
src/app
├── pages/       → home, productos, nosotros, contacto
├── services/    → products, geolocation, messages
└── models/      → product.interface.ts
src/assets
├── data/        → products.json
└── images/      → fotos de los productos
```

Los datos se obtienen siempre a través de servicios, de modo que el JSON local puede sustituirse por una API REST sin cambiar las páginas.

## Ejecutar en local

```bash
npm install
ionic serve
```

## Android

```bash
ionic build
npx cap sync
npx cap open android
```

---

Proyecto realizado por **Jacobo González Hernández** · 2º DAM · Universidad Nebrija
