import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'About',
    description: 'Learn about Kapil Bhattarai - Agricultural Data Scientist specializing in crop modeling (DSSAT), geospatial analytics, and machine learning at the University of Florida.',
};

export default function AboutPage() {
    return (
        <>
            {/* HERO */}
            <section className={styles.hero}>
                <div className="container">
                    <div className="section-header">
                        <span className={styles.badge}>About Me</span>
                        <h1>Bridging Field Research With Data-Driven Insights</h1>
                    </div>
                </div>
            </section>

            {/* INTRO */}
            <section className={`section ${styles.introSection}`}>
                <div className="container">
                    <div className={styles.introGrid}>
                        <div className={styles.introImage}>
                            <Image src="/images/about_img2.webp" alt="Kapil Bhattarai in the field" width={400} height={534} className={styles.aboutPhoto} />
                        </div>
                        <div className={styles.introText}>
                            <h2>My Story</h2>
                            <p className={styles.leadText}>
                                I am an agricultural data scientist who bridges the gap between field research and actionable analytics. My work focuses on helping organizations make better crop management decisions through simulation modeling, satellite data, and machine learning.
                            </p>
                            <h3>From Nepal to Florida</h3>
                            <p>
                                My journey began in Nepal, where I developed a deep understanding of agriculture at the ground level — working with farmers, understanding soil, and seeing firsthand the challenges of food production. This foundation shaped my mission: to make agriculture smarter through data.
                            </p>
                            <p>
                                An internship in Israel at Ragolski & Son&apos;s Ltd exposed me to advanced greenhouse operations, hybrid vegetable varieties, and precision growing systems. I saw how technology could transform agricultural productivity at scale.
                            </p>
                            <p>
                                Now at the <strong>University of Florida</strong>, I&apos;m pursuing my MS in Agricultural & Biological Engineering as a <strong>UF Fellowship recipient</strong>, specializing in DSSAT crop modeling and predictive analytics for agricultural systems.
                            </p>
                            <div className={styles.ctaRow}>
                                <Link href="/contact" className="btn btn-primary">Get In Touch</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* EXPERIENCE */}
            <section className={`section section-gray ${styles.expSection}`}>
                <div className="container">
                    <div className="section-header">
                        <h2>Work Experience</h2>
                        <p>Professional roles across Nepal, Israel, and beyond.</p>
                    </div>
                    <div className={styles.expList}>

                        <div className={styles.expItem}>
                            <div className={styles.expHeader}>
                                <div className={styles.expMeta}>
                                    <h3>Nursery Manager</h3>
                                    <span className={styles.expCompany}>Plant Paradise — Kadaghari, Kathmandu, Nepal</span>
                                </div>
                                <span className={styles.expDate}>Mar 2024 – Sep 2024</span>
                            </div>
                            <ul className={styles.expPoints}>
                                <li>Conducted nursery operations including plant propagation, production, and sales.</li>
                                <li>Identified infrastructure needs, procurement, and sales planning.</li>
                                <li>Managed website updates, social media operations, and digital marketing efforts.</li>
                                <li>Provided leadership in human resource management, including staff training and development.</li>
                                <li>Collaborated with the Director to ensure effective financial planning and budgeting.</li>
                            </ul>
                        </div>

                        <div className={styles.expItem}>
                            <div className={styles.expHeader}>
                                <div className={styles.expMeta}>
                                    <h3>Agriculture Intern</h3>
                                    <span className={styles.expCompany}>Ragolski &amp; Son&apos;s Ltd — Netiv HaAsara, Israel</span>
                                </div>
                                <span className={styles.expDate}>Aug 2022 – Aug 2023</span>
                            </div>
                            <ul className={styles.expPoints}>
                                <li>Gained advanced agricultural knowledge and practical training in a leading Israeli agribusiness.</li>
                                <li>Specialized in hybrid vegetable varieties, production, nursery management, and marketing of cut flowers in high-tech greenhouses.</li>
                                <li>Conducted spraying, picking, packing, and greenhouse construction activities.</li>
                                <li>Practiced coco-peat farming in a controlled environment system.</li>
                            </ul>
                        </div>

                        <div className={styles.expItem}>
                            <div className={styles.expHeader}>
                                <div className={styles.expMeta}>
                                    <h3>Agriculture Intern</h3>
                                    <span className={styles.expCompany}>Prime Minister Agriculture Modernization Project (PMAMP) — Chitwan, Nepal</span>
                                </div>
                                <span className={styles.expDate}>Feb 2022 – Jul 2022</span>
                            </div>
                            <ul className={styles.expPoints}>
                                <li>Conducted training on mechanization of rice farming and nursery management.</li>
                                <li>Delivered training on off-season vegetable production, vermicomposting, and climate-smart agriculture.</li>
                                <li>Performed mobile soil sampling, digital soil testing, and soil health campaigns.</li>
                                <li>Completed research on &quot;Precision Nitrogen Management in Spring Rice Using Decision Support Tools in Chitwan, Nepal.&quot;</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* SKILLS GRID */}
            <section className={`section ${styles.skillsSection}`}>
                <div className="container">
                    <div className="section-header">
                        <h2>Technical Skills</h2>
                        <p>Specific tools and technologies across my areas of expertise.</p>
                    </div>
                    <div className="grid-4">
                        <div className={`card ${styles.skillCard}`}>
                            <div className={styles.skillIcon}>🌾</div>
                            <h4>Crop Modeling</h4>
                            <ul className={styles.skillList}>
                                <li>DSSAT v4.8</li>
                                <li>Model calibration</li>
                                <li>Scenario analysis</li>
                                <li>Fortran (learning)</li>
                                <li>Field trial design</li>
                            </ul>
                        </div>
                        <div className={`card ${styles.skillCard}`}>
                            <div className={styles.skillIcon}>📊</div>
                            <h4>Data Science & ML</h4>
                            <ul className={styles.skillList}>
                                <li>Scikit-learn</li>
                                <li>TensorFlow</li>
                                <li>Predictive modeling</li>
                                <li>Time series analysis</li>
                                <li>Data visualization</li>
                            </ul>
                        </div>
                        <div className={`card ${styles.skillCard}`}>
                            <div className={styles.skillIcon}>🗺️</div>
                            <h4>Geospatial</h4>
                            <ul className={styles.skillList}>
                                <li>QGIS / ArcGIS</li>
                                <li>Remote sensing</li>
                                <li>NDVI / satellite imagery</li>
                                <li>Spatial statistics</li>
                                <li>GeoPandas</li>
                            </ul>
                        </div>
                        <div className={`card ${styles.skillCard}`}>
                            <div className={styles.skillIcon}>💻</div>
                            <h4>Programming</h4>
                            <ul className={styles.skillList}>
                                <li>Python</li>
                                <li>R / RStudio</li>
                                <li>SQL</li>
                                <li>Git / GitHub</li>
                                <li>Shiny apps</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CERTIFICATIONS */}
            <section className={`section ${styles.certSection}`}>
                <div className="container">
                    <div className="section-header">
                        <h2>Certifications & Achievements</h2>
                    </div>
                    <div className={styles.certCards}>
                        <div className={styles.certCard}>
                            <div className={styles.certImage}>
                                <Image src="/images/cert_ai_fluency_foundations.webp" alt="AI Fluency: Framework & Foundations - Anthropic Certificate" width={800} height={589} className={styles.certPhoto} />
                            </div>
                            <div className={styles.certItem}>
                                <span className={styles.certBadge}>Anthropic</span>
                                <h4>AI Fluency: Framework & Foundations</h4>
                                <p>Comprehensive course on AI frameworks, ethical AI development, and human-AI collaboration.</p>
                            </div>
                        </div>
                        <div className={styles.certCard}>
                            <div className={styles.certImage}>
                                <Image src="/images/cert_ai_fluency_students.webp" alt="AI Fluency for Students - Anthropic Certificate" width={800} height={608} className={styles.certPhoto} />
                            </div>
                            <div className={styles.certItem}>
                                <span className={styles.certBadge}>Anthropic</span>
                                <h4>AI Fluency for Students</h4>
                                <p>Practical skills for integrating AI responsibly into research and academic workflows.</p>
                            </div>
                        </div>
                        <div className={styles.certCard}>
                            <div className={styles.certImage}>
                                <Image src="/images/cert_dssat_training.webp" alt="DSSAT 2025 International Training Program Certificate" width={800} height={618} className={styles.certPhoto} />
                            </div>
                            <div className={styles.certItem}>
                                <span className={styles.certBadge}>DSSAT</span>
                                <h4>DSSAT 2025 International Training Program</h4>
                                <p>Crop production, water &amp; nutrient management, climatic risk and environmental sustainability with simulation models. Griffin, GA.</p>
                            </div>
                        </div>
                    </div>
                    <blockquote className={styles.certQuote}>
                        &ldquo;The most powerful outcomes emerge when humans and AI build on each other&apos;s strengths. AI Fluency is a journey of continuous learning and ethical development.&rdquo;
                    </blockquote>

                    <h3 className={styles.certListHeading}>Professional Certifications</h3>
                    <div className={styles.certList}>
                        <a href="https://www.coursera.org/account/accomplishments/certificate/NLU87GCXCFUA" target="_blank" rel="noopener noreferrer" className={styles.certListItem}>
                            <div className={styles.certListIcon}>📜</div>
                            <div>
                                <h5>Basic Image Classification with TensorFlow</h5>
                                <p>April 2022 &bull; Coursera Project Network</p>
                            </div>
                        </a>
                        <a href="https://www.coursera.org/account/accomplishments/certificate/ZKPPVKWWVDKT" target="_blank" rel="noopener noreferrer" className={styles.certListItem}>
                            <div className={styles.certListIcon}>🛰️</div>
                            <div>
                                <h5>Remote Sensing Image Acquisition, Analysis and Applications</h5>
                                <p>March 2022 &bull; University of South Wales</p>
                            </div>
                        </a>
                        <a href="https://www.coursera.org/account/accomplishments/certificate/BMQBYSFCYLDS" target="_blank" rel="noopener noreferrer" className={styles.certListItem}>
                            <div className={styles.certListIcon}>📊</div>
                            <div>
                                <h5>Data Analysis with R Programming</h5>
                                <p>June 2021 &bull; Coursera</p>
                            </div>
                        </a>
                        <a href="https://www.coursera.org/account/accomplishments/certificate/UVD7HPGU5T4T" target="_blank" rel="noopener noreferrer" className={styles.certListItem}>
                            <div className={styles.certListIcon}>🤖</div>
                            <div>
                                <h5>Introduction to Machine Learning</h5>
                                <p>April 2021 &bull; Duke University</p>
                            </div>
                        </a>
                        <a href="https://www.datacamp.com/statement-of-accomplishment/course/6bd163c71f010e2bbbfff123924ca42ad2bce127" target="_blank" rel="noopener noreferrer" className={styles.certListItem}>
                            <div className={styles.certListIcon}>🗺️</div>
                            <div>
                                <h5>Working with Geospatial Data in Python</h5>
                                <p>April 2021 &bull; DataCamp</p>
                            </div>
                        </a>
                        <a href="https://www.coursera.org/account/accomplishments/certificate/D8Q28DWF9WCN" target="_blank" rel="noopener noreferrer" className={styles.certListItem}>
                            <div className={styles.certListIcon}>☁️</div>
                            <div>
                                <h5>Getting Started with AWS Machine Learning</h5>
                                <p>May 2021 &bull; AWS</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* ACADEMIC PROFILES */}
            <section className={`section section-dark`}>
                <div className="container">
                    <div className="section-header">
                        <h2>Academic Profiles</h2>
                        <p>Connect with me on academic platforms.</p>
                    </div>
                    <div className={styles.profileLinks}>
                        {/* [TODO] Update with real profile URLs */}
                        <a href="https://scholar.google.com/citations?user=vqVzA0gAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className={styles.profileBtn}>
                            <span>🎓</span> Google Scholar
                        </a>
                        <a href="https://orcid.org/0000-0001-5067-1679" target="_blank" rel="noopener noreferrer" className={styles.profileBtn}>
                            <span>🔬</span> ORCID
                        </a>
                        <a href="https://www.researchgate.net/profile/Kapil-Bhattarai-5?ev=hdr_xprf" target="_blank" rel="noopener noreferrer" className={styles.profileBtn}>
                            <span>📝</span> ResearchGate
                        </a>
                        <a href="https://github.com/kapil-161" target="_blank" rel="noopener noreferrer" className={styles.profileBtn}>
                            <span>💻</span> GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/kapil-bhattarai-792417192/" target="_blank" rel="noopener noreferrer" className={styles.profileBtn}>
                            <span>🔗</span> LinkedIn
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
