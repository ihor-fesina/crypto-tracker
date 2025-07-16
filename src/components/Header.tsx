import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="text-white py-4 text-center md:px-8">
            <div className="border-b-2 border-white p-4 flex justify-start ">
            <Link to="/" className="text-xl font-semibold inline-block uppercase">
                Crypto
            </Link>
            </div>
        </header>
    );
};

export default Header;
