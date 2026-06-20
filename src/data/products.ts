import imgBFFBlack from "@assets/d3efa852-813a-43f6-bc6e-2a8d2b737f6c_1781286527273.png";
import imgBFFOffWhite from "@assets/33ef5afe-ec2a-405c-be2f-c4786d17960c_1781286522480.png";
import imgBFFBurgundy from "@assets/7caf832d-63cd-48b2-a49c-12b82cd814e0_1781286888023.png";
import imgBTBLBlack from "@assets/9d3a0bd0-d738-48f1-be9b-3e9651f9fcc3_1781286532075.png";
import imgBTBLWhite from "@assets/6d2a65d8-3515-4327-8674-8f989f695ad6_1781286536554.png";
import imgBlackout from "@assets/WhatsApp_Image_2026-06-12_at_5.33.58_PM_(1)_1781286541601.jpg";

// Drop 2 - new high-quality product photos (front + back views on same image)
import imgDrop2_DoYouMissMeBlack from "@assets/drop2-do-you-miss-me-black.jpg";
import imgDrop2_DoYouMissMeBoneWhite from "@assets/drop2-do-you-miss-me-bone-white.jpg";
import imgDrop2_NarBasicBoneWhite from "@assets/drop2-nar-basic-bone-white.jpg";
import imgDrop2_StatementPieceBoneWhite from "@assets/drop2-statement-piece-bone-white.jpg";
import imgDrop2_LoveExamVintageBlack from "@assets/drop2-love-exam-vintage-black.jpg";
import imgDrop2_LoveExamBurgundy from "@assets/drop2-love-exam-burgundy.jpg";

export const WHATSAPP_NUMBER = "201024527565";

export interface Product {
  id: number;
  slug: string;
  name: string;
  drop: string;
  tagline: string;
  price: number;
  images: string[];
  colors: string[];
  sizes: string[];
  details: string[];
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    slug: "born-from-fire-black",
    name: "Born From Fire",
    drop: "Drop 001",
    tagline: "Born From Fire — Black",
    price: 650,
    images: [imgBFFBlack, imgBFFOffWhite, imgBFFBurgundy],
    colors: ["Black", "Off White", "Deep Red"],
    sizes: ["M", "L", "XL", "XXL"],
    details: ["100% Cotton", "240 GSM", "Oversize Fit", "Drop Shoulder", "Screen Print", "Woven Label"],
    description:
      "The original. Born from fire, built for the streets. Heavy weight premium cotton with our signature 'Born From Fire' back print. A silhouette that commands attention.",
  },
  {
    id: 2,
    slug: "born-from-fire-offwhite",
    name: "Born From Fire",
    drop: "Drop 001",
    tagline: "Born From Fire — Off White",
    price: 650,
    images: [imgBFFOffWhite, imgBFFBlack, imgBFFBurgundy],
    colors: ["Off White", "Black", "Deep Red"],
    sizes: ["M", "L", "XL", "XXL"],
    details: ["100% Cotton", "240 GSM", "Oversize Fit", "Drop Shoulder", "Screen Print", "Woven Label"],
    description:
      "Same fire, different canvas. The Off White colorway brings a raw contrast to our heaviest graphic print yet. Limited to 200 pieces total across all colors.",
  },
  {
    id: 3,
    slug: "born-from-fire-burgundy",
    name: "Born From Fire",
    drop: "Drop 001",
    tagline: "Born From Fire — Burgundy",
    price: 650,
    images: [imgBFFBurgundy, imgBFFBlack, imgBFFOffWhite],
    colors: ["Burgundy", "Black", "Off White"],
    sizes: ["M", "L", "XL", "XXL"],
    details: ["100% Cotton", "240 GSM", "Oversize Fit", "Drop Shoulder", "Screen Print", "Woven Label"],
    description:
      "The rarest colorway in Drop 001. Deep burgundy washed cotton meets the 'Born From Fire' back graphic in a palette that hits like nothing else in the collection.",
  },
  {
    id: 4,
    slug: "born-to-be-loud-black",
    name: "Born To Be Loud",
    drop: "Drop 001",
    tagline: "Born To Be Loud — Black",
    price: 650,
    images: [imgBTBLBlack, imgBTBLWhite],
    colors: ["Black", "White"],
    sizes: ["M", "L", "XL", "XXL"],
    details: ["100% Cotton", "240 GSM", "Box Fit", "Drop Shoulder", "Screen Print", "Woven Label"],
    description:
      "The dark version of an already aggressive statement. Black on black — the BORN TO BE LOUD graphic hits different when the base is pure darkness.",
  },
  {
    id: 5,
    slug: "born-to-be-loud-white",
    name: "Born To Be Loud",
    drop: "Drop 001",
    tagline: "Born To Be Loud — White",
    price: 650,
    images: [imgBTBLWhite, imgBTBLBlack],
    colors: ["White", "Black"],
    sizes: ["M", "L", "XL", "XXL"],
    details: ["100% Cotton", "240 GSM", "Box Fit", "Drop Shoulder", "Screen Print", "Woven Label"],
    description:
      "Speak without saying a word. The BORN TO BE LOUD back print says everything you need it to. Box fit silhouette for the perfect oversized look.",
  },
  {
    id: 6,
    slug: "blackout-collection",
    name: "Blackout Collection",
    drop: "Drop 001",
    tagline: "Basic. Brutal. Real.",
    price: 650,
    images: [imgBlackout],
    colors: ["Black"],
    sizes: ["M", "L", "XL", "XXL"],
    details: ["240 GSM", "100% Cotton", "Oversize Fit", "Screen Print", "Pre-Shrunk", "Heavy Ribbed Neck"],
    description:
      "Basic. Brutal. Real. The cleanest piece in Drop 001. Minimal branding, maximum weight. For those who let the fit speak louder than the print.",
  },
  {
    id: 7,
    slug: "do-you-miss-me-black",
    name: "Do You Miss Me?",
    drop: "Drop 002",
    tagline: "Do You Miss Me? — Black",
    price: 700,
    images: [imgDrop2_DoYouMissMeBlack, imgDrop2_DoYouMissMeBoneWhite],
    colors: ["Black", "Bone White"],
    sizes: ["M", "L", "XL", "XXL"],
    details: ["100% Cotton", "230 GSM", "Premium Oversized", "Screen Print", "Woven Label"],
    description: "Wear what they think about. 'Do you miss me?' limited drop. Don't sleep on this.",
  },
  {
    id: 12,
    slug: "do-you-miss-me-white",
    name: "Do You Miss Me?",
    drop: "Drop 002",
    tagline: "Do You Miss Me? — Bone White",
    price: 700,
    images: [imgDrop2_DoYouMissMeBoneWhite, imgDrop2_DoYouMissMeBlack],
    colors: ["Bone White", "Black"],
    sizes: ["M", "L", "XL", "XXL"],
    details: ["100% Cotton", "230 GSM", "Premium Oversized", "Screen Print", "Woven Label"],
    description: "Wear what they think about. 'Do you miss me?' limited drop. Don't sleep on this.",
  },
  {
    id: 8,
    slug: "nar-basic-bone-white",
    name: "NAR Basic",
    drop: "Drop 002",
    tagline: "NAR Basic — Bone White",
    price: 700,
    images: [imgDrop2_NarBasicBoneWhite],
    colors: ["Bone White"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    details: ["100% Cotton", "240 GSM", "Oversized Fit", "High Quality Print Center Chest"],
    description: "The essential NAR piece. Clean, loud, and real.",
  },
  {
    id: 9,
    slug: "statement-piece-white",
    name: "Statement Piece",
    drop: "Drop 002",
    tagline: "Statement Piece — Bone White",
    price: 700,
    images: [imgDrop2_StatementPieceBoneWhite],
    colors: ["Bone White"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    details: ["100% Cotton", "240 GSM", "Boxy Fit", "Front & Back Print"],
    description: "My Ex Is My Biggest Fan. Say it without saying it. Loud. Clean. Real.",
  },
  {
    id: 10,
    slug: "love-exam-vintage-black",
    name: "Love Exam",
    drop: "Drop 002",
    tagline: "Love Exam — Vintage Black",
    price: 700,
    images: [imgDrop2_LoveExamVintageBlack, imgDrop2_LoveExamBurgundy],
    colors: ["Vintage Black", "Burgundy"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    details: ["100% Cotton", "240 GSM", "Oversized Fit", "Front & Back Print"],
    description: "Do you still think about me? Yes, Every day, Every night, All the time.",
  },
  {
    id: 11,
    slug: "love-exam-burgundy",
    name: "Love Exam",
    drop: "Drop 002",
    tagline: "Love Exam — Burgundy",
    price: 700,
    images: [imgDrop2_LoveExamBurgundy, imgDrop2_LoveExamVintageBlack],
    colors: ["Burgundy", "Vintage Black"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    details: ["100% Cotton", "240 GSM", "Oversized Fit", "Front & Back Print"],
    description: "Do you still think about me? Yes, Every day, Every night, All the time.",
  },
];

export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

// Size guide: weight (kg) & height (cm) → recommended size
export const sizeGuide = [
  { size: "M",   heightMin: 160, heightMax: 175, weightMin: 55,  weightMax: 75  },
  { size: "L",   heightMin: 175, heightMax: 183, weightMin: 75,  weightMax: 90  },
  { size: "XL",  heightMin: 183, heightMax: 190, weightMin: 90,  weightMax: 105 },
  { size: "XXL", heightMin: 190, heightMax: 210, weightMin: 105, weightMax: 130 },
];
