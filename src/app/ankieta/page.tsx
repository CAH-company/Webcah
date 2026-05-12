import type { Metadata } from 'next';
import { AnkietaClient } from './AnkietaClient';

export const metadata: Metadata = {
  title: 'Ankieta Satysfakcji | Poland Automation Hub',
  robots: { index: false, follow: false },
};

export default function AnkietaPage() {
  return <AnkietaClient />;
}
