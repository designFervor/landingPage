import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ProjectCard = ({project, index, width, height}) => {
    return (
        <div className="project-img" data-animation="fade-up" data-delay={index * 0.1}>
            <Image width={width} height={height} sizes='100vw' src={project.imgSrc} alt={project.title || "Project Image"} />
            <div className="project-overlay">
                <div className="project-info">
                    {project.category && <span className="project-category">{project.category}</span>}
                    {project.title && <h3 className="project-title">{project.title}</h3>}
                    {project.description && <p className="project-description">{project.description}</p>}
                </div>
                <div className="project-btn">
                    <Link href="/portfolio-details">
                        <i className="bx bx-arrow-back bx-rotate-180" /> <span>View Project</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard