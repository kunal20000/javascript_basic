function makeCar(name, wheelCount) {
  const Car = Object.create(vehicle);
  Car.name = name;
  Car.wheelCount = wheelCount;
  Car.type = "Car";
  return Car;
}

function makeBike(name, wheelCount) {
  const bike = Object.create(vehicle);
  bike.name = name;
  bike.wheelCount = wheelCount;
  bike.type = "Bike";
  return bike;
}