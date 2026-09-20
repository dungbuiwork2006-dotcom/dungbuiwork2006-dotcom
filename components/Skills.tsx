import { profile } from "../data/profile";
import SectionHeader from "./SectionHeader";
export default function Skills() {
  return <section id="skills" className="section"><SectionHeader number="04" name="SKILLS" label="// TOOLS & CURIOSITIES" /><div className="section-intro" data-reveal><h2>A CURIOUS<br /><em>MIND.</em></h2><p className="muted">Những kỹ năng tôi tích lũy qua việc học, làm việc với dữ liệu và những trải nghiệm thực tế cùng con người.<br />Vẫn đang học, vẫn đang mở rộng.</p></div><div className="skills-grid">{[{title:"DATA & TOOLS",items:profile.skills},{title:"PEOPLE & EXPERIENCE",items:profile.beyondCode}].map(group => <div key={group.title} data-reveal><h3 className="eyebrow">// {group.title}</h3><ol className="skill-list">{group.items.map((item,i) => <li key={item}><span className="micro">0{i+1}</span><span>{item}</span><span aria-hidden="true">↗</span></li>)}</ol></div>)}</div></section>;
}
