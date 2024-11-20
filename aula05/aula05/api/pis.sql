CREATE TABLE pais (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(60) NOT NULL,
    CONSTRAINT unq_pais__nome UNIQUE ( nome )
) ENGINE=INNODB;

CREATE TABLE estado (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(60) NOT NULL,
    uf CHAR(2) NOT NULL,
    pais INT NOT NULL,
    CONSTRAINT fk_estado__pais FOREIGN KEY ( pais )
    	REFERENCES pais( id ) ON UPDATE CASCADE ON DELETE RESTRICT,
    CONSTRAINT unq_estado__nome UNIQUE ( nome ),
    CONSTRAINT unq_estado__uf UNIQUE ( uf )
) ENGINE=INNODB;


INSERT INTO pais ( nome ) VALUES ( 'Brasil' );
INSERT INTO estado ( nome, uf, pais ) VALUES ( 'São Paulo', 'SP', 1 );