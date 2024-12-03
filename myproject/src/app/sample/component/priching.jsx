export function Priching() {
    return (
        <div className="bg-slate-200 p-10 ">
            <h1 className="text-center font-bold text-4xl mb-10">Priching Plan</h1>
            <div className="overflow-x-hidden">
                <table className="bg-white w-full rounded-xl overflow-hidden shadow-md ">
                    <thead>
                        <tr className="bg-blue-500 text-white text-2xl">
                            <th className="px-10 py-3">Package</th>
                            <th className="px-10 py-3 border-x">Feature</th>
                            <th className="px-10 py-3">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-10 py-3">Standard</td>
                            <td className="px-10 py-3">
                                <ul className="list-disc">
                                    <li>3 Nights Accomodation</li>
                                    <li>City Tour</li>
                                </ul>
                            </td>
                            <td className="px-10 py-3">$499</td>
                        </tr>
                        <tr>
                            <td className="px-10 py-3">Deluxe</td>
                            <td className="px-10 py-3">
                                <ul className="list-disc">
                                    <li>5 Night Accomodation</li>
                                    <li>All Meals Included</li>
                                    <li>Private Guide</li>
                                </ul>
                            </td>
                            <td className="px-10 py-3">$999</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}