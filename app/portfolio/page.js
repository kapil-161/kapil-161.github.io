import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'Work',
    description: 'Applied projects by Kapil Bhattarai in agricultural data science, machine learning, app development, geospatial analysis, and training.',
};

const projects = [
    {
        title: 'DSSAT Graphical Visualization GB2',
        desc: 'Contributing to DSSAT v4.8.6 by building enhanced graphical visualization capabilities for the global crop modeling research community.',
        tags: ['Python', 'DSSAT', 'Data Viz', 'Fortran'],
        image: '/images/gb2_screenshot.webp',
    },
    {
        title: 'Rogcheck — Crop Disease ID App',
        desc: 'Android app using CNN & TensorFlow Lite for offline crop disease detection across potato, pepper bell, and tomato — classifying 10 diseases.',
        tags: ['CNN', 'TFLite', 'Java', 'Android'],
        image: '/images/rogcheck_app.webp',
    },
    {
        title: 'Remote Sensing Analysis',
        desc: 'Satellite imagery analysis for agricultural monitoring using NDVI and land cover classification techniques.',
        tags: ['Remote Sensing', 'Python', 'GIS'],
        image: '/images/portfolio_item8.webp',
    },
    {
        title: 'DNA Sequencing Classifier',
        desc: 'Built a classifier for DNA sequencing data achieving 99.3% accuracy with confusion matrix evaluation across 7 classes.',
        tags: ['Python', 'ML', 'Bioinformatics'],
        image: '/images/portfolio_item4.webp',
    },
    {
        title: 'Treatment Effect Analysis',
        desc: 'Boxplot comparison of crop responses across three treatment groups to evaluate experimental outcomes.',
        tags: ['R', 'Statistics', 'Data Viz'],
        image: '/images/portfolio_item3.webp',
    },
    {
        title: 'Farmer Platform Usability Survey',
        desc: 'Survey analysis of farmer responses on ease of registration across mobile app, website, and both platforms.',
        tags: ['R', 'Survey Analysis', 'Data Viz'],
        image: '/images/portfolio_item9.webp',
    },
    {
        title: 'R Data Analysis Workshop',
        desc: 'Conducted a data analysis training with R-Studio for agriculture, veterinary, and fisheries students at AFU, Rampur, Chitwan. Organized by GAVS.',
        tags: ['R', 'Training', 'Workshop'],
        image: '/images/portfolio_item10.webp',
    },
];

export default function PortfolioPage() {
    return (
        <>
            <section className={styles.hero}>
                <div className="container">
                    <div className="section-header">
                        <span className={styles.badge}>Work</span>
                        <h1>Projects &amp; Applications</h1>
                        <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto' }}>
                            Applied tools, apps, analyses, and workshops — the practical side of agricultural data science.
                        </p>
                    </div>
                </div>
            </section>

            {/* PROJECT GRID */}
            <section className="section">
                <div className="container">
                    <div className="grid-3">
                        {projects.map((p, i) => (
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
