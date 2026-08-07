import { constellations as baseConstellations, works as baseWorks } from './works';

const overrides = {
  'continuity-ethics': {
    related: ['continuity-of-the-subjective-experience', 'love-as-service', 'promirational-ethics', 'relational-ontometry'],
  },
  traces: {
    status: 'Active development / pilot',
    publicFormat: 'Framework & assessment overview',
    summary:
      'TRACEs develops the central intervention proposed in Calling It What It Is: a structured way to identify the cumulative relational, systemic, and trauma burden carried by caregivers of multi-system-involved youth. The framework moves beyond generic measures of stress by pairing a rapid screener with a deeper assessment that can show whether trauma activation is present, where strain is concentrated, and how severe that strain has become.',
    proposition:
      'Caregiver burden must be assessed as an accumulation of relational adversity and system exposure, not as a private failure of resilience.',
    problem:
      'Child-serving systems routinely assess youth symptoms, risk, compliance, and treatment progress while treating the caregiver as part of the implementation environment. That leaves violence exposure, institutional betrayal, financial destabilization, family strain, isolation, and the cumulative effects of fragmented systems under-measured or unnamed.',
    contributions: [
      'Creates a six-domain assessment architecture for caregiver strain, trauma load, and relational adversity.',
      'Pairs a 12-question Yes/No/Not Applicable screener with a 72-item full assessment scored on a 0–4 severity scale.',
      'Distinguishes rapid identification of trauma activation from deeper measurement of severity, location, referral needs, and change over time.',
      'Defines a non-clinical facilitator role centered on witnessing, guiding, interpreting through a trauma-informed lens, connecting caregivers to support, and maintaining professional boundaries.',
      'Provides a shared language that can be used by caregivers, family-support professionals, peer supporters, and system leaders without reducing the caregiver to an extension of the child’s treatment plan.',
    ],
    sections: [
      {
        label: 'Assessment architecture',
        intro:
          'TRACEs is designed as two connected instruments rather than one monolithic assessment. The short form answers a different question from the full assessment.',
        items: [
          'The 12-question screener uses Yes / No / Not Applicable responses and is designed for roughly 10–15 minute check-ins, new-service encounters, team meetings, or situations where a longer assessment would be too burdensome.',
          'The full assessment uses 72 items scored from 0–4 to identify how severe strain is and where it is concentrated across the six-domain framework.',
          'The screener is useful for identifying domains of concern and tracking broad change; the full assessment supports more specific caregiver referrals and detailed progress measurement.',
        ],
      },
      {
        label: 'Practice model',
        items: [
          'The facilitator is not positioned as therapist, case manager, or diagnostician. The role is witness, guide, and advocate.',
          'Administration is meant to create space for honest dialogue, interpret results through a trauma-informed lens, connect caregivers to appropriate support, and surface patterns that may require broader system change.',
          'The framework grows directly from the research argument in Calling It What It Is: that caregiver trauma has to be named before systems can reliably assess, support, treat, or fund responses to it.',
        ],
      },
      {
        label: 'Where the work has traveled',
        items: [
          'UConn Training Institutes — poster presentation of Calling It What It Is and the emerging TRACEs framework.',
          'Courage to Caregivers Summit — TRACEs of Care: Mapping the Trauma Footprint of Family Caregiving.',
          'NAMI Ohio FPS ProNet and FREDLA PPS Provider Learning Community — practitioner and peer-network presentations.',
          'Family-support and wraparound partners are being engaged for applied piloting and refinement.',
        ],
      },
    ],
    development: [
      'Originated in Calling It What It Is as a proposed parallel lens to Adverse Childhood Experiences.',
      'Expanded into a screener, full assessment, facilitator guidance, training materials, and practice vignettes.',
      'Current development is focused on piloting, refinement, and applied use with family-support and wraparound partners.',
    ],
    related: ['calling-it-what-it-is', 'epic', 'incubrighter'],
    tags: ['caregiving', 'assessment', 'trauma', 'family peer support', 'system burden'],
  },
  epic: {
    subtitle: 'Engage · Partner · Integrate · Co-Create',
    constellation: 'civic-infrastructure',
    kind: 'Participatory-design framework',
    status: 'Framework & training',
    year: '2025–present',
    publicFormat: 'Framework overview',
    summary:
      'EPIC is a practical framework for ethical collaboration with Experts by Experience (EBEs): people whose direct experience with systems such as mental health, substance use, education, violence prevention, housing, poverty, child welfare, re-entry, or other forms of institutional contact gives them actionable knowledge about how those systems work and fail. The framework is designed to move lived experience from testimony at the edge of an organization into compensated, structurally embedded participation in design, strategy, evaluation, and decision-making.',
    proposition:
      'Lived experience becomes governance knowledge only when people are given clarity, compensation, decision power, early involvement, shared ownership, and durable credit—not merely an invitation to tell their story.',
    problem:
      'Organizations frequently invite people with lived experience into panels, listening sessions, advisory groups, or storytelling roles while retaining the real agenda-setting and decision authority elsewhere. That creates participation without power and turns personal experience into an extractive input rather than a form of expertise.',
    contributions: [
      'Defines a four-stage progression: Engage, Partner, Integrate, and Co-Create.',
      'Separates Experts by Experience from narrower peer-support roles by focusing on macro-level system design, policy, program, culture, and structure.',
      'Builds consent, transparency, practical support, and equitable compensation into the entry point rather than treating them as afterthoughts.',
      'Moves EBE involvement into standing organizational structures such as planning, evaluation, hiring, leadership, and strategic accountability.',
      'Treats co-created products, policies, research, and programs as shared work that should carry appropriate authorship, credit, contracts, and—when relevant—ongoing compensation.',
    ],
    sections: [
      {
        label: 'The four stages',
        items: [
          'Engage — make the invitation specific, transparent, consent-first, and honest about time, compensation, practical support, and actual decision power.',
          'Partner — define equitable roles, compensate EBEs as experts, cover real participation costs, and give them authority capable of changing the outcome.',
          'Integrate — make EBE participation part of the organization’s normal machinery rather than a special event: planning, implementation, evaluation, hiring, leadership, and strategy.',
          'Co-Create — bring EBEs in at the idea stage, flatten decision structures where appropriate, share authorship and ownership, and leave durable structures behind after any one participant exits.',
        ],
      },
      {
        label: 'Structural commitments',
        items: [
          'Multiple ways to participate and genuine room to decline or step back without penalty.',
          'Compensation comparable to other consultants or contributors, plus travel, childcare, lost-wage, access, and other practical supports when needed.',
          'Clear statements about how input will be used and how much authority participants actually hold.',
          'Ongoing organizational accountability for demonstrating how EBE contributions affected decisions rather than merely recording that consultation occurred.',
        ],
      },
    ],
    development: [
      'Developed as a practical framework and training model in 2025.',
      'Designed for use across sectors rather than as a caregiver-specific program.',
      'Connects directly to survivor-led governance, participatory program design, and IncuBrighter’s broader civic-capacity work.',
    ],
    related: ['survivor-voices-council', 'incubrighter', 'traces'],
    tags: ['Experts by Experience', 'participatory design', 'shared power', 'co-creation', 'lived expertise'],
  },
  'statewide-needs-assessment': {
    related: ['raise-the-bar', 'survivor-voices-council', 'calling-it-what-it-is'],
  },
  'survivor-voices-council': {
    related: ['statewide-needs-assessment', 'epic', 'raise-the-bar'],
  },
  'nightlife-venues-as-partners': {
    related: ['raise-the-bar', 'statewide-needs-assessment', 'survivor-voices-council'],
  },
  incubrighter: {
    publicFormat: 'Organizational case study',
    summary:
      'IncuBrighter began as infrastructure for developing independent programs that did not fit neatly inside an employer, academic institution, or conventional nonprofit program. The idea widened quickly: if the incubation structure could support one emerging program, it could also support other people trying to turn community knowledge into durable nonprofit work. IncuBrighter now functions as an organizational platform for research, program pilots, nonprofit incubation, and civic-capacity building.',
    proposition:
      'People with strong community ideas should not have to arrive with a finished organization, funder-ready language, administrative infrastructure, and pilot evidence before they are allowed to begin building.',
    problem:
      'Early-stage nonprofit and civic ideas face a sequencing trap. Founders are asked for governance, compliance, evidence, funding strategy, operational systems, and a polished program model before they have access to the time, money, technical support, or institutional home required to produce those things.',
    contributions: [
      'Creates an organizational home where research, tools, and programs can be developed before they are forced into a final institutional form.',
      'Supports the continued development and piloting of TRACEs as an independent caregiver-trauma framework.',
      'Develops Bright Origins as a structured incubation pathway for people building nonprofit programs from an idea through pilot evidence.',
      'Builds a pathway from education and program design to pilot implementation, portfolio development, funder/community presentation, and either independent incorporation or continued fiscal sponsorship.',
      'Treats nonprofit administration and compliance as enabling infrastructure for community problem-solving rather than paperwork that founders are expected to master alone.',
    ],
    sections: [
      {
        label: 'How the organization evolved',
        items: [
          'The original purpose was to create a stable organizational home for independently developed programs.',
          'That architecture expanded into a broader incubation model after recognizing that other community builders face the same gap between an idea and an institution capable of carrying it.',
          'TRACEs became an early test case for how IncuBrighter could host research, training, pilot partnerships, and applied refinement under one organizational roof.',
        ],
      },
      {
        label: 'Bright Origins',
        intro:
          'Bright Origins is the emerging incubation curriculum inside IncuBrighter. The current design treats nonprofit formation as a year-long learning-and-pilot process rather than a paperwork sprint.',
        items: [
          'Participants enter with a nonprofit or community-program idea and move through structured education in management, grants, legal compliance, human resources, and related operating requirements.',
          'The model combines weekly educational sessions with workplan roundtables and conversations with sector practitioners.',
          'The final phase is designed around piloting the program, collecting early evidence, building a portfolio, and presenting the work publicly.',
          'At the end of incubation, a project can pursue its own nonprofit status or remain under the IncuBrighter umbrella through fiscal sponsorship.',
        ],
      },
    ],
    development: [
      'Founded as an Ohio nonprofit in 2025 and recognized as a public charity.',
      'Early organizational development centered on building governance and incubation infrastructure while advancing TRACEs pilot partnerships.',
      'Bright Origins has a completed curriculum outline and operating sequence that continues to be developed deliberately before launch.',
    ],
    related: ['epic', 'traces', 'raise-the-bar'],
    tags: ['civic R&D', 'nonprofit incubation', 'fiscal sponsorship', 'program development', 'grassroots capacity'],
  },
};

const loveAsService = {
  slug: 'love-as-service',
  title: 'Love as Service',
  subtitle: 'A working definition of public service',
  constellation: 'relational-ethics',
  kind: 'Public-service philosophy',
  status: 'Completed paper',
  year: '2026',
  summary:
    'Love as Service argues that public service is best understood as the pursuit of public welfare through love in action. That definition is intentionally wider than charity or kindness. Love can look like feeding and clothing people, administering government well, accompanying someone through a frightening process, negotiating common ground, breaking secrecy when whistleblowing is required, naming suffering in public, or resisting systems that produce harm. The paper compares how justice ethics, care ethics, and differing moral foundations change what people recognize as loving public action.',
  proposition:
    'Public service is the practical expression of love for other people and the future they must share—and love includes courage, rage, ambiguity, dissent, restraint, and repair as well as kindness.',
  problem:
    'Public service is often reduced either to benevolent helping or to the formal machinery of government. Both definitions miss the ethical question underneath the work: what kind of obligation moves a person to act for public welfare, especially when service requires conflict, sacrifice, criticism of institutions, or solidarity with people whose values differ from one’s own?',
  contributions: [
    'Defines public service broadly enough to include direct aid, administration, advocacy, whistleblowing, protest, negotiation, and institutional reform.',
    'Treats joy as one manifestation of love rather than the boundary of it, leaving room for anger, courage, grief, patience, and defiance as service responses.',
    'Compares justice-based and care-based ethical foundations to show why people can pursue public welfare through different moral vocabularies.',
    'Connects an ethical definition of service to the practical work of building institutions, policies, and systems capable of caring well.',
  ],
  sections: [
    {
      label: 'What counts as love here',
      items: [
        'Material care: feeding, clothing, sheltering, supporting, and accompanying people through vulnerable moments.',
        'Institutional care: making government, nonprofits, and public systems function in ways that protect dignity and public welfare.',
        'Confrontational care: whistleblowing, protest, revolution, public criticism, or other acts that oppose harmful systems rather than soothing them.',
        'Relational care: negotiating common ground, remaining present in ambiguity, and recognizing that different moral foundations produce different understandings of fairness, liberty, loyalty, authority, and harm.',
      ],
    },
  ],
  development: [
    'Written through graduate study in Foundations of Public Service.',
    'Provides the clearest statement of the public-service philosophy that connects the site’s relational-ethics work to its applied systems and civic work.',
  ],
  related: ['continuity-ethics', 'promirational-ethics', 'incubrighter'],
  tags: ['public service', 'love', 'care ethics', 'justice ethics', 'public welfare'],
};

const raiseTheBar = {
  slug: 'raise-the-bar',
  title: 'Raise the Bar',
  subtitle: 'A statewide nightlife-partner campaign for domestic-violence prevention and survivor support',
  constellation: 'civic-infrastructure',
  kind: 'Public-awareness & fundraising campaign',
  status: 'Campaign design & implementation',
  year: '2025–2026',
  publicFormat: 'Campaign case study',
  summary:
    'Raise the Bar is a statewide campaign designed to turn bars, taverns, breweries, restaurants, and other nightlife spaces into low-friction partners in domestic-violence awareness and survivor support. Participating venues feature a signature drink or mocktail, contribute one dollar per pour to the LifeSaver Fund, and use campaign materials to place prevention messaging inside community spaces that traditional outreach often misses.',
  proposition:
    'A statewide prevention campaign can lower the barrier to participation without lowering the seriousness of the issue: one simple venue action can fund survivor support, extend prevention messaging, and create a new network of community allies.',
  problem:
    'Bars and nightlife spaces are culturally influential and may be places where staff witness warning signs of domestic violence or trafficking, yet they are often outside the normal orbit of anti-violence outreach. At the same time, partnerships with alcohol-serving venues carry legitimate ethical tension that requires careful framing rather than either avoidance or moral simplification.',
  contributions: [
    'Designs a low-barrier participation model around one signature drink or mocktail and a one-dollar-per-pour contribution.',
    'Pairs fundraising with coasters, QR materials, posters, and other prevention messaging that travels through the venue itself.',
    'Allows venues to participate for a week, a month, or selected event nights rather than requiring a single rigid activation model.',
    'Builds optional staff education around recognizing domestic-violence and human-trafficking warning signs while keeping the baseline campaign easy to join.',
    'Connects campaign operations to a separate deliberative plan, Nightlife Venues as Partners, for navigating the real institutional and survivor-centered tensions created by the strategy.',
  ],
  sections: [
    {
      label: 'Campaign mechanics',
      items: [
        'Participating venues select a signature drink or mocktail and donate $1 from each pour to the LifeSaver Fund.',
        'ODVN supplies professionally designed print and digital materials such as coasters, QR cards, menus, mirror or poster signage, and social assets.',
        'The campaign can run for different lengths of time, making it possible to align with Domestic Violence Awareness Month, special events, or seasonal venue traffic.',
        'A QR and mapping layer is designed to make participation visible, connect the public to campaign information, and highlight participating venues.',
      ],
    },
    {
      label: 'Design constraints',
      items: [
        'Messaging is framed around empowerment and safety rather than shame.',
        'Drink names and promotional language cannot trivialize or joke about abuse.',
        'Education and event support can be offered without making a full training requirement the price of entry for every venue.',
        'The campaign is designed to support statewide work rather than compete with local survivor-service fundraising.',
      ],
    },
  ],
  development: [
    'Developed as a statewide campaign concept with operational planning, budget assumptions, sponsor categories, venue materials, and outreach structure.',
    'Advanced into statewide partner outreach and implementation planning through ODVN.',
    'The related Nightlife Venues as Partners plan addresses the ethical and deliberative questions created by working with alcohol-serving spaces.',
  ],
  related: ['nightlife-venues-as-partners', 'survivor-voices-council', 'statewide-needs-assessment'],
  tags: ['domestic violence', 'public awareness', 'nightlife', 'fundraising', 'campaign design'],
};

const additionsAfter = {
  'continuity-ethics': [loveAsService],
  'nightlife-venues-as-partners': [raiseTheBar],
};

export const constellations = baseConstellations;

export const works = baseWorks.flatMap((work) => {
  const enriched = overrides[work.slug] ? { ...work, ...overrides[work.slug] } : work;
  return [enriched, ...(additionsAfter[work.slug] || [])];
});

export function getWork(slug) {
  return works.find((work) => work.slug === slug);
}

export function getConstellation(id) {
  return constellations.find((constellation) => constellation.id === id);
}

export function getWorksByConstellation(id) {
  return works.filter((work) => work.constellation === id);
}
