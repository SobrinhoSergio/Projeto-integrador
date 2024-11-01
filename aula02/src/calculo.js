export function somar(n1, n2){
    return n1 + n2;
}

export function dividir(n1, n2){
    if(n2 === 0){
        throw new Error("Denominador não pode ser Zero.");
    }

    return n1/n2;
} 