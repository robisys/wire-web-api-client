import {AxiosPromise, AxiosRequestConfig, AxiosResponse} from 'axios';

import {PaymentData, PaymentDataUpdate} from '.';
import {HttpClient} from '../../http';

export default class TeamAPI {
  constructor(private client: HttpClient) {}

  static get URL() {
    return {
      TEAMS: '/teams',
      BILLING: 'billing',
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
}
