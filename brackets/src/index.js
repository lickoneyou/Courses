module.exports = function check(str, bracketsConfig) {
  let input = str.split('');
  let stack = [];
  for(i = 0; i < input.length; i++){
    for(j = 0; j < bracketsConfig.length; j++){ 
      if (input[i] == bracketsConfig[j][1] && stack.length && stack[stack.length - 1] == bracketsConfig[j][0]){
          stack.pop();
        break;
      } else if (input[i] == bracketsConfig[j][0]){
        stack.push(input[i]);
        break;
      } else if (input[i] == bracketsConfig[j][1]){
        return false;
      }
    }
  }
  return !stack.length;    
}

