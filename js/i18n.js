const LANGUAGE_KEY = "farolLanguage";
const SUPPORTED_LANGUAGES = ["pt-BR", "en", "es"];
const LANGUAGE_CODES = { "pt-BR": "PT", en: "EN", es: "ES" };
const LANGUAGE_NAMES = { "pt-BR": "Português", en: "English", es: "Español" };

const CATALOG = [
  ["Idioma", "Language", "Idioma"],
  ["Selecionar idioma PT. Atual: Português", "Select language PT. Current: Portuguese", "Seleccionar idioma PT. Actual: Portugués"],
  ["__language_button", "Select language {code}. Current: {language}", "Seleccionar idioma {code}. Actual: {language}"],
  ["__final_score", "Final score: {score}", "Puntuación final: {score}"],
  ["Português", "Portuguese", "Portugués"],
  ["Pular para o conteúdo principal", "Skip to main content", "Saltar al contenido principal"],
  ["Farol da Acessibilidade", "Accessibility Beacon", "Faro de Accesibilidad"],
  ["Farol da Acessibilidade — voltar ao início", "Accessibility Beacon — back to top", "Faro de Accesibilidad — volver al inicio"],
  ["Análise com Lighthouse", "Lighthouse analysis", "Análisis con Lighthouse"],
  ["Menu", "Menu", "Menú"],
  ["Navegação principal", "Main navigation", "Navegación principal"],
  ["Apresentação acadêmica sobre a análise comparativa de acessibilidade de três páginas web com o Lighthouse.", "Academic presentation on a comparative Lighthouse accessibility analysis of three web pages.", "Presentación académica sobre un análisis comparativo de accesibilidad de tres páginas web con Lighthouse."],
  ["Configurar site", "Configure site", "Configurar sitio"],
  ["Configuração", "Settings", "Configuración"],
  ["Sites", "Sites", "Sitios"],
  ["Dinâmica", "Activity", "Dinámica"],
  ["Análise", "Analysis", "Análisis"],
  ["Relatórios", "Reports", "Informes"],
  ["Ativar tema escuro", "Enable dark theme", "Activar tema oscuro"],
  ["Ativar tema claro", "Enable light theme", "Activar tema claro"],
  ["Tema escuro ativado.", "Dark theme enabled.", "Tema oscuro activado."],
  ["Tema claro ativado.", "Light theme enabled.", "Tema claro activado."],
  ["Instituto Federal de Educação, Ciência e Tecnologia de Roraima — IFRR", "Federal Institute of Education, Science and Technology of Roraima — IFRR", "Instituto Federal de Educación, Ciencia y Tecnología de Roraima — IFRR"],
  ["Instituto Federal de Educação, Ciência e Tecnologia de Roraima - IFRR", "Federal Institute of Education, Science and Technology of Roraima — IFRR", "Instituto Federal de Educación, Ciencia y Tecnología de Roraima — IFRR"],
  ["Instituto Federal de Roraima - IFRR", "Federal Institute of Roraima — IFRR", "Instituto Federal de Roraima — IFRR"],
  ["Atividade acadêmica", "Academic activity", "Actividad académica"],
  ["Análise de Acessibilidade Web", "Web Accessibility Analysis", "Análisis de Accesibilidad Web"],
  ["Uma análise comparativa utilizando o Lighthouse.", "A comparative analysis using Lighthouse.", "Un análisis comparativo utilizando Lighthouse."],
  ["Disciplina", "Course", "Asignatura"],
  ["Multimídia e Interação Humano-Computador", "Multimedia and Human-Computer Interaction", "Multimedia e Interacción Persona-Computadora"],
  ["Professor", "Professor", "Profesor"],
  ["Turma", "Class", "Clase"],
  ["MOD 4 — Noturno", "MOD 4 — Evening", "MOD 4 — Nocturno"],
  ["MOD 4 - Noturno", "MOD 4 — Evening", "MOD 4 — Nocturno"],
  ["Iniciar apresentação", "Start presentation", "Iniciar presentación"],
  ["páginas analisadas", "pages analyzed", "páginas analizadas"],
  ["pilares avaliados", "pillars evaluated", "pilares evaluados"],
  ["O ponto de partida", "Starting point", "Punto de partida"],
  ["Três páginas, três contextos", "Three pages, three contexts", "Tres páginas, tres contextos"],
  ["As capturas abaixo foram extraídas dos próprios relatórios usados nesta atividade. Observe antes de conhecer as notas.", "The screenshots below were extracted from the reports used in this activity. Take a look before seeing the scores.", "Las capturas siguientes fueron extraídas de los informes utilizados en esta actividad. Obsérvelas antes de conocer las puntuaciones."],
  ["Captura da página inicial do GOV.BR no momento da análise", "Screenshot of the GOV.BR home page at the time of analysis", "Captura de la página de inicio de GOV.BR en el momento del análisis"],
  ["Captura da página inicial do Mercado Livre no momento da análise", "Screenshot of the Mercado Livre home page at the time of analysis", "Captura de la página de inicio de Mercado Livre en el momento del análisis"],
  ["Captura do site Tipos de Interfaces de Usuário no momento da análise", "Screenshot of the User Interface Types site at the time of analysis", "Captura del sitio Tipos de Interfaces de Usuario en el momento del análisis"],
  ["Portal oficial de serviços e informações do Governo Federal.", "Official portal for Federal Government services and information.", "Portal oficial de servicios e información del Gobierno Federal."],
  ["Plataforma de comércio eletrônico.", "E-commerce platform.", "Plataforma de comercio electrónico."],
  ["Tipos de Interfaces de Usuário", "User Interface Types", "Tipos de Interfaces de Usuario"],
  ["Site desenvolvido pela equipe na Atividade 05.", "Site developed by the team in Activity 05.", "Sitio desarrollado por el equipo en la Actividad 05."],
  ["Visitar site", "Visit site", "Visitar sitio"],
  ["GOV.BR (abre em nova aba)", "GOV.BR (opens in a new tab)", "GOV.BR (se abre en una pestaña nueva)"],
  ["Mercado Livre (abre em nova aba)", "Mercado Livre (opens in a new tab)", "Mercado Livre (se abre en una pestaña nueva)"],
  ["da equipe (abre em nova aba)", "team site (opens in a new tab)", "del equipo (se abre en una pestaña nueva)"],
  ["Mas qual deles você acredita que possui a melhor acessibilidade?", "But which one do you believe has the best accessibility?", "¿Pero cuál cree que tiene la mejor accesibilidad?"],
  ["Dinâmica ao vivo", "Live activity", "Dinámica en vivo"],
  ["O Chute da Acessibilidade", "The Accessibility Guess", "La Apuesta de Accesibilidad"],
  ["Observe os três sites e tente descobrir qual obteve a melhor e a pior pontuação de acessibilidade no Lighthouse.", "Review the three sites and try to identify which received the best and worst Lighthouse accessibility scores.", "Observe los tres sitios e intente descubrir cuál obtuvo la mejor y la peor puntuación de accesibilidad en Lighthouse."],
  ["Prévia do GOV.BR", "GOV.BR preview", "Vista previa de GOV.BR"],
  ["Prévia do Mercado Livre", "Mercado Livre preview", "Vista previa de Mercado Livre"],
  ["Prévia do site da equipe", "Team site preview", "Vista previa del sitio del equipo"],
  ["Site da equipe", "Team site", "Sitio del equipo"],
  ["Conectando à dinâmica…", "Connecting to the activity…", "Conectando con la dinámica…"],
  ["0 votos", "0 votes", "0 votos"],
  ["Aguarde enquanto verificamos o estado da votação.", "Please wait while we check the voting status.", "Espere mientras verificamos el estado de la votación."],
  ["Seu nome", "Your name", "Su nombre"],
  ["Use até 40 caracteres. Seu nome não será exibido publicamente.", "Use up to 40 characters. Your name will not be displayed publicly.", "Use hasta 40 caracteres. Su nombre no se mostrará públicamente."],
  ["Qual site você acredita que teve a", "Which site do you believe had the", "¿Qué sitio cree que tuvo la"],
  ["melhor", "best", "mejor"],
  ["pior", "worst", "peor"],
  ["acessibilidade?", "accessibility?", "accesibilidad?"],
  ["Portal público", "Public portal", "Portal público"],
  ["Comércio eletrônico", "E-commerce", "Comercio electrónico"],
  ["Atividade 05", "Activity 05", "Actividad 05"],
  ["Enviar meu palpite", "Submit my guess", "Enviar mi apuesta"],
  ["A opinião da sala", "The class's opinion", "La opinión de la clase"],
  ["Resultado da turma", "Class results", "Resultados de la clase"],
  ["Os gráficos usam somente os votos reais desta sessão e não exibem nomes.", "The charts use only actual votes from this session and do not display names.", "Los gráficos usan solamente los votos reales de esta sesión y no muestran nombres."],
  ["Qual site a turma acreditou ser o mais acessível?", "Which site did the class consider the most accessible?", "¿Qué sitio consideró la clase como el más accesible?"],
  ["Qual site a turma acreditou ser o menos acessível?", "Which site did the class consider the least accessible?", "¿Qué sitio consideró la clase como el menos accesible?"],
  ["Será que a turma acertou?", "Did the class get it right?", "¿Acertó la clase?"],
  ["Sem spoilers", "No spoilers", "Sin spoilers"],
  ["Resultados oficiais bloqueados", "Official results locked", "Resultados oficiales bloqueados"],
  ["Aguardando a revelação do apresentador…", "Waiting for the presenter to reveal the results…", "Esperando que el presentador revele los resultados…"],
  ["A resposta oficial", "The official answer", "La respuesta oficial"],
  ["O ranking de acessibilidade", "Accessibility ranking", "Clasificación de accesibilidad"],
  ["Nota final", "Final score", "Puntuación final"],
  ["Primeiro, apenas a categoria central desta atividade.", "First, only the main category of this activity.", "Primero, solamente la categoría principal de esta actividad."],
  ["No recorte analisado", "Within the analyzed scope", "En el alcance analizado"],
  ["O resultado surpreendeu você?", "Did the result surprise you?", "¿Le sorprendió el resultado?"],
  ["Visão completa", "Full overview", "Visión completa"],
  ["Comparação dos três relatórios", "Comparison of the three reports", "Comparación de los tres informes"],
  ["A coluna de acessibilidade está destacada porque ela é o foco da análise.", "The accessibility column is highlighted because it is the focus of the analysis.", "La columna de accesibilidad está destacada porque es el foco del análisis."],
  ["Notas oficiais extraídas dos relatórios Lighthouse", "Official scores extracted from the Lighthouse reports", "Puntuaciones oficiales extraídas de los informes Lighthouse"],
  ["Site", "Site", "Sitio"],
  ["Desempenho", "Performance", "Rendimiento"],
  ["Acessibilidade", "Accessibility", "Accesibilidad"],
  ["Práticas recomendadas", "Best practices", "Buenas prácticas"],
  ["* Atenção:", "* Attention:", "* Atención:"],
  ["o Lighthouse registrou interferência de extensões do navegador durante a medição de desempenho do Mercado Livre. Por isso, o foco comparativo permanece na acessibilidade.", "Lighthouse detected interference from browser extensions while measuring Mercado Livre's performance. Therefore, the comparison remains focused on accessibility.", "Lighthouse detectó interferencia de extensiones del navegador durante la medición del rendimiento de Mercado Livre. Por eso, la comparación sigue centrada en la accesibilidad."],
  ["Contextos diferentes exigem cuidado", "Different contexts require care", "Los contextos diferentes requieren cuidado"],
  ["GOV.BR e Mercado Livre reúnem muito mais conteúdo, integrações e componentes. A conclusão correta é:", "GOV.BR and Mercado Livre contain far more content, integrations, and components. The correct conclusion is:", "GOV.BR y Mercado Livre reúnen mucho más contenido, integraciones y componentes. La conclusión correcta es:"],
  ["na página e no recorte analisados, o site da equipe obteve a maior pontuação automatizada de acessibilidade.", "on the page and within the analyzed scope, the team site received the highest automated accessibility score.", "en la página y dentro del alcance analizado, el sitio del equipo obtuvo la puntuación automatizada de accesibilidad más alta."],
  ["Depois do palpite", "After the guess", "Después de la apuesta"],
  ["O que é o Lighthouse?", "What is Lighthouse?", "¿Qué es Lighthouse?"],
  ["Uma ferramenta automatizada do Google utilizada para avaliar a qualidade de páginas web.", "An automated Google tool used to evaluate the quality of web pages.", "Una herramienta automatizada de Google utilizada para evaluar la calidad de páginas web."],
  ["Velocidade e carregamento.", "Speed and loading.", "Velocidad y carga."],
  ["Uso por diferentes pessoas e tecnologias assistivas.", "Use by different people and assistive technologies.", "Uso por diferentes personas y tecnologías de asistencia."],
  ["Boas práticas técnicas e de segurança.", "Technical and security best practices.", "Buenas prácticas técnicas y de seguridad."],
  ["Boas práticas para mecanismos de busca.", "Best practices for search engines.", "Buenas prácticas para motores de búsqueda."],
  ["✓ Bom", "✓ Good", "✓ Bueno"],
  ["! Precisa melhorar", "! Needs improvement", "! Necesita mejorar"],
  ["× Ruim", "× Poor", "× Malo"],
  ["Inadequações encontradas", "Issues found", "Problemas encontrados"],
  ["Do problema à solução", "From problem to solution", "Del problema a la solución"],
  ["Exemplos reais registrados nos relatórios, traduzidos para impactos cotidianos.", "Real examples recorded in the reports, translated into everyday impacts.", "Ejemplos reales registrados en los informes, traducidos a impactos cotidianos."],
  ["Controles precisam comunicar sua função", "Controls must communicate their purpose", "Los controles deben comunicar su función"],
  ["Botão sem nome acessível", "Button without an accessible name", "Botón sin nombre accesible"],
  ["Problema", "Problem", "Problema"],
  ["Botão da região de login sem texto compreensível por leitor de tela.", "Login-area button without text that a screen reader can understand.", "Botón del área de inicio de sesión sin texto comprensible para un lector de pantalla."],
  ["Impacto", "Impact", "Impacto"],
  ["Pode ser anunciado apenas como “botão”, sem explicar sua função.", "It may be announced only as “button,” without explaining its purpose.", "Puede anunciarse solamente como «botón», sin explicar su función."],
  ["Solução", "Solution", "Solución"],
  ["Fornecer texto acessível coerente por conteúdo,", "Provide a consistent accessible name through content,", "Proporcionar un nombre accesible coherente mediante contenido,"],
  ["ou", "or", "o"],
  ["Impacto crítico no relatório", "Critical impact in the report", "Impacto crítico en el informe"],
  ["Nome acessível inconsistente", "Inconsistent accessible name", "Nombre accesible incoherente"],
  ["“Atalhos gov.br” tinha nome acessível “Abrir menu de seleção serviços”.", "“Atalhos gov.br” had the accessible name “Open service selection menu.”", "«Atalhos gov.br» tenía el nombre accesible «Abrir menú de selección de servicios»."],
  ["Confunde leitores de tela e comandos por voz.", "It confuses screen readers and voice commands.", "Confunde a los lectores de pantalla y los comandos de voz."],
  ["Incluir claramente o texto visível no nome acessível.", "Clearly include the visible text in the accessible name.", "Incluir claramente el texto visible en el nombre accesible."],
  ["Alvos de toque pequenos", "Small touch targets", "Objetivos táctiles pequeños"],
  ["mín. 24 × 24 px", "min. 24 × 24 px", "mín. 24 × 24 px"],
  ["Dificulta o toque e o uso por pessoas com limitações motoras.", "Makes touch interaction difficult for people with motor limitations.", "Dificulta la interacción táctil para personas con limitaciones motoras."],
  ["Aumentar área clicável e espaçamento dos indicadores.", "Increase the clickable area and spacing between indicators.", "Aumentar el área pulsable y el espacio entre indicadores."],
  ["Percepção visual e toque fazem diferença", "Visual perception and touch make a difference", "La percepción visual y el tacto marcan la diferencia"],
  ["Contraste insuficiente", "Insufficient contrast", "Contraste insuficiente"],
  ["Antes · 3,19:1", "Before · 3.19:1", "Antes · 3,19:1"],
  ["Depois · contraste reforçado", "After · enhanced contrast", "Después · contraste reforzado"],
  ["Frete grátis e rápido", "Free and fast shipping", "Envío gratis y rápido"],
  ["Dificulta a leitura para pessoas com baixa visão.", "Makes reading difficult for people with low vision.", "Dificulta la lectura para personas con baja visión."],
  ["Usar combinação com pelo menos 4,5:1 neste contexto.", "Use a combination with a ratio of at least 4.5:1 in this context.", "Usar una combinación con una proporción mínima de 4,5:1 en este contexto."],
  ["Link identificado só pela cor", "Link identified by color alone", "Enlace identificado solo por el color"],
  ["Já tem uma conta?", "Already have an account?", "¿Ya tiene una cuenta?"],
  ["Entrar", "Sign in", "Ingresar"],
  ["Contraste de 1,57:1 entre “Entrar” e o texto ao redor.", "Contrast ratio of 1.57:1 between “Sign in” and the surrounding text.", "Contraste de 1,57:1 entre «Ingresar» y el texto circundante."],
  ["Adicionar sublinhado, peso ou outra indicação consistente.", "Add an underline, weight, or another consistent indicator.", "Añadir subrayado, peso u otro indicador coherente."],
  ["Áreas clicáveis próximas", "Closely spaced clickable areas", "Áreas pulsables muy próximas"],
  ["51 ocorrências de alvos com tamanho ou espaçamento insuficiente.", "51 instances of targets with insufficient size or spacing.", "51 casos de objetivos con tamaño o espacio insuficiente."],
  ["Mais erros de toque em celulares.", "More touch errors on mobile devices.", "Más errores táctiles en teléfonos móviles."],
  ["Aumentar área de toque,", "Increase the touch area,", "Aumentar el área táctil,"],
  ["e distância entre elementos.", "and spacing between elements.", "y la distancia entre elementos."],
  ["100 significa acessibilidade perfeita?", "Does 100 mean perfect accessibility?", "¿100 significa accesibilidad perfecta?"],
  ["Não necessariamente.", "Not necessarily.", "No necesariamente."],
  ["O site passou em todas as verificações automáticas que entraram no cálculo, mas o relatório ainda registrou uma inconsistência de peso zero.", "The site passed all automated checks included in the score, but the report still recorded a zero-weight inconsistency.", "El sitio superó todas las verificaciones automáticas incluidas en el cálculo, pero el informe aún registró una incoherencia de peso cero."],
  ["Texto visível", "Visible text", "Texto visible"],
  ["Nome acessível", "Accessible name", "Nombre accesible"],
  ["Desativar rolagem suave", "Disable smooth scrolling", "Desactivar desplazamiento suave"],
  ["A auditoria", "The audit", "La auditoría"],
  ["detectou a diferença. Como tinha peso zero naquele relatório, a pontuação permaneceu 100.", "detected the difference. Because it had zero weight in that report, the score remained 100.", "detectó la diferencia. Como tenía peso cero en ese informe, la puntuación permaneció en 100."],
  ["O que ainda depende de avaliação manual?", "What still requires manual evaluation?", "¿Qué requiere todavía una evaluación manual?"],
  ["Ordem lógica pelo teclado", "Logical keyboard order", "Orden lógico con el teclado"],
  ["Gerenciamento de foco", "Focus management", "Gestión del foco"],
  ["Conteúdo fora da tela", "Off-screen content", "Contenido fuera de pantalla"],
  ["Landmarks e estrutura", "Landmarks and structure", "Regiones y estructura"],
  ["Ordem visual e do DOM", "Visual and DOM order", "Orden visual y del DOM"],
  ["Controles personalizados", "Custom controls", "Controles personalizados"],
  ["Testes automatizados ajudam, mas não substituem testes manuais e testes com usuários.", "Automated tests help, but they do not replace manual testing and user testing.", "Las pruebas automatizadas ayudan, pero no sustituyen las pruebas manuales ni las pruebas con usuarios."],
  ["Caminhos práticos", "Practical paths", "Caminos prácticos"],
  ["Recomendações que cabem no desenvolvimento", "Recommendations that fit the development process", "Recomendaciones aplicables al desarrollo"],
  ["Nomear controles", "Name controls", "Nombrar controles"],
  ["Todo botão e link deve comunicar claramente o que faz.", "Every button and link must clearly communicate what it does.", "Cada botón y enlace debe comunicar claramente lo que hace."],
  ["Medir contraste", "Measure contrast", "Medir el contraste"],
  ["Validar cores e não depender apenas delas para transmitir ação.", "Validate colors and do not rely on them alone to communicate actions.", "Validar los colores y no depender únicamente de ellos para comunicar acciones."],
  ["Ampliar o toque", "Expand touch targets", "Ampliar los objetivos táctiles"],
  ["Criar áreas confortáveis, separadas e fáceis de alcançar.", "Create comfortable, separated, easy-to-reach areas.", "Crear áreas cómodas, separadas y fáciles de alcanzar."],
  ["Testar com teclado", "Test with a keyboard", "Probar con el teclado"],
  ["Verificar foco, ordem de navegação e acionamento dos controles.", "Check focus, navigation order, and control activation.", "Verificar el foco, el orden de navegación y la activación de los controles."],
  ["Combinar métodos", "Combine methods", "Combinar métodos"],
  ["Usar automação, revisão manual e, quando possível, testes com usuários.", "Use automation, manual review, and user testing whenever possible.", "Usar automatización, revisión manual y, cuando sea posible, pruebas con usuarios."],
  ["Síntese", "Summary", "Síntesis"],
  ["Acessibilidade se constrói nos detalhes", "Accessibility is built in the details", "La accesibilidad se construye en los detalles"],
  ["Mesmo sites profissionais e amplamente utilizados podem apresentar inadequações. O Lighthouse identifica muitos problemas, mas a avaliação humana continua necessária.", "Even professional, widely used sites can have accessibility issues. Lighthouse identifies many problems, but human evaluation is still necessary.", "Incluso los sitios profesionales y ampliamente utilizados pueden presentar problemas. Lighthouse identifica muchos de ellos, pero la evaluación humana sigue siendo necesaria."],
  ["Acessibilidade não é apenas aparência.", "Accessibility is not just appearance.", "La accesibilidad no es solo apariencia."],
  ["Pequenos detalhes podem impedir alguém de utilizar uma interface.", "Small details can prevent someone from using an interface.", "Los pequeños detalles pueden impedir que alguien utilice una interfaz."],
  ["Uma nota automática não substitui a experiência real do usuário.", "An automated score does not replace the user's real experience.", "Una puntuación automática no sustituye la experiencia real del usuario."],
  ["Evidências da atividade", "Activity evidence", "Evidencias de la actividad"],
  ["Relatórios e arquivos", "Reports and files", "Informes y archivos"],
  ["Os documentos abaixo são os relatórios HTML originais, preservados sem alterações.", "The documents below are the original HTML reports, preserved without changes.", "Los documentos siguientes son los informes HTML originales, conservados sin cambios."],
  ["Relatório Lighthouse completo.", "Complete Lighthouse report.", "Informe Lighthouse completo."],
  ["Abrir relatório", "Open report", "Abrir informe"],
  ["do GOV.BR (abre em nova aba)", "for GOV.BR (opens in a new tab)", "de GOV.BR (se abre en una pestaña nueva)"],
  ["do Mercado Livre (abre em nova aba)", "for Mercado Livre (opens in a new tab)", "de Mercado Livre (se abre en una pestaña nueva)"],
  ["do site da equipe (abre em nova aba)", "for the team site (opens in a new tab)", "del sitio del equipo (se abre en una pestaña nueva)"],
  ["Encerramento", "Closing", "Cierre"],
  ["Obrigado!", "Thank you!", "¡Gracias!"],
  ["Que cada interface seja um caminho aberto, não uma barreira.", "May every interface be an open path—not a barrier.", "Que cada interfaz sea un camino abierto, no una barrera."],
  ["Voltar ao início", "Back to top", "Volver al inicio"],
  ["Multimídia e Interação Humano-Computador · MOD 4 - Noturno · 2026", "Multimedia and Human-Computer Interaction · MOD 4 — Evening · 2026", "Multimedia e Interacción Persona-Computadora · MOD 4 — Nocturno · 2026"],
  ["Preferências de leitura", "Reading preferences", "Preferencias de lectura"],
  ["Fechar configurações", "Close settings", "Cerrar configuración"],
  ["Ajuste a apresentação conforme sua necessidade. As escolhas ficam salvas neste navegador.", "Adjust the presentation to your needs. Your choices are saved in this browser.", "Ajuste la presentación según sus necesidades. Sus elecciones se guardan en este navegador."],
  ["Tamanho do texto", "Text size", "Tamaño del texto"],
  ["Padrão", "Default", "Predeterminado"],
  ["Padrão — 100%", "Default — 100%", "Predeterminado — 100%"],
  ["Reduzido — 90%", "Reduced — 90%", "Reducido — 90%"],
  ["Ampliado — 112%", "Enlarged — 112%", "Ampliado — 112%"],
  ["Ampliado — 125%", "Enlarged — 125%", "Ampliado — 125%"],
  ["Diminuir tamanho do texto", "Decrease text size", "Reducir tamaño del texto"],
  ["Aumentar tamanho do texto", "Increase text size", "Aumentar tamaño del texto"],
  ["Contraste reforçado", "Enhanced contrast", "Contraste reforzado"],
  ["Aprofunda a diferença entre textos e superfícies.", "Increases the difference between text and surfaces.", "Aumenta la diferencia entre textos y superficies."],
  ["Alto contraste", "High contrast", "Alto contraste"],
  ["Aplica uma combinação máxima de preto, branco e amarelo.", "Applies a maximum-contrast combination of black, white, and yellow.", "Aplica una combinación de máximo contraste con negro, blanco y amarillo."],
  ["Maior espaçamento de texto", "Increased text spacing", "Mayor espaciado de texto"],
  ["Aumenta altura das linhas e distância entre caracteres.", "Increases line height and character spacing.", "Aumenta la altura de línea y la distancia entre caracteres."],
  ["Destacar links", "Highlight links", "Destacar enlaces"],
  ["Destaque de links", "Link highlighting", "Resaltado de enlaces"],
  ["Reforça sublinhado e identificação dos links de texto.", "Strengthens underlining and identification of text links.", "Refuerza el subrayado y la identificación de los enlaces de texto."],
  ["Scroll suave", "Smooth scrolling", "Desplazamiento suave"],
  ["Suaviza a rolagem entre as áreas da página.", "Smooths scrolling between page sections.", "Suaviza el desplazamiento entre las secciones de la página."],
  ["Restaurar padrão", "Restore defaults", "Restaurar valores predeterminados"],
  ["Concluir", "Done", "Finalizar"],
  ["Voltar ao topo da página", "Back to the top of the page", "Volver al inicio de la página"],
  ["Acessar pasta no Google Drive", "Open folder in Google Drive", "Abrir carpeta en Google Drive"],
  ["Ver código no GitHub", "View code on GitHub", "Ver código en GitHub"],
  ["link será disponibilizado em breve.", "link will be available soon.", "el enlace estará disponible pronto."],
  ["__vote_one", "{count} vote", "{count} voto"],
  ["__vote_many", "{count} votes", "{count} votos"],
  ["__percent_votes", "{percent} percent, {votes}", "{percent} por ciento, {votes}"],
  ["__site_percent_votes", "{site}: {percent} percent, {votes}", "{site}: {percent} por ciento, {votes}"],
  ["Dinâmica indisponível", "Activity unavailable", "Dinámica no disponible"],
  ["Votação fechada", "Voting closed", "Votación cerrada"],
  ["Votação aberta", "Voting open", "Votación abierta"],
  ["Votação encerrada", "Voting ended", "Votación finalizada"],
  ["Aguardando configuração", "Waiting for setup", "Esperando configuración"],
  ["Dinâmica temporariamente indisponível. O restante da apresentação continua acessível.", "The activity is temporarily unavailable. The rest of the presentation remains accessible.", "La dinámica no está disponible temporalmente. El resto de la presentación sigue accesible."],
  ["A sessão ainda não foi preparada. Aguarde o apresentador.", "The session has not been prepared yet. Please wait for the presenter.", "La sesión aún no ha sido preparada. Espere al presentador."],
  ["Palpite registrado! Aguarde a revelação dos resultados.", "Guess submitted! Wait for the results to be revealed.", "¡Apuesta registrada! Espere la revelación de los resultados."],
  ["A votação foi encerrada.", "Voting has ended.", "La votación ha finalizado."],
  ["A votação ainda não foi liberada. Aguarde o apresentador.", "Voting has not opened yet. Please wait for the presenter.", "La votación aún no ha comenzado. Espere al presentador."],
  ["A votação foi encerrada enquanto você preenchia o formulário.", "Voting ended while you were completing the form.", "La votación terminó mientras completaba el formulario."],
  ["Informe seu nome para registrar o palpite.", "Enter your name to submit your guess.", "Escriba su nombre para registrar la apuesta."],
  ["Escolha o site com a melhor e com a pior acessibilidade.", "Choose the site with the best and worst accessibility.", "Elija el sitio con la mejor y la peor accesibilidad."],
  ["O mesmo site não pode ser escolhido como melhor e pior.", "The same site cannot be selected as both best and worst.", "No puede elegir el mismo sitio como mejor y peor."],
  ["Registrando…", "Submitting…", "Registrando…"],
  ["Palpite registrado com sucesso!", "Guess submitted successfully!", "¡Apuesta registrada correctamente!"],
  ["Este dispositivo já registrou um voto nesta sessão.", "This device has already submitted a vote in this session.", "Este dispositivo ya registró un voto en esta sesión."],
  ["Sem conexão. Reconecte-se e tente novamente.", "No connection. Reconnect and try again.", "Sin conexión. Vuelva a conectarse e inténtelo de nuevo."],
  ["O voto não foi aceito. A votação pode ter sido encerrada.", "The vote was not accepted. Voting may have ended.", "El voto no fue aceptado. Es posible que la votación haya finalizado."],
  ["Não foi possível registrar o voto. Tente novamente.", "The vote could not be submitted. Try again.", "No fue posible registrar el voto. Inténtelo de nuevo."],
  ["A contagem ao vivo foi interrompida. Verifique a conexão.", "The live count was interrupted. Check your connection.", "El conteo en vivo se interrumpió. Compruebe la conexión."],
  ["Não foi possível atualizar a dinâmica.", "The activity could not be updated.", "No fue posible actualizar la dinámica."],
  ["Somente no modo apresentador", "Presenter mode only", "Solo en modo presentador"],
  ["Controle da dinâmica", "Activity controls", "Control de la dinámica"],
  ["Esta rota oculta evita acesso casual, mas não é autenticação de produção.", "This hidden route prevents casual access, but it is not production authentication.", "Esta ruta oculta evita el acceso casual, pero no es autenticación de producción."],
  ["Status", "Status", "Estado"],
  ["Carregando…", "Loading…", "Cargando…"],
  ["Contagem", "Count", "Conteo"],
  ["Sessão atual", "Current session", "Sesión actual"],
  ["Abrir votação", "Open voting", "Abrir votación"],
  ["Encerrar votação", "End voting", "Finalizar votación"],
  ["Revelar resultado da turma", "Reveal class results", "Revelar resultados de la clase"],
  ["Revelar resultado do Lighthouse", "Reveal Lighthouse results", "Revelar resultados de Lighthouse"],
  ["Nova sessão", "New session", "Nueva sesión"],
  ["Tem certeza que deseja iniciar uma nova sessão?", "Are you sure you want to start a new session?", "¿Está seguro de que desea iniciar una nueva sesión?"],
  ["Os votos atuais serão preservados no banco, mas deixarão de ser considerados nesta apresentação.", "Current votes will remain in the database but will no longer count in this presentation.", "Los votos actuales se conservarán en la base de datos, pero dejarán de contar en esta presentación."],
  ["Sim, iniciar nova sessão", "Yes, start a new session", "Sí, iniciar una nueva sesión"],
  ["Cancelar", "Cancel", "Cancelar"],
  ["Firebase não configurado", "Firebase not configured", "Firebase no configurado"],
  ["Nova sessão criada. Abra a votação quando estiver pronto.", "New session created. Open voting when you are ready.", "Nueva sesión creada. Abra la votación cuando esté listo."],
  ["Você está sem conexão. A sincronização foi pausada.", "You are offline. Synchronization has been paused.", "Está sin conexión. La sincronización se ha pausado."],
  ["Conexão restabelecida. A sincronização será retomada.", "Connection restored. Synchronization will resume.", "Conexión restablecida. La sincronización se reanudará."],
  ["__link_pending", "{label}: link will be available soon.", "{label}: el enlace estará disponible pronto."],
  ["__text_size", "Text size: {label}.", "Tamaño del texto: {label}."],
  ["Tamanho do texto restaurado para 100%.", "Text size restored to 100%.", "Tamaño del texto restaurado al 100%."],
  ["__setting_state", "{label} {state}.", "{label} {state}."],
  ["ativado", "enabled", "activado"],
  ["desativado", "disabled", "desactivado"],
  ["Todas as configurações foram restauradas para o padrão.", "All settings were restored to their defaults.", "Todas las configuraciones fueron restauradas a sus valores predeterminados."],
  ["Falha ao iniciar a página:", "Failed to initialize the page:", "Error al iniciar la página:"],
];

const dictionaries = {
  en: new Map(CATALOG.map(([source, english]) => [source, english])),
  es: new Map(CATALOG.map(([source, , spanish]) => [source, spanish])),
};

const originalText = new WeakMap();
const originalAttributes = new WeakMap();
const listeners = new Set();
let currentLanguage = loadLanguage();

function loadLanguage() {
  const saved = localStorage.getItem(LANGUAGE_KEY);
  return SUPPORTED_LANGUAGES.includes(saved) ? saved : "pt-BR";
}

function interpolate(message, variables = {}) {
  return message.replace(/\{(\w+)\}/g, (_, key) => String(variables[key] ?? `{${key}}`));
}

export function t(source, variables) {
  const translated = currentLanguage === "pt-BR" ? source : dictionaries[currentLanguage]?.get(source) ?? source;
  const portugueseDynamic = {
    __vote_one: "{count} voto",
    __vote_many: "{count} votos",
    __percent_votes: "{percent} por cento, {votes}",
    __site_percent_votes: "{site}: {percent} por cento, {votes}",
    __link_pending: "{label}: link será disponibilizado em breve.",
    __text_size: "Tamanho do texto: {label}.",
    __setting_state: "{label} {state}.",
    __language_button: "Selecionar idioma {code}. Atual: {language}",
    __final_score: "Nota final: {score}",
  };
  return interpolate(currentLanguage === "pt-BR" && portugueseDynamic[source] ? portugueseDynamic[source] : translated, variables);
}

export function getLanguage() {
  return currentLanguage;
}

function updateLanguageControl() {
  const toggle = document.querySelector("#language-toggle");
  const current = document.querySelector("#language-current");
  if (current) current.textContent = LANGUAGE_CODES[currentLanguage];
  if (toggle) toggle.setAttribute("aria-label", t("__language_button", { code: LANGUAGE_CODES[currentLanguage], language: LANGUAGE_NAMES[currentLanguage] }));
  document.querySelectorAll("[data-language]").forEach((option) => {
    option.setAttribute("aria-selected", String(option.dataset.language === currentLanguage));
  });
}

function translateTextNode(node) {
  if (!originalText.has(node)) originalText.set(node, node.nodeValue);
  const original = originalText.get(node);
  const source = original.trim().replace(/\s+/g, " ");
  if (!source) return;
  const translated = t(source);
  const leading = original.match(/^\s*/)?.[0] ?? "";
  const trailing = original.match(/\s*$/)?.[0] ?? "";
  node.nodeValue = `${leading}${translated}${trailing}`;
}

function translateAttributes(element) {
  const names = ["alt", "aria-label", "title", "placeholder", "data-label"];
  if (element.matches('meta[name="description"]')) names.push("content");
  if (!originalAttributes.has(element)) originalAttributes.set(element, new Map());
  const originals = originalAttributes.get(element);
  names.forEach((name) => {
    if (!element.hasAttribute(name)) return;
    if (!originals.has(name)) originals.set(name, element.getAttribute(name));
    element.setAttribute(name, t(originals.get(name).trim().replace(/\s+/g, " ")));
  });
}

export function translatePage(root = document) {
  const elementRoot = root.nodeType === Node.ELEMENT_NODE ? root : document.documentElement;
  const elements = [elementRoot, ...elementRoot.querySelectorAll("*")];
  elements.forEach((element) => {
    if (element.matches("script, style")) return;
    translateAttributes(element);
    [...element.childNodes].filter((node) => node.nodeType === Node.TEXT_NODE).forEach(translateTextNode);
  });
  document.documentElement.lang = currentLanguage;
  updateLanguageControl();
}

export function setLanguage(language) {
  if (!SUPPORTED_LANGUAGES.includes(language)) return;
  currentLanguage = language;
  localStorage.setItem(LANGUAGE_KEY, language);
  translatePage();
  listeners.forEach((listener) => listener(language));
  document.dispatchEvent(new CustomEvent("farol:languagechange", { detail: { language } }));
}

export function onLanguageChange(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function setupI18n() {
  translatePage();
  document.documentElement.classList.remove("i18n-pending");

  const toggle = document.querySelector("#language-toggle");
  const menu = document.querySelector("#language-menu");
  const options = [...document.querySelectorAll("[data-language]")];
  const closeMenu = ({ restoreFocus = false } = {}) => {
    menu.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
    if (restoreFocus) toggle.focus();
  };
  const openMenu = () => {
    document.querySelector(".site-nav")?.classList.remove("open");
    document.querySelector("#menu-toggle")?.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
    menu.hidden = false;
    toggle.setAttribute("aria-expanded", "true");
    (options.find((option) => option.dataset.language === currentLanguage) ?? options[0]).focus();
  };
  const moveFocus = (direction) => {
    const currentIndex = Math.max(0, options.indexOf(document.activeElement));
    options[(currentIndex + direction + options.length) % options.length].focus();
  };

  toggle.addEventListener("click", () => menu.hidden ? openMenu() : closeMenu());
  toggle.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      openMenu();
      if (event.key === "ArrowUp") options.at(-1).focus();
    }
  });
  menu.addEventListener("click", (event) => {
    const option = event.target.closest("[data-language]");
    if (!option) return;
    setLanguage(option.dataset.language);
    closeMenu({ restoreFocus: true });
  });
  menu.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      closeMenu({ restoreFocus: true });
    } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      moveFocus(event.key === "ArrowDown" ? 1 : -1);
    } else if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      options[event.key === "Home" ? 0 : options.length - 1].focus();
    } else if (event.key === "Enter" || event.key === " ") {
      const option = event.target.closest("[data-language]");
      if (!option) return;
      event.preventDefault();
      setLanguage(option.dataset.language);
      closeMenu({ restoreFocus: true });
    }
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".language-picker") && !menu.hidden) {
      closeMenu({ restoreFocus: menu.contains(document.activeElement) });
    }
  });

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => mutation.addedNodes.forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) translatePage(node);
      if (node.nodeType === Node.TEXT_NODE) translateTextNode(node);
    }));
  });
  observer.observe(document.body, { childList: true, subtree: true });
}
