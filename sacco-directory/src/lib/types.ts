export type InstitutionCategory = 'DT-MFI' | 'ND-MFI' | 'DCP' | 'SACCO';

export interface Product {
  id: string;
  name: string;
  type: 'LOAN' | 'SAVINGS' | 'INVESTMENT';
  minInterestRate: number;
  interestType: 'FLAT' | 'REDUCING_BALANCE';
  maxRepaymentPeriodMonths: number;
  totalCostOfCreditIndex: number;
  requirements: {
    collateral: string;
    minGuarantors: number;
    other?: string[];
  };
}

export interface Review {
  id: string;
  userId: string;
  rating: number;
  comment: string;
  isVerifiedCustomer: boolean;
  isPredatoryReport: boolean;
  createdAt: string;
}

export interface Institution {
  id: string;
  name: string;
  category: InstitutionCategory;
  licenseNumber: string;
  isCbkVerified: boolean;
  verifiedAt?: string;
  mpesaPaybill?: string;
  county: string;
  subCounty: string;
  description: string;
  logo?: string;
  rating: number;
  reviewCount: number;
  products: Product[];
  reviews: Review[];
}
