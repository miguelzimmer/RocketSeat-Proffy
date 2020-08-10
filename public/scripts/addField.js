//Procurar o botao
document.querySelector("#add-time")
//quando clicar
.addEventListener('click',cloneField)


//executar uma acao
function cloneField() {
    //duplicar o os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    
    //pegar  os campos
    const fields = newFieldContainer.querySelectorAll('input')

    //pora cada campo, limpar
    fields.forEach(function(field){
        //pegar o o field do momento e limpa ele
        field.value = ""

    })
    
    //colocar na pagina
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}
