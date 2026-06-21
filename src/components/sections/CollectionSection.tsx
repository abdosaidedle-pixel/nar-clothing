import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
// Drop 1
import imgBFFBlack from "@assets/d3efa852-813a-43f6-bc6e-2a8d2b737f6c_1781286527273.png";
import imgBFFOffWhite from "@assets/33ef5afe-ec2a-405c-be2f-c4786d17960c_1781286522480.png";
import imgBFFBurgundy from "@assets/7caf832d-63cd-48b2-a49c-12b82cd814e0_1781286888023.png";
import imgBTBLBlack from "@assets/9d3a0bd0-d738-48f1-be9b-3e9651f9fcc3_1781286532075.png";
import imgBTBLWhite from "@assets/6d2a65d8-3515-4327-8674-8f989f695ad6_1781286536554.png";
import imgBlackout from "@assets/WhatsApp_Image_2026-06-12_at_5.33.58_PM_(1)_1781286541601.jpg";
// Drop 2 (new high-quality images)
import imgDrop2_DoYouMissMeBlack from "@assets/drop2-do-you-miss-me-black-v2.png";
import imgDrop2_NarBasicBoneWhite from "@assets/drop2-nar-basic-bone-white-v2.png";
import imgDrop2_StatementPieceBoneWhite from "@assets/drop2-statement-piece-bone-white-v2.png";
import imgDrop2_LoveExamVintageBlack from "@assets/drop2-love-exam-vintage-black-v2.png";
import imgDrop2_LoveExamBurgundy from "@assets/drop2-love-exam-burgundy-v2.png";
import imgDrop2_DoYouMissMeBoneWhite from "@assets/drop2-do-you-miss-me-bone-white-v2.png";

interface ShowcaseProduct {
  id: number;
  slug: string;
  name: string;
  sub: string;
  price: string;
  image: string;
  drop: string;
}

// Sequential list: Drop 1 first, then Drop 2
const allProducts: ShowcaseProduct[] = [
  // Drop 1 — 6 products
  { id: 1, slug: "born-from-fire-black",    name: "Born From Fire",  sub: "Black",     price: "EGP 650", image: imgBFFBlack,    drop: "Drop 001" },
  { id: 2, slug: "born-from-fire-offwhite", name: "Born From Fire",  sub: "Off White", price: "EGP 650", image: imgBFFOffWhite, drop: "Drop 001" },
  { id: 3, slug: "born-from-fire-burgundy", name: "Born From Fire",  sub: "Burgundy",  price: "EGP 650", image: imgBFFBurgundy, drop: "Drop 001" },
  { id: 4, slug: "born-to-be-loud-black",   name: "Born To Be Loud", sub: "Black",     price: "EGP 650", image: imgBTBLBlack,   drop: "Drop 001" },
  { id: 5, slug: "born-to-be-loud-white",   name: "Born To Be Loud", sub: "White",     price: "EGP 650", image: imgBTBLWhite,   drop: "Drop 001" },
  { id: 6, slug: "blackout-collection",     name: "Blackout",        sub: "Black",     price: "EGP 650", image: imgBlackout,    drop: "Drop 001" },
  // Drop 2 — 6 products
  { id: 7,  slug: "do-you-miss-me-black",        name: "Do You Miss Me?", sub: "Black",         price: "EGP 700", image: imgDrop2_DoYouMissMeBlack,        drop: "Drop 002" },
  { id: 8,  slug: "nar-basic-bone-white",        name: "NAR Basic",       sub: "Bone White",    price: "EGP 700", image: imgDrop2_NarBasicBoneWhite,       drop: "Drop 002" },
  { id: 9,  slug: "statement-piece-white",       name: "Statement Piece", sub: "Bone White",    price: "EGP 700", image: imgDrop2_StatementPieceBoneWhite, drop: "Drop 002" },
  { id: 10, slug: "love-exam-vintage-black",     name: "Love Exam",       sub: "Vintage Black", price: "EGP 700", image: imgDrop2_LoveExamVintageBlack,    drop: "Drop 002" },
  { id: 11, slug: "love-exam-burgundy",          name: "Love Exam",       sub: "Burgundy",      price: "EGP 700", image: imgDrop2_LoveExamBurgundy,        drop: "Drop 002" },
  { id: 12, slug: "do-you-miss-me-white",        name: "Do You Miss Me?", sub: "Bone White",    price: "EGP 700", image: imgDrop2_DoYouMissMeBoneWhite,    drop: "Drop 002" },
];

const SLIDESHOW_INTERVAL_MS = 5000; // 5 seconds per slide

function SlideshowCard({ product }: { product: ShowcaseProduct }) {
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

  const isDrop2 = product.drop === "Drop 002";

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      {/* 3D Image Card */}
      <div
        className="relative aspect-[3/4] max-w-sm w-full cursor-pointer"
        style={{ perspective: "900px" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => setLocation(`/product/${product.slug}`)}
      >
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="w-full h-full relative border border-white/5 hover:border-white/15 transition-colors overflow-hidden bg-zinc-900/40"
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-400 flex items-end p-5">
            <button
              onClick={(e) => { e.stopPropagation(); setLocation(`/product/${product.slug}`); }}
              className="w-full bg-white text-black font-display text-lg py-3 uppercase hover:bg-primary hover:text-white transition-colors"
            >
              View Product
            </button>
          </div>
          <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(139,0,0,0.05)] opacity-0 hover:opacity-100 transition-opacity pointer-events-none" />
        </motion.div>
        {/* Glow */}
        <div className="absolute -inset-4 bg-primary/10 blur-3xl -z-10 rounded-full" />
      </div>

      {/* Product Info */}
      <div className="flex flex-col items-center gap-1 text-center">
        <p className={`text-xs tracking-widest uppercase ${isDrop2 ? "text-primary" : "text-muted-foreground"}`}>
          {product.drop}
        </p>
        <h3 className="font-display text-3xl uppercase text-foreground">{product.name}</h3>
        <p className="text-muted-foreground text-sm tracking-widest uppercase">{product.sub}</p>
        <p className="text-foreground font-mono text-base mt-1">{product.price}</p>
      </div>
    </div>
  );
}

export default function CollectionSection() {
  const [, setLocation] = useLocation();
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance every 5 seconds (pause on hover)
  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setActiveIdx((i) => (i + 1) % allProducts.length);
    }, SLIDESHOW_INTERVAL_MS);
    return () => clearInterval(id);
  }, [isPaused]);

  const currentProduct = allProducts[activeIdx];

  return (
    <section
      id="collection"
      className="py-24 bg-black relative z-10 border-t border-border/20 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-display text-[20vw] text-white/[0.02] leading-none tracking-tighter whitespace-nowrap">
          NAR
        </span>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-7xl uppercase"
          >
            Curated For The Few.
          </motion.h2>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onClick={() => setLocation("/collection")}
            className="text-sm font-semibold tracking-widest uppercase border-b border-white pb-1 hover:text-primary hover:border-primary transition-colors self-start md:self-auto"
            data-testid="btn-view-all"
          >
            View All →
          </motion.button>
        </div>

        {/* Slideshow — single product at a time */}
        <div className="relative max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProduct.id}
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: -20 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <SlideshowCard product={currentProduct} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot indicators + counter */}
        <div className="mt-12 flex flex-col items-center gap-5">
          {/* Counter */}
          <p className="text-xs tracking-[0.4em] text-muted-foreground uppercase tabular-nums">
            {String(activeIdx + 1).padStart(2, "0")} / {String(allProducts.length).padStart(2, "0")}
            <span className="mx-3 text-border">|</span>
            {currentProduct.drop === "Drop 001" ? "Drop 001 — Born From Fire" : "Drop 002 — Wear What They Think About"}
          </p>

          {/* Dot navigation */}
          <div className="flex items-center gap-2 flex-wrap justify-center max-w-xl">
            {allProducts.map((product, i) => (
              <button
                key={product.id}
                onClick={() => setActiveIdx(i)}
                aria-label={`Show product ${i + 1}: ${product.name}`}
                className={`transition-all duration-300 rounded-full ${
                  i === activeIdx
                    ? "w-6 h-1.5 bg-primary"
                    : "w-1.5 h-1.5 bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          {/* Progress bar */}
          <div className="w-full max-w-md h-[2px] bg-white/10 overflow-hidden rounded-full">
            <motion.div
              key={activeIdx + (isPaused ? "-paused" : "")}
              initial={{ width: "0%" }}
              animate={{ width: isPaused ? "0%" : "100%" }}
              transition={{
                duration: isPaused ? 0 : SLIDESHOW_INTERVAL_MS / 1000,
                ease: "linear",
              }}
              className="h-full bg-primary"
            />
          </div>

          {/* Legend */}
          <div className="flex items-center gap-8 mt-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-muted-foreground" />
              <p className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">Drop 001</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <p className="text-[10px] tracking-[0.3em] text-primary uppercase">Drop 002</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
