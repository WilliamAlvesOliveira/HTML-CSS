function enviarmsg(){
    let novamsg = document.querySelector('#mensagens')
    let msg = document.querySelector('input#texto').value 
    if (msg !== '') { novamsg.innerHTML = `<p>${msg}</p>` + novamsg.innerHTML; document.querySelector('input#texto').value = ''; novamsg.scrollTo = novamsg.scrollHeight; // Ajusta a rolagem para o topo } else { alert('Por favor, digite uma mensagem.'); }
    }
}    