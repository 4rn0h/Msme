import Header from "@/components/shared/Header";
import Hero from "@/components/shared/Hero";
import InstitutionCard from "@/components/shared/InstitutionCard";
import { institutions } from "@/lib/data";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Featured Institutions</h2>
            <a href="/directory" className="text-primary" style={{ fontWeight: 600 }}>View All Profiles →</a>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
            gap: '2rem' 
          }}>
            {institutions.map(inst => (
              <InstitutionCard key={inst.id} institution={inst} />
            ))}
          </div>
        </div>
      </section>

      <footer style={{ background: 'var(--surface)', padding: '4rem 0', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center', color: 'var(--muted)' }}>
          <p>© 2026 MSME - Microfinance and SACCOs Profiles Kenya. Empowering "Last Mile" financial inclusion.</p>
        </div>
      </footer>
    </main>
  );
}
