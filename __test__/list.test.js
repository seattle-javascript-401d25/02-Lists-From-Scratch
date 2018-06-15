'use strict';

const List = require('../lib/list'); //require is a Node module allows us to bring in the /lib/list filepath, which we declare our List class variable to be

describe('testing methods of List class', () => {
  let myList; //declaring myList variable

  beforeEach(() => { //this runs our code before each test block so our data does not change (functional programming)
    myList = new List(); //we make a new instance of our class List
    myList.push(0,1,2,3);
  });

  afterEach(() => {
    myList = null;
  });

//PUSH
  test('PUSH - should show that the push method adds new items into the array', () => {
    expect(myList).toHaveLength(4);
    myList.push(5);
    expect(myList).toHaveLength(5); //testing for push method should increase array length by number of args pushed
    expect(myList[myList.length - 1]).toEqual(5); //expect myList at its length which is (5) - 1 = 4, expect my list at index 4 to equal 5
    expect(myList.push(12, 34, 5)).toEqual(8); //shows our push can add an arbitrary number of indexes to an array
    console.log(myList, 'in PUSH')
  });

//FOREACH
  test('FOREACH - should throw an error if the array is empty', () => {
    const emptyArray = new List ();

    expect(() => {
      emptyArray.forEach(empty => empty);
    }).toThrow();  
  });
  test('FOREACH - should run a callback function on each element in our List one by one', () => {
    const changedList = myList.forEach((item) => {
      return item * 2;
    });
    expect(() => {
      for(let i = 0; i < myList.length; i++) {
        (changedList[i] / 2).toEqual(myList[i]);
      }
    })
  });

//MAP
  test('MAP - should throw an error if the array is empty', () => {
    const emptyArray = new List (); //emptylist is a new instance of our List class that is empty

  expect(() => {
    emptyArray.map(empty => empty);
    }).toThrow();
  });

  test('MAP - should throw an error if a function is not passed in', () => {
    expect(() => {
      myList.map('not a function');
    }).toThrow();
  });

  test('MAP: should return a new list', () => {
    const newList = myList.map((num) => {
      return num * 2;
    });
    expect(newList.length).toEqual(myList.length);
    for (let i = 0; i < newList.length; i++) {
      expect(newList[i] / 2).toEqual(myList[i]);
    }
  });

  //FILTER
  test('FILTER - should throw an error if a function is not passed in', () => {
    expect(() => {
      myList.filter('not a function');
    }).toThrow();
  });

  test('FILTER - should return a new list (array) of indices that pass as true', () => {
    const newList = myList.filter((num) => {
      return num;
    });
    for(let i = 0; i < newList.length; i++) {
      expect(newList[i]).toBeTruthy; 
    } 
  });

//REDUCE
  test('REDUCE - should reduce the elements in the list to one single multiplied product with no accumulator passed in', () => {
    const product = myList.reduce((accumulator, current) => {
      return accumulator * current;
    }); //if no accumulator argument is passed into the reduce callback, then the accumulator defaults to the first element in the array (list)
    expect(product).toEqual(0);
  });

  test('REDUCE - should reduce the elements in the list to one single value while adding 10 accumulatively', () => {
    const sum = myList.reduce((accumulator, current) => {
      return accumulator + current;
    }, 10);
    expect(sum).toEqual(16);
  });

});
