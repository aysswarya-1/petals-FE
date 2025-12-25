import { Sprout, Star, Users, WandSparkles } from "lucide-react";

const values = [
    { title: "Craft", desc: "Refined technique, airy silhouettes.", icon: WandSparkles },
    { title: "Sustainability", desc: "Seasonal stems, minimal waste.", icon: Sprout },
    { title: "Partnership", desc: "We listen deeply and design for your story.", icon: Users },
    { title: "Quality", desc: "Only premium blooms, conditioned for longevity.", icon: Star },
];

const AboutValues = () => {
    return (
        <div>
            <h3 className="font-semibold mb-4">Our values</h3>
            <div className="grid md:grid-cols-4 gap-4">
                {values.map(({ title, desc, icon: Icon }) => (
                    <div key={title} className="bg-muted p-4 rounded-lg text-sm flex gap-4">
                        <Icon className="mt-1 text-browny-100" />
                        <div>
                            <h4 className="font-medium">{title}</h4>
                            <p className="text-browny-50 mt-1">{desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutValues;
