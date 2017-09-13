import {InvoiceData, PaymentPlan, PaymentBillingData} from '.';

interface PaymentData {
  card: {
    brand: string;
    country: string;
    digits: string;
    expMonth: number;
    expYear: number;
    holder: string;
    zip: string;
  };
  billingInfo: PaymentBillingData;
  invoice: InvoiceData;
  plan: PaymentPlan;
  planId: 'wire_annual_plan' | 'wire_monthly_plan';
  seats: number;
  status: string;
  trialEndsAt: number;
}

export default PaymentData;
