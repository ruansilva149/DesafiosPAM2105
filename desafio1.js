const variaveis = (function variaveis(){

    
    let x = 1;
    let y = 5;

    console.log('Variavel x:',x);
    console.log('Variavel y:',y);
    console.log('Começando a troca...')

    function somaX(){

        return (x= x+y);
    }

    function subtraiY(){

        return (y= x-y);
    }


    function subtraiX(){

        return (x= x-y);
    }

    return {
        soma1(){
            console.log('Pegando x e somando x por y...')
            console.log('O valor atual de x é: ', somaX ());
            console.log('\n');
        },

        subtrai(){
            console.log('Pegando y e subtraindo x por y...')
            console.log('O valor atual de y é: ', subtraiY());
            console.log('\n');
        },

        soma2(){
            console.log('Pegando o atual valor de x e subtraindo pelo valor atual de y...')
            console.log('O valor atual de x é: ', subtraiX());
            console.log('\n\n');
        },

        exibirMensagemFinal(){
            console.log('Valores atuais finais: ')
            console.log('X= ', x)
            console.log('Y= ', y)
            console.log ('Valores trocados com sucesso!')
        }

    }
})();


variaveis.soma1();
variaveis.subtrai();
variaveis.soma2();
variaveis.exibirMensagemFinal();