export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>        
      <h1>Feautre product</h1>
      {children}
    </div>
  );
}
