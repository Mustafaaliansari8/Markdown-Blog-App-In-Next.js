import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "CSS Tutorial",
      description: "This is CSS tutorial and this is for learning CSS styling and layout techniques",
      slug: "css-tutorial",
      date: "11/02/2025",
      author: "Sazid",
      image: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      title: "C Programming Tutorial",
      description: "Learn C programming from basics to advanced concepts",
      slug: "c-programming-tutorial",
      date: "10/25/2024",
      author: "Developer",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop"
    },
    {
      id: 3,
      title: "C++ Programming Tutorial",
      description: "Master C++ programming with object-oriented concepts",
      slug: "cpp-programming-tutorial",
      date: "10/20/2024",
      author: "Developer",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=300&fit=crop"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Our Blog
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover insights, tutorials, and best practices from our team of developers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <span>{blog.date}</span>
                  <span className="mx-2">•</span>
                  <span>{blog.author}</span>
                </div>
                
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 hover:text-primary transition-colors">
                  <Link href={`/blog/${blog.slug}`}>
                    {blog.title}
                  </Link>
                </h2>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {blog.description}
                </p>
                
                <Link href={`/blog/${blog.slug}`}>
                  <Button variant="outline" size="sm" className="group dark:border-gray-600">
                    Read More
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog
