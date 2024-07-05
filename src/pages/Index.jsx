import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <h1 className="text-3xl mb-4">Welcome to Your Todo App</h1>
      <p className="mb-4">Get started by navigating to one of the sections below:</p>
      <div className="space-x-4">
        <Button onClick={() => navigate("/inbox")}>Inbox</Button>
        <Button onClick={() => navigate("/today")}>Today</Button>
        <Button onClick={() => navigate("/upcoming")}>Upcoming</Button>
      </div>
    </div>
  );
};

export default Index;