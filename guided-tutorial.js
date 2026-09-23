(() => {
  "use strict";

  const GUIDE_KEY = "meu-estudo-guided-tutorial-v1";
  const PROGRESS_KEY = "meu-estudo-guided-tutorial-progress-v2";
  const NAV_LABELS = [
    "Dashboard",
    "Aulas",
    "Exercícios",
    "Revisões",
    "Lembretes",
    "Cronograma",
    "Estatísticas",
    "Metas",
    "Configurações",
  ];

  const steps = [
    {
      title: "Visão geral e navegação",
      summary:
        "O MeuEstudo reúne planejamento, execução e acompanhamento em um único lugar. Este guia acompanha você tela por tela, sem alterar seus dados.",
      where: "Barra lateral no computador ou menu inferior no celular.",
      bullets: [
        "No computador, use o menu lateral; no celular, deslize pelo menu inferior para abrir as oito áreas principais.",
        "O botão Guia completo permanece disponível no canto inferior para você voltar a esta explicação quando quiser.",
        "O mesmo guia prático pode ser reaberto pelo botão Guia completo a qualquer momento.",
      ],
      tip: "Comece pelo Dashboard e siga o fluxo: cadastrar aula, estudar, marcar como vista, revisar e acompanhar o progresso.",
      task: {
        instruction: "Clique em uma área do menu para começar.",
        parts: [
          {
            kind: "click",
            labels: NAV_LABELS,
            hint: "Clique em Dashboard, Aulas ou outra área do menu.",
          },
        ],
      },
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
      task: {
        instruction: "Abra uma ação do Dashboard para reconhecer os atalhos.",
        parts: [
          {
            kind: "click",
            labels: ["Ver cronograma", "Resumo inteligente", "Ajustar"],
            hint: "Clique em Ver cronograma, Resumo inteligente ou Ajustar.",
          },
        ],
      },
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
      task: {
        instruction: "Abra e feche o tempo bruto para conhecer o controle dos cronômetros.",
        parts: [
          {
            kind: "click",
            labels: ["Mostrar só o tempo bruto", "Ver tempo bruto"],
            hint: "Clique no cartão Tempo bruto.",
          },
          {
            kind: "click",
            labels: [
              "Fechar tempo bruto e mostrar os cronômetros atuais",
              "Voltar aos cronômetros de aulas, revisões e exercícios",
            ],
            hint: "Clique novamente no cartão para voltar.",
          },
        ],
      },
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
      task: {
        instruction: "Abra o formulário de aula e feche ou salve para experimentar o fluxo.",
        parts: [
          {
            kind: "click",
            labels: ["Adicionar aula"],
            hint: "Clique em Adicionar aula.",
          },
          {
            kind: "click",
            labels: ["Cancelar", "Salvar aula"],
            hint: "Confira os campos e clique em Cancelar ou Salvar aula.",
          },
        ],
      },
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
      task: {
        instruction: "Preencha a matéria, informe o resultado e salve uma nota.",
        parts: [
          {
            kind: "input",
            selector: 'input[placeholder="Ex: Pandas"]',
            hint: "Digite uma matéria no campo Matéria.",
          },
          {
            kind: "click",
            labels: ["Salvar nota", "Atualizar nota"],
            hint: "Clique em Salvar nota.",
          },
        ],
      },
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
      task: {
        instruction: "Registre um estudo e deixe o app agendar o ciclo de revisão.",
        parts: [
          {
            kind: "click",
            labels: ["Registrar estudo"],
            hint: "Clique em Registrar estudo.",
          },
          {
            kind: "input",
            selector: 'input[placeholder="Ex.: Matemática"]',
            hint: "Digite a matéria estudada.",
          },
          {
            kind: "input",
            selector: 'input[placeholder="Ex.: Equações do 2º grau"]',
            hint: "Digite o assunto estudado.",
          },
          {
            kind: "click",
            labels: ["Salvar e agendar revisões"],
            hint: "Clique em Salvar e agendar revisões.",
          },
        ],
      },
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
      task: {
        instruction: "Crie um lembrete simples para praticar o acompanhamento de tarefas.",
        parts: [
          {
            kind: "input",
            selector: 'input[placeholder*="Comprar caderno"]',
            hint: "Digite o texto do lembrete.",
          },
          {
            kind: "click",
            labels: ["Adicionar"],
            hint: "Clique em Adicionar.",
          },
        ],
      },
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
      task: {
        instruction: "Alterne a visualização do cronograma.",
        parts: [
          {
            kind: "click",
            labels: ["Semana", "Mês"],
            hint: "Clique em Semana ou Mês.",
          },
        ],
      },
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
      task: {
        instruction: "Abra uma simulação ou o resumo inteligente e feche sem aplicar mudanças.",
        parts: [
          {
            kind: "click",
            labels: [
              "Simular término",
              "Vou ficar ocupado",
              "Reprogramar atrasadas",
              "Resumo inteligente",
            ],
            hint: "Clique em uma ferramenta de recuperação no Dashboard.",
          },
          {
            kind: "click",
            labels: ["Fechar", "Agora não"],
            hint: "Leia o resumo e clique em Fechar ou Agora não.",
          },
        ],
      },
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
      task: {
        instruction: "Alterne a frase motivacional para testar uma ação da tela.",
        parts: [
          {
            kind: "click",
            labels: ["Pular frase"],
            hint: "Clique em Pular frase.",
          },
        ],
      },
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
      task: {
        instruction: "Crie uma meta pequena e atualize seu acompanhamento.",
        parts: [
          {
            kind: "input",
            selector: 'input[placeholder="Ex: Fazer 10 exercícios"]',
            hint: "Digite o nome de uma meta.",
          },
          {
            kind: "click",
            labels: ["Adicionar"],
            hint: "Clique em Adicionar.",
          },
        ],
      },
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
      task: {
        instruction: "Salve as configurações para aplicar a rotina ao app.",
        parts: [
          {
            kind: "click",
            labels: ["Salvar configurações"],
            hint: "Clique em Salvar configurações.",
          },
        ],
      },
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
      task: {
        instruction: "Baixe um backup para praticar a proteção dos seus dados.",
        parts: [
          {
            kind: "click",
            labels: ["Baixar backup"],
            hint: "Clique em Baixar backup.",
          },
        ],
      },
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
      task: {
        manual: true,
        instruction: "Observe a porcentagem do curso e a trilha. Quando entender onde o progresso aparece, confirme abaixo.",
      },
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
      task: {
        manual: true,
        instruction: "Você concluiu o percurso. Confirme para encerrar o guia e guardar seu progresso.",
      },
    },
  ];

  let current = 0;
  let layer = null;
  let focus = null;
  let focusTimer = null;
  let minimized = false;
  let completedSteps = new Set();
  let taskProgress = steps.map(() => 0);

  const resetProgress = () => {
    current = 0;
    completedSteps = new Set();
    taskProgress = steps.map(() => 0);
  };

  const loadProgress = () => {
    resetProgress();
    try {
      if (localStorage.getItem(GUIDE_KEY)) return;
      const saved = JSON.parse(localStorage.getItem(PROGRESS_KEY) || "null");
      if (!saved || typeof saved !== "object") return;
      current = Math.max(0, Math.min(steps.length - 1, Number(saved.current) || 0));
      completedSteps = new Set(
        (Array.isArray(saved.completed) ? saved.completed : []).filter(
          (index) => Number.isInteger(index) && index >= 0 && index < steps.length
        )
      );
      taskProgress = steps.map((step, index) =>
        Math.max(0, Math.min(step.task?.parts?.length || 0, Number(saved.progress?.[index]) || 0))
      );
    } catch {
      resetProgress();
    }
  };

  const saveProgress = () => {
    try {
      localStorage.setItem(
        PROGRESS_KEY,
        JSON.stringify({
          current,
          completed: [...completedSteps],
          progress: taskProgress,
        })
      );
    } catch {
      // Storage may be blocked; the current guide session still works.
    }
  };

  const isCurrentComplete = () => completedSteps.has(current);

  const normalize = (value) => String(value || "").replace(/\s+/g, " ").trim().toLowerCase();

  const actionLabel = (element) =>
    normalize(
      [element?.textContent, element?.getAttribute("aria-label"), element?.getAttribute("title")]
        .filter(Boolean)
        .join(" ")
    );

  const matchesPart = (part, event) => {
    if (part.kind === "input") {
      const input = event.target;
      return (
        (event.type === "input" || event.type === "change") &&
        input?.matches?.(part.selector) &&
        String(input.value || "").trim().length > 0
      );
    }

    if (event.type !== "click") return false;
    const element = event.target?.closest?.("button, a, [role='button']");
    if (!element || (part.selector && !element.matches(part.selector))) return false;
    const label = actionLabel(element);
    return (part.labels || []).some((expected) => label.includes(normalize(expected)));
  };

  const completeCurrent = () => {
    const task = steps[current].task;
    if (!task?.manual && taskProgress[current] < (task?.parts?.length || 0)) return;
    completedSteps.add(current);
    saveProgress();
    render({ navigate: false });
  };

  const handleTaskEvent = (event) => {
    if (!layer || event.isTrusted === false || event.target?.closest?.(".guided-tutorial-card")) return;
    const task = steps[current].task;
    const part = task?.parts?.[taskProgress[current]];
    if (!part || !matchesPart(part, event)) return;

    taskProgress[current] += 1;
    if (taskProgress[current] >= task.parts.length) completedSteps.add(current);
    saveProgress();
    render({ navigate: false });
  };

  const replaceLegacyTutorial = () => {
    if (layer) return;
    const legacy = [...document.querySelectorAll('[role="dialog"]')].find(
      (dialog) => dialog.querySelector('button[title="Pular tutorial"]') && dialog.textContent.includes("TUTORIAL")
    );
    if (!legacy || legacy.dataset.practicalGuide) return;
    legacy.dataset.practicalGuide = "1";
    legacy.querySelector('button[title="Pular tutorial"]')?.click();
    window.setTimeout(() => {
      if (!layer) open();
    }, 80);
  };

  const handleLegacyTrigger = (event) => {
    if (event.isTrusted === false || event.target?.closest?.(".guided-tutorial-card")) return;
    const button = event.target?.closest?.("button");
    if (button?.textContent.trim() !== "Ver tutorial") return;
    event.preventDefault();
    event.stopImmediatePropagation();
    open();
  };

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

  const render = ({ navigate = true } = {}) => {
    if (!layer) return;
    const step = steps[current];
    const task = step.task || {};
    const parts = task.parts || [];
    const done = isCurrentComplete();
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
    [...progress.children].forEach((item, index) => {
      item.classList.toggle("is-active", index < current || completedSteps.has(index));
      item.classList.toggle("is-current", index === current);
    });

    const taskBox = layer.querySelector(".guided-tutorial-task");
    const taskInstruction = layer.querySelector(".guided-tutorial-task-instruction");
    const taskState = layer.querySelector(".guided-tutorial-task-state");
    const manualComplete = layer.querySelector('[data-guide-action="manual-complete"]');
    taskBox.classList.toggle("is-done", done);
    taskInstruction.textContent = task.instruction || "Siga a orientação na tela.";
    taskState.textContent = done
      ? "Etapa concluída. O próximo passo está liberado."
      : task.manual
        ? "Quando terminar, confirme a conclusão abaixo."
        : `Ação ${Math.min(taskProgress[current] + 1, parts.length)} de ${parts.length}: ${parts[taskProgress[current]]?.hint || task.instruction}`;
    manualComplete.hidden = !task.manual || done;

    const back = layer.querySelector('[data-guide-action="back"]');
    back.disabled = current === 0;
    const next = layer.querySelector('[data-guide-action="next"]');
    next.disabled = !done;
    next.textContent = current === total - 1 ? "Concluir" : "Próximo";

    const open = layer.querySelector('[data-guide-action="open"]');
    open.hidden = !step.nav;

    const minimize = layer.querySelector('[data-guide-action="minimize"]');
    minimize.textContent = minimized ? "+" : "−";
    minimize.setAttribute("aria-label", minimized ? "Mostrar instrução" : "Minimizar instrução");

    if (navigate && step.nav) navigateTo(step.nav);
    else window.setTimeout(moveFocus, 80);
  };

  const close = (completed = false) => {
    if (!layer) return;
    if (completed) {
      try {
        localStorage.setItem(GUIDE_KEY, "1");
        localStorage.removeItem(PROGRESS_KEY);
      } catch {
        // Storage may be blocked; the guide still works for this session.
      }
    } else {
      saveProgress();
    }
    window.clearTimeout(focusTimer);
    document.body.classList.remove("guided-tutorial-open");
    layer.remove();
    layer = null;
    focus = null;
  };

  const open = () => {
    if (layer) return;
    loadProgress();
    minimized = false;
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
    const headerActions = makeElement("div", "guided-tutorial-header-actions");
    const minimizeButton = makeElement("button", "guided-tutorial-minimize", "−");
    minimizeButton.type = "button";
    minimizeButton.dataset.guideAction = "minimize";
    minimizeButton.setAttribute("aria-label", "Minimizar instrução");
    const closeButton = makeElement("button", "guided-tutorial-close", "×");
    closeButton.type = "button";
    closeButton.setAttribute("aria-label", "Fechar guia");
    closeButton.dataset.guideAction = "close";
    headerActions.append(minimizeButton, closeButton);
    header.append(kicker, headerActions);

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

    const taskBox = makeElement("div", "guided-tutorial-task");
    taskBox.append(
      makeElement("span", "guided-tutorial-task-label", "Faça agora"),
      makeElement("p", "guided-tutorial-task-instruction"),
      makeElement("p", "guided-tutorial-task-state")
    );
    const manualComplete = makeElement(
      "button",
      "guided-tutorial-button guided-tutorial-task-confirm",
      "Marcar etapa como concluída"
    );
    manualComplete.type = "button";
    manualComplete.dataset.guideAction = "manual-complete";
    taskBox.append(manualComplete);
    body.append(taskBox);

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
      if (action === "minimize") {
        minimized = !minimized;
        card.classList.toggle("is-collapsed", minimized);
        render({ navigate: false });
      }
      if (action === "manual-complete") completeCurrent();
      if (action === "back" && current > 0) {
        current -= 1;
        saveProgress();
        render();
      }
      if (action === "open") {
        const step = steps[current];
        if (step.nav) navigateTo(step.nav);
      }
      if (action === "next") {
        if (!isCurrentComplete()) return;
        if (current === steps.length - 1) close(true);
        else {
          current += 1;
          saveProgress();
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
    replaceLegacyTutorial();
    const observer = new MutationObserver(() => {
      mountLauncher();
      replaceLegacyTutorial();
      if (layer) moveFocus();
    });
    observer.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("resize", moveFocus);
    window.addEventListener("scroll", moveFocus, true);
    document.addEventListener("click", handleTaskEvent, true);
    document.addEventListener("click", handleLegacyTrigger, true);
    document.addEventListener("input", handleTaskEvent, true);
    document.addEventListener("change", handleTaskEvent, true);
    window.addEventListener("keydown", (event) => {
      if (!layer) return;
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft" && current > 0) {
        current -= 1;
        saveProgress();
        render();
      }
      if (event.key === "ArrowRight" && isCurrentComplete()) {
        if (current === steps.length - 1) close(true);
        else {
          current += 1;
          saveProgress();
          render();
        }
      }
    });
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start, { once: true });
  else start();
})();
