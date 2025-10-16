export function Footer() {
  return (
    <footer className="p-4 text-center text-sm text-muted-foreground border-t">
      © {new Date().getFullYear()} AI Chatbot Project. Built with Next.js + shadcn/ui.
    </footer>
  );
}