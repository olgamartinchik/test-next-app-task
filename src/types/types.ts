export enum Brands {
  Chery = 'Chery',
  Haval = 'Haval',
  Geely = 'Geely',
  Exeed = 'Exeed',
  Omoda = 'Omoda',
  Changan = 'Changan',
  Jaecoo = 'Jaecoo',
}

export enum Equipments {
  Action = 'Action',
  Techno = 'Techno',
  Travel = 'Travel',
  Luxury = 'Luxury',
  Cosmo = 'Cosmo',
  Trek = 'Trek',
  Comfort = 'Comfort',
  Family = 'Family',
  Prestige = 'Prestige',
  Elite = 'Elite',
  Dreamline = 'Dreamline',
  Spreedline = 'Spreedline',
  Ultimate = 'Ultimate',
}
export enum Engines {
  Minimum = '1.5',
  Middle = '1.6',
  Maximum = '2.0',
}
type CarPhoto = {
  _id: string;
  season: string;
  position: number;
  complect: number;
  accepted: boolean;
  url: string;
  urlThumb: string;
};

export type CarResponse = {
  car_id: string;
  _id: string;
  brandName: string;
  modelName: string;
  vin: string;
  Year: number;
  Color: string;
  interiorColor: string;
  modelYear: number;
  bodyType: string;
  Complectation: string;
  DriveType: string;
  EngineSize: number;
  Power: number;
  FuelType: string;
  Transmission: string;
  transmissionRu: string;
  steeringWheelSide: string;
  storageAdress: string;
  price: number;
  photos: {
    imgs: CarPhoto[];
    wrap: boolean;
  };
  modificationName: string;
};
