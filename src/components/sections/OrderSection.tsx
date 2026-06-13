export default function OrderSection() {
  return (
    <section id="contact" className="relative bg-black border-t border-border/20 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2" />
      </div>
    </section>
  );
}
