import { somar } from './calculo.js';

// document.body.innerHTML += "- Bem-vindo(a)!";

document.querySelector( 'button' ).onclick = ev => {
    ev.preventDefault();
    const resultado = somar(
        Number( document.querySelector( '#n1' ).value ),
        Number( document.querySelector( '#n2' ).value ),
    );
    document.querySelector( 'output' ).innerText = String( resultado );
};
