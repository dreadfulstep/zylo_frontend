import React from "react";
import Image from "next/image";
import { X, Check } from "lucide-react";

const features = [
    { name: "Social Media Integration", free: false, premium: true },
    { name: "Custom Bot Settings", free: false, premium: true },
    { name: "Priority Support", free: false, premium: true },
    { name: "Increased API Limits", free: "Limited", premium: "Unlimited" },
    { name: "Exclusive Themes", free: false, premium: true }
];

const DashboardPage: React.FC = () => {
    return (
        <div className="p-6 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#0d0e13] p-6 rounded-2xl shadow-lg border border-purple-500/30">
                    <span className="text-purple-400 font-semibold text-sm uppercase">Current Plan</span>
                    <h2 className="text-3xl font-bold text-white mt-1">Zylo</h2>
                    <p className="text-neutral-400 mt-2">You are using the free tier of Zylo. Upgrade for more features.</p>
                </div>

                <div className="bg-gradient-to-br from-purple-500/10 to-purple-900/10 p-6 rounded-2xl shadow-lg border border-purple-400">
                    <span className="text-white font-semibold text-sm uppercase">Upgrade to</span>
                    <h2 className="text-3xl font-bold text-white mt-1">Zylo Premium</h2>
                    <p className="text-white/80 mt-2">Unlock advanced features and exclusive benefits.</p>
                    <button className="mt-4 bg-purple-600/40 border border-purple-400/60 text-white font-medium px-4 py-2 rounded-lg hover:bg-purple-500/60 transition-all">Upgrade Now</button>
                </div>
            </div>

            <div>
                <h3 className="text-xl font-semibold text-white">Why Upgrade to Premium?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                    {[...Array(3)].map((_, index) => (
                        <div key={index} className="flex flex-col items-center p-6 bg-[#0d0e13] rounded-xl shadow-lg border border-purple-500/30">
                            <h4 className="text-white font-semibold text-lg text-center">Custom bot - change the avatar, username, status and activity</h4>
                            <div className="mt-4 rounded-lg overflow-hidden">
                                <Image src="/Custom_bot.png" alt="Custom bot" width={354} height={200} className="bg-[#101015]" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-xl font-semibold text-white">Feature Comparison</h3>
                <div className="overflow-hidden mt-4 rounded-lg border border-purple-500/30">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-purple-600/20 text-white">
                                <th className="p-3 border-r border-purple-500/30">Feature</th>
                                <th className="p-3 border-r border-purple-500/30 text-center">Free</th>
                                <th className="p-3 text-center">Premium</th>
                            </tr>
                        </thead>
                        <tbody className="text-white bg-[#0d0e13] divide-y divide-purple-500/20">
                            {features.map(({ name, free, premium }, idx) => (
                                <tr key={idx} className="border-b border-purple-500/20">
                                    <td className="p-3 border-r border-purple-500/30">{name}</td>
                                    <td className="p-3 text-center border-r border-purple-500/30">
                                        {free === true ? <Check className="text-green-500 w-5 h-5 mx-auto" /> : free === false ? <X className="text-red-500 w-5 h-5 mx-auto" /> : <span>{free}</span>}
                                    </td>
                                    <td className="p-3 text-center">
                                        {premium === true ? <Check className="text-green-500 w-5 h-5 mx-auto" /> : <span>{premium}</span>}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
