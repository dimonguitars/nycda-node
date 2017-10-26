function setDifference(set1, set2){
  var notInSet2 = set1.filter(function(current) {
    return set2.indexOf(current) < 0;
  });
  var notInSet1 = set2.filter(function(current) {
    return set1.indexOf(current) < 0;
  });
  var diff = notInSet2.concat(notInSet1);
  return diff;
}
module.exports = setDifference;
