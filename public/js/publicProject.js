const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const job = {
        titulo: titulo.value,
        descricao: descricao.value
    }

    fetch("/api/jobs", {
        method: "POST",
        body: JSON.stringify(job),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json())
        .then(data => {
            if (data.status == "error") {
                // success.style.display = 'none'
                // errorr.style.display = 'block'
                // errorr.innerText = data.error
                alert(data.error)

            } else {
                // success.style.display = 'block'
                // errorr.style.display = 'none'
                // success.innerText = data.success
                // alert(data.success)
            }
        })
})