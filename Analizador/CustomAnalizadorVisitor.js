import AnalizadorVisitor from './generated/AnalizadorVisitor.js'

export class CustomAnalizadorVisitor extends AnalizadorVisitor { //heredamos del visitor generado por antlr ya que se actualiza automaticamente tras
                                                                // cambios en el codigo
    constructor() {
        super();
        this.terminado = false;  // en visitTerminar explico la funcion del booleano
    }

    visitPrograma(ctx) {
        return this.visitChildren(ctx);  // el visitChildren visita automaticamente todos los nodos hijos de izquierda a derecha
    }


    visitDecision(ctx) { // 
        if (this.terminado) return;  

 
        const condicion = this.visit(ctx.condicion());  // la condición se consigue de la función visitCondicion de abajo


        if (condicion === 1) { // diferenciamos entre la sentencia del if (0) o la del else (1) mediante el valor de verdad de la condicion
            // condición verdadera, nos vamos al bloque del if
            this.visit(ctx.sentencia(0));
        } 
        else if (condicion === 0 && ctx.ELSE()) {
            // condición falsa y  existe la palabra clave else, visitamos el bloque del else
            this.visit(ctx.sentencia(1));
        }
    }

    visitCondicion(ctx) {
        // nos fijamos qué token esta en el nodo para pasarle a la función visitDecision
        if (ctx.VAL_CERO()) {
            return 0; 
        } else if (ctx.VAL_UNO()) {
            return 1; 
        }
    }


    visitSentencia(ctx) {
        if (this.terminado) return;
        return this.visitChildren(ctx);
    }

    
    visitSalida(ctx) {  // el ctx es basicamente el respectivo nodo del arbol de derivacion, en salida, por ejemplo, el ctx
        if (this.terminado) return;         //tendria lo de el token printf, el (, la CADENA, el ) y el ;

        let texto = ctx.CADENA().getText(); // Agarramos la CADENA del contexto tal como esta y la metemos en la variable (con comillas y todo)
        
        texto = texto.substring(1, texto.length - 1); // Le sacamos la comilla del inicio y la del final para simular la impresión en pantalla
        
        console.log(texto);  // Lo mostramos en pantalla
    }


    visitTerminar(ctx) {  // para el return
        this.terminado = true;  // la gracia del booleano terminado que declaramos al inicio es activarse en truecuando se visite el nodo de
        //  Terminar y de ese modo si hay mas instrucciones tras el return; que rebote con el return que metemos al inicio de cada metodo
    }
}