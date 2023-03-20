function abrirmenu(){

    let BarraMenuAberto = document.getElementById ('barra-menu')
    if (BarraMenuAberto.style.width == "0px")
        {BarraMenuAberto.style.width = "170px"
    }else{
        BarraMenuAberto.style.width = "0px"
    }
}
const init = () => {
    const inputEmail = document.querySelector('input [type="email"]')
    const inputPassword = document.querySelector('input [type="password"]')
    const inputButton = document.querySelector('.entrar')

    if(inputButton) {
        inputButton.addEventListener('click', (Event) => {
            Event.preventDefault()

            fetch('https://reqres.in/api/login', {
                method: 'POST',
                headers: {
                    'ContentType': 'application/json'
                },
                body: JSON.stringify({
                    email: inputButton.value,
                    password: inputPassword.value,
                })
            }).then((Response) => {
                return Response.json
            }).then((data) => {
                console.log(data)
            })
        })
    }

}
window.onload = init
