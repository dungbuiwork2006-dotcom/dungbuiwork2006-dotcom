"use client";
import Image from "next/image";
import { useState } from "react";
import { profile } from "../data/profile";
export default function Portrait() {
  const [missing, setMissing] = useState(false);
  return <figure className="portrait-card"><div className="portrait-copy micro">LEARNING THROUGH PEOPLE.<br />GROWING THROUGH EXPERIENCES.<br />ALWAYS CURIOUS ABOUT WHAT&apos;S NEXT.<i /></div><div className="portrait-media">{!missing && <Image src={profile.portrait} alt={"Portrait of " + profile.name} style={{ objectFit: "cover", objectPosition: "center 15%" }} fill sizes="(max-width: 760px) 90vw, 45vw" onError={() => setMissing(true)} />}</div>{missing && <div className="portrait-placeholder" role="img" aria-label="Portrait placeholder awaiting the final photo"><span aria-hidden="true">DB.</span><p className="micro">PORTRAIT COMING SOON</p></div>}<span className="vertical-name" aria-hidden="true">BÙI TRÍ DŨNG</span><figcaption><b>Dũng</b><span className="micro">LEARN. CONNECT. CREATE.</span></figcaption><span className="portrait-corner" aria-hidden="true" /></figure>;
}
