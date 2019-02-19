export class Booking {
  amount: number;
  bikesAmount: number;
  bikesConfirmed: Array<any>;
  bikesConfirmedAmount: number;
  centerId: string;
  chargeId: string;
  chargeStatus: string;
  city: string;
  created_at: number;
  customerId: string;
  customerSource: string;
  endDate: string;
  endTime: number;
  id: string;
  isOneHourNotificationSend: boolean;
  isTwoHourNotificationSend: boolean;
  project: string;
  refundDeposit: number;
  startDate: string;
  startTime: number;
  status: string;
  userId: string;
  refund: Refund;
}

class Refund {
  amount: number;
  balance_transaction: string;
  charge: string;
  created: number;
  currency: string;
  id: string;
  object: string;
  reason: null;
  receipt_number: null;
  source_transfer_reversal: null;
  status: string;
  transfer_reversal: null;
}
