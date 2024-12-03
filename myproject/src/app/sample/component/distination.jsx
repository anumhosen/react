import { Card } from "./card";

export function Distination() {
    return (
        <div className="p-10 bg-gray-100">
            <div>
                <h1 className="text-4xl font-bold text-center mb-10">Popular Distination</h1>
            </div>
            <div className="flex gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <Card IMAGE="./beachPhoto.jpg" PLACE="Tropical Beach" TEXT="Relax on white sand and enjoy crystal-clear waters." />
                <Card IMAGE="./mountainPhoto.jpg" PLACE="Mountain" TEXT="Explore and create advnture." />
                <Card IMAGE="./mountainPhoto.jpg" PLACE="Mountain" TEXT="Explore and create advnture." />
            </div>
        </div>
    )
}