import { Plus } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const mockServers = [
    { id: 1, name: 'Server 1' },
    { id: 2, name: 'Server 2' },
    { id: 3, name: 'Server 3' }
];

const GuildSidebar: React.FC = () => {
    const activeServerId = 1;

    return (
        <div className="p-2 w-20 h-full bg-[#07080e] overflow-y-scroll text-white flex flex-col items-center py-4">
            {mockServers.map(server => (
                <div
                    key={server.id}
                    className='relative min-w-12 min-h-12 mb-2 transition-all'
                >
                    <Link
                        href={`/dashboard/${server.id}`}
                        className={`min-w-12 min-h-12 justify-center cursor-pointer bg-gray-600 flex items-center ${
                            server.id === activeServerId ? 'rounded-2xl' : 'rounded-full'
                        }`}
                    >
                        {server.name[0]}
                    </Link>

                    {server.id === activeServerId && (
                            <div className="absolute left-[-10px] top-0 bottom-0 w-[4px] bg-white rounded-r-md"></div>
                    )}
                </div>
            ))}
            <div>
                <Link href="/invite" className="min-w-12 min-h-12 justify-center cursor-pointer bg-[rgba(104,56,104,0.35)] hover:bg-[rgba(104,56,104,0.5)] relative flex items-center rounded-full">
                    <Plus />
                </Link>
            </div>
        </div>
    );
};

export default GuildSidebar;
