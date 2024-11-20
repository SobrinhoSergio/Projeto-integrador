<?php

class GestorEstado {

    public function __construct(
        private RepositorioPais $repositorioPais,
        private RepositorioEstado $repositorioEstado
    ) {
    }

    public function cadastrar( array $dados ) {

        // Sanitiza
        foreach ( $dados as $chave => &$valor ) {
            $valor = htmlspecialchars( $valor );
        }

        $idPais = $dados[ 'pais' ] ?? 0;
        // TODO: validar id

        // Encontra o país com o id informado
        $pais = $this->repositorioPais->comId( $idPais );
        if ( $pais === null ) {
            throw new NaoEncontradoException( 'País não encontrado.' );
        }

        $estado = new Estado( 0, $dados[ 'nome' ] ?? '', $dados[ 'uf' ] ?? '', $pais );

        $problemas = $estado->validar();
        if ( count( $problemas ) ) {
            throw ( new DominioException() )->setProblemas( $problemas );
        }

        if ( $this->repositorioEstado->existeComNomeOuUF( $estado ) ) {
            throw new JaExisteException( 'Já existe um estado com esse nome ou essa UF.' );
        }

        $this->repositorioEstado->adicionar( $estado );
    }
}

?>