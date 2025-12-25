import React from 'react'
import { MessageCircle, Palette, ClipboardCheck, HeartHandshake } from 'lucide-react'

const PlanningSteps = () => {
    const steps = [
        {
            title: "Share Details",
            description: "Tell us about your date, venue, palette and vibe.",
            icon: <MessageCircle className="w-5 h-5 text-rosy-500" />
        },
        {
            title: "Mood + Proposal",
            description: "We craft a moodboard and tailored floral plan.",
            icon: <Palette className="w-5 h-5 text-rosy-500" />
        },
        {
            title: "Finalize Details",
            description: "Redefinements, timeline, and logistics.",
            icon: <ClipboardCheck className="w-5 h-5 text-rosy-500" />
        },
        {
            title: "Wedding Day",
            description: "Delivery, setup, and on-site styling.",
            icon: <HeartHandshake className="w-5 h-5 text-rosy-500" />
        },
    ]

    return (
        <div>
            <h3 className="font-semibold mb-3 text-browny-100">
                Planning Made Simple
            </h3>
            <p className="text-browny-50 text-sm mb-4">Here's how we'll bring your vision to life.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {steps.map((step, i) => (
                    <div
                        key={i}
                        className="border border-rosy-100 p-4 rounded-lg bg-white flex gap-3"
                    >
                        {/* ICON */}
                        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-rosy-50">
                            {step.icon}
                        </div>

                        {/* TEXT */}
                        <div>
                            <h4 className="font-medium text-sm">
                                {i + 1} • {step.title}
                            </h4>
                            <p className="text-xs text-browny-50 mt-1">
                                {step.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PlanningSteps
