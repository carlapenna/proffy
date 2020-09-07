//Procurar botão e clicar no botão
document.querySelector('#add-time').addEventListener('click', cloneField)

// cloneField é uma ação que não existe, preciso criar
function cloneField() {
    //Duplicar os campos:
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)


    //Limpar os campos antes de colocar na página, pegar os campos:
    const fields = newFieldContainer.querySelectorAll('input')
    //Para cada campo, limpar: (O forEach pega o campo do momento e executa quuantas vezes forem necessárias)
    fields.forEach(function(field) {
        //Pega o campo do momento e limpa:
        field.value = ""
    })
    

    //Definir em qual local da página colocar:
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}