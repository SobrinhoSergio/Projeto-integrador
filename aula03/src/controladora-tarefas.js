import { GestorTarefas } from './gestor-tarefas.js';
import { VisaoTarefas } from './visao-tarefas.js';

export class ControladoraTarefas {

    constructor() {
        this.gestor = new GestorTarefas();
        this.visao = new VisaoTarefas();
        // Eventos
        this.visao.definirAcaoPesquisar( this.pesquisar.bind( this ) );
        this.visao.definirAcaoTrocarConclusao( this.trocarConclusao.bind( this ) );
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


    async trocarConclusao() {
        const indice = this.visao.indiceLinhaTarefa();
        try {
            const concluida = await this.gestor.trocarConclusaoDeTarefaNoIndice( indice );
            this.visao.atualizarConclusao( indice, concluida );
        } catch ( erro ) {
            this.visao.exibirErro( erro );
        }
    }

}