import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'Portfolio',
    description: 'Explore case studies and projects by Kapil Bhattarai in crop modeling, geospatial analytics, data science, and agricultural research.',
};

const caseStudies = [
    {
        id: 'nitrogen-management',
        title: 'Precision Nitrogen Management in Spring Rice',
        location: 'Chitwan, Nepal',
        badge: 'DSSAT · Crop Modeling',
        image: '/images/portfolio_item1.webp',
        problem: 'Farmers in Chitwan, Nepal were applying nitrogen fertilizers based on blanket recommendations, leading to inefficient resource use and environmental impact.',
        approach: 'Applied DSSAT decision support tools to model nitrogen dynamics in spring rice (Oryza sativa L.) across multiple management scenarios.',
        tools: ['DSSAT v4.8', 'Python', 'R', 'Field Experiments'],
        results: 'Identified optimized nitrogen application rates that could reduce input costs by an estimated 15-20% while maintaining yield levels.',
        impact: 'Provided evidence-based recommendations for precision nitrogen management adaptable to smallholder farming systems in the Terai region.',
    },
    {
        id: 'dssat-v2',
        title: 'DSSAT Graphical Visualization GB2',
        location: 'University of Florida',
        badge: 'Development · Python',
        image: '/images/gb2_screenshot.webp',
        problem: 'Existing DSSAT visualization tools had limited interactivity and did not fully support the latest model outputs in v4.8.6.',
        approach: 'Developing Graphical Visualization GB2 with enhanced data visualization capabilities, modern UI, and improved data processing.',
        tools: ['Python', 'Data Visualization', 'DSSAT v4.8.6', 'Fortran'],
        results: 'Creating a more intuitive and powerful tool for researchers to analyze and visualize crop model outputs.',
        impact: 'Enhancing data visualization capabilities for the global DSSAT research community used by researchers in 100+ countries.',
    },

];

const additionalProjects = [
    { title: 'Treatment Effect Analysis', desc: 'Boxplot comparison of crop responses across three treatment groups to evaluate experimental outcomes.', tags: ['R', 'Statistics', 'Data Viz'], image: '/images/portfolio_item3.webp' },
    { title: 'Farmer Platform Usability Survey', desc: 'Survey analysis of farmer responses on ease of registration across mobile app, website, and both platforms.', tags: ['R', 'Survey Analysis', 'Data Viz'], image: '/images/portfolio_item9.webp' },
    { title: 'Rogcheck — Disease ID App', desc: 'Android app using CNN & TensorFlow Lite for offline crop disease detection across 10 diseases.', tags: ['CNN', 'TFLite', 'Java'], image: '/images/rogcheck_app.webp' },
    { title: 'Remote Sensing Analysis', desc: 'Satellite imagery analysis for agricultural monitoring.', tags: ['Remote Sensing', 'Python'], image: '/images/portfolio_item8.webp' },
    { title: 'DNA Sequencing Classifier', desc: 'Built a classifier for DNA sequencing data achieving 99.3% accuracy with confusion matrix evaluation across 7 classes.', tags: ['Python', 'ML', 'Bioinformatics'], image: '/images/portfolio_item4.webp' },
    { title: 'R Data Analysis Workshop', desc: 'Conducted a data analysis training with R-Studio for agriculture, veterinary, and fisheries students at AFU, Rampur, Chitwan. Organized by GAVS.', tags: ['R', 'Training', 'Workshop'], image: '/images/portfolio_item10.webp' },
];

export default function PortfolioPage() {
    return (
        <>
            <section className={styles.hero}>
                <div className="container">
                    <div className="section-header">
                        <span className={styles.badge}>Portfolio</span>
                        <h1>Case Studies & Projects</h1>
                        <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto' }}>
                            Detailed project write-ups demonstrating objectives, methods, tools, and outcomes.
                        </p>
                    </div>
                </div>
            </section>

            {/* DETAILED CASE STUDIES */}
            <section className="section">
                <div className="container">
                    {caseStudies.map((cs, idx) => (
                        <div key={cs.id} id={cs.id} className={styles.caseStudy}>
                            <div className={styles.caseStudyImage}>
                                <Image src={cs.image} alt={cs.title} width={600} height={400} className={styles.caseImg} />
                                <span className={styles.caseBadge}>{cs.badge}</span>
                            </div>
                            <div className={styles.caseStudyContent}>
                                <h3>{cs.title}</h3>
                                <p className={styles.caseLocation}>{cs.location}</p>

                                <div className={styles.caseSection}>
                                    <h5>The Problem</h5>
                                    <p>{cs.problem}</p>
                                </div>

                                <div className={styles.caseSection}>
                                    <h5>Approach</h5>
                                    <p>{cs.approach}</p>
                                </div>

                                <div className={styles.caseSection}>
                                    <h5>Tools Used</h5>
                                    <div className={styles.toolTags}>
                                        {cs.tools.map(t => <span key={t}>{t}</span>)}
                                    </div>
                                </div>

                                <div className={styles.caseSection}>
                                    <h5>Results</h5>
                                    <p>{cs.results}</p>
                                </div>

                                <div className={styles.caseSection}>
                                    <h5>Impact</h5>
                                    <p>{cs.impact}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ADDITIONAL PROJECTS */}
            <section className={`section section-gray`}>
                <div className="container">
                    <div className="section-header">
                        <h2>More Projects</h2>
                    </div>
                    <div className="grid-3">
                        {additionalProjects.map((p, i) => (
                            <div key={i} className={styles.projectCard}>
                                <div className={styles.projectImage}>
                                    <Image src={p.image} alt={p.title} width={400} height={250} />
                                </div>
                                <div className={styles.projectContent}>
                                    <h4>{p.title}</h4>
                                    <p>{p.desc}</p>
                                    <div className={styles.toolTags}>
                                        {p.tags.map(t => <span key={t}>{t}</span>)}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <div className={styles.ctaContent}>
                        <h2>Have a Similar Project in Mind?</h2>
                        <p>Let&apos;s discuss how I can help you achieve your goals with data-driven approaches.</p>
                        <Link href="/contact" className="btn btn-gold btn-lg">Start a Conversation</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
