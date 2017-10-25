// heapSort.js

//堆是一种树形结构，使用数组来表示，需要一些特别的技巧。
//堆是一个完全二叉树，因此在数组中，子节点和父节点的关系是子节点的的下标>>2就是父节点的下表
var testTools= require("./algorithmTool.js");

function heapSort(arr){
	var heap=[];
	var result=[];
	for (var i=0;i<arr.length;i++){
		MaxshiftUp(heap,arr[i]);
	}
	for(var j=arr.length-1;j>=0;j--){
		result.push(extractMax(heap));
	}
	return result.reverse();

	
}
function heapSort2(arr){
	var result=[];
	heapify(arr);
	for(var j=arr.length-1;j>=0;j--){
		result.push(extractMax(arr));
	}
	return result.reverse();

}

function heapSort3(arr){
	heapify(arr);
	// console.log(arr);
	var i=arr.length-1;
	while(i>0){
		testTools.changePosition(arr,0,i);

		MaxshiftDown(arr,0,i);
		i=i-1;


	}
	return arr;

}



function MaxshiftUp(arr,ele){
	arr.push(ele);
	 i=arr.length-1;
	// console.log(i);
	while(arr[i]>arr[(i-1)>>1]&&arr[(i-1)>>1]>0){
		testTools.changePosition(arr,i,(i-1)>>1);
		i=(i-1)>>1;
	}
	return arr;
}

function extractMax(arr){
	var firstEle=arr[0];
	testTools.changePosition(arr,0,arr.length-1)
	arr.pop();
	MaxshiftDown(arr,0,arr.length);
	return firstEle;
}

function MaxshiftDown(arr,start,end){
	var i=start;
	while(i*2+1<end){

		var j=(i<<1)+1;
		if(j+1<end&&arr[j+1]>arr[j]){
			j=j+1;
		}
		if(arr[i]>=arr[j]){
			break;
		}
		testTools.changePosition(arr,i,j);
		i=j;
	}	
}
 

function heapify(arr){
	//第一个非叶子节点数等于(arr.length-1-1)>>1
	for(var j=(arr.length-1-1)>>1;j>=0;j--){
		MaxshiftDown(arr,j,arr.length);
	}
	return arr;

}

var arr=[62,41,30,28,16,22,13,19,17,15,59,340,4340,3843,43843,4384,4384,2392,4302];
var arr2=[15,13]
console.log(heapify(arr))

var guding=testTools.sortTestHelper(300000,0,200000);


console.log(heapSort3(arr));
console.log(heapSort3([15,13,17]));
console.log(testTools.efficiency(heapSort,guding));
console.log(testTools.efficiency(heapSort2,guding));
console.log(testTools.efficiency(heapSort3,guding));

 
// why910727.