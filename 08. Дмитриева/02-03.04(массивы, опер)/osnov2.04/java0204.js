//Задание 1
//var a = 1, b = 1, c, d;
//c = ++a; alert(c); // 2 / переменной а прибавляем единицу /
//d = b++; alert(d); // 1 /прибавляем единицу, но выводим предыдущее значение переменной */
//c = (2+ ++a); alert(c); // 5 /  к первому примеру прибавляем еще единицу и а стало равно 3,ответ 5 /
//d = (2+ b++); alert(d); // 4 /во втором примере  прибавили единицу в переменную b т.е стало равно 2, прибавляем еще единицу и а становится равно 3, но выводим предыдущее значение т.е. 2, и получаем 4 /
//alert(a); // 3	/* прибавили единицу в примере 1 и  3 /
//alert(b); // 3	/* прибавили единицу в примере 2 и 4 /
//
//Задание 2
//var a = 2;
//var x = 1 + (a *= 2); // x будет равен 5 т.к. оператор *= это = 1 + (a = a * 2 ) /
//
//Задание 3
var a = prompt("Введите a:");
var b = prompt("Введите b:");
		if (a > 0 && b > 0){
		x = a - b;
		alert(x);
		} else if (a < 0 && b < 0){
			x = a * b;
			alert (x);
			}
		  else if (a > 0 && b < 0 || a < 0 && b > 0) {
		  x = b + a;
		  alert (x);
		  }
//
//Zadanie 4
a = +prompt ('Введите число от 1 до 15');
		switch (a) {
		case 1:
			alert ( 'Ваше число 1');
			break;
		case 2:
			alert ( 'Ваше число 2');
			break;
		case 3:
			alert ( 'Ваше число 3');
			break;
		case 4:
			alert ( 'Ваше число 4');
			break;
		case 5:
			alert ( 'Ваше число 5');
			break;
		case 6:
			alert ( 'Ваше число 6');
			break;
		case 7:
			alert ( 'Ваше число 7');
			break;
		case 8:
			alert ( 'Ваше число 8');
			break;
		case 9:
			alert ( 'Ваше число 9');
			break;
		case 10:
			alert ( 'Ваше число 10');
			break;
		case 11:
			alert ( 'Ваше число 11');
			break;
		case 12:
			alert ( 'Ваше число 12');
			break;
		case 13:
			alert ( 'Ваше число 13');
			break;
		case 14:
			alert ( 'Ваше число 14');
			break;
		case 15:
			alert ( 'Ваше число 15');
			break;	
		}	
//
//Zadanie 5

var a = 6;
		var b = 3;

		function plus(a, b) {
    		return a + b;
		}

		function min(a, b) {
    		return a - b;
		}

		function div (a, b) {
    		return a / b;
		}

		function mutt(a, b) {
    		return a + b;
		}


//
// Zadanie 6
function mathOperation(arg1, arg2, operation){
    			switch(operation){
       				 case 'Сложение':
           				 return arg1 + arg2;
           				 break;
       				 case 'Вычитание':
           				 return arg1 - arg2;
            			 break;
        			 case 'Деление':
                      			 return arg1 / arg2;
            			 break;
       				 case 'Умножение':
           				 return arg1 * arg2;
            			 break;
   				}
		}
alert(mathOperation(4, 3, 'Сложение'));
alert(mathOperation(11, 7, 'Вычитание'));
alert(mathOperation(18, 6, 'Деление'));
alert(mathOperation(5, 3, 'Умножение'));
//
// Zadanie 7
alert( null > 0 );  //  false
alert( null == 0 ); //  false
alert( null >= 0 ); //  true
//Сравнения преобразуют null в число, рассматривая его как 0. Поэтому выражение 3 null >= 0 истинно, а null > 0 ложно.Dля нестрогого равенства ==  null действует особое правило: эти значения ни к чему не приводятся, они равны друг другу и не равны ничему другому. Поэтому null == 0 ложно.
//
//Zadanie 8
function power(val, pow)
	{
		if (val == 0)
		return 0;
		else if (pow == 0)
		return 1;
		else if (pow < 0)
		return power(1/val, -pow);
		else
		return val *  power(val, pow-1);
	}
alert(power(5, 2));
//