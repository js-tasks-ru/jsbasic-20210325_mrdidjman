function truncate(str, maxlength) {
  if (str.length>maxlength) {
    str2 = (str.slice(0, maxlength-1)+'…');
  } else {
    str2 = str;
  }
  return str2;
}
