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

}