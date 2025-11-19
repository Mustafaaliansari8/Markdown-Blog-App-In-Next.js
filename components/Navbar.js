'use client'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import LoadingBar from 'react-top-loading-bar'
import { usePathname } from 'next/navigation'
import {useEffect, useState} from 'react'
import { useAuth } from '@/contexts/AuthContext'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"



const Navbar = () => {
  const [progress, setProgress] = useState(0)
  const pathname = usePathname()
  const { user, logout } = useAuth()

  useEffect(() => {
    setProgress(20)

    setTimeout(() => {
      setProgress(50)
    }, 100);

    setTimeout(() => {
      setProgress(100)
    }, 500);
  }, [pathname])

  useEffect(() => {
    setTimeout(() => {
      setProgress(0)
    }, 700);
  }, [])
  
  

  return (
    <nav className="p-4 bg-background/50 sticky backdrop-blur border-b top-0 z-10">
      <LoadingBar
        color="#6028ff"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-10">
          <Link href="/" className="text-2xl font-bold" style={{color: '#6028ff'}}>
            SazidBlog
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-gray-700 dark:text-gray-200 hover:scale-110 transition-all duration-300 font-medium" style={{'--hover-color': '#6028ff'}} onMouseEnter={(e) => e.target.style.color = '#6028ff'} onMouseLeave={(e) => e.target.style.color = ''}>
              Home
            </Link>
            <Link href="/about" className="text-gray-700 dark:text-gray-200 hover:scale-110 transition-all duration-300 font-medium" onMouseEnter={(e) => e.target.style.color = '#6028ff'} onMouseLeave={(e) => e.target.style.color = ''}>
              About
            </Link>
            <Link href="/blog" className="text-gray-700 dark:text-gray-200 hover:scale-110 transition-all duration-300 font-medium" onMouseEnter={(e) => e.target.style.color = '#6028ff'} onMouseLeave={(e) => e.target.style.color = ''}>
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 dark:text-gray-200 hover:scale-110 transition-all duration-300 font-medium" onMouseEnter={(e) => e.target.style.color = '#6028ff'} onMouseLeave={(e) => e.target.style.color = ''}>
              Contact
            </Link>
            {user ? (
              <>
                <span className="text-gray-700 dark:text-gray-200 font-medium">Welcome, {user.name}</span>
                <Button variant="outline" onClick={logout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" asChild>
                  <Link href="/login">Login</Link>
                </Button>
                <Button asChild>
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </>
            )}
            <AnimatedThemeToggler />
          </div>

          <div className="md:hidden flex items-center gap-4">
            <AnimatedThemeToggler />
            <Sheet modal={false}>
              <SheetTrigger>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </SheetTrigger>
              <SheetContent className="bg-white">
                <SheetHeader>
                  <SheetTitle className="font-bold text-center text-2xl m-12" style={{color: '#6028ff'}}>SazidBlog</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col items-center gap-6">
                  <Link href="/" className="text-gray-700 transition-colors font-medium" onMouseEnter={(e) => e.target.style.color = '#6028ff'} onMouseLeave={(e) => e.target.style.color = ''}>
                    Home
                  </Link>
                  <Link href="/about" className="text-gray-700 transition-colors font-medium" onMouseEnter={(e) => e.target.style.color = '#6028ff'} onMouseLeave={(e) => e.target.style.color = ''}>
                    About
                  </Link>
                  <Link href="/blog" className="text-gray-700 transition-colors font-medium" onMouseEnter={(e) => e.target.style.color = '#6028ff'} onMouseLeave={(e) => e.target.style.color = ''}>
                    Blog
                  </Link>
                  <Link href="/contact" className="text-gray-700 transition-colors font-medium" onMouseEnter={(e) => e.target.style.color = '#6028ff'} onMouseLeave={(e) => e.target.style.color = ''}>
                    Contact
                  </Link>
                  {user ? (
                    <>
                      <span className="text-gray-700 font-medium">Welcome, {user.name}</span>
                      <Button variant="outline" onClick={logout}>
                        Logout
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button variant="outline" asChild>
                        <Link href="/login">Login</Link>
                      </Button>
                      <Button asChild>
                        <Link href="/signup">Sign Up</Link>
                      </Button>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>


    </nav>
  )
}

export default Navbar
