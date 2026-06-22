import type { Metadata } from 'next';
import { TestAIClient } from './TestAIClient';

export const metadata: Metadata = {
  title: 'Test Gotowości na AI | Poland Automation Hub',
  robots: { index: false, follow: false },
};

export default function TestAIPage() {
  return <TestAIClient />;
}
