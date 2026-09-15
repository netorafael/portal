import React from "react";

// =========================================================================
// ÍCONES GRÁFICOS TEMÁTICOS DO PORTAL DE SERVIÇOS DO TST (DESIGN SYSTEM)
// Tamanho e cores alinhados ao padrão: 100x100 viewBox, stroke/fill em currentColor (#1351b4)
// Cada ícone representa fielmente o tema e a finalidade de cada serviço oficial.
// =========================================================================

// 1. Emitir Certidão de Histórico do Andamento Processual
// Tema: Documento judicial com linha do tempo de andamento (etapas processuais sequenciais e avanço)
export const IconAndamentoProcessual = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className} 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="4.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {/* Folha do Processo com dobra superior direita */}
    <path d="M24 12 h36 l20 20 v52 a5 5 0 0 1 -5 5 H24 a5 5 0 0 1 -5 -5 V17 a5 5 0 0 1 5 -5 Z" />
    <path d="M60 12 v20 h20" strokeWidth="4.5" />

    {/* Linha do tempo de andamento vertical */}
    <path d="M36 34 v36" strokeWidth="3.5" strokeDasharray="1 1" />

    {/* Etapa 1: Registro Inicial */}
    <circle cx="36" cy="36" r="3.5" fill="currentColor" />
    <path d="M46 36 h22" strokeWidth="4" />

    {/* Etapa 2: Decisão Intermediária */}
    <circle cx="36" cy="52" r="3.5" fill="currentColor" />
    <path d="M46 52 h16" strokeWidth="4" />

    {/* Etapa 3: Andamento Atual com Flecha de Progresso */}
    <circle cx="36" cy="68" r="4.5" strokeWidth="4" />
    <path d="M46 68 h18 l-4 -4 M64 68 l-4 4" strokeWidth="4" />
  </svg>
);

// 2. Validar Certidão de Histórico do Andamento Processual
// Tema: Escudo de segurança e autenticidade com selo de verificação e código de validação
export const IconValidarAndamento = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className} 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="4.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {/* Escudo de Segurança Institucional */}
    <path 
      d="M50 12 C66 12 78 18 80 24 C80 56 50 82 50 82 C50 82 20 56 20 24 C22 18 34 12 50 12 Z" 
      strokeWidth="5"
    />
    
    {/* Marca de Verificado / Autêntico em destaque */}
    <path d="M35 46 L45 56 L65 34" strokeWidth="6.5" />

    {/* Hash / Código de Autenticidade Digital */}
    <path d="M34 66 h7 M46 66 h10 M61 66 h5" strokeWidth="4" />
  </svg>
);

// 3. Emitir Certidão de Processos em Tramitação no TST (via CNPJ de Empresas)
// Tema: Empresa / Organização corporativa (CNPJ) com processos ativos no Tribunal
export const IconProcessosTramitacao = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className} 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="4.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {/* Edifício Empresarial Corporativo (CNPJ) */}
    <path d="M16 34 h26 v52 H16 Z" strokeWidth="4.5" />
    {/* Porta do Edifício */}
    <path d="M25 86 v-12 h8 v12" strokeWidth="4" />
    {/* Janelas Corporativas */}
    <rect x="22" y="42" width="4" height="5" rx="0.5" fill="currentColor" stroke="none" />
    <rect x="30" y="42" width="4" height="5" rx="0.5" fill="currentColor" stroke="none" />
    <rect x="22" y="53" width="4" height="5" rx="0.5" fill="currentColor" stroke="none" />
    <rect x="30" y="53" width="4" height="5" rx="0.5" fill="currentColor" stroke="none" />

    {/* Pasta / Processo Judicial em Tramitação ao lado */}
    <path d="M50 24 h26 a4 4 0 0 1 4 4 v58 H46 V28 a4 4 0 0 1 4 -4 Z" strokeWidth="4.5" />
    <path d="M54 36 h18 M54 46 h14 M54 56 h18" strokeWidth="3.5" />

    {/* Seta de Tramitação Ativa */}
    <path d="M56 70 h18 l-4 -4 M74 70 l-4 4" strokeWidth="4" />

    {/* Linha de Solo Unificada */}
    <path d="M10 86 h80" strokeWidth="4" />
  </svg>
);

// 4. Validar Certidão de Processos em Tramitação no TST
// Tema: Validação oficial de processos corporativos com selo judiciário redondo
export const IconValidarTramitacao = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className} 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="4.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {/* Folha da Certidão com mini-edifício */}
    <path d="M22 14 h36 l18 18 v52 a4 4 0 0 1 -4 4 H22 a4 4 0 0 1 -4 -4 V18 a4 4 0 0 1 4 -4 Z" strokeWidth="4.5" />
    <path d="M58 14 v18 h18" strokeWidth="4" />
    
    {/* Mini representação corporativa */}
    <path d="M28 32 h16 v20 H28 Z" strokeWidth="3.5" />
    <path d="M33 38 h6 M33 44 h6" strokeWidth="2.5" />

    {/* Selo Redondo de Validação do Tribunal com Checkmark */}
    <circle cx="64" cy="64" r="18" strokeWidth="4.5" fill="#eef4ff" />
    <circle cx="64" cy="64" r="14" strokeWidth="2" strokeDasharray="3 2" />
    <path d="M55 64 L61 70 L73 57" strokeWidth="4.5" />
  </svg>
);

// 5. Emitir Certidão de Exercício da Advocacia
// Tema: Balança da Justiça oficial com representação da prática da advocacia (OAB / atuação jurídica)
export const IconExercicioAdvocacia = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className} 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="4.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {/* Balança da Justiça - Haste Central e Pratos */}
    <path d="M50 16 v58" strokeWidth="5" />
    <path d="M22 26 h56" strokeWidth="5" />
    {/* Prato Esquerdo */}
    <path d="M22 26 L14 46 h16 Z" strokeWidth="3.5" />
    {/* Prato Direito */}
    <path d="M78 26 L70 46 h16 Z" strokeWidth="3.5" />
    {/* Cúpula / Topo da Haste */}
    <circle cx="50" cy="16" r="3.5" fill="currentColor" />

    {/* Maleta / Credencial do Advogado na base */}
    <rect x="36" y="66" width="28" height="18" rx="3" strokeWidth="4" />
    <path d="M44 66 v-4 a2 2 0 0 1 2 -2 h8 a2 2 0 0 1 2 2 v4" strokeWidth="3" />
    <path d="M36 74 h28" strokeWidth="2.5" />
    <circle cx="50" cy="74" r="1.5" fill="currentColor" />
  </svg>
);

// 6. Validar Certidão de Exercício da Advocacia
// Tema: Balança da Justiça protegida por brasão/escudo de validação profissional com selo
export const IconValidarAdvocacia = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className} 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="4.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {/* Escudo / Brasão Oficial de Verificação */}
    <path 
      d="M50 12 C72 12 80 18 80 44 C80 66 50 86 50 86 C50 86 20 66 20 44 C20 18 28 12 50 12 Z" 
      strokeWidth="4.5"
    />
    
    {/* Balança no Interior do Brasão */}
    <path d="M34 34 h32" strokeWidth="4" />
    <path d="M50 30 v28" strokeWidth="4" />
    <path d="M34 34 L28 44 h12 Z" strokeWidth="2.5" />
    <path d="M66 34 L60 44 h12 Z" strokeWidth="2.5" />

    {/* Selo de Conferência de Autenticidade */}
    <circle cx="68" cy="68" r="12" strokeWidth="3.5" fill="#eef4ff" />
    <path d="M63 68 L66 71 L73 63" strokeWidth="3.5" />
  </svg>
);

// 7. Pedir Certidão de Objeto e Pé
// Tema: Dossiê de inteiro teor com lupa de exame minucioso e marcador de página narrativa
export const IconCertidaoObjetoPe = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className} 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="4.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {/* Dossiê / Autos do Processo Judicial */}
    <path d="M22 16 h42 a4 4 0 0 1 4 4 v62 H22 a4 4 0 0 1 -4 -4 V20 a4 4 0 0 1 4 -4 Z" strokeWidth="4.5" />
    {/* Lombada com anéis do processo */}
    <path d="M16 28 h6 M16 46 h6 M16 64 h6" strokeWidth="4" />
    
    {/* Fita marcadora de página do Objeto e Pé */}
    <path d="M46 16 v16 l5 -4 l5 4 v-16" strokeWidth="3" fill="currentColor" fillOpacity="0.15" />

    {/* Linhas de texto do relatório processual */}
    <path d="M30 38 h12 M30 48 h16 M30 58 h10" strokeWidth="3.5" />

    {/* Lupa de Análise Minuciosa (Objeto e Pé) */}
    <circle cx="62" cy="58" r="15" strokeWidth="5" fill="#eef4ff" />
    <path d="M73 69 L86 82" strokeWidth="6" />
    <path d="M55 58 h14 M57 54 h10" strokeWidth="2.5" />
  </svg>
);

// 8. Pedir Certidão Processual Personalizada
// Tema: Certidão sob medida com caneta-tinteiro assinando pedido especial e estrela de personalização
export const IconCertidaoPersonalizada = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className} 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="4.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {/* Certidão Formal com dobra e moldura decorativa */}
    <path d="M22 14 h38 l18 18 v52 a4 4 0 0 1 -4 4 H22 a4 4 0 0 1 -4 -4 V18 a4 4 0 0 1 4 -4 Z" strokeWidth="4.5" />
    <path d="M60 14 v18 h18" strokeWidth="4" />

    {/* Linhas de Requerimento Específico */}
    <path d="M30 32 h24 M30 42 h32 M30 52 h18" strokeWidth="3.5" />

    {/* Caneta-Tinteiro Clássica (Pena de Escrita) */}
    <path d="M78 40 L58 60 l-5 14 l14 -5 L87 49 a3 3 0 0 0 0 -5 l-4 -4 a3 3 0 0 0 -5 0 Z" strokeWidth="4" fill="#eef4ff" />
    <path d="M53 74 l4 -4" strokeWidth="2.5" />

    {/* Assinatura / Traço Manual no rodapé */}
    <path d="M30 70 c5 -3 10 3 15 -1" strokeWidth="3" />

    {/* Estrela de Personalização no topo */}
    <path d="M78 18 l1.5 3.5 l3.5 1.5 l-3.5 1.5 l-1.5 3.5 l-1.5 -3.5 l-3.5 -1.5 l3.5 -1.5 Z" fill="currentColor" stroke="none" />
  </svg>
);

// 9. Consultar Indisponibilidade de Sistemas
// Tema: Monitor de TI / Servidor com pulso de disponibilidade, alerta e relógio de indisponibilidade
export const IconIndisponibilidadeSistemas = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className} 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="4.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {/* Tela do Monitor de Sistemas */}
    <rect x="12" y="14" width="76" height="52" rx="6" strokeWidth="5" />
    {/* Base / Suporte do Monitor */}
    <path d="M38 66 L30 82 h40 L62 66" strokeWidth="5" />

    {/* Gráfico de Pulso / Uptime de Rede */}
    <path d="M20 42 h10 l4 -12 l8 24 l7 -18 l5 6 h14" strokeWidth="3.5" />

    {/* Relógio / Registro de Horário de Indisponibilidade no Canto */}
    <circle cx="70" cy="30" r="10" strokeWidth="3.5" fill="#eef4ff" />
    <path d="M70 24 v6 h5" strokeWidth="2.5" />

    {/* Indicador de Status do PJe */}
    <circle cx="22" cy="22" r="2.5" fill="currentColor" stroke="none" />
  </svg>
);

// =========================================================================
// ALIASES PARA COMPATIBILIDADE RETROATIVA COM ServiceSimulator.tsx
// =========================================================================
export const CNDTSvg = IconValidarTramitacao;
export const IndisponibilidadeSvg = IconIndisponibilidadeSistemas;
export const ExercioAdvocaciaSvg = IconExercicioAdvocacia;
export const AndamentoProcessualSvg = IconAndamentoProcessual;
export const DistribuicaoFeitosSvg = IconProcessosTramitacao;
export const ObjetoPeSvg = IconCertidaoObjetoPe;
export const DemaisCertidoesSvg = IconCertidaoPersonalizada;

