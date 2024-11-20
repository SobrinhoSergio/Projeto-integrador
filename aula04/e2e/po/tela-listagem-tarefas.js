import { expect } from '@playwright/test';
import { sel } from '../../src/visao-tarefas.js';

export class TelaListagemTarefas {

    page = null;

    /**
     *
     * @param {import('@playwright/test').Page} page
     */
    constructor( page ) {
        this.page = page;
    }

    async abrir() {
        await this.page.goto( 'http://localhost:5500' ); // LiveServer;
    }

    async pesquisar( pesquisa, textoEsperado ) {
        await this.page.fill( sel.pesquisa, pesquisa );
        await this.page.click( sel.pesquisar );
        await this.possuiTexto( textoEsperado );
    }

    async possuiTexto( textoEsperado ) {
        const texto = await this.page.locator( 'tbody' ).innerText();
        expect( texto ).toContain( textoEsperado );
    }
}