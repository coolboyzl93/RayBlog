// shellSort.js
Array.prototype.shell_sort = function() {
	var gap, i, j;
	var temp;
	for (gap = this.length >> 1; gap > 0; gap >>= 1)
		//>>:将原数组的长度的二进制数向右移动了一位，赋值给gap,相当于10进制除以2或者除以2减一。
		//gap>>=1:gap=gap>>1;gap的10进制不断的除以2，直到等于0为止
		for (i = gap; i < this.length; i++) {
			temp = this[i];
			for (j = i - gap; j >= 0 && this[j] > temp; j -= gap){
				this[j + gap] = this[j];
			}
			this[j + gap] = temp;
		}
		return this
};
function sortTestHelper(n,rangeL,rangeR){
	var arrR=new Array(n);
	for(var i=0;i<n;i++){
		arrR[i]= Math.round(rangeL+Math.random()*(rangeR-rangeL));
	}

	return arrR
}

var hasCreate=sortTestHelper(20,0,20);
console.log(hasCreate.shell_sort())

var arrc=[2,56,34,24,57,2,8,0,7]
console.log(arrc.length);
console.log(arrc.length>>1);