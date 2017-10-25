// test.js
let t=new Map();
for(let i=0;i<5;i++){
	t.set(i,`${i+100}`)
}
console.log(t);
console.log(t);
console.log(t.values());
for(let o of t.values()){
	console.log(o);
}