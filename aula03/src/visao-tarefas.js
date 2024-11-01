import { Tarefa } from "./tarefa.js";

export const sel = { // seletores
    pesquisa: '#pesquisa',
    pesquisar: '#pesquisar'
};

export class VisaoTarefas {

    acaoTrocarConclusao = () => {}; // função
    indiceLinha = -1;

    /**
     * Desenha as tarefas na tela.
     *
     * @param {Tarefa[]} tarefas
     */
    desenharTarefas( tarefas ) {
        const tbody = document.querySelector( 'tbody' );
        tbody.innerText = ''; // Limpa
        const fragmento = document.createDocumentFragment();
        for ( const t of tarefas ) {
            const linha = this.criarLinha( t );
            fragmento.append( linha );
        }
        tbody.append( fragmento );
    }

    /**
     * Cria uma linha de tabela a partir de uma tarefa.
     * @param {Tarefa} t
     * @returns {HTMLTableRowElement}
     */
    criarLinha( t ) {
        const tr = document.createElement( 'tr' );

        const celulaConclusao = this.criarCelula( t.concluida ? 'Sim' : 'Não' );
        celulaConclusao.onclick = ( event ) => {
            console.log( event.target );
            const tr = event.target.parentElement;
            this.indiceLinha = tr.sectionRowIndex;
            this.acaoTrocarConclusao();
        };

        tr.append(
            this.criarCelula( t.id ),
            this.criarCelula( t.descricao ),
            celulaConclusao,
        );
        return tr;
    }

    /**
     * Cria uma célula e retorna.
     *
     * @param {string} texto
     * @returns {HTMLTableCellElement}
     */
    criarCelula( texto ) {
        const td = document.createElement( 'td' );
        td.innerText = texto;
        return td;
    }

    /**
     * Exibe um erro
     *
     * @param {Error|string} erro
     */
    exibirErro( erro ) {
        alert( erro instanceof Error
                ? erro.message
                : erro
        );
    }

    /** @returns string */
    pesquisa() {
        return document.querySelector( sel.pesquisa ).value;
    }


    definirAcaoPesquisar( funcao ) {
        document.querySelector( sel.pesquisar ).onclick = ( event ) => {
            funcao();
        };
    }

    definirAcaoTrocarConclusao( funcao ) {
        this.acaoTrocarConclusao = funcao;
    }

    indiceLinhaTarefa() {
        return this.indiceLinha;
    }

    atualizarConclusao( indice, concluida ) {
        const td = document.querySelector(
            `tbody tr:nth-child(${indice + 1}) td:last-child`
        );
        if ( ! td ) {
            alert( 'Linha não encontrada.' );
            return;
        }
        td.innerText = concluida ? 'Sim' : 'Não';
    }
}