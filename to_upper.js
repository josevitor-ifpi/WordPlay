import {print} from '../modulo3_while/utils/utils_io.js'

function main(){
    const nome = 'rogerio'
    const resultado = to_upper(nome)
    print(resultado)

}

function to_upper(texto){
    let novo_texto= ''
    for (let item of texto){
    if(eh_letra_minuscula(char)){
        const code_ascii = item.charCodeAt(0)
        const novo_code = code_ascii - 32
        const novo_char = String.fromCharCode(novo_code)

        const novo_texto = novo_texto + novo_char
        print(novo_texto)
    }else{
        novo_texto = novo_texto + char
    }
    return texto
}
}

main()