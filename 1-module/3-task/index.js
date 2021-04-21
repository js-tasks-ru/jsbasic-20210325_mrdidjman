function ucFirst(str) {
  if (str.length==0) {
      str3 = '';
  } else {
      symbol = str[0].toUpperCase();
      str2 = str.slice(1, Infinity);
      str3 = (symbol+str2);
  }
  return str3; 
}
