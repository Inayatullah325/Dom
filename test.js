function Converter(){
    let celcius =parseInt( document.getElementById("celcius").value);
    let farenheit =parseInt( document.getElementById("farenheit").value);
    let print = document.getElementsByClassName("print")[0]
    let print1 = document.getElementsByClassName("print1")[0]
    let toFarenheit = (celcius*9/5)+32;
    let toCelcius =(farenheit - 32)*5/9;

    print.textContent=toCelcius
    print.textContent=toFarenheit

    if (celcius<=40){
        console.log("celcius");

    }else if (farenheit<=40){
        console.log("farenheit");

    }

   
    alert("farenheit = "+ toFarenheit + "\ncelcius = "+toCelcius);

     
}



















// let a = parseInt(document.getElementById)("temp").value;

// var celcius =(temperature*9/5)+32;
// var farenheit= (temperature - 32)*5/9;

// if (temperature == celcius){
//     console.log("this celcius");
// }