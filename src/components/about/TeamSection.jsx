const team = [
    { name: "Elena Park", role: "Founder & Creative Director" },
    { name: "Maya Chen", role: "Lead Designer" },
    { name: "Jon Ruiz", role: "Production Manager" },
    { name: "Rhea Patel", role: "Events Coordinator" },
];

const TeamSection = () => {
    return (
        <div>
            <h3 className="font-semibold mb-4">Meet the team</h3>

            <div className="grid md:grid-cols-4 gap-4">
                {team.map((member, i) => {
                    const initials = member.name
                        .split(" ")
                        .map(n => n[0])
                        .join("");

                    return (
                        <div
                            key={i}
                            className="bg-white p-6 rounded-xl border border-rosy-100 text-center hover:shadow-md transition"
                        >
                            {/* Initials Circle */}
                            <div className="w-14 h-14 mx-auto rounded-full bg-rosy-100 text-rosy-500 flex items-center justify-center font-semibold text-lg">
                                {initials}
                            </div>

                            <h4 className="mt-4 font-medium">{member.name}</h4>
                            <p className="text-xs text-gray-500 mt-1">{member.role}</p>

                            <span className="mt-3 inline-block text-[11px] px-3 py-1 rounded-full bg-rose-50 text-rosy-500">
                                Team Member
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TeamSection;
