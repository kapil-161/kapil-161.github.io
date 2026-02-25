import styles from './page.module.css';
import Link from 'next/link';

export const metadata = {
    title: 'Blog',
    description: 'Articles, tutorials, and insights on crop modeling, DSSAT, precision agriculture, geospatial analytics, and agricultural data science by Kapil Bhattarai.',
};

const blogPosts = [
    {
        slug: '#',
        title: 'My Journey from Nepal to the University of Florida: Lessons in Agricultural Research',
        excerpt: 'From working with farmers in Chitwan to advanced crop modeling at UF — the experiences that shaped my approach to agricultural data science.',
        date: 'Coming Soon',
        category: 'Personal / SEO',
        keywords: 'agricultural engineering career',
        readTime: '8 min read',
    },
    {
        slug: '#',
        title: 'Calibrating DSSAT Models: Common Mistakes and How to Avoid Them',
        excerpt: 'A practical guide to DSSAT calibration based on real-world experience, covering the most common pitfalls researchers face.',
        date: 'Coming Soon',
        category: 'Expert Tutorial',
        keywords: 'DSSAT calibration guide',
        readTime: '12 min read',
    },
    {
        slug: '#',
        title: 'Machine Learning for Crop Yield Prediction: A Practical Overview',
        excerpt: 'How machine learning is transforming crop yield prediction, and a comparison of models I\'ve tested in my research.',
        date: 'Coming Soon',
        category: 'Thought Leadership',
        keywords: 'ML crop yield prediction',
        readTime: '10 min read',
    },
    {
        slug: '#',
        title: 'What I Learned at the 23rd DSSAT Development Sprint',
        excerpt: 'Key takeaways from the 23rd DSSAT Development Sprint at the University of Kentucky — new features, community insights, and the future of crop modeling.',
        date: 'Coming Soon',
        category: 'Community / SEO',
        keywords: 'DSSAT development sprint',
        readTime: '7 min read',
    },
    {
        slug: '#',
        title: 'From Field to Forecast: How Crop Simulation Models Work',
        excerpt: 'A beginner-friendly explanation of how crop simulation models like DSSAT convert field data into yield predictions.',
        date: 'Coming Soon',
        category: 'Educational / SEO',
        keywords: 'crop simulation models',
        readTime: '10 min read',
    },
    {
        slug: '#',
        title: 'Working in Israeli Agriculture: What Nepal Can Learn',
        excerpt: 'My experience at Ragolski & Son\'s and the advanced techniques that could benefit Nepali agriculture.',
        date: 'Coming Soon',
        category: 'Personal / SEO',
        keywords: 'agriculture internship Israel',
        readTime: '8 min read',
    },
    {
        slug: '#',
        title: 'Getting Started with QGIS for Agricultural Research',
        excerpt: 'A step-by-step guide to using QGIS for site selection, spatial analysis, and crop monitoring in agricultural research.',
        date: 'Coming Soon',
        category: 'Tutorial',
        keywords: 'QGIS agriculture GIS',
        readTime: '15 min read',
    },
    {
        slug: '#',
        title: 'Precision Nitrogen Management: A Data-Driven Approach',
        excerpt: 'How decision support tools can optimize nitrogen application for rice cultivation — lessons from my research in Chitwan.',
        date: 'Coming Soon',
        category: 'Research / SEO',
        keywords: 'precision nitrogen management',
        readTime: '10 min read',
    },
];

export default function BlogPage() {
    return (
        <>
            <section className={styles.hero}>
                <div className="container">
                    <div className="section-header">
                        <span className={styles.badge}>Blog & Insights</span>
                        <h1>Thoughts on Agriculture, Data & Technology</h1>
                        <p style={{ color: 'rgba(226, 227, 237, 0.7)', maxWidth: '600px', margin: '0 auto' }}>
                            Technical articles, research summaries, tutorials, and insights from the intersection of agriculture and data science.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.blogGrid}>
                        {blogPosts.map((post, i) => (
                            <article key={i} className={styles.blogCard}>
                                <div className={styles.blogCardContent}>
                                    <div className={styles.blogMeta}>
                                        <span className={styles.blogCategory}>{post.category}</span>
                                        <span className={styles.blogDate}>{post.date}</span>
                                    </div>
                                    <h3>{post.title}</h3>
                                    <p>{post.excerpt}</p>
                                    <div className={styles.blogFooter}>
                                        <span className={styles.readTime}>⏱ {post.readTime}</span>
                                        <span className={styles.blogKeyword}>{post.keywords}</span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className={styles.blogCta}>
                        <p>Blog posts are coming soon! Subscribe to get notified when new articles are published.</p>
                        <div className={styles.subscribeForm}>
                            {/* [TODO] Connect to email service */}
                            <input type="email" placeholder="Your email address" className={styles.subscribeInput} />
                            <button className="btn btn-primary btn-sm">Subscribe</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
