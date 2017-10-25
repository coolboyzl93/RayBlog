// binarySearchTree.js
//二分搜索树是一个字典数据结构。key:value;
//二分搜索树增删改查的时间复杂度是O(logn)，用二分的方法去找到这个元素就是O(logn)级别的.

//要解决这么几个问题，首先是如何给一个乱序的数据变为一个二分搜索树，=>就是把map解构然后分别插入BST
//o-插入(增加),可以形成一个二分搜索树的结构
//o-查找,可以找到某个key的值是否、存在
//o-rank，指定key节点的排名(按中序)，首先不能遍历，不然就失去了二分搜索树时间复杂度的优势，必须用二分查找法
//以及每个节点和其子节点的关系来求解相应的问题。这里就可以在每个节点添加一个childrenAmount,在插入节点的时候，
//如果插入的节点经过了某个节点，就让这个节点的childrenAmount属性加1，然后在计算rank的时候，就可以先搜索到key，
//然后key节点的父节点的孩子数减去key节点的左孩子的孩子数，就可以得到key节点的rank,这是一个O(logn)的算法。
//o-select,指定排名的节点(按中序)，和o-rank一样
//o-floor,先插入key节点，看看key的前驱是谁，如果为空返回空，否则，将前驱保存下来，然后再删除这个key。
//o-ceil,先插入key节点，看看key的前驱是谁，如果为空返回空，否则，将后继保存下来，然后再删除这个key。
//o-successor,找到key节点，，如果有左孩子，就找到他左子树上的最右边的孩子(max),没有就返回空
//o-predecessor,找到Key节点，如果有右孩子，就找到他右子树的最左边的孩子(min)，没有就返回空
//o-BFT(自上而下的层序)
//o-DFT(前序，中序，后序)
//o-delete，父子节点的连接问题

//o-balanced BT(平衡二叉树，不会退化的二叉树):red-black tree,AVLtree等。

function Node(key,left,right,value){
    // 节点的键值
    this.key = key;
    // 左节点
    this.left = left;
    // 右节点
    this.right = left;
    // 显示该节点的键值
    this.value = value;
}
Node.prototype.show=function(){
    return this.key;
}
Node.prototype.deleteMin = function() {
  BST.prototype.deleteMin.call(this);
  // some code
}

// 二叉查找树BST
// 有一个节点属性，还有一些其他的方法，以下定义一个二叉查找树BST类
function BST(){
    Node.call(this);
    // 根节点初始化为空
    this.root = null;
    
    // 插入
    this.insert = insert;
    //查找
    this.search=BSTsearch2;
    //删除

    //广度优先遍历

    //深度优先遍历
    // 中序遍历
    this.inorder = inorder;
    // 先序遍历
    this.preorder = preorder;
    // 后序遍历
    this.postorder = postorder;
}
//Node继承了BST的方法本身应该也是一个
Node.prototype.deleteMin = function() {
  BST.prototype.deleteMin.call(this);
  // some code
}
BST.prototype.search = BSTsearch2;
BST.prototype.delete =function(node,key){
 if(!node){
    return false;
}else{
        //这个数组分别记录了删除节点的父节点，他自身节点，以及他是父节点的左孩子1，还是右孩子0
        var PandC=[null,node,-1];
        //下面的递归函数保证了，找到对应key的节点，并保存了他的父节点
        function recursive(node,key){
            if(node==null)
                return -1;
            if(node.key==key)
                return
            else if(node.key<key){
                PandC[0]=node;
                PandC[1]=node.right;
                PandC[2]=0
                return recursive(node.right,key)
            }else{
                PandC[0]=node;
                PandC[1]=node.left;
                PandC[2]=1
                return recursive(node.left,key) 
            }
        }
        var target=recursive(PandC[1],key);
        if(target!==-1){
        //取得hibbard 的节点
        var transNode=PandC[1].deleteMin(PandC[1]) ;
        // 将hibbard的节点作替代删除节点，即删除节点的父节点的左孩子如果是删除节点，那么此时应该将父节点的
        //左孩子变成hibbard节点，如果删除节点是父节点的右孩子，那么应该将父节点的右孩子变为hibbard节点。
        //同时删除节点的左孩子和右孩子，应该变成hibbard节点的左孩子和右孩子
        if(PandC[2]==-1){
           // 如果根本没有父节点，就啥也不做
       }else if(PandC[2]==0){
        PandC[0].right=transNode;
    }else{
        PandC[0].left=transNode;
    }

    if(PandC[1].left){
        transNode.left=PandC[1].left
    }
    if(PandC[1].right){
        transNode.right=PandC[1].right
    }  
}else{
    return"dont exist!";
}

}
return PandC[1];
}


BST.prototype.deleteMin=function(node){
   if(!node){
    return "空树";
}else{
    var PandC=[null,node];
    while(true){
            //如果左孩子不为空，那么就把当前节点的左孩子作为父节点，把此时的父节点(已经变了)的左孩子作为孩子节点
            //最终在最左边的节点(不存在左孩子的节点)停下，会得到此时的节点和他的父节点。
            if(PandC[1].left!==null){
              PandC=[PandC[1],PandC[1].left];    
          }else{
            break
        }
    }
        //如果此时的节点有右孩子，(一定没有左孩子了)就要考虑连接的情况了，此时待删除节点的右孩子应该成为
        //父亲节点的左孩子，也就是代替删除节点的位置。
        if(PandC[1].right){     
            PandC[0].left=PandC[1].right    
        }else{
            //没有右节点也没有左节点的节点，直接让他的父节点的左节点为空就好了
            PandC[0].left=null;
        }  
    }
    return PandC[1];
}

BST.prototype.bFT=function(){
    if(!this.root){
        return "空树";
    }else{
        var queue=[],result=[];
        queue.push(this.root);
        // console.log(queue);
        while(queue[0]!=null){
            var curRoot=queue.shift();
            if(curRoot){
                result.push(curRoot.key);    
                if(curRoot.left)
                  queue.push(curRoot.left);
              if(curRoot.right)
                  queue.push(curRoot.right);
          }
      }


  }
  return result;

}

//实现insert插入方法
function insert(key,value){
    // 创建一个节点保存数据
    var node = new Node(key,null,null,value);//先创立一个节点保存KEY左右孩子都是空值
    // 下面将节点node插入到树中
    // 如果树是空的，就将节点设为根节点
    if(!this.root){
        this.root = node;
        // console.log(this);
    }else{  //树不为空
        // 判断插在父节点的左边还是右边
        // 所以先要保存一下父节点
        // var parent = this.root;
        var currentRoot = this.root;
        var parent;
        // 如果要插入的节点键值小于父节点键值，则插在父节点左边，
        // 前提是父节点的左边为空，否则要将父节点往下移一层，
        // 然后再做判断
        while(true){
            // key小于父节点的键值
            parent = currentRoot;
            if(key < parent.key){
                // 将父节点往左下移(插入左边)
                // parent = parent.left;
                currentRoot = currentRoot.left;
                // 如果节点为空，则直接插入
                if(!currentRoot){
                    // ！！！此处特别注意，如果就这样把parent赋值为node，也仅仅只是parent指向node，
                    // 而并没有加到父元素的左边！！！根本没有加到树中去。所以要先记住父元素，再把当前元素加入进去
                    parent.left = node;
                    break;
                }           
            }else{  // 将父节点往右下移(插入右边)
                currentRoot = currentRoot.right;
                if(!currentRoot){
                    parent.right = node;
                    break;
                }
            }
        }

    }
} 
function BSTsearch(key,value){
	if(!this.root){
        return false;
    }else{
    	var currentRoot=this.root;
      var parent;
    	 //通过变量赋值的方式模仿递归
    	 //while的一个技巧，不要去在乎循环的条件，就是一直循环。只要在停止的地方return或break，就可以了
      while(true){
            // key小于父节点的键值
            parent = currentRoot;
            if(currentRoot.key==key){
            	//更新value的值
            	currentRoot.value=value;
            	return true;
            }

            if(key < parent.key){
                // 将父节点往左下移(插入左边)
                // parent = parent.left;
                currentRoot = currentRoot.left;
                // 如果节点为空，则直接插入
                if(!currentRoot){
                    // ！！！此处特别注意，如果就这样把parent赋值为node，也仅仅只是parent指向node，
                    // 而并没有加到父元素的左边！！！根本没有加到树中去。所以要先记住父元素，再把当前元素加入进去
                    return false
                }           
            }else{  // 将父节点往右下移(插入右边)
                currentRoot = currentRoot.right;
                if(!currentRoot){
                 return false;
             }
         }
     }
     return false
     
 }
}
//使用递归的方式实现查找
function BSTsearch2(key){
	if(!this.root){
        return false;
    }else{
    	var currentRoot=this.root;
    	function recursive(node,key){
    		if(node==null)
    			return false
    		if(node.key==key)
    			return true
    		else if(node.key<key)
    			return recursive(node.right,key)
    		else
    			return recursive(node.left,key)	
    	}
        return recursive(currentRoot,key);
        
    }
}
//实现inorder遍历方法(左中右)
function inorder(node){
    if(node){
        inorder(node.left);
        console.log(node.show());
        inorder(node.right);
    }
}

// 先序遍历(中左右)
function preorder(node){
    if(node){
        console.log(node.show());
        preorder(node.left);
        preorder(node.right);
    }
}

// 后序遍历(左右中)
function postorder(node){
    if(node){
        postorder(node.left);
        postorder(node.right);
        console.log(node.show());
    }
}
//将一系列的键值为数字的对象对转化为一个二叉搜索树
function generateAMap(amount){
	var map= new Map();
	for(let i=1;i<amount+1;i=i+1){
		let key=Math.round(Math.random()*1000),
		value=Math.round(key+Math.random()*key);
		map.set(key,value);
	}
	return map;
}

function generateBST(map){
	var tree= new BST();
	for(let[key,value] of map){
		tree.insert(key, value)
	}
	return tree;
}
function test1(){

// 实例化一个BST树
var tree = new BST();
// 添加节点
tree.insert(30);
tree.insert(14);
tree.insert(35);
tree.insert(12);
tree.insert(17);
// 中序遍历
tree.inorder(tree.root);
// 先序遍历
tree.preorder(tree.root);
// 后序遍历
tree.postorder(tree.root);
console.log(tree);
return tree;
}
function test2(){
	var arr=generateAMap(9);
	
	var bst=generateBST(arr);
	bst.insert(129,1515);
	bst.insert(129,1515);
	// console.log(bst.preorder(bst.root));
    console.log(bst.bFT());
    console.log(bst.deleteMin(bst.root))
    // console.log(bst.delete(bst.root,129))
    console.log(bst.bFT());
	// console.log(bst.search(1515,1245));
	// console.log(bst.search(120,1545));
	// console.log(bst.search(129,1545));
	// console.log(null==undefined)
}
test2();