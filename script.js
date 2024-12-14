const form = document.getElementById('form');



form.addEventListener('submit', function(event){

    // previne o comportamento padrão do evento submit do js, ou seja impede o recarregamento da pagina
    event.preventDefault();
        
    const peso = parseFloat(document.getElementById('peso').value);

    const altura = parseFloat(document.getElementById('altura').value);

    if(peso>0 && altura > 0){
    const imc = parseFloat(peso / (altura*altura));

    document.getElementById('infos').classList.remove('hidden');

    const campoImc = document.getElementById('value');

    campoImc.classList.add('attention');

    let descricao;

    if (imc < 18.5){

        descricao = 'Cuidado você está abaixo do peso!';

    }
    else if ((imc >= 18.5)&&(imc < 25)){

        descricao = 'você está no peso ideal';

        campoImc.style.color = '#16a34a'

    }
    else if((imc >=25)&&(imc < 30)){

        descricao = 'cuidado você está em sobrepeso!'
        
    }
    else if((imc >=30)&&(imc < 35)){

        descricao = 'cuidado você está com obesidade moderada!'
        
    }
    else if((imc >=35)&&(imc < 40)){

        descricao = 'cuidado você está com obesidade severa!'
        
    }
    else {

        descricao = 'cuidado você está com obesidade morbida!'
        
    }
    
    

    campoImc.textContent = imc.toFixed(2);

    document.getElementById('description').textContent = descricao

    } else {
alert("Por favor insira valores acima de 0");
    }


});
