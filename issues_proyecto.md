# Issues del Proyecto

A continuación se presentan todas las issues necesarias para el desarrollo del sitio web para la empresa de compra y venta de gorras y ropa.

---

## Funcionalidades Básicas

### 1. Login de Usuarios
**Descripción:** Permitir a los usuarios autenticarse con correo electrónico y contraseña.  
**Tipo:** Feature  
**Prioridad:** Alta  
**Responsable:** Backend, Frontend  
**Notas:** Utilizar Laravel Breeze o Laravel UI para el scaffolding de autenticación.

### 2. Catálogo de Usuarios
**Descripción:** Administradores pueden ver, agregar, actualizar y eliminar usuarios. Los usuarios normales solo pueden ver y editar su propio perfil.  
**Tipo:** Feature  
**Prioridad:** Alta  
**Responsable:** Backend, Frontend  

### 3. Catálogo de Roles
**Descripción:** Sistema de roles para definir permisos (Administrador, Usuario normal).  
**Tipo:** Feature  
**Prioridad:** Media  
**Responsable:** Backend  

### 4. Catálogo de Errores
**Descripción:** Listado y gestión de errores comunes o personalizados del sistema.  
**Tipo:** Feature  
**Prioridad:** Baja  
**Responsable:** Backend  

---

## Gestión de Productos

### 5. CRUD de Productos
**Descripción:** Administradores pueden crear, leer, actualizar y eliminar productos (gorras y ropa).  
**Tipo:** Feature  
**Prioridad:** Alta  
**Responsable:** Backend, Frontend  

### 6. Vista de Productos para Usuarios
**Descripción:** Los usuarios normales pueden visualizar los productos disponibles y filtrarlos.  
**Tipo:** Feature  
**Prioridad:** Alta  
**Responsable:** Frontend  

### 7. Compra de Productos
**Descripción:** Usuarios normales pueden agregar productos al carrito y realizar una compra.  
**Tipo:** Feature  
**Prioridad:** Alta  
**Responsable:** Backend, Frontend  

---

## Seguridad y Accesos

### 8. Control de Accesos por Rol
**Descripción:** Asegurar que solo los administradores accedan a funciones de gestión completa.  
**Tipo:** Security  
**Prioridad:** Alta  
**Responsable:** Backend  

### 9. Middleware de Autenticación
**Descripción:** Usar middleware para restringir rutas a usuarios autenticados.  
**Tipo:** Security  
**Prioridad:** Alta  
**Responsable:** Backend  

---

## Interfaz y Responsividad

### 10. Diseño Responsive con Bootstrap
**Descripción:** Adaptar la interfaz a móviles, tablets y escritorio usando Bootstrap.  
**Tipo:** UI/UX  
**Prioridad:** Media  
**Responsable:** Frontend  

---

## Consumo de API y Arquitectura

### 11. Consumo de API en Laravel
**Descripción:** Frontend consume API RESTful construida con Laravel.  
**Tipo:** Feature  
**Prioridad:** Alta  
**Responsable:** Backend, Frontend  

### 12. Arquitectura Definida
**Descripción:** Implementar arquitectura definida (por ejemplo, MVC o basada en controladores/API).  
**Tipo:** Technical  
**Prioridad:** Alta  
**Responsable:** Backend  

---

## Extras y Mejora Continua

### 13. Validación de Formularios
**Descripción:** Validar entradas del usuario en formularios tanto del lado del cliente como del servidor.  
**Tipo:** Improvement  
**Prioridad:** Media  
**Responsable:** Backend, Frontend  

### 14. Manejo de Sesiones
**Descripción:** Asegurar manejo adecuado de sesiones (logout automático, expiración, etc.).  
**Tipo:** Security  
**Prioridad:** Media  
**Responsable:** Backend  

### 15. Registro de Actividad
**Descripción:** Guardar logs de acciones importantes como login, edición de productos, etc.  
**Tipo:** Improvement  
**Prioridad:** Baja  
**Responsable:** Backend  
