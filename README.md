# TopDoctors Playwright Test Suite

## 📋 Descripción

Suite de pruebas automatizadas para la plataforma TopDoctors utilizando Playwright. Este proyecto implementa el patrón Page Object Model (POM) para automatizar las funcionalidades principales de la aplicación, incluyendo búsqueda de doctores y solicitud de citas médicas.

## 🚀 Tecnologías Utilizadas

- **[Playwright](https://playwright.dev/)** `^1.54.1` - Framework de automatización para navegadores
- **[TypeScript](https://www.typescriptlang.org/)** - Lenguaje de programación tipado
- **[Node.js](https://nodejs.org/)** - Entorno de ejecución de JavaScript
- **Page Object Model (POM)** - Patrón de diseño para organizar el código de pruebas

### Navegadores Soportados
- ✅ Chromium (Chrome/Edge)
- ✅ Firefox
- ✅ WebKit (Safari)

## 📁 Estructura del Proyecto

```
topdoctors_playwright/
├── config/                     # Configuraciones de entornos
│   └── environments.ts         # Configuración de URLs y credenciales
├── pages/                      # Page Object Models
│   ├── BasePage.ts            # Clase base con métodos comunes
│   ├── HomePage.ts            # Página de inicio
│   ├── BookingPage.ts         # Página de reserva de citas
│   ├── ProviderPage.ts        # Página de proveedores
│   └── components/            # Componentes reutilizables
│       └── SearchComponent.ts # Componente de búsqueda
├── tests/                     # Casos de prueba
│   └── requestMedicalAppointment.spec.ts
├── utils/                     # Utilidades
│   └── auth.ts               # Helpers de autenticación
├── playwright.config.ts      # Configuración de Playwright
├── package.json              # Dependencias y scripts
└── README.md                 # Este archivo
```

## 🛠️ Instalación

### Prerequisitos

- **Node.js** (versión 16 o superior)
- **npm** o **yarn**

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd topdoctors_playwright
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Instalar navegadores de Playwright**
   ```bash
   npx playwright install
   ```

## 🎯 Ejecución de Pruebas

### Comandos Principales

#### Ejecutar todas las pruebas
```bash
npm test
```

#### Ejecutar pruebas por entorno
```bash
# Entorno México
npm run test:mx

# Entorno Argentina
npm run test:ar
```

#### Ejecutar pruebas con interfaz gráfica
```bash
# Modo headless (por defecto)
npm test

# Modo con navegador visible
npm run test:headed

# Modo con navegador visible - México
npm run test:headed:mx

# Modo con navegador visible - Argentina
npm run test:headed:ar
```

#### Ejecutar pruebas con UI interactiva
```bash
npm run test:ui
```

#### Ver reportes de pruebas
```bash
npm run report
```

### Comandos Avanzados de Playwright

```bash
# Ejecutar pruebas específicas
npx playwright test requestMedicalAppointment.spec.ts

# Ejecutar en un navegador específico
npx playwright test --project=chromium

# Ejecutar con debug
npx playwright test --debug

# Ejecutar con tracing
npx playwright test --trace on
```

## 🌍 Configuración de Entornos

El proyecto soporta múltiples entornos configurados en `config/environments.ts`:

- **México (mx)**: `https://staging.topdoctors.mx`
- **Argentina (ar)**: `https://staging.topdoctors.com.ar`

### Variables de Entorno

Configura el entorno usando la variable `COUNTRY_ENV`:

```bash
# Windows PowerShell
$env:COUNTRY_ENV="mx"; npm test

# Windows CMD
set COUNTRY_ENV=mx && npm test

# Linux/Mac
COUNTRY_ENV=mx npm test
```

## 🧪 Casos de Prueba

### Funcionalidades Cubiertas

- ✅ **Gestión de Cookies**: Aceptación automática de cookies y consentimientos
- ✅ **Búsqueda de Doctores**: Búsqueda por especialidad y ubicación
- ✅ **Solicitud de Citas**: Proceso completo de reserva de citas médicas
- ✅ **Navegación**: Validación de flujos de navegación principales

### Casos de Prueba Disponibles

1. **`requestMedicalAppointment.spec.ts`**
   - Búsqueda de especialistas
   - Selección de doctor
   - Solicitud de cita médica

## 📊 Reportes

Playwright genera reportes automáticamente en formato HTML:

- **Ubicación**: `playwright-report/`
- **Visualización**: `npm run report`
- **Características**:
  - Screenshots en caso de fallos
  - Videos de ejecución (opcional)
  - Trazas de ejecución
  - Métricas de rendimiento

## 🔧 Configuración Personalizada

### Timeouts

- **Global**: 60 segundos
- **Acciones**: Configurables por test
- **Navegación**: Configurables por entorno

### Autenticación

El proyecto incluye autenticación básica HTTP configurada automáticamente:

```typescript
// Configurado en BasePage.ts
auth: {
  basic: {
    username: 'qauser',
    password: 'QaTemporal2025#'
  }
}
```

### Patrones de Diseño

- **Page Object Model**: Separación clara entre lógica de pruebas y elementos de UI
- **Component Pattern**: Componentes reutilizables como `SearchComponent`
- **Base Page**: Métodos comunes heredados por todas las páginas

## 🐛 Debugging

### Modo Debug
```bash
npx playwright test --debug
```

### Inspeccionar Elementos
```bash
npx playwright test --ui
```

### Capturas y Videos
Las capturas se generan automáticamente en caso de fallos en `test-results/`

## 📝 Mejores Prácticas

1. **Esperas Explícitas**: Usar `waitFor()` en lugar de esperas fijas
2. **Selectores Robustos**: Preferir selectores por rol o texto sobre CSS
3. **Gestión de Estados**: Verificar que las acciones se completen correctamente
4. **Manejo de Errores**: Implementar fallbacks para casos edge
5. **Modularidad**: Mantener código reutilizable en componentes

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

---

**Última actualización**: Julio 2025
