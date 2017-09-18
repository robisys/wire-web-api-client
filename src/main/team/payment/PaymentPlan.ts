interface PaymentPlan {
  amount: number;
  id: 'wire_annual_plan' | 'wire_monthly_plan';
  interval: 'day' | 'week' | 'month' | 'year';
  name: string;
}

export default PaymentPlan;
