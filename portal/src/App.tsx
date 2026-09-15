/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from "react";
import { 
  FileCheck2, 
  AlertTriangle, 
  Briefcase, 
  TrendingUp, 
  FolderGit, 
  FileSpreadsheet, 
  HelpCircle,
  Search,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  BookOpen,
  CheckCircle,
  FileText,
  Bookmark,
  ExternalLink,
  ShieldCheck,
  Award,
  Clock,
  CircleDollarSign,
  MapPin,
  Globe,
  Shield,
  Scale,
  Files,
  Printer,
  Facebook,
  Twitter,
  Linkedin,
  Link2,
  Mail,
  Phone,
  Landmark,
  X,
  Filter
} from "lucide-react";

import { ServiceDetail } from "./types";
import { SERVICES_DATA } from "./data";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AcessibilidadeDrawer from "./components/AcessibilidadeDrawer";
import GuiaModal from "./components/GuiaModal";
import GuiaEdicaoServicos from "./components/GuiaEdicaoServicos";
import ServiceSimulator from "./components/ServiceSimulator";
import TstLogo from "./components/TstLogo";
import {
  IconAndamentoProcessual,
  IconValidarAndamento,
  IconProcessosTramitacao,
  IconValidarTramitacao,
  IconExercicioAdvocacia,
  IconValidarAdvocacia,
  IconCertidaoObjetoPe,
  IconCertidaoPersonalizada,
  IconIndisponibilidadeSistemas,
} from "./components/OriginalIcons";

// Dynamic Service Icon Loader with dedicated thematic graphic icons for each service
const ServiceIcon = ({ serviceId, className }: { serviceId: string; className?: string }) => {
  switch (serviceId) {
    case "emitir-certidao-andamento":
      return <IconAndamentoProcessual className={className} aria-hidden="true" />;
    case "validar-certidao-andamento":
      return <IconValidarAndamento className={className} aria-hidden="true" />;
    case "emitir-certidao-arquivados":
      return <IconProcessosTramitacao className={className} aria-hidden="true" />;
    case "validar-certidao-arquivados":
      return <IconValidarTramitacao className={className} aria-hidden="true" />;
    case "emitir-exercicio-advocacia":
      return <IconExercicioAdvocacia className={className} aria-hidden="true" />;
    case "validar-exercicio-advocacia":
      return <IconValidarAdvocacia className={className} aria-hidden="true" />;
    case "pedir-certidao-objeto-pe":
      return <IconCertidaoObjetoPe className={className} aria-hidden="true" />;
    case "pedir-certidao-personalizada":
      return <IconCertidaoPersonalizada className={className} aria-hidden="true" />;
    case "consultar-indisponibilidade":
      return <IconIndisponibilidadeSistemas className={className} aria-hidden="true" />;
    default:
      return <IconCertidaoPersonalizada className={className} aria-hidden="true" />;
  }
};

// Helper function to extract structured metadata for each service (matches Gov.br style)
const getServiceMetadata = (serviceId: string) => {
  switch (serviceId) {
    case "emitir-certidao-andamento":
      return {
        description: "Use este serviço para gerar uma certidão que detalha a situação de um processo específico no Tribunal Superior do Trabalho (TST).",
        custo: "gratuito",
        prazo: "imediato",
        necessario: "número do processo"
      };
    case "validar-certidao-andamento":
      return {
        description: "Use este serviço para saber se uma Certidão de Histórico do Andamento Processual foi emitida pelo Tribunal Superior do Trabalho (TST).",
        custo: "Gratuito",
        prazo: "Imediato",
        necessario: "Código de autenticidade localizado no início da certidão que deseja validar"
      };
    case "emitir-certidao-arquivados":
      return {
        description: "Use este serviço para gerar uma certidão que lista os processos de uma empresa ou entidade que estão no Tribunal Superior do Trabalho (TST).",
        custo: "Gratuito",
        prazo: "Imediato",
        necessario: "CNPJ"
      };
    case "validar-certidao-arquivados":
      return {
        description: "Use este serviço para saber se uma Certidão de Processos em Tramitação no TST foi emitida pelo Tribunal Superior do Trabalho (TST).",
        custo: "gratuito",
        prazo: "imediato",
        necessario: "código de autenticidade localizado no início da certidão que deseja validar"
      };
    case "emitir-exercicio-advocacia":
      return {
        description: "Use este serviço para gerar uma certidão com os processos em que um profissional da advocacia atuou no Tribunal Superior do Trabalho (TST).",
        custo: "gratuito",
        prazo: "imediato",
        necessario: "CPF"
      };
    case "validar-exercicio-advocacia":
      return {
        description: "Use este serviço para saber se uma Certidão de Exercício da Advocacia foi emitida pelo Tribunal Superior do Trabalho (TST).",
        custo: "Gratuito",
        prazo: "Imediato",
        necessario: "Código de autenticidade localizado no início da certidão que deseja validar"
      };
    case "pedir-certidao-objeto-pe":
      return {
        description: "Use este serviço para pedir uma certidão que informa o assunto (objeto) e o andamento de um processo no Tribunal Superior do Trabalho (TST).",
        custo: "Pode haver cobrança",
        prazo: "Até 15 dias úteis",
        necessario: "Número do processo e petição anexada no processo judicial"
      };
    case "pedir-certidao-personalizada":
      return {
        description: "Use este serviço para pedir certidão sobre processos que estão ou que estiveram no Tribunal Superior do Trabalho (TST) e certidão que não pode ser emitida de forma automática pelo site.",
        custo: "Pode haver cobrança",
        prazo: "Até 15 dias úteis",
        necessario: "Conta no Google para preencher o formulário e documento do pedido em PDF"
      };
    case "consultar-indisponibilidade":
      return {
        description: "Use este serviço para consultar os períodos em que sistemas do Tribunal Superior do Trabalho (TST) ficaram indisponíveis e, quando houver, baixe a certidão correspondente.",
        custo: "Gratuito",
        prazo: "Imediato",
        necessario: "Sistema, dia e horário da falha"
      };
    default:
      return {
        description: "Informa detalhes sobre o andamento e emissão de certidões judiciais perante o Tribunal Superior do Trabalho.",
        custo: "Gratuito",
        prazo: "Imediato",
        necessario: "Dados do solicitante"
      };
  }
};

export default function App() {
  // Page routing state
  const [currentPage, setCurrentPage] = useState<"inicial" | "detalhe" | "guia" | "emissao">("inicial");
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  // Search filter
  const [searchQuery, setSearchQuery] = useState("");

  // Accessibility States
  const [highContrast, setHighContrast] = useState(false);
  const [fontScale, setFontScale] = useState(1.0); // 1.0 = 100%, 2.0 = 200%

  // Drawer / Modal states
  const [acesiOpen, setAcesiOpen] = useState(false);
  const [guiaOpen, setGuiaOpen] = useState(false);
  const [cartaServicosOpen, setCartaServicosOpen] = useState(false);
  const [actionFeedbackMessage, setActionFeedbackMessage] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Feedback states
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [feedbackRating, setFeedbackRating] = useState<number | null>(null);
  const [feedbackComment, setFeedbackComment] = useState("");
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [feedbackLoading, setFeedbackLoading] = useState(false);

  // Accordion toggle states on Service Page
  const [accordionState, setAccordionState] = useState<Record<string, boolean>>({
    whatIs: true,       // Default expanded per UX studies
    whoCanUse: false,
    steps: true,        // Focus of typical citizen access
    otherInfo: false,
    support: false
  });

  // Hotkey mapping to improve WCAG accessibility controls (Alt + 1, Alt + 2, Alt + 3, Alt + C)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle contrast (Alt + C)
      if (e.altKey && e.key.toLowerCase() === 'c') {
        e.preventDefault();
        setHighContrast(prev => !prev);
      }
      // Open Repasse ACESI (Alt + R)
      if (e.altKey && e.key.toLowerCase() === 'r') {
        e.preventDefault();
        setAcesiOpen(prev => !prev);
      }
      // Open Guia Orientações (Alt + G) - Disabled for now
      /*
      if (e.altKey && e.key.toLowerCase() === 'g') {
        e.preventDefault();
        setCurrentPage(prev => prev === "guia" ? "inicial" : "guia");
      }
      */
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Synchronize font scale with standard html root element so REM units resize correctly
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontScale * 100}%`;
    return () => {
      document.documentElement.style.fontSize = "";
    };
  }, [fontScale]);

  // Handle visibility of "Back to top" button based on scroll threshold
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Category navigation & filtering
  type CategoryFilter = "todos" | "certidoes-e-validacoes" | "consultas" | "guias-e-informacoes";
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("todos");

  // Category counts (based on the canonical 9 services)
  const categoryCounts = useMemo(() => {
    return {
      todos: SERVICES_DATA.length, // 9
      certidoes: SERVICES_DATA.filter(s => s.functionalCategory === "certidoes-e-validacoes").length, // 8
      consultas: SERVICES_DATA.filter(s => s.functionalCategory === "consultas").length, // 1
      guias: 0
    };
  }, []);

  // Filtered Services List (Search + Category)
  const filteredServices = useMemo(() => {
    let list = SERVICES_DATA;
    if (selectedCategory === "certidoes-e-validacoes") {
      list = list.filter(s => s.functionalCategory === "certidoes-e-validacoes");
    } else if (selectedCategory === "consultas") {
      list = list.filter(s => s.functionalCategory === "consultas");
    } else if (selectedCategory === "guias-e-informacoes") {
      list = [];
    }

    if (!searchQuery.trim()) return list;
    const query = searchQuery.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return list.filter(service => {
      const matchName = service.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(query);
      const matchKnownAs = service.knownAs?.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(query);
      const matchDesc = service.descriptionSnippet.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(query);
      const matchTag = service.serviceTypeTag?.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(query);
      return matchName || matchKnownAs || matchDesc || matchTag;
    });
  }, [searchQuery, selectedCategory]);

  // Active Service Detail
  const activeService = useMemo(() => {
    if (!selectedServiceId) return null;
    return SERVICES_DATA.find(s => s.id === selectedServiceId) || null;
  }, [selectedServiceId]);

  // Active Service Detail Metadata
  const activeServiceMeta = useMemo(() => {
    if (!activeService) return null;
    return getServiceMetadata(activeService.id);
  }, [activeService]);

  // Accessibility Font Resizing Tools
  const increaseFont = () => {
    setFontScale(prev => Math.min(prev + 0.25, 2.0));
  };
  const decreaseFont = () => {
    setFontScale(prev => Math.max(prev - 0.25, 1.0));
  };
  const resetFont = () => {
    setFontScale(1.0);
  };

  const selectService = (id: string | null) => {
    if (!id) {
      setSelectedServiceId(null);
      setCurrentPage("inicial");
    } else {
      // Map legacy/header IDs to active MVP IDs
      let targetId = id;
      if (id === "andamento-processual") {
        targetId = "emitir-certidao-andamento";
      } else if (id === "exercicio-advocacia") {
        targetId = "emitir-exercicio-advocacia";
      }

      // Check if the service exists in the active SERVICES_DATA
      const serviceExists = SERVICES_DATA.some(s => s.id === targetId);

      if (serviceExists) {
        setSelectedServiceId(targetId);
        setCurrentPage("detalhe");
        // Reset scroll position
        window.scrollTo(0, 0);
        // Reset accordion state: whatIs is true, others are collapse standard
        setAccordionState({
          whatIs: true,
          whoCanUse: false,
          steps: false,
          otherInfo: false,
          support: false
        });
      } else {
        // Display nice modal feedback and open Carta de Serviços
        setActionFeedbackMessage(
          `O serviço de certidão selecionado ainda não foi integrado a este portal. No entanto, as instruções de acesso e canais oficiais encontram-se descritas detalhadamente na Carta de Serviços.`
        );
        setCartaServicosOpen(true);
      }
    }
  };

  const toggleAccordion = (section: string) => {
    setAccordionState(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Helper to render standardized service card
  const renderServiceCard = (service: ServiceDetail) => {
    return (
      <article 
        key={service.id}
        onClick={() => selectService(service.id)}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') selectService(service.id); }}
        role="article"
        tabIndex={0}
        className="bg-white border border-gray-200 hover:border-[#1351b4] hover:shadow-lg rounded-xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-200 h-full text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1351b4] group select-none hover:scale-[1.008]"
        id={`card-servico-${service.id}`}
        aria-label={`Serviço: ${service.name}`}
      >
        {/* Top: Icon + Title + Description */}
        <div className="space-y-3.5">
          {/* Icon & Readable Title */}
          <div className="flex items-start gap-4">
            <div className="w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] bg-[#eef4ff] rounded-xl flex items-center justify-center text-[#1351b4] shrink-0 font-bold font-sans" aria-hidden="true">
              <ServiceIcon serviceId={service.id} className="w-[32px] h-[32px] sm:w-[38px] sm:h-[38px]" />
            </div>

            <div className="space-y-1.5 flex-1 text-left">
              <h3 className="font-bold text-sm sm:text-base text-black font-heading leading-snug group-hover:text-[#1351b4] group-hover:underline transition-all">
                {service.name}
              </h3>
              {/* Descrição curta de até 2 linhas explicativas */}
              <p className="text-xs sm:text-[13px] text-gray-600 font-sans leading-relaxed line-clamp-2 min-h-[38px]">
                {service.id === "emitir-certidao-andamento" ? (
                  <>
                    Use este serviço para gerar uma certidão que detalha a <strong className="font-semibold text-gray-900">situação de um processo específico</strong> no Tribunal Superior do Trabalho (TST).
                  </>
                ) : (
                  service.descriptionSnippet
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Actions: REGRA DE BOTÃO ÚNICO ("Iniciar") com ícone de play, borda cinza e azul institucional + Saiba mais */}
        <div className="mt-5 pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="p-1 sm:p-1.5 bg-gray-100 border border-gray-300 rounded-full inline-flex items-center justify-center w-full sm:w-auto shrink-0 select-none">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedServiceId(service.id);
                setCurrentPage("emissao");
                window.scrollTo(0, 0);
              }}
              className="w-full sm:w-auto bg-[#1351b4] hover:bg-[#2261cc] active:bg-[#0c326f] text-white font-bold text-xs sm:text-sm py-2 px-6 rounded-full transition-all duration-150 flex items-center justify-center gap-2 shadow-xs hover:shadow cursor-pointer font-sans"
              id={`btn-iniciar-${service.id}`}
              aria-label={`Iniciar ${service.name}`}
            >
              <svg className="w-3.5 h-3.5 fill-current text-white shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
              <span>Iniciar</span>
            </button>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              selectService(service.id);
            }}
            className="text-xs font-bold text-gray-600 hover:text-[#1351b4] hover:underline cursor-pointer flex items-center justify-center sm:justify-start gap-1 py-1"
            aria-label={`Ver detalhes e regulamento de ${service.name}`}
          >
            <span>Saiba mais</span>
          </button>
        </div>
      </article>
    );
  };

  return (
    <div 
      id="root-layout-portal" 
      className={`min-h-screen flex flex-col transition-colors duration-200 font-sans ${highContrast ? "high-contrast-active" : "bg-[#f8fafc] text-gray-850"}`}
      style={{ fontSize: `${fontScale * 100}%` }}
    >
      {/* 1. CABEÇALHO PADRÃO DO PORTAL DE SERVIÇOS DO TST (FIEL À IMAGEM OFICIAL) */}
      <header 
        className="relative w-full overflow-hidden bg-white text-gray-850 border-b border-gray-200 py-3.5 sm:py-4.5 no-print sticky top-0 z-30 shadow-2xs"
        id="banner-cabecalho-servicos"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center gap-3.5 sm:gap-4 md:gap-5 text-left" id="banner-textos">
            <button 
              onClick={() => selectService(null)}
              className="hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1351b4] rounded cursor-pointer shrink-0"
              title="Voltar ao início do Portal de Serviços do TST"
            >
              <TstLogo size="small" hideSymbol={false} />
            </button>
            <div className="h-7 sm:h-8 w-[1.5px] bg-gray-300 shrink-0" aria-hidden="true" />
            <button
              onClick={() => selectService(null)}
              className="text-lg sm:text-xl md:text-2xl font-black tracking-tight font-heading text-black hover:text-[#1351b4] transition-colors focus-visible:outline-none focus-visible:underline text-left cursor-pointer select-none"
              id="titulo-central-portal"
            >
              Portal de Serviços do TST
            </button>
          </div>
        </div>
      </header>

      {/* 2. ÁREA PRINCIPAL */}
      <main className="flex-grow" id="conteudo-principal">

        {/* ================= PAGE 1 ================= */}
        {currentPage === "inicial" && (
          <div className="animate-fadeIn">

            {/* ÁREA DE BUSCA E FILTROS NO TOPO COM DESIGN GOV.BR */}
            <section 
              className="bg-white border-b border-gray-200 py-6 sm:py-8 no-print text-center shadow-2xs" 
              id="hero-portal-servicos" 
              aria-labelledby="titulo-busca-servicos"
            >
              <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <p className="text-xs sm:text-sm md:text-base text-gray-600 font-sans leading-relaxed text-center whitespace-nowrap overflow-x-auto" id="titulo-busca-servicos">
                  Acesse certidões judiciais, validações de autenticidade, consultas e serviços digitais do Tribunal Superior do Trabalho.
                </p>

                {/* Barra de Busca Centralizada (Estilo Gov.br) */}
                <div className="mt-5 max-w-2xl mx-auto" role="search">
                  <div className="relative flex items-center bg-white rounded-full border-2 border-gray-300 focus-within:border-[#1351b4] focus-within:ring-4 focus-within:ring-[#1351b4]/15 shadow-sm transition-all">
                    <div className="pl-4.5 pr-2 text-gray-400 flex items-center pointer-events-none" aria-hidden="true">
                      <Search className="w-5 h-5 text-gray-500" />
                    </div>
                    <input
                      type="text"
                      id="campo-busca-servicos"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="O que você procura? Ex: Objeto e pé, Indisponibilidade, Certidão..."
                      className="w-full py-3 sm:py-3.5 pr-10 text-xs sm:text-sm md:text-base text-gray-900 bg-transparent placeholder-gray-450 focus:outline-none font-sans"
                      aria-label="Buscar serviços por nome, tipo ou palavra-chave"
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={() => setSearchQuery("")}
                        className="p-2 mr-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 transition cursor-pointer"
                        title="Limpar busca"
                        aria-label="Limpar campo de busca"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  {/* Exemplos de busca rápida */}
                  <div className="mt-2.5 flex flex-wrap items-center justify-center gap-1.5 text-[11px] sm:text-xs text-gray-500">
                    <span className="font-semibold text-gray-600">Exemplos:</span>
                    <button 
                      type="button" 
                      onClick={() => setSearchQuery("Histórico")}
                      className="text-[#1351b4] hover:underline cursor-pointer"
                    >
                      Histórico
                    </button>
                    <span>•</span>
                    <button 
                      type="button" 
                      onClick={() => setSearchQuery("Objeto e pé")}
                      className="text-[#1351b4] hover:underline cursor-pointer"
                    >
                      Objeto e pé
                    </button>
                    <span>•</span>
                    <button 
                      type="button" 
                      onClick={() => setSearchQuery("Advocacia")}
                      className="text-[#1351b4] hover:underline cursor-pointer"
                    >
                      Advocacia
                    </button>
                    <span>•</span>
                    <button 
                      type="button" 
                      onClick={() => setSearchQuery("Indisponibilidade")}
                      className="text-[#1351b4] hover:underline cursor-pointer"
                    >
                      Indisponibilidade
                    </button>
                  </div>
                </div>

                {/* BOTÕES DE FILTRO POR CATEGORIA (LOGO ABAIXO DA BUSCA) */}
                <div 
                  className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5" 
                  role="tablist" 
                  aria-label="Filtrar por categoria funcional"
                >
                  <button
                    type="button"
                    role="tab"
                    id="filtro-todos"
                    aria-selected={selectedCategory === "todos"}
                    onClick={() => setSelectedCategory("todos")}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-150 flex items-center gap-2 cursor-pointer border ${
                      selectedCategory === "todos"
                        ? "bg-[#1351b4] text-white border-[#1351b4] shadow-xs"
                        : "bg-white text-gray-700 hover:text-[#1351b4] hover:border-[#1351b4] border-gray-300 shadow-2xs"
                    }`}
                  >
                    <span>Todos</span>
                    <span className={`px-2 py-0.5 rounded-full text-[11px] font-black ${
                      selectedCategory === "todos" ? "bg-white/20 text-white" : "bg-gray-100 text-gray-700"
                    }`}>
                      {categoryCounts.todos}
                    </span>
                  </button>

                  <button
                    type="button"
                    role="tab"
                    id="filtro-certidoes"
                    aria-selected={selectedCategory === "certidoes-e-validacoes"}
                    onClick={() => setSelectedCategory("certidoes-e-validacoes")}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-150 flex items-center gap-2 cursor-pointer border ${
                      selectedCategory === "certidoes-e-validacoes"
                        ? "bg-[#1351b4] text-white border-[#1351b4] shadow-xs"
                        : "bg-white text-gray-700 hover:text-[#1351b4] hover:border-[#1351b4] border-gray-300 shadow-2xs"
                    }`}
                  >
                    <span>Certidões e Validações</span>
                    <span className={`px-2 py-0.5 rounded-full text-[11px] font-black ${
                      selectedCategory === "certidoes-e-validacoes" ? "bg-white/20 text-white" : "bg-gray-100 text-gray-700"
                    }`}>
                      {categoryCounts.certidoes}
                    </span>
                  </button>

                  <button
                    type="button"
                    role="tab"
                    id="filtro-consultas"
                    aria-selected={selectedCategory === "consultas"}
                    onClick={() => setSelectedCategory("consultas")}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-150 flex items-center gap-2 cursor-pointer border ${
                      selectedCategory === "consultas"
                        ? "bg-[#1351b4] text-white border-[#1351b4] shadow-xs"
                        : "bg-white text-gray-700 hover:text-[#1351b4] hover:border-[#1351b4] border-gray-300 shadow-2xs"
                    }`}
                  >
                    <span>Consultas e Acompanhamento</span>
                    <span className={`px-2 py-0.5 rounded-full text-[11px] font-black ${
                      selectedCategory === "consultas" ? "bg-white/20 text-white" : "bg-gray-100 text-gray-700"
                    }`}>
                      {categoryCounts.consultas}
                    </span>
                  </button>

                  <button
                    type="button"
                    role="tab"
                    id="filtro-guias"
                    aria-selected={selectedCategory === "guias-e-informacoes"}
                    onClick={() => setSelectedCategory("guias-e-informacoes")}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-150 flex items-center gap-2 cursor-pointer border ${
                      selectedCategory === "guias-e-informacoes"
                        ? "bg-[#1351b4] text-white border-[#1351b4] shadow-xs"
                        : "bg-white text-gray-700 hover:text-[#1351b4] hover:border-[#1351b4] border-gray-300 shadow-2xs"
                    }`}
                  >
                    <span>Guias e Informações</span>
                    <span className={`px-2 py-0.5 rounded-full text-[11px] font-black ${
                      selectedCategory === "guias-e-informacoes" ? "bg-white/20 text-white" : "bg-gray-100 text-gray-700"
                    }`}>
                      {categoryCounts.guias}
                    </span>
                  </button>
                </div>

              </div>
            </section>

            {/* 2.3 MAIN BODY GRID - OPTIMIZED PADDING */}
            <div className="mx-auto max-w-7xl px-6 py-6 md:py-8">
              
              {/* 2.2 APPROVED INSTITUTIONAL CAMPAIGN/ALERT HEADER (GOV.BR ALIGNED ALERT BOX) */}
              <div 
                className="mb-8 bg-[#e3eeff] border border-gray-200 p-4.5 rounded-xl shadow-xs text-left flex items-start gap-3.5 transition-all hover:shadow-sm"
                id="mensagem-institucional-portal"
              >
                <div className="flex gap-3 items-start flex-1">
                  <div className="w-5 h-5 rounded-full bg-[#1351b4] flex items-center justify-center text-white shrink-0 font-bold text-[12px] font-serif flex-col mt-0.5 select-none" aria-hidden="true">
                    i
                  </div>
                  <div className="flex-1 text-xs sm:text-sm text-gray-950 leading-relaxed">
                    Em breve, novos serviços serão adicionados. Enquanto isso, envie sua opinião e ajude a melhorar o portal de serviços do TST.
                  </div>
                </div>
              </div>

              {/* 2.3.2 SERVICES ACCESSIBLE CARDS ORGANIZED BY CATEGORY */}
              <div className="space-y-10" id="bloco-lista-servicos">
                {(() => {
                  const certidoesList = filteredServices.filter(s => s.functionalCategory === "certidoes-e-validacoes");
                  const consultasList = filteredServices.filter(s => s.functionalCategory === "consultas");

                  // Category 3: Guias e Informações (currently 0 services)
                  if (selectedCategory === "guias-e-informacoes") {
                    return (
                      <div className="bg-white border border-gray-200 rounded-xl p-8 sm:p-12 text-center max-w-2xl mx-auto space-y-4 shadow-xs" id="painel-guias-informacoes">
                        <div className="w-14 h-14 mx-auto rounded-full bg-blue-50 text-[#1351b4] flex items-center justify-center font-bold">
                          <BookOpen className="w-7 h-7" aria-hidden="true" />
                        </div>
                        <div className="space-y-1">
                          <h2 className="text-lg sm:text-xl font-bold font-heading text-black">
                            Guias e Informações
                          </h2>
                          <p className="text-xs sm:text-sm font-semibold text-[#1351b4]">
                            Nenhum serviço ou guia disponível nesta categoria no momento (0)
                          </p>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-lg mx-auto">
                          Em breve, serão disponibilizados manuais de procedimentos, guias práticos do PJe, tutoriais passo a passo e orientações institucionais para cidadãos e operadores do Direito.
                        </p>
                        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                          <button
                            type="button"
                            onClick={() => setSelectedCategory("todos")}
                            className="w-full sm:w-auto bg-[#1351b4] hover:bg-[#2261cc] text-white font-bold text-xs sm:text-sm py-2.5 px-6 rounded-full transition shadow-xs cursor-pointer"
                          >
                            Ver todos os serviços ({categoryCounts.todos})
                          </button>
                          <a
                            href="https://www.tst.jus.br/en/web/acesso-a-informacao/carta-de-servicos-a-cidadania"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-700 font-bold text-xs sm:text-sm py-2.5 px-6 rounded-full border border-gray-300 transition cursor-pointer"
                          >
                            Consultar Carta de Serviços
                          </a>
                        </div>
                      </div>
                    );
                  }

                  // Empty State for Search
                  if (certidoesList.length === 0 && consultasList.length === 0) {
                    return (
                      <div className="bg-white border border-gray-200 rounded-xl p-8 sm:p-10 text-center max-w-lg mx-auto space-y-4 shadow-xs" id="fallback-vazio">
                        <div className="w-12 h-12 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center mx-auto">
                          <Search className="w-6 h-6" aria-hidden="true" />
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-bold text-base text-black font-heading">
                            Nenhum serviço encontrado
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                            Não encontramos nenhum serviço com o termo <strong className="text-gray-900">"{searchQuery}"</strong>{selectedCategory !== "todos" ? ` na categoria selecionada.` : `.`}
                          </p>
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                          <button 
                            type="button"
                            onClick={() => {
                              setSearchQuery("");
                              setSelectedCategory("todos");
                            }}
                            className="bg-[#1351b4] hover:bg-[#2261cc] text-white text-xs font-bold py-2.5 px-5 rounded-full transition cursor-pointer shadow-xs"
                          >
                            Limpar busca e filtros
                          </button>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <>
                      {/* Categoria 1: Certidões e Validações (8 serviços) */}
                      {certidoesList.length > 0 && (
                        <div className="space-y-6" id="secao-servicos-certidoes">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-gray-200 pb-3 gap-1">
                            <div>
                              <h2 className="text-lg sm:text-xl font-bold font-heading text-black flex items-center gap-2 text-left" id="titulo-servicos-certidoes">
                                <span>Certidões e Validações</span>
                                <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                                  ({certidoesList.length})
                                </span>
                              </h2>
                              <p className="text-xs sm:text-sm text-gray-600 mt-0.5 text-left">
                                Emissão, conferência de autenticidade e solicitações personalizadas perante o TST.
                              </p>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="grade-cards-certidoes">
                            {certidoesList.map((service) => renderServiceCard(service))}
                          </div>
                        </div>
                      )}

                      {/* Categoria 2: Consultas e Acompanhamento (1 serviço) */}
                      {consultasList.length > 0 && (
                        <div className="space-y-6 pt-2" id="secao-consultas-informacoes">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-gray-200 pb-3 gap-1">
                            <div>
                              <h2 className="text-lg sm:text-xl font-bold font-heading text-black flex items-center gap-2 text-left" id="titulo-consultas-informacoes">
                                <span>Consultas e Acompanhamento</span>
                                <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                                  ({consultasList.length})
                                </span>
                              </h2>
                              <p className="text-xs sm:text-sm text-gray-600 mt-0.5 text-left">
                                Consulta de disponibilidade de sistemas, certidões de falha e acompanhamentos.
                              </p>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="grade-cards-consultas">
                            {consultasList.map((service) => renderServiceCard(service))}
                          </div>
                        </div>
                      )}
                    </>
                  );
                })()}

                {/* 2.3.3 CARTA DE SERVIÇOS PROMINENT BRANDED CARD (EXACTLY MATCHING PROMPT) */}
                <div 
                  className="mt-10 bg-[#e3eeff] border border-gray-200 p-5 rounded-xl shadow-xs text-left flex flex-col md:flex-row items-center justify-between gap-6 transition-all hover:shadow-sm"
                  id="card-carta-servicos-institucional"
                >
                  <div className="flex gap-3.5 items-start flex-1 w-full">
                    <div className="w-5 h-5 rounded-full bg-[#1351b4] flex items-center justify-center text-white shrink-0 font-bold text-[12px] font-serif flex-col mt-0.5 select-none" aria-hidden="true">
                      i
                    </div>
                    <div className="space-y-1 flex-1 text-left">
                      <h3 className="text-xs sm:text-sm font-bold text-gray-800 font-heading tracking-tight" id="titulo-nao-encontrou">
                        Não encontrou o serviço que procurava?
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-800 font-normal font-sans leading-relaxed">
                        Consulte a Carta de Serviços para acessar os demais serviços do TST.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full sm:w-auto shrink-0 justify-center items-center">
                    <a
                      href="https://www.tst.jus.br/en/web/acesso-a-informacao/carta-de-servicos-a-cidadania#:~:text=A%20Carta%20de%20Servi%C3%A7os%20%C3%A0,compromissos%20de%20atendimento%20ao%20p%C3%BAblico"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#1351b4] hover:bg-[#2261cc] hover:underline text-white font-bold text-xs py-2.5 px-6 rounded-full border border-gray-200 shadow-sm transition-all text-center flex items-center justify-center gap-1.5 min-h-[44px] cursor-pointer w-full"
                      aria-label="Consultar Carta de Serviços do TST"
                    >
                      <span>Consultar Carta de Serviços</span>
                    </a>
                  </div>
                </div>

                {/* 2.3.4 OUVIDORIA IN THE STANDARD CENTERED PATTERN MATCHING INSIDE-SERVICE STYLE */}
                <div className="mt-12 pt-8 border-t border-gray-200 text-center space-y-2" id="ouvidoria-home-padrao">
                  <p className="font-extrabold text-black text-sm sm:text-base">
                    Fale com a Ouvidoria
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed whitespace-nowrap">
                    Para{" "}
                    <a
                      href="https://www.tst.jus.br/en/faca-sua-manifestacao"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1351b4] hover:text-[#0f3c87] font-bold underline cursor-pointer hover:underline"
                    >
                      registrar uma manifestação, reclamação, solicitação, sugestão ou denúncia
                    </a>
                    .
                  </p>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* ================= PAGE 2 (SERVIÇO ESPECÍFICO) ================= */}
        {currentPage === "detalhe" && activeService && (
          <div className="animate-fadeIn py-8 bg-[#f8fafc]">
            <div className="mx-auto max-w-4xl px-4">
              
              {/* 2.4 BREADCRUMBS (WCAG 2.4.8 Localização) */}
              <nav aria-label="Caminho de navegação (Breadcrumb)" className="mb-6">
                <ol className="flex flex-wrap items-center gap-2 text-[11px] sm:text-xs font-medium text-gray-650 font-sans">
                  <li>
                    <button 
                      onClick={() => selectService(null)}
                      className="hover:text-[#1351b4] text-gray-600 hover:underline inline-flex items-center gap-1 focus:outline-none focus:underline cursor-pointer"
                    >
                      Início
                    </button>
                  </li>
                  <li className="text-gray-400" aria-hidden="true">&rsaquo;</li>
                  <li>
                    <button 
                      onClick={() => selectService(null)}
                      className="hover:text-[#1351b4] text-gray-600 hover:underline focus:outline-none focus:underline cursor-pointer"
                    >
                      Portal de Serviços
                    </button>
                  </li>
                  <li className="text-gray-400" aria-hidden="true">&rsaquo;</li>
                  <li>
                    <button 
                      onClick={() => selectService(null)}
                      className="hover:text-[#1351b4] text-gray-600 hover:underline focus:outline-none focus:underline cursor-pointer"
                    >
                      {activeService.category === "consultas-e-informacoes" ? "Consultas e informações" : "Certidões"}
                    </button>
                  </li>
                  <li className="text-gray-400" aria-hidden="true">&rsaquo;</li>
                  <li>
                    <span className="text-blue-950 font-semibold cursor-default" aria-current="page">
                      {activeService.name}
                    </span>
                  </li>
                </ol>
              </nav>

              {/* Back Button */}
              <button
                onClick={() => selectService(null)}
                className="mb-6 text-xs font-bold text-gray-600 hover:text-[#1351b4] inline-flex items-center gap-1.5 transition hover:underline focus:outline-none min-h-[44px] cursor-pointer"
                aria-label="Voltar à página principal do Portal"
              >
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                <span>Voltar à página principal do Portal</span>
              </button>

              {/* 2.5 SUPERVISOR BLOCK (VÍNCULO VISUAL MESMO NÍVEL: NOME, COGNOME, BOTÃO INICIAR) */}
              <div 
                className="bg-white border border-gray-200 py-7 px-6 sm:px-8 mb-4 flex flex-col gap-6 rounded-2xl shadow-sm text-left"
                id="supervisor-acesso-rapido"
              >
                <div className="space-y-2 text-left">
                  {/* Dynamic H1 Title for dynamic page and reading */}
                  <h1 className="text-xl sm:text-2xl font-black text-black tracking-tight font-heading leading-tight" id="titulo-pagina-servico">
                    {activeService.name}
                  </h1>
                  
                  {activeService.knownAs && (
                    <p className="text-xs sm:text-sm text-gray-500 font-sans font-medium">
                      Também conhecido como: <span className="italic font-normal">{activeService.knownAs}</span>
                    </p>
                  )}
                </div>

                {/* Big Green Start Button Centered */}
                <div className="flex justify-center w-full">
                  <div className="p-1.5 sm:p-2 bg-gray-100 border border-gray-200 rounded-full inline-flex items-center justify-center w-full sm:w-auto shrink-0 select-none">
                    <button
                      onClick={() => {
                        setCurrentPage("emissao");
                        window.scrollTo(0, 0);
                      }}
                      className="bg-[#168821] hover:bg-[#2da382] hover:underline text-white font-bold text-xs sm:text-sm py-2.5 px-12 rounded-full transition-all duration-200 hover:scale-[1.01] text-center w-full sm:w-auto min-h-[44px] cursor-pointer flex items-center justify-center gap-2"
                      id="botao-iniciar-servico-principal"
                      aria-label={`Iniciar emissão digital para a certidão: ${activeService.name}`}
                    >
                      <svg className="w-3.5 h-3.5 fill-current text-white shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      <span>Iniciar</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Share & Print Bar (Modelo Gov.br) */}
              <div className="pt-4 pb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm text-gray-650 gap-4 font-sans mb-6">
                <div className="flex items-center gap-1.5 text-gray-600">
                  <span>Última Modificação:</span>
                  <span className="text-gray-900 font-normal">{activeService.lastUpdated}</span>
                </div>
              </div>

              {/* 2.6 INTERACTIVE ACCORDEON BLOCKS (MODELO GOV.BR) */}
              <div className="space-y-4 font-sans" id="acordeon-conteudo-servico">
                
                {/* Accordion Item 1: O que é? */}
                <article className="border border-gray-200 rounded-xl bg-white shadow-sm">
                  <h2>
                    <button
                      onClick={() => toggleAccordion("whatIs")}
                      className={`w-full text-left py-5 px-6 font-extrabold text-black font-heading flex items-center gap-2.5 bg-white hover:bg-slate-50 hover:no-underline transition-all text-sm sm:text-base cursor-pointer select-none rounded-t-xl focus-visible:ring-2 focus-visible:ring-[#1351b4] focus-visible:ring-offset-2 focus-visible:outline-none ${!accordionState.whatIs ? 'rounded-b-xl' : ''}`}
                      aria-expanded={accordionState.whatIs}
                      aria-controls="aba-oque-e"
                    >
                      {accordionState.whatIs ? <ChevronUp className="w-5 h-5 shrink-0 text-[#1351b4]" /> : <ChevronDown className="w-5 h-5 shrink-0 text-[#1351b4]" />}
                      <span>O que é?</span>
                    </button>
                  </h2>
                  
                  {accordionState.whatIs && activeServiceMeta && (
                    <div className="p-6 text-sm text-gray-700 leading-relaxed border-t border-gray-100 bg-white space-y-5 text-left animate-fadeIn rounded-b-xl" id="aba-oque-e">
                      <div className="font-sans text-[14px] sm:text-[15px] text-gray-700 leading-relaxed space-y-4">
                        {activeService.id === "emitir-certidao-andamento" && (
                          <div className="space-y-4">
                            <p>Use este serviço para gerar uma certidão que detalha a <strong>situação de um processo específico</strong> no Tribunal Superior do Trabalho (TST).</p>
                            <p>A certidão informa se o processo:</p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                              <li>está em andamento no TST,</li>
                              <li>foi arquivado ou</li>
                              <li>voltou ao Tribunal Regional do Trabalho (TRT) de origem.</li>
                            </ul>
                            <p>
                              Para emitir certidão personalizada ou sobre processo em segredo de justiça, consulte o tópico <em className="italic">Outras Informações</em>.
                            </p>
                            <div className="space-y-2.5 text-xs sm:text-sm pt-2">
                              <div className="flex items-center gap-2 text-gray-700">
                                <CircleDollarSign className="w-4.5 h-4.5 text-[#1351b4] shrink-0" aria-hidden="true" />
                                <p className="text-gray-700">Custo: <strong className="font-bold text-black">Gratuito</strong></p>
                              </div>
                              <div className="flex items-center gap-2 text-gray-700">
                                <Clock className="w-4.5 h-4.5 text-[#1351b4] shrink-0" aria-hidden="true" />
                                <p className="text-gray-700">Prazo: <strong className="font-bold text-black">Imediato</strong></p>
                              </div>
                              <div className="flex items-center gap-2 text-gray-700">
                                <FileText className="w-4.5 h-4.5 text-[#1351b4] shrink-0" aria-hidden="true" />
                                <p>Informação necessária: <strong>Número do processo</strong></p>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {activeService.id === "validar-certidao-andamento" && (
                          <div className="space-y-4">
                            <p>
                              Use este serviço para saber se uma{" "}
                              <button
                                onClick={() => {
                                  setSelectedServiceId("emitir-certidao-andamento");
                                  window.scrollTo(0, 0);
                                }}
                                className="text-[#1351b4] hover:text-[#0f3c87] font-bold underline cursor-pointer inline hover:underline"
                              >
                                Certidão de Histórico do Andamento Processual
                              </button>{" "}
                              foi emitida pelo Tribunal Superior do Trabalho (TST).
                            </p>
                            <div className="space-y-2.5 text-xs sm:text-sm pt-2">
                              <div className="flex items-center gap-2 text-gray-700">
                                <CircleDollarSign className="w-4.5 h-4.5 text-[#1351b4] shrink-0" aria-hidden="true" />
                                <p className="text-gray-700">Custo: <strong className="font-bold text-black">Gratuito</strong></p>
                              </div>
                              <div className="flex items-center gap-2 text-gray-700">
                                <Clock className="w-4.5 h-4.5 text-[#1351b4] shrink-0" aria-hidden="true" />
                                <p className="text-gray-700">Prazo: <strong className="font-bold text-black">Imediato</strong></p>
                              </div>
                              <div className="flex items-center gap-2 text-gray-700">
                                <FileText className="w-4.5 h-4.5 text-[#1351b4] shrink-0" aria-hidden="true" />
                                <p>Informação necessária: <strong>Código de autenticidade localizado no início da certidão que deseja validar</strong></p>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {activeService.id === "emitir-certidao-arquivados" && (
                          <div className="space-y-4">
                            <p>Use este serviço para gerar uma certidão com os processos de uma empresa ou entidade que estão no Tribunal Superior do Trabalho (TST).</p>
                            <p>
                              Para emitir certidão personalizada ou sobre processo em segredo de justiça, consulte o tópico <em className="italic">Outras Informações</em>.
                            </p>
                            <div className="space-y-2.5 text-xs sm:text-sm pt-2">
                              <div className="flex items-center gap-2 text-gray-700">
                                <CircleDollarSign className="w-4.5 h-4.5 text-[#1351b4] shrink-0" aria-hidden="true" />
                                <p className="text-gray-700">Custo: <strong className="font-bold text-black">Gratuito</strong></p>
                              </div>
                              <div className="flex items-center gap-2 text-gray-700">
                                <Clock className="w-4.5 h-4.5 text-[#1351b4] shrink-0" aria-hidden="true" />
                                <p className="text-gray-700">Prazo: <strong className="font-bold text-black">Imediato</strong></p>
                              </div>
                              <div className="flex items-center gap-2 text-gray-700">
                                <FileText className="w-4.5 h-4.5 text-[#1351b4] shrink-0" aria-hidden="true" />
                                <p>Documento necessário: <strong>CNPJ</strong></p>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {activeService.id === "validar-certidao-arquivados" && (
                          <div className="space-y-4">
                            <p>
                              Use este serviço para saber se uma{" "}
                              <button
                                onClick={() => {
                                  setSelectedServiceId("emitir-certidao-arquivados");
                                  window.scrollTo(0, 0);
                                }}
                                className="text-[#1351b4] hover:text-[#0f3c87] font-bold underline cursor-pointer inline text-left hover:underline"
                              >
                                Certidão de Processos em Tramitação no TST
                              </button>{" "}
                              foi emitida pelo Tribunal Superior do Trabalho (TST).
                            </p>
                            <div className="space-y-2.5 text-xs sm:text-sm pt-2">
                              <div className="flex items-center gap-2 text-gray-700">
                                <CircleDollarSign className="w-4.5 h-4.5 text-[#1351b4] shrink-0" aria-hidden="true" />
                                <p className="text-gray-700">Custo: <strong className="font-bold text-black">Gratuito</strong></p>
                              </div>
                              <div className="flex items-center gap-2 text-gray-700">
                                <Clock className="w-4.5 h-4.5 text-[#1351b4] shrink-0" aria-hidden="true" />
                                <p className="text-gray-700">Prazo: <strong className="font-bold text-black">Imediato</strong></p>
                              </div>
                              <div className="flex items-center gap-2 text-gray-700">
                                <FileText className="w-4.5 h-4.5 text-[#1351b4] shrink-0" aria-hidden="true" />
                                <p>Informação necessária: <strong>Código de autenticidade localizado no início da certidão que deseja validar</strong></p>
                              </div>
                            </div>
                          </div>
                        )}

                        {activeService.id === "emitir-exercicio-advocacia" && (
                          <div className="space-y-4">
                            <p>Use este serviço para gerar uma certidão com os processos em que um profissional da advocacia atuou no Tribunal Superior do Trabalho (TST).</p>
                            <p>Mostra os processos em que o advogado ou a advogada está cadastrado(a), com CPF, como representante de uma das partes.</p>
                            <p>A certidão lista os processos:</p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                              <li>em andamento no TST,</li>
                              <li>arquivados no TST,</li>
                              <li>enviados aos Tribunais Regionais do Trabalho (TRTs),</li>
                              <li>enviados ao Superior Tribunal de Justiça (STJ) ou</li>
                              <li>enviados ao Supremo Tribunal Federal (STF)</li>
                            </ul>
                            <p>A certidão pode ser utilizada para comprovar experiência profissional ou prática jurídica para concursos públicos.</p>
                            <p>
                              Para emitir certidão personalizada ou sobre processo em segredo de justiça, consulte o tópico <em className="italic">Outras Informações</em>.
                            </p>
                            <div className="space-y-2.5 text-xs sm:text-sm pt-2">
                              <div className="flex items-center gap-2 text-gray-700">
                                <CircleDollarSign className="w-4.5 h-4.5 text-[#1351b4] shrink-0" aria-hidden="true" />
                                <p className="text-gray-700">Custo: <strong className="font-bold text-black">Gratuito</strong></p>
                              </div>
                              <div className="flex items-center gap-2 text-gray-700">
                                <Clock className="w-4.5 h-4.5 text-[#1351b4] shrink-0" aria-hidden="true" />
                                <p className="text-gray-700">Prazo: <strong className="font-bold text-black">Imediato</strong></p>
                              </div>
                              <div className="flex items-center gap-2 text-gray-700">
                                <FileText className="w-4.5 h-4.5 text-[#1351b4] shrink-0" aria-hidden="true" />
                                <p>Informação necessária: <strong>CPF</strong></p>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {activeService.id === "validar-exercicio-advocacia" && (
                          <div className="space-y-4">
                            <p>
                              Use este serviço para saber se uma{" "}
                              <button
                                onClick={() => {
                                  setSelectedServiceId("emitir-exercicio-advocacia");
                                  window.scrollTo(0, 0);
                                }}
                                className="text-[#1351b4] hover:text-[#0f3c87] font-bold underline cursor-pointer inline text-left hover:underline"
                              >
                                Certidão de Exercício da Advocacia
                              </button>{" "}
                              foi emitida pelo Tribunal Superior do Trabalho (TST).
                            </p>
                            <div className="space-y-2.5 text-xs sm:text-sm pt-2">
                              <div className="flex items-center gap-2 text-gray-700">
                                <CircleDollarSign className="w-4.5 h-4.5 text-[#1351b4] shrink-0" aria-hidden="true" />
                                <p className="text-gray-700">Custo: <strong className="font-bold text-black">Gratuito</strong></p>
                              </div>
                              <div className="flex items-center gap-2 text-gray-700">
                                <Clock className="w-4.5 h-4.5 text-[#1351b4] shrink-0" aria-hidden="true" />
                                <p className="text-gray-700">Prazo: <strong className="font-bold text-black">Imediato</strong></p>
                              </div>
                              <div className="flex items-start gap-2 text-gray-700">
                                <FileText className="w-4.5 h-4.5 text-[#1351b4] shrink-0 mt-0.5" aria-hidden="true" />
                                <p>Informação necessária: <strong>Código de autenticidade localizado no início da certidão que deseja validar</strong></p>
                              </div>
                            </div>
                          </div>
                        )}

                        {activeService.id === "pedir-certidao-objeto-pe" && (
                          <div className="space-y-4">
                            <p>Use este serviço para pedir uma certidão que informa o assunto (objeto) e o andamento de um processo no Tribunal Superior do Trabalho (TST).</p>
                            <div className="bg-amber-50 border-l-4 border-amber-500 p-3 text-amber-900 rounded-r-md text-xs sm:text-sm">
                              <strong>Importante:</strong> o pedido deve ser enviado dentro do próprio processo judicial.
                            </div>
                            <div className="space-y-2.5 text-xs sm:text-sm pt-2">
                              <div className="flex items-center gap-2 text-gray-700">
                                <CircleDollarSign className="w-4.5 h-4.5 text-[#1351b4] shrink-0" aria-hidden="true" />
                                <p className="text-gray-700">Custo: <strong className="font-bold text-black">Pode haver cobrança.</strong> Consulte as regras em <em className="italic">Outras Informações</em>.</p>
                              </div>
                              <div className="flex items-center gap-2 text-gray-700">
                                <Clock className="w-4.5 h-4.5 text-[#1351b4] shrink-0" aria-hidden="true" />
                                <p className="text-gray-700">Prazo: <strong className="font-bold text-black">Até 15 dias úteis</strong></p>
                              </div>
                              <div className="flex items-center gap-2 text-gray-700">
                                <FileText className="w-4.5 h-4.5 text-[#1351b4] shrink-0" aria-hidden="true" />
                                <p>Informação necessária: <strong>Número do processo e petição anexada no processo judicial</strong></p>
                              </div>
                            </div>
                          </div>
                        )}

                        {activeService.id === "pedir-certidao-personalizada" && (
                          <div className="space-y-4">
                            <p>Use este serviço para pedir certidão sobre processos que estão ou que estiveram no Tribunal Superior do Trabalho (TST) e certidão que não pode ser emitida de forma automática pelo site.</p>
                            <p className="font-medium text-gray-800">Este serviço atende pedidos de:</p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700 text-xs sm:text-sm">
                              <li>Certidão de Distribuição de Feitos no TST (processos em andamento e arquivados);</li>
                              <li>Certidão Judicial de Exercício da Advocacia personalizada;</li>
                              <li>Certidão de processos baixados ou arquivados;</li>
                              <li>Outras certidões processuais que não possuam sistema próprio de emissão.</li>
                            </ul>
                            <div className="space-y-2.5 text-xs sm:text-sm pt-2">
                              <div className="flex items-center gap-2 text-gray-700">
                                <CircleDollarSign className="w-4.5 h-4.5 text-[#1351b4] shrink-0" aria-hidden="true" />
                                <p className="text-gray-700">Custo: <strong className="font-bold text-black">Pode haver cobrança.</strong> Consulte as regras em <em className="italic">Outras Informações</em>.</p>
                              </div>
                              <div className="flex items-center gap-2 text-gray-700">
                                <Clock className="w-4.5 h-4.5 text-[#1351b4] shrink-0" aria-hidden="true" />
                                <p className="text-gray-700">Prazo: <strong className="font-bold text-black">Até 15 dias úteis</strong></p>
                              </div>
                              <div className="flex items-start gap-2 text-gray-700">
                                <FileText className="w-4.5 h-4.5 text-[#1351b4] shrink-0 mt-0.5" aria-hidden="true" />
                                <p>Informações necessárias: <strong>Conta no Google para preencher o formulário apresentado no botão Iniciar e documento em PDF com a descrição do pedido</strong></p>
                              </div>
                            </div>
                          </div>
                        )}

                        {activeService.id === "consultar-indisponibilidade" && (
                          <div className="space-y-4">
                            <p>Use este serviço para consultar os períodos em que sistemas do Tribunal Superior do Trabalho (TST) ficaram indisponíveis e, quando houver, baixe a certidão correspondente.</p>
                            <p className="font-medium text-gray-800">Escolha o sistema e localize a data em que ocorreu o problema:</p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700 text-xs sm:text-sm">
                              <li>Certidão Nacional de Débitos Trabalhistas - CNDT</li>
                              <li>Diário Eletrônico da Justiça do Trabalho - DEJT</li>
                              <li>Investigação de Movimentações Bancárias - Simba</li>
                              <li>Peticionamento Eletrônico - e-Doc</li>
                              <li>Processo Judicial Eletrônico - PJe</li>
                              <li>Sistema Eletrônico de Informações - SEI</li>
                              <li>Visualização de Autos</li>
                            </ul>
                            <div className="space-y-2.5 text-xs sm:text-sm pt-2">
                              <div className="flex items-center gap-2 text-gray-700">
                                <CircleDollarSign className="w-4.5 h-4.5 text-[#1351b4] shrink-0" aria-hidden="true" />
                                <p className="text-gray-700">Custo: <strong className="font-bold text-black">Gratuito</strong></p>
                              </div>
                              <div className="flex items-center gap-2 text-gray-700">
                                <Clock className="w-4.5 h-4.5 text-[#1351b4] shrink-0" aria-hidden="true" />
                                <p className="text-gray-700">Prazo: <strong className="font-bold text-black">Imediato</strong></p>
                              </div>
                              <div className="flex items-center gap-2 text-gray-700">
                                <FileText className="w-4.5 h-4.5 text-[#1351b4] shrink-0" aria-hidden="true" />
                                <p>Informação necessária: <strong>Sistema, dia e horário da falha</strong></p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </article>

                {/* Accordion Item 2: Quem pode utilizar? */}
                <article className="border border-gray-200 rounded-xl bg-white shadow-sm">
                  <h2>
                    <button
                      onClick={() => toggleAccordion("whoCanUse")}
                      className={`w-full text-left py-5 px-6 font-extrabold text-black font-heading flex items-center gap-2.5 bg-white hover:bg-slate-50 hover:no-underline transition-all text-sm sm:text-base cursor-pointer select-none rounded-t-xl focus-visible:ring-2 focus-visible:ring-[#1351b4] focus-visible:ring-offset-2 focus-visible:outline-none ${!accordionState.whoCanUse ? 'rounded-b-xl' : ''}`}
                      aria-expanded={accordionState.whoCanUse}
                      aria-controls="aba-quem-pode"
                    >
                      {accordionState.whoCanUse ? <ChevronUp className="w-5 h-5 shrink-0 text-[#1351b4]" /> : <ChevronDown className="w-5 h-5 shrink-0 text-[#1351b4]" />}
                      <span>Quem pode utilizar este serviço?</span>
                    </button>
                  </h2>
                  
                  {accordionState.whoCanUse && (
                    <div className="p-6 text-sm text-gray-700 leading-relaxed border-t border-gray-100 bg-white text-left animate-fadeIn rounded-b-xl" id="aba-quem-pode">
                      <p>{activeService.whoCanUse}</p>
                    </div>
                  )}
                </article>

                {/* Accordion Item 3: Etapas para a realização deste serviço */}
                <article className="border border-gray-200 rounded-xl bg-white shadow-sm">
                  <h2>
                    <button
                      onClick={() => toggleAccordion("steps")}
                      className={`w-full text-left py-5 px-6 font-extrabold text-black font-heading flex items-center gap-2.5 bg-white hover:bg-slate-50 hover:no-underline transition-all text-sm sm:text-base cursor-pointer select-none rounded-t-xl focus-visible:ring-2 focus-visible:ring-[#1351b4] focus-visible:ring-offset-2 focus-visible:outline-none ${!accordionState.steps ? 'rounded-b-xl' : ''}`}
                      aria-expanded={accordionState.steps}
                      aria-controls="aba-etapas-obtencao"
                    >
                      {accordionState.steps ? <ChevronUp className="w-5 h-5 shrink-0 text-[#1351b4]" /> : <ChevronDown className="w-5 h-5 shrink-0 text-[#1351b4]" />}
                      <span>Etapas para a realização deste serviço</span>
                    </button>
                  </h2>
                  
                  {accordionState.steps && (
                    <div className="p-6 text-sm text-gray-700 border-t border-gray-100 bg-white text-left animate-fadeIn space-y-6 rounded-b-xl" id="aba-etapas-obtencao">
                      {activeService.id === "emitir-certidao-andamento" && (
                        <>
                          <div className="space-y-2">
                            <h3 className="font-bold text-gray-800 text-base sm:text-md">
                              1. Emitir Certidão
                            </h3>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                              <li>Escolha o canal de atendimento abaixo</li>
                              <li>Informe o número do processo que deseja consultar.</li>
                            </ul>
                          </div>

                          <div className="pt-5">
                            <h3 className="font-bold text-gray-800 text-base sm:text-md mb-4">
                              Canais de atendimento
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                              {/* Portal Web (Internet) */}
                              <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm space-y-4 flex flex-col justify-between">
                                <div className="space-y-3">
                                  <h4 className="font-bold text-gray-800 text-base flex items-center gap-2">
                                    <Globe className="w-5 h-5 shrink-0 text-[#1351b4]" />
                                    <span>Portal Web (Internet)</span>
                                  </h4>
                                  
                                  <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-gray-700">
                                    <li className="leading-relaxed">
                                      Acesse a{" "}
                                      <button
                                        onClick={() => {
                                          setSelectedServiceId("emitir-certidao-andamento");
                                          setCurrentPage("detalhe");
                                          window.scrollTo(0, 0);
                                        }}
                                        className="text-[#1351b4] hover:text-[#0f3c87] font-bold underline cursor-pointer text-left inline hover:underline"
                                      >
                                        página de solicitação desta certidão
                                      </button>{" "}
                                      ou clique no botão{" "}
                                      <span className="p-1 bg-gray-100 border border-gray-200 rounded-full inline-flex items-center justify-center select-none shadow-sm mx-1 align-middle">
                                        <button
                                          onClick={() => {
                                            setCurrentPage("emissao");
                                            window.scrollTo(0, 0);
                                          }}
                                          className="bg-[#168821] hover:bg-[#2da382] hover:underline text-white font-bold text-xs py-0.5 px-3 rounded-full transition-all duration-200 cursor-pointer inline-flex items-center gap-1"
                                        >
                                          <span className="text-[10px]">▶</span> Iniciar
                                        </button>
                                      </span>
                                    </li>
                                    <li className="leading-relaxed">
                                      Siga as orientações do sistema para emitir e baixar a certidão
                                    </li>
                                    <li className="leading-relaxed">
                                      Lembre-se de clicar no campo &ldquo;Não sou um robô&rdquo;
                                    </li>
                                    <li className="leading-relaxed">
                                      A certidão será emitida com um código de autenticidade.
                                    </li>
                                  </ol>
                                </div>

                                <div className="border-t border-gray-100 pt-3 space-y-2 text-xs sm:text-sm">
                                  <div className="flex items-center gap-2">
                                    <CircleDollarSign className="w-4 h-4 text-[#1351b4] shrink-0" />
                                    <p className="text-gray-655">Custo: <strong className="text-gray-800 font-bold">Gratuito</strong></p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-[#1351b4]" />
                                    <p className="text-gray-655">Prazo: <strong className="text-gray-800 font-bold">Imediato</strong></p>
                                  </div>
                                </div>
                              </div>

                              {/* Presencial */}
                              <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm space-y-4 flex flex-col justify-between">
                                <div className="space-y-3">
                                  <h4 className="font-bold text-gray-800 text-base flex items-center gap-2">
                                    <MapPin className="w-5 h-5 shrink-0 text-[#1351b4]" />
                                    <span>
                                      Presencial{" "}
                                      <a
                                        href="https://maps.google.com/?q=Tribunal+Superior+do+Trabalho"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#1351b4] hover:text-[#0f3c87] font-bold underline cursor-pointer hover:underline"
                                      >
                                        (Edifício Sede do TST)
                                      </a>:
                                    </span>
                                  </h4>

                                  <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-gray-700">
                                    <li className="leading-relaxed">
                                      Compareça ao <strong>Núcleo de Cadastramento Processual (NCP)</strong>:
                                      <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-gray-700 leading-relaxed mt-1.5 font-sans">
                                        <li><strong>Endereço:</strong> Setor de Administração Federal Sul (SAFS) Q 8 Lote 1 - Asa Sul, Brasília - DF</li>
                                        <li><strong>Balcão do Protocolo:</strong> Bloco A, Térreo, sala AT-110</li>
                                        <li><strong>Atendimento:</strong> das 9h às 19h - segunda a sexta-feira</li>
                                      </ul>
                                    </li>
                                    <li className="leading-relaxed">
                                      A certidão será emitida sem um código de autenticidade.
                                    </li>
                                  </ol>
                                </div>

                                <div className="border-t border-gray-100 pt-3 space-y-2 text-xs sm:text-sm">
                                  <div className="flex items-start gap-2">
                                    <CircleDollarSign className="w-4 h-4 text-[#1351b4] shrink-0 mt-0.5" />
                                    <p className="text-gray-655">Custo: <span className="text-gray-800 font-bold">Pode haver cobrança. Se precisar pagar, emita a <a href="https://gru.jt.jus.br/gru" target="_blank" rel="noopener noreferrer" className="text-[#1351b4] hover:text-[#0f3c87] font-bold underline cursor-pointer hover:underline">guia de pagamento GRU</a>. Consulte as regras em <em className="italic">Outras Informações</em>.</span></p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-[#1351b4] shrink-0" />
                                    <p className="text-gray-655">Prazo: <strong className="text-gray-800 font-bold">até 15 dias úteis</strong></p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      )}

                      {activeService.id === "emitir-certidao-arquivados" && (
                        <>
                          <div className="space-y-2">
                            <h3 className="font-bold text-gray-800 text-base sm:text-md">
                              1. Emitir certidão
                            </h3>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                              <li>Escolha o canal de atendimento abaixo</li>
                              <li>Informe o CNPJ que deseja consultar</li>
                            </ul>
                          </div>

                          <div className="pt-5">
                            <h3 className="font-bold text-gray-800 text-base sm:text-md mb-4">
                              Canais de atendimento
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                              {/* Portal Web (Internet) */}
                              <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm space-y-4 flex flex-col justify-between">
                                <div className="space-y-3">
                                  <h4 className="font-bold text-gray-800 text-base flex items-center gap-2">
                                    <Globe className="w-5 h-5 shrink-0 text-[#1351b4]" />
                                    <span>Portal Web (Internet):</span>
                                  </h4>
                                  
                                  <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-gray-700">
                                    <li className="leading-relaxed">
                                      Acesse a{" "}
                                      <button
                                        onClick={() => {
                                          setSelectedServiceId("emitir-certidao-arquivados");
                                          setCurrentPage("detalhe");
                                          window.scrollTo(0, 0);
                                        }}
                                        className="text-[#1351b4] hover:text-[#0f3c87] font-bold underline cursor-pointer text-left inline hover:underline"
                                      >
                                        página de solicitação desta certidão
                                      </button>{" "}
                                      ou clique no botão{" "}
                                      <span className="p-1 bg-gray-100 border border-gray-200 rounded-full inline-flex items-center justify-center select-none shadow-sm mx-1 align-middle">
                                        <button
                                          onClick={() => {
                                            setCurrentPage("emissao");
                                            window.scrollTo(0, 0);
                                          }}
                                          className="bg-[#168821] hover:bg-[#2da382] hover:underline text-white font-bold text-xs py-0.5 px-3 rounded-full transition-all duration-200 cursor-pointer inline-flex items-center gap-1"
                                        >
                                          <span className="text-[10px]">▶</span> Iniciar
                                        </button>
                                      </span>
                                    </li>
                                    <li className="leading-relaxed">
                                      Siga as orientações do sistema para emitir e baixar a certidão
                                    </li>
                                    <li className="leading-relaxed">
                                      Lembre-se de clicar no campo &ldquo;Não sou um robô&rdquo;
                                    </li>
                                    <li className="leading-relaxed">
                                      A certidão será emitida com código de autenticidade.
                                    </li>
                                  </ol>
                                </div>

                                <div className="border-t border-gray-100 pt-3 space-y-2 text-xs sm:text-sm">
                                  <div className="flex items-center gap-2">
                                    <CircleDollarSign className="w-4 h-4 text-[#1351b4] shrink-0" />
                                    <p className="text-gray-655">Custo: <strong className="text-gray-800 font-bold">Gratuito</strong></p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-[#1351b4]" />
                                    <p className="text-gray-655">Prazo: <strong className="text-gray-800 font-bold">Imediato</strong></p>
                                  </div>
                                </div>
                              </div>

                              {/* Presencial */}
                              <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm space-y-4 flex flex-col justify-between">
                                <div className="space-y-3">
                                  <h4 className="font-bold text-gray-800 text-base flex items-center gap-2">
                                    <MapPin className="w-5 h-5 shrink-0 text-[#1351b4]" />
                                    <span>
                                      Presencial{" "}
                                      <a
                                        href="https://maps.google.com/?q=Tribunal+Superior+do+Trabalho"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#1351b4] hover:text-[#0f3c87] font-bold underline cursor-pointer hover:underline"
                                      >
                                        (Edifício Sede do TST)
                                      </a>:
                                    </span>
                                  </h4>

                                  <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-gray-700">
                                    <li className="leading-relaxed">
                                      Compareça ao <strong>Núcleo de Cadastramento Processual (NCP)</strong>:
                                      <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-gray-700 leading-relaxed mt-1.5 font-sans">
                                        <li><strong>Endereço:</strong> Setor de Administração Federal Sul (SAFS) Q 8 Lote 1 - Asa Sul, Brasília - DF</li>
                                        <li><strong>Balcão do Protocolo:</strong> Bloco A, Térreo, sala AT-110</li>
                                        <li><strong>Atendimento:</strong> das 9h às 19h - segunda a sexta-feira</li>
                                      </ul>
                                    </li>
                                    <li className="leading-relaxed">
                                      A certidão será emitida sem um código de autenticidade.
                                    </li>
                                  </ol>
                                </div>

                                <div className="border-t border-gray-100 pt-3 space-y-2 text-xs sm:text-sm">
                                  <div className="flex items-start gap-2">
                                    <CircleDollarSign className="w-4 h-4 text-[#1351b4] shrink-0 mt-0.5" />
                                    <p className="text-gray-655">Custo: <span className="text-gray-800 font-bold">Pode haver cobrança. Se precisar pagar, emita a <a href="https://gru.jt.jus.br/gru" target="_blank" rel="noopener noreferrer" className="text-[#1351b4] hover:text-[#0f3c87] font-bold underline cursor-pointer hover:underline">guia de pagamento GRU</a>. Consulte as regras em <em className="italic">Outras Informações</em>.</span></p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-[#1351b4] shrink-0" />
                                    <p className="text-gray-655">Prazo: <strong className="text-gray-800 font-bold">até 15 dias úteis</strong></p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      )}

                      {activeService.id === "validar-certidao-andamento" && (
                        <>
                          <div className="space-y-2">
                            <h3 className="font-bold text-gray-800 text-base sm:text-md">
                              1. Validar certidão
                            </h3>
                            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-gray-700">
                              <li>Acesse o canal de atendimento abaixo.</li>
                              <li>Informe o código de autenticidade que aparece na certidão que deseja consultar.</li>
                            </ul>
                          </div>

                          <div className="pt-5">
                            <h3 className="font-bold text-gray-800 text-base sm:text-md mb-4">
                              Canais de atendimento
                            </h3>

                            <div className="space-y-4">
                              {/* Portal Web (Internet) */}
                              <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm space-y-4 flex flex-col justify-between">
                                <div className="space-y-3">
                                  <h4 className="font-bold text-gray-800 text-base flex items-center gap-2">
                                    <Globe className="w-5 h-5 shrink-0 text-[#1351b4]" />
                                    <span>Portal Web (Internet):</span>
                                  </h4>
                                  
                                  <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-gray-700">
                                    <li className="leading-relaxed">
                                      Acesse a{" "}
                                      <button
                                        onClick={() => {
                                          setCurrentPage("emissao");
                                          window.scrollTo(0, 0);
                                        }}
                                        className="text-[#1351b4] hover:text-[#0f3c87] font-bold underline cursor-pointer text-left inline hover:underline"
                                      >
                                        página de validação desta certidão
                                      </button>{" "}
                                      ou clique no botão{" "}
                                      <span className="p-1 bg-gray-100 border border-gray-200 rounded-full inline-flex items-center justify-center select-none shadow-sm mx-1 align-middle">
                                        <button
                                          onClick={() => {
                                            setCurrentPage("emissao");
                                            window.scrollTo(0, 0);
                                          }}
                                          className="bg-[#168821] hover:bg-[#2da382] hover:underline text-white font-bold text-xs py-0.5 px-3 rounded-full transition-all duration-200 cursor-pointer inline-flex items-center gap-1"
                                        >
                                          <span className="text-[10px]">▶</span> Iniciar
                                        </button>
                                      </span>
                                    </li>
                                    <li className="leading-relaxed">
                                      Siga as orientações do sistema para validar a certidão
                                    </li>
                                    <li className="leading-relaxed">
                                      Lembre-se de clicar no campo &ldquo;Não sou um robô&rdquo;
                                    </li>
                                  </ol>
                                </div>

                                <div className="border-t border-gray-100 pt-3 space-y-2 text-xs sm:text-sm">
                                  <div className="flex items-center gap-2">
                                    <CircleDollarSign className="w-4 h-4 text-[#1351b4] shrink-0" />
                                    <p className="text-gray-655">Custo: <strong className="text-gray-800 font-bold">Gratuito</strong></p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-[#1351b4]" />
                                    <p className="text-gray-655">Prazo: <strong className="text-gray-800 font-bold">Imediato</strong></p>
                                  </div>

                                  <div className="mt-3 pt-3 border-t border-dashed border-gray-100 space-y-1.5 text-gray-750 font-sans">
                                    <p className="font-bold text-gray-800">Importante:</p>
                                    <ul className="list-disc pl-5 space-y-1">
                                      <li>Se o código for válido, o sistema abrirá a certidão original.</li>
                                      <li>Se o código não for válido, confira se o código foi digitado corretamente e tente novamente.</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      )}

                      {activeService.id === "validar-certidao-arquivados" && (
                        <>
                          <div className="space-y-2">
                            <h3 className="font-bold text-gray-800 text-base sm:text-md">
                              1. Validar certidão
                            </h3>
                            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-gray-700">
                              <li>Acesse o canal de atendimento abaixo.</li>
                              <li>Informe o código de autenticidade que aparece na certidão.</li>
                            </ul>
                          </div>

                          <div className="pt-5">
                            <h3 className="font-bold text-gray-800 text-base sm:text-md mb-4">
                              Canal de atendimento
                            </h3>

                            <div className="space-y-4">
                              {/* Portal Web (Internet) */}
                              <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm space-y-4 flex flex-col justify-between">
                                <div className="space-y-3">
                                  <h4 className="font-bold text-gray-800 text-base flex items-center gap-2">
                                    <Globe className="w-5 h-5 shrink-0 text-[#1351b4]" />
                                    <span>Portal Web (Internet):</span>
                                  </h4>
                                  
                                  <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-gray-700">
                                    <li className="leading-relaxed">
                                      Acesse a{" "}
                                      <button
                                        onClick={() => {
                                          setCurrentPage("emissao");
                                          window.scrollTo(0, 0);
                                        }}
                                        className="text-[#1351b4] hover:text-[#0f3c87] font-bold underline cursor-pointer text-left inline hover:underline"
                                      >
                                        página de validação desta certidão
                                      </button>{" "}
                                      ou clique no botão{" "}
                                      <span className="p-1 bg-gray-100 border border-gray-200 rounded-full inline-flex items-center justify-center select-none shadow-sm mx-1 align-middle">
                                        <button
                                          onClick={() => {
                                            setCurrentPage("emissao");
                                            window.scrollTo(0, 0);
                                          }}
                                          className="bg-[#168821] hover:bg-[#2da382] hover:underline text-white font-bold text-xs py-0.5 px-3 rounded-full transition-all duration-200 cursor-pointer inline-flex items-center gap-1"
                                        >
                                          <span className="text-[10px]">▶</span> Iniciar
                                        </button>
                                      </span>
                                    </li>
                                    <li className="leading-relaxed">
                                      Siga as orientações do sistema para validar a certidão
                                    </li>
                                    <li className="leading-relaxed">
                                      Lembre-se de clicar no campo &ldquo;Não sou um robô&rdquo;
                                    </li>
                                  </ol>

                                </div>

                                <div className="border-t border-gray-100 pt-3 space-y-2 text-xs sm:text-sm">
                                  <div className="flex items-center gap-2">
                                    <CircleDollarSign className="w-4 h-4 text-[#1351b4] shrink-0" />
                                    <p className="text-gray-655">Custo: <strong className="text-gray-800 font-bold">Gratuito</strong></p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-[#1351b4]" />
                                    <p className="text-gray-655">Prazo: <strong className="text-gray-800 font-bold">Imediato</strong></p>
                                  </div>

                                  <div className="mt-3 pt-3 border-t border-dashed border-gray-100 space-y-1.5 text-gray-750 font-sans">
                                    <p className="font-bold text-gray-800">Importante:</p>
                                    <ul className="list-disc pl-5 space-y-1">
                                      <li>Se o código for válido, o sistema abrirá a certidão original.</li>
                                      <li>Se o código não for válido, confira se o código foi digitado corretamente e tente novamente.</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      )}

                      {activeService.id === "emitir-exercicio-advocacia" && (
                        <>
                          <div className="space-y-2">
                            <h3 className="font-bold text-gray-800 text-base sm:text-md">
                              1. Emitir Certidão
                            </h3>
                            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-gray-700">
                              <li>Escolha o canal de atendimento abaixo</li>
                              <li>Informe o CPF que deseja consultar</li>
                            </ul>
                          </div>

                          <div className="pt-5">
                            <h3 className="font-bold text-gray-800 text-base sm:text-md mb-4">
                              Canais de atendimento
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                              {/* Portal Web (Internet) */}
                              <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm space-y-4 flex flex-col justify-between">
                                <div className="space-y-3">
                                  <h4 className="font-bold text-gray-800 text-base flex items-center gap-2">
                                    <Globe className="w-5 h-5 shrink-0 text-[#1351b4]" />
                                    <span>Portal Web (Internet):</span>
                                  </h4>
                                  
                                  <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-gray-700">
                                    <li className="leading-relaxed">
                                      Acesse a{" "}
                                      <button
                                        onClick={() => {
                                          setCurrentPage("emissao");
                                          window.scrollTo(0, 0);
                                        }}
                                        className="text-[#1351b4] hover:text-[#0f3c87] font-bold underline cursor-pointer text-left inline hover:underline"
                                      >
                                        página de solicitação desta certidão
                                      </button>{" "}
                                      ou clique no botão{" "}
                                      <span className="p-1 bg-gray-100 border border-gray-200 rounded-full inline-flex items-center justify-center select-none shadow-sm mx-1 align-middle">
                                        <button
                                          onClick={() => {
                                            setCurrentPage("emissao");
                                            window.scrollTo(0, 0);
                                          }}
                                          className="bg-[#168821] hover:bg-[#2da382] hover:underline text-white font-bold text-xs py-0.5 px-3 rounded-full transition-all duration-200 cursor-pointer inline-flex items-center gap-1"
                                        >
                                          <span className="text-[10px]">▶</span> Iniciar
                                        </button>
                                      </span>
                                    </li>
                                    <li className="leading-relaxed">
                                      Siga as orientações do sistema para emitir e baixar a certidão
                                    </li>
                                    <li className="leading-relaxed">
                                      Lembre-se de clicar no campo &ldquo;Não sou um robô&rdquo;
                                    </li>
                                    <li className="leading-relaxed">
                                      A certidão será emitida com um código de autenticidade.
                                    </li>
                                  </ol>
                                </div>

                                <div className="border-t border-gray-100 pt-3 space-y-2 text-xs sm:text-sm">
                                  <div className="flex items-center gap-2">
                                    <CircleDollarSign className="w-4 h-4 text-[#1351b4] shrink-0" />
                                    <p className="text-gray-655">Custo: <strong className="text-gray-800 font-bold">Gratuito.</strong></p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-[#1351b4]" />
                                    <p className="text-gray-655">Prazo: <strong className="text-gray-800 font-bold">Imediato.</strong></p>
                                  </div>
                                </div>
                              </div>

                              {/* Presencial */}
                              <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm space-y-4 flex flex-col justify-between">
                                <div className="space-y-3">
                                  <h4 className="font-bold text-gray-800 text-base flex items-center gap-2">
                                    <MapPin className="w-5 h-5 shrink-0 text-[#1351b4]" />
                                    <span>
                                      Presencial{" "}
                                      <a
                                        href="https://maps.google.com/?q=Tribunal+Superior+do+Trabalho"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#1351b4] hover:text-[#0f3c87] font-bold underline cursor-pointer hover:underline"
                                      >
                                        (Edifício Sede do TST)
                                      </a>:
                                    </span>
                                  </h4>

                                  <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-gray-700">
                                    <li className="leading-relaxed">
                                      Compareça ao <strong>Núcleo de Cadastramento Processual (NCP)</strong>:
                                      <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-gray-700 leading-relaxed mt-1.5 font-sans">
                                        <li><strong>Endereço:</strong> Setor de Administração Federal Sul (SAFS) Q 8 Lote 1 - Asa Sul, Brasília - DF</li>
                                        <li><strong>Balcão do Protocolo:</strong> Bloco A, Térreo, sala AT-110</li>
                                        <li><strong>Atendimento:</strong> das 9h às 19h - segunda a sexta-feira</li>
                                      </ul>
                                    </li>
                                    <li className="leading-relaxed">
                                      A certidão será emitida sem um código de autenticidade.
                                    </li>
                                  </ol>
                                </div>

                                <div className="border-t border-gray-100 pt-3 space-y-2 text-xs sm:text-sm">
                                  <div className="flex items-start gap-2">
                                    <CircleDollarSign className="w-4 h-4 text-[#1351b4] shrink-0 mt-0.5" />
                                    <p className="text-gray-655">Custo: <span className="text-gray-800 font-bold">Pode haver cobrança. Se precisar pagar, emita a <a href="https://gru.jt.jus.br/gru" target="_blank" rel="noopener noreferrer" className="text-[#1351b4] hover:text-[#0f3c87] font-bold underline cursor-pointer hover:underline">guia de pagamento GRU</a>. Consulte as regras em <em className="italic">Outras Informações</em>.</span></p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-[#1351b4] shrink-0" />
                                    <p className="text-gray-655">Prazo: <strong className="text-gray-800 font-bold">até 15 dias úteis</strong></p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      )}

                      {activeService.id === "validar-exercicio-advocacia" && (
                        <>
                          <div className="space-y-2">
                            <h3 className="font-bold text-gray-800 text-base sm:text-md">
                              1. Validar certidão
                            </h3>
                            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-gray-700">
                              <li>Acesse o canal de atendimento abaixo.</li>
                              <li>Informe o código de autenticidade que aparece na certidão que deseja consultar.</li>
                            </ul>
                          </div>

                          <div className="pt-5">
                            <h3 className="font-bold text-gray-800 text-base sm:text-md mb-4">
                              Canais de Atendimento
                            </h3>

                            <div className="space-y-4">
                              {/* Portal Web (Internet) */}
                              <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm space-y-4 flex flex-col justify-between">
                                <div className="space-y-3">
                                  <h4 className="font-bold text-gray-800 text-base flex items-center gap-2">
                                    <Globe className="w-5 h-5 shrink-0 text-[#1351b4]" />
                                    <span>Portal Web (Internet):</span>
                                  </h4>
                                  
                                  <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-gray-700">
                                    <li className="leading-relaxed">
                                      Acesse a{" "}
                                      <button
                                        onClick={() => {
                                          setCurrentPage("emissao");
                                          window.scrollTo(0, 0);
                                        }}
                                        className="text-[#1351b4] hover:text-[#0f3c87] font-bold underline cursor-pointer text-left inline hover:underline"
                                      >
                                        página de validação desta certidão
                                      </button>{" "}
                                      ou clique no botão{" "}
                                      <span className="p-1 bg-gray-100 border border-gray-200 rounded-full inline-flex items-center justify-center select-none shadow-sm mx-1 align-middle">
                                        <button
                                          onClick={() => {
                                            setCurrentPage("emissao");
                                            window.scrollTo(0, 0);
                                          }}
                                          className="bg-[#168821] hover:bg-[#2da382] hover:underline text-white font-bold text-xs py-0.5 px-3 rounded-full transition-all duration-200 cursor-pointer inline-flex items-center gap-1"
                                        >
                                          <span className="text-[10px]">▶</span> Iniciar
                                        </button>
                                      </span>
                                    </li>
                                    <li className="leading-relaxed">
                                      Siga as orientações do sistema para validar a certidão
                                    </li>
                                    <li className="leading-relaxed">
                                      Lembre-se de clicar no campo &ldquo;Não sou um robô&rdquo;
                                    </li>
                                  </ol>
                                </div>

                                <div className="pt-3 space-y-2 text-xs sm:text-sm">
                                  <div className="flex items-center gap-2">
                                    <CircleDollarSign className="w-4 h-4 text-[#1351b4] shrink-0" />
                                    <p className="text-gray-655">Custo: <strong className="text-gray-800 font-bold">Gratuito</strong></p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-[#1351b4] shrink-0" />
                                    <p className="text-gray-655">Prazo: <strong className="text-gray-800 font-bold">Imediato</strong></p>
                                  </div>

                                  <div className="mt-3 pt-3 border-t border-dashed border-gray-100 space-y-1.5 text-gray-700">
                                    <p className="font-bold text-gray-800">Importante:</p>
                                    <ul className="list-disc pl-5 space-y-1">
                                      <li>Se o código for válido, o sistema abrirá a certidão original.</li>
                                      <li>Se o código não for válido, confira se o código foi digitado corretamente e tente novamente.</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      )}

                      {!["emitir-certidao-andamento", "validar-certidao-andamento", "emitir-certidao-arquivados", "validar-certidao-arquivados", "emitir-exercicio-advocacia", "validar-exercicio-advocacia"].includes(activeService.id) && activeService.steps && (
                        <div className="space-y-6">
                          {activeService.steps.map((step, idx) => (
                            <div key={idx} className="border-b border-gray-100 last:border-b-0 pb-6 last:pb-0 space-y-3">
                              <h3 className="font-bold text-gray-900 text-base sm:text-md">
                                {idx + 1}. {step.name}
                              </h3>
                              <div className="text-xs sm:text-sm text-gray-700 leading-relaxed whitespace-pre-line font-sans">
                                {step.description}
                              </div>
                              <div className="bg-slate-50 border border-gray-200 rounded-xl p-4 space-y-2 text-xs sm:text-sm">
                                {step.channel && (
                                  <div className="flex items-center gap-2 text-gray-700">
                                    <Globe className="w-4 h-4 text-[#1351b4] shrink-0" />
                                    <span>Canal: <strong>{step.channel}</strong></span>
                                  </div>
                                )}
                                {step.costs && (
                                  <div className="flex items-center gap-2 text-gray-700">
                                    <CircleDollarSign className="w-4 h-4 text-[#1351b4] shrink-0" />
                                    <span>Custo: <strong>{step.costs}</strong></span>
                                  </div>
                                )}
                                {step.duration && (
                                  <div className="flex items-center gap-2 text-gray-700">
                                    <Clock className="w-4 h-4 text-[#1351b4] shrink-0" />
                                    <span>Prazo: <strong>{step.duration}</strong></span>
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </article>

                {/* Accordion Item 4: Outras informações */}
                <article className="border border-gray-200 rounded-xl bg-white shadow-sm">
                  <h2>
                    <button
                      onClick={() => toggleAccordion("otherInfo")}
                      className={`w-full text-left py-5 px-6 font-extrabold text-black font-heading flex items-center gap-2.5 bg-white hover:bg-slate-50 hover:no-underline transition-all text-sm sm:text-base cursor-pointer select-none rounded-t-xl focus-visible:ring-2 focus-visible:ring-[#1351b4] focus-visible:ring-offset-2 focus-visible:outline-none ${!accordionState.otherInfo ? 'rounded-b-xl' : ''}`}
                      aria-expanded={accordionState.otherInfo}
                      aria-controls="aba-outras-info"
                    >
                      {accordionState.otherInfo ? <ChevronUp className="w-5 h-5 shrink-0 text-[#1351b4]" /> : <ChevronDown className="w-5 h-5 shrink-0 text-[#1351b4]" />}
                      <span>Outras informações</span>
                    </button>
                  </h2>
                  
                  {accordionState.otherInfo && (
                    <div className="p-6 text-sm text-gray-700 border-t border-gray-100 bg-white text-left animate-fadeIn space-y-6 rounded-b-xl" id="aba-outras-info">
                      
                      {activeService.id === "emitir-certidao-andamento" && (
                        <>
                          {/* 1. Esta certidão não mostra */}
                          <div className="space-y-2">
                            <h4 className="font-bold text-gray-800 text-base">
                              Esta certidão não mostra
                            </h4>
                            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-gray-700 font-sans">
                              <li>Processo em segredo de justiça</li>
                              <li>Processo nos Tribunais Regionais do Trabalho (TRTs)</li>
                            </ul>
                          </div>

                          {/* 2. Deseja consultar todos os processos de uma empresa? */}
                          <div className="space-y-2 pt-3">
                            <h4 className="font-bold text-gray-800 text-base">
                              Deseja consultar todos os processos de uma empresa?
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-700 font-sans">
                              Para certidão com todos os processos de uma empresa no TST, acesse o serviço{" "}
                              <button
                                onClick={() => {
                                  setSelectedServiceId("emitir-certidao-arquivados");
                                  window.scrollTo(0, 0);
                                }}
                                className="text-[#1351b4] hover:text-[#0f3c87] font-bold underline cursor-pointer hover:underline text-left inline"
                              >
                                Emitir Certidão de Processos em Tramitação no TST
                              </button>
                              .
                            </p>
                          </div>

                          {/* 3. Como saber se uma certidão é verdadeira? */}
                          <div className="space-y-2 pt-3">
                            <h4 className="font-bold text-gray-800 text-base">
                              Como saber se uma certidão é verdadeira?
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-700">
                              Acesse o serviço{" "}
                              <button
                                onClick={() => {
                                  setSelectedServiceId("validar-certidao-andamento");
                                  window.scrollTo(0, 0);
                                }}
                                className="text-[#1351b4] hover:text-[#0f3c87] font-bold underline cursor-pointer hover:underline text-left inline-block"
                              >
                                Validar Certidão de Histórico do Andamento Processual
                              </button>{" "}
                              para confirmar a autenticidade da certidão.
                            </p>
                          </div>

                          {/* 4. Certidão Personalizada ou Processo em Segredo de Justiça */}
                          <div className="space-y-3 pt-3">
                            <div className="space-y-1">
                              <h4 className="font-bold text-gray-800 text-base">
                                Certidão Personalizada ou Processo em Segredo de Justiça
                              </h4>
                              <p className="text-xs sm:text-sm text-gray-700">
                                Use essa opção se precisar de certidão com informações específicas.
                              </p>
                            </div>
                            <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-gray-700">
                              <li>
                                Preencha o{" "}
                                <a
                                  href="https://docs.google.com/forms/d/e/1FAIpQLSe1_IpKfShLalyhNVFlBR7iSoOvRDGIaq5SPU14pwMACjAUFw/viewform?usp=send_form"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[#1351b4] hover:text-[#0f3c87] font-bold underline cursor-pointer hover:underline"
                                >
                                  formulário de solicitação de certidão específica (manual)
                                </a>
                              </li>
                              <li>Aguarde resposta</li>
                              <li>Receba a certidão por e-mail</li>
                            </ol>
                            <div className="pt-3 space-y-2 text-xs sm:text-sm text-gray-700 mt-3">
                              <div className="flex items-start gap-2">
                                <CircleDollarSign className="w-4 h-4 text-[#1351b4] shrink-0 mt-0.5" aria-hidden="true" />
                                <p>Custo: <span className="text-gray-800 font-bold">Pode haver cobrança. Se precisar pagar, emita a <a href="https://gru.jt.jus.br/gru" target="_blank" rel="noopener noreferrer" className="text-[#1351b4] hover:text-[#0f3c87] font-bold underline cursor-pointer hover:underline">guia de pagamento GRU</a>. Consulte as regras em <em className="italic">Outras Informações</em>.</span></p>
                              </div>
                              <div className="flex items-start gap-2">
                                <Clock className="w-4 h-4 text-[#1351b4] shrink-0 mt-0.5" aria-hidden="true" />
                                <p>Prazo: <strong className="text-gray-800 font-bold">até 15 dias úteis</strong></p>
                              </div>
                            </div>
                          </div>
                        </>
                      )}

                      {activeService.id === "emitir-certidao-arquivados" && (
                        <>
                          {/* 1. Esta certidão não mostra */}
                          <div className="space-y-2">
                            <h4 className="font-bold text-gray-800 text-base">
                              Esta certidão não mostra
                            </h4>
                            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-gray-700 leading-relaxed font-sans">
                              <li>Pesquisa por CPF</li>
                              <li>Processo em segredo de justiça</li>
                              <li>Processo em andamento nos Tribunais Regionais do Trabalho (TRTs)</li>
                              <li>Processo arquivado ou devolvido para o TRT.</li>
                            </ul>
                          </div>

                          {/* 2. Como saber se uma certidão é verdadeira? */}
                          <div className="space-y-2 pt-3">
                            <h4 className="font-bold text-gray-800 text-base">
                              Como saber se uma certidão é verdadeira?
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-700">
                              Acesse o serviço{" "}
                              <button
                                onClick={() => {
                                  setSelectedServiceId("validar-certidao-arquivados");
                                  window.scrollTo(0, 0);
                                }}
                                className="text-[#1351b4] hover:text-[#0f3c87] font-bold underline cursor-pointer hover:underline text-left inline-block"
                              >
                                Validar Certidão de Processos em Tramitação no TST
                              </button>{" "}
                              para confirmar a autenticidade da certidão.
                            </p>
                          </div>

                          {/* 3. Certidão Personalizada ou Segredo de Justiça */}
                          <div className="space-y-3 pt-3">
                            <div className="space-y-1">
                              <h4 className="font-bold text-gray-800 text-base">
                                Certidão Personalizada ou Segredo de Justiça
                              </h4>
                              <p className="text-xs sm:text-sm text-gray-750">
                                Use esta opção se precisar de certidão com informações específicas
                              </p>
                            </div>
                            <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-gray-700">
                              <li>
                                Preencha o{" "}
                                <a
                                  href="https://docs.google.com/forms/d/e/1FAIpQLSe1_IpKfShLalyhNVFlBR7iSoOvRDGIaq5SPU14pwMACjAUFw/viewform?usp=send_form"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[#1351b4] hover:text-[#0f3c87] font-bold underline cursor-pointer hover:underline"
                                >
                                  formulário de solicitação de certidão específica (manual)
                                </a>
                              </li>
                              <li>Aguarde resposta</li>
                              <li>Receba a certidão por e-mail</li>
                            </ol>
                            <div className="pt-3 space-y-2 text-xs sm:text-sm text-gray-700 mt-3">
                              <div className="flex items-start gap-2">
                                <CircleDollarSign className="w-4 h-4 text-[#1351b4] shrink-0 mt-0.5" aria-hidden="true" />
                                <p>Custo: <span className="text-gray-800 font-bold">Pode haver cobrança. Se precisar pagar, emita a <a href="https://gru.jt.jus.br/gru" target="_blank" rel="noopener noreferrer" className="text-[#1351b4] hover:text-[#0f3c87] font-bold underline cursor-pointer hover:underline">guia de pagamento GRU</a>. Consulte as regras em <em className="italic">Outras Informações</em>.</span></p>
                              </div>
                              <div className="flex items-start gap-2">
                                <Clock className="w-4 h-4 text-[#1351b4] shrink-0 mt-0.5" aria-hidden="true" />
                                <p>Prazo: <strong className="text-gray-800 font-bold">até 15 dias úteis</strong></p>
                              </div>
                            </div>
                          </div>
                        </>
                      )}

                      {activeService.id === "validar-certidao-andamento" && (
                        <div className="space-y-6 w-full">
                          {/* Outras informações block */}
                          <div className="space-y-3">
                            <h4 className="font-bold text-gray-800 text-base">
                              Como emitir uma nova certidão?
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                              Acesse o serviço{" "}
                              <button
                                onClick={() => {
                                  setSelectedServiceId("emitir-certidao-andamento");
                                  window.scrollTo(0, 0);
                                }}
                                className="text-[#1351b4] hover:text-[#0f3c87] font-bold underline cursor-pointer hover:underline text-left inline"
                              >
                                Emitir Certidão de Histórico do Andamento Processual
                              </button>
                              .
                            </p>
                          </div>
                        </div>
                      )}

                      {activeService.id === "validar-certidao-arquivados" && (
                        <div className="space-y-6 w-full">
                          {/* Outras informações block */}
                          <div className="space-y-3">
                            <h4 className="font-bold text-gray-800 text-base">
                              Como emitir uma nova certidão?
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                              Acesse o serviço{" "}
                              <button
                                onClick={() => {
                                  setSelectedServiceId("emitir-certidao-arquivados");
                                  window.scrollTo(0, 0);
                                }}
                                className="text-[#1351b4] hover:text-[#0f3c87] font-bold underline cursor-pointer hover:underline text-left inline"
                              >
                                Emitir Certidão de Processos em Tramitação no TST
                              </button>
                              .
                            </p>
                          </div>
                        </div>
                      )}

                      {activeService.id === "emitir-exercicio-advocacia" && (
                        <>
                          {/* 1. Esta certidão não mostra */}
                          <div className="space-y-2">
                            <h4 className="font-bold text-gray-800 text-base">
                              Esta certidão não mostra
                            </h4>
                            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-gray-700 leading-relaxed font-sans">
                              <li>Processo em segredo de justiça</li>
                            </ul>
                          </div>

                          {/* 2. Certidão Personalizada ou Processo em Segredo de Justiça */}
                          <div className="space-y-3 pt-3">
                            <div className="space-y-1">
                              <h4 className="font-bold text-gray-800 text-base">
                                Certidão Personalizada ou Processo em Segredo de Justiça
                              </h4>
                              <p className="text-xs sm:text-sm text-gray-700">
                                Use esta opção se precisar de certidão com informações específicas.
                              </p>
                            </div>
                            <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-gray-700">
                              <li>
                                Preencha o{" "}
                                <a
                                  href="https://docs.google.com/forms/d/e/1FAIpQLSe1_IpKfShLalyhNVFlBR7iSoOvRDGIaq5SPU14pwMACjAUFw/viewform?usp=send_form"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[#1351b4] hover:text-[#0f3c87] font-bold underline cursor-pointer hover:underline"
                                >
                                  formulário de solicitação de certidão específica (manual)
                                </a>
                              </li>
                              <li>Aguarde resposta</li>
                              <li>Receba a certidão por e-mail.</li>
                            </ol>
                            <div className="pt-3 space-y-2 text-xs sm:text-sm text-gray-700 mt-3">
                              <div className="flex items-start gap-2">
                                <CircleDollarSign className="w-4 h-4 text-[#1351b4] shrink-0 mt-0.5" aria-hidden="true" />
                                <p>Custo: <span className="text-gray-800 font-bold">Pode haver cobrança. Se precisar pagar, emita a <a href="https://gru.jt.jus.br/gru" target="_blank" rel="noopener noreferrer" className="text-[#1351b4] hover:text-[#0f3c87] font-bold underline cursor-pointer hover:underline">guia de pagamento GRU</a>. Consulte as regras em <em className="italic">Outras Informações</em>.</span></p>
                              </div>
                              <div className="flex items-start gap-2">
                                <Clock className="w-4 h-4 text-[#1351b4] shrink-0 mt-0.5" aria-hidden="true" />
                                <p>Prazo: <strong className="text-gray-800 font-bold">até 15 dias úteis</strong></p>
                              </div>
                            </div>
                          </div>

                          {/* 3. Como saber se uma certidão é verdadeira? */}
                          <div className="space-y-2 pt-3">
                            <h4 className="font-bold text-gray-800 text-base">
                              Como saber se uma certidão é verdadeira?
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-700">
                              Acesse o serviço{" "}
                              <button
                                onClick={() => {
                                  setSelectedServiceId("validar-exercicio-advocacia");
                                  window.scrollTo(0, 0);
                                }}
                                className="text-[#1351b4] hover:text-[#0f3c87] font-bold underline cursor-pointer hover:underline text-left inline-block"
                              >
                                Validar Certidão de Exercício da Advocacia
                              </button>{" "}
                              para confirmar a autenticidade da certidão.
                            </p>
                          </div>
                        </>
                      )}

                      {activeService.id === "validar-exercicio-advocacia" && (
                        <div className="space-y-6 w-full">
                          {/* Outras informações block */}
                          <div className="space-y-3">
                            <h4 className="font-bold text-gray-800 text-base">
                              Como emitir uma nova certidão?
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                              Acesse o serviço{" "}
                              <button
                                onClick={() => {
                                  setSelectedServiceId("emitir-exercicio-advocacia");
                                  window.scrollTo(0, 0);
                                }}
                                className="text-[#1351b4] hover:text-[#0f3c87] font-bold underline cursor-pointer hover:underline text-left inline"
                              >
                                Emitir Certidão de Exercício da Advocacia
                              </button>
                              .
                            </p>
                          </div>
                        </div>
                      )}

                      {/* 4. LEGISLAÇÃO */}
                      <div className="space-y-2 pt-5">
                        <h4 className="font-bold text-gray-800 text-base">
                          <span>Legislação</span>
                        </h4>
                        <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-gray-600 text-left">
                          <li>
                            <a
                              href="https://www.tst.jus.br/web/acesso-a-informacao/legislacao"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#1351b4] hover:text-[#0f3c87] font-bold underline cursor-pointer hover:underline"
                            >
                              Instrução Normativa nº 20/2022
                            </a>
                            <span className="text-gray-600 font-medium font-sans">
                              {" "}
                              - Define casos em que a certidão será cobrada
                            </span>
                          </li>
                          <li>
                            <a
                              href="https://www.tst.jus.br/web/acesso-a-informacao/legislacao"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#1351b4] hover:text-[#0f3c87] font-bold underline cursor-pointer hover:underline"
                            >
                              Ato Conjunto TST.CSJT.GP.SG nº 21/2010
                            </a>
                            <span className="text-gray-600 font-medium font-sans">
                              {" "}
                              - Define que o pagamento de taxas será por meio de Guia de Recolhimento da União (GRU)
                            </span>
                          </li>
                        </ul>
                      </div>

                      {!["emitir-certidao-andamento", "validar-certidao-andamento", "emitir-certidao-arquivados", "validar-certidao-arquivados", "emitir-exercicio-advocacia", "validar-exercicio-advocacia"].includes(activeService.id) && activeService.otherInfo && (
                        <div className="space-y-6 pt-4 border-t border-gray-100">
                          {activeService.otherInfo.split(/(?=### )/).map((section, sIdx) => {
                            const trimmed = section.trim();
                            if (!trimmed) return null;
                            const lines = trimmed.split("\n");
                            const title = lines[0].replace(/^###\s*/, "");
                            const contentLines = lines.slice(1);

                            return (
                              <div key={sIdx} className="space-y-2">
                                <h4 className="font-bold text-gray-800 text-base">
                                  {title}
                                </h4>
                                <div className="space-y-1.5 text-xs sm:text-sm text-gray-700 font-sans">
                                  {contentLines.map((line, lIdx) => {
                                    const trimmedLine = line.trim();
                                    if (!trimmedLine) return null;
                                    if (trimmedLine.startsWith("* ") || trimmedLine.startsWith("- ")) {
                                      return (
                                        <div key={lIdx} className="flex items-start gap-2 pl-2">
                                          <span className="text-[#1351b4] font-bold mt-0.5">•</span>
                                          <span>{trimmedLine.replace(/^[*\-]\s*/, "").replace(/\*\*(.*?)\*\*/g, "$1")}</span>
                                        </div>
                                      );
                                    }
                                    return (
                                      <p key={lIdx} className="leading-relaxed">
                                        {trimmedLine.replace(/\*\*(.*?)\*\*/g, "$1")}
                                      </p>
                                    );
                                  })}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}

                    </div>
                  )}
                </article>

                {/* Accordion Item 5: Suporte e ajuda */}
                <article className="border border-gray-200 rounded-xl bg-white shadow-sm">
                  <h2>
                    <button
                      onClick={() => toggleAccordion("support")}
                      className={`w-full text-left py-5 px-6 font-extrabold text-black font-heading flex items-center gap-2.5 bg-white hover:bg-slate-50 hover:no-underline transition-all text-sm sm:text-base cursor-pointer select-none rounded-t-xl ${!accordionState.support ? 'rounded-b-xl' : ''}`}
                      aria-expanded={accordionState.support}
                      aria-controls="aba-suporte-ajuda"
                    >
                      {accordionState.support ? <ChevronUp className="w-5 h-5 shrink-0 text-[#1351b4]" /> : <ChevronDown className="w-5 h-5 shrink-0 text-[#1351b4]" />}
                      <span>Precisa de ajuda?</span>
                    </button>
                  </h2>

                  {accordionState.support && (
                    <div className="p-6 text-sm text-gray-700 border-t border-gray-100 bg-white text-left animate-fadeIn space-y-6 rounded-b-xl" id="aba-suporte-ajuda">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Card 1 */}
                        <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm space-y-2.5 text-xs sm:text-sm text-left">
                          <h5 className="font-bold text-gray-800">
                            {activeService.id.startsWith("emitir") 
                              ? "Dúvidas sobre emitir certidão (Suporte Jurídico)" 
                              : activeService.id.startsWith("validar")
                              ? "Dúvidas sobre validar certidão (Suporte Jurídico)"
                              : activeService.id.startsWith("pedir")
                              ? "Dúvidas sobre pedir certidão (Suporte Jurídico)"
                              : "Dúvidas sobre este serviço (Suporte)"}
                          </h5>
                          <div className="space-y-2 text-gray-650">
                            <div className="flex items-start gap-2">
                              <Mail className="w-4 h-4 text-[#1351b4] shrink-0 mt-0.5" aria-hidden="true" />
                              <p><strong>E-mail:</strong> <a href={`mailto:${activeService.helpContact?.email || 'ncp@tst.jus.br'}`} className="text-[#1351b4] hover:text-[#0f3c87] font-bold underline cursor-pointer hover:underline">{activeService.helpContact?.email || 'ncp@tst.jus.br'}</a></p>
                            </div>
                            <div className="flex items-start gap-2">
                              <Phone className="w-4 h-4 text-[#1351b4] shrink-0 mt-0.5" aria-hidden="true" />
                              <p><strong>Telefone:</strong> {activeService.helpContact?.legalSupport || '(61) 3043-4330, das 9h às 18h'}</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <Landmark className="w-4 h-4 text-[#1351b4] shrink-0 mt-0.5" aria-hidden="true" />
                              <p><strong>Área responsável:</strong> {activeService.helpContact?.unit || 'Núcleo de Cadastramento Processual (NCP)'}</p>
                            </div>
                          </div>
                        </div>

                        {/* Card 2 */}
                        <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm space-y-2.5 text-xs sm:text-sm text-left">
                          <h5 className="font-bold text-gray-800">Problemas no sistema (Suporte Técnico)</h5>
                          <div className="space-y-2 text-gray-650">
                            <div className="flex items-start gap-2">
                              <Mail className="w-4 h-4 text-[#1351b4] shrink-0 mt-0.5" aria-hidden="true" />
                              <p><strong>E-mail:</strong> <a href="mailto:suporte@tst.jus.br" className="text-[#1351b4] hover:text-[#0f3c87] font-bold underline cursor-pointer hover:underline">suporte@tst.jus.br</a></p>
                            </div>
                            <div className="flex items-start gap-2">
                              <Phone className="w-4 h-4 text-[#1351b4] shrink-0 mt-0.5" aria-hidden="true" />
                              <p><strong>Telefone:</strong> (61) 3043-4040, das 9h às 19h</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <Landmark className="w-4 h-4 text-[#1351b4] shrink-0 mt-0.5" aria-hidden="true" />
                              <p><strong>Área responsável:</strong> Secretaria de Tecnologia da Informação e Comunicação (SETIN)</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {activeService.systemContacts && activeService.systemContacts.length > 0 && (
                        <div className="pt-4 border-t border-gray-100 space-y-3">
                          <h5 className="font-bold text-gray-800 text-sm">Contatos específicos dos sistemas:</h5>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {activeService.systemContacts.map((sys, idx) => (
                              <div key={idx} className="border border-gray-200 rounded-lg p-3 bg-slate-50 text-xs space-y-1 text-left">
                                <p className="font-bold text-[#1351b4] text-sm">{sys.system}</p>
                                <p className="text-gray-700"><strong>Responsável:</strong> {sys.responsible}</p>
                                {sys.email && <p className="text-gray-650"><strong>E-mail:</strong> <a href={`mailto:${sys.email}`} className="text-[#1351b4] underline font-bold">{sys.email}</a></p>}
                                {sys.phone && <p className="text-gray-650"><strong>Telefone:</strong> {sys.phone}</p>}
                                {sys.url && <p className="text-gray-650"><a href={sys.url} target="_blank" rel="noopener noreferrer" className="text-[#1351b4] underline font-bold inline-flex items-center gap-1">Acessar página <ExternalLink className="w-3 h-3" /></a></p>}
                                {sys.notes && <p className="text-gray-500 italic mt-1">{sys.notes}</p>}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </article>

              </div>

              {/* Real Footer/Responsibility block matching screenshot exactly on details page */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="text-center space-y-6 text-xs sm:text-sm text-gray-600">
                  <div className="space-y-1">
                    <p className="text-[11px] sm:text-xs text-gray-500 font-medium">Conteúdo de responsabilidade da</p>
                    <p className="font-bold text-gray-800 text-sm font-heading">
                      Secretaria Geral Judiciária (SEGJUD)
                    </p>
                    <p className="font-semibold text-gray-700">
                      Email: <a href="mailto:segjud@tst.jus.br" className="text-[#1351b4] hover:text-[#0f3c87] font-bold underline cursor-pointer hover:underline">segjud@tst.jus.br</a>
                    </p>
                    <p className="font-semibold text-gray-700">
                      Telefone: (61) 3043-3201 / 3043-7334
                    </p>
                  </div>

                  <hr className="w-16 mx-auto border-gray-200" />

                  {/* Fale com a Ouvidoria */}
                  <div className="space-y-1.5">
                    <p className="font-bold text-gray-800 text-sm">
                      Fale com a Ouvidoria
                    </p>
                    <p className="text-xs text-gray-600 leading-relaxed max-w-2xl mx-auto whitespace-nowrap">
                      Para{" "}
                      <a
                        href="https://www.tst.jus.br/en/faca-sua-manifestacao"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1351b4] hover:text-[#0f3c87] font-bold underline cursor-pointer hover:underline"
                      >
                        registrar uma manifestação, reclamação, solicitação, sugestão ou denúncia
                      </a>
                      .
                    </p>
                  </div>

                  {/* Ajude a melhorar este serviço */}
                  <div className="space-y-1 pt-4 text-center">
                    <p className="font-bold text-gray-800 text-sm">Ajude a melhorar este serviço</p>
                    <p className="text-xs sm:text-sm text-gray-600 font-sans">
                      Deixe seu comentário no campo <em className="italic">opinião</em> nesta página.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {currentPage === "guia" && (
          <GuiaEdicaoServicos onBack={() => { setCurrentPage("inicial"); window.scrollTo(0, 0); }} />
        )}

        {currentPage === "emissao" && activeService && (
          <div className="animate-fadeIn py-8 bg-[#f8fafc]">
            <div className="mx-auto max-w-4xl px-4">
              
              {/* Breadcrumbs for Emission Page */}
              <nav aria-label="Caminho de navegação (Breadcrumb)" className="mb-6">
                <ol className="flex flex-wrap items-center gap-2 text-[11px] sm:text-xs font-medium text-gray-650 font-sans">
                  <li>
                    <button 
                      onClick={() => selectService(null)}
                      className="hover:text-[#1351b4] text-gray-600 hover:underline inline-flex items-center gap-1 focus:outline-none focus:underline cursor-pointer"
                    >
                      Início
                    </button>
                  </li>
                  <li className="text-gray-400" aria-hidden="true">&rsaquo;</li>
                  <li>
                    <button 
                      onClick={() => selectService(null)}
                      className="hover:text-[#1351b4] text-gray-600 hover:underline focus:outline-none focus:underline cursor-pointer"
                    >
                      Portal de Serviços
                    </button>
                  </li>
                  <li className="text-gray-400" aria-hidden="true">&rsaquo;</li>
                  <li>
                    <button 
                      onClick={() => selectService(null)}
                      className="hover:text-[#1351b4] text-gray-600 hover:underline focus:outline-none focus:underline cursor-pointer"
                    >
                      {activeService.category === "consultas-e-informacoes" ? "Consultas e informações" : "Certidões"}
                    </button>
                  </li>
                  <li className="text-gray-400" aria-hidden="true">&rsaquo;</li>
                  <li>
                    <button
                      onClick={() => {
                        setCurrentPage("detalhe");
                        window.scrollTo(0, 0);
                      }}
                      className="hover:text-[#1351b4] text-gray-600 hover:underline focus:outline-none focus:underline cursor-pointer"
                    >
                      {activeService.name}
                    </button>
                  </li>
                  <li className="text-gray-400" aria-hidden="true">&rsaquo;</li>
                  <li>
                    <span className="text-blue-950 font-semibold cursor-default" aria-current="page">
                      {activeService.id.startsWith("emitir") ? "Emissão" : activeService.id.startsWith("validar") ? "Validação" : activeService.id.startsWith("pedir") ? "Solicitação" : "Consulta"}
                    </span>
                  </li>
                </ol>
              </nav>

              {/* Back Button to detail page */}
              <button
                onClick={() => {
                  setCurrentPage("detalhe");
                  window.scrollTo(0, 0);
                }}
                className="mb-6 text-xs font-bold text-gray-600 hover:text-[#1351b4] inline-flex items-center gap-1.5 transition hover:underline focus:outline-none min-h-[44px] cursor-pointer"
                aria-label="Voltar para a página de detalhes do serviço"
              >
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                <span>Voltar para as informações do serviço</span>
              </button>

              <div className="mb-6 text-left">
                <h1 className="text-2xl font-black text-black font-heading">
                  {activeService.name}
                </h1>
              </div>

              <ServiceSimulator 
                serviceId={activeService.id} 
                serviceName={activeService.name} 
                onNavigateToDetails={() => {
                  setCurrentPage("detalhe");
                  window.scrollTo(0, 0);
                }}
                onOpenFeedback={() => {
                  setFeedbackRating(null);
                  setFeedbackComment("");
                  setFeedbackSubmitted(false);
                  setIsFeedbackOpen(true);
                }}
              />
              
              

            </div>
          </div>
        )}

      </main>

      {/* Floating Feedback / Opinião Button on the left side of the page (Hotjar style) */}
      {(currentPage === "detalhe" || currentPage === "emissao") && activeService && (
        <div className="fixed left-0 top-1/2 -translate-y-1/2 z-[40]">
          <button
            onClick={() => {
              setFeedbackRating(null);
              setFeedbackComment("");
              setFeedbackSubmitted(false);
              setIsFeedbackOpen(true);
            }}
            className="flex flex-col items-center gap-2 bg-[#d93a1e] hover:bg-[#c02a10] text-white py-4 px-2.5 rounded-r-xl shadow-lg border border-l-0 border-white/20 transition-all cursor-pointer select-none group min-w-[40px] focus:outline-none focus:ring-2 focus:ring-[#d93a1e] focus:ring-offset-2"
            aria-label="Deixar sua opinião sobre o serviço"
            id="botao-opiniao-flutuante"
          >
            <span className="font-extrabold text-[11px] sm:text-xs tracking-wider uppercase [writing-mode:vertical-lr] py-2 font-heading">
              Opinião
            </span>
            {/* Smiley Chat Icon resembling the user's uploaded layout */}
            <svg className="w-5.5 h-5.5 shrink-0 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM8.5 8C9.3 8 10 8.7 10 9.5C10 10.3 9.3 11 8.5 11C7.7 11 7 10.3 7 9.5C7 8.7 7.7 8 8.5 8ZM15.5 8C16.3 8 17 8.7 17 9.5C17 10.3 16.3 11 15.5 11C14.7 11 14 10.3 14 9.5C14 8.7 14.7 8 15.5 8ZM12 15C10.1 15 8.5 13.8 7.8 12H16.2C15.5 13.8 13.9 15 12 15Z"/>
            </svg>
          </button>
        </div>
      )}

      {/* 3. PERSISTENT FOOTER (Removed as per user request to keep only service cards) */}

      {/* 4. ACEsi TECHNICAL HANDOVER SIDEBAR DRAWER */}
      <AcessibilidadeDrawer 
        isOpen={acesiOpen} 
        onClose={() => setAcesiOpen(false)} 
        currentPage={currentPage}
        selectedServiceName={activeService?.name}
      />

      {/* 5. GUIA LIFERAY ORIENTAÇÕES MODAL */}
      <GuiaModal 
        isOpen={guiaOpen} 
        onClose={() => setGuiaOpen(false)} 
      />

      {/* 6. CARTA DE SERVIÇOS INSTITUCIONAL DETAILS DIALOG */}
      {cartaServicosOpen && (
        <div 
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/70 animate-fadeIn font-sans"
          role="dialog"
          aria-modal="true"
          aria-labelledby="titulo-carta-modal"
        >
          <div className="w-full max-w-xl bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col border-2 border-slate-700" id="conteiner-carta-modal">
            {/* Header */}
            <div className="p-5 bg-[#103d7c] text-white flex items-center justify-between">
              <h2 id="titulo-carta-modal" className="text-sm sm:text-md font-bold uppercase tracking-wider font-heading">
                Carta de Serviços ao Cidadão do TST
              </h2>
              <button
                onClick={() => setCartaServicosOpen(false)}
                className="p-2 bg-blue-900/60 text-white rounded-full hover:bg-slate-800/80 transition min-w-[34px] min-h-[34px]"
                aria-label="Fechar popup da Carta de Serviços"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="p-6 text-xs sm:text-sm text-gray-700 leading-relaxed max-h-[50vh] overflow-y-auto space-y-4 text-left">
              <p className="font-semibold text-blue-900 text-xs sm:text-sm">
                Compromissos legais com a Cidadania, Transparência e Acessibilidade:
              </p>
              <p>
                A Carta de Serviços serve como inventário completo e detalhado de todos os canais de atendimento e serviços que ainda estão sendo preparados para integração digital neste portal unificado.
              </p>

              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <p className="font-bold text-gray-800 text-xs mb-1.5 uppercase tracking-wide">Serviços Disponíveis em Outras Plataformas:</p>
                <ul className="space-y-2 text-xs">
                  <li className="flex items-center gap-1.5 text-gray-700">
                    <span className="text-amber-500 font-bold" aria-hidden="true">✔</span>
                    <span><strong>Pautas de Julgamento:</strong> Disponível no portal judicial diário.</span>
                  </li>
                  <li className="flex items-center gap-1.5 text-gray-700">
                    <span className="text-amber-500 font-bold" aria-hidden="true">✔</span>
                    <span><strong>Conselho Superior da Justiça (CSJT):</strong> Acesso pelo Portal do CSJT.</span>
                  </li>
                  <li className="flex items-center gap-1.5 text-gray-700">
                    <span className="text-amber-500 font-bold" aria-hidden="true">✔</span>
                    <span><strong>Biblioteca Digital do TST:</strong> Acervo jurisprudencial histórico.</span>
                  </li>
                </ul>
              </div>

              <div className="text-xs text-gray-800 font-bold space-y-2">
                <p><strong>Prazo Máximo do Serviço Geral:</strong> Até 15 dias para respostas avulsas.</p>
                <p><strong>Contato do Setor Responsável:</strong> Ouvidoria Geral do TST - telefone (61) 3043-4300.</p>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-gray-100 border-t border-gray-200 text-right">
              <button
                onClick={() => setCartaServicosOpen(false)}
                className="bg-gray-800 hover:bg-gray-700 text-white font-bold text-xs py-2.5 px-5 rounded-lg transition min-h-[38px]"
                aria-label="Entendi, fechar"
              >
                Fechar Painel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 7. REDIRECTION FEEDBACK MODAL (WCAG compliant & safe for iFrames) */}
      {actionFeedbackMessage && (
        <div 
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn font-sans"
          role="dialog"
          aria-modal="true"
          aria-labelledby="titulo-feedback-modal"
        >
          <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-slate-200">
            {/* Soft decorative header panel */}
            <div className="p-5 bg-emerald-700 text-white flex items-center gap-3">
              <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center font-bold text-sm" aria-hidden="true">
                ✓
              </div>
              <div>
                <h2 id="titulo-feedback-modal" className="text-sm sm:text-base font-bold tracking-tight">
                  Direcionamento Seguro
                </h2>
                <p className="text-[0.625rem] text-emerald-100">Portal de Serviços Unificados do TST</p>
              </div>
            </div>

            {/* Core alert instruction content */}
            <div className="p-6 text-xs sm:text-sm text-gray-700 leading-relaxed text-left space-y-4">
              <p className="font-medium text-gray-800">
                {actionFeedbackMessage}
              </p>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 flex items-start gap-2 text-xs text-gray-800 font-semibold">
                <span className="text-lg shrink-0 font-bold text-blue-900" aria-hidden="true">ℹ</span>
                <p>Nossos sistemas integrados garantem transporte criptografado e estrita conformidade com a Lei Geral de Proteção de Dados (LGPD) e diretrizes do ecossistema GOV.BR.</p>
              </div>
            </div>

            {/* Footer buttons */}
            <div className="p-4 bg-gray-50 border-t border-gray-150 flex items-center justify-end gap-2.5">
              <button
                onClick={() => setActionFeedbackMessage(null)}
                className="bg-[#103d7c] hover:bg-blue-800 text-white font-bold text-xs py-2.5 px-5 rounded-lg transition min-h-[38px] cursor-pointer"
                aria-label="Prosseguir para o sistema judiciário externo"
              >
                Prosseguir
              </button>
              <button
                onClick={() => setActionFeedbackMessage(null)}
                className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 font-bold text-xs py-2.5 px-4 rounded-lg transition min-h-[38px] cursor-pointer"
                aria-label="Cancelar operação"
              >
                Voltar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 8. OPINIÃO/FEEDBACK MODAL DIALOG */}
      {isFeedbackOpen && (
        <div 
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/75 animate-fadeIn font-sans"
          role="dialog"
          aria-modal="true"
          aria-labelledby="titulo-feedback-opiniao-modal"
        >
          <div className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col border border-gray-200">
            {/* Header */}
            <div className="p-5 bg-[#d93a1e] text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <svg className="w-5.5 h-5.5 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM8.5 8C9.3 8 10 8.7 10 9.5C10 10.3 9.3 11 8.5 11C7.7 11 7 10.3 7 9.5C7 8.7 7.7 8 8.5 8ZM15.5 8C16.3 8 17 8.7 17 9.5C17 10.3 16.3 11 15.5 11C14.7 11 14 10.3 14 9.5C14 8.7 14.7 8 15.5 8ZM12 15C10.1 15 8.5 13.8 7.8 12H16.2C15.5 13.8 13.9 15 12 15Z"/>
                </svg>
                <h3 id="titulo-feedback-opiniao-modal" className="font-extrabold text-sm sm:text-base uppercase tracking-wider font-heading">
                  Sua Opinião Importa
                </h3>
              </div>
              <button
                onClick={() => setIsFeedbackOpen(false)}
                className="p-1 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition cursor-pointer min-w-[32px] min-h-[32px] flex items-center justify-center text-sm"
                aria-label="Fechar formulário de opinião"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {!feedbackSubmitted ? (
                <form onSubmit={(e) => {
                  e.preventDefault();
                  setFeedbackLoading(true);
                  setTimeout(() => {
                    setFeedbackLoading(false);
                    setFeedbackSubmitted(true);
                  }, 650);
                }} className="space-y-5 text-left">
                  <p className="text-sm text-gray-700 leading-relaxed font-sans">
                    Como você avalia sua experiência com o serviço <strong>{activeService?.name}</strong> no Portal do TST?
                  </p>

                  {/* Rating selection (Smiley grid) */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-900 uppercase tracking-wide block">
                      Sua Avaliação:
                    </label>
                    <div className="grid grid-cols-5 gap-2">
                      {[
                        { val: 1, label: "Muito Ruim", color: "text-red-500 hover:bg-red-50" },
                        { val: 2, label: "Ruim", color: "text-orange-500 hover:bg-orange-50" },
                        { val: 3, label: "Regular", color: "text-amber-500 hover:bg-amber-50" },
                        { val: 4, label: "Bom", color: "text-emerald-500 hover:bg-emerald-50" },
                        { val: 5, label: "Excelente", color: "text-green-500 hover:bg-green-50" },
                      ].map((item) => (
                        <button
                          key={item.val}
                          type="button"
                          onClick={() => setFeedbackRating(item.val)}
                          className={`flex flex-col items-center justify-center p-2 rounded-lg border text-center transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1351b4] ${
                            feedbackRating === item.val
                              ? "border-[#d93a1e] bg-[#fdf2f2] font-semibold"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <span className={`text-2xl mb-1 ${item.color}`}>
                            {item.val === 1 && "😢"}
                            {item.val === 2 && "🙁"}
                            {item.val === 3 && "😐"}
                            {item.val === 4 && "🙂"}
                            {item.val === 5 && "😀"}
                          </span>
                          <span className="text-[10px] text-gray-700 font-medium leading-tight">
                            {item.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Comment */}
                  <div className="space-y-2">
                    <label htmlFor="feedback-comment" className="text-xs font-bold text-gray-900 uppercase tracking-wide block">
                      Comentário ou Sugestão (opcional):
                    </label>
                    <textarea
                      id="feedback-comment"
                      value={feedbackComment}
                      onChange={(e) => setFeedbackComment(e.target.value)}
                      placeholder="Deixe seu comentário ou sugestão para nos ajudar a melhorar o serviço..."
                      rows={4}
                      className="w-full text-sm p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1351b4] focus:border-transparent outline-none resize-none font-sans"
                    />
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setIsFeedbackOpen(false)}
                      className="flex-1 text-center py-2.5 border border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-50 transition text-sm cursor-pointer"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      disabled={feedbackLoading || feedbackRating === null}
                      className={`flex-1 text-center py-2.5 text-white font-bold rounded-lg transition text-sm flex items-center justify-center gap-1.5 cursor-pointer ${
                        feedbackRating === null 
                          ? "bg-gray-300 cursor-not-allowed text-gray-500" 
                          : "bg-[#168821] hover:bg-[#2da382] hover:underline"
                      }`}
                    >
                      {feedbackLoading ? "Enviando..." : "Enviar Opinião"}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="py-6 text-center space-y-4 animate-fadeIn">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full text-3xl">
                    ✓
                  </div>
                  <h4 className="text-base font-bold text-gray-950 font-heading">
                    Opinião Enviada com Sucesso!
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans max-w-xs mx-auto">
                    Agradecemos por sua avaliação e comentário. Sua contribuição é muito valiosa para continuarmos aprimorando os serviços do TST.
                  </p>
                  <button
                    onClick={() => setIsFeedbackOpen(false)}
                    className="mt-4 px-6 py-2.5 bg-[#168821] hover:bg-[#2da382] hover:underline text-white font-bold rounded-lg transition text-sm cursor-pointer"
                  >
                    Fechar
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Back to top button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-[#1351b4] hover:bg-[#0c326f] text-white shadow-xl cursor-pointer transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#1351b4] focus:ring-offset-2"
          aria-label="Voltar ao topo"
          id="botao-voltar-topo"
        >
          <ChevronUp className="w-6 h-6" strokeWidth={3} />
        </button>
      )}

    </div>
  );
}
