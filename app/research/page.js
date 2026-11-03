import styles from './page.module.css';
import Link from 'next/link';

export const metadata = {
    title: 'Research & Publications',
    description: 'Research interests, publications, presentations, and academic work by Kapil Bhattarai in crop modeling, precision agriculture, and agricultural data science.',
    alternates: { canonical: '/research' },
};

const PERSON_ID = 'https://bhattaraikapil.com.np/#person';

const personNode = {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: 'Kapil Bhattarai',
    url: 'https://bhattaraikapil.com.np',
    jobTitle: 'Agricultural Data Scientist',
    identifier: {
        '@type': 'PropertyValue',
        propertyID: 'ORCID',
        value: 'https://orcid.org/0000-0001-5067-1679',
    },
    sameAs: [
        'https://www.linkedin.com/in/kapil-bhattarai-792417192/',
        'https://github.com/kapil-161',
        'https://twitter.com/KD_Bhattarai',
        'https://www.youtube.com/@AFUStudio',
        'https://orcid.org/0000-0001-5067-1679',
        'https://www.researchgate.net/profile/Kapil-Bhattarai-5',
        'https://scholar.google.com/citations?user=vqVzA0gAAAAJ&hl=en',
    ],
};

const articleNodes = [
    {
        '@type': 'ScholarlyArticle',
        headline: 'Impact of weed management practices on the growth and yield of spring rice in Pyuthan, Nepal',
        identifier: 'https://doi.org/10.48309/jase.2025.502426.1066',
        url: 'https://doi.org/10.48309/jase.2025.502426.1066',
        datePublished: '2025',
        author: [
            { '@type': 'Person', name: 'N. R. Bhusal' },
            { '@type': 'Person', name: 'M. R. Pokhrel' },
            { '@type': 'Person', name: 'R. Chaudhary' },
            { '@id': PERSON_ID },
            { '@type': 'Person', name: 'P. Timalsina' },
        ],
        isPartOf: {
            '@type': 'PublicationIssue',
            issueNumber: '3',
            isPartOf: {
                '@type': ['PublicationVolume', 'Periodical'],
                volumeNumber: '7',
                name: 'Journal of Agricultural Sciences and Engineering',
            },
        },
        pageStart: '150',
        pageEnd: '164',
    },
    {
        '@type': 'ScholarlyArticle',
        headline: 'Effects of ethephon and pruning practices on sex expression and yield of cucumber (Cucumis sativus L.) in Rupandehi, Nepal',
        identifier: 'https://doi.org/10.24925/turjaf.v13i2.346-352.7179',
        url: 'https://doi.org/10.24925/turjaf.v13i2.346-352.7179',
        datePublished: '2025-02-28',
        author: [
            { '@type': 'Person', name: 'K. Gyawali' },
            { '@type': 'Person', name: 'P. R. Dhital' },
            { '@id': PERSON_ID },
            { '@type': 'Person', name: 'S. Baral' },
        ],
        isPartOf: {
            '@type': 'PublicationIssue',
            issueNumber: '2',
            isPartOf: {
                '@type': ['PublicationVolume', 'Periodical'],
                volumeNumber: '13',
                name: 'Turkish Journal of Agriculture-Food Science and Technology',
            },
        },
        pageStart: '346',
        pageEnd: '352',
    },
    {
        '@type': 'ScholarlyArticle',
        headline: 'Precision nitrogen management in spring rice (Oryza sativa L.) using decision support tools in Chitwan, Nepal',
        identifier: 'https://doi.org/10.24925/turjaf.v12i6.955-965.6731',
        url: 'https://doi.org/10.24925/turjaf.v12i6.955-965.6731',
        datePublished: '2024-06-10',
        author: [
            { '@id': PERSON_ID },
            { '@type': 'Person', name: 'K. R. Pandey' },
            { '@type': 'Person', name: 'S. Marahatta' },
            { '@type': 'Person', name: 'M. Dhakal' },
            { '@type': 'Person', name: 'N. R. Bhusal' },
            { '@type': 'Person', name: 'R. Thapa' },
        ],
        isPartOf: {
            '@type': 'PublicationIssue',
            issueNumber: '6',
            isPartOf: {
                '@type': ['PublicationVolume', 'Periodical'],
                volumeNumber: '12',
                name: 'Turkish Journal of Agriculture-Food Science and Technology',
            },
        },
        pageStart: '955',
        pageEnd: '965',
    },
    {
        '@type': 'ScholarlyArticle',
        headline: 'Effects of various fertilizer combinations on okra (Abelmoschus esculentus L.) varieties for dietary fiber content and vegetative characteristic',
        identifier: 'https://doi.org/10.3126/hijost.v6i1.50658',
        url: 'https://doi.org/10.3126/hijost.v6i1.50658',
        datePublished: '2022-12-31',
        author: [
            { '@type': 'Person', name: 'B. Regmi' },
            { '@id': PERSON_ID },
            { '@type': 'Person', name: 'N. R. Bhusal' },
            { '@type': 'Person', name: 'S. R. Poudel' },
            { '@type': 'Person', name: 'S. Kunwar' },
        ],
        isPartOf: {
            '@type': 'PublicationIssue',
            issueNumber: '1',
            isPartOf: {
                '@type': ['PublicationVolume', 'Periodical'],
                volumeNumber: '6',
                name: 'Himalayan Journal of Science and Technology',
            },
        },
        pageStart: '75',
        pageEnd: '86',
    },
];

const researchJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [personNode, ...articleNodes],
};

export default function ResearchPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(researchJsonLd) }}
            />
            <section className={styles.hero}>
                <div className="container">
                    <div className="section-header">
                        <span className={styles.badge}>Research</span>
                        <h1>Research & Publications</h1>
                        <p style={{ color: 'rgba(226, 227, 237, 0.7)', maxWidth: '600px', margin: '0 auto' }}>
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
                            <div className={styles.pubType}>Field Research • Chitwan, Nepal</div>
                            <h4>Precision Nitrogen Management in Spring Rice</h4>
                            <p className={styles.pubMeta}>Applied precision nitrogen management strategies to optimize fertilizer application in spring rice (Oryza sativa L.) across multiple management scenarios.
                                SPAD-guided timing cut applied nitrogen by 33% (from 120 to 80 kg/ha) with no yield loss. Published in Turkish Journal of Agriculture-Food Science and Technology (2024).</p>
                            <div className={styles.pubMeta}><strong>Tools:</strong> Python, R, Field Experiments</div>
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
                            <div className={styles.pubType}>Journal Article • 2025</div>
                            <h4>Impact of weed management practices on the growth and yield of spring rice in Pyuthan, Nepal</h4>
                            <p className={styles.pubMeta}>Bhusal, N. R., Pokhrel, M. R., Chaudhary, R., Bhattarai, K., &amp; Timalsina, P. (2025)</p>
                            <p className={styles.pubMeta}><em>Journal of Agricultural Sciences and Engineering</em>, 7(3), 150–164 &bull; DOI: <a href="https://doi.org/10.48309/jase.2025.502426.1066" target="_blank" rel="noopener noreferrer">https://doi.org/10.48309/jase.2025.502426.1066</a> &bull; Cited: 1</p>
                        </div>
                        <div className={styles.pubItem}>
                            <div className={styles.pubType}>Journal Article • 2025</div>
                            <h4>Effects of ethephon and pruning practices on sex expression and yield of cucumber (Cucumis sativus L.) in Rupandehi, Nepal</h4>
                            <p className={styles.pubMeta}>Gyawali, K., Dhital, P. R., Bhattarai, K., &amp; Baral, S. (2025)</p>
                            <p className={styles.pubMeta}><em>Turkish Journal of Agriculture-Food Science and Technology</em>, 13(2), 346–352 &bull; DOI: <a href="https://doi.org/10.24925/turjaf.v13i2.346-352.7179" target="_blank" rel="noopener noreferrer">https://doi.org/10.24925/turjaf.v13i2.346-352.7179</a> &bull; Cited: 1</p>
                        </div>
                        <div className={styles.pubItem}>
                            <div className={styles.pubType}>Journal Article • 2024</div>
                            <h4>Precision nitrogen management in spring rice (Oryza sativa L.) using decision support tools in Chitwan, Nepal</h4>
                            <p className={styles.pubMeta}>Bhattarai, K., Pandey, K. R., Marahatta, S., Dhakal, M., Bhusal, N. R., &amp; Thapa, R. (2024)</p>
                            <p className={styles.pubMeta}><em>Turkish Journal of Agriculture-Food Science and Technology</em>, 12(6), 955–965 &bull; DOI: <a href="https://doi.org/10.24925/turjaf.v12i6.955-965.6731" target="_blank" rel="noopener noreferrer">https://doi.org/10.24925/turjaf.v12i6.955-965.6731</a> &bull; Cited: 5</p>
                        </div>
                        <div className={styles.pubItem}>
                            <div className={styles.pubType}>Journal Article • 2022</div>
                            <h4>Effects of various fertilizer combinations on okra (Abelmoschus esculentus L.) varieties for dietary fiber content and vegetative characteristic</h4>
                            <p className={styles.pubMeta}>Regmi, B., Bhattarai, K., Bhusal, N. R., Poudel, S. R., &amp; Kunwar, S. (2022)</p>
                            <p className={styles.pubMeta}><em>Himalayan Journal of Science and Technology</em>, 6(1), 75–86 &bull; DOI: <a href="https://doi.org/10.3126/hijost.v6i1.50658" target="_blank" rel="noopener noreferrer">https://doi.org/10.3126/hijost.v6i1.50658</a> &bull; Cited: 1</p>
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
                                <span className={styles.timelineDate}>May 18-23, 2026</span>
                                <h4>Faculty — DSSAT 2026 International Training Program, University of Georgia</h4>
                                <p>Served as faculty for the 6-day intensive DSSAT International Training Program in Griffin, GA, supporting graduate participants through hands-on sessions on crop simulation modeling, G×E×M interactions, and DSSAT applications.</p>
                            </div>
                        </div>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineDot}></div>
                            <div className={styles.timelineContent}>
                                <span className={styles.timelineDate}>March 2026</span>
                                <h4>Poster Presentation — ABE Symposium, University of Florida</h4>
                                <p>Presented poster on &quot;Development of a Model for Simulating Lettuce Growth and Yield Under Hydroponic Settings.&quot;</p>
                            </div>
                        </div>
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
                                <h4>DSSAT 2025 International Training Program — University of Georgia</h4>
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
                                <h4>Poster Presentation — ABE Symposium, University of Florida</h4>
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
