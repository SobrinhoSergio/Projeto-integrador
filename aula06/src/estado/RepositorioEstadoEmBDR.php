<?php

class RepositorioEstadoEmBDR implements RepositorioEstado {

    public function __construct(
        private PDO $pdo
    ) {
    }

    public function adicionar( Estado $e ) {
        try {
            $sql = 'INSERT INTO estado ( nome, uf, pais ) VALUES  ( :nome, :uf, :pais )';
            $ps = $this->pdo->prepare( $sql );
            $ps->execute( [ 'nome' => $e->nome, 'uf' => $e->uf, 'pais' => $e->pais->id ] );
        } catch ( PDOException $ex ) {
            throw new RepositorioException( 'Erro ao adicionar o estado.',
                (int) $ex->getCode(), $ex );
        }
    }

    public function existeComNomeOuUF( Estado $e ): bool {
        // TODO: implementar
        return false;
    }
}