"use client";

import React from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { Banknote, Home, Settings, SquareSlash } from "lucide-react";

const Sidebar: React.FC = () => {
    const pathname = usePathname();

    const params = useParams();
    const id = params.id;

    const isActive = (path: string) => pathname === path;

    const links = [
        { name: "Home", path: `/dashboard/${id}`, icon: Home },
        { name: "Premium", path: `/dashboard/${id}/premium`, icon: Banknote},
        { name: "Settings", path: `/dashboard/${id}/settings`, icon: Settings },
        { name: "Commands", path: `/dashboard/${id}/commands`, icon: SquareSlash }
    ];

    return (
        <div className="w-96 h-full bg-[#111117] bg-[radial-gradient(60%_70%_at_50%_0%,rgba(128,0,128,.15)_0%,transparent_70%),radial-gradient(80%_100%_at_50%_0%,rgba(75,0,130,.15)_0%,transparent_70%)] text-white rounded-tl-[50px] relative overflow-hidden">
            <div className="flex flex-col items-center py-12">
                <div className="relative w-12 h-12 bg-gray-600 flex items-center justify-center rounded-2xl">
                    S
                </div>
                <h2 className="text-2xl font-bold pt-2">Server 1</h2>
                <span className="text-xs text-neutral-300 font-medium">
                    Zylo Free Tier
                </span>
            </div>

            <ul className="space-y-2 w-full">
                {links.map(({ name, path, icon: Icon }) => (
                    <li key={path}>
                        <Link
                            href={path}
                            className={`flex items-center gap-3 px-4 py-3 w-full transition-all ${
                                isActive(path)
                                    ? "from-purple-500/20 to-transparent bg-gradient-to-r border-l-4 border-purple-500 text-white"
                                    : "from-purple-500/20 to-transparent hover:bg-gradient-to-r hover:border-l-4 border-purple-500 text-neutral-200"
                            }`}
                        >
                            <Icon size={20} />
                            {name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
