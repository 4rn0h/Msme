import { Institution } from './types';

export const institutions: Institution[] = [
  {
    id: 'stima-sacco-001',
    name: 'Stima DT SACCO',
    category: 'SACCO',
    licenseNumber: 'SASRA/L/001',
    isCbkVerified: true,
    verifiedAt: '2025-01-10T00:00:00Z',
    mpesaPaybill: '800100',
    county: 'Nairobi',
    subCounty: 'Starehe',
    description: 'A leading licensed deposit-taking SACCO serving employees in the energy sector and the general public.',
    rating: 4.8,
    reviewCount: 1250,
    products: [
      {
        id: 'stima-loan-01',
        name: 'M-Pawa Loan',
        type: 'LOAN',
        minInterestRate: 1.0,
        interestType: 'REDUCING_BALANCE',
        maxRepaymentPeriodMonths: 12,
        totalCostOfCreditIndex: 1.12,
        requirements: {
          collateral: 'Guarantors',
          minGuarantors: 3,
        }
      }
    ],
    reviews: []
  },
  {
    id: 'zenka-mfi-002',
    name: 'Zenka Finance',
    category: 'DCP',
    licenseNumber: 'CBK/DCP/045',
    isCbkVerified: true,
    verifiedAt: '2024-12-05T00:00:00Z',
    mpesaPaybill: '972900',
    county: 'Nairobi',
    subCounty: 'Westlands',
    description: 'Fast digital credit provider focused on small business and personal emergency loans.',
    rating: 4.2,
    reviewCount: 850,
    products: [
      {
        id: 'zenka-loan-01',
        name: 'Business Growth Loan',
        type: 'LOAN',
        minInterestRate: 5.0,
        interestType: 'FLAT',
        maxRepaymentPeriodMonths: 3,
        totalCostOfCreditIndex: 1.25,
        requirements: {
          collateral: 'None',
          minGuarantors: 0,
        }
      }
    ],
    reviews: []
  },
  {
    id: 'nakuru-farmers-003',
    name: 'Nakuru Agri-MFI',
    category: 'ND-MFI',
    licenseNumber: 'MFI/2026/089',
    isCbkVerified: true,
    verifiedAt: '2026-02-15T00:00:00Z',
    mpesaPaybill: '123456',
    county: 'Nakuru',
    subCounty: 'Nakuru East',
    description: 'Specialized MFI providing agribusiness loans and input financing for smallholder farmers in the Rift Valley.',
    rating: 4.5,
    reviewCount: 420,
    products: [
      {
        id: 'agri-loan-01',
        name: 'Kilimo Bora Loan',
        type: 'LOAN',
        minInterestRate: 1.5,
        interestType: 'REDUCING_BALANCE',
        maxRepaymentPeriodMonths: 18,
        totalCostOfCreditIndex: 1.18,
        requirements: {
          collateral: 'Crop Insurance / Livestock',
          minGuarantors: 2,
        }
      }
    ],
    reviews: []
  }
];
