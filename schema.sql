create database tropadigital;

create table if not exists usuarios (
	id_usuario int not null AUTO_INCREMENT,
  	nome varchar(255) not null,
  	sobrenome varchar(225) not null,
  	email varchar(255) not null,
	telefone varchar(55) not null,
  	cpf varchar(55) not null,
  	primary key (id_usuario)
);

create table if not exists enderecos_usuario (
  	id_endereco_usuario int not null AUTO_INCREMENT,
  	id_usuario int not null,
  	logradouro varchar(255) not null,
  	numero varchar(45) not null, 
  	cidade varchar(255) not null,
  	uf varchar(2) not null,
  	cep varchar(45) not null,
  	bairro varchar(255) not null,
  	complemento	varchar(255),
  	primary key (id_endereco_usuario),
  	foreign key (id_usuario) references usuarios(id_usuario)  
);
