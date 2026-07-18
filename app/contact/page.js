import styles from './page.module.css';
import ContactForm from './ContactForm';

export const metadata = {
    title: 'Contact',
    description: 'Get in touch with Kapil Bhattarai about agricultural data science and crop-modeling roles, research collaborations, or projects.',
};

export default function ContactPage() {
    return (
        <>
            <section className={styles.hero}>
                <div className="container">
                    <div className="section-header">
                        <span className={styles.badge}>Get In Touch</span>
                        <h1>Let&apos;s Work Together</h1>
                        <p style={{ color: 'rgba(226, 227, 237, 0.7)', maxWidth: '600px', margin: '0 auto' }}>
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
                            <ContactForm />
                        </div>

                        {/* SIDEBAR */}
                        <div className={styles.sidebar}>

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
