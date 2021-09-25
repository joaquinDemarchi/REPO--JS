function suma (num1,num2){
    return num1 + num2
}

function calc (num1,num2,callback){
    return callback(num1, num2)
}

console.log(calc(2,2,suma));


function date(callback) {       //ESTA f llama al callback "printDate"
    console.log(new Date);      //Aqui se imprime la fecha por primera vez

    setTimeout(function () { //Aqui se utiliza un un setTimeOut para crear, llamar e imprimir otra fecha    
        let date2 = new Date; //se crea la nueva fecha y se la almacena en una variable
        callback(date2);         //se remplaza callback por printDate y "dateNow" pasa a tener el valor de date2
    }, 3000)                    // se cierra el setTimeOut y se establece el tiempo
}

function printDate(dateNow){  // se define la funcion printDate, la cual sera llamada por la funcion date
    console.log(dateNow);   
}

date(printDate);  //Se llama a la f date,  y se establece como parametro el callback printDate