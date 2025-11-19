'use client'
import { useEffect } from 'react'

export default function CopyCodeHandler() {
  useEffect(() => {
    const handleCopyClick = async (event) => {
      const button = event.target.closest('.copy-btn')
      if (!button) return

      // Find the code element within the same container
      const codeContainer = button.parentElement
      const codeElement = codeContainer.querySelector('code')
      if (!codeElement) return

      const code = codeElement.textContent
      
      try {
        await navigator.clipboard.writeText(code)
        
        // Update button to show success
        const svg = button.querySelector('svg')
        const originalPath = svg.querySelector('path')
        
        // Store original attributes
        const originalD = originalPath.getAttribute('d')
        const originalFill = svg.getAttribute('fill')
        const originalStroke = svg.getAttribute('stroke')
        
        // Change to checkmark
        originalPath.setAttribute('d', 'M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z')
        svg.setAttribute('fill', 'currentColor')
        svg.setAttribute('stroke', 'none')
        button.classList.add('copied', 'text-green-600', 'dark:text-green-400')
        
        // Reset after 2 seconds
        setTimeout(() => {
          originalPath.setAttribute('d', originalD)
          svg.setAttribute('fill', originalFill)
          svg.setAttribute('stroke', originalStroke)
          button.classList.remove('copied', 'text-green-600', 'dark:text-green-400')
        }, 2000)
        
      } catch (err) {
        console.error('Failed to copy code:', err)
        
        // Show error feedback
        button.classList.add('text-red-600', 'dark:text-red-400')
        setTimeout(() => {
          button.classList.remove('text-red-600', 'dark:text-red-400')
        }, 2000)
      }
    }

    document.addEventListener('click', handleCopyClick)
    
    return () => {
      document.removeEventListener('click', handleCopyClick)
    }
  }, [])

  return null
}