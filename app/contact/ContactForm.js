'use client';

import { useForm, ValidationError } from '@formspree/react';
import styles from './page.module.css';

export default function ContactForm() {
    const [state, handleSubmit] = useForm('mldqpodg');

    if (state.succeeded) {
        return (
            <div className={styles.formSuccess} role="status">
                <h2>Message Sent</h2>
                <p>Thanks for reaching out — I&apos;ll get back to you within 24-48 hours.</p>
            </div>
        );
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Full Name *</label>
                    <input type="text" id="name" name="name" required placeholder="Your full name" />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email Address *</label>
                    <input type="email" id="email" name="email" required placeholder="you@example.com" />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className={styles.formError} />
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
                <ValidationError prefix="Message" field="message" errors={state.errors} className={styles.formError} />
            </div>

            <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }} disabled={state.submitting}>
                {state.submitting ? 'Sending...' : 'Send Message'}
            </button>

            <ValidationError errors={state.errors} className={styles.formError} />
        </form>
    );
}
