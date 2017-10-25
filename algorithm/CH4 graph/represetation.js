// represetation.js

// adjacency matrix
function AdjacencyMatrix(n,isDirected){
	this.edge=0;
	this.vertex=n;
	this.isDirected=isDirected;
	var twoMatrix=[];
	for (var i=0;i<n;i++){
		 twoMatrix[i]=new Array;
		for(var j=0;j<n;j++){
			 twoMatrix[i][j]=0;
		}
	}
	this.Matrix=twoMatrix;
}
AdjacencyMatrix.prototype.addEdge=function(i,j){
		if( i>this.vertex||i<1 ||j<1|| j>this.vertex ){
		console.log("ERROR!:the vertex don't exist");
		return
		}
		var indexRow=i-1;
		var indexColumn=j-1;
		// if(this.Matrix[indexRow][indexColumn]==1){
		// 	return
		// }
		this.Matrix[indexRow][indexColumn]=1;
		if(this.isDirected==0){
			this.Matrix[indexColumn][indexRow]=1;
		}
		this.edge++;

	}
function AdjacencyList(n,isDirected){
	this.edge=0;
	this.vertex=n;
	this.isDirected=isDirected;
	var list={};
		for (var i=0;i<n;i++){
			list[" "+(i+1)+" "]=new Array();		
		}
	this.list=list;
	


}

AdjacencyList.prototype.addEdge=function(i,j){
		if( i>this.vertex||i<1 ||j<1|| j>this.vertex ){
		console.log("ERROR!:the vertex don't exist ");
		}
		//消除自环边
		// if(i==j){
		// 	console.log("ERROR!:self-loop!");
		// 	return;
		// }
		var vertexA=i;
		var vertexB=j;
		//消除平行边
		//  for (var k=0;k<this.list[" "+i+" "].length;k++){
		// 	if(this.list[" "+i+" "][k]==j){
		// 		return
		// 	}
		// }
		// 由于平行边的检测损耗性能，所以一般不去检测平行边
		

		this.list[" "+i+" "].push(j);
		if(this.isDirected==false){
			this.list[" "+j+" "].push(i);
		}
		this.edge++;

	}
	function sparseGraph(n,m,isDirected){
		var graph2=new AdjacencyList(n,isDirected);
		function random(){
			let randomVA=Math.ceil(Math.random()*n);
			let randomVB=Math.ceil(Math.random()*n);
			//消除自环边
			if(randomVA==randomVB){
				return random();
			}
			//消除平行边
		 for (var k=0;k<graph2.list[" "+randomVA+" "].length;k++){
			if(graph2.list[" "+randomVA+" "][k]==randomVB){
				return random();
			}
		}


			return [randomVA,randomVB];
		}
		
		for(let i=0;i<m;i++){
			let amount=random();
			graph2.addEdge(amount[0],amount[1]);
		}
		return graph2;
	}

	function denseGraph(n,m,isDirected){
		var graph1=new AdjacencyMatrix(n,isDirected);
			function random(){
			let randomVA=Math.ceil(Math.random()*n);
			let randomVB=Math.ceil(Math.random()*n);
			//消除自环边
			if(randomVA==randomVB){
				return random();
			}
			//消除平行边
		
			// if(graph1.Matrix[randomVA][randomVB]==true){
			// 	return random();
			// }
		
			return [randomVA,randomVB];
		}
			for(let i=0;i<m;i++){
			let amount=random();
			graph1.addEdge(amount[0],amount[1]);
		}
		return graph1;

	}
function test(){
// var graph2=sparseGraph(5,20,true);
// console.log(sparseGraph(5,20,true));

// console.log(denseGraph(10,20,false));
// var obj={
// 	oneMethod:function(a,b){
// 		return a+b;
// 	}
// }
// console.log(`这个值的结果是${obj.oneMethod(10,11)}`);
// console.log(Object.getOwnPropertyNames(graph2.list).length);
console.log(...[1, 2, 3]);
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

// ES5的写法
var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']

// ES6的写法
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
console.log(arr2);
console.log([1, 2, 3, 4, 5].copyWithin(0, 3) )// [3,11,8]
Array.of(3) // [3]
Array.of(3).length // 1
console.log([1, 4, -5, 10].find((n) => n < 0))
console.log([1, 5, 10, 15].findIndex(function(value, index, arr) {
  return value > 9;
}) // 2
)
console.log(['a', 'b', 'c'].fill(7));
for (let index of ['a', 'b'].keys()) {
  console.log(index);
}
console.log([1, 2, 3].includes(2)     )
// 0
// 1

// for (let elem of ['a', 'b'].values()) {
//   console.log(elem);
// }
// 'a'
// 'b'

for (let [index, elem] of ['a', 'b'].entries()) {
  console.log(index, elem);
}
// 0 "a"
// 1 "b"
const s = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

for (let i of s) {
  console.log(i);
}

function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hw = helloWorldGenerator();
console.log(hw.next(),hw.next());
console.log(hw.next());
function* gen(x) {
  yield  x + 456;
}
let a=gen(5);
console.log(a.next());
let se = Symbol();

console.log(typeof se)
}
test();


module.exports.AdjacencyList=AdjacencyList;
module.exports.AdjacencyMatrix=AdjacencyMatrix;
module.exports.sparseGraph=sparseGraph;
module.exports.denseGraph=denseGraph;