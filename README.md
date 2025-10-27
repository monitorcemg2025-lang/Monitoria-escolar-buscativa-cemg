# SEDUC Monitoria Escolar

## Descrição
Este projeto é uma aplicação web para gerenciar monitoria escolar, incluindo registro de horários, faltas, lista de alunos e geração de relatórios em PDF. Desenvolvido por Luiz Felipe em 2025.

## Estrutura do Projeto
- `index.html`: Página de login.
- `main.html`: Registro de horários do monitor.
- `absences.html`: Registro de faltas dos alunos.
- `students.html`: Lista de alunos com opção de copiar nomes.
- `reports.html`: Geração de relatórios em PDF.
- `css/styles.css`: Estilização global.
- `js/`: Diretório com scripts JavaScript.
  - `auth.js`: Lógica de autenticação.
  - `schedules.js`: Gerenciamento de horários.
  - `absences.js`: Gerenciamento de faltas.
  - `students.js`: Gerenciamento da lista de alunos.
  - `reports.js`: Geração de PDFs.
- `data/mock-api.json`: Dados de autenticação simulados.
- `README.md`: Este arquivo.

## Como Usar
1. Clone o repositório ou copie os arquivos para um diretório local.
2. Certifique-se de ter um servidor web local (ex.: Live Server no VS Code) para testar, pois o `fetch` requer um ambiente de servidor.
3. Abra `index.html` no navegador.
4. Faça login com um dos usuários do `mock-api.json` (ex.: `Luiz` / `28012006`).
5. Navegue pelas páginas para registrar horários, faltas, visualizar alunos ou gerar relatórios.

## Dependências
- `jspdf` e `jspdf-autotable` (carregados via CDN).

## Notas
- O limite de armazenamento em `localStorage` é de 1000 entradas por tipo (horários e faltas).
- Os relatórios em PDF incluem o nome da escola em texto normal, sem brasão.
- Para atualizar no Render.com, faça um `git push` e acompanhe os logs de deploy.

## Solução de Problemas
- Se o PDF não for gerado, verifique o console (F12 > Console) para erros e garanta que haja dados no localStorage.
- Certifique-se de que a conexão com a internet está ativa para carregar os scripts do CDN.
