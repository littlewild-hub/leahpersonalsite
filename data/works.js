export const constellations = [
  {
    id: 'relational-ethics',
    name: 'Relational ethics',
    short: 'How perception, power, proximity, and mutual exposure generate obligations of care.',
    number: '01',
  },
  {
    id: 'caregiver-trauma',
    name: 'Caregiver trauma & family systems',
    short: 'Naming the burdens carried by caregivers and redesigning the systems around them.',
    number: '02',
  },
  {
    id: 'civic-infrastructure',
    name: 'Civic infrastructure',
    short: 'Structures that help people participate, deliberate, organize, and exercise public power.',
    number: '03',
  },
  {
    id: 'policy-program-design',
    name: 'Policy & program design',
    short: 'Mechanisms that turn public values into incentives, safeguards, services, and accountable systems.',
    number: '04',
  },
  {
    id: 'public-writing',
    name: 'Essays & public writing',
    short: 'Accessible arguments, cultural analysis, field notes, and ideas still becoming frameworks.',
    number: '05',
  },
];

export const works = [
  {
    slug: 'continuity-of-the-subjective-experience',
    title: 'Continuity of the Subjective Experience',
    subtitle: 'An empirical argument for care ethics',
    constellation: 'relational-ethics',
    kind: 'Academic paper',
    status: 'Foundational argument',
    year: '2025',
    summary:
      'This paper begins from relational exposure: the unavoidable condition in which people enter one another’s experience as both subjects and perceived objects. It argues that moral obligation does not have to depend entirely on altruism. When one subject destabilizes another, the consequences move through the relationship and can threaten the continuity of both. Care therefore becomes a rational response to shared destabilization risk, not simply a generous response to need.',
    proposition:
      'Because subjects are mutually exposed to one another, preserving the continuity of the Other is structurally tied to preserving the continuity of the Self.',
    problem:
      'Care ethics is often criticized for relying on assumed altruism, encouraging unbounded obligation, or positioning one person as the capable caregiver and another as the dependent recipient. The paper asks whether care can instead be grounded in a condition that binds self-interested and altruistic agents alike.',
    contributions: [
      'Reframes care obligation as a consequence of relational exposure and mutual destabilization risk.',
      'Treats perception and objectification as unavoidable features of relation rather than exceptional moral failures.',
      'Creates the conceptual foundation later developed into Continuity Ethics, Relational Ontometry, and the Reciprocal Perception and Care Model.',
    ],
    development: [
      'Origin point for the larger relational-ethics sequence.',
      'Expanded into a longer Continuity Ethics manuscript.',
      'Operationalized through Relational Ontometry and the RPCM.',
    ],
    related: ['continuity-ethics', 'relational-ontometry', 'reciprocal-perception-care-model'],
    tags: ['care ethics', 'subjectivity', 'objectification', 'moral obligation'],
  },
  {
    slug: 'continuity-ethics',
    title: 'Continuity Ethics',
    subtitle: 'A subject–subject framework for moral obligation',
    constellation: 'relational-ethics',
    kind: 'Theory manuscript',
    status: 'Working manuscript',
    year: '2025–present',
    summary:
      'Continuity Ethics proposes a third foundation for moral obligation. Justice ethics begins from equality and reciprocal rights; traditional care ethics begins from vulnerability and need. Continuity Ethics begins from mutual subjectivity. Every person remains a subject with agency and an object within other people’s perceptual fields. That condition creates reciprocal, though unequal, risks. Obligations scale according to power, proximity, and the capacity to recognize the Other as a subject.',
    proposition:
      'Moral obligation arises from the structural requirements of maintaining subjective continuity under conditions of mutual relational exposure.',
    problem:
      'Many moral frameworks struggle with relationships that are neither equal nor cleanly divided into caregiver and dependent. Parent and child, institution and citizen, employer and worker, and intimate partners all remain subjects while holding unequal power and different capacities to affect one another.',
    contributions: [
      'Preserves agency on both sides of an asymmetric relationship.',
      'Explains why power increases obligation without making vulnerability a permanent identity.',
      'Distinguishes maintaining a person’s continuity from affirming harmful beliefs or behavior.',
      'Frames care as ecological stability within a relational network rather than charitable protection from above.',
    ],
    development: [
      'Extends the argument first stated in Continuity of the Subjective Experience.',
      'Supplies the ethical foundation for Promirational Ethics.',
      'Uses the RPCM to describe how obligation varies across relational conditions.',
    ],
    related: ['continuity-of-the-subjective-experience', 'promirational-ethics', 'relational-ontometry'],
    tags: ['ethics', 'mutual subjectivity', 'power', 'continuity'],
  },
  {
    slug: 'relational-ontometry',
    title: 'Relational Ontometry',
    subtitle: 'A structural model of subjectivity, power, and ethical obligation',
    constellation: 'relational-ethics',
    kind: 'Emerging framework',
    status: 'In development',
    year: '2025–present',
    summary:
      'Relational Ontometry develops a geometric and quasi-mathematical language for dynamics that relational philosophy and care ethics often describe only qualitatively. It maps a relationship through three axes: relational distance, power, and capacity to know the Other as a subject. Together, those axes make asymmetry, vulnerability, perceptual access, and collapse risk visible as features of a relational field.',
    proposition:
      'Relational conditions can be modeled structurally without reducing persons or ethics to numbers.',
    problem:
      'Terms such as vulnerability, recognition, closeness, power, projection, and boundary collapse are central to relational analysis but are rarely placed in a shared model that shows how they interact.',
    contributions: [
      'Defines relational distance as physical, social, and emotional proximity between subjects.',
      'Treats power as contextual capacity to shape another subject’s conditions.',
      'Defines capacity to know as the ability to recognize the Other’s interiority, ambiguity, and vulnerability.',
      'Introduces collapse thresholds, negative relational space, and institution-as-subject applications.',
    ],
    development: [
      'The theoretical architecture surrounding the RPCM.',
      'Current work includes mathematical refinement, institutional applications, and testable scenarios.',
    ],
    related: ['reciprocal-perception-care-model', 'continuity-ethics', 'promirational-ethics'],
    tags: ['social ontology', 'relational geometry', 'power', 'recognition'],
  },
  {
    slug: 'reciprocal-perception-care-model',
    title: 'The Reciprocal Perception and Care Model',
    subtitle: 'An applied model of relational asymmetry',
    constellation: 'relational-ethics',
    kind: 'Analytical model',
    status: 'Foundational framework',
    year: '2025–present',
    summary:
      'The Reciprocal Perception and Care Model, or RPCM, is the applied component of Relational Ontometry. It plots relational distance, power, and capacity to know across a three-axis topology. The model uses those variables to describe perceptual asymmetry, vulnerability differentials, obligation to care, and the approach toward relational collapse or boundary violation.',
    proposition:
      'Obligation to care can be understood as a directional response to vulnerability produced by asymmetry in a relational field.',
    problem:
      'Ethical language often identifies that a relationship is unequal without showing what kind of inequality exists, who is exposed to whom, or where responsibility should move.',
    contributions: [
      'Defines a -10 to +10 relational-distance axis, including a collapse boundary and post-collapse intrusion space.',
      'Uses power and capacity-to-know scales to distinguish authority from recognition.',
      'Introduces an ontological relationship ratio and a vulnerability differential.',
      'Models obligation to care as inverse to the direction of vulnerability.',
    ],
    development: [
      'Applied within Ethics of the Damned and relational-care examples.',
      'Designed for future empirical testing and institutional adaptation.',
    ],
    related: ['relational-ontometry', 'ethics-of-the-damned', 'continuity-ethics'],
    tags: ['RPCM', 'vulnerability', 'relational asymmetry', 'care obligation'],
  },
  {
    slug: 'promirational-ethics',
    title: 'Promirational Ethics',
    subtitle: 'Preserving subjectivity across time and relation',
    constellation: 'relational-ethics',
    kind: 'Ethical framework',
    status: 'Working theory',
    year: '2026',
    summary:
      'Promirational Ethics asks what it means to continue seeing another person as a subject rather than allowing familiarity, utility, projection, or convenience to flatten them into a fixed object. Its name combines forward movement, regard, and preservation. The practice is not to preserve someone as they once were, but to maintain attention to who they are and are becoming.',
    proposition:
      'Ethical relation requires active, future-oriented preservation of the Other’s subjectivity against the entropy of familiarity and use.',
    problem:
      'Relationships tend toward perceptual reduction. Habits form, projections harden, institutions simplify people into categories, and the Other becomes easier to manage precisely because less of their subjectivity is being perceived.',
    contributions: [
      'Names sustained regard as active ethical labor rather than passive awareness.',
      'Connects recognition, wonder, and continuity across time.',
      'Provides a practice-oriented extension of Continuity Ethics.',
    ],
    development: [
      'Developed from Continuity Ethics and the recognition dynamics in Relational Ontometry.',
      'Intended for intimate, professional, political, and institutional application.',
    ],
    related: ['continuity-ethics', 'relational-ontometry', 'ethics-of-the-damned'],
    tags: ['recognition', 'subjectivity', 'ethical practice', 'attention'],
  },
  {
    slug: 'ethics-of-the-damned',
    title: 'Ethics of the Damned',
    subtitle: 'The radical application of care ethics in BDSM',
    constellation: 'relational-ethics',
    kind: 'Academic essay',
    status: 'Completed paper',
    year: '2025',
    summary:
      'This essay uses BDSM and D/s relationships as a case in which power, vulnerability, desire, objectification, consent, and ambiguity are made unusually explicit. Rather than treating objectification as automatically synonymous with dehumanization, it examines how negotiated objecthood can coexist with agency and recognition. The paper argues that practices developed in stigmatized communities—direct negotiation, continuous communication, boundaries, aftercare, and accountability—have broader ethical value.',
    proposition:
      'Relationships become safer not by pretending power and objectification are absent, but by naming, negotiating, and caring for the risks they create.',
    problem:
      'Mainstream ethical frameworks often assume autonomy as the default condition and treat objectification as an exceptional failure. That leaves little language for relations in which people deliberately enter ambiguity, asymmetry, or consensual objecthood.',
    contributions: [
      'Applies the RPCM to an explicit field of negotiated power.',
      'Distinguishes objectification from total denial of subjectivity.',
      'Treats ambiguity as a condition that can produce both profound harm and meaningful intimacy.',
      'Identifies communication and care practices that may transfer beyond kink contexts.',
    ],
    development: [
      'Case application within the wider Continuity Ethics project.',
      'Builds from the subject–object ambiguity described in the RPCM.',
    ],
    related: ['reciprocal-perception-care-model', 'continuity-ethics', 'promirational-ethics'],
    tags: ['BDSM', 'consent', 'objectification', 'care ethics'],
  },
  {
    slug: 'calling-it-what-it-is',
    title: 'Calling It What It Is',
    subtitle: 'Acknowledging the trauma of multi-systemic youth caregiving',
    constellation: 'caregiver-trauma',
    kind: 'Research commentary',
    status: 'Completed manuscript',
    year: '2025',
    summary:
      'Drawing on lived experience, practitioner knowledge, and a review of more than forty scholarly articles, this commentary argues that chronic strain in high-conflict, multi-system caregiving environments must be understood as trauma—not merely stress, burnout, or deficient parenting. It examines child-to-parent violence, institutional invalidation, fragmented services, legal risk, and the systemic silence that leaves caregivers unsupported.',
    proposition:
      'Naming caregiver trauma is an intervention because language determines what systems assess, validate, treat, and fund.',
    problem:
      'Caregivers are often expected to stabilize a child and coordinate multiple systems while their own exposure to violence, hypervigilance, shame, and institutional blame remains unrecognized. “Burnout” suggests rest; trauma requires safety, healing, support, and relational repair.',
    contributions: [
      'Frames caregiver strain as trauma when exposure is chronic, relational, and system-amplified.',
      'Examines child-to-parent violence as a power inversion that institutions routinely misunderstand.',
      'Identifies stigma and mandatory-system responses as barriers to help-seeking.',
      'Calls for trauma-informed infrastructure, not merely trauma-informed language.',
      'Introduces TRACEs as a framework for the cumulative burden carried by caregivers.',
    ],
    development: [
      'Presented as a poster at the UConn Training Institutes.',
      'Developed into the TRACEs framework, talks, and training materials.',
    ],
    related: ['traces', 'epic', 'statewide-needs-assessment'],
    tags: ['caregiver trauma', 'family systems', 'child-to-parent violence', 'TRACEs'],
  },
  {
    slug: 'traces',
    title: 'TRACEs',
    subtitle: 'Trauma and Relational Adversity in Caregiving Environments',
    constellation: 'caregiver-trauma',
    kind: 'Framework & assessment',
    status: 'Active development',
    year: '2025–present',
    summary:
      'TRACEs develops the central intervention proposed in Calling It What It Is: a way to identify the cumulative relational, systemic, and trauma burden carried by caregivers of multi-system-involved youth. The framework is designed to move beyond generic measures of stress and capture the environments in which caregiver capacity is repeatedly depleted.',
    proposition:
      'Caregiver burden must be assessed as an accumulation of relational adversity and system exposure, not as a private failure of resilience.',
    problem:
      'Existing systems often assess youth behavior while treating the caregiver as an implementation resource. They rarely measure violence exposure, institutional invalidation, persistent emotional labor, isolation, lack of respite, or the consequences of fragmented services.',
    contributions: [
      'Creates a six-domain assessment approach for relational strain, trauma load, and caregiver burnout.',
      'Connects care ethics, cognitive-load theory, vulnerability analysis, and family-peer practice.',
      'Provides a common language for caregivers, clinicians, peer supporters, and system leaders.',
      'Supports training adaptations for practitioner and family-peer audiences.',
    ],
    development: [
      'Originated in Calling It What It Is.',
      'Presented through Courage to Caregivers, FREDLA, Family Peers for Hope, and related audiences.',
      'Continues to develop toward assessment, training, and applied-system use.',
    ],
    related: ['calling-it-what-it-is', 'epic', 'relational-ontometry'],
    tags: ['caregiving', 'assessment', 'trauma', 'family peer support'],
  },
  {
    slug: 'epic',
    title: 'EPIC',
    subtitle: 'Equitable Partners in Care',
    constellation: 'caregiver-trauma',
    kind: 'Program concept',
    status: 'In development',
    year: '2026–present',
    summary:
      'EPIC is an emerging program concept centered on the position of caregivers and families as equitable partners within care systems. It builds from the same problem exposed by TRACEs: institutions frequently depend on caregivers while withholding information, authority, support, and meaningful participation from them.',
    proposition:
      'Care systems produce better decisions when families are treated as knowledgeable partners rather than peripheral recipients or unpaid extensions of the workforce.',
    problem:
      'Family engagement is often invited after decisions have already been made, limited to testimony, or structured around professional convenience. The result is participation without power and responsibility without support.',
    contributions: [
      'Links caregiver recognition to practical participation and shared decision-making.',
      'Provides a programmatic bridge between TRACEs, family-peer practice, and system redesign.',
      'Centers equity in both relational treatment and institutional authority.',
    ],
    development: [
      'Currently a developing program body rather than a finalized publication.',
      'Future materials will document program mechanics, assessment, and implementation.',
    ],
    related: ['traces', 'calling-it-what-it-is', 'survivor-voices-council'],
    tags: ['family partnership', 'care systems', 'equity', 'program design'],
  },
  {
    slug: 'statewide-needs-assessment',
    title: 'Statewide Needs Assessment',
    subtitle: 'Domestic violence and substance-use service intersections',
    constellation: 'civic-infrastructure',
    kind: 'Applied research',
    status: 'Completed project',
    year: '2025',
    summary:
      'This statewide needs assessment examined service gaps at the intersection of domestic violence and substance-use services in Ohio. The work brought together system information, practitioner knowledge, and stakeholder experience, then translated the findings into training, learning-community, and program priorities.',
    proposition:
      'Needs assessment is useful only when evidence is translated into decisions, infrastructure, and changes in practice.',
    problem:
      'Domestic-violence and substance-use systems frequently serve the same people while operating through different eligibility rules, professional languages, risk assumptions, and referral pathways.',
    contributions: [
      'Coordinated statewide information gathering across a complex service intersection.',
      'Synthesized findings into usable program and training priorities.',
      'Connected assessment results to learning-community and technical-assistance work.',
      'Demonstrates a recurring practice: translating diffuse experience into operational direction.',
    ],
    development: [
      'Completed through statewide public-service work.',
      'Related training and implementation materials continue beyond the assessment itself.',
    ],
    related: ['nightlife-venues-as-partners', 'survivor-voices-council', 'calling-it-what-it-is'],
    tags: ['needs assessment', 'domestic violence', 'substance use', 'research synthesis'],
  },
  {
    slug: 'survivor-voices-council',
    title: 'Survivor Voices Council',
    subtitle: 'Statewide survivor-led advisory infrastructure',
    constellation: 'civic-infrastructure',
    kind: 'Participatory program',
    status: 'Launched',
    year: '2025–present',
    summary:
      'The Survivor Voices Council was designed and launched as a statewide survivor-led advisory body informing organizational policy, training, and program strategy. Its structure treats lived experience as governance knowledge rather than occasional testimony.',
    proposition:
      'People most affected by a system should hold durable, compensated, and structured influence over the decisions made within it.',
    problem:
      'Organizations often seek survivor input through one-time listening sessions or uncompensated emotional labor. Those approaches extract stories without creating continuity, authority, or accountability.',
    contributions: [
      'Built a recurring statewide advisory structure rather than a single consultation event.',
      'Connected survivor participation to policy, training, and program decisions.',
      'Included geographic representation, at-large participation, and compensation.',
      'Created operational systems necessary to sustain ethical engagement.',
    ],
    development: [
      'Developed and launched through statewide domestic-violence work.',
      'Part of a broader practice in survivor-centered and participatory infrastructure.',
    ],
    related: ['statewide-needs-assessment', 'epic', 'nightlife-venues-as-partners'],
    tags: ['survivor leadership', 'participation', 'advisory council', 'governance'],
  },
  {
    slug: 'nightlife-venues-as-partners',
    title: 'Nightlife Venues as Partners',
    subtitle: 'A citizen-engagement plan for difficult institutional deliberation',
    constellation: 'civic-infrastructure',
    kind: 'Engagement plan',
    status: 'Completed plan',
    year: '2026',
    summary:
      'This engagement plan addresses a difficult institutional question: how a domestic-violence and human-trafficking coalition can work with bars, breweries, wineries, clubs, and other alcohol-serving venues without minimizing the relationship between alcohol, violence, exploitation, and public harm. The plan treats the issue as a deliberative design problem rather than a simple communications dispute.',
    proposition:
      'When a public-service strategy creates legitimate moral tension, the task is to design a process capable of holding the conflict—not to flatten it into approval or rejection.',
    problem:
      'Nightlife venues are both potential partners in prevention and fundraising and spaces historically implicated in risk, trafficking, alcohol-related harm, and survivor concern. Different stakeholders carry valid but competing interpretations of institutional responsibility.',
    contributions: [
      'Maps relevant stakeholders, concerns, public context, and facilitation capacity.',
      'Frames the priority question as how engagement should occur rather than whether disagreement exists.',
      'Defines evaluation measures around opinion change, understanding, commitment, and perceived discussion quality.',
      'Connects academic public-participation theory to a live organizational decision.',
    ],
    development: [
      'Written as a complete citizen-engagement plan.',
      'Related to the operational development of Raise the Bar.',
    ],
    related: ['statewide-needs-assessment', 'survivor-voices-council', 'incubrighter'],
    tags: ['public deliberation', 'domestic violence', 'nightlife', 'facilitation'],
  },
  {
    slug: 'incubrighter',
    title: 'IncuBrighter',
    subtitle: 'Civic research and development for grassroots solutions',
    constellation: 'civic-infrastructure',
    kind: 'Civic organization',
    status: 'Active / evolving',
    year: '2025–present',
    summary:
      'IncuBrighter is an evolving civic R&D organization created to give grassroots ideas, practical public tools, and community-designed solutions somewhere to develop. It functions as both an organizational experiment and a container for work that does not fit neatly inside traditional nonprofit programs, academic institutions, or political campaigns.',
    proposition:
      'Communities need infrastructure for developing and testing civic ideas before those ideas are forced into conventional organizational forms.',
    problem:
      'Grassroots problem-solvers are often expected to arrive with finished programs, formal organizations, funder-ready language, and evidence before they have access to the support required to produce any of those things.',
    contributions: [
      'Creates an incubator frame for civic tools, programs, research, and community experiments.',
      'Connects lived expertise, public-service design, and accessible infrastructure.',
      'Provides an organizational home for TRACEs and related independent work.',
      'Continues to evolve toward an advocacy and civic-capacity hub.',
    ],
    development: [
      'Founded as an Ohio nonprofit in 2025.',
      'The organization remains intentionally adaptive as its strongest public role becomes clearer.',
    ],
    related: ['calling-it-what-it-is', 'traces', 'nightlife-venues-as-partners'],
    tags: ['civic R&D', 'grassroots', 'nonprofit', 'incubation'],
  },
  {
    slug: 'ohio-skilled-workforce-advancement-program',
    title: 'Ohio Skilled Workforce Advancement Program',
    subtitle: 'OSWAP',
    constellation: 'policy-program-design',
    kind: 'Policy proposal',
    status: 'Concept proposal',
    year: '2024',
    summary:
      'OSWAP proposes a statewide workforce strategy built around vocational credentials, registered apprenticeships, employer incentives, and regional partnerships. It targets labor shortages in construction and trades, healthcare, renewable energy, and advanced manufacturing while creating stronger alternatives to four-year college pathways.',
    proposition:
      'Ohio can expand its skilled-labor pipeline by rewarding employers for hiring, training, mentoring, retaining, and upskilling vocational workers—especially in rural and underserved areas.',
    problem:
      'High-demand sectors face persistent labor shortages while many workers encounter financial and institutional barriers to entering stable skilled careers. Employers also bear costs when creating apprenticeships and training environments.',
    contributions: [
      'Combines hiring credits, apprenticeship incentives, wage subsidies, mentorship credits, retention bonuses, and upskilling support.',
      'Adds stronger incentives for rural and underserved regions.',
      'Uses apprenticeship hubs to connect employers, community colleges, workforce centers, and training providers.',
      'Treats retention and career growth as part of workforce development rather than stopping at initial placement.',
    ],
    development: ['Developed as a complete Ohio policy-program concept.'],
    related: ['cassi-loan-forgiveness', 'carbonsmart', 'ohio-housing-accountability-revitalization'],
    tags: ['workforce', 'apprenticeships', 'rural development', 'Ohio'],
  },
  {
    slug: 'ohio-housing-accountability-revitalization',
    title: 'Ohio Housing Accountability and Revitalization Program',
    subtitle: 'OHARP',
    constellation: 'policy-program-design',
    kind: 'Policy proposal',
    status: 'Concept proposal',
    year: '2024',
    summary:
      'OHARP is a statewide proposal addressing vacant, abandoned, and poorly managed rental property through landlord accountability, vacancy taxation, affordable-housing incentives, community revitalization, and centralized enforcement infrastructure.',
    proposition:
      'Housing policy should make neglect and speculative vacancy costly while making rehabilitation, affordability, and community ownership easier.',
    problem:
      'Absentee ownership, weak enforcement, prolonged vacancy, and fragmented property records allow housing deterioration to impose costs on tenants and communities while owners remain insulated from local consequences.',
    contributions: [
      'Requires out-of-area landlords to appoint accountable local agents and register properties annually.',
      'Creates an escalating vacancy tax with exemptions for active sale or permitted rehabilitation.',
      'Directs revenue toward rental assistance, affordable housing, homelessness prevention, and blight rehabilitation.',
      'Supports community land trusts, adaptive reuse, small-business projects, and historic preservation.',
      'Proposes a statewide rental registry and stronger enforcement coordination.',
    ],
    development: ['Developed as a structured statewide housing proposal.'],
    related: ['ohio-skilled-workforce-advancement-program', 'cassi-loan-forgiveness', 'public-funds-public-trust'],
    tags: ['housing', 'vacancy', 'landlord accountability', 'community revitalization'],
  },
  {
    slug: 'public-funds-public-trust',
    title: 'Public Funds, Public Trust',
    subtitle: 'A data-protection standard for publicly funded organizations',
    constellation: 'policy-program-design',
    kind: 'Legislative concept',
    status: 'Policy brief',
    year: '2024',
    summary:
      'Public Funds, Public Trust proposes a federal condition on grants, contracts, and subsidies: organizations receiving public money would be prohibited from sharing personally identifiable information with third parties for nonessential commercial purposes. Necessary transfers for law enforcement, public-health reporting, and approved academic research would remain possible under defined safeguards.',
    proposition:
      'Public funding should carry a public-trust obligation: taxpayer-supported institutions should not convert people’s personal information into a commercial asset without explicit justification and protection.',
    problem:
      'Universities, hospitals, social-service agencies, contractors, and other publicly supported entities collect large quantities of personal data. Fragmented sector-specific rules leave gaps in consent, enforcement, and accountability.',
    contributions: [
      'Ties privacy obligations directly to the receipt of public funds.',
      'Places enforcement with distributing agencies in coordination with the Department of Justice.',
      'Uses suspension of funding, penalties, remediation, and compliance reporting as enforcement mechanisms.',
      'Identifies implementation challenges involving agency coordination, legal conflicts, technical capacity, and federalism.',
    ],
    development: ['Written as a concise legislative-policy concept.'],
    related: ['ohio-housing-accountability-revitalization', 'carbonsmart', 'cassi-loan-forgiveness'],
    tags: ['data privacy', 'public funding', 'accountability', 'federal policy'],
  },
  {
    slug: 'cassi-loan-forgiveness',
    title: 'CASSI Loan Forgiveness Program',
    subtitle: 'Community Assistance and Social Services Impact',
    constellation: 'policy-program-design',
    kind: 'Program proposal',
    status: 'Concept proposal',
    year: '2024',
    summary:
      'CASSI proposes up to ten years of student-loan forgiveness for professionals who commit to full-time work in social services, mental health, substance-use counseling, nonprofit management, and prevention roles in Ohio’s underserved counties.',
    proposition:
      'Workforce shortages in essential human-service fields require a retention strategy strong enough to compete with debt, low wages, and geographic inequity.',
    problem:
      'Underserved communities face acute shortages of professionals whose work sustains mental health, addiction response, family support, prevention, and nonprofit capacity. Educational debt makes entering and remaining in these roles less viable.',
    contributions: [
      'Provides annual forgiveness tied to verified full-time service.',
      'Covers multiple high-need professions and credentials rather than a single discipline.',
      'Connects workforce retention to the long-term stability of local service systems.',
      'Treats nonprofit leadership and prevention work as infrastructure, not administrative overhead.',
    ],
    development: ['Developed as a comprehensive Ohio program proposal.'],
    related: ['ohio-skilled-workforce-advancement-program', 'carbonsmart', 'ohio-housing-accountability-revitalization'],
    tags: ['loan forgiveness', 'social services', 'mental health workforce', 'rural Ohio'],
  },
  {
    slug: 'carbonsmart',
    title: 'CarbonSmart',
    subtitle: 'Financing an Ohio renewable-energy transition',
    constellation: 'policy-program-design',
    kind: 'Policy & grant program',
    status: 'Concept proposal',
    year: '2024',
    summary:
      'CarbonSmart proposes a carbon-emissions tax on large emitters and divides the resulting revenue between two grant programs: support for Ohio students pursuing renewable-energy and sustainability fields, and support for small businesses developing clean-energy or sustainability operations.',
    proposition:
      'A transition policy can place costs on large-scale emissions while building the workforce and small-business capacity required for a durable clean-energy economy.',
    problem:
      'Climate policy often treats emissions reduction, workforce preparation, and local economic development as separate projects. That fragmentation weakens both political durability and implementation capacity.',
    contributions: [
      'Targets high-volume emitters while exempting small and mid-sized operations from the initial tax threshold.',
      'Reinvests revenue equally in education and small-business development.',
      'Prioritizes underserved and high-emission regions.',
      'Connects student support to post-graduation work in Ohio’s clean-energy economy.',
    ],
    development: ['Developed as a complete tax-and-grant program concept.'],
    related: ['ohio-skilled-workforce-advancement-program', 'cassi-loan-forgiveness', 'public-funds-public-trust'],
    tags: ['climate policy', 'carbon tax', 'renewable energy', 'small business'],
  },
  {
    slug: 'bean-soup-theory',
    title: 'What If I Don’t Like Beans?',
    subtitle: 'Bean Soup Theory, whataboutism, and anti-intellectualism on TikTok',
    constellation: 'public-writing',
    kind: 'Rhetorical analysis',
    status: 'Completed paper',
    year: '2025',
    summary:
      'This paper examines “Bean Soup Theory,” named for the social-media response to a recipe intended for an iron-deficient audience: “What if I don’t like beans?” It uses cultural rhetoric to trace a progression from individualized algorithmic response, to whataboutism as conversational derailment, to anti-intellectualism as a broader refusal to value knowledge that is not personally applicable.',
    proposition:
      '“If it does not apply to me, it should; and if it should not, then it does not matter” is not merely an annoying comment pattern—it is a cultural logic that undermines collective knowledge-building.',
    problem:
      'Algorithmic platforms routinely place people before content not intended for them. Instead of moving past it, users are rewarded for recentering themselves, generating engagement through lateral comparison and critique.',
    contributions: [
      'Names a platform-specific version of whataboutism.',
      'Connects algorithmic engagement incentives to individualism and echo-chamber formation.',
      'Shows how small acts of conversational recentering scale into hostility toward expertise and shared knowledge.',
      'Applies cultural-rhetorical analysis to ordinary digital behavior.',
    ],
    development: ['Completed as an academic rhetorical-methods paper.'],
    related: ['compression-before-enlightenment', 'trouble-with-new'],
    tags: ['TikTok', 'rhetoric', 'anti-intellectualism', 'algorithms'],
  },
  {
    slug: 'trouble-with-new',
    title: "The Trouble with ‘New’",
    subtitle: 'What philanthropic funders miss in funding community programming',
    constellation: 'public-writing',
    kind: 'Public essay',
    status: 'Published on Substack',
    year: '2026',
    summary:
      'This essay challenges the funding sector’s preference for novelty when durable community programs often need continuity, maintenance, adaptation, and stable operating support more than another innovation cycle. It asks what is lost when “new” becomes a proxy for valuable and legacy work is treated as evidence of stagnation rather than accumulated trust.',
    proposition:
      'A program does not become less necessary because it is no longer novel; often, longevity is evidence that the need has remained and the community has continued to rely on the response.',
    problem:
      'Innovation-centered funding can force organizations to rename, repackage, or abandon effective work to remain competitive, diverting energy from delivery and weakening institutional memory.',
    contributions: [
      'Separates innovation from usefulness.',
      'Centers continuity, trust, and maintenance as legitimate funding outcomes.',
      'Questions philanthropic incentives that reward reinvention over durable community capacity.',
    ],
    development: ['Published through Coordinates May Vary on Substack.'],
    related: ['compression-before-enlightenment', 'bean-soup-theory', 'incubrighter'],
    externalUrl: 'https://coordinatesmayvary.substack.com',
    tags: ['philanthropy', 'nonprofits', 'funding', 'program continuity'],
  },
  {
    slug: 'compression-before-enlightenment',
    title: 'Compression Before Enlightenment',
    subtitle: 'What pressure reveals before systems change',
    constellation: 'public-writing',
    kind: 'Public essay',
    status: 'Published on Substack',
    year: '2026',
    summary:
      'This essay treats compression as a driver of change across personal life, organizations, government, and class systems. Pressure accumulates when institutions continue to narrow the room available for people to live, adapt, and remain stable. Eventually something yields. The essay reads that breaking point not as sudden disruption but as the visible phase of a much longer structural process.',
    proposition:
      'Major change often appears abrupt only because the preceding compression was ignored while it accumulated.',
    problem:
      'Public narratives tend to focus on the moment a system breaks, a movement erupts, or a person leaves, obscuring the long period in which pressure narrowed the available alternatives.',
    contributions: [
      'Uses compression as a cross-scale metaphor for personal, economic, and political change.',
      'Connects innovation to constraint rather than inspiration alone.',
      'Provides accessible language for recognizing change before collapse makes it undeniable.',
    ],
    development: ['Published through Coordinates May Vary on Substack.'],
    related: ['trouble-with-new', 'bean-soup-theory', 'continuity-ethics'],
    externalUrl: 'https://coordinatesmayvary.substack.com',
    tags: ['systems change', 'class', 'innovation', 'pressure'],
  },
];

export function getWork(slug) {
  return works.find((work) => work.slug === slug);
}

export function getConstellation(id) {
  return constellations.find((constellation) => constellation.id === id);
}

export function getWorksByConstellation(id) {
  return works.filter((work) => work.constellation === id);
}
