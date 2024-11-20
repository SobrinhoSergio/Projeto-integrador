import { test } from '@playwright/test';
import { TelaListagemTarefas } from './po/tela-listagem-tarefas.js';

test.describe( 'Listagem de Tarefas', () => {

    let tela;

    test.beforeEach( async( { page } ) => {
        tela = new TelaListagemTarefas( page );
        await tela.abrir();
    } );

    test( 'Exibe pelo menos uma tarefa na tela', async () => {
        await tela.possuiTexto( '1' );
    } );

    test( 'Exibe tarefas ao pesquisar', async () => {
        await tela.pesquisar( 'café', 'Comprar café' );
    } );

    test( 'Exibe tarefas com filtro aplicado ao pesquisar', async () => {
        await tela.pesquisar( 'cerveja', 'Comprar cerveja' );
    } );

} );