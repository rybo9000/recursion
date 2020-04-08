function stringSplit(s, arr) {
  var str = s.trim(),
    words = arr || [],
    i = str.indexOf(":");

  if (i !== -1) {
    words.push(str.substr(0, i));
    return stringSplit(str.slice(i + 1), words);
  } else {
    words.push(str);
    return words;
  }
}

console.log(stringSplit("test:test"));
