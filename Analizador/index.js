import fs from 'fs';
import antlr4, { CharStreams, CommonTokenStream } from 'antlr4';
import AnalizadorLexer from './generated/AnalizadorLexer.js';
import AnalizadorParser from './generated/AnalizadorParser.js'
import { CustomAnalizadorVisitor } from './CustomAnalizadorVisitor.js'; 

function main() {
    let input;
    try {
        input = fs.readFileSync('input.txt', 'utf8');
        console.log("CÓDIGO FUENTE:");
        console.log(input);
        console.log("\n\n");
    } catch (err) {
        console.error("Error: No se encontró 'input.txt'.");
        return;
    }
    const erroresLexicos = [];
    const erroresSintacticos = [];

    let inputStream = CharStreams.fromString(input);
    let lexer = new AnalizadorLexer(inputStream);

    lexer.removeErrorListeners();
    lexer.addErrorListener({
        syntaxError: (recognizer, offendingSymbol, line, column, msg) => {
            erroresLexicos.push({ linea: line, columna: column, mensaje: msg });
        }
    });

    const tokens = lexer.getAllTokens();

    if (erroresLexicos.length > 0) {
        console.log('Analisis fallido por errores lexicos: \n');
        erroresLexicos.forEach(err => {
            console.error(`-> [Línea ${err.linea}, Columna ${err.columna}]: Carácter no válido / ${err.mensaje}`);
        });
        console.log('Se aborta la ejecución.');
        return; 
    }
    
    if (tokens.length === 0) {
        console.error("Error, no se generaron tokens.");
        return;
    }


    console.log("TABLA DE LEXEMAS - TOKENS:\n");
    console.log("--------------------------------------------------");
    console.log("| Lexema           | Token                        |");
    console.log("--------------------------------------------------");

    for (let token of tokens) {
        if (token.type !== antlr4.Token.EOF) {
            const nombreToken = AnalizadorLexer.symbolicNames[token.type] || `UNKNOWN (${token.type})`;
            const lexema = token.text;
            console.log(`| ${lexema.padEnd(16)} | ${nombreToken.padEnd(28)} |`);
        }
    }
    console.log("--------------------------------------------------\n");

    inputStream = CharStreams.fromString(input);
    lexer = new AnalizadorLexer(inputStream);

    lexer.removeErrorListeners();

    const tokenStream = new CommonTokenStream(lexer);
    const parser = new AnalizadorParser(tokenStream);
    
    parser.removeErrorListeners();
        parser.addErrorListener({
            syntaxError: (recognizer, offendingSymbol, line, column, msg) => {
            erroresSintacticos.push({ linea: line, columna: column, mensaje: msg });
        },
        reportAmbiguity: () => {},
        reportAttemptingFullContext: () => {},
        reportContextSensitivity: () => {}
    });
    
    const tree = parser.programa(); 

    console.log("ANALISIS SINTAXTICO:")
if (erroresSintacticos.length > 0) {
        console.log("\nSe encontraron errores sintácticos:\n");
        erroresSintacticos.forEach(err => {
            console.error(`-> [Línea ${err.linea}, Columna ${err.columna}]: Estructura inválida - ${err.mensaje}`);
        });
    } else {
        console.log("Análisis sintáctico exitoso.\n\n");

        console.log("ÁRBOL DE DERIVACIÓN:");
        const cadena_tree = tree.toStringTree(parser.ruleNames, parser);
        console.log(cadena_tree);
        console.log("\n\n");

        console.log("SALIDA DEL PROGRAMA:");
        const visitor = new CustomAnalizadorVisitor();
        visitor.visit(tree); 
        console.log("\n\n");
    }
}

main();