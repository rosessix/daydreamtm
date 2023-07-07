export default function ({author, feedback, img}) {
    return (
        <div className="bg-white dark:bg-gray-800 dark:text-white w-full md:w-auto rounded-lg shadow-lg overflow-hidden p-1 text-black drop-shadow-lg">
            <div className="p-4">
                <div className="flex items-center mt-4">
                    <img className="w-20 h-20 rounded-full mr-4" src={img} alt="Avatar" />
                    <div>
                        <p className="font-bold">{author}</p>
                        <p className="text-xl md:text-l">{feedback}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}