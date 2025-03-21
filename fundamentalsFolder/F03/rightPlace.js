function rightPlace (word, char, correctWord){
let buff = ``
    for (let i = 0; i< word.length; i++){
    if (word[i]===`_`){
        buff +=char
    }else{
        buff+=word[i]
    }
    }
  if (buff === correctWord){
    console.log(`Matched`)
  }else{
    console.log(`Not Matched`)
  }
}
rightPlace('Str_ng', 'i',

'String')


/**
 * НЕ ПРЕПОРЪЧИТЕЛНО РЕШЕНИЕ
 *  ОТ ЛЕКТОРИТЕ
 * (ЗАЩОТО ТРЯБВА ДА МИСЛИМ, А НЕ ДА СЛАГАМЕ ШОРТКЪТОВЕ НА ГОТОВО),
 *  *****КОЕТО ВСЕ ПАК ТРЯБВА ДА ПОГЛЕДНА КАТО ВАРИАНТ ЗА ДА ЗНАМ И НЕГО.*****
 * 
 * function rightPlace(word, char, correctWord) {
    let result = word.replace('_', char);
    console.log(result === correctWord ? 'Matched' : 'Not Matched');
}

 */