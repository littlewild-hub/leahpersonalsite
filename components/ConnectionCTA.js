'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRightIcon } from './Icons';
import styles from './ConnectionCTA.module.css';

export function ConnectionCTA({
  eyebrow = 'Continue the conversation',
  title = 'If this is the problem you are working on, we should probably talk.',
  body = 'I work with people and institutions wrestling with public systems, relational power, civic infrastructure, implementation, and the practical work of making care operational.',
}) {
  const pathname = usePathname();
  const href = pathname ? `/connect?from=${encodeURIComponent(pathname)}` : '/connect';

  return (
    <section className={styles.cta} aria-labelledby="connection-cta-heading">
      <div className={styles.copy}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2 id="connection-cta-heading">{title}</h2>
        <p>{body}</p>
      </div>
      <div className={styles.actions}>
        <Link className={styles.primary} href={href}>
          Start a conversation <ArrowRightIcon />
        </Link>
        <p>Speaking · collaboration · consulting · research · institutional work</p>
      </div>
    </section>
  );
}
