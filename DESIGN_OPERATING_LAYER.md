# Design Operating Layer

This repository uses two complementary upstream design systems as a standing decision layer for frontend work:

1. **UI/UX Pro Max** — design intelligence, pattern selection, design-system reasoning, accessibility/UX guidance, and stack-specific implementation advice.
2. **Impeccable** — design judgment, critique, refinement, anti-pattern detection, accessibility/performance review, responsive behavior, typography, spatial design, motion, interaction design, and shipping polish.

This file is the local integration contract. It does not replace either upstream project; it defines how they are combined for this site.

## Upstream Sources

### UI/UX Pro Max
- Canonical repository: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
- Upstream commit reviewed for this integration: `e353a508767c6d39f0e7698b084dbfc8699fffd3`
- License: MIT
- Primary skill source reviewed: `src/ui-ux-pro-max/templates/base/skill-content.md`
- Repository metadata reviewed: `skill.json`

### Impeccable
- Canonical repository: https://github.com/pbakaus/impeccable
- Upstream commit reviewed for this integration: `fcd7622cd2d8e2b09344ba8ede9fcac82cec4e70`
- License: Apache-2.0
- Primary skill source reviewed: `skill/SKILL.src.md`
- Setup/reference source reviewed: `skill/reference/init.md`

Upstream recommendations are design guidance, not authority over the user's brief, repository rules, factual content, or security constraints.

## Precedence

For design decisions, apply authority in this order:

1. The user's explicit request and confirmed constraints.
2. Existing factual content, product truth, and functionality.
3. Existing brand/visual evidence in the repository when the request is a refinement rather than a redesign.
4. Project-level design decisions documented in this repository.
5. UI/UX Pro Max recommendations.
6. Impeccable craft guidance and anti-pattern checks.

If an upstream recommendation conflicts with a confirmed project decision, the project decision wins.

## Working Model

### 1. Inspect before designing
Before changing UI, inspect the requested surface and at least one representative source of visual truth: current CSS/tokens, a component, layout, or relevant asset.

Do not infer that a missing design document means the site has no visual identity. The implementation itself is evidence.

### 2. Determine scope
Distinguish **refinement** from **redesign**.

- **Refinement** preserves identity, behavior, factual copy, and everything outside the requested scope.
- **Redesign** may replace the visual world, but preserves product truth, content, required functions, and accessibility. Treat the old visual system as evidence and possible anti-reference rather than something that must be blended into the replacement.

Never quietly turn a refinement request into a redesign.

### 3. Use UI/UX Pro Max for design intelligence
Use the smallest reasoning mode that matches the task:

- New page or site-wide visual direction → design-system reasoning.
- Specific component, UX issue, color, typography, accessibility, navigation, or layout problem → focused domain guidance.
- Implementation details → stack-specific guidance after the UX/design outcome is clear.

For this repository, the implementation stack is **Next.js 15 + React 19**. Do not default to unrelated stacks.

Search/reason around one dominant design intent at a time. Prefer semantic UX outcomes before framework-specific implementation details.

Treat UI/UX Pro Max output as recommendations to verify against this site's audience, content, platform, and existing visual language.

### 4. Use Impeccable for judgment and finish
After the design direction is coherent, use the Impeccable command model that best matches the task:

- `shape` — plan a new UX/UI surface before code.
- `critique` — evaluate hierarchy, clarity, cognitive load, and emotional/visual effectiveness.
- `audit` — technical quality: accessibility, responsive behavior, performance, edge conditions.
- `polish` — final design-system alignment and shipping pass.
- `typeset` — typography hierarchy and font treatment.
- `layout` — spacing, rhythm, alignment, and hierarchy.
- `clarify` — labels, UX writing, error or explanatory copy.
- `adapt` — responsive/device adaptation.
- `bolder` / `quieter` / `distill` — intentional changes to visual intensity or complexity.
- `delight` / `animate` — personality and motion only when they support the surface.

For general UI work, the default sequence is:

**inspect → UI/UX Pro Max design reasoning → implement direction → Impeccable critique/audit → one consolidated fix pass → final confirmation**

Do not polish in an open-ended loop.

## Surface Modes

Impeccable's visitor-success modes are chosen per surface, not globally:

- **Persuade** — speaking, services, calls to action, or pages whose purpose is to move a visitor toward contact/booking/action.
- **Read** — essays, research, long-form explanation, and content intended primarily for comprehension.
- **Experience** — portfolio/showcase surfaces where the work itself should lead and the interface should recede.
- **Operate** — only for interactive tools or task-oriented interfaces if the site gains them.

A page may belong to a different mode than the rest of the site.

## Existing Visual Evidence

The current implementation already contains a deliberate visual vocabulary that must be treated as incumbent identity unless a redesign is explicitly requested. Examples include:

- deep navy/night backgrounds;
- cream/paper foreground tones;
- peach/copper accents;
- serif + sans typography pairing;
- subtle texture/grain;
- restrained editorial spacing;
- explicit focus-visible treatment and a skip link;
- responsive navigation behavior.

These are evidence, not permanent law. They should be preserved for refinements and reconsidered deliberately for redesigns.

## Non-Negotiable Quality Checks

Before shipping UI changes, check the concerns actually present in the surface, including:

- keyboard access and visible focus;
- semantic structure and useful labels;
- text/background contrast;
- mobile and narrow-screen behavior;
- touch target sizing where relevant;
- navigation clarity;
- content hierarchy and line length;
- loading/error/empty states where relevant;
- reduced-motion behavior when motion is introduced;
- avoidable layout shift and performance regressions;
- factual copy and claims preserved unless the user explicitly changes them.

Accessibility is an observable outcome, not a generic checkbox. Diagnose the actual interaction or criterion involved.

## Anti-Generic Rule

Do not normalize this site into a generic AI/SaaS template. In particular, do not introduce familiar AI-design defaults merely because they are fashionable: unnecessary purple-blue gradients, endless nested cards, gratuitous icon tiles, default-Inter-everywhere styling, decorative glassmorphism, or excessive pill-shaped UI.

Novelty is not the goal either. The goal is a deliberate visual point of view appropriate to the person, work, audience, and specific surface.

## Updating the Layer

The upstream projects evolve quickly. Before a major redesign or design-system rewrite, compare the pinned upstream commits above with current upstream main and review material changes before adopting them.

Do not silently change this project's design behavior merely because an upstream repository updated.
