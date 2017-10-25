const fs=require("fs");
const mdUrlArray=['Turing','Linus','Von.Neumann','HTML&CSS-norm',
				'jQuery-norm','Vue-norm','Bootstrap-norm','jQuery-better',
				'Vue-better','UI-better','Scss-better','functional-better','decoupling-degree',
				'H&P-programing','playIn-OPC','how-to-read-code','D&B-learn','op-npm',
				'op-git','op-PS','op-cmd','op-editor','op-WeChat','op-chrome-console','op-webpack',
				'mean-biuldNet','mean-gettingStarted','mean-enhanceMem','mean-enhanceLogic',
				'mean-artisanSprit','op-mongoDB'];
for(let v of mdUrlArray){
	fs.writeFile(`serverdata/${v}.md`,v, (err) => {
 	  if (err) throw err;
      console.log(v);
	});
}


