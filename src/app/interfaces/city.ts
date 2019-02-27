
export class Cities {
  Items: City[];
}

export class City {
  city: string;
  id: number;
  location: Location;
  project: string;
}

class Location {
  lat: string;
  lon: string;
}

export class RemoveCity {
  id: number
}
