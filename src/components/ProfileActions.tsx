import { Button } from "@/components/ui/button";

export const ProfileActions = () => {
  return (
    <div className="flex flex-wrap gap-2 items-center">
      <Button className="profile-button profile-button-primary">
        Open to
      </Button>
      <Button className="profile-button border border-white/20">
        Add profile section
      </Button>
      <Button className="profile-button border border-white/20">
        Add custom button
      </Button>
      <Button className="profile-button border border-white/20">
        Resources
      </Button>
    </div>
  );
};