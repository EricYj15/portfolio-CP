import { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    const [darkMode, setDarkMode] = useState(false);

    // Alterna o modo noturno no body do site
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark', !darkMode);
    };

    return (
        <nav className="bg-gray-800 p-4 w-full flex justify-between items-center">
            <ul className="flex space-x-6">
                <li><Link className="text-white hover:text-gray-300" to="/">Home</Link></li>
                <li><Link className="text-white hover:text-gray-300" to="/projects">Projetos</Link></li>
                <li><Link className="text-white hover:text-gray-300" to="/contact">Contato</Link></li>
            </ul>
            <button
                onClick={toggleDarkMode}
                className="text-white hover:text-gray-300 px-4 py-2 rounded transition bg-gray-700"
            >
                {darkMode ? 'Modo Claro' : 'Modo Noturno'}
            </button>
        </nav>
    );
};

export default Menu;
