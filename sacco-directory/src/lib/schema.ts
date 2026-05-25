import { Institution } from './types';

export function generateInstitutionSchema(institution: Institution) {
  return {
    "@context": "https://schema.org",
    "@type": institution.category === 'SACCO' ? "FinancialService" : "LocalBusiness",
    "name": institution.name,
    "description": institution.description,
    "identifier": institution.licenseNumber,
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": institution.county
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": institution.subCounty,
      "addressRegion": institution.county,
      "addressCountry": "KE"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": institution.rating,
      "reviewCount": institution.reviewCount
    },
    "paymentAccepted": "M-Pesa",
    "providerMobility": "static"
  };
}
