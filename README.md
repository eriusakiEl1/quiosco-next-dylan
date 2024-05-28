Esta es una aplicación que está desarrollada con varias tecnologías web, además de frameworks y herramientas útiles para la creación de aplicaciones web.

Versión 1:
La aplicación está basada en un quiosco de comida, lo que permite ver un catálogo de comida que puede ser bastante atractivo. Los usuarios pueden elegir sus alimentos y añadirlos a su pedido, escribir su nombre para identificarlo, recibir retroalimentación sobre el costo total de su pedido y enviarlo a administración. El personal de administración puede ver los pedidos realizados por los usuarios, identificándolos por el nombre que escribieron antes de realizarlos.

En la Versión 1 de esta aplicación se agregaron las siguientes características:

-----Cliente:

--Una vista de usuario común o cliente, donde aparece una barra lateral con las categorías de los alimentos y el logo de la empresa.
Categorías de productos identificables por su nombre, como: Café, Hamburguesas, Pizzas, Donas, Pasteles, Galletas; cada una de estas categorías cuenta con una imagen que la representa e identifica.

--Una sección donde, posterior a elegir alguna categoría, aparecen productos a modo de tarjetas con información relevante, como la descripción del producto, su precio, una imagen del producto y un botón con la leyenda "Agregar", para que el usuario pueda elegir sus productos y, al presionar el botón adjunto a cada tarjeta, el producto se añada al pedido.

--Una sección de pedido donde, después de añadir uno o varios productos, se actualiza a un resumen de pedido. Este pedido cuenta con una tarjeta con la descripción del producto, el costo unitario, la cantidad de productos a consumir y un subtotal por cada tarjeta; una etiqueta de contexto donde se puede ver el total a pagar, un campo para que el usuario escriba su nombre y un botón para enviar el pedido a administración.

-----Administrador:

--El administrador tiene su propia página web, en la cual también cuenta con una barra lateral con tres opciones: Órdenes, Productos y Ver Quiosco.

--Un menú de Órdenes que se carga trayendo información de las órdenes no atendidas aún por el personal, mostrando los pedidos de los clientes que aún están por ser despachados. Los pedidos se pueden visualizar como tarjetas con el nombre del cliente, los productos ordenados y su cantidad, además del total a pagar.

--Un enlace que carga una página con un único mensaje: "Administrar Productos".

--Un enlace que abre una nueva pestaña en el navegador y lleva al administrador a la vista del cliente; este enlace tiene el nombre de "Ver Quiosco".



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
