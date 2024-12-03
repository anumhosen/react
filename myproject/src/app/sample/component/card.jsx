export function Card({ IMAGE, PLACE, TEXT }) {
    return (
        <div className=" bg-white rounded-xl overflow-hidden hover:scale-105 duration-300 shadow-md">
            <img src={IMAGE} alt="" />
            <div>
                <h1 className="text-2xl px-5 pt-5 font-bold">{PLACE}</h1>
                <p className="p-5">{TEXT}</p>
            </div>
        </div>
    )
}