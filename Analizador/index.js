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


    let inputStream = CharStreams.fromString(input);
    let lexer = new AnalizadorLexer(inputStream);

    const tokens = lexer.getAllTokens();
    
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
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new AnalizadorParser(tokenStream);
    const tree = parser.programa(); 

    console.log("ANALISIS SINTAXTICO:")
    if (parser.syntaxErrorsCount > 0) {
        console.error("Se encontraron errores de sintaxis.");
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