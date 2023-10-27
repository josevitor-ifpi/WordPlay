export function eh_letra_minuscula(char){
    const code = char.charCodeAt(0)
    if (code >= 97 && code <= 122){
      return true
    }else{
      return false
    }
  }
  
  export function eh_letra_maiuscula(char){
    const code = char.charCodeAt(0)
    return code >= 65 && code <= 90
  }
  
  export function text_to_upper(texto){
    let novo_texto = ''
    for (let char of texto){
      if (eh_letra_minuscula(char)){
        const code_ascii = char.charCodeAt()
        const novo_code = code_ascii - 32
        const novo_char = String.fromCharCode(novo_code)
  
        novo_texto = novo_texto + novo_char
      }else{
        novo_texto = novo_texto + char
      }
    }
  
    return novo_texto
  }
  
  export function text_to_lower(texto){
    let novo_texto = ''
    for (let char of texto){
      if (eh_letra_maiuscula(char)){
        const code_ascii = char.charCodeAt()
        const novo_code = code_ascii + 32
        const novo_char = String.fromCharCode(novo_code)
  
        novo_texto = novo_texto + novo_char
      }else{
        novo_texto = novo_texto + char
      }
    }
  
    return novo_texto
  }
  
  export function contem_letra(palavra, letra_procurada){
    for (let letra of palavra){
      if (text_to_upper(letra) === text_to_upper(letra_procurada)){
        return true
      }
    }
  
    return false
  }