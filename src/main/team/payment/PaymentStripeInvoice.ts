/*
 * Wire
 * Copyright (C) 2017 Wire Swiss GmbH
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/.
 *
 */

// https://stripe.com/docs/api#invoice_object
interface PaymentStripeInvoice {
  id: string;
  amount_due: number;
  date: number;
  currency: 'eur';
  livemode: boolean;
  paid: boolean;
  attempt_count: number;
  attempted: boolean;
  starting_balance: number;
  subtotal: number;
  tax: number;
  tax_percent: number;
  total: number;
}

export default PaymentStripeInvoice;
