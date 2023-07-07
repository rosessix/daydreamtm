import image from '../assets/Example Scenes/PNG/example-scene-2.png'
import image2 from '../assets/Example Scenes/PNG/example-scene-1.png'
export default function() {
    return (
        <div className="w-full dark:bg-gray-800 overflow-hidden relative dark:text-white transition-all duration-300">
            <section className="container mx-auto px-6 p-10 ">
                <div className="flex flex-wrap items-center md:m-0">
                    <div className="w-full md:w-1/2">
                        <h4 className="text-3xl font-bold">Easy to use</h4>
                        <p className="text-gray-800 dark:text-gray-400">Just use our service, okay? We spend alot of time creating this... please i am insane</p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img src={image} alt="Monitoring" />
                    </div>
                </div>

                <div className="flex flex-wrap items-center my-10 md:m-0">
                    <div className="order-2 md:order-1 w-full md:w-1/2">
                        <img src={image2} alt="Monitoring" />
                    </div>
                    <div className="order-1 md:order-2 w-full md:w-1/2">
                        <h4 className="text-3xl font-bold">Spread information, love or even start debates!</h4>
                        <p className="text-gray-800 dark:text-gray-400">daydream's focus is to make people discuss, share and evolve as persons!</p>
                    </div>
                </div>
            </section>
        </div>
    )
}