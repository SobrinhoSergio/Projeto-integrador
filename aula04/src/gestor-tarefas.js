import { Tarefa } from "./tarefa.js";

export const tarefasDeExemplo = [
    new Tarefa( 1, 'Comprar café', false ),
    new Tarefa( 2, 'Comprar cerveja', true ),
];

export class GestorTarefas {

    constructor( tarefas ) {
        this.tarefas = tarefas || tarefasDeExemplo;
        this.estaoFiltradas = false;
    }


    /**
     * @param {string} texto
     * @returns {Promise< Tarefa[] >}
     */
    async consultarTarefas( texto ) {
        if ( ! texto ) {
            this.estaoFiltradas = false;
            return this.tarefas;
        }
        const filtradas = this.tarefas.filter( t => t.descricao.toLowerCase().includes( texto.toLowerCase() ) );
        this.estaoFiltradas = filtradas.length != this.tarefas.length;
        return filtradas;
    }


    async trocarConclusaoDeTarefaNoIndice( indice ) {

        if ( indice === undefined || indice < 0 ) {
            throw new Error( 'Posição inválida.' );
        }

        if ( this.estaoFiltradas ) {
            throw new Error( 'Não é possível fazer a troca enquanto as tarefas estão filtradas.' );
        }

        return this.tarefas[ indice ].concluida =
            ! this.tarefas[ indice ].concluida;
    }

}