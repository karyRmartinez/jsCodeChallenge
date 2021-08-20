
///Comments
//First I will find all the different combinaions in the String 
// After that I will split the substring 
// I will need to find the sinle letter and lenght

 function longestSubstring(str){
     var lenghtNum = str.length;
     var result = ['aabb', 'aaaa', 'bbab'];
    var indexCurrent = 0;
    let [a, b] = str;
  let idx = 1;
  
     while(indexCurrent < lenghtNum){
         var char = str.charAt(indexCurrent);
         var x;
         var arrString = [char];

         for(x in result) {
             arrString.push(""+result[x]+char);
         }
         result = result.concat(arrString);
         

         indexCurrent++;
     }
    while(idx <= a.length){
    if(b.startsWith(a.slice(0, idx))) {
      resultLetter = a.slice(0,idx);
      idx++;
    }
    else
      break;
  }
  return resultLetter;
       


	lenghtNum= result[0].length;
	while(result.length && result[0].length== lenghtNum){
		result.push(result.shift().charAt(0));

    
	}
      
 return result.join('  ')+' output '+ lenghtNum + resultLetter + '.'
 
 
  }


console.log(longestSubstring('aabb', 'aaaa', 'bbab'));