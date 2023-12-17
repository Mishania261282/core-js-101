function get3TopItems(arr) {
  return arr.sort((a, b) => b - a).slice(0, 3);
}
console.log(get3TopItems([1, 2]));

function getPositivesCount(arr) {
  return arr.filter((item) => typeof item === "number" && item > 0).length;
}
console.log(getPositivesCount([null, 1, "elephant"]));

function sortDigitNamesByNumericOrder(arr) {
  arr.sort();
  return arr;
}
console.log(sortDigitNamesByNumericOrder(["nine", "one"]));

function getItemsSum(arr) {
  return arr.reduce((sum, item) => sum + item);
}
console.log(getItemsSum([-1, 1, -1, 1]));

function toStringList(arr) {
  return arr.join(",");
}
console.log(toStringList([0, false, "cat", NaN, true, ""]));

function sortCitiesArray(arr) {
  return arr.sort(function (x, y) {
    if (x.country < y.country) {
      return -1;
    }

    if (x.country > y.country) {
      return 1;
    }
    if (x.country === y.country) {
      return x.city.localeCompare(y.city);
    }
  });
}
console.log(
  sortCitiesArray([
    { country: "Russia", city: "Moscow" },
    { country: "Belarus", city: "Minsk" },
    { country: "Poland", city: "Warsaw" },
    { country: "Russia", city: "Saint Petersburg" },
    { country: "Poland", city: "Krakow" },
    { country: "Belarus", city: "Brest" },
  ])
);

function getIntervalArray(start, end) {
  const arr = [];
  let count = start - 1;
  for (let i = start - 1; i < end; i += 1) {
    arr.push((count += 1));
  }
  return arr;
}
console.log(getIntervalArray(-2, 2));

function distinct(arr) {
  for (const item of arr) {
    for (let i = 0; i <= arr.length; i += 1) {
      if (arr.indexOf(item) === arr.lastIndexOf(item)) {
        break;
      } else {
        arr.splice(arr.lastIndexOf(item), 1);
      }
    }
  }
  return arr;
}
console.log(distinct(["a", "a", "a", "a"]));

function distinct(arr) {
  let r = arr.filter(
    (item, index) =>
      arr.indexOf(item) !== arr.lastIndexOf(item) &&
      arr.splice(arr.lastIndexOf(item), 1)
  );
  arr.filter(
    (item, index) =>
      arr.indexOf(item) !== arr.lastIndexOf(item) &&
      arr.splice(arr.lastIndexOf(item), 1)
  );
  console.log(arr);
  return arr;
}
console.log(distinct([1, 2, 3, 3, 2, 1, 1, 1, 1]));
console.log(distinct([1, 1, 2, 2, 3, 3, 4, 4, 2, 8]));
console.log(distinct(["a", "a", "a", "a", "a"]));

function removeFirstOccurrences(str, value) {
  return str.split(value).join("");
}
console.log(removeFirstOccurrences("To be or not to be", "not"));
console.log(removeFirstOccurrences("I like legends", "end"));
console.log(removeFirstOccurrences("ABABAB", "BA"));

function removeFirstOccurrences(str, value) {
  let length = value.length;
  let pos = str.indexOf(value);
  let posNext = pos + length;
  let str1 = str.slice(0, pos);
  let str2 = str.slice(posNext);
  let str3 = str1 + str2;
  return str3;
}
console.log(removeFirstOccurrences("To be or not to be", "not"));
console.log(removeFirstOccurrences("I like legends", "end"));
console.log(removeFirstOccurrences("ABABAB", "BA"));

function isString(value) {
  if (typeof value === "object" && value !== null) {
    return typeof value[0] === "string" ? true : false;
  }
  return typeof value === "string" ? true : false;
}
console.log(isString(null));
console.log(typeof null);
function getAverage(value1, value2) {
  let result = 0;
  result = (value1 + value2) / 2;
  return result;
}
console.log(getAverage(-3, 3));
console.log(getAverage(10, 0));
console.log(getAverage(5, 5));

function isPrime(n) {
  return n % 2 !== 0;
}

console.log(isPrime());

function getFizzBuzz(num) {
  return num % 3 === 0 && num % 5 === 0
    ? "FizzBuzz"
    : num % 3 === 0
    ? "Fizz"
    : num % 5 === 0
    ? "Buzz"
    : num;
}
console.log(getFizzBuzz(15));

function getSumBetweenNumbers(n1, n2) {
  let sum = 0;
  for (let i = n1; i <= n2; i += 1) {
    sum += i;
  }
  return sum;
}
console.log(getSumBetweenNumbers(5, 10));

function isTriangle(a, b, c) {
  return a * b * c;
}
console.log(isTriangle(1, 2, 3));

function isInsideCircle(circle, point) {
  return point.x > circle.center.x - circle.radius &&
    point.x < circle.center.x + circle.radius &&
    point.y > circle.center.y - circle.radius &&
    point.y < circle.center.y + circle.radius
    ? true
    : false;
}
console.log(
  isInsideCircle({ center: { x: 5, y: 5 }, radius: 6 }, { x: 0, y: 0 })
);
function reverseInteger(num) {
  return String(num).split("").reverse().join("");
}
console.log(reverseInteger(12345));
function getDigitalRoot(num) {
  num = String(num)
    .split("")
    .map((item) => Number(item));
  if (num.reduce((sum, item) => sum + item) > 9) {
    num = String(num.reduce((sum, item) => sum + item))
    .split("")
    .map((item) => Number(item));
    return num.reduce((sum, item) => sum + item);
  }
  return num.reduce((sum, item) => sum + item);
}
console.log(getDigitalRoot(333));
