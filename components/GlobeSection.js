'use client';

import dynamic from 'next/dynamic';
import styles from './GlobeSection.module.css';

const GlobeScene = dynamic(() => import('./GlobeScene'), {
  ssr: false,
  loading: () => <div className={styles.canvasFallback} />,
});

const LOCATIONS = [
  { name: 'Nepal', lat: 27.7172, lon: 85.324 },
  { name: 'Israel', lat: 31.0461, lon: 34.8516 },
  { name: 'United States', lat: 29.6516, lon: -82.3248 },
];

export default function GlobeSection() {
  return (
    <section className={`section section-dark ${styles.globeSection}`}>
      <div className="container">
        <div className={styles.globeGrid}>
          <div className={styles.globeText}>
            <span className="badge badge-teal">Global Field Experience</span>
            <h2>Data-Driven Agriculture, Across Borders</h2>
            <p>
              From smallholder rice fields in Chitwan to research work in Israel and crop-modeling
              research at the University of Florida — my work follows the data wherever it grows.
            </p>
            <ul className={styles.globeList}>
              {LOCATIONS.map((loc) => (
                <li key={loc.name}>
                  <span className={styles.globeDot}></span>
                  {loc.name}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.globeCanvas}>
            <GlobeScene locations={LOCATIONS} />
          </div>
        </div>
      </div>
    </section>
  );
}
