/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { 
  Search, 
  Accessibility, 
  ChevronDown, 
  Youtube, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Rss, 
  Twitter, 
  Info, 
  Globe, 
  User, 
  Sparkles,
  Home,
  Menu,
  X
} from "lucide-react";
import TstLogo from "./TstLogo";

interface HeaderProps {
  highContrast: boolean;
  toggleHighContrast: () => void;
  fontScale: number; // 1 to 2
  increaseFont: () => void;
  decreaseFont: () => void;
  resetFont: () => void;
  onNavigateHome: () => void;
  onSelectService: (id: string | null) => void;
  onOpenAcesi: () => void;
  onOpenGuia: () => void;
  hideSearch?: boolean;
}

export default function Header({
  highContrast,
  toggleHighContrast,
  fontScale,
  increaseFont,
  decreaseFont,
  resetFont,
  onNavigateHome,
  onSelectService,
  onOpenAcesi,
  onOpenGuia,
  hideSearch = false
}: HeaderProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");

  const menuItems = [
    {
      name: "Institucional",
      links: [
        { label: "Sobre o Tribunal", action: () => alert("Link institucional: Sobre o Tribunal") },
        { label: "Composição e Ministros", action: () => alert("Link institucional: Composição") },
        { label: "Organograma", action: () => alert("Link institucional: Organograma") },
        { label: "Regimento Interno", action: () => alert("Link de Legislação") },
        { label: "Histórico do TST", action: () => alert("Link institucional: Histórico") }
      ]
    },
    {
      name: "Serviços",
      links: [
        { label: "Portal de Serviços (Início)", action: () => onNavigateHome() },
        { label: "Certidão Negativa (CNDT)", action: () => onSelectService("cndt") },
        { label: "Certidão de Indisponibilidade", action: () => onSelectService("indisponibilidade") },
        { label: "Certidão de Exercício da Advocacia", action: () => onSelectService("exercicio-advocacia") },
        { label: "Certidão de Andamento", action: () => onSelectService("andamento-processual") },
        { label: "Certidão de Distribuição", action: () => onSelectService("distribuicao-feitos") },
        { label: "Certidão de Objeto e Pé", action: () => onSelectService("objeto-pe") },
        { label: "Demais Certidões", action: () => onSelectService("demais-certidoes") }
      ]
    },
    {
      name: "Notícias",
      links: [
        { label: "Rádio TST", action: () => alert("Rádio TST") },
        { label: "Sessões Plenárias", action: () => alert("Sessões Plenárias") },
        { label: "Boletim de Imprensa", action: () => alert("Boletim de Imprensa") }
      ]
    },
    {
      name: "Jurisprudência",
      links: [
        { label: "Precedentes Qualificados", action: () => alert("Precedentes") },
        { label: "Pesquisa Unificada", action: () => alert("Pesquisa unificada") },
        { label: "Súmulas e Orientações", action: () => alert("Súmulas") }
      ]
    },
    {
      name: "Transparência",
      links: [
        { label: "Contas Públicas", action: () => alert("Contas Públicas") },
        { label: "Lei de Acesso à Informação", action: () => alert("LAI") },
        { label: "Banners Estatísticos", action: () => alert("Estatísticas") }
      ]
    },
    {
      name: "Legislação",
      links: [
        { label: "Constituição Federal", action: () => alert("CF/88") },
        { label: "CLT Consolidada", action: () => alert("CLT") },
        { label: "Instruções Normativas", action: () => alert("INs") }
      ]
    },
    {
      name: "Ouvidoria",
      links: [
        { label: "Fale com a Ouvidoria do TST", action: () => window.open("https://www.tst.jus.br/en/faca-sua-manifestacao", "_blank") },
        { label: "Perguntas Frequentes", action: () => alert("FAQ") }
      ]
    },
    {
      name: "Contato",
      links: [
        { label: "Lista de Telefones", action: () => alert("Telefones do TST") },
        { label: "Endereço e Localização", action: () => alert("Localização do TST") }
      ]
    }
  ];

  const handleMenuClick = (menuName: string) => {
    if (activeMenu === menuName) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menuName);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchVal.trim()) {
      alert(`Pesquisa TST.jus.br por: "${searchVal}" (Simulado - Portal de Serviços foca em Certidões abaixo)`);
    }
  };

  return (
    <header className="w-full border-b border-gray-200 bg-white" role="banner" id="topo-cabecalho">
      {/* WCAG SKIP LINKS (Visible only on TAB focus for users navigating with keyboard) */}
      <a href="#conteudo-principal" id="skip-link-conteudo" className="skip-link">
        Ir para o conteúdo principal (Teclado: Enter)
      </a>
      <a href="#menu-principal-tst" id="skip-link-menu" className="skip-link">
        Ir para o menu de navegação (Teclado: Enter)
      </a>
      <a href="#rodape-tst" id="skip-link-rodape" className="skip-link">
        Ir para o rodapé da página (Teclado: Enter)
      </a>

      {/* 1. TOP UTILITY BAR (FAITHFUL TO TST ORIGINAL: INCL. ACCESSIBILITY OVERRIDES) */}
      <div className="bg-[#134475] text-white text-xs py-2 px-4 shadow-inner" id="barra-acessibilidade-topo">
        <div className="mx-auto max-w-7xl flex flex-wrap justify-between items-center gap-2">
          {/* Skip anchors triggers */}
          <div className="flex items-center gap-3" id="links-ancora-acessibilidade">
            <a href="#conteudo-principal" className="hover:underline hover:text-amber-200 transition focus-visible:outline-white font-medium">
              Ir para o conteúdo <span className="text-gray-300 font-mono text-[10px] bg-sky-950 px-1 py-0.5 rounded ml-0.5" aria-hidden="true">1</span>
            </a>
            <span className="text-gray-400" aria-hidden="true">|</span>
            <a href="#menu-principal-tst" className="hover:underline hover:text-amber-200 transition focus-visible:outline-white font-medium">
              Ir para o menu <span className="text-gray-300 font-mono text-[10px] bg-sky-950 px-1 py-0.5 rounded ml-0.5" aria-hidden="true">2</span>
            </a>
            <span className="text-gray-400" aria-hidden="true">|</span>
            <a href="#rodape-tst" className="hover:underline hover:text-amber-200 transition focus-visible:outline-white font-medium">
              Ir para o rodapé <span className="text-gray-300 font-mono text-[10px] bg-sky-950 px-1 py-0.5 rounded ml-0.5" aria-hidden="true">3</span>
            </a>
          </div>

          {/* Languages, contrast, fonts, intranet */}
          <div className="flex flex-wrap items-center gap-4" id="controles-acessibilidade-topo">
            {/* Langs */}
            <div className="flex items-center gap-2 mr-2" id="idiomas-tst">
              <span className="text-gray-300 font-semibold" aria-hidden="true"><Globe className="inline w-3 h-3 mr-1" /> Idioma:</span>
              <button onClick={() => alert("Language swapped to English")} className="hover:text-amber-200 bg-transparent py-0 px-1 text-gray-300 rounded focus-visible:outline-amber-200" aria-label="Alterar idioma para Inglês">English</button>
              <button onClick={() => alert("Idioma cambiado a Español")} className="hover:text-amber-200 bg-transparent py-0 px-1 text-gray-300 rounded focus-visible:outline-amber-200" aria-label="Alterar idioma para Espanhol">Español</button>
              <button className="text-white font-extrabold underline decoration-amber-400 decoration-2" aria-current="true" aria-label="Idioma atual: Português">Português</button>
            </div>

            {/* Contrast / Font Controllers */}
            <div className="flex items-center bg-[#0c2b4a] rounded-md px-2.5 py-1 gap-2 border border-blue-900/60" id="botoes-redimensionamento">
              
              {/* High Contrast */}
              <button 
                onClick={toggleHighContrast}
                id="botao-alto-contraste"
                className={`py-0.5 px-2 rounded font-semibold text-[10px] flex items-center gap-1 transition ${highContrast ? 'bg-amber-400 text-black hover:bg-amber-300' : 'bg-[#134475] text-white hover:bg-black hover:text-white border border-gray-600'}`}
                aria-label={`Alternar Alto Contraste. Estado atual: ${highContrast ? "Ativado" : "Desativado"}`}
              >
                <Accessibility className="w-3.5 h-3.5" aria-hidden="true" />
                {highContrast ? "Contraste Ativo" : "Alto Contraste"}
              </button>

              {/* Text decrease */}
              <button 
                onClick={decreaseFont}
                id="botao-fonte-menor"
                className="bg-[#134475] hover:bg-blue-800 text-white font-bold py-0.5 px-2.5 rounded text-[11px] hover:text-amber-200 transition"
                title="Diminuir tamanho da fonte da página"
                aria-label="Diminuir tamanho do texto"
              >
                A-
              </button>
              {/* Reset to standard */}
              <button 
                onClick={resetFont}
                id="botao-fonte-normal"
                className="bg-[#134475] hover:bg-blue-800 text-white font-bold py-0.5 px-2.5 rounded text-[11px] hover:text-amber-200 transition"
                title="Resetar tamanho da fonte para o padrão"
                aria-label="Resetar tamanho de fonte"
              >
                A ({Math.round(fontScale * 100)}%)
              </button>
              {/* Text increase */}
              <button 
                onClick={increaseFont}
                id="botao-fonte-maior"
                className="bg-[#134475] hover:bg-blue-800 text-white font-bold py-0.5 px-2.5 rounded text-[11px] hover:text-amber-200 transition"
                title="Aumentar tamanho da fonte da página (até 200%)"
                aria-label="Aumentar tamanho do texto"
              >
                A+
              </button>
            </div>

            {/* Intranet link */}
            <div className="flex items-center gap-2" id="links-auxiliares-desenvolvimento">
              <a 
                href="https://intranet.tst.jus.br" 
                target="_blank" 
                rel="noopener noreferrer" 
                id="link-intranet"
                className="hover:underline text-sky-200 hover:text-white transition flex items-center gap-1 text-[11px]"
                aria-label="Acessar Intranet do TST (abre em nova aba)"
              >
                <User className="w-3 h-3" aria-hidden="true" />
                <span>Intranet</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. LOGO & BRAND SUB-BAR (FIDEDIGNO AO ORIGINAL DA IMAGEM) */}
      <div className="mx-auto max-w-7xl py-5 px-6 flex flex-col lg:flex-row justify-between items-center gap-6 bg-white" id="subcabecalho-logo-redes">
        
        {/* Left: Brand Identity (Justiça do Trabalho / TST) */}
        <a 
          href="https://www.tst.jus.br/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-4 cursor-pointer scale-95 origin-left hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1351b4] rounded" 
          id="identidade-corporativa-tst"
          title="Acessar o portal do Tribunal Superior do Trabalho (tst.jus.br)"
        >
          <TstLogo hideSymbol={true} />
        </a>

        {/* Center: PRÊMIO CNJ DE QUALIDADE 2025 PRATA medal with realistic silver metallic vector rendering */}
        <div className="flex items-center justify-center select-none" id="selo-cnj-qualidade-container">
          <div className="relative w-28 h-28 flex flex-col items-center justify-center" title="Prêmio CNJ de Qualidade 2025 - Categoria Prata">
            <svg viewBox="0 0 120 120" className="w-[100px] h-[100px]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                {/* Silver metallic gradients */}
                <linearGradient id="silver-metal" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#e2e8f0" />
                  <stop offset="30%" stopColor="#ffffff" />
                  <stop offset="50%" stopColor="#cbd5e1" />
                  <stop offset="70%" stopColor="#94a3b8" />
                  <stop offset="100%" stopColor="#cbd5e1" />
                </linearGradient>
                <linearGradient id="silver-dark" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#94a3b8" />
                  <stop offset="50%" stopColor="#64748b" />
                  <stop offset="100%" stopColor="#475569" />
                </linearGradient>
                <linearGradient id="ribbon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#cbd5e1" />
                  <stop offset="30%" stopColor="#f1f5f9" />
                  <stop offset="70%" stopColor="#94a3b8" />
                  <stop offset="100%" stopColor="#64748b" />
                </linearGradient>
                <filter id="medal-shadow" x="-10%" y="-10%" width="120%" height="130%">
                  <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.2" />
                </filter>
              </defs>

              {/* Hanging Ribbons/Laços underneath the circle */}
              <g id="ribbons-at-bottom" filter="url(#medal-shadow)">
                {/* Left ribbon tail */}
                <path 
                  d="M48 60 L38 105 L48 97 L58 105 L52 60 Z" 
                  fill="url(#ribbon-gradient)" 
                  stroke="#94a3b8" 
                  strokeWidth="0.75" 
                />
                {/* Right ribbon tail */}
                <path 
                  d="M72 60 L82 105 L72 97 L62 105 L68 60 Z" 
                  fill="url(#ribbon-gradient)" 
                  stroke="#94a3b8" 
                  strokeWidth="0.75" 
                />
              </g>

              {/* Rosette outer border star stamps decoration (circular layout) */}
              <circle cx="60" cy="50" r="43" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="0.5" />
              
              {/* Outer metallic ring */}
              <circle cx="60" cy="50" r="41" fill="url(#silver-metal)" stroke="#94a3b8" strokeWidth="1" filter="url(#medal-shadow)" />
              {/* Inner dark contrast circle */}
              <circle cx="60" cy="50" r="35" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
              {/* Concentric inner ring */}
              <circle cx="60" cy="50" r="33" fill="none" stroke="#94a3b8" strokeWidth="0.5" strokeDasharray="2, 2" />

              {/* Medal Texts styled identically to image */}
              <g id="medal-texts" fontFamily="Arial, sans-serif" textAnchor="middle">
                {/* Year 2025 banner */}
                <text x="60" y="32" fontSize="5.5" fontWeight="900" fill="#475569" letterSpacing="0.2">
                  2025
                </text>
                
                {/* PRÊMIO text */}
                <text x="60" y="41" fontSize="5" fontWeight="900" fill="#334155" letterSpacing="0.5">
                  PRÊMIO
                </text>
                
                {/* CNJ DE QUALITY block logo style */}
                <text x="60" y="49" fontSize="6.5" fontWeight="900" fill="#0f172a" letterSpacing="-0.02em">
                  CNJ DE
                </text>
                
                {/* QUALIDADE thick pill background block */}
                <rect x="29" y="52" width="62" height="7.5" rx="1" fill="#0f172a" />
                <text x="60" y="58" fontSize="5.5" fontWeight="900" fill="#ffffff" letterSpacing="0.2">
                  QUALIDADE
                </text>

                {/* Subtitle Category style - Prata */}
                <text x="60" y="68" fontSize="5.5" fontWeight="bold" fill="#475569" fontStyle="normal">
                  Prata
                </text>
              </g>
            </svg>
          </div>
        </div>

        {/* Right: Round solid green social/accessibility circles + Unified Search Below */}
        <div className="flex flex-col items-center lg:items-end gap-3.5 w-full lg:w-auto" id="secao-acoes-busca">
          {/* Green Circle Icons (RSS, YT, Flickr, Mail, FB, IG, LI, Contrast, Help) */}
          <div className="flex flex-wrap items-center gap-1.5" id="icones-redes-sociais">
            
            {/* 1. RSS Feed */}
            <a 
              href="https://www.tst.jus.br/noticias/-/asset_publisher/89D8/rss" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-7 h-7 rounded-full bg-[#007a5e] text-white flex items-center justify-center hover:opacity-90 shadow-sm transition-transform hover:-translate-y-0.5" 
              title="Feed RSS de notícias"
              aria-label="Feed RSS"
            >
              <Rss className="w-3.5 h-3.5" aria-hidden="true" />
            </a>

            {/* 2. YouTube */}
            <a 
              href="https://www.youtube.com/user/TST" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-7 h-7 rounded-full bg-[#007a5e] text-white flex items-center justify-center hover:opacity-90 shadow-sm transition-transform hover:-translate-y-0.5" 
              title="Canal oficial no YouTube"
              aria-label="YouTube"
            >
              <Youtube className="w-3.5 h-3.5" aria-hidden="true" />
            </a>

            {/* 3. Flickr (Double dots representation in a green circle) */}
            <a 
              href="https://www.flickr.com/photos/tst_oficial" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-7 h-7 rounded-full bg-[#007a5e] flex items-center justify-center gap-[2.5px] hover:opacity-90 shadow-sm transition-transform hover:-translate-y-0.5" 
              title="Galeria de fotos no Flickr"
              aria-label="Flickr"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff0084]"></span>
            </a>

            {/* 4. Mail/Inbox envelope */}
            <a 
              href="mailto:ouvidoria@tst.jus.br" 
              className="w-7 h-7 rounded-full bg-[#007a5e] text-white flex items-center justify-center hover:opacity-90 shadow-sm transition-transform hover:-translate-y-0.5" 
              title="Entre em contato via Email"
              aria-label="Fale Conosco"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>

            {/* 5. Facebook */}
            <a 
              href="https://www.facebook.com/TSTJus" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-7 h-7 rounded-full bg-[#007a5e] text-white flex items-center justify-center hover:opacity-90 shadow-sm transition-transform hover:-translate-y-0.5" 
              title="Facebook Oficial"
              aria-label="Facebook"
            >
              <Facebook className="w-3.5 h-3.5 fill-current text-white" aria-hidden="true" />
            </a>

            {/* 6. Instagram */}
            <a 
              href="https://www.instagram.com/tstjus" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-7 h-7 rounded-full bg-[#007a5e] text-white flex items-center justify-center hover:opacity-90 shadow-sm transition-transform hover:-translate-y-0.5" 
              title="Instagram Oficial"
              aria-label="Instagram"
            >
              <Instagram className="w-3.5 h-3.5 text-white" aria-hidden="true" />
            </a>

            {/* 7. LinkedIn */}
            <a 
              href="https://www.linkedin.com/company/tstjus" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-7 h-7 rounded-full bg-[#007a5e] text-white flex items-center justify-center hover:opacity-90 shadow-sm transition-transform hover:-translate-y-0.5" 
              title="LinkedIn Institucional"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5 fill-current text-white" aria-hidden="true" />
            </a>

            {/* 8. Accessibility High Contrast Shortcut */}
            <button 
              onClick={toggleHighContrast}
              className="w-7 h-7 rounded-full bg-[#007a5e] text-white flex items-center justify-center hover:opacity-90 shadow-sm transition-transform hover:-translate-y-0.5 focus:outline-none cursor-pointer" 
              title="Alternar modo de alto contraste para acessibilidade"
              aria-label="Alto Contraste"
            >
              {/* Halved filled circle icon */}
              <svg className="w-3.5 h-3.5 fill-current text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8v16z"/>
              </svg>
            </button>

            {/* 9. Help Center / FAQ */}
            <button 
              onClick={onOpenGuia}
              className="w-7 h-7 rounded-full bg-[#007a5e] text-white flex items-center justify-center hover:opacity-90 shadow-sm transition-transform hover:-translate-y-0.5 focus:outline-none cursor-pointer" 
              title="Dúvidas e Guia de Utilização do Portal"
              aria-label="Ajuda do Portal"
            >
              <svg className="w-4 h-4 fill-none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>

          </div>

          {/* Unified search box styled perfectly like original image */}
          {!hideSearch && (
            <form onSubmit={handleSearchSubmit} className="relative flex items-center w-full max-w-sm md:w-72" id="formulario-busca-portal-institucional">
              <label htmlFor="busca-institucional" className="sr-only">Pesquisar em todo o site do TST</label>
              <input 
                type="text" 
                id="busca-institucional"
                name="busca"
                placeholder="Search..." 
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                className="w-full text-sm pl-4 pr-12 py-2 border-y border-l border-gray-300 rounded-l-md bg-white focus:outline-none focus:ring-1 focus:ring-[#f5af0b] text-gray-800 font-sans"
              />
              <button 
                type="submit" 
                className="px-4.5 bg-[#f5af0b] text-black font-semibold rounded-r-md hover:bg-[#e09e07] transition-colors focus:outline-none flex items-center justify-center min-w-[44px] min-h-[38px] border-y border-r border-gray-300 border-l-0 cursor-pointer"
                aria-label="Pesquisar"
              >
                <Search className="w-4 h-4 text-slate-800 stroke-[2.5px]" aria-hidden="true" />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* 3. ORIGINAL TST MAIN NAVIGATION MENU (FAITHFUL AND EXPANDABLE) */}
      <nav 
        id="menu-principal-tst" 
        className="bg-slate-100 border-t border-b border-gray-200" 
        role="navigation" 
        aria-label="Menu Principal do TST"
      >
        <div className="mx-auto max-w-7xl px-4 flex justify-between items-center relative">
          
          {/* Mobile hamburger button */}
          <button 
            className="md:hidden py-3 px-2 flex items-center gap-2 text-gray-700 font-bold focus:outline-none min-w-[44px] min-h-[44px]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="lista-links-menu"
            aria-label="Menu principal responsivo"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
            <span>MENU INSTITUCIONAL</span>
          </button>

          {/* Menu structure list */}
          <ul 
            id="lista-links-menu"
            className={`${mobileMenuOpen ? 'flex' : 'hidden md:flex'} flex-col md:flex-row w-full flex-wrap md:justify-start md:items-center text-sm font-semibold text-gray-700 divide-y md:divide-y-0 divide-gray-200/60 md:gap-x-1`}
          >
            {menuItems.map((item) => (
              <li 
                key={item.name} 
                className="relative w-full md:w-auto text-left"
                onMouseEnter={() => setActiveMenu(item.name)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  type="button"
                  className={`w-full md:w-auto py-3 md:py-3.5 px-4 flex items-center justify-between md:justify-center gap-1.5 bg-transparent hover:bg-white hover:text-[#1351b4] transition-colors focus:bg-white focus:text-[#1351b4] focus-visible:outline-sky-800 ${activeMenu === item.name ? 'bg-white text-[#1351b4] border-b-2 border-[#1351b4]' : ''}`}
                  onClick={() => handleMenuClick(item.name)}
                  aria-expanded={activeMenu === item.name}
                  aria-haspopup="true"
                >
                  <span className="font-heading tracking-wide font-semibold whitespace-nowrap">{item.name}</span>
                  <ChevronDown className={`w-3.5 h-3.5 opacity-70 transition-transform ${activeMenu === item.name ? 'rotate-180 text-[#1351b4]' : ''}`} aria-hidden="true" />
                </button>
 
                {/* Dropdowns lists */}
                {activeMenu === item.name && (
                  <div 
                    className={`absolute ${['Legislação', 'Ouvidoria', 'Contato'].includes(item.name) ? 'right-0' : 'left-0'} mt-0 w-64 md:w-72 bg-white border border-gray-200 shadow-xl rounded-b-md z-50 text-left py-2 divide-y divide-slate-100 animate-fadeIn`}
                    role="menu"
                  >
                    <div className="px-4 py-2 bg-slate-100 text-[10px] uppercase tracking-wider text-slate-800 font-extrabold">
                      Navegar em {item.name}
                    </div>
                    {item.links.map((link) => (
                      <button
                        key={link.label}
                        onClick={() => {
                          link.action();
                          setActiveMenu(null);
                          setMobileMenuOpen(false);
                        }}
                        className="w-full font-medium text-left px-4 py-3 text-xs text-gray-700 hover:bg-[#ebf3ff] hover:text-[#1351b4] transition-all flex items-center justify-between group min-h-[44px]"
                        role="menuitem"
                      >
                        <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                        <span className="text-[10px] text-gray-300 group-hover:text-blue-500 font-mono">→</span>
                      </button>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
