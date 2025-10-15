import React from 'react'
import Link from 'next/link'

const FeatureCard = ({ feature, index }) => {
    return (
        <div
            className="feature-box"
            data-animation="fade-up"
            data-delay={index * 0.1}
            style={{
                height: '100%',
                minHeight: '200px',
                position: 'relative',
                padding: '35px 25px 25px',
                transition: 'all 0.3s ease',
                overflow: 'hidden'
            }}
        >
            <span>{String(index + 1).padStart(2, '0')}</span>
            <div className="icon">
                <i className={feature.icon} />
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <Link 
                href="/services" 
                className="feature-arrow"
                style={{
                    position: 'absolute',
                    bottom: '-50px',
                    right: '20px',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--mainColor2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    transition: 'all 0.3s ease',
                    fontSize: '20px'
                }}
            >
                <i className="bx bx-arrow-back bx-rotate-180" />
            </Link>
        </div>
    )
}

export default FeatureCard