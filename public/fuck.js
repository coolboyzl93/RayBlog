// fuck.js
function generateRandomArray(){
  let result=new Set();
  let recursive=function(){
  		if(result.size==31){
  			return [...result];
  		}else{
  		  result.add(2+Math.floor(Math.random()*31));		
  		  return recursive();
  		}
  }
  return recursive();

}     

console.log(generateRandomArray())