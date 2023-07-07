import HeroSection from '../components/herosection';
import NavBar from '../components/NavBar';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Feedback from '../components/Feedback';
export default function (props) {
    let {darkMode, toggleDarkMode} = props

    const uImg = 'https://picsum.photos/200'

    return (
        <section className={`transition-all duration-200 ${darkMode ? 'dark' : ''}`}>
            <div className="h-2/4 w-full overflow-hidden" style={{background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)"}}>
                <nav className="text-white">
                    <div className="container mx-auto px-6 py-2 flex justify-between items-center">
                        <a className="font-bold text-2xl lg:text-4xl" href="#">
                            daydream
                        </a>
                        <div className="lg:block">
                            {<NavBar toggleDarkMode ={toggleDarkMode} darkMode={darkMode}/>}
                        </div>
                    </div>
                </nav>
                <HeroSection/>

            </div>

            <Features/>
            <div className="w-full dark:bg-gray-900 p-3">
                <h1 className='text-3xl font-bold text-center dark:text-white'>What our users has to say!</h1>
                <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-3 p-3">
                    <Feedback img={'https://picsum.photos/200'} author="James Bond" feedback="This is just a great service!"/>
                    <Feedback img={'https://picsum.photos/200'} author="Elon Musk" feedback="omg shut this down, its a competitor to twitter😭😭"/>
                    <Feedback img={'https://picsum.photos/200'} author="Pernille Skipper" feedback="det bar'e go'"/>
                </div>
            </div>
            <Footer/>
        </section>
    )
}