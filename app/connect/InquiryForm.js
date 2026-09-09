'use client';

import { useMemo, useState } from 'react';
import { track } from '@vercel/analytics';
import { useSearchParams } from 'next/navigation';
import styles from './connect.module.css';

const inquiryTypes = [
  ['speaking', 'Speaking invitation'],
  ['project', 'Institutional or project problem'],
  ['research', 'Research or practice collaboration'],
  ['role', 'Role or long-term engagement'],
  ['other', 'Something else'],
];

export default function InquiryForm() {
  const searchParams = useSearchParams();
  const initialType = searchParams.get('type') || 'project';
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const context = useMemo(() => {
    const keys = ['from', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
    return Object.fromEntries(keys.map((key) => [key, searchParams.get(key) || '']).filter(([, value]) => value));
  }, [searchParams]);

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('submitting');
    setError('');

    const form = new FormData(event.currentTarget);
    if (form.get('_honey')) {
      setStatus('success');
      return;
    }

    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      organization_role: form.get('organization_role'),
      inquiry_type: form.get('inquiry_type'),
      message: form.get('message'),
      source_page: context.from || 'Direct / unknown',
      utm_source: context.utm_source || '',
      utm_medium: context.utm_medium || '',
      utm_campaign: context.utm_campaign || '',
      utm_content: context.utm_content || '',
      utm_term: context.utm_term || '',
      _subject: `New leahbuzek.com inquiry — ${form.get('inquiry_type')}`,
      _template: 'table',
    };

    try {
      const response = await fetch('https://formsubmit.co/ajax/LeahGBuzek@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (!response.ok || result.success === false) {
        throw new Error(result.message || 'Unable to send inquiry.');
      }

      track('Inquiry Submitted', { type: String(form.get('inquiry_type')) });
      event.currentTarget.reset();
      setStatus('success');
    } catch (submissionError) {
      setError(submissionError.message || 'Something went wrong while sending your note.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className={styles.success} role="status">
        <p className={styles.kicker}>Message sent</p>
        <h2>Thank you. I have it.</h2>
        <p>Your note was submitted through the site. I’ll have the context that brought you here along with your message.</p>
        <button type="button" onClick={() => setStatus('idle')}>Send another note</button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGrid}>
        <label>
          <span>Name</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
      </div>

      <label>
        <span>Organization / role <small>optional</small></span>
        <input name="organization_role" type="text" autoComplete="organization-title" />
      </label>

      <label>
        <span>What kind of conversation is this?</span>
        <select name="inquiry_type" defaultValue={inquiryTypes.some(([value]) => value === initialType) ? initialType : 'other'}>
          {inquiryTypes.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
        </select>
      </label>

      <label>
        <span>What are you working on?</span>
        <textarea name="message" rows="8" required placeholder="A few sentences is enough. Tell me what you’re dealing with, what brought you here, and what kind of conversation might be useful." />
      </label>

      <div className={styles.honey} aria-hidden="true">
        <label>Leave this empty<input name="_honey" type="text" tabIndex="-1" autoComplete="off" /></label>
      </div>

      {context.from ? <p className={styles.sourceNote}>You arrived here from: <strong>{context.from}</strong></p> : null}
      {error ? <p className={styles.formError} role="alert">{error}</p> : null}

      <div className={styles.formActions}>
        <button type="submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending…' : 'Send inquiry'}
        </button>
        <p>No email app required. Your note is submitted directly from this page.</p>
      </div>
    </form>
  );
}
