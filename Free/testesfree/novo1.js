function somar(){
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    let resposta = document.querySelector('#resultado')
    if(num1 == '' || num2 == ''){
        alert('Preencha os campos!')
    }else{
        let n1 = Number(num1)
        let n2 = Number(num2)
        resposta.style.backgroundColor= 'black'
        resposta.style.color ='white'
        resposta.innerText=`${n1+n2}`
    }
}

function reset(){
    let resposta = document.querySelector('#resultado')
    resposta.style.backgroundColor= 'white'
    resposta.innerText = ''
}
