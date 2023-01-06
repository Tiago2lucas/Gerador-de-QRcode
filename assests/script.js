
const inputValue = document.querySelector('#inputValue');
const btnValue = document.querySelector('#btnValue');
const imgQrCode = document.querySelector('#imgQrCode');
const wrapper = document.querySelector('.wrapper');

let valueDefault;


// Função do botão ao click
 btnValue.addEventListener('click', () => {

 	let qrcodeValue = inputValue.value.trim();
    // Função para que se Qr code ja foi gerado, se clica em gera novamente o mesmo QR code ele retorna o mesmo, então não acontece nada
 	if (!qrcodeValue || qrcodeValue === valueDefault) return;

 	valueDefault = qrcodeValue;

    // Função para que mostre a informação no botão 'Gerando QR CODE'
    btnValue.innerText = 'Gerando QR Code...'

    // função para o codigo do QR code ser gerado API
    imgQrCode.src= `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${valueDefault}`;
    
    // Função para o carregamento do Qr Code, ao Clica nele ira carrega e mostra o Qr Code
    // por causa da Class Active que colocamos
    imgQrCode.addEventListener('load', () =>{
        wrapper.classList.add('active');
        btnValue.innerText = 'Gera QRCode'


    })

 })