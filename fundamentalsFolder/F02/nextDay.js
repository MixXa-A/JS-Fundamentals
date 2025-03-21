function nextDay (year, month , date){
    newMonth = month-1
    let monthsPosibleMaxDays = [31,28,31,30,31,30,31,31,30,31,30,31]
    if (year === 1||year === 2||year === 3||year === 4||year === 5||year === 6||year === 7||year === 8||year === 9){
        let year1 = `190${year}`
        year=Number(year1)

    }

    if ((year % 4 === 0 && year % 100 !== 0 || year % 400 === 0)){
        monthsPosibleMaxDays[1] = 29
    }
    if (month === 12 && monthsPosibleMaxDays[newMonth]===date){
        year++
    }

    if(monthsPosibleMaxDays[newMonth]===date){
        month++
        date = 1
    }else {
        date++
    }
    console.log(`${year}-${month}-${date}`)
    
}
nextDay(1, 9, 30)
/**
 * function nextDay(year, month, date) {
    const monthsPosibleMaxDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let newMonth = month - 1;

    // Проверка за високосна година
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        monthsPosibleMaxDays[1] = 29; // Февруари има 29 дни
    }

    // Променяме годината и месеца, ако е необходимо
    if (month === 12 && monthsPosibleMaxDays[newMonth] === date) {
        year++;
        month = 1; // Преминаваме към януари
        date = 1;  // Първи ден от новата година
    } else if (monthsPosibleMaxDays[newMonth] === date) {
        month++;  // Преминаваме към следващия месец
        date = 1;  // Първи ден от новия месец
    } else {
        date++;  // Просто увеличаваме деня
    }

    // Форматираме датата така, че месецът и денят да са винаги двуцифрени
    const formattedMonth = month < 10 ? `0${month}` : month;
    const formattedDate = date < 10 ? `0${date}` : date;

    console.log(`${year}-${formattedMonth}-${formattedDate}`);
}
 */