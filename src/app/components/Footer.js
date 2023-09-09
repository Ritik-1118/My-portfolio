const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-4 text-center fixed bottom-0 w-full">
            <div className="container mx-auto">
            <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
            </div>
        </footer>
        );
    };
    
export default Footer;
