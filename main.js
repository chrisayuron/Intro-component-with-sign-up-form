/* Aunque actualmente javascript permite
hacer un llamado sin el document.getElementByID o el queryselector una
buena práctica es guardarlo en una variable */ 
const first=document.querySelector("#first")
//Llamamos al id que está en el html
const last2=document.getElementById('last')
/*Cualquiera de estos dos métodos son 
validos*/
const email=document.querySelector("#email")
const password=document.querySelector("#password")

const errorfirst=document.querySelector("#error-first")
const errorlast=document.querySelector("#error-last")
const erroremail=document.querySelector("#error-email")
const errorpassword=document.querySelector("#error-password")

const button = document.querySelector("#boton")
//El tipe del botón corresponde a su id, ya que no otro

button.addEventListener("click",(event)=>{
    event.preventDefault()
    //se envia el value y el input
    validateEmpty(first.value,first)

    

})

function validateEmpty(input,div){
    //si no se introdujo nada, el tamaño es 0
    if (input.length == 0){
        //se pasa el input para cambiar el color del borde en la validación
        showError(div); //función creada para mostrar el error
        } else {
            hideError(div);//función creada para esconder el error
        }
    }

function showError(div){
div.style.border=`1px solid red`;
}
// function hideError(div){
//     div.style.border=`1px solid green`
// }
