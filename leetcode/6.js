var convert = function (s, numRows) {
  var matrix = [];
  for (var i = 0; i < numRows; i++) {
    matrix[i] = new Array(numRows * 2 - 1);
  };
  var len = s.length,
    col = 0,
    rows = 0,
    rowLen = matrix[0].length,
    down = true;
  for (var i = 0; i < len; i++) {
    matrix[rows][col] = s[i];
    if (down) {
      rows++;
    } else {
      rows--;
      col++;
    };
    if (rows == 0) {
      down = true;
    } else if (rows == numRows - 1) {
      down = false;
    };
  };
  return matrix.reduce((total, next) => {
    return total.concat(next)
  }, []).join("");
}
console.log(convert("txkrsdyronxiisbacxkdczwdlevfughpftgxzhpnuoxegagixsnbujffpcmkivbpoimnrddnrcuzdakatxcnjjsangmxbomryahpekexmyzrzjsuiwjrfduujgrkuddsfkjjwqjjoiaptulbquvxxprgvksqnwktiwefmpqczsusnfufarfxgygbjatywgthcamqpcsrumjjufpuwwteubifcbeajzhnzvdrxyismtdgbscxqyclzksdnwgzypmxlsqisaceuglvapurnyepkwuavaztqnsbhjlzjoefurcwgznwxtliqfklileyywbihmhtanywebvnakjzewjudthlenlflontbumdimcopxbrhmrlkahqwqdafphrfumgrakzmmpclttshmgsnpilgllncteipqqgschfoxjbqcuzrcrerbrzpcnrxtbpmsveudjlcsmuxitoknueonfdpsxpmaeyubepgociiqehbyxlltrbgxfypepdevdzwiqdyungksqlqnzdjqepnlpfrekwzoxwynbwjqetiuhakidtykkoxavpefngvketzfpivudgqkgasmvtygjxiemmjzuhlyakfsudoyjekrhffcydkjbsnphyrdfcciphajkojvsunbzsezyqiblvquvjxbobjdjjovzyrruettyzswraxexqyszyvnzgsirjeqjxkdbfwzeqyxqxcpnchpafcclxkdgqtpndsqkqsqgqoynsnduwsxbwznvlsbensttmkdceukuiijaxowugtxfukageeksydllpontiansizuinrcwmbdhofnslzkkcvvsmknukdpvcjdrchppiuyyalrlmbxqzsilfyhpbwmdgrwiaozjixhikawwctndoxotvvkwsxbaoyipmiaufjfqmdooybtmzhfwestwpuwfuhwi", 926));
