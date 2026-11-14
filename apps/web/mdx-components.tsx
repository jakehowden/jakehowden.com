import type { MDXComponents } from "mdx/types"
import Link from "next/link"
import type * as React from "react"

import { CopyButton } from "@/components/ui"

const components: MDXComponents = {
  // Code blocks render as the board's `.cmd` line with a Copy button.
  pre: ({ children }) => {
    const text = String((children as React.ReactElement<{ children: string }>).props.children).trimEnd()
    return (
      <div style={{ margin: "0 0 18px" }}>
        <div className="cmd">
          <code>{text}</code>
          <CopyButton text={text} />
        </div>
      </div>
    )
  },
  code: (props) => <code className="ic" {...props} />,
  // Internal links go through next/link so the base path is applied.
  a: ({ href = "", ...props }) =>
    href.startsWith("/") ? <Link href={href} {...props} /> : <a href={href} {...props} />,
}

export function useMDXComponents(): MDXComponents {
  return components
}
