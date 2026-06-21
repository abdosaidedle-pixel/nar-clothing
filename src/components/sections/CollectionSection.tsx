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

// All 12 products in the collection (6 Drop 1 + 6 Drop 2)
const allProducts: ShowcaseProduct[] = [
  // Drop 1
  { id: 1, slug: "born-from-fire-black",    name: "Born From Fire",  sub: "Black",     price: "EGP 650", image: imgBFFBlack,    drop: "Drop 001" },
  { id: 2, slug: "born-from-fire-offwhite", name: "Born From Fire",  sub: "Off White", price: "EGP 650", image: imgBFFOffWhite, drop: "Drop 001" },
  { id: 3, slug: "born-from-fire-burgundy", name: "Born From Fire",  sub: "Burgundy",  price: "EGP 650", image: imgBFFBurgundy, drop: "Drop 001" },
  { id: 4, slug: "born-to-be-loud-black",   name: "Born To Be Loud", sub: "Black",     price: "EGP 650", image: imgBTBLBlack,   drop: "Drop 001" },
  { id: 5, slug: "born-to-be-loud-white",   name: "Born To Be Loud", sub: "White",     price: "EGP 650", image: imgBTBLWhite,   drop: "Drop 001" },
  { id: 6, slug: "blackout-collection",     name: "Blackout",        sub: "Black",     price: "EGP 650", image: imgBlackout,    drop: "Drop 001" },
  // Drop 2
  { id: 7,  slug: "do-you-miss-me-black",        name: "Do You Miss Me?", sub: "Black",         price: "EGP 700", image: imgDrop2_DoYouMissMeBlack,        drop: "Drop 002" },
  { id: 8,  slug: "nar-basic-bone-white",        name: "NAR Basic",       sub: "Bone White",    price: "EGP 700", image: imgDrop2_NarBasicBoneWhite,       drop: "Drop 002" },
  { id: 9,  slug: "statement-piece-white",       name: "Statement Piece", sub: "Bone White",    price: "EGP 700", image: imgDrop2_StatementPieceBoneWhite, drop: "Drop 002" },
  { id: 10, slug: "love-exam-vintage-black",     name: "Love Exam",       sub: "Vintage Black", price: "EGP 700", image: imgDrop2_LoveExamVintageBlack,    drop: "Drop 002" },
  { id: 11, slug: "love-exam-burgundy",          name: "Love Exam",       sub: "Burgundy",      price: "EGP 700", image: imgDrop2_LoveExamBurgundy,        drop: "Drop 002" },
  { id: 12, slug: "do-you-miss-me-white",        name: "Do You Miss Me?", sub: "Bone White",    price: "EGP 700", image: imgDrop2_DoYouMissMeBoneWhite,    drop: "Drop 002" },
];

const GRID_SIZE = 6; // 6 slots in the grid (2x3 / 3x2)
const ROTATION_INTERVAL_MS = 5000; // 5 seconds

// Build 2 sets of 6 products each — first set = Drop 1, second set = Drop 2.
// The grid swaps between these two sets every 5 seconds, so the customer
// sees all 12 products without clicking anything.
const slides: ShowcaseProduct[][] = [
  // Set 1 — Drop 1 (first 6)
  allProducts.slice(0, 6),
  // Set 2 — Drop 2 (last 6)
  allProducts.slice(6, 12),
];

function Card3D({ product, idx }: { product: ShowcaseProduct; idx: number }) {
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
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
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
          <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(139,0,0,0.05)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </motion.div>
      </div>

      <div className="flex flex-col gap-1">
        <p className={`text-xs tracking-widest uppercase ${isDrop2 ? "text-primary" : "text-muted-foreground"}`}>{product.drop}</p>
        <h3 className="font-display text-2xl uppercase group-hover:text-primary transition-colors">{product.name}</h3>
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground text-sm tracking-widest uppercase">{product.sub}</p>
          <p className="text-foreground font-mono text-sm">{product.price}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function CollectionSection() {
  const [, setLocation] = useLocation();
  const [activeSet, setActiveSet] = useState(0); // 0 = Drop 1, 1 = Drop 2
  const [isPaused, setIsPaused] = useState(false);

  // Auto-swap between the two 6-card sets every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setActiveSet((s) => (s + 1) % slides.length);
    }, ROTATION_INTERVAL_MS);
    return () => clearInterval(id);
  }, [isPaused]);

  const currentSet = slides[activeSet];
  const currentDropLabel = activeSet === 0 ? "Drop 001 — Born From Fire" : "Drop 002 — Wear What They Think About";
  const currentDotColor = activeSet === 0 ? "bg-muted-foreground" : "bg-primary";

  return (
    <section
      id="collection"
      className="py-24 bg-black relative z-10 border-t border-border/20 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-6 md:px-12">
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

        {/* 6-card grid — content swaps every 5 seconds */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSet}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {currentSet.map((product, idx) => (
                <Card3D key={product.id} product={product} idx={idx} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicator bar — shows which set is currently visible + countdown */}
        <div className="mt-12 flex flex-col items-center gap-5">
          {/* Current drop label + set counter */}
          <div className="flex items-center gap-4">
            <span className={`w-2 h-2 rounded-full ${currentDotColor} ${!isPaused ? "animate-pulse" : ""}`} />
            <p className="text-xs tracking-[0.4em] text-muted-foreground uppercase tabular-nums">
              Set {activeSet + 1} / {slides.length}
              <span className="mx-3 text-border">|</span>
              {currentDropLabel}
              {isPaused && <span className="ml-3 text-primary">— Paused</span>}
            </p>
          </div>

          {/* Progress bar — resets every 5 seconds (and on pause) */}
          <div className="w-full max-w-md h-[2px] bg-white/10 overflow-hidden rounded-full">
            <motion.div
              key={activeSet + (isPaused ? "-paused" : "")}
              initial={{ width: "0%" }}
              animate={{ width: isPaused ? "0%" : "100%" }}
              transition={{
                duration: isPaused ? 0 : ROTATION_INTERVAL_MS / 1000,
                ease: "linear",
              }}
              className={`h-full ${currentDotColor}`}
            />
          </div>

          {/* Set indicators */}
          <div className="flex items-center gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSet(i)}
                aria-label={`Show ${i === 0 ? "Drop 1" : "Drop 2"} set`}
                className={`transition-all duration-300 rounded-full ${
                  i === activeSet
                    ? i === 0
                      ? "w-6 h-1.5 bg-muted-foreground"
                      : "w-6 h-1.5 bg-primary"
                    : "w-1.5 h-1.5 bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          {/* Hint text */}
          <p className="text-[10px] tracking-[0.3em] text-muted-foreground/60 uppercase mt-1">
            Auto-rotating every 5 seconds — hover to pause
          </p>
        </div>
      </div>
    </section>
  );
}
