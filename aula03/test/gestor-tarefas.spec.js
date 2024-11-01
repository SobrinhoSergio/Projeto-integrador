import { describe, it, expect } from 'vitest';
import { GestorTarefas } from '../src/gestor-tarefas.js';
import { Tarefa } from '../src/tarefa.js';

const tarefasParaTeste = [
    new Tarefa( 1, 'Comprar café', false ),
    new Tarefa( 2, 'Comprar cerveja', true ),
];

describe( 'GestorTarefas', () => {

    describe( 'consultarTarefas', () => {

        it( 'retorna um array com tarefas', async () => {
            const gestor = new GestorTarefas( tarefasParaTeste );
            const tarefas = await gestor.consultarTarefas();
            expect( tarefas.length ).toBeGreaterThan( 0 );
            expect( tarefas[ 0 ] ).toBeInstanceOf( Tarefa );
        } );

        it( 'encontra as tarefas com o texto informado', async () => {
            const texto = 'Café';
            const gestor = new GestorTarefas( tarefasParaTeste );
            const tarefas = await gestor.consultarTarefas( texto );
            expect( tarefas.length ).toBe( 1 );
            const { descricao } = tarefas.at( 0 );
            expect( descricao.toLowerCase() ).toContain( texto.toLowerCase() );
        } );


        it( 'retorna um array vazio quando não encontrar', async () => {
            const texto = 'Uva';
            const gestor = new GestorTarefas( tarefasParaTeste );
            const tarefas = await gestor.consultarTarefas( texto );
            expect( tarefas.length ).toBe( 0 );
        } );

    } );

} );