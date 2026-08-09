# Farol da Acessibilidade

Site acadêmico que funciona ao mesmo tempo como apresentação, relatório comparativo, dinâmica de votação ao vivo e página de entrega dos relatórios Lighthouse. A análise compara o GOV.BR, o Mercado Livre e o site **Tipos de Interfaces de Usuário**, desenvolvido pela equipe na Atividade 05.

O projeto é independente: não carrega arquivos do trabalho anterior por caminhos externos. A identidade visual e o logo do IFRR foram copiados para esta pasta.

## Tecnologias

- HTML semântico, CSS e JavaScript puro;
- Firebase Hosting;
- Cloud Firestore com listeners `onSnapshot()`;
- Firebase JavaScript SDK modular via CDN oficial;
- Lenis distribuído localmente para rolagem inercial no desktop, com movimento reduzido e toque nativo respeitados;
- internacionalização local em português, inglês e espanhol, com preferência persistida no navegador;
- capturas otimizadas em WebP com dimensões intrínsecas declaradas no HTML;
- Node.js apenas para extrair dados dos relatórios durante o desenvolvimento.

## Estrutura principal

```text
.
├── index.html
├── css/style.css
├── js/
│   ├── main.js
│   ├── i18n.js
│   ├── hero-visuals.js
│   ├── splash.js
│   ├── settings.js
│   ├── voting.js
│   ├── lighthouse.js
│   ├── firebase-config.js
│   └── config.js
├── data/lighthouse-results.json
├── img/sites/
│   └── optimized/ (variantes WebP responsivas)
├── img/animacao.svg
├── libs/lenis/
├── documentos/
├── scripts/extract-lighthouse-reports.mjs
├── firebase.json
├── firestore.rules
└── firestore.indexes.json
```

## Dados reais extraídos

| Site | Desempenho | Acessibilidade | Práticas recomendadas | SEO |
|---|---:|---:|---:|---:|
| Site da equipe | 100 | 100 | 100 | 100 |
| GOV.BR | 54 | 92 | 58 | 100 |
| Mercado Livre | 68* | 89 | 54 | 100 |

\* O relatório do Mercado Livre avisa que extensões do Chrome afetaram negativamente a medição de desempenho. O foco da atividade é acessibilidade.

O script de extração lê `window.__LIGHTHOUSE_JSON__`, gera [data/lighthouse-results.json](data/lighthouse-results.json) e salva a captura final de cada relatório em `img/sites/`. Os HTMLs originais não são modificados.

Para repetir a extração depois de trocar um relatório:

```bash
npm run extract
```

## Executar localmente

Módulos JavaScript e o arquivo JSON precisam ser servidos por HTTP; não abra o `index.html` diretamente com `file://`.

Opção simples, com Node.js:

```bash
npx serve .
```

Depois, abra o endereço mostrado no terminal. Para simular a rota do apresentador, acesse `/admisrael98839` nesse mesmo endereço. Caso o servidor escolhido não faça fallback de rotas, use os emuladores do Firebase depois de instalar e configurar a CLI:

```bash
firebase emulators:start --only hosting,firestore
```

Sem configuração do Firebase, a votação mostra “Dinâmica temporariamente indisponível” e o restante da apresentação fica liberado para desenvolvimento.

## Preferências de acessibilidade

O botão **Configurar site** expande um painel acessível sobre o conteúdo, acoplado ao cabeçalho, com escala de texto, contraste reforçado, alto contraste, maior espaçamento de texto, destaque de links e controle da rolagem suave. O tema claro ou escuro continua disponível no botão próprio do cabeçalho. As escolhas são aplicadas em tempo real ao site inteiro e persistidas no `localStorage` sob a chave `farolAccessibilitySettings`.

O painel não bloqueia a página, fecha com `Esc`, devolve o foco ao controle adequado e pode restaurar todas as preferências ao padrão.

## Visual da abertura

A abertura usa `img/animacao.svg` em tela cheia por aproximadamente três segundos, incluindo a transição suave para o conteúdo. Para quem prefere movimento reduzido, a espera é praticamente eliminada. O hero exibe a ilustração original `HeroLighthouse`, sem animação.

## Configurar o Firebase

1. Crie um projeto em <https://console.firebase.google.com/> sem ativar serviços pagos.
2. Em **Configurações do projeto > Seus aplicativos**, registre um aplicativo Web.
3. Ative o **Cloud Firestore**.
4. Copie o objeto de configuração pública do aplicativo para `FIREBASE_CONFIG` em `js/firebase-config.js`.
5. Confirme que `.firebaserc` aponta para o projeto `farol-da-acessibilidade`.
6. Instale e autentique a Firebase CLI:

```bash
npm install -g firebase-tools
firebase login
firebase use --add
```

7. Publique as regras e o site:

```bash
firebase deploy --only firestore:rules,hosting
```

A configuração Web do Firebase é pública por natureza. Não coloque service accounts, chaves privadas, tokens ou arquivos JSON de credenciais no repositório.

### Documento de controle

Na primeira abertura da rota do apresentador, o site cria automaticamente:

```text
presentation/control
```

Com os campos `sessionId`, `voteStatus`, `resultsVisible`, `lighthouseVisible` e `updatedAt`. Cada voto fica em:

```text
sessions/{sessionId}/votes/{deviceId}
```

O identificador aleatório do navegador é salvo em `localStorage`. Atualizar ou reabrir a página não libera outro voto na mesma sessão.

## Visitante e apresentador

- `/` — apresentação no modo visitante, sem controles administrativos;
- `/admisrael98839` — a mesma apresentação com a seção extra **Controle da dinâmica**.

A rota administrativa não aparece em menus, links ou rodapé. Ela apenas dificulta acesso casual. Como o requisito não usa Firebase Authentication, ela **não representa segurança de produção**. As regras validam a estrutura dos dados, impedem alteração/exclusão de votos e só aceitam votos durante uma sessão aberta, mas o documento de controle precisa aceitar escrita pública para que os botões dessa rota funcionem. Em um projeto público real, proteja o controle com autenticação e uma claim de administrador.

## Conduzir uma votação

1. Abra `/admisrael98839` no computador da apresentação.
2. Clique em **Abrir votação**.
3. Compartilhe a URL normal `/` com a turma.
4. Acompanhe o contador de votos em tempo real.
5. Clique em **Encerrar votação**.
6. Clique em **Revelar resultado da turma**.
7. Depois da discussão, clique em **Revelar resultado do Lighthouse**.

As seções que entregam as notas permanecem ocultas até o último passo. Os gráficos são calculados somente com votos reais da sessão.

### Nova sessão e limpeza de testes

O botão **Nova sessão** pede uma segunda confirmação e muda o `sessionId`. Os votos antigos continuam preservados no Firestore, mas deixam de entrar na contagem atual.

Para apagar dados de teste, use o Console do Firebase e exclua manualmente os documentos da subcoleção `sessions/{id}/votes`. A interface não oferece exclusão para reduzir o risco de cliques acidentais. Para testar novamente no mesmo navegador e na mesma sessão, também remova as chaves `accessibilityVotingDeviceId` e `accessibilityVotedSessions` no armazenamento local das ferramentas de desenvolvedor.

## Links do Drive e GitHub

Edite apenas `js/config.js`:

```js
export const LINKS = {
  driveReports: "https://...",
  githubRepository: "https://...",
};
```

Enquanto os campos estiverem vazios, a página informa que os links serão disponibilizados em breve e não cria links quebrados.

Não há arquivo ZIP em `documentos` no momento. Antes da entrega, compacte os três relatórios, envie o ZIP ao Google Drive e preencha `driveReports`. Se o ZIP também for colocado no projeto, adicione seu link na seção de relatórios.

## GitHub e deploy automático

Crie um repositório próprio e envie o projeto:

```bash
git init
git add .
git commit -m "feat: cria apresentação Farol da Acessibilidade"
git branch -M main
git remote add origin URL_DO_REPOSITORIO
git push -u origin main
```

Depois execute a integração oficial do Firebase Hosting:

```bash
firebase init hosting:github
```

Durante o assistente:

1. selecione o projeto Firebase correto;
2. informe `.` como diretório público, pois este projeto estático está na raiz;
3. confirme a configuração como aplicação de página única;
4. não sobrescreva o `index.html` existente;
5. escolha o repositório GitHub;
6. configure deploy ao mesclar na branch `main`;
7. permita que a CLI crie no GitHub os secrets e workflows específicos do projeto.

Não copie manualmente o conteúdo dos secrets para arquivos do repositório. Depois da integração, cada `git push` na `main` dispara o deploy.

## Testes recomendados antes da apresentação

- abrir `/` em uma janela normal e `/admisrael98839` em outra;
- testar os estados fechada, aberta, encerrada e ambas as revelações;
- votar em celulares diferentes e confirmar a contagem ao vivo;
- tentar selecionar o mesmo site como melhor e pior;
- atualizar a página após votar e confirmar o bloqueio;
- navegar com `Tab`, `Shift+Tab`, `Enter`, `Espaço` e `Esc` no menu móvel;
- testar em 390 px, 412 px, tablet, 1366 × 768 e 1920 × 1080;
- executar o Lighthouse em janela anônima, sem extensões interferindo.

## Privacidade

A dinâmica solicita somente nome, melhor site, pior site e um UUID aleatório local. Não coleta IP, localização, e-mail, telefone ou fingerprint. Os nomes não são mostrados nos resultados públicos. Como os clientes leem os documentos para calcular a contagem sem backend pago, os dados da sessão devem ser tratados como uma dinâmica acadêmica de baixo risco e removidos após a atividade.
