import Link from 'next/link';
import { ShieldCheck, Star, MapPin } from 'lucide-react';
import { Institution } from '@/lib/types';
import styles from './InstitutionCard.module.css';

interface Props {
  institution: Institution;
}

export default function InstitutionCard({ institution }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <span className={styles.category}>{institution.category}</span>
          <h3 className={styles.title}>{institution.name}</h3>
        </div>
        {institution.isCbkVerified && (
          <div className={styles.verification} title="CBK/SASRA Verified">
            <ShieldCheck size={16} />
            <span>Verified</span>
          </div>
        )}
      </div>

      <div className={styles.location}>
        <MapPin size={14} className="text-primary" />
        <span style={{ fontSize: '0.85rem', color: 'var(--muted)', marginLeft: '4px' }}>
          {institution.subCounty}, {institution.county}
        </span>
      </div>

      <div className={styles.stats}>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>Min. Rate</span>
          <span className={styles.statValue}>
            {institution.products[0]?.minInterestRate}% 
            <small style={{ fontSize: '0.6rem', marginLeft: '2px' }}>
              ({institution.products[0]?.interestType === 'REDUCING_BALANCE' ? 'R.B' : 'Flat'})
            </small>
          </span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>TCC Index</span>
          <span className={styles.statValue}>{institution.products[0]?.totalCostOfCreditIndex}</span>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.rating}>
          <Star size={16} fill="var(--secondary)" color="var(--secondary)" />
          <span>{institution.rating}</span>
          <span style={{ fontSize: '0.8rem', color: 'var(--muted)', fontWeight: 400 }}>
            ({institution.reviewCount})
          </span>
        </div>
        <Link href={`/institution/${institution.id}`} className={styles.viewBtn}>
          View Details →
        </Link>
      </div>
    </div>
  );
}
