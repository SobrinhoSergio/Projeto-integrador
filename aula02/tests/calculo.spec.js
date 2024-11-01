import {describe, it, expect} from 'vitest';
import {somar, dividir} from '../src/calculo.js';


describe('calculo', () => {

    describe('somar', () => {
        it('soma dos números inteiros positivos', () =>{
            const resultado = somar(10, 20);
            expect(resultado).toBe(30);
        })
    
        it('soma dos números inteiros negativos', () =>{
            const resultado = somar(-10, -20);
            expect(resultado).toBe(-30);
        })
    })

    describe('dividir', () => {
        it('Divide dois números inteiros negativos', () =>{
            const resultado = dividir(10, 3);
            expect(resultado).toBeCloseTo(3.33, 2);
        })
    })

    it.skip("Lança exeção ao dividir por zero", () => {
        try{
            const resultado = dividir(10, 0);
            expect(false).toBe("Não deveria chegar aqui.");

        }
        catch(e){
            //expect(true).not.toBe(false);
            expect(e.message).toContain("Zero");
        }
    })

    it("Lança exeção ao dividir por zero", () => {
        expect( () => {
            dividir(10, 0);
        }).toThrow( /Zero/i );
    })

})
