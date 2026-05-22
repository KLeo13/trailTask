import { visit } from 'unist-util-visit'

export function chunkArray(arr: any[], size: number) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
export function rehypeCustomHeadings() {
  return (tree: any) => {
    visit(tree, 'element', (node) => {
      if (/^h[1-6]$/.test(node.tagName)) {
        node.properties ||= {}

        const level = Number(node.tagName[1])
        node.properties['data-level'] = level

        const text = node.children
          .filter((child: any) => child.type === 'text')
          .map((child: any) => child.value)
          .join('')

        node.properties['data-heading'] = text
      }
    })
  }
}