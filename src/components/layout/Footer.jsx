import React from 'react'
import { Instagram, Facebook, Linkedin, } from "lucide-react";
const Footer = () => {
    return (
        <footer className="bg-rosy-50 border border-rosy-100 mt-16 rounded-md">
            <div className="max-w-7xl mx-auto px-4 md:px-10 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-lg font-semibold text-rosy-600 mb-3">Petals</h3>
                    <p className="text-gray-600 text-sm">Romantic florals for everyday and forever moments.</p>
                    <div className="flex gap-3 mt-4 text-rosy-500">
                        <Instagram />
                        <Facebook />
                        <Linkedin />
                    </div>
                </div>

                <div>
                    <h4 className="font-semibold mb-3">Shop</h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                        <li>All Gifts</li>
                        <li>Bouquets</li>
                        <li>Arrangements</li>
                        <li>Same-Day Delivery</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-3">Weddings</h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                        <li>Services</li>
                        <li>Portfolio</li>
                        <li>Inquiry</li>
                    </ul>
                </div>


                <div>
                    <h4 className="font-semibold mb-3">Company</h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                        <li>About</li>
                        <li>Contact</li>
                        <li>FAQ</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
