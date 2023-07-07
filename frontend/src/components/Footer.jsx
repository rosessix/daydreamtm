export default function () {
    return (
        <footer className="bg-gray-800 text-center">
            <div className="container mx-auto px-6">
                <div className="flex items-center flex-col  sm:flex-row sm:flex sm:items-center sm:justify-between py-4">
                    <div className="sm:flex-shrink-0">
                        <p className="text-gray-400">© 2023 daydream</p>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-4">
                        <ul className="sm:flex items-center">
                            <li className="sm:ml-6">
                                <a className="text-gray-400 hover:text-white" href="#">Privacy Policy</a>
                            </li>
                            <li className="sm:ml-6">
                                <a className="text-gray-400 hover:text-white" href="#">Terms of Service</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}