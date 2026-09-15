/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceStep {
  name: string;                 // Must start with a verb (e.g. "Solicitar", "Acompanhar")
  description: string;          // What the user must do
  channel: string;              // Access channel (e.g., "Sistemas do TST", "Formulário eletrônico")
  documents: string[];          // Necessary documents or credentials
  duration?: string;            // Expected completion duration
  costs?: string;               // Costs involved (usually "Gratuito" for certidões)
  requirementsBefore?: string; // Anything needed before commencing
  monitoring?: string;          // How to monitor progress
}

export interface HelpContact {
  unit: string;
  techSupport: string;
  legalSupport?: string;
  email: string;
  address: string;
  hours: string;
}

export interface SystemResponsibility {
  system: string;
  responsible: string;
  email?: string;
  phone?: string;
  url?: string;
  notes?: string;
}

export type ServiceTypeTag = "Emissão" | "Validação" | "Solicitação" | "Consulta";
export type FunctionalCategory = "certidoes-e-validacoes" | "consultas" | "guias-e-informacoes";

export interface ServiceDetail {
  id: string;
  name: string;
  category?: "servicos" | "consultas-e-informacoes";
  functionalCategory?: FunctionalCategory;
  serviceTypeTag?: ServiceTypeTag;
  knownAs?: string;
  descriptionSnippet: string;
  iconName: string;             // Name of Lucide react icon to dynamically render
  whatIs: string;
  whoCanUse: string;
  steps: ServiceStep[];
  otherInfo: string;
  lastUpdated?: string;
  helpContact?: HelpContact;
  systemContacts?: SystemResponsibility[];
}
