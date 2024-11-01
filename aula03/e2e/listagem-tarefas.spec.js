import { test, expect } from '@playwright/test';
import { sel } from '../src/visao-tarefas.js';

test.describe( 'Listagem de Tarefas', () => {

    test.beforeEach( async ( { page } ) => {
        await page.goto( 'http://localhost:5500' ); // LiveServer;
    } );

    test( 'Exibe pelo menos uma tarefa na tela', async ( { page } ) => {
        const texto = await page.locator( 'tbody' ).innerText();
        expect( texto ).toContain( '1' );
    } );

    test( 'Exibe tarefas ao pesquisar', async ( { page } ) => {
        await page.fill( sel.pesquisa, 'café' );
        await page.click( sel.pesquisar );
        const texto = await page.locator( 'tbody' ).innerText();
        expect( texto ).toContain( 'Comprar café' );
    } );

} );