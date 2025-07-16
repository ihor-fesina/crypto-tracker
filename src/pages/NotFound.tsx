const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center text-white px-4 mt-20">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-xl mb-6">Oops! Page not found.</p>
            <a
                href="/"
                className="px-6 py-3 bg-blue-600 rounded hover:bg-blue-700 transition"
            >
                Go back home
            </a>
        </div>
    );
};

export default NotFound;
