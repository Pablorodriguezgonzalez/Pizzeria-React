This site is published on [GitHub Pages](https://pablorodriguezgonzalez.github.io/Pizzeria-React/).
V 1.1 Se incorporan formularios de Registro y Login
V 1.2 Incorpora un nuevo componente llamado Cart.jsx que contiene el carrito de compras, Reemplaza el origen de datos por un archivo JSON llamado pizzas.js que luego se renderiza dinamicamente en los componentes CardPizza.jsx y Cart.jsx
V 1.3 Incorpora el consumo de una API desde el backend al proyecto, consume un endpoint desde el componente Home.jsx y renderiza su contenido a través del componente CardPizza.jsx, agrega un nuevo componente llamado Pizza.jsx que consume un endpoint que permite obtener la información de la pizza y renderiza su contenido en el componente.
V 1.4 Implementa el sistema de enrutamiento mediante uso de rutas y se modifican los componentes para su uso. Agrega 2 nuevos componentes llamados NotFound y Profile
V 1.5 Implementa el uso de context para compartir estados entre componentes y se modifican los componentes para su uso.
V 1.6 Implementa UseParams para obtener el id de la pizza y realizar la llamada dinamica al componente CardPizza.jsx. Incorpora un nuevo contexto llamado UserContext que permite conocer el estado del token. Define 2 nuevos archivos de routes que permiten controlar el acceso a rutas publicas y protegidas dependiendo del valor del token
V 1.7.1 Implementa los metodos Register, Login, Getprofile, Logout mediante el uso del contexto. Implementa el consumo del backend para realizar el registro, validar el login y obtener token, recupera la información de usuario, realiza el envio del carro de compra al backend.
