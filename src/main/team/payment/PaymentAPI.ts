import {AxiosPromise, AxiosRequestConfig, AxiosResponse} from 'axios';

import {PaymentData, PaymentDataUpdate, PaymentStripeInvoice, PaymentStripePlan} from '.';
import {HttpClient} from '../../http';

export default class TeamAPI {
  constructor(private client: HttpClient) {}

  static get URL() {
    return {
      TEAMS: '/teams',
      BILLING: 'billing',
      PLANS: 'plans',
      INVOICE: 'charges',
    };
  }

  public putPaymentData(teamId: string, paymentData: PaymentDataUpdate): AxiosPromise {
    const config: AxiosRequestConfig = {
      data: paymentData,
      method: 'put',
      url: `${TeamAPI.URL.TEAMS}/${teamId}/${TeamAPI.URL.BILLING}`,
    };

    return this.client.sendJSON(config).then((response: AxiosResponse) => response.data);
  }

  public getPaymentData(teamId: string): Promise<PaymentData> {
    const config: AxiosRequestConfig = {
      method: 'get',
      url: `${TeamAPI.URL.TEAMS}/${teamId}/${TeamAPI.URL.BILLING}`,
    };

    return this.client.sendJSON(config).then((response: AxiosResponse) => response.data);
  }

  public getAvailablePlans(teamId: string): Promise<PaymentStripePlan[]> {
    const config: AxiosRequestConfig = {
      method: 'get',
      url: `${TeamAPI.URL.TEAMS}/${teamId}/${TeamAPI.URL.BILLING}/${TeamAPI.URL.PLANS}`,
    };

    return this.client.sendJSON(config).then((response: AxiosResponse) => response.data.data);
  }

  public getInvoices(teamId: string): Promise<PaymentStripeInvoice[]> {
    const config: AxiosRequestConfig = {
      method: 'get',
      url: `${TeamAPI.URL.TEAMS}/${teamId}/${TeamAPI.URL.BILLING}/${TeamAPI.URL.INVOICE}`,
    };

    return this.client.sendJSON(config).then((response: AxiosResponse) => response.data.data);
  }
}
