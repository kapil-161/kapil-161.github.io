import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroParticles}>
          <span></span><span></span><span></span><span></span><span></span>
        </div>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <span className={styles.heroBadge}>MS Student • University of Florida</span>
              <h1>Turn Field Data Into <span className={styles.heroHighlight}>Actionable Intelligence</span></h1>
              <p className={styles.heroSub}>
                Crop modeling (DSSAT), geospatial analytics, and machine learning solutions for agribusinesses, research institutions, and government agencies.
              </p>
              <div className={styles.heroBtns}>
                <Link href="/contact" className="btn btn-primary btn-lg">Book a Free Consultation</Link>
                <Link href="/portfolio" className="btn btn-secondary btn-lg">View My Work</Link>
              </div>
              <p className={styles.heroCredential}>
                MS in Agricultural & Biological Engineering, University of Florida • UF Fellowship Recipient
              </p>
            </div>
            <div className={styles.heroImage}>
              <div className={styles.heroImageFrame}>
                <Image
                  src="/images/my_image2.jpg"
                  alt="Kapil Bhattarai - Agricultural Data Scientist"
                  width={420}
                  height={420}
                  priority
                  className={styles.heroPhoto}
                />
                <div className={styles.heroImageGlow}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF BAR */}
      <section className={styles.proofBar}>
        <div className="container">
          <div className={styles.proofGrid}>
            <div className={styles.proofItem}>
              <span className={styles.proofNumber}>3</span>
              <span className={styles.proofLabel}>Countries Worked In</span>
            </div>
            <div className={styles.proofDivider}></div>
            <div className={styles.proofItem}>
              <span className={styles.proofNumber}>11+</span>
              <span className={styles.proofLabel}>Research Projects</span>
            </div>
            <div className={styles.proofDivider}></div>
            <div className={styles.proofItem}>
              <span className={styles.proofNumber}>72</span>
              <span className={styles.proofLabel}>Person DSSAT Cohort</span>
            </div>
            <div className={styles.proofDivider}></div>
            <div className={styles.proofItem}>
              <span className={styles.proofNumber}>8+</span>
              <span className={styles.proofLabel}>Certifications</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          <div className="section-header">
            <h2>What I Do</h2>
            <p>Specialized services at the intersection of agriculture, data science, and technology.</p>
          </div>
          <div className="grid-3">
            <div className={`card ${styles.serviceCard}`}>
              <div className="card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>
              </div>
              <h4>Crop Modeling & DSSAT</h4>
              <p>Calibration, validation, and scenario analysis for crop simulation models. From field data to yield predictions.</p>
              <Link href="/services#crop-modeling" className={styles.cardLink}>Learn More →</Link>
            </div>
            <div className={`card ${styles.serviceCard}`}>
              <div className="card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" /><line x1="8" y1="2" x2="8" y2="18" /><line x1="16" y1="6" x2="16" y2="22" /></svg>
              </div>
              <h4>Geospatial & Remote Sensing</h4>
              <p>Satellite imagery analysis, GIS mapping, NDVI monitoring, and spatial data pipelines for agricultural applications.</p>
              <Link href="/services#geospatial" className={styles.cardLink}>Learn More →</Link>
            </div>
            <div className={`card ${styles.serviceCard}`}>
              <div className="card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
              </div>
              <h4>Ag Data Science & ML</h4>
              <p>Predictive modeling, data visualization dashboards, and machine learning pipelines for agricultural research and operations.</p>
              <Link href="/services#data-science" className={styles.cardLink}>Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED CASE STUDIES */}
      <section className={`section section-gray ${styles.caseStudiesSection}`}>
        <div className="container">
          <div className="section-header">
            <h2>Featured Work</h2>
            <p>Selected projects demonstrating impact across agricultural systems.</p>
          </div>
          <div className="grid-3">
            <div className={styles.caseCard}>
              <div className={styles.caseImage}>
                <Image src="/images/portfolio_item1.jpg" alt="Precision Nitrogen Management in Spring Rice" width={400} height={260} />
                <span className={styles.caseBadge}>DSSAT</span>
              </div>
              <div className={styles.caseContent}>
                <h4>Precision Nitrogen Management in Spring Rice</h4>
                <p>Used DSSAT decision support tools to optimize nitrogen application in Chitwan, Nepal, reducing input costs by estimated 15-20%.</p>
                <Link href="/portfolio#nitrogen-management" className={styles.cardLink}>Read Case Study →</Link>
              </div>
            </div>
            <div className={styles.caseCard}>
              <div className={styles.caseImage}>
                <Image src="/images/gb2_screenshot.jpeg" alt="DSSAT Graphical Visualization GB2" width={400} height={260} />
                <span className={styles.caseBadge}>Development</span>
              </div>
              <div className={styles.caseContent}>
                <h4>DSSAT Graphical Visualization GB2</h4>
                <p>Contributing to DSSAT v4.8.6 by building enhanced graphical visualization capabilities for the global research community.</p>
                <Link href="/portfolio#dssat-v2" className={styles.cardLink}>Read Case Study →</Link>
              </div>
            </div>
            <div className={styles.caseCard}>
              <div className={styles.caseImage}>
                <Image src="/images/rogcheck_app.png" alt="Rogcheck - Crop Disease Identification App" width={400} height={260} />
                <span className={styles.caseBadge}>Machine Learning</span>
              </div>
              <div className={styles.caseContent}>
                <h4>Rogcheck — Crop Disease Identification App</h4>
                <p>Android app using CNN and TensorFlow Lite for offline crop disease detection across potato, pepper bell, and tomato — classifying 10 diseases.</p>
                <Link href="/portfolio#disease-detection" className={styles.cardLink}>Read Case Study →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className={`section section-dark ${styles.testimonialSection}`}>
        <div className="container">
          <div className={styles.testimonialCard}>
            <div className={styles.quoteIcon}>❝</div>
            <blockquote className={styles.testimonialQuote}>
              {/* [TODO] Replace with a real testimonial from a professor or supervisor */}
              I demonstrate exceptional analytical skills and a deep understanding of crop modeling systems. My ability to bridge field research with data-driven insights makes me a valuable asset to any agricultural research team.
            </blockquote>

          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to Leverage Data for Better Agricultural Outcomes?</h2>
            <p>Let&apos;s discuss how data science and crop modeling can transform your agricultural research or operations.</p>
            <Link href="/contact" className="btn btn-gold btn-lg">Schedule a Free 30-Min Call</Link>
          </div>
        </div>
      </section>
    </>
  );
}
