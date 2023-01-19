
# Backend Challenge Innovations

## - Descrição


Desenvolvimento de um CRUD de uma WEB API para gerenciamento de uma loja com endpoints para listagem, cadastro, atualização e remoção de produtos. 

## - Processo de desenvolvimento
Para este desafio usei o Typescript e usei o banco de dados Mysql e o Insomnia como ferramenta para testar o retorno da API.


## - Instalação
Após clonar este repositório rode o comando:

```bash
$ npm install
```
## - Banco de dados


Essa aplicação persiste seus dados no banco Mysql, para isto usei o Workbench para controle e gerenciamento do database.



## - Rodando a API

```bash
# development
$ tsnd index.ts


# build
$ tsc --build



```


## - Documentação

| URL Base  | Endereços                     |
| --------  | ----------------------------- | 
| Local     |  http://localhost:8000 -> ou :PORT(.env) 


### Rotas
| Methods | Endpoint                      | Responsability                        
| --------| ----------------------------- | --------------------------------------  |
| POST    |  /users                       | Rota para criar um usuário              |
| POST    |  /products                    | Rota para criar um produto              |
| GET     |  /products                    | Rota para acessar todos produtos        |
| GET     |  /users                       | Rota para acessar todos usuários        |
| GET     |  /users/id                    | Rota para acessar um usuário especifico | 

#

## - Requisições

## POST  - /users
Campos obrigatórios: 'name', 'email'
<br>Exemplo de requisição:

```json
{
    "id": 1, 
    "name":"Jessy Alvarez",
    "email":"jalvarez@geefi.com",
    
}
```


## POST - /products

Campos obrigatórios: 'name', 'category', 'status', 'quantity'



```json
{	
    "id": 3,
    "name": "violao nylon",
    "category": "Musica",
    "status": "Active",
    "quantity": 56
}


```

## GET - /products


```json
[
  {
     "id": 3,
    "name": "mesa portatil",
    "category": "Moveis",
    "status": "Active",
    "quantity": 13
  },
  {
     "id": 29,
    "name": "estante 3 prateleiras",
    "category": "Moveis",
    "status": "Inactive",
    "quantity": 00
  },
  {
     "id": 46,
    "name": "Mouse ergonomico",
    "category": "Eletronics",
    "status": "Active",
    "quantity": 21
  }
]

```

## GET  - /users
Retorna todos usuarios cadastrados.

```json
[
  {
    "id": 6,
    "name": "Larissa Saldanha",
    "email": "larisaldanha@gmail.com"
  },
  {
    "id": 14,
    "name": "Paulo Zozimo",
    "email": "pzozimo@gmail.com"
  },
  {
    "id": 26,
    "name": "Pietra Stranovsky",
    "email": "pstranovsky@gmail.com"
  }
  
]
```


## GET  - /users/id

```json

 {  
    "name": "Pietra",
    "email": "pstranovsky@gmail.com"
  }

```

