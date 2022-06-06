interface iParams {
  vehicleType: string
}

interface iFactory {
  createVehicle: (params: iParams) => Car;
}

export class Car {
  constructor(params: iParams) {}
}

export class Suv {
  constructor(params: iParams) {}
}

export class Truck {
  constructor(params: iParams) {}
}

export class Factory implements iFactory {
  vehicleClass: Car;

  constructor() {
    this.vehicleClass = Car;
  }

  createVehicle(params: iParams) {
    this.vehicleClass = Car;
    return new Car(params);
  }
}