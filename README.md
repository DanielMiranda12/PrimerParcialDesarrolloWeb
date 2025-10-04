Technoshop

Aplicación web modularizada para simular una tienda de componentes de computadores. Este proyecto fue desarrollado como parte del examen de Desarrollo Web.

Funcionalidades implementadas Login (login.html)

Estructura base con formulario de usuario y contraseña.

Caja centrada con diseño responsivo en tonos turquesa y verde.

Conectado con header, sidebar y footer mediante el script de carga de componentes.

Acerca de (acerca.html)

Página informativa sobre la tienda.

Contenido organizado en un panel central con sombra y bordes redondeados.

Estilo adaptado desde login.css hacia acerca.css para mantener coherencia visual.

Integrado con header, sidebar y footer cargados dinámicamente.

Header (components/header.html)

Logo de Technoshop.

Menú de navegación horizontal.

Botón hamburguesa que abre y cierra la barra lateral.

Sidebar (components/sidebar.html)

Navegación con opciones: Iniciar Sesión, Registrarse, Tienda, Acerca de, Usuarios.

Animación de apertura y cierre con overlay.

Sidebar oculto por defecto (left: -280px) y visible al activarse con la clase .activo.

Footer (components/footer.html)

Información de contacto y créditos.

JavaScript (js/cargarComponentes.js)

Carga dinámica de los componentes (header, sidebar y footer) en las páginas.

Control del botón hamburguesa y overlay para abrir y cerrar la barra lateral.

CSS

css/login.css: Estilos generales con paleta de colores, estilos de login, header y barra lateral.

css/acerca.css: Estilos derivados de login.css, adaptados a la página de Acerca de.

Tecnologías usadas

HTML5 para la estructura modular.

CSS3 para el diseño visual y responsivo.

JavaScript para cargar componentes y manejar la interacción del sidebar.

Git y GitHub para control de versiones con ramas individuales.

Colaboradores

Daniel Alexander MIranda Vega - 192086 (rama: daniel-login) Encargado de login, header, sidebar, footer, acerca, estilos y script de carga de componentes.
Mileneth Adonis Coa Rodriguez - 192276 (rama: milenet_PaginaPrincipal) encargado del la pagina principal y del los productos de la pagina.

Estructura del proyecto Technoshop/ ├── components/ │ ├── header.html │ ├── sidebar.html │ └── footer.html ├── css/ │ ├── login.css │ └── acerca.css ├── js/ │ └── cargarComponentes.js ├── login.html ├── acerca.html └── README.md

Nota importante

Este proyecto es de carácter académico. Las funcionalidades de login y registro no cuentan aún con validación real de credenciales.
