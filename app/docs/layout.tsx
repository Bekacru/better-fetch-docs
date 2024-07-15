import { DocsLayout } from 'fumadocs-ui/layout';
import type { ReactNode } from 'react';
import { docsOptions } from '../layout.config';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export default function Layout({ children }: { children: ReactNode }) {
  return <DocsLayout {...docsOptions}>{children}</DocsLayout>;
}
