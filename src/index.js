module.exports = function check(str, brConfig) {
let arrBr = []
let fBr = undefined;

  for (let i = 0; i < str.length; i++) {
    for (let j=0; j<brConfig.length; j++)  {
      //console.log(brConfig, brConfig[j], str, str[i]);
      fBr = brConfig[j].indexOf(str[i]);

      if (fBr<0) {continue}
      if (fBr === 0) {
        ((str[i]===brConfig[j][1]) &&(str[i]===arrBr[arrBr.length-1])) ? arrBr.pop() : arrBr.push(str[i]);
      }
        else 
            if ((fBr === 1) && (arrBr.length>0))  {
              if (arrBr[arrBr.length-1] === brConfig[j][0]) {
                arrBr.pop();
              } else return false;
            }  else return false;
    }
  }
 return (arrBr.length === 0) ? true : false; // your solution
}