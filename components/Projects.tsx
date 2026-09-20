import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";
export default function Projects() {
  return <section id="experiences" className="section"><SectionHeader number="02" name="EXPERIENCES" label="// BEYOND THE CLASSROOM" /><div className="section-intro" data-reveal><h2>BEYOND<br /><em>THE CLASSROOM.</em></h2><p lang="vi">Những trải nghiệm bên ngoài lớp học đã cho tôi cơ hội gặp gỡ nhiều người, thử sức với nhiều vai trò khác nhau và học hỏi từ những môi trường thực tế.</p></div><div className="project-list">{projects.map(project => <ProjectCard key={project.id} project={project} />)}</div></section>;
}
