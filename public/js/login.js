const callApi = () => {
    const login = {
        email: email.value,
        password: password.value
    }
    fetch("/api/login", {
        method: "POST",
        body: JSON.stringify(login),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.status == "error") {

                alert(data.error)

            } else {

                window.location.reload()
            }
        })
}
document.getElementById("btn-login").addEventListener('click', (e) => {
    e.preventDefault()
    callApi()
})

document.addEventListener("keyup", (e) => {
    if (e.key === "Enter") callApi()
})