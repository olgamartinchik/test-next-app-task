export enum Brands {
  Chery = 'Chery',
  Haval = 'Haval',
  Geely = 'Geely',
  Exeed = 'Exeed',
  Omoda = 'Omoda',
  Changan = 'Changan',
  Jaecoo = 'Jaecoo',
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
