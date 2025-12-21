import ReactMarkdown from 'react-markdown'

function MarkdownSection({ id, title, titleColor = 'text-text-secondary', content }) {
  return (
    <div className="max-w-xl text-left" id={id}>
      <h2 className={`text-2xl font-semibold ${titleColor} mb-4`}>{title}</h2>
      <div className="text-body text-text-primary [&>p:not(:last-child)]:mb-3 [&>a]:text-text-secondary [&>a]:hover:text-text-primary [&>a]:transition-colors">
        <ReactMarkdown
          components={{
            a: ({ node, ...props }) => (
              <a {...props} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary transition-colors" />
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  )
}

export default MarkdownSection

