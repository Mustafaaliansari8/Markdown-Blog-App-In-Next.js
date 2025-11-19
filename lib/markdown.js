import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

const options = {
  theme: 'github-dark',
  keepBackground: false,
  defaultLang: 'plaintext',
  transformers: [
    {
      name: 'copy-button',
      pre(node) {
        // Add relative positioning and group class to pre element
        this.addClassToHast(node, 'relative')
        this.addClassToHast(node, 'group')
        
        // Create copy button
        const button = {
          type: 'element',
          tagName: 'button',
          properties: {
            className: ['copy-btn'],
            title: 'Copy code',
            'aria-label': 'Copy code to clipboard'
          },
          children: [
            {
              type: 'element',
              tagName: 'svg',
              properties: {
                className: ['w-4', 'h-4'],
                fill: 'none',
                stroke: 'currentColor',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg'
              },
              children: [
                {
                  type: 'element',
                  tagName: 'path',
                  properties: {
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '2',
                    d: 'M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z'
                  }
                }
              ]
            }
          ]
        }
        
        // Add button to pre element
        node.children.push(button)
      }
    }
  ]
}

export async function processMarkdown(content) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, {
      behavior: 'wrap',
      properties: {
        className: ['anchor-link']
      }
    })
    .use(rehypePrettyCode, options)
    .use(rehypeStringify)
    .process(content)

  return result.toString()
}