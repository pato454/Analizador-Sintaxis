// Generated from c:/Users/LENOVO/Desktop/Analizador/Analizador.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class AnalizadorLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		IF=1, ELSE=2, PRINTF=3, RETURN=4, VAL_CERO=5, VAL_UNO=6, LPAREN=7, RPAREN=8, 
		LBRACKET=9, RBRACKET=10, SEMI=11, CADENA=12, WS=13;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"IF", "ELSE", "PRINTF", "RETURN", "VAL_CERO", "VAL_UNO", "LPAREN", "RPAREN", 
			"LBRACKET", "RBRACKET", "SEMI", "CADENA", "CARACTERES", "CARACTER", "LETRA", 
			"DIGITO", "SIMBOLO", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'if'", "'else'", "'printf'", "'return'", "'0'", "'1'", "'('", 
			"')'", "'{'", "'}'", "';'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "IF", "ELSE", "PRINTF", "RETURN", "VAL_CERO", "VAL_UNO", "LPAREN", 
			"RPAREN", "LBRACKET", "RBRACKET", "SEMI", "CADENA", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public AnalizadorLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Analizador.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\rd\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002"+
		"\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001"+
		"\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001"+
		"\b\u0001\b\u0001\t\u0001\t\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001"+
		"\u000b\u0001\u000b\u0001\f\u0004\fO\b\f\u000b\f\f\fP\u0001\r\u0001\r\u0001"+
		"\r\u0003\rV\b\r\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001"+
		"\u0010\u0001\u0010\u0001\u0011\u0004\u0011_\b\u0011\u000b\u0011\f\u0011"+
		"`\u0001\u0011\u0001\u0011\u0000\u0000\u0012\u0001\u0001\u0003\u0002\u0005"+
		"\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n"+
		"\u0015\u000b\u0017\f\u0019\u0000\u001b\u0000\u001d\u0000\u001f\u0000!"+
		"\u0000#\r\u0001\u0000\u0004\u0002\u0000AZaz\u0001\u000009\u0005\u0000"+
		" !,,..:;??\u0003\u0000\t\n\r\r  b\u0000\u0001\u0001\u0000\u0000\u0000"+
		"\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001\u0000\u0000\u0000"+
		"\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000"+
		"\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f"+
		"\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013"+
		"\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000\u0000\u0000\u0017"+
		"\u0001\u0000\u0000\u0000\u0000#\u0001\u0000\u0000\u0000\u0001%\u0001\u0000"+
		"\u0000\u0000\u0003(\u0001\u0000\u0000\u0000\u0005-\u0001\u0000\u0000\u0000"+
		"\u00074\u0001\u0000\u0000\u0000\t;\u0001\u0000\u0000\u0000\u000b=\u0001"+
		"\u0000\u0000\u0000\r?\u0001\u0000\u0000\u0000\u000fA\u0001\u0000\u0000"+
		"\u0000\u0011C\u0001\u0000\u0000\u0000\u0013E\u0001\u0000\u0000\u0000\u0015"+
		"G\u0001\u0000\u0000\u0000\u0017I\u0001\u0000\u0000\u0000\u0019N\u0001"+
		"\u0000\u0000\u0000\u001bU\u0001\u0000\u0000\u0000\u001dW\u0001\u0000\u0000"+
		"\u0000\u001fY\u0001\u0000\u0000\u0000![\u0001\u0000\u0000\u0000#^\u0001"+
		"\u0000\u0000\u0000%&\u0005i\u0000\u0000&\'\u0005f\u0000\u0000\'\u0002"+
		"\u0001\u0000\u0000\u0000()\u0005e\u0000\u0000)*\u0005l\u0000\u0000*+\u0005"+
		"s\u0000\u0000+,\u0005e\u0000\u0000,\u0004\u0001\u0000\u0000\u0000-.\u0005"+
		"p\u0000\u0000./\u0005r\u0000\u0000/0\u0005i\u0000\u000001\u0005n\u0000"+
		"\u000012\u0005t\u0000\u000023\u0005f\u0000\u00003\u0006\u0001\u0000\u0000"+
		"\u000045\u0005r\u0000\u000056\u0005e\u0000\u000067\u0005t\u0000\u0000"+
		"78\u0005u\u0000\u000089\u0005r\u0000\u00009:\u0005n\u0000\u0000:\b\u0001"+
		"\u0000\u0000\u0000;<\u00050\u0000\u0000<\n\u0001\u0000\u0000\u0000=>\u0005"+
		"1\u0000\u0000>\f\u0001\u0000\u0000\u0000?@\u0005(\u0000\u0000@\u000e\u0001"+
		"\u0000\u0000\u0000AB\u0005)\u0000\u0000B\u0010\u0001\u0000\u0000\u0000"+
		"CD\u0005{\u0000\u0000D\u0012\u0001\u0000\u0000\u0000EF\u0005}\u0000\u0000"+
		"F\u0014\u0001\u0000\u0000\u0000GH\u0005;\u0000\u0000H\u0016\u0001\u0000"+
		"\u0000\u0000IJ\u0005\"\u0000\u0000JK\u0003\u0019\f\u0000KL\u0005\"\u0000"+
		"\u0000L\u0018\u0001\u0000\u0000\u0000MO\u0003\u001b\r\u0000NM\u0001\u0000"+
		"\u0000\u0000OP\u0001\u0000\u0000\u0000PN\u0001\u0000\u0000\u0000PQ\u0001"+
		"\u0000\u0000\u0000Q\u001a\u0001\u0000\u0000\u0000RV\u0003\u001d\u000e"+
		"\u0000SV\u0003\u001f\u000f\u0000TV\u0003!\u0010\u0000UR\u0001\u0000\u0000"+
		"\u0000US\u0001\u0000\u0000\u0000UT\u0001\u0000\u0000\u0000V\u001c\u0001"+
		"\u0000\u0000\u0000WX\u0007\u0000\u0000\u0000X\u001e\u0001\u0000\u0000"+
		"\u0000YZ\u0007\u0001\u0000\u0000Z \u0001\u0000\u0000\u0000[\\\u0007\u0002"+
		"\u0000\u0000\\\"\u0001\u0000\u0000\u0000]_\u0007\u0003\u0000\u0000^]\u0001"+
		"\u0000\u0000\u0000_`\u0001\u0000\u0000\u0000`^\u0001\u0000\u0000\u0000"+
		"`a\u0001\u0000\u0000\u0000ab\u0001\u0000\u0000\u0000bc\u0006\u0011\u0000"+
		"\u0000c$\u0001\u0000\u0000\u0000\u0004\u0000PU`\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}