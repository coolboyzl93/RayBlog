// mergeSort.js

//这个排序法告诉了我n*logn这个时间复杂度是怎么来的。
//通常用2分法将n个数字分成n份所需要的次数就是log2^n,这个层级和logn是一致的。
//递归到底是什么？就是先传递每一次调用自己的表达式，直到递归条件结束，将实参传入，再依此回归每一个表达式中。

// 归并排序最厉害的地方在于，他发现了如果两个已经有序的数组合并为一个有序的数组，那么只需要O(n)级别的时间复杂度就
// 可以完成排序了

var testTools= require("./algorithmTool.js");
function mergeSort(arr){
	//递归
	if (arr.length<=1)
		return arr;
	var left=arr.slice(0,arr.length>>1);
	var right=arr.slice(arr.length>>1);
	return merge(mergeSort(left).concat(mergeSort(right)));

}
function merge(arr){
	var j=0;
	var k=0;
	var i;
	var left=arr.slice(0,arr.length>>1);
	var right=arr.slice(arr.length>>1);
	for (i=0;i<arr.length;i++){
		if(left[j]<=right[k]||right[k]==undefined){
			arr[i]=left[j];

			j++;
			
		}
		
		else{
			arr[i]=right[k];
			
			k++;
			
		}

	}
	return arr

}

console.log(testTools.efficiency(mergeSort,testTools.sortTestHelper(1000000,0,1000000)));
console.log(mergeSort([98,20,22,11,79,76,2,0,7,2,1,5,15]))
// console.log(mergeSort(testTools.sortTestHelper(10000,0,10000)))