import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="text-white py-2 text-center md:px-8 sticky top-0 z-50 backdrop-blur">
            <div className="border-b-2 border-white p-4 flex justify-start ">
            <Link to="/" className="text-xl font-semibold inline-block uppercase">
                Crypto
            </Link>
            </div>
        </header>
    );
};

export default Header;
