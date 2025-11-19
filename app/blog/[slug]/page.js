import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { processMarkdown } from '../../../lib/markdown'
import CopyCodeHandler from '../../../components/CopyCodeHandler'
import OnThisPage from '../../../components/onthispage'

export default async function BlogPost({ params }) {
  const { slug } = await params
  
  try {
    const filePath = path.join(process.cwd(), 'content', `${slug}.md`)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { content, data } = matter(fileContent)
    const htmlContent = await processMarkdown(content)

    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              {data.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
              <span>By {data.author}</span>
              <span>•</span>
              <span>{data.date}</span>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              {data.description}
            </p>
          </div>
          
          <div 
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
          <CopyCodeHandler />
          <OnThisPage htmlContent={htmlContent} />
        </div>
      </div>
    )
  } catch (error) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-8">
            Blog Post Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            The requested blog post could not be found.
          </p>
        </div>
      </div>
    )
  }
}