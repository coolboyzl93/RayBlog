var testTools= require("./algorithmTool.js");
//我写的已经是优化好的，通过比较仅仅插入到新数组一次
function insertSort(arr) {
	var okArr=[arr[0]];
	for (var i = 1; i<arr.length;i++){
		var state=0;
		for(var j = 0;j<okArr.length;j++){

			if (arr[i]<okArr[j]) {
				okArr.splice(j,0,arr[i]);
				state=0;
				break;
			}else{
				state=1;
			}
		}
		if(state==1){
			okArr.push(arr[i]);
		}
	}
	return okArr
}


//这是维基百科中未优化版的，在内层循环中多次交换（就是插入和删除）
 function insertion_sort(arr) 
  {
   var i,j;
    for(i = 1;i < arr.length; i++){
     for(j = 0;j<i;j++){
       if(arr[j]>arr[i]){
         arr.splice(j,0,arr[i]);
         arr.splice(i+1,1);
      
       }
     }
   }
   return arr;
   };
var orderedArr=testTools.generateNearlyOrderedArray(10000,0);
var arr1=testTools.sortTestHelper(10000,0,10000);
console.log(testTools.efficiency(insertion_sort,orderedArr));
console.log(testTools.efficiency(insertSort,orderedArr));
console.log(testTools.efficiency(insertSort,arr1));




//insort sort is more effective than n^logn-sort in almostly ordered array.
