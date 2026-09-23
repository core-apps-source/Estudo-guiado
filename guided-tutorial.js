(() => {
  "use strict";

  const GUIDE_KEY = "meu-estudo-guided-tutorial-v1";

  const steps = [
    {
      title: "Visão geral e navegação",
      summary:
        "O MeuEstudo reúne planejamento, execução e acompanhamento em um único lugar. Este guia acompanha você tela por tela, sem alterar seus dados.",
      where: "Barra lateral no computador ou menu inferior no celular.",
      bullets: [
        "No computador, use o menu lateral; no celular, deslize pelo menu inferior para abrir as oito áreas principais.",
        "O botão Guia completo permanece disponível no canto inferior para você voltar a esta explicação quando quiser.",
        "A introdução curta também pode ser reaberta em Configurações > Ver tutorial.",
      ],
      tip: "Comece pelo Dashboard e siga o fluxo: cadastrar aula, estudar, marcar como vista, revisar e acompanhar o progresso.",
    },
    {
      nav: "Dashboard",
      target: "Dashboard",
      title: "Dashboard: o seu ponto de partida",
      summary:
        "Aqui você vê o que precisa ser feito hoje e os próximos compromissos, sem precisar abrir cada área individualmente.",
      where: "Dashboard",
      bullets: [
        "Acompanhe a trilha, pontos, nível, sequência de dias e as aulas de hoje.",
        "Use os atalhos para abrir o cronograma, ver revisões, exercícios e lembretes.",
        "A previsão de término mostra quando o curso acaba; o resumo inteligente sugere um plano para a semana.",
        "A busca no topo encontra aulas e leva você diretamente para a área Aulas.",
      ],
      tip: "Marcar uma aula como vista é o evento que atualiza a trilha, a sequência e o ciclo automático de revisões.",
    },
    {
      nav: "Dashboard",
      target: "CRONÔMETRO DO DIA",
      title: "Cronômetros e sessão de estudo",
      summary:
        "O Dashboard tem cronômetros separados para aulas, revisões e exercícios, além do tempo bruto da sessão.",
      where: "Cartão Cronômetro do dia no Dashboard.",
      bullets: [
        "Inicie, pause e reinicie o cronômetro do tipo de tarefa que estiver fazendo.",
        "O tempo bruto registra a duração total, mesmo quando você alterna entre aulas, revisões e exercícios.",
        "Monte uma sessão informando tempo disponível, energia e prioridade; o app escolhe tarefas que cabem no período.",
        "O que não couber pode ser redistribuído automaticamente, sem mudar a meta semanal.",
      ],
      tip: "Os cronômetros são salvos no aparelho e podem ser recuperados por backup.",
    },
    {
      nav: "Aulas",
      target: "Aulas",
      title: "Aulas e módulos",
      summary:
        "Cadastre o conteúdo do curso, organize-o por módulo e acompanhe o percentual concluído de cada grupo.",
      where: "Aulas",
      bullets: [
        "Use Adicionar aula para informar título, matéria, módulo, data, horário e duração.",
        "Use Cadastrar módulo para colar uma planilha inteira e gerar várias aulas de uma vez.",
        "Filtre entre Todas, Pendentes e Vistas; clique no módulo para expandir ou recolher suas aulas.",
        "Em cada aula, você pode marcar como vista, registrar uma Nota, editar ou remover.",
      ],
      tip: "Ao marcar uma aula como vista, o app agenda automaticamente revisões para 24 horas, 7 dias e 30 dias.",
    },
    {
      nav: "Exercícios",
      target: "Exercícios",
      title: "Exercícios, notas e reforço",
      summary:
        "Registre o resultado de listas, simulados e provas para saber o que precisa ser reforçado.",
      where: "Exercícios",
      bullets: [
        "Informe matéria, módulo, título, data, número de questões e quantidade de erros.",
        "O app calcula acertos, percentual e nota de 0 a 10 automaticamente.",
        "Notas abaixo de 7 ficam como Refazer; notas de 8 a 10 ficam como Passou.",
        "Edite uma nota existente ou remova um registro; uma nota baixa também pode criar um lembrete de reforço.",
      ],
      tip: "Você também pode abrir o formulário de nota diretamente pelo botão Nota dentro de uma aula.",
    },
    {
      nav: "Revisões",
      target: "Revisões",
      title: "Revisões no intervalo certo",
      summary:
        "A área Revisões transforma cada aula concluída em um ciclo de memória e mostra o que está pendente.",
      where: "Revisões",
      bullets: [
        "Veja os totais das próximas 24h, 7 dias e 30 dias e filtre Todas, 24h, 7d ou 30d.",
        "Conclua uma revisão informando se foi fácil, normal ou difícil para registrar a qualidade do estudo.",
        "Use o cronômetro de revisão para acompanhar o tempo dedicado a cada bloco.",
        "Registrar estudo permite criar um ciclo de revisão mesmo para um estudo feito fora da lista de aulas.",
      ],
      tip: "As cotas por dia evitam acumular revisões demais; você pode ajustá-las em Configurações.",
    },
    {
      nav: "Lembretes",
      target: "Lembretes",
      title: "Lembretes e tarefas rápidas",
      summary:
        "Use lembretes para tudo que precisa entrar no radar, mas não é uma aula formal.",
      where: "Lembretes",
      bullets: [
        "Crie um lembrete com texto, data e horário opcional.",
        "Filtre Ativos, Hoje, Atrasados, Próximos e Concluídos.",
        "Marque o lembrete inteiro como feito e, quando existir uma lista, marque cada subtarefa individualmente.",
        "Exclua lembretes que não fazem mais sentido; registros de nota baixa aparecem identificados automaticamente.",
      ],
      tip: "O Dashboard mostra os próximos lembretes para você não precisar consultar esta tela o tempo todo.",
    },
    {
      nav: "Cronograma",
      target: "Cronograma",
      title: "Cronograma por dia, semana e mês",
      summary:
        "Enxergue a mesma programação em diferentes escalas e ajuste qualquer data sem perder o controle do curso.",
      where: "Cronograma",
      bullets: [
        "Alterne entre Dia, Semana e Mês; no calendário mensal, clique em uma data para abrir o dia.",
        "Use as setas para avançar ou voltar no período selecionado.",
        "Adicione, edite, marque como vista ou remova uma aula diretamente na agenda.",
        "A quantidade concluída e pendente fica visível nos dias que têm aulas programadas.",
      ],
      tip: "A escala configurada define onde as aulas novas e as revisões serão distribuídas.",
    },
    {
      nav: "Dashboard",
      target: "PREVISÃO DE TÉRMINO",
      title: "Recuperar atrasos e planejar folgas",
      summary:
        "O app tem ferramentas para imprevistos. Você pode simular cenários ou aplicar uma nova programação somente quando decidir.",
      where: "Atalhos do Dashboard e modal Previsão de término.",
      bullets: [
        "Simular término compara datas e folgas sem mexer no cronograma real.",
        "Vou ficar ocupado adianta aulas e revisões para a data de retorno, respeitando a escala.",
        "Reprogramar atrasadas prioriza o que passou e distribui as aulas a partir de hoje.",
        "Reprogramar pendentes aplica a escala a partir da data escolhida; aulas já vistas não mudam.",
      ],
      tip: "Sempre confira o resumo do modal antes de aplicar uma alteração permanente.",
    },
    {
      nav: "Estatísticas",
      target: "Estatísticas",
      title: "Estatísticas e consistência",
      summary:
        "Use os dados dos últimos 14 dias para entender seu ritmo, não apenas a sensação de produtividade.",
      where: "Estatísticas",
      bullets: [
        "O gráfico mostra as horas estudadas por dia e destaca o melhor dia do período.",
        "Veja média diária, melhor dia, total de horas e quantos dias você estudou.",
        "A sequência atual e os sete dias recentes ajudam a manter a constância.",
        "Matérias em foco mostram onde o curso está avançando; a frase motivacional pode ser trocada em Pular frase.",
      ],
      tip: "A estatística fica mais útil quando você usa os cronômetros ou registra suas sessões com regularidade.",
    },
    {
      nav: "Metas",
      target: "Metas",
      title: "Metas personalizadas",
      summary:
        "Crie objetivos pequenos e acompanhe o avanço deles com um contador simples.",
      where: "Metas",
      bullets: [
        "Digite o nome da meta e defina o alvo, como Fazer 10 exercícios.",
        "Use os botões + e − para atualizar o progresso sem precisar editar a meta.",
        "A barra mostra o percentual concluído e a contagem atual em relação ao alvo.",
        "Remova uma meta quando ela deixar de ser relevante.",
      ],
      tip: "Prefira metas observáveis e curtas: elas alimentam a sensação de avanço todos os dias.",
    },
    {
      nav: "Configurações",
      target: "Configurações",
      title: "Configurações e escala semanal",
      summary:
        "Ajuste o app para a sua rotina e defina como aulas novas e revisões cabem em cada dia.",
      where: "Configurações",
      bullets: [
        "Preencha nome, curso, total de aulas, velocidade dos vídeos, meta mensal de revisões e padrão de revisões por dia.",
        "Em Aulas por dia, use um atalho de escala ou informe quantas aulas entram em cada dia da semana.",
        "Em Revisões por dia, use 0 para deixar um dia sem revisão e ajuste o limite de cada dia.",
        "Salve as configurações para que o Dashboard e o cronograma usem a nova rotina.",
      ],
      tip: "A nova quantidade de aulas começa no dia seguinte; a quantidade de revisões passa a valer hoje.",
    },
    {
      nav: "Configurações",
      target: "Backup",
      title: "Backup, restauração e importação",
      summary:
        "Proteja seu histórico e leve seus estudos para outro navegador ou aparelho.",
      where: "Menu do perfil ou seção Backup em Configurações.",
      bullets: [
        "Baixar backup salva aulas, revisões, exercícios, lembretes, sessões, configurações e cronômetros em JSON.",
        "Restaurar backup substitui os dados atuais pelo arquivo escolhido após uma confirmação.",
        "Importar revisões do outro app recupera o histórico antigo sem duplicar ciclos já existentes.",
        "Resetar dados apaga o planejamento e volta ao início; use somente depois de confirmar que o backup está seguro.",
      ],
      tip: "Faça um backup antes de grandes mudanças no cronograma ou de limpar o navegador.",
    },
    {
      nav: "Dashboard",
      target: "PROGRESSO DO CURSO",
      title: "Trilha, pontos e sequência",
      summary:
        "A trilha transforma pequenas ações em um sinal visual de progresso contínuo.",
      where: "Cartão da trilha no Dashboard.",
      bullets: [
        "Cada aula vista movimenta o personagem e atualiza o progresso do curso.",
        "A sequência de dias valoriza estudar com frequência, não fazer uma maratona isolada.",
        "O progresso por módulo e por matéria mostra onde você já avançou e o que vem a seguir.",
        "Use a trilha como feedback: ela complementa as estatísticas, mas não substitui seu planejamento.",
      ],
      tip: "Um estudo curto e concluído hoje vale mais para a sequência do que um plano perfeito que nunca começa.",
    },
    {
      title: "Pronto para começar",
      summary:
        "O fluxo principal é simples: planeje a aula, estude com o cronômetro, marque como vista, faça as revisões e ajuste o plano quando a rotina mudar.",
      where: "Qualquer tela do MeuEstudo.",
      bullets: [
        "O app funciona offline e mantém os dados no armazenamento local deste navegador.",
        "Use o backup para transportar os dados; ele é a sua cópia de segurança.",
        "O guia completo pode ser reaberto pelo botão no canto inferior a qualquer momento.",
      ],
      tip: "Comece agora por Adicionar aula. O primeiro ciclo de revisão será criado quando você marcar essa aula como vista.",
    },
  ];

  let current = 0;
  let layer = null;
  let focus = null;
  let focusTimer = null;

  const isVisible = (element) => {
    if (!element || element.hidden) return false;
    const style = window.getComputedStyle(element);
    const rect = element.getBoundingClientRect();
    return style.display !== "none" && style.visibility !== "hidden" && rect.width > 0 && rect.height > 0;
  };

  const visibleButtons = () =>
    [...document.querySelectorAll("button")].filter((button) => isVisible(button));

  const findButton = (label) =>
    visibleButtons().find((button) => button.textContent.trim() === label) ||
    visibleButtons().find((button) => button.textContent.trim().includes(label));

  const findTarget = (step) => {
    if (step.nav) return findButton(step.nav);
    if (!step.target) return null;

    const candidates = [...document.querySelectorAll("h1, h2, h3, p, span, button, [role='heading'], div")]
      .filter((element) => isVisible(element) && element.textContent.trim() === step.target)
      .sort((a, b) => a.getBoundingClientRect().width * a.getBoundingClientRect().height - b.getBoundingClientRect().width * b.getBoundingClientRect().height);

    return candidates[0] || null;
  };

  const moveFocus = () => {
    if (!focus || !layer) return;
    const target = findTarget(steps[current]);
    if (!target) {
      focus.hidden = true;
      return;
    }

    const rect = target.getBoundingClientRect();
    focus.hidden = false;
    focus.style.left = `${Math.max(4, rect.left - 5)}px`;
    focus.style.top = `${Math.max(4, rect.top - 5)}px`;
    focus.style.width = `${rect.width + 10}px`;
    focus.style.height = `${rect.height + 10}px`;
  };

  const navigateTo = (label) => {
    let button = findButton(label);

    // Configurações is inside the profile menu on small screens.
    if (!button && label === "Configurações") {
      const profileButton = visibleButtons().find(
        (candidate) =>
          candidate.querySelector(".rounded-full") &&
          (candidate.querySelector("img") || candidate.querySelector(".text-xs.font-bold"))
      );
      profileButton?.click();
      window.setTimeout(() => findButton(label)?.click(), 40);
    }

    if (button) button.click();
    window.clearTimeout(focusTimer);
    focusTimer = window.setTimeout(moveFocus, 220);
  };

  const makeElement = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  };

  const render = () => {
    if (!layer) return;
    const step = steps[current];
    const number = String(current + 1).padStart(2, "0");
    const total = steps.length;

    layer.querySelector(".guided-tutorial-kicker").textContent = `GUIA COMPLETO · PASSO ${current + 1} DE ${total}`;
    layer.querySelector(".guided-tutorial-step-mark").textContent = number;
    layer.querySelector(".guided-tutorial-title").textContent = step.title;
    layer.querySelector(".guided-tutorial-summary").textContent = step.summary;
    layer.querySelector(".guided-tutorial-where-value").textContent = step.where;

    const list = layer.querySelector(".guided-tutorial-list");
    list.replaceChildren(...step.bullets.map((bullet) => makeElement("li", "", bullet)));

    const tip = layer.querySelector(".guided-tutorial-tip");
    tip.textContent = step.tip || "";
    tip.hidden = !step.tip;

    const progress = layer.querySelector(".guided-tutorial-progress");
    [...progress.children].forEach((item, index) => item.classList.toggle("is-active", index <= current));

    const back = layer.querySelector('[data-guide-action="back"]');
    back.disabled = current === 0;
    layer.querySelector('[data-guide-action="next"]').textContent = current === total - 1 ? "Concluir" : "Próximo";

    const open = layer.querySelector('[data-guide-action="open"]');
    open.hidden = !step.nav;

    if (step.nav) navigateTo(step.nav);
    else window.setTimeout(moveFocus, 80);
  };

  const close = (completed = false) => {
    if (!layer) return;
    if (completed) {
      try {
        localStorage.setItem(GUIDE_KEY, "1");
      } catch {
        // Storage may be blocked; the guide still works for this session.
      }
    }
    window.clearTimeout(focusTimer);
    document.body.classList.remove("guided-tutorial-open");
    layer.remove();
    layer = null;
    focus = null;
  };

  const open = () => {
    if (layer) return;
    current = 0;
    layer = makeElement("div", "guided-tutorial-layer");
    layer.setAttribute("role", "dialog");
    layer.setAttribute("aria-modal", "true");
    layer.setAttribute("aria-labelledby", "guided-tutorial-title");

    const backdrop = makeElement("div", "guided-tutorial-backdrop");
    focus = makeElement("div", "guided-tutorial-focus");
    focus.setAttribute("aria-hidden", "true");

    const card = makeElement("section", "guided-tutorial-card");
    const header = makeElement("header", "guided-tutorial-header");
    const kicker = makeElement("p", "guided-tutorial-kicker");
    const closeButton = makeElement("button", "guided-tutorial-close", "×");
    closeButton.type = "button";
    closeButton.setAttribute("aria-label", "Fechar guia");
    closeButton.dataset.guideAction = "close";
    header.append(kicker, closeButton);

    const body = makeElement("div", "guided-tutorial-body");
    const title = makeElement("h2", "guided-tutorial-title");
    title.id = "guided-tutorial-title";
    body.append(
      makeElement("div", "guided-tutorial-step-mark"),
      title,
      makeElement("p", "guided-tutorial-summary")
    );

    const where = makeElement("div", "guided-tutorial-where");
    where.append(
      makeElement("span", "guided-tutorial-where-label", "Onde encontrar"),
      makeElement("span", "guided-tutorial-where-value")
    );
    body.append(where);
    body.append(makeElement("ul", "guided-tutorial-list"));
    body.append(makeElement("div", "guided-tutorial-tip"));

    const progress = makeElement("div", "guided-tutorial-progress");
    steps.forEach(() => progress.append(makeElement("span")));

    const footer = makeElement("footer", "guided-tutorial-footer");
    const back = makeElement("button", "guided-tutorial-button", "Voltar");
    back.type = "button";
    back.dataset.guideAction = "back";
    const actions = makeElement("div", "guided-tutorial-actions");
    const openScreen = makeElement("button", "guided-tutorial-button", "Abrir tela");
    openScreen.type = "button";
    openScreen.dataset.guideAction = "open";
    const next = makeElement("button", "guided-tutorial-button is-primary", "Próximo");
    next.type = "button";
    next.dataset.guideAction = "next";
    actions.append(openScreen, next);
    footer.append(back, actions);

    card.append(header, body, progress, footer);
    layer.append(backdrop, focus, card);
    document.body.append(layer);
    document.body.classList.add("guided-tutorial-open");

    layer.addEventListener("click", (event) => {
      if (event.target === backdrop) {
        close();
        return;
      }
      const action = event.target.closest("[data-guide-action]")?.dataset.guideAction;
      if (!action) return;
      if (action === "close") close();
      if (action === "back" && current > 0) {
        current -= 1;
        render();
      }
      if (action === "open") {
        const step = steps[current];
        if (step.nav) navigateTo(step.nav);
      }
      if (action === "next") {
        if (current === steps.length - 1) close(true);
        else {
          current += 1;
          render();
        }
      }
    });

    render();
    closeButton.focus();
  };

  const mountLauncher = () => {
    if (document.getElementById("guided-tutorial-launcher")) return;
    const launcher = makeElement("button", "", "");
    launcher.id = "guided-tutorial-launcher";
    launcher.type = "button";
    launcher.setAttribute("aria-label", "Abrir guia completo do MeuEstudo");
    const icon = makeElement("span", "", "?");
    const label = makeElement("span", "", "Guia completo");
    launcher.append(icon, label);
    launcher.addEventListener("click", open);
    document.body.append(launcher);
  };

  const start = () => {
    mountLauncher();
    const observer = new MutationObserver(() => {
      mountLauncher();
      if (layer) moveFocus();
    });
    observer.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("resize", moveFocus);
    window.addEventListener("scroll", moveFocus, true);
    window.addEventListener("keydown", (event) => {
      if (!layer) return;
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft" && current > 0) {
        current -= 1;
        render();
      }
      if (event.key === "ArrowRight" && current < steps.length - 1) {
        current += 1;
        render();
      }
    });
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start, { once: true });
  else start();
})();
