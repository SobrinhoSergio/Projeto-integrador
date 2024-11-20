import { GestorTarefas } from './gestor-tarefas.js';

export class ControladoraTarefas {

    /**
     * @param {VisaoTarefas} visao
     */
    constructor( visao ) {
        this.gestor = new GestorTarefas();
        this.visao = visao;
    }

    async listar() {
        try {
            const tarefas = await this.gestor.consultarTarefas();
            this.visao.desenharTarefas( tarefas );
        } catch ( erro ) {
            this.visao.exibirErro( erro );
        }
    }


    async pesquisar() {
        const texto = this.visao.pesquisa();
        try {
            const tarefas = await this.gestor.consultarTarefas( texto );
            this.visao.desenharTarefas( tarefas );
        } catch ( erro ) {
            this.visao.exibirErro( erro );
        }
    }


    async trocarConclusao( indice ) {
        try {
            const concluida = await this.gestor.trocarConclusaoDeTarefaNoIndice( indice );
            this.visao.atualizarConclusao( indice, concluida );
        } catch ( erro ) {
            this.visao.exibirErro( erro );
        }
    }

}