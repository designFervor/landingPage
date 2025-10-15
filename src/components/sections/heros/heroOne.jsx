import Link from 'next/link'
import React from 'react'

const HeroOne = () => {
  return (
    <div className="hero-section-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="hero-content-2">
              <div className="sub-title-2" data-animation="fade-zoom-in" data-delay={0.4}>
                <p>Creative Design Studio</p>
              </div>
              <h2>
                <span data-animation="fade-up">Transform your ideas into </span>
                <span className="sub-head" data-animation="fade-up"  data-delay={0.2}>Stunning Visual Designs</span>
              </h2>
              <div className="hero-description" data-animation="fade-zoom-in">
                <p>We are a creative design agency specializing in brand identity, web design, UI/UX, and digital experiences that captivate and inspire.</p>
                <div className="hero-buttons">
                  <Link href="/portfolio" className="default-btn">
                    <span>View Our Work</span>
                    <i className="bx bx-chevron-right" />
                  </Link>
                  <Link href="/contact" className="default-btn btn-outlined">
                    <span>Start a Project</span>
                    <i className="bx bx-chevron-right" />
                  </Link>
                </div>
              </div>
              <div className="short-prompt" data-animation="fade-zoom-in">
                <ul>
                  <li><p>Popular Services :</p></li>
                  <li><Link className="hover-bg" href="/portfolio">Branding</Link></li>
                  <li><Link href="/portfolio">Web Design</Link></li>
                  <li><Link href="/portfolio">UI/UX</Link></li>
                  <li><Link href="/portfolio">Graphics</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default HeroOne