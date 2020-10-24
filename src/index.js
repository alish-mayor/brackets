module.exports = function check(str, bracketsConfig) {
    
    let brackets = [];

    bracketsConfig.forEach(element => {
        brackets.push(element.join(""));
    });
    let i = 0;
    while(i != brackets.length){
        if (str.indexOf(brackets[i]) !== -1) {
            str = str.replace(brackets[i], '');
            i = 0;
        } else {
            i++ ;
        }
    }
    return !str;
  }