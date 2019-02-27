
export class Authorization {
  Item: Item;
  access_token: string;
  expires_in: number
}

class Item {
  created_at: number;
  refresh_token: string;
  project: string;
  fullName: string;
  id: string;
  email: string;
}

export class UpdateToken {
  access_token: string;
  expires_in: number;
  user: User
}

class User {
  created_at: number;
  refresh_token: string;
  disabledBooking: boolean;
  project: string;
  fullName: string;
  id: string;
  email: string;
}
