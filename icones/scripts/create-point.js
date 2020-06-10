function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]") //selecione o select com name uf

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados") //pegou os Estados
    .then( res => res.json() ) // transformou em json //funcao anonima que ta retornando um valor
    .then( states => { //for dentro dos estados
        ufSelect.innerHTML += '<option value ="1"> nome </option>'


    } )
}

        // for (const state of states ){
        //     ufSelect.innerHTML += '<option value ="${state.id}"> ${state.nome} </option>'
        // }

populateUFs()



document
    .querySelector("select[name =uf]")
    .addEventListener("change", () => {
        console.log("mudei")
    })