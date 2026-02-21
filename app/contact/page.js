import styles from './page.module.css';

export const metadata = {
    title: 'Contact',
    description: 'Get in touch with Kapil Bhattarai for crop modeling, geospatial analytics, data science projects, or training. Book a free consultation.',
};

export default function ContactPage() {
    return (
        <>
            <section className={styles.hero}>
                <div className="container">
                    <div className="section-header">
                        <span className={styles.badge}>Get In Touch</span>
                        <h1>Let&apos;s Work Together</h1>
                        <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto' }}>
                            Whether you need crop modeling expertise, data analysis, or training — I&apos;d love to hear about your project.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.contactGrid}>
                        {/* CONTACT FORM */}
                        <div className={styles.formSection}>
                            <h2>Send a Message</h2>
                            <p>Fill out the form below and I&apos;ll get back to you within 24-48 hours.</p>
                            <form className={styles.form} action="https://formspree.io/f/your-form-id" method="POST">
                                {/* [TODO] Replace formspree URL with your actual form endpoint */}
                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="name">Full Name *</label>
                                        <input type="text" id="name" name="name" required placeholder="Your full name" />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="email">Email Address *</label>
                                        <input type="email" id="email" name="email" required placeholder="you@example.com" />
                                    </div>
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="project-type">Project Type</label>
                                    <select id="project-type" name="project-type">
                                        <option value="">Select a project type...</option>
                                        <option value="crop-modeling">Crop Modeling & DSSAT</option>
                                        <option value="geospatial">GIS / Remote Sensing</option>
                                        <option value="data-science">Data Science & ML</option>
                                        <option value="training">Training & Workshops</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="budget">Budget Range</label>
                                    <select id="budget" name="budget">
                                        <option value="">Select a range...</option>
                                        <option value="under-1k">Under $1,000</option>
                                        <option value="1k-5k">$1,000 - $5,000</option>
                                        <option value="5k-10k">$5,000 - $10,000</option>
                                        <option value="10k+">$10,000+</option>
                                        <option value="discuss">Let&apos;s discuss</option>
                                    </select>
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="message">Project Description *</label>
                                    <textarea id="message" name="message" rows="5" required placeholder="Briefly describe your project, goals, and timeline..."></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* SIDEBAR */}
                        <div className={styles.sidebar}>
                            {/* CALENDLY */}
                            <div className={styles.sideCard}>
                                <div className={styles.sideCardIcon}>📅</div>
                                <h4>Book a Free Call</h4>
                                <p>Skip the form — schedule a free 30-minute discovery call directly.</p>
                                {/* [TODO] Replace with your actual Calendly link */}
                                <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-sm" style={{ width: '100%' }}>
                                    Schedule on Calendly
                                </a>
                            </div>

                            {/* EMAIL */}
                            <div className={styles.sideCard}>
                                <div className={styles.sideCardIcon}>✉️</div>
                                <h4>Email Directly</h4>
                                <p>Prefer email? Reach me directly at:</p>
                                <a href="mailto:kapil.bhattarai.161@gmail.com" className={styles.emailLink}>
                                    kapil.bhattarai.161@gmail.com
                                </a>
                            </div>

                            {/* LINKEDIN */}
                            <div className={styles.sideCard}>
                                <div className={styles.sideCardIcon}>💬</div>
                                <h4>Connect on LinkedIn</h4>
                                <p>Send me a direct message on LinkedIn.</p>
                                <a href="https://www.linkedin.com/in/kapil-bhattarai-792417192/" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm" style={{ width: '100%' }}>
                                    Message on LinkedIn
                                </a>
                            </div>

                            {/* RESPONSE TIME */}
                            <div className={styles.responseNote}>
                                <strong>⚡ Typical Response Time:</strong> Within 24-48 hours. For urgent requests, reach out on LinkedIn.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
