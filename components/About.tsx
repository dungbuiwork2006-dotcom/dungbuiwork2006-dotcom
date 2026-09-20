import { profile } from "../data/profile";
import Portrait from "./Portrait";
import SectionHeader from "./SectionHeader";
export default function About() {
  return <section id="about" className="section"><SectionHeader number="03" name="ABOUT" label="// LEARN. CONNECT. CREATE." /><div className="about-layout"><div data-reveal><Portrait /></div><div className="about-copy" data-reveal><h2>CONNECTING PEOPLE,<br /><em>EXPERIENCES</em> AND<br />IDEAS.</h2>{profile.bio.map(text => <p key={text}>{text}</p>)}<div className="lime-rule" /><dl className="personal-details"><div><dt>BASED IN</dt><dd>{profile.location}</dd></div><div><dt>CURRENTLY</dt><dd>{profile.currently}</dd></div><div><dt>INTERESTS</dt><dd>{profile.interests}</dd></div><div><dt>MINDSET</dt><dd>STAY CURIOUS.</dd></div></dl><a href="#contact" className="button">LET&apos;S TALK <span>↗</span></a></div></div></section>;
}
