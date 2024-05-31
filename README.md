

# Esta es una aplicación que está desarrollada con varias tecnologías web, además de frameworks y herramientas útiles para la creación de aplicaciones web.

## Fecha de primer deploy: 28/05/2024
### Versión 1:

    La aplicación está basada en un quiosco de comida, lo que permite ver un catálogo de comida que puede ser bastante atractivo. Los usuarios pueden elegir sus alimentos y añadirlos a su pedido, escribir su nombre para identificarlo, recibir retroalimentación sobre el costo total de su pedido y enviarlo a administración. El personal de administración puede ver los pedidos realizados por los usuarios, identificándolos por el nombre que escribieron antes de realizarlos.

 * * En la Versión 1 de esta aplicación se agregaron las siguientes características:

- * Cliente:

1. Una vista de usuario común o cliente, donde aparece una barra lateral con las categorías de los alimentos y el logo de la empresa.
Categorías de productos identificables por su nombre, como: Café, Hamburguesas, Pizzas, Donas, Pasteles, Galletas; cada una de estas categorías cuenta con una imagen que la representa e identifica.

2. Una sección donde, posterior a elegir alguna categoría, aparecen productos a modo de tarjetas con información relevante, como la descripción del producto, su precio, una imagen del producto y un botón con la leyenda "Agregar", para que el usuario pueda elegir sus productos y, al presionar el botón adjunto a cada tarjeta, el producto se añada al pedido.

3. Una sección de pedido donde, después de añadir uno o varios productos, se actualiza a un resumen de pedido. Este pedido cuenta con una tarjeta con la descripción del producto, el costo unitario, la cantidad de productos a consumir y un subtotal por cada tarjeta; una etiqueta de contexto donde se puede ver el total a pagar, un campo para que el usuario escriba su nombre y un botón para enviar el pedido a administración.

- * Administrador:

 * * El administrador tiene su propia página web, en la cual también cuenta con una barra lateral con tres opciones: Órdenes, Productos y Ver Quiosco.

1. Un menú de Órdenes que se carga trayendo información de las órdenes no atendidas aún por el personal, mostrando los pedidos de los clientes que aún están por ser despachados. Los pedidos se pueden visualizar como tarjetas con el nombre del cliente, los productos ordenados y su cantidad, además del total a pagar.

2. Un enlace que carga una página con un único mensaje: "Administrar Productos".

3. Un enlace que abre una nueva pestaña en el navegador y lleva al administrador a la vista del cliente; este enlace tiene el nombre de "Ver Quiosco".

## Fecha de segundo deploy: 30/05/2024
### Version 2: 

    Durente la segunda version y deploy de la aplicacion de comida quiosco, se añadieron las siguintes funcionalidades: Ahora el administrador puede ver los productos registrados en el sistema y tiene la posibilidad de buscar productos especificos por medio de palabras clave, gracias a la implementación de un campo de busqueda. Por medio de un formulario, el administrador, ahora tiene la capacidad de agregar nuevos productos al inventario, llenar los campos de nombre, categoria, precio y cargar una imagen ahora en obligatorio. Fueron arreglados errores que impedian ver pedidos en tiempo real ademas de que esta funcion fue ampliada para actualizarse cada cierto tiempo.

 * * En la Versión 1 de esta aplicación se agregaron las siguientes características:

1. Fue implementada la seccion Products, en la pagina de administración, donde ahora es posible ver los productos que se han registrado en el sistema. Para facilitar la visualización de los productos son mostrados a manera de tabla con la infromación pertinente para cada uno, además, la tabla fue paginada, lo que quiere decir que los productos se mostrarán de 10 en 10 y estos pueden ser explorados mediante botones que indican el número de página.

2. Complemento de la sección Products, un campo de busqueda también fue implementado. Cuando se escribe una palabra y se da clic en el boton de Search, los productos que contengan esa palabra, independientemente si es que esta fue escrita en mayúsculas o minúsculas, apareceran nuevamente a formato de tabla, en caso de no encontrar ningún producto conicidente, un mensaje de contexto aparecera mencionando que no se encontraron productos.

3. Adicionalmente fue añadida la función de agregar más productos, donde, por medio de un formulario, se solicitaran al usuario datos del nuevo producto, el nombre de este, su precio, categoria a la que pertence y una imagen del producto, todos estos campos son obligatorios, es decir, es necesario llenar todos y cada uno, en caso contrario el sistema se encargara de advertir al usuario que no todos los campos han sido llenados y mecionará cual de estos campos esta vacio.

# Vista de Usuario.
(quiosco-next-dylan.vercel.app)[https://quiosco-next-dylan.vercel.app]

# Vista de Administrador.
(quiosco-next-dylan.vercel.app/admin/products)[https://quiosco-next-dylan.vercel.app/admin/products]