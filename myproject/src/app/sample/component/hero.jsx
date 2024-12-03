export function Hero() {
    return (
        <div className="h-[450px] text-white text-center bg-cover bg-center" style={{ backgroundImage: "url('./beachPhoto.jpg')" }}>
            <div className="bg-blue-900 bg-opacity-50 w-full h-full flex items-center justify-center">
                <div className="flex flex-col gap-4 justify-center items-center">
                    <h1 className="text-4xl text-white font-bold">Discover Your Next Adventure</h1>
                    <p className="text-xl">Plan your dream vacation with us</p>
                    <button className="bg-white text-blue-500 py-3 px-5 w-max rounded-full shadow-md">Explore Now</button>
                </div>
            </div>
        </div>
    )
}