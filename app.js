// 1 Переменные
// var - variable
// var name = "Vladilen" // Мы можем менять значение var ниже в коде.
// const lastName = "Minin" Это фиксированное значение, которое мы не можем изменить.
// let age = 26 // Мы можем менять значение let ниже в коде.

// name = "Vlad"

// lastName = "Min"

// const firstName = "Dmitriy"


// console.log(name)
// console.log(age)



// 2 Мутирование.

// console.log('Имя человека: ' + firstName + ', а возраст человека: ' + age)

// const lastName = prompt('Введите фамилию')
// alert(firstName + ' ' + lastName)



// 3 Операторы

// const currentYear = 2020
// const birthYear = prompt('В каком году вы родились?')

// const age = currentYear - birthYear

// alert('Вам сейчас: ' + age)


// const b = 2

// console.log(a + b * a)

// const a = 2
// let c = 32

// c = c + a
// c = c - a
// c = c * a
// c = c / a

// c += a
// c -+ a
// c *= a
// c /= a

// console.log(c)



// 4 Приоритет операторов

// const fullAge = 17
// const birthYear = 2003
// const currentYear = 2020

// const isFullAge = currentYear - birthYear >= fullAge | Вычетание будет приоритетней чем сравнение, таким образом сначало вычетание, а потом сравнение
// console.log(isFullAge)

// 5 Условные операторы

// const status = 'faildsdsa'

// if (status === 'ready') {
//     alert('Курс готов и его можно проходить!')
// }

// else if (status === 'fail') {
//     alert('Курс не состоялся :(')
// }

// else {
//     alert ('Статус курса введён не корректно')
// }

// Что такое === и ==
// const num1 = 42 // number, число
// const num2 = '42' // string, строка

// console.log(num1 == num2) // JavaScript приводит их в один тип данных и сравнивает (Значение True)

// console.log(num1 ===num2) // JavaScript сравнивает их не только по заначению, но и по типу данных (Значение False), так как у них разный тип данных

///////////////// Понадобиться в дз.

// let x = 10

// const isReady = x > 0

// if (isReady === true) {
//     document.write('Всё готово!')
// } else {
//     document.write('Всё не готово!')
// }


/// Можно записать и так и так. Это одно и тоже

// if (isReady) {
//     alert('Всё готово!')
// }

///  При изпользовании true or false мы можем сократить код. isReady ? alert('Всё готово!') : alert('Всё не готово!')

// function pow2() {
//     var x = document.getElementById('inp1').value;
//     if (x > 0) {
//         document.getElementById('out').innerHTML = 'Положительное число';
//     } else {
//         document.getElementById('out').innerHTML = 'Отрицательное число';
//     }
// }

// Уровень доступа

// const x = prompt('Введите пароль')

// if (x == 9955 || x == 3354) {
//     alert('Уровень доступа A B C')
// }   else if (x == 7534 || x == 3569) {
//     alert('Уровень доступа B C')
// }   else if (x == 9076 || x == 1232) {
//     alert('Уровень доступа C')
// }   else {
//     alert('В доступе отказано')
// }

