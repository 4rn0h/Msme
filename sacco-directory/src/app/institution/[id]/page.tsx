import { notFound } from 'next/navigation';
import Header from '@/components/shared/Header';
import { institutions } from '@/lib/data';
import { generateInstitutionSchema } from '@/lib/schema';
import { ShieldCheck, MapPin, CreditCard, AlertTriangle, Info, Star } from 'lucide-react';
import styles from '../InstitutionDetail.module.css';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return institutions.map((institution) => ({
    id: institution.id,
  }));
}

export default async function InstitutionPage({ params }: Props) {
  const { id } = await params;
  const institution = institutions.find(i => i.id === id);

  if (!institution) {
    notFound();
  }

  const jsonLd = generateInstitutionSchema(institution);

  return (
    <main>
      <Header />
      
      {/* Inject JSON-LD for GEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className={styles.container}>
        <div className="container">
          {/* Header Section */}
          <div className={styles.header}>
            <div className={styles.titleSection}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                <span style={{ background: 'var(--primary)', color: 'white', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 600 }}>
                  {institution.category}
                </span>
                {institution.isCbkVerified && (
                  <div className={styles.badge}>
                    <ShieldCheck size={20} />
                    <span>CBK Verified</span>
                  </div>
                )}
              </div>
              <h1>{institution.name}</h1>
              <div className={styles.meta}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <MapPin size={16} />
                  <span>{institution.subCounty}, {institution.county}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <Info size={16} />
                  <span>License: {institution.licenseNumber}</span>
                </div>
              </div>
            </div>
            
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)' }}>
                {institution.rating}
              </div>
              <div style={{ display: 'flex', gap: '2px', justifyContent: 'flex-end', marginBottom: '4px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill={i < Math.floor(institution.rating) ? 'var(--secondary)' : 'none'} color="var(--secondary)" />
                ))}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>
                Based on {institution.reviewCount} reviews
              </div>
            </div>
          </div>

          <div className={styles.grid}>
            {/* Left Column: Details */}
            <div className={styles.details}>
              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>About</h2>
                <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>{institution.description}</p>
              </section>

              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Financial Products</h2>
                {institution.products.map(product => (
                  <div key={product.id} className={styles.productCard}>
                    <div className={styles.productHeader}>
                      <h3 style={{ fontWeight: 700 }}>{product.name}</h3>
                      <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--primary)' }}>{product.type}</span>
                    </div>
                    <div className={styles.rateGrid}>
                      <div className={styles.rateItem}>
                        <span className={styles.rateLabel}>Interest Rate</span>
                        <span className={styles.rateValue}>{product.minInterestRate}%</span>
                        <small style={{ fontSize: '0.7rem' }}>{product.interestType}</small>
                      </div>
                      <div className={styles.rateItem}>
                        <span className={styles.rateLabel}>Max Period</span>
                        <span className={styles.rateValue}>{product.maxRepaymentPeriodMonths} Months</span>
                      </div>
                      <div className={styles.rateItem}>
                        <span className={styles.rateLabel}>TCC Index</span>
                        <span className={styles.rateValue}>{product.totalCostOfCreditIndex}</span>
                      </div>
                    </div>
                    <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px dashed var(--border)' }}>
                      <p style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem' }}>Requirements:</p>
                      <ul style={{ fontSize: '0.85rem', color: 'var(--muted)', paddingLeft: '1.2rem', listStyle: 'disc' }}>
                        <li>Collateral: {product.requirements.collateral}</li>
                        <li>Min. Guarantors: {product.requirements.minGuarantors}</li>
                      </ul>
                    </div>
                  </div>
                ))}
              </section>
            </div>

            {/* Right Column: Actions */}
            <aside className={styles.sidebar}>
              <div className={styles.section} style={{ padding: '1.5rem' }}>
                <h2 className={styles.sectionTitle} style={{ fontSize: '1.1rem' }}>Take Action</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <button className={`${styles.actionBtn} ${styles.btnPrimary}`}>
                    Apply for Membership
                  </button>
                  <button className={`${styles.actionBtn}`} style={{ border: '1px solid var(--border)' }}>
                    Download Product Guide
                  </button>
                  <button className={`${styles.actionBtn} ${styles.btnOutline}`}>
                    <AlertTriangle size={18} />
                    Report Predatory Behavior
                  </button>
                </div>
              </div>

              {institution.mpesaPaybill && (
                <div className={styles.paybill}>
                  <CreditCard size={32} style={{ marginBottom: '1rem' }} />
                  <p style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem' }}>M-Pesa Paybill</p>
                  <div style={{ fontSize: '1.75rem', fontWeight: 800, letterSpacing: '2px' }}>
                    {institution.mpesaPaybill}
                  </div>
                  <p style={{ fontSize: '0.75rem', marginTop: '0.5rem', opacity: 0.9 }}>
                    Use this for membership fees or deposits
                  </p>
                </div>
              )}
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}
