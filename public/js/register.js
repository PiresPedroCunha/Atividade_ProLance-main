form.addEventListener('submit', () => {
    const register = {
        nome: nome.value,
        email: email.value,
        password: password.value
    }

    fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(register),
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
                alert(data.success)
            }
            // console.log(data)
        })
})