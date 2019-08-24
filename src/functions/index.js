import namor from "namor";
import _ from 'lodash'


export const LEFT_PAGE = "LEFT";
export const RIGHT_PAGE = "RIGHT";

// filter function
export const filterArray = (array, text, property) => {
  return array.filter(n => n[property].toLowerCase().includes(text));
}

// sort function
export const sortArray = (array, property) => {
  return _.sortBy(array, function (name) {
    return name[property];
  })
}

// filter and sort function
export const filterAndSort = (array, text, property, sort) => {
  let filteredArray = (text && property) ? filterArray(array, text, property) : array
  return sort && filteredArray.length ? sortArray(filteredArray, property) : filteredArray
}

// make array by inserting items
export const range = (from, to, step = 1) => {
  let i = from;
  const range = [];
  while (i <= to) {
    range.push(i);
    i += step;
  }
  return range;
};

// make new json with random values
const newPerson = () => {
  return {
    name: namor.generate({
      words: 1,
      numbers: 0
    }),
    tags: namor.generate({
      words: 1,
      numbers: 0
    }),
    comments: namor.generate({
      words: 4,
      numbers: 0
    }),
  };
}

// make data for 1000 values
export const makeData = (len = 10000) => {
  return range(0, len).map(d => {
    return {
      ...newPerson()
    };
  });
}


export const randomDate = (start, end) => {
  var date = new Date(+start + Math.random() * (end - start));
  return date;
}