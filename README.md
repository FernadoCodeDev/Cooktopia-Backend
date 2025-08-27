![N1](https://github.com/FernadoCodeDev/Cooktopia-Backend/blob/main/Readme/N1.webp)

# COOKTOPIA SHOP 🛒

**COOKTOPIA SHOP** es un E-commerce especializado en artículos de cocina, desarrollado como parte de una prueba técnica con el objetivo de construir una tienda en línea funcional inspirada en la experiencia de WooCommerce.

Este repositorio corresponde a la versión que integra Frontend y Backend, permitiendo no solo la visualización de productos sino también la gestión completa del sistema.

[![CooktopiaShop](https://img.shields.io/static/v1?message=Cooktopia-Shop&logo=shopee&label=&color=e2d9c8&logoColor=black&labelColor=&style=for-the-badge)](https://cooktopiashop.netlify.app/)
<div align="left">

## STACK
    
![JS](https://img.shields.io/static/v1?message=javascript&logo=javascript&label=&color=F7DF1E&logoColor=black&labelColor=&style=for-the-badge)
![React](https://img.shields.io/static/v1?message=React&logo=react&label=&color=61DAFB&logoColor=black&labelColor=&style=for-the-badge)
![tailwind](https://img.shields.io/static/v1?message=tailwindCSS&logo=tailwindcss&label=&color=06B6D4&logoColor=white&labelColor=&style=for-the-badge)
![vite](https://img.shields.io/static/v1?message=vite&logo=vite&label=&color=646CFF&logoColor=white&labelColor=&style=for-the-badge)
![php](https://img.shields.io/static/v1?message=php&logo=php&label=&color=777BB4&logoColor=white&labelColor=&style=for-the-badge)
![laravel](https://img.shields.io/static/v1?message=laravel&logo=laravel&label=&color=FF2D20&logoColor=white&labelColor=&style=for-the-badge)
![mysql](https://img.shields.io/static/v1?message=mysql&logo=mysql&label=&color=4479A1&logoColor=white&labelColor=&style=for-the-badge)

</div>  

<details>
<summary>Interfaz y Gestión de Productos</summary>

A continuación se muestran capturas del funcionamiento del proyecto en diferentes vistas:

## Header
<div align="left">

  <img src="https://github.com/FernadoCodeDev/Cooktopia-Backend/blob/main/Readme/N3.png" alt="Vista Vertical" width="20%">
  <img src="https://github.com/FernadoCodeDev/Cooktopia-Backend/blob/main/Readme/N2.png" alt="Vista Horizontal" width="71%">

  Imagen del Header en versión móvil y versión escritorio, mostrando la adaptación del diseño según el tamaño de pantalla.

</div>

## Lista de Productos:

ista completa de productos leídos desde la base de datos, con cada producto asociado a su categoría correspondiente.

![N4](https://github.com/FernadoCodeDev/Cooktopia-Backend/blob/main/Readme/N4.png)

## Filtrado por Categoría:

Imagen mostrando la funcionalidad de filtrado de productos por categoría, ejemplificado con los productos de cuchillos y accesorios de corte, demostrando cómo los usuarios pueden ver únicamente los productos de interés.

![N5](https://github.com/FernadoCodeDev/Cooktopia-Backend/blob/main/Readme/N5.png)

## Categorías de Productos

La página principal incluye una sección estática con las diferentes categorías de Cooktopia. Cada categoría se muestra mediante una imagen con un efecto overlay, que oscurece la imagen y permite visualizar claramente el nombre de la categoría.

Aunque actualmente estas categorías son estáticas, podrían convertirse fácilmente en enlaces funcionales que lleven a páginas mostrando los productos correspondientes a cada categoría. Esta mejora forma parte de futuras optimizaciones que podrían implementarse si se dispusiera de más tiempo, pero el enfoque principal del proyecto se centró en las funcionalidades esenciales indicadas en la prueba técnica.

![N6](https://github.com/FernadoCodeDev/Cooktopia-Backend/blob/main/Readme/N6.png)

## Visualización de Productos y Modal

Debido a las limitaciones de tiempo, todos los productos se muestran directamente en la **página principal**, por lo que actualmente no existe una página dedicada para visualizar un producto individual por su ID.

En su lugar, al hacer clic sobre un producto, se abre un **Modal**

<div align="left">

  <img src="https://github.com/FernadoCodeDev/Cooktopia-Backend/blob/main/Readme/N7.png" alt="Vista Horizontal" width="20.5%">
  <img src="https://github.com/FernadoCodeDev/Cooktopia-Backend/blob/main/Readme/N8.png" alt="Vista Vertical" width="71%">
</div>

que permite ver la información detallada del producto seleccionado. Esta solución fue elegida por ser más accesible y rápida de implementar, aunque podría mejorarse en el futuro creando una **página dedicada para cada producto.**

## perspectiva de Administrador

Es importante destacar que la página se visualiza desde la **perspectiva del Administrador**, por lo que dentro del Modal se incluyen **botones para gestionar el producto:**

- **Actualizar**: redirige a la página de edición del producto seleccionado.
- **Eliminar**: permite borrar el producto directamente desde el Modal.

</details>

<details>
<summary>Gestión de Productos (CRUD)</summary>

El proyecto integra un sistema completo de CRUD (Crear, Leer, Actualizar, Eliminar) para la gestión de productos, utilizando PHP y Laravel en el backend y React en el frontend.

Para que puedas ejecutar y probar completamente el CRUD, es importante seguir estos pasos:

- **Clonar el repositorio y configurar tu base de datos junto con las variables de entorno.**
- **Ejecutar el script de creación de base de datos, tablas y campos requeridos:**

[script de creación de base de datos](https://clerk.com/docs)

- **El proyecto cuenta con tres rutas principales:**

- `/`  Página principal donde se muestran los productos.
- `/CreatePage`  Página para **crear un nuevo producto**.
- `products/{id}/edit ` Página para **editar un producto existente**.

> Para acceder a la página de creación de productos no existe un botón directo en la interfaz; deberás agregar manualmente `/CreatePage` a **la URL** de Laravel.

**Para levantar el proyecto:**

- Ejecuta `php artisan serve` para iniciar el servidor de Laravel, lo que te proporcionará una URL como `127.0.0.1:8000`.
- Ejecuta `npm run dev` para iniciar el frontend con React y poder visualizar la aplicación.
- Accede a `127.0.0.1:8000/CreatePage` para ingresar a la página de creación de nuevos productos.

Esta sección se centra en explicar cómo funciona el CRUD y cómo interactuar con las páginas de creación y actualización de productos, asegurando que puedas gestionar el inventario de manera completa.


# CREATE 

Una vez configurado el proyecto y accediendo a la ruta `127.0.0.1:8000/CreatePage`, se despliega la página de **administración para la creación de productos.**

Es importante mencionar que actualmente **no existe un sistema de login**, por lo que al clonar el repositorio se puede acceder sin ninguna restricción. Una mejora futura sería implementar un **sistema de autenticación**, lo cual requeriría páginas adicionales y configuraciones tanto en la base de datos como en el backend.

Dentro de la página de creación se encuentran dos formularios principales:

- **Formulario de nueva categoría (estático):** actualmente solo se muestra como parte de la interfaz. Una mejora futura sería habilitar la funcionalidad para agregar nuevas categorías dinámicamente.

- **Formulario de creación de productos:** permite registrar un nuevo producto en el sistema. En la imagen de ejemplo se muestra un producto de prueba.

El backend valida que **todos los campos estén completos** antes de aceptar la creación, evitando así registros incompletos. Además, al incluir imágenes, el backend se encarga de:

- **Renombrar automáticamente** los archivos para evitar duplicados.
- **Almacenar el nombre de la imagen en la base de datos.**
- **Guardar las imágenes en la carpeta** `storage`, siguiendo buenas prácticas de Laravel.

![N9](https://github.com/FernadoCodeDev/Cooktopia-Backend/blob/main/Readme/N9.png)

> Por motivos de buenas prácticas, el contenido de la carpeta `storage` no se sube al repositorio. Sin embargo, en la carpeta `public` se incluye una copia de las imágenes para. [copia de imagenes de la base de datos](https://github.com/FernadoCodeDev/Cooktopia-Backend/tree/main/public/images)


## Guardar los datos

Al presionar el botón **Guardar producto**, se ejecuta la petición al backend. Si el proceso es exitoso, se muestra una **alerta visual mediante React-Toastify**, confirmando que los datos fueron cargados correctamente en la base de datos.

![N10](https://github.com/FernadoCodeDev/Cooktopia-Backend/blob/main/Readme/N10.png)

# READ

Una vez guardados los datos en el sistema, estos pueden visualizarse correctamente desde la página principal.

Como ejemplo, se creó un producto de prueba llamado **“Producto de Prueba”**, el cual fue registrado con la categoría **Accesorios de Cocina**. El sistema lo lee e interpreta sin inconvenientes, mostrándolo en la lista general de productos y, al aplicar el filtrado por categoría, aparece únicamente dentro de la categoría correspondiente.

![N11](https://github.com/FernadoCodeDev/Cooktopia-Backend/blob/main/Readme/N11.png)

Al hacer clic sobre el producto, se abre el **Modal**, mostrando en detalle la información registrada para dicho producto.
![N12](https://github.com/FernadoCodeDev/Cooktopia-Backend/blob/main/Readme/N12.png)

Este flujo confirma que los datos fueron i**nyectados correctamente en la base de datos** y que el sistema cumple con la funcionalidad de la segunda operación del CRUD: **Read.**

# Update 

Dado que la aplicación se visualiza desde la **perspectiva del Administrador**, en el Modal de cada producto aparece un botón para **Actualizar datos**.

Al presionar este botón, el sistema redirige a la ruta:

`127.0.0.1:8000/products/{id}/edit`

En esta página se muestra nuevamente el formulario, pero esta vez con los **campos precargados** con la información del producto seleccionado

![N13](https://github.com/FernadoCodeDev/Cooktopia-Backend/blob/main/Readme/N13.png)

Esto confirma que los datos son leídos correctamente para su correspondiente edición.

En el ejemplo, el producto inicial llamado **“Producto de Prueba”** fue modificado a **“Producto de Prueba de actualización”**, junto con otros ajustes en sus datos. Al comparar ambas capturas, pueden observarse claramente las diferencias.

![N14](https://github.com/FernadoCodeDev/Cooktopia-Backend/blob/main/Readme/N14.png)

Tras realizar los cambios y presionar el botón **Actualizar datos**, se muestra una nueva alerta confirmando que el producto fue actualizado exitosamente.

![N15](https://github.com/FernadoCodeDev/Cooktopia-Backend/blob/main/Readme/N15.png)

Al regresar a la página principal, se puede comprobar que los datos se han modificado correctamente, tanto en la lista de productos

![N16](https://github.com/FernadoCodeDev/Cooktopia-Backend/blob/main/Readme/N16.png)

como en la información mostrada dentro del Modal.

De esta manera, se cumple con la tercera operación del CRUD: **Update**, asegurando que los productos puedan ser editados y sus cambios reflejados de inmediato en el sistema.

![N17](https://github.com/FernadoCodeDev/Cooktopia-Backend/blob/main/Readme/N17.png)


# Delete

Una vez comprobadas las funcionalidades de **Crear, Leer y Actualizar**, se procedió a realizar la eliminación de productos.

En el **Modal de cada producto** se incluye un botón de **Eliminar**, que al presionarlo muestra una **alerta de confirmación** para evitar que la acción se ejecute de manera accidental

![N18](https://github.com/FernadoCodeDev/Cooktopia-Backend/blob/main/Readme/N18.png)

Si el usuario confirma la acción, el producto se elimina de la base de datos y, tras recargar la página, se comprueba que el producto ya no aparece en la lista de Cooktopia.

![N19](https://github.com/FernadoCodeDev/Cooktopia-Backend/blob/main/Readme/N19.png)

Esta funcionalidad garantiza que los productos puedan eliminarse de forma segura, completando así la cuarta operación del CRUD: **Delete.**

Cabe mencionar que el sistema utiliza la alerta nativa del navegador como confirmación. Aunque cumple su función, una mejora futura sería **implementar alertas personalizadas**, brindando una experiencia visual más acorde al resto de la aplicación.

Con este proyecto se implementaron de forma exitosa las cuatro operaciones básicas del CRUD:

- **Create** (Crear nuevos productos).
- **Read** (Leer y visualizar productos desde la base de datos).
- **Update** (Actualizar los datos de un producto existente).
- **Delete** (Eliminar productos de manera segura).

Este desarrollo fue una prueba técnica muy enriquecedora, que permitió aplicar tanto frontend como backend, simulando un entorno de comercio electrónico con base en WooCommerce.

Más allá de ser un CRUD, fue una experiencia en la que pude consolidar conocimientos previos y reforzar buenas prácticas. Además de este proyecto, ya he realizado otros dos CRUD como proyectos personales:

<div align="left">

[![Cosmic-Pizza](https://img.shields.io/static/v1?message=Cosmic-Pizza&logo=hoppscotch&label=&color=0b152f&logoColor=white&labelColor=&style=for-the-badge)](https://github.com/FernadoCodeDev/Cosmic-Pizza)
[![Keys-Home](https://img.shields.io/static/v1?message=Keys-Homes&logo=keeweb&label=&color=1d3e37&logoColor=white&labelColor=&style=for-the-badge)](https://github.com/FernadoCodeDev/KeysHomes)

</div>  

lo que demuestra mi interés y práctica constante en este tipo de desarrollos.

</details>

----

Gracias por tomarte el tiempo de leer este README 🙌
Si eres reclutador, o simplemente alguien interesado en mi trabajo, ¡espero que disfrutes revisando este proyecto tanto como yo disfruté al desarrollarlo!

Cabe mencionar que la página desplegada

[![CooktopiaShop](https://img.shields.io/static/v1?message=Cooktopia-Shop&logo=shopee&label=&color=e2d9c8&logoColor=black&labelColor=&style=for-the-badge)](https://cooktopiashop.netlify.app/)

corresponde a la versión estática del proyecto, proveniente de otro repositorio, y contiene únicamente el frontend funcionando con datos simulados mediante JSON.

El contenido completo de ese repositorio lo puedes consultar aquí:

[![CooktopiaShop-FrontEnd-Repositorio](https://img.shields.io/static/v1?message=Cooktopia-Shop-FrontEnd-Repositorio&logo=github&label=&color=181717&logoColor=white&labelColor=&style=for-the-badge)](https://github.com/FernadoCodeDev/Cooktopia-frontend)



