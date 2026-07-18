import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'Work',
    description: 'Applied projects and case studies by Kapil Bhattarai in agricultural data science, crop modeling (DSSAT), machine learning, app development, and geospatial analysis.',
};

const caseStudies = [
    {
        id: 'nitrogen-management',
        title: 'Precision Nitrogen Management in Spring Rice',
        location: 'Chitwan, Nepal · Peer-reviewed, 2024',
        badge: 'DSS Tools & Field Research',
        image: '/images/portfolio_item1.webp',
        imageWidth: 800,
        imageHeight: 1126,
        challenge: 'Rice farmers in Nepal typically apply a blanket nitrogen rate (~120 kg/ha), which drives up input costs and leaves excess nitrogen to run off into the environment — without any guarantee of higher yield.',
        approach: 'I ran a field experiment in spring rice (Oryza sativa L.) using decision-support tools — a SPAD chlorophyll meter to read the crop’s real nitrogen status and time applications to actual need, rather than a fixed calendar schedule.',
        result: 'SPAD-guided management cut applied nitrogen by 33% (from 120 to 80 kg/ha) with no loss in grain yield. The work became my first-authored, peer-reviewed paper in the Turkish Journal of Agriculture-Food Science and Technology, 12(6), 955–965.',
        tags: ['SPAD', 'Field Experiments', 'R', 'Precision Ag'],
    },
    {
        id: 'dssat-v2',
        title: 'DSSAT Graphical Visualization GB2',
        location: 'University of Florida · Open Source',
        badge: 'Development',
        image: '/images/gb2_screenshot.webp',
        imageWidth: 800,
        imageHeight: 479,
        challenge: 'DSSAT is one of the most widely used crop simulation models in the world, but its legacy tools for viewing simulation output are dated and make it slow for researchers to explore and compare model results.',
        approach: 'I am contributing to DSSAT v4.8.6 by building GB2, an enhanced graphical visualization tool with a modern interface and faster data processing — written in Python and interfacing with the model’s Fortran output. I developed this work through the 22nd (UF) and 23rd (University of Kentucky) DSSAT Development Sprints.',
        result: 'A more usable visualization workflow contributed back to the open-source DSSAT crop model used by agricultural researchers worldwide. The code is public on GitHub.',
        tags: ['Python', 'DSSAT', 'Data Viz', 'Fortran'],
        repo: 'https://github.com/kapil-161/GB2CPP',
    },
    {
        id: 'disease-detection',
        title: 'Rogcheck — Crop Disease Identification App',
        location: 'Android · Offline Machine Learning',
        badge: 'Machine Learning',
        image: '/images/rogcheck_app.webp',
        imageWidth: 800,
        imageHeight: 456,
        challenge: 'Smallholder farmers often lack reliable internet and quick access to plant-health experts, so a treatable crop disease can spread before it is ever correctly diagnosed.',
        approach: 'I built an Android app that runs a convolutional neural network (CNN) fully on-device using TensorFlow Lite, so diagnosis works with no internet connection. The model was trained to recognize disease across potato, pepper bell, and tomato leaves.',
        result: 'Instant, offline diagnosis in the field — classifying 10 disease classes across three crops directly on a farmer’s phone.',
        tags: ['CNN', 'TFLite', 'Java', 'Android'],
    },
];

const projects = [
    {
        title: 'Remote Sensing Analysis',
        desc: 'Satellite imagery analysis for crop monitoring using NDVI time series and supervised land-cover classification.',
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
                        <h1>Projects &amp; Case Studies</h1>
                        <p style={{ color: 'rgba(226, 227, 237, 0.7)', maxWidth: '600px', margin: '0 auto' }}>
                            Applied tools, apps, analyses, and workshops — the practical side of agricultural data science, with the thinking behind the featured work.
                        </p>
                    </div>
                </div>
            </section>

            {/* FEATURED CASE STUDIES */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Featured Case Studies</h2>
                        <p>A closer look at three projects — the problem, my approach, and the outcome.</p>
                    </div>
                    <div>
                        {caseStudies.map((cs) => (
                            <article key={cs.id} id={cs.id} className={styles.caseStudy}>
                                <div className={styles.caseStudyImage}>
                                    <Image
                                        src={cs.image}
                                        alt={cs.title}
                                        width={cs.imageWidth}
                                        height={cs.imageHeight}
                                        className={styles.caseImg}
                                    />
                                    <span className={styles.caseBadge}>{cs.badge}</span>
                                </div>
                                <div className={styles.caseStudyContent}>
                                    <h3>{cs.title}</h3>
                                    <div className={styles.caseLocation}>{cs.location}</div>
                                    <div className={styles.caseSection}>
                                        <h5>The Challenge</h5>
                                        <p>{cs.challenge}</p>
                                    </div>
                                    <div className={styles.caseSection}>
                                        <h5>My Approach</h5>
                                        <p>{cs.approach}</p>
                                    </div>
                                    <div className={styles.caseSection}>
                                        <h5>The Result</h5>
                                        <p>{cs.result}</p>
                                    </div>
                                    <div className={styles.caseSection}>
                                        <h5>Tools</h5>
                                        <div className={styles.toolTags}>
                                            {cs.tags.map(t => <span key={t}>{t}</span>)}
                                        </div>
                                    </div>
                                    {cs.repo && (
                                        <a href={cs.repo} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                                            View Code on GitHub
                                        </a>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* MORE PROJECTS */}
            <section className="section section-gray">
                <div className="container">
                    <div className="section-header">
                        <h2>More Projects</h2>
                        <p>Additional analyses, tools, and training work.</p>
                    </div>
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
                        <h2>Want to Discuss My Work?</h2>
                        <p>I&apos;m open to ag-tech data science and crop-modeling roles. Happy to walk through any of these projects in detail.</p>
                        <Link href="/contact" className="btn btn-gold btn-lg">Get In Touch</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
