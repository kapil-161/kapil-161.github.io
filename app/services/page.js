import styles from './page.module.css';
import Link from 'next/link';

export const metadata = {
    title: 'Capabilities',
    description: 'Technical capabilities of Kapil Bhattarai in crop modeling (DSSAT), geospatial analytics and remote sensing, agricultural data science, and machine learning.',
};

export default function ServicesPage() {
    return (
        <>
            <section className={styles.hero}>
                <div className="container">
                    <div className="section-header">
                        <span className={styles.badge}>Capabilities</span>
                        <h1>Turning Agricultural Data Into Decisions</h1>
                        <p style={{ color: 'rgba(226, 227, 237, 0.7)', maxWidth: '600px', margin: '0 auto' }}>
                            The technical skills I bring to agricultural research and ag-tech teams — spanning crop simulation, geospatial analysis, and machine learning.
                        </p>
                    </div>
                </div>
            </section>

            <section className={`section`}>
                <div className="container">
                    <div className={styles.servicesGrid}>
                        {/* Service 1 */}
                        <div className={styles.serviceItem} id="crop-modeling">
                            <div className={styles.serviceIcon}>🌾</div>
                            <div className={styles.serviceContent}>
                                <h3>Crop Modeling & DSSAT</h3>
                                <p className={styles.serviceLead}>Calibration, validation, and scenario analysis for crop simulation models.</p>
                                <h5>What I Do</h5>
                                <ul className={styles.deliverables}>
                                    <li>DSSAT model setup, calibration, and validation for your specific crop and region</li>
                                    <li>Climate change scenario modeling and yield forecasting</li>
                                    <li>Nitrogen and water management optimization</li>
                                    <li>Sensitivity analysis and model output interpretation</li>
                                    <li>Technical reports with actionable recommendations</li>
                                </ul>
                                <h5>Tools Used</h5>
                                <div className={styles.tools}>
                                    <span>DSSAT v4.8</span>
                                    <span>Python</span>
                                    <span>R</span>
                                    <span>Fortran</span>
                                </div>
                                <Link href="/portfolio" className="btn btn-primary btn-sm">See Related Work</Link>
                            </div>
                        </div>

                        {/* Service 2 */}
                        <div className={styles.serviceItem} id="geospatial">
                            <div className={styles.serviceIcon}>🗺️</div>
                            <div className={styles.serviceContent}>
                                <h3>Geospatial & Remote Sensing</h3>
                                <p className={styles.serviceLead}>Satellite imagery analysis, GIS mapping, and spatial data pipelines for agricultural applications.</p>
                                <h5>What I Do</h5>
                                <ul className={styles.deliverables}>
                                    <li>Land use and land cover mapping using satellite imagery</li>
                                    <li>NDVI analysis and crop health monitoring</li>
                                    <li>Precision agriculture mapping and variable-rate application zones</li>
                                    <li>Site suitability analysis for crop planning</li>
                                    <li>Spatial data processing and visualization pipelines</li>
                                    <li>Custom GIS maps and interactive dashboards</li>
                                </ul>
                                <h5>Tools Used</h5>
                                <div className={styles.tools}>
                                    <span>QGIS</span>
                                    <span>ArcGIS</span>
                                    <span>GeoPandas</span>
                                    <span>Google Earth Engine</span>
                                </div>
                                <Link href="/portfolio" className="btn btn-primary btn-sm">See Related Work</Link>
                            </div>
                        </div>

                        {/* Service 3 */}
                        <div className={styles.serviceItem} id="data-science">
                            <div className={styles.serviceIcon}>📊</div>
                            <div className={styles.serviceContent}>
                                <h3>Ag Data Science & Machine Learning</h3>
                                <p className={styles.serviceLead}>Predictive modeling, data visualization dashboards, and ML pipelines for agricultural research.</p>
                                <h5>What I Do</h5>
                                <ul className={styles.deliverables}>
                                    <li>Crop yield prediction models using machine learning</li>
                                    <li>Statistical analysis of field experimental data</li>
                                    <li>Interactive data visualization dashboards (R Shiny, Python)</li>
                                    <li>Automated data processing and cleaning pipelines</li>
                                    <li>Research data analysis and publication-ready figures</li>
                                </ul>
                                <h5>Tools Used</h5>
                                <div className={styles.tools}>
                                    <span>Python</span>
                                    <span>Scikit-learn</span>
                                    <span>TensorFlow</span>
                                    <span>R / Shiny</span>
                                    <span>SQL</span>
                                </div>
                                <Link href="/portfolio" className="btn btn-primary btn-sm">See Related Work</Link>
                            </div>
                        </div>

                        {/* Service 4 */}
                        <div className={styles.serviceItem} id="training">
                            <div className={styles.serviceIcon}>🎓</div>
                            <div className={styles.serviceContent}>
                                <h3>Training & Workshops</h3>
                                <p className={styles.serviceLead}>Hands-on training sessions in DSSAT modeling, data analysis, and agricultural technology.</p>
                                <h5>What I Do</h5>
                                <ul className={styles.deliverables}>
                                    <li>DSSAT model setup and operation workshops</li>
                                    <li>Data analysis with R and Python for agricultural researchers</li>
                                    <li>Remote sensing and GIS fundamentals for agriculture</li>
                                    <li>Custom curriculum design for teams and organizations</li>
                                    <li>One-on-one mentoring and technical support</li>
                                </ul>
                                <h5>Format</h5>
                                <div className={styles.tools}>
                                    <span>In-person</span>
                                    <span>Virtual</span>
                                    <span>Group</span>
                                    <span>One-on-One</span>
                                </div>
                                <Link href="/portfolio" className="btn btn-primary btn-sm">See Related Work</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <div className={styles.ctaContent}>
                        <h2>Think These Skills Fit Your Team?</h2>
                        <p>I&apos;m open to ag-tech data science and crop-modeling roles. I&apos;d be glad to discuss how I can contribute.</p>
                        <Link href="/contact" className="btn btn-gold btn-lg">Get In Touch</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
