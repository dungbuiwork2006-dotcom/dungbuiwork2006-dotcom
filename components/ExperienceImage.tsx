"use client";
import Image from "next/image";
import { useState } from "react";
export default function ExperienceImage({ src, alt, title }: { src: string; alt: string; title: string }) {
  const [missing, setMissing] = useState(false);
  return missing ? <div className="micro" style={{position:"absolute",inset:0,display:"grid",placeContent:"center",textAlign:"center",gap:12,color:"var(--muted)"}}><span>{title}</span><span>IMAGE PENDING</span></div> : <Image src={src} alt={alt} fill sizes="(max-width: 700px) 90vw, 50vw" style={{objectFit:"contain",objectPosition:"center"}} onError={() => setMissing(true)} />;
}
