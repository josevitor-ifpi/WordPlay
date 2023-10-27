import { readFileSync } from 'fs'
import { enter_to_continue, clear_screen, getnumber, print, get_text } from '../../modulo3_while/utils/utils_io.js'
import { contem_letra, text_to_lower } from '../utils/utils_string.js'

function main(){
  const palavras = load_palavras()
  let opcao = getnumber(menu(palavras.length))

  while (opcao != 0){

    if (opcao === 1){
      mostrar_palavras_20_letras(palavras)
    }else if (opcao === 2){
      mostar_palavras_sem_letra_e(palavras)
    }else if (opcao === 3){
      mostrar_palavras_que_evitam_proibidas(palavras)
    }else if (opcao === 4){
      mostrar_palvras_com_letras_da_lista(palavras)
    }else if (opcao === 5){
      mostrar_palavras_letras_obrigatorias(palavras)  
    }else if (opcao === 6){
      mostrar_palavras_is_abcedarian(palavras)
    }

    enter_to_continue()
    clear_screen()
    opcao = getnumber(menu(palavras.length))
  }

}

function menu(qtd_palavras){
  return `
  ********** WORDPLAY ***********
  ${qtd_palavras} palavras carregadas
  -----------------------------------
  1 - Palavras com mais de 20 letras
  2 - Palavras sem letra 'e'
  3 - Palvras que não contem letras proibidas
  4 - Palavras com letras da lista
  5 - Palavras com letras obrigatorias
  6 - Palavras Abcedarian

  0 - Sair
  >>> `
}

function load_palavras(){
  const arquivo = readFileSync('palavras.txt', 'utf-8')
  const palavras = arquivo.split('\n')

  return palavras
}

function mostrar_palavras_20_letras(palavras){
  for (let palavra of palavras){ // for of: elemento  // for in: index
    if (palavra.length > 20){
      print(palavra)
    }
  }
}

function mostar_palavras_sem_letra_e(palavras){
  let contador = 0
  for (let palavra of palavras){
    if (has_no_e(palavra)){
      contador++
      print(palavra)
    }
  }
  const percentual = (contador / palavras.length) * 100
  print(`
    Temos (${percentual.toFixed(3)} % ) ${contador} palavras sem a letra 'e' !
  `)
}

function has_no_e(palavra){
  for (let letra of palavra){
    if (text_to_lower(letra) === text_to_lower('e')){
      return false
    }
  }

  return true
}


function mostrar_palavras_que_evitam_proibidas(palavras){
  const letras_proibidas = get_text('Letras proibidas: ')
  let contador = 0

  for (let palavra of palavras){
    if (avoids(palavra, letras_proibidas)){
      contador++
      print(palavra)
    }
  }
  const percentual = (contador / palavras.length) * 100
  print(`
    Existem ${contador} palavras (${percentual.toFixed(2)} %) que não usam as letras "${letras_proibidas}"
  `)
}


function avoids(palavra, letras_proibida){
  for (let letra_proibida of letras_proibida){
    if (contem_letra(palavra, letra_proibida)){
      return false
    }
  }

  return true
}


function mostrar_palavras_is_abcedarian(palavras){
  let contador = 0
  for (let palavra of palavras){
    if (is_abecedarian(palavra)){
      contador++
      print(palavra)
    }
  }

  const percentual = (contador / palavras.length) * 100
  print(`
    Temos (${percentual.toFixed(3)} % ) ${contador} palavras abecedarian!
  `)
}


function is_abecedarian(palavra){
  for (let i = 0; i < (palavra.length - 1); i++){
    let letra_atual = palavra[i]
    let proxima_letra = palavra[i + 1]
    if (letra_atual.charCodeAt() > proxima_letra.charCodeAt()){
      return false
    }
  }

  return false
}

function mostrar_palvras_com_letras_da_lista(palavras){
  const letras = get_text('Letras: ')
  let contador = 0

  for (let palavra of palavras){
    if (uses_only(palavra, letras)){
      contador++
      print(palavra)
    }
  }
}

function uses_only(palavra, letras){
  for (let letra of letras){
    if (contem_letra(palavra, letra)){
      return false
    }
  }

  return true
}

function mostrar_palavras_letras_obrigatorias(palavras){
  const letras_obrigatorias = get_text('Letras Obrigatorias: ')
  let contador = 0

  for (let palavra of palavras){
    if (uses_all(palavra, letras)){
      contador++
      print(palavra)
    }
  }
}

function uses_all(palavra, letras_obrigatorias){
  for (let letra of letras_obrigatorias){
    if (contem_letra(palavra, letra)){
      return false
    }
  }

  return true
}

main()