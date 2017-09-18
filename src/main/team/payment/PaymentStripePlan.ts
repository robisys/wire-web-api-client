// https://stripe.com/docs/api#plans
interface PaymentStripePlan {
  id: string;
  amount: number;
  created: number;
  currency: 'eur';
  interval: 'day' | 'week' | 'month' | 'year';
  intervalCount: number;
  livemode: boolean;
  name: string;
  trialPeriodDays: number;
}

export default PaymentStripePlan;
