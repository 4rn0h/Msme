import { Search, ShieldCheck, MapPin, TrendingUp } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>Find Your Trusted Financial Partner in Kenya</h1>
          <p className={styles.subtitle}>
            The only directory optimized for the 2026 financial ecosystem. 
            Discover verified SACCOs and MFIs with transparent rates.
          </p>
          
          <div className={styles.searchContainer}>
            <input 
              type="text" 
              placeholder="Try 'Agribusiness loans in Nakuru'..." 
              className={styles.searchInput}
            />
            <button className={styles.searchBtn}>
              <Search size={20} />
              <span>Search</span>
            </button>
          </div>

          <div className={styles.badges}>
            <div className={styles.badge}>
              <ShieldCheck size={18} />
              <span>CBK Verified</span>
            </div>
            <div className={styles.badge}>
              <MapPin size={18} />
              <span>47 Counties</span>
            </div>
            <div className={styles.badge}>
              <TrendingUp size={18} />
              <span>Real-time Rates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
