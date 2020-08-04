  var antlr4 = require('antlr4');
   var CPP14Lexer = require('./CPP14Lexer').CPP14Lexer;
   var CPP14Parser = require('./CPP14Parser').CPP14Parser;
   var CPP14Listener = require('./CPP14Listener').CPP14Listener;

   var input = "your text to parse here"
   var chars = new antlr4.InputStream(input);
   var lexer = new CPP14Lexer(chars);
   var tokens  = new antlr4.CommonTokenStream(lexer);
   var parser = new CPP14Parser(tokens);
   parser.buildParseTrees = true;
   var tree = parser.Primaryexpression();
