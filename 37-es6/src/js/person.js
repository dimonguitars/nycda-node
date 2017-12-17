export default class Person{
  consructor(yob, name, height){
    this.name = name;
    this.yob = yob;
    this.height = height;
  }
  getName(){
    return this.name;
  }
  getYob(){
    return this.yob;
  }
  getHeight(){
    return this.height;
  }
  setName(n){
    this.name = n;
  }
  setYob(y){
    this.yob = y;
  }
  setHeight(h){
    this.height = h;
  }
  calculateAge(){
    return (new Date()).getFullYear() - this.yob;
  }
}
