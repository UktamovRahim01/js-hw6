
// первое задание
let mass = []
let num1 = +prompt(`первое число`)
mass.unshift(num1)
let num2 = +prompt(`второе число`)
mass.unshift(num2)
let num3 = +prompt(`третье число`)
mass.unshift(num3)

// сортировка
mass = mass.sort((a, b)=>{return a-b})

// проверка
console.log(mass);






// второе задание
let names = ['Aleksey', 'Kartoshka', 'Margarita' , 'Morgenshtern', 'Monica']
let name1 = prompt(`второе задание;  ведите имя`)

// проважу изменения 
name1 = name1.toLocaleLowerCase()
let name2 = name1[0]
name2 =name2.toLocaleUpperCase();
name1 =name1.slice(1)
name1 = name2 + name1;
 
// нахажу кардинаты и убираю имя
let otv = names.indexOf(name1)
let otv2 = names.splice(otv, 1)

// проверка
console.log(names);
console.log(name1 + `  элемент №` + otv + ` был успешно удален`);  


