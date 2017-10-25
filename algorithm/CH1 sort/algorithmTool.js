// algorithmToll.js
//交换次序函数
// export{changePosition,sortTestHelper,generateNearlyOrderedArray,efficiency}

    
 function changePosition(arr,indexA,indexB){
 	if(indexA==indexB){return};
	var deletEle = arr.splice(indexA,1,arr[indexB]);
		arr.splice(indexB,1,deletEle[0]);
	return arr;
}
//随机生成数组
 function sortTestHelper(n,rangeL,rangeR){
	var arrR=new Array(n);
	for(var i=0;i<n;i++){
		arrR[i]= Math.round(rangeL+Math.random()*(rangeR-rangeL));
	}

	return arrR
}
 function generateNearlyOrderedArray(n,rangeL){
	var arrR=new Array(n);
	for(var i=0;i<n;i++){
		arrR[i]=rangeL+i;
	};
	for(var i=0;i<10;i++){
		changePosition(arrR,arrR[Math.round(Math.random()*n)],arrR[Math.round(Math.random()*n)]);
	}
	return arrR;

}
//测试算法性能
 function efficiency(callback,arg1,arg2,arg3,arg4){
	var beforeTime= new Date();
	var resultArr= callback(arg1,arg2,arg3,arg4);
	var afterTime= new Date();
	var resultTime=afterTime.getTime()-beforeTime.getTime();
	return resultTime;
}

module.exports.changePosition=changePosition;
module.exports.efficiency=efficiency;
module.exports.generateNearlyOrderedArray=generateNearlyOrderedArray;
module.exports.sortTestHelper=sortTestHelper; 