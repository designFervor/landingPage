import React from 'react'
import FeatureCard from './featureCard'
import { featuresData } from '@/db/featuresData'

const Features = () => {
    return (
        <div className="features-section-2 pt-100 pb-100" id="features-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-header text-center" style={{marginBottom: '60px'}}>
                            <div className="sub-title-2" data-animation="fade-zoom-in" style={{marginBottom: '20px'}}>
                                <p>WHAT WE DO</p>
                            </div>
                            <h2 data-animation="fade-up" style={{fontSize: '48px', marginBottom: '20px'}}>
                                Services That Drive Results
                            </h2>
                            <p data-animation="fade-up" data-delay={0.1} style={{
                                maxWidth: '600px',
                                margin: '0 auto',
                                fontSize: '18px',
                                lineHeight: '1.6'
                            }}>
                                We offer comprehensive design solutions that transform your brand vision into reality through strategic thinking and creative excellence.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        featuresData.map((feature, index) => (
                            <div key={feature.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-4">
                                <FeatureCard feature={feature} index={index}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

    )
}

export default Features