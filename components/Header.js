'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import styles from './Header.module.css';

const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/portfolio', label: 'Work', matchPaths: ['/portfolio', '/services'] },
    { href: '/research', label: 'Research' },
    { href: '/contact', label: 'Contact' },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    const handleLogoClick = useCallback((e) => {
        if (pathname === '/') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [pathname]);

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo} onClick={handleLogoClick}>
                    <span className={styles.logoIcon}>KB</span>
                    <span className={styles.logoText}>Kapil Bhattarai</span>
                </Link>

                <button
                    className={`${styles.menuToggle} ${menuOpen ? styles.active : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
                    {navLinks.map((link) => {
                        const isActive = link.matchPaths
                            ? link.matchPaths.includes(pathname)
                            : pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </header>
    );
}
