# A11y Exceptions Log — Landing do A11Y.md

Registro de desvios conhecidos e temporariamente aceitos em relação ao padrão (WCAG 2.2 / EN 301 549), sob o perfil declarado.

> **Perfil:** 🛡️ Shield (AAA) · **Padrão:** `A11Y.md` v1.1.0 · **Última revisão:** 2026-07-20

---

## 🛑 Exceções abertas

**Nenhuma.**

Nenhum critério de sucesso da WCAG no nível-alvo foi pulado nesta entrega. Este arquivo existe declarado e vazio de propósito: ausência de exceção é uma afirmação verificável, e um arquivo faltando não distingue "não há desvio" de "ninguém olhou".

---

## Itens avaliados que **não** viraram exceção

Registrados aqui porque a pergunta "por que isso não está no log?" é legítima em auditoria.

| Item | Por que não é exceção | Onde está registrado |
|---|---|---|
| Links de citação de fonte com 18–20px de altura | Enquadram-se na **exceção *inline*** da própria SC 2.5.5/2.5.8: alvo dentro de um bloco de texto. Exceção prevista pela norma não é desvio da norma | `A11Y-DECISIONS.md` |
| Bordas de card e divisores em 1,48:1 | Superfície decorativa, não componente de interface nem gráfico essencial (SC 1.4.11 não se aplica). O agrupamento é dado por título, lista e espaçamento. É relaxamento de **House Rule†**, e o padrão manda registrar isso em decisões, não em exceções | `A11Y-DECISIONS.md` |
| `text-xs` (12px) fora da escala | Não é desvio: é o piso de 14px† do Shield sendo **cumprido** por remoção do degrau | `tailwind.config.ts` |

---

## Pendências que **não** são exceção

Não são desvios aceitos — são etapas do Definition of Done ainda não executadas. Enquanto existirem, o `REPORT.md` permanece **CONDICIONAL**.

- **Validação humana com leitor de tela** (NVDA/VoiceOver). O protocolo proíbe a IA de alegar ter feito este teste ou de fabricar seu resultado
- **Conferência com simulador de deficiência de visão de cores.** A automação mede razão de contraste, não perda funcional por cor

---

*Cópia em branco para novas exceções:*

### 1. Detalhes básicos
- **ID da exceção:**
- **Componente / Página:**
- **Diretriz WCAG afetada:**
- **Severidade:**

### 2. Descrição do bloqueio técnico
- **O que está quebrado?**
- **Por que aconteceu?**

### 3. Contorno (fallback / mitigação)
- **Como a pessoa ainda completa a tarefa?**

### 4. Plano de resolução e prazo
- **Data prevista de correção:**
- **Critério de resolução:**
