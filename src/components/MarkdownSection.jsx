import ReactMarkdown from 'react-markdown'

function MarkdownSection({ id, content }) {
  return (
    <div className="max-w-xl text-left" id={id}>
      <div className="h-20 flex-shrink-0"></div>
      <div className="text-body text-text-primary [&>p:not(:last-child)]:mb-3 [&>a]:text-text-secondary [&>a]:hover:text-text-primary [&>a]:transition-colors [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-3 [&_ul>li]:mb-1 [&_ul>li>p]:mb-0 [&_ul_ul]:list-circle [&_ul_ul]:ml-4 [&_ul_ul_ul]:list-square">
        <ReactMarkdown
          components={{
            a: ({ node, ...props }) => (
              <a {...props} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary transition-colors" />
            ),
            h1: ({ node, ...props }) => (
              <h1 {...props} className="text-heading-1 font-semibold text-text-primary mb-4 mt-6 first:mt-0" />
            ),
            h2: ({ node, ...props }) => (
              <h2 {...props} className="text-heading-2 font-semibold text-text-primary mb-4 mt-6 first:mt-0" />
            ),
            h3: ({ node, ...props }) => (
              <h3 {...props} className="text-xl font-semibold text-text-primary mb-3 mt-6 first:mt-0" />
            ),
            h4: ({ node, ...props }) => (
              <h4 {...props} className="text-lg font-semibold text-text-primary mb-2 mt-5 first:mt-0" />
            ),
            h5: ({ node, ...props }) => (
              <h5 {...props} className="text-base font-semibold text-text-primary mb-2 mt-4 first:mt-0" />
            ),
            h6: ({ node, ...props }) => (
              <h6 {...props} className="text-sm font-semibold text-text-primary mb-2 mt-4 first:mt-0" />
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
      <div className="h-20 flex-shrink-0"></div>
    </div>
  )
}

export default MarkdownSection

