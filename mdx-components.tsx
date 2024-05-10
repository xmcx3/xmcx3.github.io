import type { MDXComponents } from 'mdx/types'
import { Test } from '@/components/Test'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Test
  }
}
