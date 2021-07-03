type CarType = 'Hatchback' | 'Sedan' | 'MPV' | 'SUV' | 'Crossover' | 'Coupe' | 'Convertible';

export interface Car {
  serialNumber: number;
  brand: string;
  carModel: string;
  type: CarType;
}
