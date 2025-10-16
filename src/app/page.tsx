import { Button } from "@/components/ui/button";
import { Loader } from "@/components/common/loader";

export default function Home() {
  return (
    <div className="space-y-6 text-center">
      <h1 className="text-3xl font-bold">🚀 AI Project Boilerplate</h1>
      <p className="text-muted-foreground">Dark mode, Navbar, Footer, Loader included.</p>
      <Button>Test Button</Button>
      <Loader />
    </div>
  );
}
