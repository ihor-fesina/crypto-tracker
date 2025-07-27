import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="text-white py-2 text-center md:px-8 sticky top-0 z-50 backdrop-blur">
            <div className="border-b-2 border-white p-4 flex justify-between items-center">
                <Link to="/" className="text-xl font-semibold inline-block uppercase">
                    Crypto
                </Link>
                <nav className="flex space-x-6">
                    <Link 
                        to="/" 
                        className="text-white hover:text-gray-300 transition-colors duration-200"
                    >
                        Home
                    </Link>
                    <Link 
                        to="/news" 
                        className="text-white hover:text-gray-300 transition-colors duration-200"
                    >
                        News
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
