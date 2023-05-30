function countWordOccurrences(sentence, word) {
  var s = sentence;
  var f = word;
  var r = s.indexOf(f);
  var c = 0;
  while(r!=-1){
      c++;
      r=s.indexOf(f, r+1);
  }
    return c;
}