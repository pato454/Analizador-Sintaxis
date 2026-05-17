grammar Analizador;  // no hay mucho que explicar


programa: instrucciones EOF ;


instrucciones: instruccion+ ;

instruccion: decision ;

decision: IF LPAREN condicion RPAREN LBRACKET sentencia RBRACKET ( ELSE LBRACKET sentencia RBRACKET )? ;

sentencia: salida   
         | salida sentencia  
         | terminar 
         ;



salida: PRINTF LPAREN CADENA RPAREN SEMI ;

terminar: RETURN SEMI ;

condicion: VAL_CERO | VAL_UNO ; 

IF: 'if' ;
ELSE: 'else' ;
PRINTF: 'printf' ;
RETURN: 'return' ;

VAL_CERO: '0' ;
VAL_UNO: '1' ;

LPAREN: '(' ;
RPAREN: ')' ;
LBRACKET: '{' ;
RBRACKET: '}' ;
SEMI: ';' ;

CADENA: '"' CARACTERES '"' ;

fragment CARACTERES: CARACTER+ ;              // fragment lo usamos para que el token generado al final sea el de c
fragment CARACTER: LETRA | DIGITO | SIMBOLO ; //cadena y no se vayan generando tokens por cada caracter individual
fragment LETRA: [a-zA-Z] ;                    // osea, como fragmentos de tokens.
fragment DIGITO: [0-9] ;       
fragment SIMBOLO: [.,!?:; ] ; 

WS: [ \t\r\n]+ -> skip;  // para obviar los blancos vistos en clase