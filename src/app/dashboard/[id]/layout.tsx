import Navbar from "../components/Navbar";
import GuildSidebar from "../components/GuildSidebar";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col h-screen bg-[#07080e] overflow-hidden">
      <Navbar />
      <div className="flex flex-grow min-h-0">
        <GuildSidebar />
        <Sidebar />
        <div className="bg-[#13111e] w-full overflow-auto">
          {children}
        </div>
      </div>
    </main>
  );
}
