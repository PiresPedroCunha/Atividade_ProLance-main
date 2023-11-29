const containerCard = document.querySelector('.container-card')


function buscaEmprego() {
    fetch("/api/jobs", {
        method: "GET"
    }).then(res => res.json())
        .then(data => {

            if (data.status == "false") {
                containerCard.innerText = "Não foi achar nenhum trabalho"

            } else {
                containerCard.innerText = ""

                for (const key in data) {

                    const element = data[key];

                    for (const key in element) {
                        const card = document.createElement('div');
                        const cardBody = document.createElement('div')
                        card.appendChild(cardBody)
                        const titulocard = document.createElement('h5')
                        cardBody.appendChild(titulocard)
                        const descricaocard = document.createElement('p')
                        cardBody.appendChild(descricaocard)
                        card.className = 'card'
                        cardBody.className = 'card-body'
                        titulocard.className = 'card-title'
                        descricaocard.className = 'card-text'
                        containerCard.appendChild(card)
                        const { titulo, descricao } = element[key];
                        titulocard.innerText = titulo
                        descricaocard.innerText = descricao
                        card.addEventListener("click", ()=>{
                            fetch(`/descricaoVaga/${key}`).then(res => res.redirected && ( location.href = res.url))
                        })

                    }

                }

            }
        })
}

buscaEmprego()