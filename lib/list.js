const List = module.exports = class {
  constructor () {
    this.length = 0;
  }

  push(...args) {
    for (let i = 0; i < args.length; i++) {
      this[this.length] = args[i];
      this.length += 1;
    }
    return this.length;
  }

  forEach(callback) {
    if(typeof callback !== 'function') {
      throw new Error('Expected a function');
    }

    if(!this.length) {
      throw new Error('List is empty');
    }

    for(let i in this) {

    }
  }

  //map method
  map(callback) {
    if (typeof callback !== 'function') {
      throw new Error('Expected a function');
    }

    if (!this.length) {
      throw new Error('List is empty');
    }
    const result = new List();
    for(let i in this) {
      result.push(callback(this[i], i));
    }
    return result;
  }

// //filter method
//   filter(callback) {
//   }

//reduce method
  reduce(callback, accumulator) {
    if (typeof callback !== 'function') {
      throw new Error('Expected a function');
    }
    if (!this.length) {
      return undefined;
    }
    if (!accumulator) {
      accumulator = this[0];
    }
    for (let i = 0; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i);
    }
    return accumulator;
  }
}




