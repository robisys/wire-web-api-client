// https://stripe.com/docs/api#charge_object
interface PaymentStripeInvoice {
  id: string;
  amount: number;
  created: number;
  currency: 'eur';
  failureCode: string;
  failureMessage: string;
  invoice: string;
  livemode: boolean;
  paid: boolean;
  status: 'succeeded' | 'pending' | 'failed';
}

export default PaymentStripeInvoice;
