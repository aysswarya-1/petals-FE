import { Flower2, HandHeartIcon, Leaf } from "lucide-react";

const AboutGuides = () => {
    const guides = [
        { step: "Garden-inspired artistry with seasonal blooms.", icon: Flower2 },
        { step: "Sustainable sourcing from local growers first.", icon: Leaf },
        { step: "Concierge service, from first moodboard to final stem.", icon: HandHeartIcon }
    ];

    return (
        <div>
            <h3 className="font-semibold mb-4">What guides our work</h3>
            <div className="grid md:grid-cols-3 gap-4">
                {guides.map(({ step, icon: Icon }) => (
                    <div key={step} className="bg-white p-4 rounded-lg text-sm flex flex-col gap-2">
                        <Icon className="text-browny-100" />
                        <p className="text-base text-browny-100">{step}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutGuides;
