# frontend-test-tallos
```
Este é um projeto para controle de funcionários usando VueJS, Vuex e Vuetify, solicitado pela empresa Tallos. O objetivo é em consumir uma API protegida pelo método de autenticação JWT e limitando as ações de cada usuário. (API: https://github.com/p4uloe/crud-teste)
```
## Instalando as dependências e rodar o projeto
```
npm install && npm run serve
```

### Ultilizar o docker
```
docker-compose up --build
```

### Observações do sistema
```
Observações sobre o sistema
- O Administrador possui acesso a todas as funcionalidades
- O Gerente possui acesso a todas as funcionalidades, exeto a de deletar outros funcionários
- O Gerente não pode cadastrar um Administrador, nem editar o cargo de um funcionário para Administrador
- O Usuário tem acesso somente a leitura dos dados
- Obs.: O sistema esta um pouco lento, ainda não consegui solucionar, ao realizar o login, só aguardar.
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
