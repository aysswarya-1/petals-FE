import { Link } from "react-router-dom";

const AboutHero = () => {
    return (
        <div className="bg-white rounded-xl p-6 grid md:grid-cols-2 gap-6 items-center">
            <img
                src="https://images.unsplash.com/photo-1649738308588-07716edfa020?w=600&auto=format&fit=crop&q=60"
                alt="Flowers"
                className="rounded-lg object-cover w-full h-64"
            />

            <div>
                <p className="text-xs text-gray-400">Blush & Bloom</p>
                <h2 className="text-xl font-semibold mt-2">
                    Flowers, crafted with care
                </h2>
                <p className="text-sm text-gray-500 mt-3">
                    We believe flowers speak the language of love. Our studio pairs
                    garden-inspired composition with couture detail.
                </p>

                <div className="flex gap-3 mt-4">
                    <Link
                        to="/weddings-events"
                        className="bg-rosy-500 text-white px-4 py-2 rounded-md text-sm">
                        Weddings & Events
                    </Link>
                    <Link
                        to="/shop"
                        className="border px-4 py-2 rounded-md text-sm">
                        Shop Everyday Gifts
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutHero;
