export function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="bg-destructive/10 text-destructive p-3 rounded-lg text-sm">
      {message}
    </div>
  );
}
