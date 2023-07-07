import { Link } from 'react-router-dom'
export default function () {
    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-2 text-white md:text-4xl transition-all duration-200">
                    Revolutionize the world, with your opinion!
                </h2>
                <h3 className="text-xl  mb-8 text-gray-200 md:text-2xl">
                    Let others know what you think.
                </h3>

                <Link to='/login' className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider transition-all duration-200 hover:bg-lime-600 hover:text-white">
                    REGISTER NOW
                </Link>
            </div>
        </section>

    )
}