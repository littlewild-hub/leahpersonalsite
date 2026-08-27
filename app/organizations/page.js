import { SiteFooter, SiteHeader } from '../../components/SiteChrome';
import { ArrowUpRightIcon } from '../../components/Icons';
import { socialImage } from '../../lib/site-metadata';
import styles from './organizations.module.css';

export const metadata = {
  title: 'Organizations Leah Buzek Has Worked With',
  description: 'A selected list of organizations and campaigns Leah Buzek has worked with.',
  alternates: { canonical: '/organizations' },
  openGraph: {
    title: 'Organizations Leah Buzek Has Worked With',
    description: 'A selected list of organizations and campaigns Leah Buzek has worked with.',
    url: '/organizations',
    type: 'website',
    images: [socialImage],
  },
};

const organizations = [
  {
    name: 'Stark A11y',
    domain: 'A11yofstark.org',
    href: 'https://a11yofstark.org',
  },
  {
    name: 'ODVN',
    domain: 'ODVN.org',
    href: 'https://odvn.org',
  },
  {
    name: 'Colin Jones for President',
    domain: 'ColinJones2028.com',
    href: 'https://colinjones2028.com',
  },
];

export default function OrganizationsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className={styles.hero}>
          <p className="eyebrow">Selected collaborations</p>
          <h1>Organizations I’ve <em>worked with.</em></h1>
          <p>A selected list of the organizations and campaigns that have been part of my work.</p>
        </section>

        <section className={styles.directory} aria-label="Organizations Leah Buzek has worked with">
          <div className={styles.list}>
            {organizations.map((organization, index) => (
              <a
                className={styles.row}
                href={organization.href}
                key={organization.name}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit ${organization.name} (opens in a new tab)`}
              >
                <span className={styles.number}>[0{index + 1}]</span>
                <h2>{organization.name}</h2>
                <span className={styles.domain}>{organization.domain}</span>
                <span className={styles.arrow} aria-hidden="true"><ArrowUpRightIcon /></span>
              </a>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
