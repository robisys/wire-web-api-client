import {PaymentPlan, PaymentBillingData} from '.';

interface PaymentDataUpdate {
  planId?: PaymentPlan;
  source?: string;
  billingInfo?: PaymentBillingData;
}

export default PaymentDataUpdate;
