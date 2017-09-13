interface PaymentPlan {
  amount: number;
  id: 'wire_annual_plan' | 'wire_monthly_plan';
  interval: string;
  name: string;
}

export default PaymentPlan;
