'use client';

import { useState, useEffect } from 'react';
import { Search, ShieldCheck, MapPin, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Hero.module.css';

const SLIDES = [
  {
    id: 1,
    title: "Find Your Trusted Financial Partner in Kenya",
    subtitle: "The only profile platform optimized for the 2026 financial ecosystem. Discover verified SACCOs and MFIs with transparent rates.",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Grow Your MSME with Verified Loans",
    subtitle: "Access transparent interest rates from licensed Microfinance Institutions across 47 counties.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Secure Your Future with SACCO Savings",
    subtitle: "Join thousands of Kenyans building wealth through trusted deposit-taking SACCOs.",
    image: "https://images.unsplash.com/photo-1577416416141-7c8339f40213?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section className={styles.hero}>
      {SLIDES.map((slide, index) => (
        <div 
          key={slide.id}
          className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${slide.image})` }}
        >
          <div className="container">
            <div className={styles.content}>
              <h1 className={styles.title}>{slide.title}</h1>
              <p className={styles.subtitle}>{slide.subtitle}</p>
              
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
        </div>
      ))}

      <button className={styles.navBtn} style={{ left: '1rem' }} onClick={prevSlide}>
        <ChevronLeft size={24} />
      </button>
      <button className={styles.navBtn} style={{ right: '1rem' }} onClick={nextSlide}>
        <ChevronRight size={24} />
      </button>

      <div className={styles.dots}>
        {SLIDES.map((_, index) => (
          <button 
            key={index} 
            className={`${styles.dot} ${index === currentSlide ? styles.dotActive : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}
