module.exports = scoreThrows;

function scoreThrows(radiuses){
  //Return total number of points
  var score = 0;
  var isTrue = [];

  //Empty array
  if (radiuses.length === 0){
    score = 0;
  }
  else{
    for (var i = 0; i < radiuses.length; i++) {
      if (radiuses[i] < 5){
        score += 10;
        isTrue.push(true);
      } else if (radiuses[i] <= 10){
        score += 5;
        isTrue.push(false);
      } else {
        isTrue.push(false);
      }
    }
    if (isTrue.indexOf(false) === -1) {
      score += 100;
    }
  }
  return score;
}