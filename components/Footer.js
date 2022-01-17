const Footer = () => {
    return (
        <footer className="max-w-7xl mx-auto py-4  sm:px-6 lg:px-8">
            <p className="text-center text-base text-gray-400">
                &copy; {new Date().getFullYear()} Martin Weiss
            </p>
        </footer>
    )
}

export default Footer;