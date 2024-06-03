# Esta es una aplicación que está desarrollada con varias tecnologías web, además de frameworks y herramientas útiles para la creación de aplicaciones web.

## Fecha de primer deploy: 28/05/2024
### Versión 1:

    La aplicación está basada en un quiosco de comida, lo que permite ver un catálogo de comida que puede ser bastante atractivo. Los usuarios pueden elegir sus alimentos y añadirlos a su pedido, escribir su nombre para identificarlo, recibir retroalimentación sobre el costo total de su pedido y enviarlo a administración. El personal de administración puede ver los pedidos realizados por los usuarios, identificándolos por el nombre que escribieron antes de realizarlos.

 * * En la Versión 1 de esta aplicación se agregaron las siguientes características:

- * Cliente:

1. Una vista de usuario común o cliente, donde aparece una barra lateral con las categorías de los alimentos y el logo de la empresa. Categorías de productos identificables por su nombre, como: Café, Hamburguesas, Pizzas, Donas, Pasteles, Galletas; cada una de estas categorías cuenta con una imagen que la representa e identifica.

2. Una sección donde, posterior a elegir alguna categoría, aparecen productos a modo de tarjetas con información relevante, como la descripción del producto, su precio, una imagen del producto y un botón con la leyenda "Agregar", para que el usuario pueda elegir sus productos y, al presionar el botón adjunto a cada tarjeta, el producto se añada al pedido.

3. Una sección de pedido donde, después de añadir uno o varios productos, se actualiza a un resumen de pedido. Este pedido cuenta con una tarjeta con la descripción del producto, el costo unitario, la cantidad de productos a consumir y un subtotal por cada tarjeta; una etiqueta de contexto donde se puede ver el total a pagar, un campo para que el usuario escriba su nombre y un botón para enviar el pedido a administración.

- * Administrador:

 * * El administrador tiene su propia página web, en la cual también cuenta con una barra lateral con tres opciones: Órdenes, Productos y Ver Quiosco.

1. Un menú de Órdenes que se carga trayendo información de las órdenes no atendidas aún por el personal, mostrando los pedidos de los clientes que aún están por ser despachados. Los pedidos se pueden visualizar como tarjetas con el nombre del cliente, los productos ordenados y su cantidad, además del total a pagar.

2. Un enlace que carga una página con un único mensaje: "Administrar Productos".

3. Un enlace que abre una nueva pestaña en el navegador y lleva al administrador a la vista del cliente; este enlace tiene el nombre de "Ver Quiosco".

## Fecha de segundo deploy: 30/05/2024
### Versión 2: 

    Durante la segunda versión y deploy de la aplicación de comida quiosco, se añadieron las siguientes funcionalidades: Ahora el administrador puede ver los productos registrados en el sistema y tiene la posibilidad de buscar productos específicos por medio de palabras clave, gracias a la implementación de un campo de búsqueda. Por medio de un formulario, el administrador ahora tiene la capacidad de agregar nuevos productos al inventario, llenar los campos de nombre, categoría, precio y cargar una imagen ahora es obligatorio. Fueron arreglados errores que impedían ver pedidos en tiempo real además de que esta función fue ampliada para actualizarse cada cierto tiempo.

 * * En la Versión 2 de esta aplicación se agregaron las siguientes características:

1. Fue implementada la sección Products, en la página de administración, donde ahora es posible ver los productos que se han registrado en el sistema. Para facilitar la visualización de los productos, son mostrados a manera de tabla con la información pertinente para cada uno, además, la tabla fue paginada, lo que quiere decir que los productos se mostrarán de 10 en 10 y estos pueden ser explorados mediante botones que indican el número de página.

2. Complemento de la sección Products, un campo de búsqueda también fue implementado. Cuando se escribe una palabra y se da clic en el botón de Search, los productos que contengan esa palabra, independientemente si es que esta fue escrita en mayúsculas o minúsculas, aparecerán nuevamente a formato de tabla. En caso de no encontrar ningún producto coincidente, un mensaje de contexto aparecerá mencionando que no se encontraron productos.

3. Adicionalmente fue añadida la función de agregar más productos, donde, por medio de un formulario, se solicitarán al usuario datos del nuevo producto, el nombre de este, su precio, categoría a la que pertenece y una imagen del producto, todos estos campos son obligatorios. Es decir, es necesario llenar todos y cada uno, en caso contrario el sistema se encargará de advertir al usuario que no todos los campos han sido llenados y mencionará cuál de estos campos está vacío.

# Fecha de tercer deploy: 02/06/2024
### Versión 3:
    Última versión de la aplicación, en esta versión se pueden ver cambios realmente significativos, pues ahora al entrar en la aplicación esta nos llevará a la 
            
            
    Fueron añadidas funciones para el administrador: ahora además de poder loggearse como administrador, tiene la posibilidad de crear más usuarios administrativos y ver las órdenes que están listas en una pantalla aparte, donde, a forma de lista, podemos ver el nombre del cliente, los productos que compró y su cantidad. El usuario administrador ahora también es capaz de editar los productos que se encuentran registrados en el sistema.

 * * En la Versión 3 de esta aplicación se agregaron las siguientes características:

1. El usuario administrador ahora puede acceder a la ventana de administrador por medio de un login que solicita su correo y contraseña.

2. El usuario administrador ahora puede crear cuentas administrativas que tendrán acceso a acciones como: ver el catálogo de productos, ver una lista con los productos registrados en el sistema y buscar productos por medio de una barra de búsqueda, editar y crear productos y ver las órdenes que han sido completadas para su posterior entrega al cliente.

3. Ahora es posible crear cuentas administrativas desde la ventana de loggeo, estas son creadas a partir de un correo, una contraseña y el nombre del usuario administrador.

4. El usuario administrador ahora puede ver una lista de órdenes completadas, de esta forma es posible ver las órdenes que estén listas para su entrega.

# Vista de Usuario.
[quiosco-next-dylan.vercel.app](https://quiosco-next-dylan.vercel.app/order/cafe)

# Vista de Administrador.
[quiosco-next-dylan.vercel.app](https://quiosco-next-dylan.vercel.app/login)