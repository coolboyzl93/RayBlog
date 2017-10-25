//选择排序函数
//选择排序，是一个O(n^2)的算法，
//第一层遍历i是首先将每一个数默认作为最小索引，
//第二层遍历j=i+1是遍历后面的数和最小索引比较，如果比最小索引的数字还要小，那就把此时的索引号赋给最小索引。
//最后让最小索引和i中的数字交换。

// import {changePosition} from "algorithmTool.js";
// import {sortTestHelper} from "algorithmTool.js";
// import {efficiency} from "algorithmTool.js";
//ES6不好使！呵呵哒


var testTools= require("./algorithmTool.js");
function selectionSort(arr){
	var minIndex;
	var result=[];
	for(var i=0;i<arr.length;i++){
		minIndex=i;
		for(var j=i+1;j<arr.length;j++){
			if(arr[j]<arr[minIndex]){
				minIndex=j;
			}
		}
		testTools.changePosition(arr,i,minIndex);
				// console.log(arr);
	}
	return arr;
}
function test(){
	
var arr1=[4.5,6,3,0,2,7,9,1,5,115];
var arr2=['A','X','C','D','R'];
console.log(selectionSort(arr1));
console.log(selectionSort(arr2));//还可以给字母排序
var hasCreated=testTools.sortTestHelper(10000,0,10000);
console.log( testTools.efficiency(selectionSort,hasCreated));

}

