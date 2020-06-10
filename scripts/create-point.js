function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]") //selecione o select com name uf

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados") //pegou os Estados
    .then( res => res.json() ) // transformou em json //funcao anonima que ta retornando um valor
    .then( states => { //for dentro dos estados

        for (const state of states ){
            ufSelect.innerHTML += `<option value="${state.id}"> ${state.nome} </option>` 
        }
    } )

}


populateUFs()

//cidades
function getCities(event){
    const citySelect = document.querySelector("[name=city]") 
    const stateInput = document.querySelector("[name=state]") 

    const ufValue = event.target.value
    
    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text


    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "" //limpando os campos
    citySelect.disabled = true //habilita o disabled

    fetch(url) 
    .then( res => res.json() )
    .then( cities => { 
        //carregando os nomes da cidade e os ids
        for (const city of cities ){
            citySelect.innerHTML += `<option value="${city.id}"> ${city.nome} </option>` 
        }

        citySelect.disabled = false
    } )
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)