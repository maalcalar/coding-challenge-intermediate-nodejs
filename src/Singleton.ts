interface iSingleton {
  getCreatedAt: () => Date
}

let instance: Singleton;

export class Singleton implements iSingleton {
  createdAt: Date;

  constructor() {
    this.createdAt = new Date();
    instance = this;

    return instance;
  }

  getCreatedAt() {
    return this.createdAt;
  }
}