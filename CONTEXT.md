# CONTEXT.md — Landing Page da Startup de Recuperação de Orçamentos

## 1. Contexto do projeto

Este projeto é a landing page de pré-lançamento de uma startup SaaS voltada para oficinas mecânicas. O objetivo atual é validar o interesse de potenciais clientes e captar contatos para uma lista de espera.

**Importante:** este repositório é dedicado à landing page. Não é o desenvolvimento do SaaS completo, do dashboard funcional ou do sistema de gestão da oficina.

O nome definitivo da startup ainda não foi escolhido. Enquanto isso, use `NOME DA STARTUP` como placeholder e evite inventar uma marca definitiva.

## 2. Problema que queremos resolver

Oficinas enviam orçamentos aos clientes, frequentemente pelo WhatsApp. Alguns clientes dizem que vão pensar ou deixam de responder. Essas conversas podem se perder no volume de mensagens, fazendo a oficina esquecer oportunidades comerciais que ainda poderiam ser retomadas.

A proposta do produto é ajudar a oficina a:
- Organizar e acompanhar orçamentos enviados.
- Identificar clientes que estão há alguns dias sem responder.
- Lembrar a equipe de fazer follow-up.
- Preparar mensagens de acompanhamento para o WhatsApp.
- Acompanhar o estado das oportunidades e, futuramente, medir valores recuperados.

A ideia central da comunicação é transformar **“cliente sumiu depois do orçamento”** em **“vamos tentar recuperar essa oportunidade”**.

## 3. Objetivo da landing page

A página deve explicar o problema, apresentar a proposta de valor de forma simples e incentivar oficinas mecânicas a se inscreverem em uma **lista de espera** antes do lançamento.

A conversão principal é o cadastro de interessados. A landing page deve ajudar a validar se oficinas reconhecem o problema e querem conhecer a solução.

Não apresentar o produto como já lançado se isso ainda não for verdade. Não prometer recuperação garantida de receita.

## 4. Público-alvo

- Donos e gestores de oficinas mecânicas.
- Oficinas que recebem orçamentos por WhatsApp.
- Equipes que precisam acompanhar clientes e oportunidades comerciais.
- Profissionais que não querem necessariamente substituir seu sistema atual de gestão.

Use linguagem comercial clara e acessível. Evite excesso de jargão técnico ou linguagem de startup que não ajude o dono da oficina a entender o benefício.

## 5. Posicionamento e mensagem

Não posicionar o produto como apenas mais um sistema de gestão de oficina. O foco principal é **recuperação e acompanhamento de oportunidades comerciais que ficaram sem resposta**.

Mensagem de referência para a hero:

**Headline:** “Pare de perder dinheiro com orçamentos esquecidos.”

**Subtítulo:** “Organize os orçamentos da sua oficina, identifique clientes que precisam de retorno e transforme conversas paradas no WhatsApp em novas oportunidades de serviço.”

**CTA principal:** “Quero participar da lista de espera”

**Microtexto sugerido:** “Conheça o produto antes do lançamento. Sem compromisso de compra.”

O texto pode ser refinado, mas a proposta de valor deve permanecer explícita na primeira dobra.

## 6. Escopo da landing page

A estrutura inicial planejada inclui:

1. **Hero:** marca provisória, navegação, headline, subtítulo, CTA e mockup do produto.
2. **O problema:** orçamentos enviados, clientes sem resposta e conversas esquecidas.
3. **Como funciona:** organizar orçamentos, identificar quem precisa de retorno e retomar a conversa.
4. **Demonstração visual do produto:** mockup de dashboard com dados ilustrativos.
5. **Benefícios:** menos orçamentos esquecidos, follow-up organizado e maior visibilidade comercial.
6. **Lista de espera:** formulário de cadastro de interessados.
7. **Perguntas frequentes:** estágio do produto, lista de espera, integração com WhatsApp e custos.
8. **CTA final e rodapé:** reforço da proposta e navegação complementar.

A estrutura pode ser ajustada conforme o design, mas a página deve manter foco na conversão e evitar seções desnecessárias.

## 7. Direção visual

A identidade deve transmitir confiança, tecnologia acessível, eficiência e organização, combinando elementos de SaaS B2B com referências discretas ao setor automotivo.

Paleta de referência:
- Grafite profundo: `#111827`
- Grafite secundário: `#1F2937`
- Off-white: `#F8FAFC`
- Branco: `#FFFFFF`
- Verde de destaque: `#22C55E`
- Turquesa: `#14B8A6`
- Cinza secundário: `#64748B`
- Âmbar para pendências: `#F59E0B`

O verde pode destacar valores e estados positivos; o âmbar pode sinalizar orçamentos pendentes. Use as cores com hierarquia, sem tornar a interface excessivamente colorida.

Tipografia sugerida: Inter ou equivalente legível.

O visual deve parecer uma startup SaaS profissional. Evitar estética gamer, fantasia, excesso de neon, aparência de sistema administrativo antigo ou efeitos decorativos que disputem atenção com a proposta comercial.

## 8. Elemento visual 3D

A ideia principal é utilizar um mockup de dashboard em perspectiva, com profundidade e cartões de interface flutuantes, como visual de destaque da hero.

O mockup pode representar:
- Um orçamento aguardando resposta.
- Um lembrete de follow-up.
- O valor de um orçamento.
- Uma oportunidade comercial em acompanhamento.
- Indicadores financeiros demonstrativos.

O objetivo do 3D é explicar visualmente o produto e reforçar a proposta de valor, não apenas demonstrar efeitos técnicos.

A implementação planejada poderá utilizar Three.js e React Three Fiber. O design deve permitir uma alternativa simplificada para telas pequenas ou dispositivos com menos recursos.

## 9. Dados e honestidade comercial

Qualquer cliente, oficina, valor, métrica ou resultado utilizado em mockups deve ser claramente ilustrativo.

Exemplo visual permitido, desde que identificado como demonstração:
- Cliente: Gabriel.
- Veículo: Jetta 2019.
- Serviço: sistema de freios.
- Valor do orçamento: R$ 1.800.
- Status: aguardando resposta há 3 dias.

Não inventar:
- Depoimentos ou avaliações reais.
- Oficinas parceiras.
- Quantidade de clientes ou usuários.
- Receita recuperada real.
- Percentuais de conversão ou resultados comprovados.
- Datas de lançamento confirmadas.
- Integrações já disponíveis que ainda não foram desenvolvidas.

Automação completa de WhatsApp, lembretes de revisão, troca de óleo, histórico do veículo, CRM, campanhas, dashboard completo e IA para mensagens são possibilidades futuras, não funcionalidades garantidas da primeira versão.

## 10. Formulário da lista de espera

O formulário pode solicitar:
- Nome completo.
- Nome da oficina.
- WhatsApp com DDD.
- E-mail profissional.

Deve ser simples, acessível e confortável para preencher no celular. O design precisa prever uma explicação clara sobre o uso dos dados e um link para a política de privacidade, quando esses elementos estiverem definidos.

Não inventar uma política de privacidade definitiva nem afirmar que os dados serão armazenados de uma forma específica sem conhecer a implementação real.

A landing page é o foco atual. Não presumir que o formulário já possui backend ou que os cadastros estão sendo salvos. Se a implementação do formulário for solicitada, esclarecer ou verificar como os dados serão capturados e armazenados.

## 11. Tecnologias planejadas

Stack pretendida para a landing page:
- React.
- Tailwind CSS.
- Framer Motion / Motion for React.
- Three.js.
- React Three Fiber.
- Drei, se necessário.

A stack é uma intenção de projeto. Antes de alterar dependências ou criar arquivos, inspecione o repositório e confirme o que já está configurado.

Não implementar o SaaS completo, banco de dados, autenticação, pagamentos ou painel administrativo como parte da landing page, a menos que isso seja solicitado explicitamente.

## 12. Princípios de UX e implementação

- Priorizar a clareza da proposta de valor na primeira dobra.
- Manter um CTA principal consistente.
- Criar uma experiência responsiva para desktop, tablet e celular.
- Preservar contraste, legibilidade e navegação por teclado.
- Respeitar a preferência `prefers-reduced-motion`.
- Utilizar animações para apoiar a compreensão, não para distrair.
- Otimizar imagens e recursos 3D.
- Evitar dependências desnecessárias.
- Não criar links, formulários ou botões que aparentem funcionar sem comportamento real.
- Não afirmar que um teste, build ou integração foi verificado sem realmente verificar.
- Manter a implementação proporcional ao escopo de uma landing page.

## 13. Referência de design

O Google Stitch será utilizado para explorar e definir o design visual. Quando houver telas aprovadas, elas devem ser tratadas como referência visual para hierarquia, composição, cores, espaçamento e comportamento esperado.

Não presumir que o Stitch define a arquitetura técnica ou que seus mockups representam funcionalidades já implementadas.

## 14. Critério principal de sucesso

O visitante deve compreender rapidamente que a plataforma pretende ajudar oficinas a não esquecer orçamentos sem resposta e deve conseguir encontrar facilmente como entrar na lista de espera.

O sucesso inicial da página é a clareza da oferta e a capacidade de captar interesse de potenciais clientes — não demonstrar funcionalidades completas do SaaS.

## 15. Orientação final para a IA

Antes de executar uma tarefa:
1. Leia este arquivo e o `PRD.md`, se ele existir.
2. Inspecione o repositório e as dependências atuais.
3. Confirme se a tarefa pertence à landing page.
4. Faça a menor alteração que resolva o problema.
5. Preserve o posicionamento, a identidade visual e o escopo de validação.
6. Verifique o resultado e relate claramente o que foi e não foi testado.

**Regra central:** construa uma landing page de pré-lançamento para validar a proposta de valor de um SaaS de recuperação de orçamentos de oficinas. Não confunda esse objetivo com a construção do SaaS completo.
