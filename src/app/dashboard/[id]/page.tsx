"use client";

import React, { useState } from "react";
import { Switch } from "@mui/material";
import { Settings } from "lucide-react";
import { useParams } from "next/navigation";

type Module = {
    name: string;
    enabled: boolean;
    description: string;
};

const DashboardPage = () => {
    const params = useParams();

    const [modules, setModules] = useState<Module[]>([
        { name: "Moderation", enabled: true, description: "Control moderation actions like banning, kicking, etc." },
        { name: "Custom Commands", enabled: false, description: "Create custom bot commands for your server." },
        { name: "Logging", enabled: true, description: "Track events in your server like messages, joins, etc." },
        { name: "Role Management", enabled: true, description: "Manage and assign roles to members." },
        { name: "Notifications", enabled: false, description: "Send automated notifications to users." },
    ]);

    const handleSwitchChange = (moduleName: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const updatedModules = modules.map((module) =>
            module.name === moduleName ? { ...module, enabled: event.target.checked } : module
        );
        setModules(updatedModules);
    };

    return (
        <div className="p-6 space-y-4">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-white">Server 1</h1>
                <span className="text-gray-400">Your Server ID: {params.id}</span>
            </div>
            <h2 className="text-xl font-bold text-white">Modules</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {modules.map((module) => (
                    <div
                        key={module.name}
                        className="bg-[#0d0e13] px-10 py-6 rounded-2xl shadow-lg border border-purple-500/30 relative flex flex-col justify-between"
                    >
                        <div className="flex flex-col justify-center h-full">
                            <h2 className="text-2xl font-bold text-white">{module.name}</h2>
                            <p className="text-neutral-400 mt-2 pr-2">{module.description}</p>
                        </div>

                        <div className="absolute top-4 right-4 flex items-center space-x-2">
                            <Switch
                                checked={module.enabled}
                                onChange={handleSwitchChange(module.name)}
                                sx={{
                                    "& .MuiSwitch-switchBase.Mui-checked": {
                                        color: "#641bbf",
                                    },
                                    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                                        backgroundColor: "#641bbf",
                                    },
                                }}
                            />
                        </div>

                        <div className="absolute bottom-4 right-4">
                            <button
                                className="p-2 rounded-full text-gray-300 hover:text-gray-100 transition-all"
                                title="Configure"
                                onClick={() => {
                                    window.location.href = `/dashboard/${params.id}/module/${module.name.toLowerCase()}`;
                                }}
                            >
                                <Settings size={25} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DashboardPage;
