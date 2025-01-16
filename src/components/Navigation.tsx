import { Search, Home, Users, Briefcase, MessageSquare, Bell, ArrowLeft } from "lucide-react";
import { Input } from "./ui/input";
import { useNavigate, useLocation } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const showBackButton = location.pathname.includes('podcast-config');

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-linkedin-dark border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center gap-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
            alt="LinkedIn"
            className="w-8 h-8"
          />
          <div className="flex-1 max-w-md space-y-2">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="search"
                placeholder="Search"
                className="pl-10 bg-linkedin-card/50 border-none"
              />
            </div>
            {showBackButton && (
              <button 
                onClick={handleBack}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft size={20} />
                <span>Back to Profile</span>
              </button>
            )}
          </div>
          <nav className="flex items-center gap-6">
            <button className="text-gray-400 hover:text-white flex flex-col items-center gap-1">
              <Home size={20} />
              <span className="text-xs">Home</span>
            </button>
            <button className="text-gray-400 hover:text-white flex flex-col items-center gap-1">
              <Users size={20} />
              <span className="text-xs">My Network</span>
            </button>
            <button className="text-gray-400 hover:text-white flex flex-col items-center gap-1">
              <Briefcase size={20} />
              <span className="text-xs">Jobs</span>
            </button>
            <button className="text-gray-400 hover:text-white flex flex-col items-center gap-1">
              <MessageSquare size={20} />
              <span className="text-xs">Messaging</span>
            </button>
            <button className="text-gray-400 hover:text-white flex flex-col items-center gap-1">
              <Bell size={20} />
              <span className="text-xs">Notifications</span>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};