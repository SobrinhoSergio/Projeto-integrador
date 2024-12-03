<?php

class RepositorioPaisEmBDR implements RepositorioPais {

    public function __construct(
        private PDO $pdo
    ) {
    }

    public function comId( int|string $id ): ?Pais {
        try {
            $ps = $this->pdo->prepare( 'SELECT id, nome FROM pais' );
            $ps->setFetchMode( PDO::FETCH_CLASS | PDO::FETCH_PROPS_LATE, Pais::class );
            $ps->execute();
            $objeto = $ps->fetch();
            return $objeto === false ? null : $objeto;
        } catch ( PDOException $ex ) {
            throw new RepositorioException( 'Erro ao consultar o país.',
                (int) $ex->getCode(), $ex );
        }
    }

    /**
     * Retorna todos os países
     * @return array<int, Paises>
     */
    public function todos(): array {
        try {
            $ps = $this->pdo->prepare( 'SELECT id, nome FROM pais' );
            $ps->setFetchMode( PDO::FETCH_CLASS | PDO::FETCH_PROPS_LATE, Pais::class );
            $ps->execute();
            return $ps->fetchAll();
        } catch ( PDOException $ex ) {
            throw new RepositorioException( 'Erro ao consultar os países.',
                (int) $ex->getCode(), $ex );
        }
    }


    public function adicionar( Pais $p ) {
        try {
            $ps = $this->pdo->prepare( 'INSERT INTO pais ( nome ) VALUES ( :nome )' );
            $ps->execute( [
                'nome' => $p->nome
            ] );
            $p->id = (int) $this->pdo->lastInsertId();
        } catch ( PDOException $ex ) {
            throw new RepositorioException( 'Erro ao cadastrar o país.',
                (int) $ex->getCode(), $ex );
        }
    }
}