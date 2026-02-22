import styles from './page.module.css';
import Link from 'next/link';

export const metadata = {
    title: 'Research & Publications',
    description: 'Research interests, publications, presentations, and academic work by Kapil Bhattarai in crop modeling, precision agriculture, and agricultural data science.',
};

export default function ResearchPage() {
    return (
        <>
            <section className={styles.hero}>
                <div className="container">
                    <div className="section-header">
                        <span className={styles.badge}>Research</span>
                        <h1>Research & Publications</h1>
                        <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto' }}>
                            My academic work spanning crop simulation modeling, precision agriculture, and geospatial analytics.
                        </p>
                    </div>
                </div>
            </section>

            {/* RESEARCH INTERESTS */}
            <section className="section">
                <div className="container">
                    <div className={styles.twoCol}>
                        <div>
                            <h2>Research Interests</h2>
                            <ul className={styles.interestList}>
                                <li>Crop simulation modeling (DSSAT)</li>
                                <li>Precision agriculture and nutrient management</li>
                                <li>Geospatial analytics and remote sensing for agriculture</li>
                                <li>Machine learning for yield prediction</li>
                                <li>Climate-smart agriculture</li>
                                <li>Decision support tools for smallholder farming systems</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Current Work</h2>
                            <p>
                                Currently pursuing my MS at the University of Florida&apos;s ABE Department as a <strong>UF Fellowship recipient</strong>,
                                my thesis research focuses on DSSAT crop simulation modeling and its applications for agricultural decision-making.
                            </p>
                            <p>
                                I am also contributing to the development of <strong>Graphical Visualization GB2 for DSSAT v4.8.6</strong>,
                                enhancing data visualization capabilities for the global research community. Additionally, I am expanding
                                my technical skills in crop modeling using Fortran and Python.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* RESEARCH PROJECTS */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Research Projects</h2>
                        <p>Key research projects with detailed objectives, methods, and outcomes.</p>
                    </div>
                    <div className={styles.pubList}>
                        <div className={styles.pubItem}>
                            <div className={styles.pubType}>Crop Modeling • Chitwan, Nepal</div>
                            <h4>Precision Nitrogen Management in Spring Rice</h4>
                            <p className={styles.pubMeta}>Applied DSSAT decision support tools to model nitrogen dynamics in spring rice (Oryza sativa L.) across multiple management scenarios.
                                Identified optimized application rates that could reduce input costs by 15–20% while maintaining yield. Published in Turkish Journal of Agriculture-Food Science and Technology (2024).</p>
                            <div className={styles.pubMeta}><strong>Tools:</strong> DSSAT v4.8, Python, R, Field Experiments</div>
                        </div>
                        <div className={styles.pubItem}>
                            <div className={styles.pubType}>Software Development • University of Florida</div>
                            <h4>DSSAT Graphical Visualization GB2</h4>
                            <p className={styles.pubMeta}>Contributing to DSSAT v4.8.6 by developing an enhanced graphical visualization tool with modern UI and improved data processing capabilities. Used by researchers in 100+ countries.</p>
                            <div className={styles.pubMeta}><strong>Tools:</strong> Python, Data Visualization, DSSAT v4.8.6, Fortran</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PUBLICATIONS & POSTERS */}
            <section className={`section section-gray`}>
                <div className="container">
                    <div className="section-header">
                        <h2>Publications & Posters</h2>
                    </div>
                    <div className={styles.pubList}>
                        <div className={styles.pubItem}>
                            <div className={styles.pubType}>Journal Article • 2024</div>
                            <h4>Precision Nitrogen Management in Spring Rice (Oryza sativa L.) Using Decision Support Tools in Chitwan, Nepal</h4>
                            <p className={styles.pubMeta}>K Bhattarai, KR Pandey, S Marahatta, M Dhakal, NR Bhusal, R Thapa</p>
                            <p className={styles.pubMeta}>Turkish Journal of Agriculture-Food Science and Technology, 12(6), 955–965 &bull; Cited: 3</p>
                        </div>
                        <div className={styles.pubItem}>
                            <div className={styles.pubType}>Journal Article • 2025</div>
                            <h4>Impact of Weed Management Practices on the Growth and Yield of Spring Rice in Pyuthan, Nepal</h4>
                            <p className={styles.pubMeta}>NR Bhusal, MR Pokhrel, R Chaudhary, K Bhattarai, P Timalsina</p>
                            <p className={styles.pubMeta}>Journal of Agricultural Sciences and Engineering, 7(3), 150–164 &bull; Cited: 1</p>
                        </div>
                        <div className={styles.pubItem}>
                            <div className={styles.pubType}>Journal Article • 2022</div>
                            <h4>Effects of Various Fertilizer Combinations on Okra (Abelmoschus esculentus L.) Varieties for Dietary Fiber Content and Vegetative Characteristic</h4>
                            <p className={styles.pubMeta}>B Regmi, K Bhattarai, NR Bhusal, SR Poudel, S Kunwar</p>
                            <p className={styles.pubMeta}>Himalayan Journal of Science and Technology, 6(1), 75–86 &bull; Cited: 1</p>
                        </div>
                        <div className={styles.pubItem}>
                            <div className={styles.pubType}>Journal Article</div>
                            <h4>Effects of Ethephon and Pruning Practices on Sex Expression and Yield of Cucumber (Cucumis sativus L.) in Rupandehi, Nepal</h4>
                            <p className={styles.pubMeta}>K Gyawali, PR Dhital, K Bhattarai, S Baral</p>
                            <p className={styles.pubMeta}>Turkish Journal of Agriculture-Food Science and Technology, 13(2), 346–352</p>
                        </div>
                        <div className={styles.pubItem}>
                            <div className={styles.pubType}>Poster Presentation • 2025</div>
                            <h4>Evaluating the Performance of the DSSAT Cropping System Model</h4>
                            <p className={styles.pubMeta}>K Bhattarai &bull; University of Florida</p>
                            <p className={styles.pubMeta}>Presented research findings on DSSAT model evaluation, covering calibration methodology, validation results, and model performance metrics.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* PRESENTATIONS & EVENTS */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Presentations & Events</h2>
                    </div>
                    <div className={styles.timeline}>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineDot}></div>
                            <div className={styles.timelineContent}>
                                <span className={styles.timelineDate}>November 16-21, 2025</span>
                                <h4>Crop Physiology Training — Wageningen University & UF</h4>
                                <p>Earned 1.5 ECTS credits through a joint program by Wageningen University&apos;s PE&RC and UF&apos;s ABE Department.</p>
                            </div>
                        </div>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineDot}></div>
                            <div className={styles.timelineContent}>
                                <span className={styles.timelineDate}>August 4-8, 2025</span>
                                <h4>23rd DSSAT Development Sprint — University of Kentucky</h4>
                                <p>Virtual participant contributing to DSSAT development and community discussions.</p>
                            </div>
                        </div>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineDot}></div>
                            <div className={styles.timelineContent}>
                                <span className={styles.timelineDate}>May 19-24, 2025</span>
                                <h4>DSSAT Training — University of Georgia</h4>
                                <p>Completed intensive DSSAT training alongside 72 participants from 28 countries, covering potential production to model applications.</p>
                            </div>
                        </div>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineDot}></div>
                            <div className={styles.timelineContent}>
                                <span className={styles.timelineDate}>March 13, 2025</span>
                                <h4>HiPerGator Supercomputer Facility Visit — University of Florida</h4>
                                <p>Visited UF&apos;s HiPerGator supercomputer facility — a powerful computational resource for agricultural research.</p>
                            </div>
                        </div>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineDot}></div>
                            <div className={styles.timelineContent}>
                                <span className={styles.timelineDate}>March 2025</span>
                                <h4>Poster Presentation — University of Florida</h4>
                                <p>Presented poster on &quot;Evaluating the Performance of the DSSAT Cropping System Model.&quot;</p>
                            </div>
                        </div>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineDot}></div>
                            <div className={styles.timelineContent}>
                                <span className={styles.timelineDate}>January 6-10, 2025</span>
                                <h4>22nd DSSAT Development Sprint — University of Florida</h4>
                                <p>In-person participant engaged in DSSAT model development and collaborative research.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DATASETS & CODE */}
            <section className={`section section-gray`}>
                <div className="container">
                    <div className="section-header">
                        <h2>Code & Repositories</h2>
                    </div>
                    <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="https://github.com/kapil-161/GB2CPP" target="_blank" rel="noopener noreferrer" className={styles.repoCard}>
                            <div className={styles.repoIcon}>🌾</div>
                            <h4>DSSAT Graphical Visualization GB2</h4>
                            <p>Enhanced graphical visualization tool for DSSAT crop model outputs.</p>
                        </a>
                        <a href="https://github.com/kapil-161" target="_blank" rel="noopener noreferrer" className={styles.repoCard}>
                            <div className={styles.repoIcon}>💻</div>
                            <h4>GitHub Profile</h4>
                            <p>Explore all my public repositories, code samples, and contributions.</p>
                        </a>

                    </div>
                </div>
            </section>

            {/* ACADEMIC PROFILES */}
            <section className={`section section-dark`}>
                <div className="container">
                    <div className="section-header">
                        <h2>Academic Profiles</h2>
                        <p>Find my work across academic platforms.</p>
                    </div>
                    <div className={styles.profileLinks}>
                        <a href="https://scholar.google.com/citations?user=vqVzA0gAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className={styles.profileBtn}>🎓 Google Scholar</a>
                        <a href="https://orcid.org/0000-0001-5067-1679" target="_blank" rel="noopener noreferrer" className={styles.profileBtn}>🔬 ORCID</a>
                        <a href="https://www.researchgate.net/profile/Kapil-Bhattarai-5?ev=hdr_xprf" target="_blank" rel="noopener noreferrer" className={styles.profileBtn}>📝 ResearchGate</a>
                        <a href="https://github.com/kapil-161" target="_blank" rel="noopener noreferrer" className={styles.profileBtn}>💻 GitHub</a>
                    </div>
                </div>
            </section>
        </>
    );
}
