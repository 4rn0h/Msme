'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/shared/Header';
import InstitutionCard from '@/components/shared/InstitutionCard';
import { institutions } from '@/lib/data';
import { Search, Filter } from 'lucide-react';
import styles from './Directory.module.css';

const COUNTIES = ['Nairobi', 'Nakuru', 'Mombasa', 'Kiambu', 'Kisumu'];
const CATEGORIES = ['SACCO', 'DT-MFI', 'ND-MFI', 'DCP'];

export default function DirectoryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCounty, setSelectedCounty] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredInstitutions = useMemo(() => {
    return institutions.filter(inst => {
      const matchesSearch = inst.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            inst.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCounty = !selectedCounty || inst.county === selectedCounty;
      const matchesCategory = !selectedCategory || inst.category === selectedCategory;
      return matchesSearch && matchesCounty && matchesCategory;
    });
  }, [searchTerm, selectedCounty, selectedCategory]);

  return (
    <main>
      <Header />
      <div className={styles.page}>
        <div className="container">
          <div className={styles.layout}>
            {/* Sidebar Filters */}
            <aside className={styles.sidebar}>
              <div className={styles.filterGroup}>
                <h3 className={styles.filterTitle}>Institution Type</h3>
                <div className={styles.filterList}>
                  <label className={styles.filterLabel}>
                    <input 
                      type="radio" 
                      name="category" 
                      checked={!selectedCategory} 
                      onChange={() => setSelectedCategory(null)} 
                    />
                    <span>All Types</span>
                  </label>
                  {CATEGORIES.map(cat => (
                    <label key={cat} className={styles.filterLabel}>
                      <input 
                        type="radio" 
                        name="category" 
                        checked={selectedCategory === cat} 
                        onChange={() => setSelectedCategory(cat)} 
                      />
                      <span>{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className={styles.filterGroup}>
                <h3 className={styles.filterTitle}>By County</h3>
                <div className={styles.filterList}>
                  <label className={styles.filterLabel}>
                    <input 
                      type="radio" 
                      name="county" 
                      checked={!selectedCounty} 
                      onChange={() => setSelectedCounty(null)} 
                    />
                    <span>All Counties</span>
                  </label>
                  {COUNTIES.map(county => (
                    <label key={county} className={styles.filterLabel}>
                      <input 
                        type="radio" 
                        name="county" 
                        checked={selectedCounty === county} 
                        onChange={() => setSelectedCounty(county)} 
                      />
                      <span>{county}</span>
                    </label>
                  ))}
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className={styles.content}>
              <div className={styles.searchBar}>
                <Search size={20} className={styles.searchIcon} />
                <input 
                  type="text" 
                  placeholder="Search by name or keyword..." 
                  className={styles.searchInput}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className={styles.resultsHeader}>
                <p style={{ marginBottom: '1rem', fontWeight: 600, color: 'var(--muted)' }}>
                  Showing {filteredInstitutions.length} institutions
                </p>
              </div>

              {filteredInstitutions.length > 0 ? (
                <div className={styles.grid}>
                  {filteredInstitutions.map(inst => (
                    <InstitutionCard key={inst.id} institution={inst} />
                  ))}
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '4rem 0' }}>
                  <p style={{ fontSize: '1.2rem', color: 'var(--muted)' }}>No results found matching your criteria.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
