// binarySearchTree.js
//二叉搜索树的作用是，能够查找问题。

//首先了解二分查找法->只能在有序的数列中应用。
//二分查找法是能够在一个数组中的某一个范围内查找到对应值的索引号。
//当然arrObj.findIndex(function(value,key,arr){...})已经能够将这个功能实现了。
function binarySearch(arr,start,end,target){
	if(end>=arr.length||start<0){
		return "出差错了，请重写你的查找范围";
	}
	if(start==end&&arr[start]!=target){
		return "不存在的"
	}
	// var mid=(start+end)>>1;
	var mid=Math.floor((start+end)/2);
	//第一次mid是3,arr[mid]是4，所以比5小，所以第二次是在arr[4]到arr[7]中找。
	//第二次mid是5，arr[5]是6，所以比5大，所以第三次是在arr[4]到arr[4]中找。
	//第三次mid是4，
	console.log(start+" "+mid+" "+end+" "+arr[mid]+" "+target);
	if(arr[mid] === target){
		return mid;	
	}else{
		
		if(arr[mid]>target){
			return binarySearch(arr,start,mid-1,target)
		}

		if(arr[mid]<target){
			return binarySearch(arr,mid+1,end,target)
		}
	}
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

function sortTestHelper(n,rangeL,rangeR){
	var arrR=new Array(n);
	for(var i=0;i<n;i++){
		arrR[i]= Math.round(rangeL+Math.random()*(rangeR-rangeL));
	}

	return arrR
}
var arr=[0,2,3,4,5,6,10,5656];
var longArr=sortTestHelper(1000000,0,10000);
var hasSort=quickSort3R(arr);
console.log(hasSort);
console.log(binarySearch(hasSort,0,hasSort.length-1,5));