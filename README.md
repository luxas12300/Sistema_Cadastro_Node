# API de Agenda de Contatos

Esta éa documentação de requisitos para a API de Agenda de Contatos. Esta API permite aos usuários gerenciar contatos, categorizá-los e realizar operações de CRUD.

## Requisitos Funcionais

- [ ] Cadastro de Contatos
- [ ] Visualização de Contatos
- [ ] Atualização de Contatos
- [ ] Exclusão de Contatos

## Requisitos de Autenticação de Autorização

- [ ] Autenticação de Usuários
- [ ]Autorização de Acesso às Operações
- [ ] Criação de Usuários

## Regra de Negócios

- Os usuários devem ser cadastrados com nome e email
- O email deve ser uma chave única
- Os contatos devem conter pelo menos um nome e uma forma de contato (número de telefone, endereço de e-mail, etc.).
- Somente usuários autenticados podem executar operações de criação, atualização de exclusão de contatos.
- A autorizaçõa é baseada em funções de usuários, como administrador e usuário regular.
- Todos os dados da API devem ser armazenados de forma segura e protegidos contra acessos não autorizados.
- As entradas do usuário devem ser validadas para evitar a inserção de dados incorretos ou maliciosos.