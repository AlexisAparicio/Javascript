// var h=18;

// if(h>18){
//     console.log("Puede votar");
//     if (h<18) {
//         console.log("Eres Menor chamaco");
        
//     } else {
//         console.log("Acabas de cumplir 18 verdad");
        
//     }
// }
// 

// const h1=document.querySelector('h1');
// const p1=document.querySelector('p');
// const p2=document.querySelector('.parrafo');
// const p3=document.getElementById('PID');
// const p4=document.querySelector('input');

// console.log(h1);
// console.log({h1,p1,p2,p3,p4})
// console.log(p4.value)

// h1.innerText="Shinji";
// console.log(h1);
// console.log(p2.getAttribute('class'));
// p2.setAttribute('class','parrafo2');
// console.log(p2.getAttribute('class'));
// h1.classList.add('parrafo');
// console.log(h1.getAttribute('class'));
// h1.classList.remove('parrafo1');
// console.log(h1.getAttribute('class'));

// p4.value="1234";

// const a=0,b=0;
// const img=document.createElement('img');
// p3.append(img);

// lectura y manejo de variables desde js

const h1 = document.querySelector('h1');
const input1=document.getElementById('Calculo1');
const input2=document.getElementById('Calculo2');
const btn=document.getElementById('btn_calcular');
const form=document.getElementById('form');

// btn.addEventListener('click',btnonclick);

// function btnonclick(){
//     const suma=input1.value+input2.value;
//     console.log(suma);
//     document.getElementById("result").innerText = "Resultado es: "+suma;
// }


form.addEventListener('submit',btnonclick);

function btnonclick(){
    const suma=input1.value+input2.value;
    console.log(suma);
    document.getElementById("result").innerText = "Resultado es: "+suma;
}


