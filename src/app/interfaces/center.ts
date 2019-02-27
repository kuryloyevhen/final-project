
export class Centers {
  Items: Center[];
}

export class Center {
  bikesCount: number;
  city: string;
  cost: number;
  id: string;
  name: string;
  project?: string;
  refundDeposit: number;
  availableTime: AvailableTime;
  location: Location;
}

class AvailableTime {
  friday: Shedule;
  monday: Shedule;
  saturday: Shedule;
  sunday: Shedule;
  thursday: Shedule;
  tuesday: Shedule;
  wednesday: Shedule;

}

class Location {
  address: string;
  lat: string;
  lon: string;
}

class Shedule {
  closeTime: string;
  openTime: string;
  isOpen: boolean;
}

export class RemoveCenter {
  id: string
}
