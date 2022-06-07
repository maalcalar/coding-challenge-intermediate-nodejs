# INTERMEDIATE NODEJS CHALLENGES

1. Install VsCode "prettier" Plugin 
2. Install the NodeJS Project using the package.json 
3. Happy Hacking!

> Find a solution for any of this challenge using Typescript.


## 1. Closure multiplication

### Prompt

Create a 'Maths' class with a method that takes in two numbers as two parameters but each one on separated brackets and returns a number that is the multiplication of the two numbers.

### Tip
- A closure gives you access to an outer function's scope from an inner function.

### Acceptance criteria
- The method could be either static or non.

### Input

```
(Number)(Number)
```

### Output
```
Number
```

### Example
```typescript
const maths = new Maths();
maths.method(2)(5); // 10
maths.method(21)(11); // 231
```


## 2. Singleton Pattern

### Prompt
At file "Singleton.ts" there is a class named "Singleton" that is not working as it should be. Modify it to get it to work as a Singleton pattern. The class should be working fine if when it is instanciated for the first time then the property createdAt gets setted to the time that is created, so if you instanciate the class another time this property should keep the same value.

### Tip
- The Singleton pattern is a design pattern that restricts the instantiation of a class to one object. The Singleton pattern can be implemented by creating a class with a method that creates a new instance of the class if one doesn't exist.

### Acceptance criteria
- The method could be either static or non.

### Example
```typescript
const aSingleton = new Singleton();
setTimeout(() => {
  const bSingleton = new Singleton();
  console.log(aSingleton.getCreatedAt() == bSingleton.getCreatedAt()); // false - this is WRONG!
}, 1000);


const aSingleton = new Singleton();
setTimeout(() => {
  const bSingleton = new Singleton();
  console.log(aSingleton.getCreatedAt() == bSingleton.getCreatedAt()); // true - this is OK!
}, 1000);
```


## 3. Factory pattern

### Prompt
At file "Factory.ts" there is a class named "Factory" that is not working as it should be. Modify it to get it to work as a Factory pattern. The class should be working fine if when its factory method is call to create an available object (Car, Suv, Truck) the returned object has to be an instance of the correspondent class.

### Tip
- A Factory can provide a generic interface for creating objects, where we can specify the type of factory object we wish to be created.

### Acceptance criteria
- The method could be either static or non.

### Example
```typescript
const factory = new Factory();
const car = factory.createVehicle({vehicleType: 'car'});
const suv = factory.createVehicle({vehicleType: 'suv'});
const truck = factory.createVehicle({vehicleType: 'truck'});
console.log(car instanceof Car); // false - this is WRONG!
console.log(suv instanceof Suv); // false - this is WRONG!
console.log(truck instanceof Truck); // false - this is WRONG!


const factory = new Factory();
const car = factory.createVehicle({vehicleType: 'car'});
const suv = factory.createVehicle({vehicleType: 'suv'});
const truck = factory.createVehicle({vehicleType: 'truck'});
console.log(car instanceof Car); // true - this is OK!
console.log(suv instanceof Suv); // true - this is OK!
console.log(truck instanceof Truck); // true - this is OK!
```