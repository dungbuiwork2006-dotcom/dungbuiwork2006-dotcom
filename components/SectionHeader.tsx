export default function SectionHeader({ number, name, label }: { number: string; name: string; label: string }) {
  return <header className="section-header"><p className="section-index">{number} / {name}</p><span className="micro">{label}</span></header>;
}

