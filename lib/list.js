'use strict';
const List = module.exports = class {
  constructor () {
    this.length = 0;
  }
//PUSH
  push(...args) {
    for (let i = 0; i < args.length; i++) {
      this[this.length] = args[i];
      this.length += 1;
    }
    return this.length;
  }
//FOREACH
  forEach(callback) {
    if(typeof callback !== 'function') {
      throw new Error('Expected a function');
    }

    if(!this.length) {
      throw new Error('List is empty');
    }

    let result;

    for(let i in this) { //loop through List elements
      result = callback(this[i], i); //we apply the callback to each one of the elements in our List  
    }

    return result;
  }

//MAP
  map(callback) {
    if (typeof callback !== 'function') { 
      throw new Error('Expected a function');
    }

    if (!this.length) { 
      throw new Error('List is empty.');
    }
    const result = new List();
    for (let i = 0; i < this.length; i++) {
      result.push(callback(this[i], i));
    }
    return result;
  }

//FILTER method - we're looking for specific somethings in our array, filter runs a callback function on every item, the items that return true will get pushed into the new, filtered array
  filter(callback) {
    if (typeof callback !== 'function') {
      throw new Error ('Expected function');
    }

    const result = new List(); 
    
    for(let i = 0; i < this.length; i++) { //loop through new List
      if (callback(this[i], i)) {
        result.push(this[i]);
      }
    return result;
    }
//filter will return values based on being true 
  }

//REDUCE
  reduce(callback, accumulator) {
    if (typeof callback !== 'function') {
      throw new Error('Expected a function');
    }
    if (!this.length) {
      throw new Error ('List is empty');
    }
    if (!accumulator) {
      accumulator = this[0]; //the first item in this List will be set to the accumulator
    }
    for (let i = 0; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i);
    }
    return accumulator;
  }
}






