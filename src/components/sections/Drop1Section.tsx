import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { useMotionValue, useSpring } from "framer-motion";
import imgBFFBlack from "@assets/d3efa852-813a-43f6-bc6e-2a8d2b737f6c_1781286527273.png";
import imgBFFOffWhite from "@assets/33ef5afe-ec2a-405c-be2f-c4786d17960c_1781286522480.png";
import imgBFFBurgundy from "@assets/7caf832d-63cd-48b2-a49c-12b82cd814e0_1781286888023.png";
import imgBTBLBlack from "@assets/9d3a0bd0-d738-48f1-be9b-3e9651f9fcc3_1781286532075.png";
import imgBTBLWhite from "@assets/6d2a65d8-3515-4327-8674-8f989f695ad6_1781286536554.png";
import imgBlackout from "@assets/WhatsApp_Image_2026-06-12_at_5.33.58_PM_(1)_1781286541601.jpg";

const drop1Products = [
  { id: 1, slug: "born-from-fire-black",    name: "Born From Fire",  sub: "Black",     price: "EGP 650", image: imgBFFBlack },
  { id: 2, slug: "born-from-fire-offwhite", name: "Born From Fire",  sub: "Off White", price: "EGP 650", image: imgBFFOffWhite },
  { id: 3, slug: "born-from-fire-burgundy", name: "Born From Fire",  sub: "Burgundy",  price: "EGP 650", image: imgBFFBurgundy },
  { id: 4, slug: "born-to-be-loud-black",   name: "Born To Be Loud", sub: "Black",     price: "EGP 650", image: imgBTBLBlack },
  { id: 5, slug: "born-to-be-loud-white",   name: "Born To Be Loud", sub: "White",     price: "EGP 650", image: imgBTBLWhite },
  { id: 6, slug: "blackout-collection",     name: "Blackout",        sub: "Black",     price: "EGP 650", image: imgBlackout },
];

function Card3D({ product, idx }: { product: typeof drop1Products[0]; idx: number }) {
  const [, setLocation] = useLocation();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(mouseY, { stiffness: 80, damping: 22 });
  const rotateY = useSpring(mouseX, { stiffness: 80, damping: 22 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left - rect.width / 2) / 10);
    mouseY.set(-(e.clientY - rect.top - rect.height / 2) / 10);
  };
  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.08, duration: 0.6 }}
      className="group flex flex-col gap-4 cursor-pointer"
      onClick={() => setLocation(`/product/${product.slug}`)}
    >
      <div
        className="relative aspect-[3/4]"
        style={{ perspective: "900px" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="w-full h-full relative border border-white/5 group-hover:border-white/15 transition-colors overflow-hidden bg-zinc-900/40"
        >
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/6 via-transparent to-black/20 pointer-events-none"
            style={{ rotateX, rotateY }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-5">
            <button
              onClick={(e) => { e.stopPropagation(); setLocation(`/product/${product.slug}`); }}
              className="w-full bg-white text-black font-display text-lg py-3 uppercase hover:bg-primary hover:text-white transition-colors"
              data-testid={`btn-view-${product.id}`}
            >
              View Product
            </button>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-xs text-muted-foreground tracking-widest uppercase">Drop 001</p>
        <h3 className="font-display text-2xl uppercase group-hover:text-primary transition-colors">{product.name}</h3>
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground text-sm tracking-widest uppercase">{product.sub}</p>
          <p className="text-foreground font-mono text-sm">{product.price}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Drop1Section() {
  return (
    <section id="drop-001" className="relative py-24 md:py-32 bg-black border-t border-border/20 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-4 mb-16"
        >
          <p className="text-xs tracking-[0.4em] text-primary uppercase mb-2">Drop 001 — Born From Fire</p>
          <div className="flex items-center gap-4">
            <h2 className="font-display text-6xl md:text-8xl uppercase text-foreground">DROP 001</h2>
            <span className="bg-primary/20 border border-primary/40 text-primary text-xs font-bold tracking-[0.2em] px-3 py-1.5 uppercase shrink-0 self-start mt-2">
              Live Now
            </span>
          </div>
          <p className="text-muted-foreground text-sm md:text-base tracking-wide leading-relaxed max-w-md">
            The Original Collection. Born From Fire, Built For The Streets.<br />
            Heavy weight premium cotton with signature prints.<br />
            <span className="text-foreground/60 italic mt-2 block text-xs tracking-widest uppercase">
              Limited to 200 pieces total across all colors.
            </span>
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {drop1Products.map((product, idx) => (
            <Card3D key={product.id} product={product} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
