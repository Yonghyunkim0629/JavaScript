let length = 15,
  width = 20;

function area(length, width) {
  return length * width;
}

let feetArea = area(15, 20);

console.log(`You entered dimensions of ${length} feet by ${width} feet`);
console.log(`The area is ${feetArea} square feet`);

const convertToMeters = function (area) {
  return area * 0.09290304;
};

let meterArea = convertToMeters(feetArea);
console.log(`${meterArea} square meters`);
