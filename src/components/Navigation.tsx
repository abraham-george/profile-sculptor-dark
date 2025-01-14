import { Search } from "lucide-react";
import { Input } from "./ui/input";

export const Navigation = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-linkedin-dark border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center gap-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
            alt="LinkedIn"
            className="w-8 h-8"
          />
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <Input
              type="search"
              placeholder="Search"
              className="pl-10 bg-linkedin-card/50 border-none"
            />
          </div>
          <nav className="flex items-center gap-6">
            <button className="text-gray-400 hover:text-white">Home</button>
            <button className="text-gray-400 hover:text-white">My Network</button>
            <button className="text-gray-400 hover:text-white">Jobs</button>
            <button className="text-gray-400 hover:text-white">Messaging</button>
            <button className="text-gray-400 hover:text-white">Notifications</button>
          </nav>
        </div>
      </div>
    </div>
  );
};