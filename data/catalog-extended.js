import { constellations as baseConstellations, works as baseWorks } from './catalog';

const survivorSystemsSim = {
  slug: 'sequential-intercept-model-survivor-systems',
  title: 'Sequential Intercept Model for Survivor Systems',
  subtitle: 'Adapting SIM for domestic violence and human trafficking',
  constellation: 'civic-infrastructure',
  kind: 'Systems-mapping methodology',
  status: 'Developing concept',
  year: '2025–present',
  publicFormat: 'Methods & concept overview',
  summary:
    'This work adapts the Sequential Intercept Model as a way to map how survivors move through fragmented systems rather than evaluating each service in isolation. The original 2025 proposal focused on domestic violence, dating violence, stalking, and sexual assault and was not adopted by the organization for which it was developed. The underlying methodology remains active and is now being extended conceptually to domestic violence and human trafficking, where survivors may repeatedly cross healthcare, crisis response, law enforcement, courts, housing, child welfare, behavioral health, victim services, benefits, labor, immigration, and community-support systems.',
  proposition:
    'For survivors of domestic violence and human trafficking, some of the most consequential failures occur at the handoffs between systems; mapping those intercepts can make gaps, duplication, retraumatization, and missed opportunities for safety visible.',
  problem:
    'Traditional program evaluation asks whether an individual service works. Survivors often experience a chain of institutions, each with different authority, data, eligibility rules, timelines, and definitions of success. Without a shared system map, it is difficult to see where survivors are lost between services, where intervention can increase danger or reduce autonomy, and where coordination could prevent repeated crisis.',
  contributions: [
    'Adapts the logic of the Sequential Intercept Model from criminal-justice and behavioral-health mapping to survivor-centered system response.',
    'Defines six proposed intercepts spanning prevention and early identification through post-intervention monitoring and advocacy.',
    'Treats system contact as analytically distinct from safety or success; deeper institutional involvement is not assumed to be a positive outcome.',
    'Creates a common set of questions about access, equity, timeliness, navigation, survivor-defined outcomes, and coordination across agencies.',
    'Makes handoffs between institutions a unit of analysis rather than treating fragmentation as an unavoidable feature of the service landscape.',
  ],
  sections: [
    {
      label: 'Proposed intercepts',
      intro:
        'The original 2025 adaptation organized survivor-system response across six points where prevention, access, coordination, or accountability can succeed or fail.',
      items: [
        'Intercept 0 — Prevention and early identification: prevention programs, schools, healthcare, community settings, and other opportunities to identify risk and connect people to resources before crisis escalates.',
        'Intercept 1 — Access to crisis services: hotlines, emergency shelter, advocacy, immediate safety planning, and the timeliness and equity of crisis response.',
        'Intercept 2 — Legal and justice-system engagement: law enforcement, protective orders, courts, prosecution, and other formal legal responses, evaluated through survivor safety and experience rather than system throughput alone.',
        'Intercept 3 — Ongoing support and recovery: counseling, peer support, housing, economic stability, employment, healthcare, and other resources involved in long-term recovery.',
        'Intercept 4 — Systems coordination and sustainability: multidisciplinary teams, interagency communication, funding, shared infrastructure, and the degree to which survivors can move between systems without repeatedly starting over.',
        'Intercept 5 — Post-intervention monitoring and advocacy: long-term outcomes, follow-up services, survivor participation in policy change, system accountability, and whether reforms endure beyond a single intervention.',
      ],
    },
    {
      label: 'A survivor-centered adaptation',
      items: [
        'Safety, autonomy, stability, and survivor-defined outcomes remain distinct from the amount of formal system engagement a person experiences.',
        'The model must accommodate nonlinear movement. Survivors may enter, leave, re-enter, bypass, or be pushed between systems; repeated contact is not itself evidence of individual failure.',
        'Coercive control, exploitation, economic dependence, housing instability, perpetrator interference, and institutional retraumatization can change the meaning and risk of any intercept.',
        'Equity analysis belongs at every intercept, including geographic access, rural service gaps, disability, race, gender identity, sexual orientation, language, and other conditions that shape whether a service is actually reachable or safe.',
      ],
    },
    {
      label: 'Human-trafficking extension',
      intro:
        'Human trafficking was not a named population in the original 2025 proposal. Current development asks how the same intercept logic can be extended without pretending that trafficking and domestic violence are identical systems problems.',
      items: [
        'Potential trafficking intercepts include victim services, healthcare, housing, law enforcement, courts, child welfare, behavioral health, labor systems, immigration systems where relevant, benefits, and community-based support.',
        'The extension requires particular attention to exploitation, criminalization of survivors, documentation and immigration risk, labor conditions, economic coercion, and the possibility that a formal intervention can itself create new danger.',
        'The goal is not to force every survivor journey into one linear pathway, but to create a shared map capable of showing where institutions touch the same person and where responsibility disappears between them.',
      ],
    },
  ],
  development: [
    'Developed in 2025 as a proposed research and evaluation approach for domestic violence, dating violence, stalking, and sexual-assault system response.',
    'The proposal was not adopted by the organization for which it was originally developed; it was not implemented or validated as an organizational project.',
    'The underlying methodology has been retained as independent developing work rather than treated as a closed or abandoned proposal.',
    'Current development extends the conceptual scope toward domestic-violence and human-trafficking survivor systems and refines how nonlinear movement, survivor autonomy, and cross-system handoffs should be represented.',
  ],
  related: ['statewide-needs-assessment', 'survivor-voices-council', 'epic'],
  tags: [
    'Sequential Intercept Model',
    'systems mapping',
    'domestic violence',
    'human trafficking',
    'survivor-centered systems',
    'interagency coordination',
  ],
};

export const constellations = baseConstellations;

export const works = baseWorks.flatMap((work) =>
  work.slug === 'statewide-needs-assessment' ? [work, survivorSystemsSim] : [work]
);

export function getWork(slug) {
  return works.find((work) => work.slug === slug);
}

export function getConstellation(id) {
  return constellations.find((constellation) => constellation.id === id);
}

export function getWorksByConstellation(id) {
  return works.filter((work) => work.constellation === id);
}
