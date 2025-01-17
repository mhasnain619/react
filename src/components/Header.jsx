const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
import logo from '../assets/react-core-concepts.png'

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
    const descript = reactDescriptions[genRandomInt(2)]
    return (
        <header>
            <img src={logo} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {descript} React concepts you will need for almost any app you are going to build!
            </p>
        </header>
    );
}