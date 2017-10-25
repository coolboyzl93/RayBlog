// graphTraversal.js
// 和树不同，由于图存在循环链接的节点，所以每一次经过一个节点都要记录下来。
// 下次再次遇到这个节点就不必再计数此节点了。

//深度优先遍历和广度优先遍历，
//深度优先遍历：依次按照顺序遍历每一个节点的第n个节点，每一次都跳转。直到不能跳转再返回根。
//广度优先遍历：依次遍历每个节点所有的的节点，不把此节点相邻的节点都遍历过是不会跳转到别的根
// 深度优先遍历可以求一个图的联通分量
var graph=require("./represetation.js");
function depthFirstTraversal(sparseGraph){
	var visited=new Array(sparseGraph.vertex);
	//联通分量
	var ccount=0;
	for (let j=0;j<sparseGraph.vertex;j++){
		visited[j]=false;
	}
	for (let i=0;i<Object.getOwnPropertyNames(sparseGraph.list).length;i++){
		if(visited[i]==false){
			dft(sparseGraph.list[""+(i+1)+""]);
			ccount++;
		}
	}
	function dfs(v){
		


	}
	return ccount;
}

function breadthFirstTraversal(graph){

}