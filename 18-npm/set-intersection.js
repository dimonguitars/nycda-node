function setIntersection(set1, set2){
  return set1.filter(function(cur) { return set2.indexOf(cur) >= 0 });
}
module.exports = setIntersection;
