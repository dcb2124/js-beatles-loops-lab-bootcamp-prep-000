function  theBeatlesPlay(musicians, instruments){
  
  var lineup = []
  
  for (var i = 1, i < musicians.length, i++){
    
    lineup.push(`${musicians[i]} plays ${instruments[i]}`)
    
  }
  
  return lineup
  
}