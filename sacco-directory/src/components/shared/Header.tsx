import Link from 'next/link';
import { Leaf } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <Link href="/" className={styles.logo}>
            <Leaf size={24} />
            <span>MSME - Microfinance Directory</span>
          </Link>
          
          <ul className={styles.menu}>
            <li><Link href="/directory" className={styles.menuLink}>Directory</Link></li>
            <li><Link href="/compare" className={styles.menuLink}>Compare Rates</Link></li>
            <li><Link href="/academy" className={styles.menuLink}>Academy</Link></li>
          </ul>

          <div className={styles.actions}>
            <button className={styles.langToggle}>EN | SW</button>
            <Link href="/register" className={styles.btnPrimary}>Institution Login</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
