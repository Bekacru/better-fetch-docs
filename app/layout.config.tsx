import { type BaseLayoutProps, type DocsLayoutProps } from 'fumadocs-ui/layout';
import { pageTree } from '@/app/source';
import Link from 'next/link';
import { GitHubLogoIcon } from '@radix-ui/react-icons';

// shared configuration
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: "Better-Fetch",
    transparentMode: "top",
  },
  links: [],

};

// docs layout configuration
export const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: pageTree,
  sidebar: {
    collapsible: false,
    footer: (
      <Link href="https://github.com/bekacru/better-fetch" target="_blank">
        <GitHubLogoIcon width={16} height={16} />
      </Link>
    ),
    defaultOpenLevel: 1,
  }
};
