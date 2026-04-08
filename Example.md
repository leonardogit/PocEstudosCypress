# 🎯 Gargalos no Fluxo de Entregas

## Squad Multicotador | Comunidade de Seguros - Itaú

---

## 🧭 1. Visão Geral do Fluxo

Parâmetros → Catálogo (GN5) → Salesforce (Cálculo) → Multicotador → Proposta → Manufatura → Salesforce

👉 O Multicotador atua como orquestrador central, recebendo dependências críticas de múltiplas squads.

---

## 🚨 2. Principais Gargalos (com exemplos reais)

### 🔴 1. Time de Parâmetros (Configuração de Produtos)

**Principais problemas:**

- Parametrizações incorretas (códigos divergentes)
- Coberturas inconsistentes entre ambientes (homologação vs produção)
- Regras de elegibilidade incorretas

**Exemplos reais:**

- Seguro Auto Porto Seguro: coberturas com códigos errados → necessidade de validação manual item a item
- Prestamista EP: coberturas divergentes entre ambientes
- Residencial Marco Legal: ofertas não retornavam corretamente (Personnalité + Casa + Inquilino)

**Impacto:**

- Retrabalho manual elevado
- Dependência de correção por outro time
- Atraso em testes e homologação

---

### 🔴 2. Catálogo de Ofertas (GN5)

**Principais problemas:**

- Liberação tardia de ofertas
- Enriquecimento incompleto ou atrasado
- Dependências indisponíveis para testes E2E

**Exemplo real:**

- Prestamista INSS: contextualização e enriquecimento liberados tardiamente

**Impacto:**

- Bloqueio completo da validação
- Atraso direto na entrega

---

### 🔴 3. Salesforce (Cálculo - Time dedicado)

**Principais problemas:**

- Matrizes de cálculo incorretas
- Tipagem de atributos errada
- Divergência de nomenclatura entre oferta e procedure de cálculo ou matriz

**Exemplos reais:**

- Prestamista OP: 1 dia inteiro de debug devido a variável incorreta
- Divergência de atributos entre oferta e procedure
- Prestamista INSS 360 - Procedure de cálculo incorreta , ocasionando coberturas com valores incorretos .

**A** maior dor e tempo nesses processos vem de : 

- Dificuldade de rastrear variáveis
- Inconsistência entre parametrização  de (oferta x cálculo(Cp's e matrizes ) )
- Falta de padronização de atributos
- Necessidade de análise manual aprofundada

**Outros pontos críticos:**

- Planilhas de cálculo inconsistentes ( Geralmente oriundas do time de produto)
- Mudanças frequentes de taxa → retestes completos ( como no caso do OP ) 

**Impacto:**

- Baixa previsibilidade
- Alto tempo de investigação
- Aumento significativo do lead time

---

### 🔴 4. Dependências Externas

**Principais problemas:**

- API da Porto Seguro instável ou indisponível
- Dificuldade na obtenção de massa de teste válida (placas de veículos)

**Impacto:**

- Bloqueios em testes E2E
- Impossibilidade de validação completa

---

## 📊 3. Impacto Consolidado no Multicotador

- Alto número de bloqueios externos
- Squad frequentemente aguardando dependências
- Retrabalho contínuo
- Aumento significativo do lead time
- Multicotador atuando como ponto final de validação de problemas upstream
- Multicotador sendo o owner de testes de todas as squads por conta de ser o funil final do fluxo de cotação .

---

## 🔍 4. Padrão Identificado

- Problemas originados antes do Multicotador
- Múltiplas fontes independentes de inconsistência
- Falta de padronização entre squads
- Dependências não sincronizadas

👉 Isso gera um efeito cascata até o Multicotador.

---

## 🧠 5. Conclusão Estratégica

O Multicotador atua como orquestrador central, porém absorve impactos originados em etapas anteriores do fluxo.

A existência de múltiplos pontos independentes de inconsistência (parâmetros, catálogo e salesforce ) aumenta significativamente o esforço de debug, retrabalho e tempo de entrega.

---

## 🚀 6. Oportunidades de Melhoria

- Validações automatizadas para parametrizações
- Padronização de contratos (nomes e tipos de atributos) na salesforce
- Definição de SLA entre squads
- Refinamentos conjuntos entre times
- Planejamento integrado de releases
- Validação previa de time da salesforce/catálogo antes da entrega para o multicotador

---

## 📌 7. Mensagem Final

Os desafios identificados não são isolados, mas sim resultado da complexidade e interdependência entre squads.

A evolução do fluxo integrado é essencial para ganho de eficiência, previsibilidade e qualidade nas entregas.

