import reactImg from '../../assets/react-core-concepts.png'; //we use two dots in order to search the route by going out of our current folders two times
import './Header.css'; //Esta importación normal de un archivo .css lo que provoca es que el bundler meta ese CSS en el scope global del navegador
//aplicándose los estilos a todas las etiquetas que coincidan en el DOM. Para que esto no suceda, deberíamos usar .module.css en lugar de .css files, de manera 
//que el bundler compila las clases para que sean locales al componente. En este caso para que etiquetas <header> fuera de la componente Header no posean los mismos estilos. 

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max+1));
}

function Header() {
  let description= reactDescriptions[genRandomInt(2)];
  return (
    <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
    </header>
  )
}

export default Header;