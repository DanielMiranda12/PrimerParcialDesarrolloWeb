Technoshop

Aplicación web modularizada para simular una tienda de componentes de computadores. Este proyecto fue desarrollado como parte del examen de Desarrollo Web.

Funcionalidades implementadas

Login (login.html):
Estructura base con formulario de usuario y contraseña. Caja centrada con diseño responsivo en tonos azules. Conectado con header, sidebar y footer mediante el script de carga de componentes.

Header (components/header.html):
Logo de Technoshop. Menú de navegación horizontal. Botón hamburguesa que abre y cierra la barra lateral.

Sidebar (components/sidebar.html):
Navegación con opciones: Iniciar Sesión, Registrarse, Tienda, Acerca de, Usuarios. Animación de apertura y cierre con overlay.

Footer (components/footer.html):
Información de contacto y créditos, dependiendo del avance del desarrollo.

JavaScript (js/cargarComponentes.js):
Carga dinámica de los componentes (header, sidebar y footer) en las páginas. Control del botón hamburguesa y overlay para abrir y cerrar la barra lateral.

CSS (css/login.css):
Estilos generales con paleta de colores azules. Diseño responsivo. Estilo para login, header y barra lateral.

Tecnologías usadas

HTML5 para la estructura modular.

CSS3 para el diseño visual y responsivo.

JavaScript para cargar componentes y manejar la interacción del sidebar.

Git y GitHub para control de versiones con ramas individuales.

Colaboradores

Daniel (rama: daniel-login)
Encargado de login, header, sidebar, footer, estilos y script de carga de componentes.

Estructura del proyecto
Technoshop/
├── components/
│ ├── header.html
│ ├── sidebar.html
│ └── footer.html
├── css/
│ └── login.css
├── js/
│ └── cargarComponentes.js
├── login.html
└── README.md

Nota importante

Este proyecto es de carácter académico. Las funcionalidades de login y registro no cuentan aún con validación real de credenciales.
