class Arr {
  constructor(arr = []){
    this.arr = arr
  }
  sort(){
    return this.arr.sort();
  }
  sum(arr = this.arr){
    let s = 0
    arr.forEach((value) => {
      s += value
    })
    return s
  }
}

module.exports = Arr;
