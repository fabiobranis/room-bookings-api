# Banana Inc App

Para facilitar os testes eu criei um workspace no Insomnia.

É só acessar 
<a href="https://res.cloudinary.com/dhbfhsmzo/raw/upload/v1560694908/room-bookings-api_idl907.json" target="_blank">Workspace Insominia</a>
e copiar e importar o conteúdo.

Acesse o Insominia <a href="https://insomnia.rest/download/" target="_blank">aqui</a> para baixar.
 

## Como rodar a aplicação

Pré requisitos:

* Node.js 12.3.1 ou superior
* NPM 6.9.0 ou superior
* Sqlite 3.22 ou superior

Faça um clone desse repositório.

Renomeie o .env.example para apenas .env (ele já está com a comfiguração correta)

Rode `npm install` para instalar as dependências.

Entre na pasta raiz da aplicação e rode `npm run start`.

No console você já vai ter a porta onde a aplicação está rodando.


## Sobre a API

A API utiliza as Specs básicas de uma API rest.

É uma json API com um endpoint de autenticação.

A autenticação nos endpoints protegidos deve ser feita se utilizando do Bearer token enviado pelo endpoint de 
autenticação.

##Endpoints

### Autenticação

#####Criar novo usuário:
```
POST: sua_url/users
```

```JSON
{
	"username": "user",
	"email": "user@user.com",
	"password": "123456"
}
```
Retorno(200):

```JSON
{
  "username": "user",
  "email": "user@user.com",
  "password": "$2a$10$6NBWW76vZ7.NY6qzmWcp1u3Tij9wlhCIKFIJlGyXb1wKJPO/PVNGi",
  "created_at": "2019-06-15 16:09:43",
  "updated_at": "2019-06-15 16:09:43",
  "id": 1
}
```

#####Autenticação:

```
POST: sua_url/auth
```

```JSON
{
	"email": "user@user.com",
	"password": "123456"
}
```
Retorno(200):

```JSON
{
  "type": "bearer",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU2MDYyNjAyNX0.FBEegP-24G920xskz2MWMw6hNyZ1JTMm69Bt9OsR7Ik",
  "refreshToken": null
}
```

#####Locais:

Criar:

```
POST: sua_url/locations
```

```JSON
{
	"name": "Watermelon Inc.",
	"description": "The awesome Watermelon Inc"
}
```
Retorno(200):

```JSON
{
  "name": "Watermelon Inc.",
  "description": "The awesome Watermelon Inc",
  "created_at": "2019-06-16 10:49:29",
  "updated_at": "2019-06-16 10:49:29",
  "id": 4
}
```
Retorno(422) - Quando há validação:

```JSON
[
  {
    "message": "O nome do local informado já está em uso",
    "field": "name",
    "validation": "unique"
  }
]
```

Atualizar:

```
PUT/PATCH: sua_url/locations/:id
```

```JSON
{
	"name": "Banana Inc.",
	"description": "The awesome Banana Inc - Updated again"
}
```
Retorno(200):

```JSON
{
  "id": 1,
  "name": "Banana Inc.",
  "description": "The awesome Banana Inc - Updated again",
  "created_at": "2019-06-15 16:17:22",
  "updated_at": "2019-06-15 16:29:48"
}
```

Excluir:

```
DELETE: sua_url/locations/:id
```
Retorno(204):

A API retorna o status 204, que significa que a ação foi executada mas não há conteúdo de retorno.

Retorno(404):

A API retorna 404 quando não existe o id para exclusão.

Mostrar:

```
Get: sua_url/locations/:id
```
Retorno(200):

```JSON
{
  "id": 1,
  "name": "Banana Inc.",
  "description": "The awesome Banana Inc - Updated again",
  "created_at": "2019-06-15 16:17:22",
  "updated_at": "2019-06-15 16:29:48"
}
```

Listar Todas:

```
Get: sua_url/locations
```
Retorno(200):

```JSON
[
  {
    "id": 1,
    "name": "Banana Inc.",
    "description": "The awesome Banana Inc - Updated again",
    "created_at": "2019-06-15 16:17:22",
    "updated_at": "2019-06-15 16:29:48"
  },
  {
    "id": 3,
    "name": "Apple Inc.",
    "description": "The awesome Apple Inc",
    "created_at": "2019-06-15 18:05:14",
    "updated_at": "2019-06-15 18:05:14"
  },
  {
    "id": 4,
    "name": "Watermelon Inc.",
    "description": "The awesome Watermelon Inc",
    "created_at": "2019-06-16 10:49:29",
    "updated_at": "2019-06-16 10:49:29"
  }
]
```
Listar com paginação:

```
Get: sua_url/locations?page={number}
```
Retorno(200):

```JSON
{
  "total": 3,
  "perPage": 20,
  "page": 1,
  "lastPage": 1,
  "data": [
    {
      "id": 1,
      "name": "Banana Inc.",
      "description": "The awesome Banana Inc - Updated again",
      "created_at": "2019-06-15 16:17:22",
      "updated_at": "2019-06-15 16:29:48"
    },
    {
      "id": 3,
      "name": "Apple Inc.",
      "description": "The awesome Apple Inc",
      "created_at": "2019-06-15 18:05:14",
      "updated_at": "2019-06-15 18:05:14"
    },
    {
      "id": 4,
      "name": "Watermelon Inc.",
      "description": "The awesome Watermelon Inc",
      "created_at": "2019-06-16 10:49:29",
      "updated_at": "2019-06-16 10:49:29"
    }
  ]
}
```

#####Salas:

Criar:

```
POST: sua_url/rooms
```

```JSON
{
	"location_id": 1,
	"name": "Meeting Room 10",
	"description": "The meeting room in the second floor"
}
```
Retorno(200):

```JSON
{
  "location_id": 1,
  "name": "Meeting Room 10",
  "description": "The meeting room in the second floor",
  "created_at": "2019-06-16 11:03:29",
  "updated_at": "2019-06-16 11:03:29",
  "id": 6
}
```
Retorno(422) - Quando há validação:

```JSON
[
  {
    "message": "O nome da sala informado já está em uso",
    "field": "name",
    "validation": "unique"
  }
]
```

Atualizar:

```
PUT/PATCH: sua_url/rooms/:id
```

```JSON
{
	"location_id": 1,
	"name": "Meeting Room 1",
	"description": "The meeting room in the first floor - updated"
}
```
Retorno(200):

```JSON
{
  "id": 1,
  "location_id": 1,
  "name": "Meeting Room 1",
  "description": "The meeting room in the first floor - updated",
  "created_at": "2019-06-15 17:02:59",
  "updated_at": "2019-06-15 17:03:05"
}
```

Excluir:

```
DELETE: sua_url/rooms/:id
```
Retorno(204):

A API retorna o status 204, que significa que a ação foi executada mas não há conteúdo de retorno.

Retorno(404):

A API retorna 404 quando não existe o id para exclusão.

Mostrar:

```
Get: sua_url/rooms/:id
```
Retorno(200):

```JSON
{
  "id": 1,
  "location_id": 1,
  "name": "Meeting Room 1",
  "description": "The meeting room in the first floor - updated",
  "created_at": "2019-06-15 17:02:59",
  "updated_at": "2019-06-15 17:03:05"
}
```

Listar Todos:

```
Get: sua_url/rooms
```
Retorno(200):

```JSON
[
  {
    "id": 1,
    "location_id": 1,
    "name": "Meeting Room 1",
    "description": "The meeting room in the first floor - updated",
    "created_at": "2019-06-15 17:02:59",
    "updated_at": "2019-06-15 17:03:05"
  },
  {
    "id": 3,
    "location_id": 1,
    "name": "Meeting Room 2",
    "description": "The meeting room in the second floor",
    "created_at": "2019-06-15 19:10:24",
    "updated_at": "2019-06-15 19:10:24"
  },
  {
    "id": 6,
    "location_id": 1,
    "name": "Meeting Room 10",
    "description": "The meeting room in the second floor",
    "created_at": "2019-06-16 11:03:29",
    "updated_at": "2019-06-16 11:03:29"
  }
]
```
Listar com paginação:

```
Get: sua_url/rooms?page={number}
```
Retorno(200):

```JSON
{
  "total": 3,
  "perPage": 20,
  "page": 1,
  "lastPage": 1,
  "data": [
    {
      "id": 1,
      "location_id": 1,
      "name": "Meeting Room 1",
      "description": "The meeting room in the first floor - updated",
      "created_at": "2019-06-15 17:02:59",
      "updated_at": "2019-06-15 17:03:05",
      "location": {
        "id": 1,
        "name": "Banana Inc.",
        "description": "The awesome Banana Inc - Updated again",
        "created_at": "2019-06-15 16:17:22",
        "updated_at": "2019-06-15 16:29:48"
      }
    },
    {
      "id": 3,
      "location_id": 1,
      "name": "Meeting Room 2",
      "description": "The meeting room in the second floor",
      "created_at": "2019-06-15 19:10:24",
      "updated_at": "2019-06-15 19:10:24",
      "location": {
        "id": 1,
        "name": "Banana Inc.",
        "description": "The awesome Banana Inc - Updated again",
        "created_at": "2019-06-15 16:17:22",
        "updated_at": "2019-06-15 16:29:48"
      }
    },
    {
      "id": 6,
      "location_id": 1,
      "name": "Meeting Room 10",
      "description": "The meeting room in the second floor",
      "created_at": "2019-06-16 11:03:29",
      "updated_at": "2019-06-16 11:03:29",
      "location": {
        "id": 1,
        "name": "Banana Inc.",
        "description": "The awesome Banana Inc - Updated again",
        "created_at": "2019-06-15 16:17:22",
        "updated_at": "2019-06-15 16:29:48"
      }
    }
  ]
}
```

#####Agendamentos:

Criar:

```
POST: sua_url/bookings
```

```JSON
{
	"room_id": 1,
	"schedule_start": "2019-06-14 13:00:00",
	"schedule_end": "2019-06-14 13:30:00",
	"accountable": "Mr Branis",
	"is_coffee": true,	
	"participants": 6,
	"description": "Brainstorm Meeting 1"
}
```
Retorno(200):

```JSON
{
  "room_id": 1,
  "schedule_start": "2019-06-14 13:00:00",
  "schedule_end": "2019-06-14 13:30:00",
  "accountable": "Mr Branis",
  "is_coffee": true,
  "participants": 6,
  "description": "Brainstorm Meeting 1",
  "created_at": "2019-06-16 09:55:40",
  "updated_at": "2019-06-16 09:55:40",
  "id": 13
}
```
Retorno(422) - Quando há validação:

```JSON
[
  {
    "message": "Existe(m) agendamento(s) na faixa de horário informado para a sala informada",
    "field": "schedule_start",
    "validation": "bookingsCollisions"
  }
]
```

Atualizar:

```
PUT/PATCH: sua_url/bookings/:id
```

```JSON
{
	"room_id": 1,
	"schedule_start": "2019-06-14 08:00:00",
	"schedule_end": "2019-06-14 09:00:00",
	"accountable": "Mr Branis",
	"is_coffee": 1,
	"participants": 6,
	"description": "Brainstorm Meeting 1"
}
```
Retorno(200):

```JSON
{
  "id": 9,
  "room_id": 1,
  "schedule_start": "2019-06-14 08:00:00",
  "schedule_end": "2019-06-14 09:00:00",
  "accountable": "Mr Branis",
  "is_coffee": 1,
  "participants": 6,
  "description": "Brainstorm Meeting 1",
  "created_at": "2019-06-15 19:46:36",
  "updated_at": "2019-06-15 19:46:36"
}
```

Excluir:

```
DELETE: sua_url/bookings/:id
```
Retorno(204):

A API retorna o status 204, que significa que a ação foi executada mas não há conteúdo de retorno.

Retorno(404):

A API retorna 404 quando não existe o id para exclusão.

Mostrar:

```
Get: sua_url/bookings/:id
```
Retorno(200):

```JSON
{
  "id": 9,
  "room_id": 1,
  "schedule_start": "2019-06-14 08:00:00",
  "schedule_end": "2019-06-14 09:00:00",
  "accountable": "Mr Branis",
  "is_coffee": 1,
  "participants": 6,
  "description": "Brainstorm Meeting 1",
  "created_at": "2019-06-15 19:46:36",
  "updated_at": "2019-06-15 19:46:36"
}
```

Listar Todos:

```
Get: sua_url/bookings
```
Retorno(200):

```JSON
[
  {
    "id": 9,
    "room_id": 1,
    "schedule_start": "2019-06-14 08:00:00",
    "schedule_end": "2019-06-14 09:00:00",
    "accountable": "Mr Branis",
    "is_coffee": 1,
    "participants": 6,
    "description": "Brainstorm Meeting 1",
    "created_at": "2019-06-15 19:46:36",
    "updated_at": "2019-06-15 19:46:36"
  },
  {
    "id": 10,
    "room_id": 1,
    "schedule_start": "2019-06-14 09:00:00",
    "schedule_end": "2019-06-14 10:00:00",
    "accountable": "Mr Branis",
    "is_coffee": 1,
    "participants": 6,
    "description": "Brainstorm Meeting 1",
    "created_at": "2019-06-15 19:46:51",
    "updated_at": "2019-06-15 19:46:51"
  },
  {
    "id": 11,
    "room_id": 1,
    "schedule_start": "2019-06-14 11:00:00",
    "schedule_end": "2019-06-14 12:00:00",
    "accountable": "Mr Branis",
    "is_coffee": 1,
    "participants": 6,
    "description": "Brainstorm Meeting 1",
    "created_at": "2019-06-15 19:46:59",
    "updated_at": "2019-06-15 19:46:59"
  },
  {
    "id": 12,
    "room_id": 1,
    "schedule_start": "2019-06-14 12:00:00",
    "schedule_end": "2019-06-14 13:00:00",
    "accountable": "Mr Branis",
    "is_coffee": 1,
    "participants": 6,
    "description": "Brainstorm Meeting 1",
    "created_at": "2019-06-15 20:59:01",
    "updated_at": "2019-06-15 20:59:01"
  },
  {
    "id": 13,
    "room_id": 1,
    "schedule_start": "2019-06-14 13:00:00",
    "schedule_end": "2019-06-14 13:30:00",
    "accountable": "Mr Branis",
    "is_coffee": 1,
    "participants": 6,
    "description": "Brainstorm Meeting 1",
    "created_at": "2019-06-16 09:55:40",
    "updated_at": "2019-06-16 09:55:40"
  }
]
```
Listar com paginação:

```
Get: sua_url/bookings?page={number}
```
Retorno(200):

```JSON
{
  "total": 5,
  "perPage": 20,
  "page": 1,
  "lastPage": 1,
  "data": [
    {
      "id": 9,
      "room_id": 1,
      "schedule_start": "2019-06-14 08:00:00",
      "schedule_end": "2019-06-14 09:00:00",
      "accountable": "Mr Branis",
      "is_coffee": 1,
      "participants": 6,
      "description": "Brainstorm Meeting 1",
      "created_at": "2019-06-15 19:46:36",
      "updated_at": "2019-06-15 19:46:36",
      "room": {
        "id": 1,
        "location_id": 1,
        "name": "Meeting Room 1",
        "description": "The meeting room in the first floor - updated",
        "created_at": "2019-06-15 17:02:59",
        "updated_at": "2019-06-15 17:03:05",
        "location": {
          "id": 1,
          "name": "Banana Inc.",
          "description": "The awesome Banana Inc - Updated again",
          "created_at": "2019-06-15 16:17:22",
          "updated_at": "2019-06-15 16:29:48"
        }
      }
    },
    {
      "id": 10,
      "room_id": 1,
      "schedule_start": "2019-06-14 09:00:00",
      "schedule_end": "2019-06-14 10:00:00",
      "accountable": "Mr Branis",
      "is_coffee": 1,
      "participants": 6,
      "description": "Brainstorm Meeting 1",
      "created_at": "2019-06-15 19:46:51",
      "updated_at": "2019-06-15 19:46:51",
      "room": {
        "id": 1,
        "location_id": 1,
        "name": "Meeting Room 1",
        "description": "The meeting room in the first floor - updated",
        "created_at": "2019-06-15 17:02:59",
        "updated_at": "2019-06-15 17:03:05",
        "location": {
          "id": 1,
          "name": "Banana Inc.",
          "description": "The awesome Banana Inc - Updated again",
          "created_at": "2019-06-15 16:17:22",
          "updated_at": "2019-06-15 16:29:48"
        }
      }
    },
    {
      "id": 11,
      "room_id": 1,
      "schedule_start": "2019-06-14 11:00:00",
      "schedule_end": "2019-06-14 12:00:00",
      "accountable": "Mr Branis",
      "is_coffee": 1,
      "participants": 6,
      "description": "Brainstorm Meeting 1",
      "created_at": "2019-06-15 19:46:59",
      "updated_at": "2019-06-15 19:46:59",
      "room": {
        "id": 1,
        "location_id": 1,
        "name": "Meeting Room 1",
        "description": "The meeting room in the first floor - updated",
        "created_at": "2019-06-15 17:02:59",
        "updated_at": "2019-06-15 17:03:05",
        "location": {
          "id": 1,
          "name": "Banana Inc.",
          "description": "The awesome Banana Inc - Updated again",
          "created_at": "2019-06-15 16:17:22",
          "updated_at": "2019-06-15 16:29:48"
        }
      }
    },
    {
      "id": 12,
      "room_id": 1,
      "schedule_start": "2019-06-14 12:00:00",
      "schedule_end": "2019-06-14 13:00:00",
      "accountable": "Mr Branis",
      "is_coffee": 1,
      "participants": 6,
      "description": "Brainstorm Meeting 1",
      "created_at": "2019-06-15 20:59:01",
      "updated_at": "2019-06-15 20:59:01",
      "room": {
        "id": 1,
        "location_id": 1,
        "name": "Meeting Room 1",
        "description": "The meeting room in the first floor - updated",
        "created_at": "2019-06-15 17:02:59",
        "updated_at": "2019-06-15 17:03:05",
        "location": {
          "id": 1,
          "name": "Banana Inc.",
          "description": "The awesome Banana Inc - Updated again",
          "created_at": "2019-06-15 16:17:22",
          "updated_at": "2019-06-15 16:29:48"
        }
      }
    },
    {
      "id": 13,
      "room_id": 1,
      "schedule_start": "2019-06-14 13:00:00",
      "schedule_end": "2019-06-14 13:30:00",
      "accountable": "Mr Branis",
      "is_coffee": 1,
      "participants": 6,
      "description": "Brainstorm Meeting 1",
      "created_at": "2019-06-16 09:55:40",
      "updated_at": "2019-06-16 09:55:40",
      "room": {
        "id": 1,
        "location_id": 1,
        "name": "Meeting Room 1",
        "description": "The meeting room in the first floor - updated",
        "created_at": "2019-06-15 17:02:59",
        "updated_at": "2019-06-15 17:03:05",
        "location": {
          "id": 1,
          "name": "Banana Inc.",
          "description": "The awesome Banana Inc - Updated again",
          "created_at": "2019-06-15 16:17:22",
          "updated_at": "2019-06-15 16:29:48"
        }
      }
    }
  ]
}
```


## Sobre a Aplicação

Este é um app que faz reservas de salas baseadas em um Local determinado.
O objetivo do App é apenas demonstrar minhas habilidades com node.js.
Eu utilizo as seguintes tecnologias:

* Node.js (12.3.1 ou superior)
* Adonisjs (4.1)
* Sqlite (3.22.0 ou superior)

Este repositório já vem com um banco de dados com informações para fins apenas de avaliação.

Você pode apagar o banco de dados e rodar as migrations se quiser para ver como o adonis trabalha com o banco de dados.

### Porquê o Adonisjs

De todos os frameworks de Node.js o Adonis é o mais simples para se fazer uma aplicação com prazo curto, pois o adonis 
já conta com uma estrutura pré definida para trabalhar com migrations, models, controllers, rotas e middlewares.

Além disso, o código com Adonis fica bem simples e legível, basta ter um conhecimento de como um container de injeção
de dependências por inversão de controle funciona.

O Adonis se utiliza de common js (perceptível na forma como são exportadas as classes e funções) mas devido ao seu 
IoC ele tem uma função chamada use() para importar as dependências dentro das classes.

Do ponto de vista de engenharia e arquitetura de software, o Adonis ajuda muito.

Muitos podem reclamar que o framework é muito opnionated, mas a vantagem disso se resume ao fato 
de que o Adonis usa bibliotecas mantidas por uma comunidade de devs, que recebem atualizações constantes.

Isso ajuda o time que vai implementar algum sistema ou micro serviço a não perder tempo reinventando a roda.

### Migrations

Para esta aplicação, eu criei as migrations no padrão do Adonis dentro da pasta database/migrations.

A vantagem disso fica por conta de que para cada nova tabela criada o sistema vai versionando o que você fez.

Isso também ajuda nas atualizações das tabelas, visto que ao criar campos novos das tabelas você deve colocar em novas 
migrations.

Se for necessário fazer um rollback, com esse sistema fica bem fácil.

Para rodar as migrations, apenas rode o comando:

```js
adonis migration:run
```

##Sobre a estrutura da aplicação

O MER da aplicação está conforme a imagem abaixo:

<img src="https://res.cloudinary.com/dhbfhsmzo/image/upload/v1560690037/Banana_Inc_-_rooms_bookings_MER_th1095.png">

Eu optei por separar os modelos ao invés de criar enums para representar as localizações e salas.

Isso porque do ponto de vista de normalização do banco e boas práticas, usar esses modelos como enum seria uma coisa
impraticável.

Os relacionamentos são bem simples e apenas servem para demonstrar como eu penso para abstrair uma determinada ideia 
concreta que foi proposta por alguém (stackeholder ou cliente) e transformo em modelo.

Gosto de usar modelos diagramados e documentar bem as ideias para que posteriormente seja mais fácil manter a aplicação.

## Sobre o código

Com relação ao código o Adonis implementa o ES6.

Com isso temos o uso de classes e herança na aplicação.

Por mais que o Adonis seja um framework bem opinativo no que deve ser feito, é sempre muito necessário fazer uma boa
avaliação de como vai ser a arquitetura do sistema.

Por isso, além da estrutura básica de MVC eu optei pelos seguintes pontos na aplicação:

* Uso de services para acessar a camada de modelo da aplicação
* Como o ORM é Active Record, e dada a natureza trivial da aplicação, eu não me utilizei de repositories
* Validação do modelo de dados através de requests de acordo com o padrão do framework

Para entender cada ponto:

1 - Cada modelo tem uma service específica, que deve ser injetada na classe controller da aplicação. Dessa maneira eu
evito um controller lotado de lógica de aplicações, fazendo com que o controller apenas delegue o que deve ser feito.
As services dessa aplicação são bem simples, então não me preocupei em elaborar utilizando um pattern de Strtegy, pois 
seria um uso exagerado de design patterns para algo simples.

2 - Com ORM implementando Active Record, é desnecessário eu incluir repository pattern para acessar dados, visto que
o Active Record já abstrai bem a camada de dados para o programador que vai usar dele. Outra coisa importante é o fato 
de que usar Repository com Active Record é 'over use' de design patterns, pois o Active Record (sendo o antipattern que
fere o princípio da responsabilidade única) já conhece a implementação do banco, então não preciso de um entity manager
que seria a chave para o uso de Repository para que as models possam ser utilizadas no contexto do banco. (eu já tive 
longas discussões com o pessoal de Rails e Laravel por causa disso).

3 - No adonis, temos uma forma de injetar dependências de acordo com o contexto das rotas. Isso pode ser feito se 
utilizando de service providers (para resolver as classes/instâncias) e depois mapeando nas rotas quem são os validadores.
Dessa forma, eu apenas usei o padrão do framework.
Se vocês notarem, eu me utilizo de herança para aplicar o DRY (Do not repeat yourself) nas validações.

### Sobre a validação de colisão de horários

Esta validação foi a mais trabalhosa da aplicação, por mais que seja bem trivial.

Para exemplificar meus conhecimentos em SQL ( e devido a limitação do ORM) eu me utilizei de consultas
SQL literais.

Abaixo as duas consultas possíveis:

 ```SQL
 
SELECT id
FROM bookings
WHERE id IS NOT NULL
  AND room_id = 1
  AND ((schedule_start <= '2019-06-14 08:00:00'
        AND schedule_start > '2019-06-14 09:00:00')
       OR (schedule_end > '2019-06-14 08:00:00'
           AND schedule_end <= '2019-06-14 09:00:00'));

 ```

 ```SQL
 
SELECT id
FROM bookings
WHERE id <> 1
  AND room_id = 1
  AND ((schedule_start <= '2019-06-14 08:00:00'
        AND schedule_start > '2019-06-14 09:00:00')
       OR (schedule_end > '2019-06-14 08:00:00'
           AND schedule_end <= '2019-06-14 09:00:00'));

 ```


A primeira consulta valida a inclusão e a segunda a atualização. 

Para validar a data/hora eu utilizo um agrupamento de proposições, onde temos uma disjunção entre as avaliações de 
início e fim do agendamento. Com isso eu consigo verificar se a janela de tempo informada está dentro do tempo de um ou
mais agendamentos. 
