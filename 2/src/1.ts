// 1. Создайте массив чисел и найдите сумму всех нечетных элементов в массиве.


// const arr : number[] = [1, 2, 3, 4, 5];
// const result = arr.reduce((sum : number, el : number) =>{
//     if(el % 2 != 0) return sum+=el
//     else return sum+=0
// }, 0)
// console.log(result);

// 2. Создайте массив строк и выведите на экран все элементы, которые содержат
// букву 'a'.

// const arr : string[] = ['abc','fac','bgh','req'];
// const result = arr.filter((el:string) =>{
//     if(el.includes('a')) return true;
//     else return false;
// })
// console.log(result);

// 3. На входе динамичный массив чисел. Используя reduce выведите сумму чисел
// массива

// const arr : number[] = [];
// const n = 10;

// for(let i = 0; i < n; i++){
//     arr.push(Math.floor(Math.random()*10));
// }

// const result = arr.reduce((sum: number, el:number) =>{
//     return sum+=el;
// }, 0)
// console.log(result);

// 4. Создайте динамический массив строк. Используя Some выведите true в случае
// если хотя бы 1 элемент массива имеет длину > 5 символов.

// const arr : string[] = [];
// const n = 3;

// for(let i = 0; i < n; i++){
//     arr.push(prompt('Введите строку'));
// }

// const result = arr.some((el: string) =>{
//     if(el.length > 5) return true;
//     else return false;
// })

// console.log(result);

// 5. Создайте массив чисел и найдите в нем все числа, которые делятся на 3 и не
// делятся на 2.

// const arr : number[] = [1, 3, 9, 11, 4];

// const result = arr.filter((el: number) =>{
//     if(el % 3 == 0 && el % 2 != 0) return true;
//     else return false;
// })
// console.log(result);


// 6. Создайте массив строк и объедините все элементы в одну строку без пробелов.

// const arr : string[] = ['asd', 'affsdf', 'erwere'];
// const result = arr.reduce((sum: string, el: string) =>{
//     return sum+=el;
// }, '')
// console.log(result);

// 7. На входе 5 значений. Все эти значения пользователь вводит с клавиатуры и
// заполняет массив. Необходимо создать массив только из чисел.

// const arr : number[] = [];
// try{
//     for(let i = 0; i < 5; i++){
//         let el = Number(prompt('Введите число'))
//         if(isNaN(el)) throw new Error('error')
//         arr.push(Number(prompt('Введите число')))
//     }
// }
// catch(error){
//     console.log(error.message)
// }
// console.log(arr);

// 8. Создайте массив строк и проверьте, есть ли в нем хотя бы одно слово-палиндром.

// const arr : string[] = ['sas', 'dasd', 'asdfdsg'];
// const result = arr.some((el: string) =>{
//     if(el == el.split('').reverse().join('')) return true;
//     else return false
// })
// console.log(result);

// 9. Создайте массив из чисел и строк и удалите из него все повторяющиеся
// элементы, оставив только уникальные значения.

// const arr : (number | string)[] = ['123', 1234, 12, '123', '12gdfg', 1234];
// const result : (number | string)[] = [];

// for(let i = 0; i < arr.length; i++){
//     if(!result.includes(arr[i])) result.push(arr[i]);
// }

// console.log(result);

// 10. Создайте массив строк и преобразуйте каждую строку в новую строку,
// содержащую только гласные буквы.

// const arr : string[] = ['asfsfsdaaue', 'gareqtyu', 'fsdfadfhlio'];
// const result : string[] = [];

// for(let el of arr){
//     let temp = el.split('').filter((elem: string) =>{
//         if('aeiou'.includes(elem)) return true;
//         else return false;
//     })
//     result.push(temp.join(''))
// }

// console.log(result);

// 11. На входе динамичный массив строк. Используя every выведите true если все
// элементы массива соответствуют регулярному выражению почты

// const arr : string[] = [];
// const n = 5
// for(let i = 0; i < n; i++) arr.push(prompt('Введите строку'));

// const result = arr.every((el : string) =>{
//     if(/^[\w\.]+@[\w]+.[\w]{1,6}$/gm.test(el)) return true;
//     else return false;
// })
// console.log(result);

// 12. Создайте массив чисел и найдите сумму элементов, находящихся на нечетных
// позициях (индексах) массива.

// const arr : number[] = [1,2,3,4,5];
// const result = arr.reduce((sum : number, elem: number, index : number) =>{
//     if(index % 2 != 0) return sum+=elem;
//     else return sum+=0
// }, 0)
// console.log(result);

// 13. На входе динамичный массив чисел. Используя map выведите массив строк
// четности и нечетности, в соответствии со значением числа:
// [1, 2, 3, 4, 5, 6] -> [“нечет”, “чет”, “нечет”, “чет”, “нечет”, “чет”]

// const arr : number[] = [];
// const n = 6
// for(let i = 0; i < n; i++){
//     arr.push(Number(prompt('Введите число')))
// }
// const result = arr.map((el : number) =>{
//     if(el % 2 == 0) return "чет"
//     else return "нечет"
// })
// console.log(result);

// 14. Напишите программу, которая находит и выводит наиболее часто встречающийся
// символ в заданной строке.

// const str : string = 'sjdgsgslkdfghsldkfhg'
// const obj = {};

// for(let i = 0; i < str.length; i++){
//     if(!obj[str[i]]) obj[str[i]] = 1;
//     else obj[str[i]] += 1;
// }
// const arr : number[] = Object.values(obj);
// let maxIndex = -Infinity;
// let max : number = -Infinity;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i];
//         maxIndex = i;
//     }
// }
// console.log(obj);

// console.log(arr[maxIndex]);

// 15. На входе динамичный массив строк. Используя forEach создайте новый массив из
// элементов, каждое значение которого имеет вид !name
// [“hschool”, “company”] -> [“!hschool”, “!company”]

// const arr : string[] = [];
// const newArr : string[] = [];
// const n = 3
// for(let i = 0; i < n; i++){
//     arr.push(prompt('Введите строку'));
// }
// arr.forEach((el : string) =>{
//     return newArr.push(`!${el}`);
// })
// console.log(newArr);

// 16. Создайте массив чисел и определите, является ли он строго возрастающей
// последовательностью.

// let flag = false;
// const arr : number[] = [1, 2, 3, 4, 5];
// const sorted = arr.sort((a, b) => a - b);
// if(Number(arr.join('')) === Number(sorted.join(''))) flag = true
// console.log(flag);

// 17. Создайте массив чисел и найдите наибольшую разницу между двумя элементами.

// let max = -Infinity;
// const arr = [5, 6, 8, 9, 10];

// for(let i = 0; i < arr.length; i++){
//     if(Math.abs(arr[i] - arr[i+1]) > max) max = Math.abs(arr[i] - arr[i+1]);
// }
// console.log(max);


// 18. Создайте массив объектов, представляющих книги, и найдите книгу где автор
// Булгаков (author – одно из полей объекта)

// const arr = [
//     {author: 'Булгаков', title: 'алло'},
//     {author: 'Булгаков', title: 'алло2'},
//     {author: 'NO NAME', title: 'sdfsdf'},
//     {author: 'HELLO', title: 'peqwe'},
// ]

// for(let el of arr){
//     if(el.author == 'Булгаков') console.log(el);
// }

// 19. Создайте массив объектов, представляющих книги, и отобразите книги где цена
// каждой > 50 (price – одно из полей объекта)

// const arr = [
//     {title: 'book1', price: 60},
//     {title: 'book2', price: 20},
//     {title: 'book3', price: 70},
//     {title: 'book4', price: 10},
// ]

// for(let el of arr){
//     if(el.price > 50) console.log(el);
// }

// 20.Создайте массив объектов, представляющих книги, и найдите книгу с самым
// большим количеством страниц (count – одно из полей объекта)

// const arr = [
//     {title: 'book1', price: 60, count: 30},
//     {title: 'book2', price: 20, count: 40},
//     {title: 'book3', price: 70, count: 70},
//     {title: 'book4', price: 10, count: 60},
// ]

// let max = -Infinity
// for(let el of arr){
//     if(el.count > max) max = el.count
// }
// console.log(max);
// for(let el of arr){
//     if(el.count == max) console.log(el);
// }

// 21. Напишите программу, которая находит и выводит длину наиболее длинного
// слова в заданной строке.

// const str : string = 'dasf fsdfsgf sgdfgsad aa';
// const arr = str.split(' ');
// let maxLength = -Infinity
// for(let el of arr){
//     if(el.length > maxLength) maxLength = el.length;
// }
// console.log(maxLength);

// 22. Создайте массив объектов, представляющих сотрудников, с полями "имя" и
// "зарплата". Найдите среднюю зарплату всех сотрудников.

// const arr = [
//     {name : 'Игорь', salary: 300},
//     {name : 'Антон', salary: 500},
//     {name : 'Илья', salary: 1000},
//     {name : 'Олег', salary: 200}
// ]
// let sum = 0;
// for(let el of arr) sum += el.salary;
// console.log(sum / arr.length);

// 23. Дан массив объектов с полями "название", "цена" и "количество". Найдите
// суммарную стоимостью всех товаров учитывая количество каждого.
// Итог = цена_1_товара * кол-во_1_товара + цена_2_товара * кол-во_2_товара + ...

// const arr = [
//     {title : 'Название1', price: 300, count: 20},
//     {title : 'Название2', price: 500, count: 40},
//     {title : 'Название3', price: 1000, count: 50},
//     {title : 'Название4', price: 200, count: 20}
// ]

// let sum = 0;
// for(let el of arr) sum += el.price * el.count;
// console.log(sum);