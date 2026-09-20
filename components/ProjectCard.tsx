import type { Project } from "../data/projects";
import ExperienceImage from "./ExperienceImage";
import styles from "./Experiences.module.css";
export default function ProjectCard({ project }: { project: Project }) {
  const title = project.title.join(" ");
  return <article id={`experience-${project.id}`} className={`project-row ${styles.row} ${project.metrics ? styles.featured : ""}`} data-reveal>
    <div className={`project-preview ${styles.preview}`}><ExperienceImage src={project.image} alt={project.imageAlt} title={title} /></div>
    <div className="project-info"><p className="micro muted">{project.id} / {project.category}</p><h3 className={styles.title}>{project.title.map((line, i) => <span key={line}>{i > 0 && <br />}{line}</span>)}</h3>
      <p className={styles.role} lang="vi">{project.role}</p>{project.date && <p className={`micro muted ${styles.date}`}>{project.date}</p>}
      <div className={styles.description} lang="vi">{project.description.map(text => <p key={text}>{text}</p>)}</div>
      {project.programs && <ul className={styles.programs}>{project.programs.map(program => <li key={program}>{program}</li>)}</ul>}
      {project.metrics && <dl className={styles.metrics}>{project.metrics.map(metric => <div key={metric.label}><dd>{metric.value}</dd><dt>{metric.label}</dt></div>)}</dl>}
      {project.progression && <div className={styles.progression}><p className="micro">{project.progression.label}</p><p lang="vi">{project.progression.role}</p><span className="micro muted">{project.progression.date}</span></div>}
      <ul className="tags">{project.stack.map(item => <li key={item}>{item}</li>)}</ul>
      <details className="case-study"><summary>EXPLORE EXPERIENCE <span>↗</span></summary><div className={styles.expanded}><p className="micro">{project.category}</p><p lang="vi">{project.description.join(" ")}</p><div className={styles.detailImage}><ExperienceImage src={project.image} alt={project.imageAlt} title={title} /></div></div></details>
    </div>
  </article>;
}
