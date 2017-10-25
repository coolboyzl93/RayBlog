// quickSort.js
var testTools= require("./algorithmTool.js");
function quickSort3(arr){
			if(arr.length<=1){return arr;}
			var basicEle= arr[Math.floor(arr.length/2)];	
		 	var left=[];
		 	var right=[];
		 	var middle=[];
		 	for(var i= 0;i<arr.length;i++){
		 		if (basicEle>arr[i]) {
		 			left.push(arr[i]);
		 		} else if(basicEle<arr[i]){
		 			right.push(arr[i]);
		 		}else{
		 			middle.push(arr[i]);
		 		}
		 	}
		 	return quickSort3(left).concat(middle,quickSort3(right));	
		}

function quickSort3R(arr){
			if(arr.length<=1){return arr;}
			var basicEle= arr[Math.floor(arr.length*Math.random())];	
		 	var left=[];
		 	var right=[];
		 	var middle=[];
		 	for(var i= 0;i<arr.length;i++){
		 		if (basicEle>arr[i]) {
		 			left.push(arr[i]);
		 		} else if(basicEle<arr[i]){
		 			right.push(arr[i]);
		 		}else{
		 			middle.push(arr[i]);
		 		}
		 	}
		 	return quickSort3R(left).concat(middle,quickSort3R(right));	
		}

function quickSort3RInsert(arr){
			if(arr.length<=1){return arr;}
			if(arr.length<=15){return insertSort(arr)}
			var basicEle= arr[Math.floor(arr.length*Math.random())];	
		 	var left=[];
		 	var right=[];
		 	var middle=[];
		 	for(var i= 0;i<arr.length;i++){
		 		if (basicEle>arr[i]) {
		 			left.push(arr[i]);
		 		} else if(basicEle<arr[i]){
		 			right.push(arr[i]);
		 		}else{
		 			middle.push(arr[i]);
		 		}
		 	}
		 	return quickSort3RInsert(left).concat(middle,quickSort3RInsert(right));	
		}

function quickSort2(arr){
			if(arr.length<=1){return arr;}
			var basicIndex=Math.floor(arr.length/2);	
		 	var basicEle=arr.splice(basicIndex,1)[0];
//		 	console.log(arr);
		 	var left=[];
		 	var right=[];
		 	for(var i= 0;i<arr.length;i++){
		 		if (basicEle>=arr[i]) {
		 			left.push(arr[i]);
		 		} else{
		 			right.push(arr[i]);
		 		}
		 	}
			
			return quickSort2(left).concat([basicEle],quickSort2(right));
			
			
		}

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




var testarr=testTools.sortTestHelper(200000,200,200000)
console.log(testTools.efficiency(quickSort2,testarr));
console.log(testTools.efficiency(quickSort3,testarr))
console.log(testTools.efficiency(quickSort3R,testarr))
console.log(testTools.efficiency(quickSort3RInsert,testarr))

 console.log(testTools.efficiency(quickSort3R,testTools.sortTestHelper(2000000,0,2000000)));
