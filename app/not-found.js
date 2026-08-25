import Link from 'next/link';
import { SiteFooter, SiteHeader } from '../components/SiteChrome';
import { ArrowRightIcon } from '../components/Icons';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page} id="main-content">
        <p className={styles.code} aria-hidden="true">404</p>
        <h1>This thread doesn’t connect.</h1>
        <p>The page may have moved, changed names, or never belonged to this constellation in the first place.</p>
        <Link className="button button--peach" href="/work">
          Return to the body of work <ArrowRightIcon />
        </Link>
      </main>
      <SiteFooter />
    </>
  );
}
