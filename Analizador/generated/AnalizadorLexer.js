// Generated from c:/Users/LENOVO/Desktop/Analizador/Analizador.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,13,100,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,1,0,1,0,1,0,1,1,1,1,
1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,
1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,11,1,11,
1,12,4,12,79,8,12,11,12,12,12,80,1,13,1,13,1,13,3,13,86,8,13,1,14,1,14,1,
15,1,15,1,16,1,16,1,17,4,17,95,8,17,11,17,12,17,96,1,17,1,17,0,0,18,1,1,
3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,0,27,0,29,0,31,
0,33,0,35,13,1,0,4,2,0,65,90,97,122,1,0,48,57,5,0,32,33,44,44,46,46,58,59,
63,63,3,0,9,10,13,13,32,32,98,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,
0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,
19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,35,1,0,0,0,1,37,1,0,0,0,3,40,1,0,
0,0,5,45,1,0,0,0,7,52,1,0,0,0,9,59,1,0,0,0,11,61,1,0,0,0,13,63,1,0,0,0,15,
65,1,0,0,0,17,67,1,0,0,0,19,69,1,0,0,0,21,71,1,0,0,0,23,73,1,0,0,0,25,78,
1,0,0,0,27,85,1,0,0,0,29,87,1,0,0,0,31,89,1,0,0,0,33,91,1,0,0,0,35,94,1,
0,0,0,37,38,5,105,0,0,38,39,5,102,0,0,39,2,1,0,0,0,40,41,5,101,0,0,41,42,
5,108,0,0,42,43,5,115,0,0,43,44,5,101,0,0,44,4,1,0,0,0,45,46,5,112,0,0,46,
47,5,114,0,0,47,48,5,105,0,0,48,49,5,110,0,0,49,50,5,116,0,0,50,51,5,102,
0,0,51,6,1,0,0,0,52,53,5,114,0,0,53,54,5,101,0,0,54,55,5,116,0,0,55,56,5,
117,0,0,56,57,5,114,0,0,57,58,5,110,0,0,58,8,1,0,0,0,59,60,5,48,0,0,60,10,
1,0,0,0,61,62,5,49,0,0,62,12,1,0,0,0,63,64,5,40,0,0,64,14,1,0,0,0,65,66,
5,41,0,0,66,16,1,0,0,0,67,68,5,123,0,0,68,18,1,0,0,0,69,70,5,125,0,0,70,
20,1,0,0,0,71,72,5,59,0,0,72,22,1,0,0,0,73,74,5,34,0,0,74,75,3,25,12,0,75,
76,5,34,0,0,76,24,1,0,0,0,77,79,3,27,13,0,78,77,1,0,0,0,79,80,1,0,0,0,80,
78,1,0,0,0,80,81,1,0,0,0,81,26,1,0,0,0,82,86,3,29,14,0,83,86,3,31,15,0,84,
86,3,33,16,0,85,82,1,0,0,0,85,83,1,0,0,0,85,84,1,0,0,0,86,28,1,0,0,0,87,
88,7,0,0,0,88,30,1,0,0,0,89,90,7,1,0,0,90,32,1,0,0,0,91,92,7,2,0,0,92,34,
1,0,0,0,93,95,7,3,0,0,94,93,1,0,0,0,95,96,1,0,0,0,96,94,1,0,0,0,96,97,1,
0,0,0,97,98,1,0,0,0,98,99,6,17,0,0,99,36,1,0,0,0,4,0,80,85,96,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class AnalizadorLexer extends antlr4.Lexer {

    static grammarFileName = "Analizador.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'if'", "'else'", "'printf'", "'return'", 
                         "'0'", "'1'", "'('", "')'", "'{'", "'}'", "';'" ];
	static symbolicNames = [ null, "IF", "ELSE", "PRINTF", "RETURN", "VAL_CERO", 
                          "VAL_UNO", "LPAREN", "RPAREN", "LBRACKET", "RBRACKET", 
                          "SEMI", "CADENA", "WS" ];
	static ruleNames = [ "IF", "ELSE", "PRINTF", "RETURN", "VAL_CERO", "VAL_UNO", 
                      "LPAREN", "RPAREN", "LBRACKET", "RBRACKET", "SEMI", 
                      "CADENA", "CARACTERES", "CARACTER", "LETRA", "DIGITO", 
                      "SIMBOLO", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

AnalizadorLexer.EOF = antlr4.Token.EOF;
AnalizadorLexer.IF = 1;
AnalizadorLexer.ELSE = 2;
AnalizadorLexer.PRINTF = 3;
AnalizadorLexer.RETURN = 4;
AnalizadorLexer.VAL_CERO = 5;
AnalizadorLexer.VAL_UNO = 6;
AnalizadorLexer.LPAREN = 7;
AnalizadorLexer.RPAREN = 8;
AnalizadorLexer.LBRACKET = 9;
AnalizadorLexer.RBRACKET = 10;
AnalizadorLexer.SEMI = 11;
AnalizadorLexer.CADENA = 12;
AnalizadorLexer.WS = 13;



