'use client'
import Link from 'next/link'
import React from 'react'
import Button from '@/components/ui/Button'

const HeroOne = () => {
  return (
    <div className="hero-section-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="hero-content-2">
              <div className="sub-title-2" data-animation="fade-zoom-in" data-delay={0.4} style={{marginBottom: '8px'}}>
                <p>Award-Winning Design Agency</p>
              </div>
              <h2>
                <span>Transform your ideas into</span>
                <br />
                <span className="sub-head">Stunning Visual Designs</span>
              </h2>
              <div className="hero-description" data-animation="fade-zoom-in">
                <p style={{marginBottom: '40px'}}>Award-winning design studio crafting brand identities, websites, and digital experiences that drive business growth and captivate audiences.</p>
                <div className="hero-buttons" style={{marginBottom: '40px'}}>
                  <Button 
                    href="/portfolio" 
                    variant="primary"
                    icon={<i className="bx bx-chevron-right" />}
                  >
                    View Our Work
                  </Button>
                  <Button 
                    href="/contact" 
                    variant="outlined"
                    icon={<i className="bx bx-chevron-right" />}
                  >
                    Start a Project
                  </Button>
                </div>
              </div>
              <div className="short-prompt" data-animation="fade-zoom-in">
                <ul>
                  <li><p>Our Expertise :</p></li>
                  <li><Link className="hover-bg" href="/services">Brand Identity</Link></li>
                  <li><Link href="/services">Web Design</Link></li>
                  <li><Link href="/services">UI/UX Design</Link></li>
                  <li><Link href="/services">Packaging</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-down-wrapper" style={{
        position: 'absolute',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: '10'
      }}>
        <a 
          href="#features-section" 
          className="scroll-down-btn"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('features-section')?.scrollIntoView({ behavior: 'smooth' });
          }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '50px',
            height: '50px',
            border: '2px solid rgba(255, 255, 255, 0.5)',
            borderRadius: '50%',
            color: '#fff',
            fontSize: '24px',
            transition: 'all 0.3s ease',
            animation: 'bounce 2s infinite',
            cursor: 'pointer'
          }}
        >
          <i className="bx bx-chevron-down"></i>
        </a>
      </div>
    </div>

  )
}

export default HeroOne