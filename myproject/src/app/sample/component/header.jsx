export function Header() {
    // const {heading} = props
    return (
        <div>
            <nav className="w-full bg-blue-500 flex justify-between items-center px-10 py-3 grid grid-cols-1 sm:grid-cols-2">
                <div>
                    <h1 className="text-2xl text-white font-semibold">Travel Explorer</h1>
                </div>
                <div>
                    <ul className="flex gap-4 text-white justify-self-end">
                        <li className="hover: cursor-pointer hover:text-gray-500">Home</li>
                        <li className="hover: cursor-pointer hover:text-gray-500">Destination</li>
                        <li className="hover: cursor-pointer hover:text-gray-500">Pricing</li>
                        <li className="hover: cursor-pointer hover:text-gray-500">Contact</li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}