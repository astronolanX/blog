'use client'

import React from 'react'

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ComponentType<{ error?: Error }>
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Handle web component errors specifically
    if (error.message.includes('custom element') || 
        error.message.includes('already been defined') ||
        error.message.includes('mce-autosize-textarea')) {
      console.warn('Web component error caught and handled:', error.message)
      return { hasError: false } // Don't show error UI for web component conflicts
    }
    
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log web component errors but don't crash the app
    if (error.message.includes('custom element') || 
        error.message.includes('already been defined') ||
        error.message.includes('mce-autosize-textarea')) {
      console.warn('Web component conflict detected and handled:', error.message)
      return
    }
    
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback
      if (FallbackComponent) {
        return <FallbackComponent error={this.state.error} />
      }
      
      return (
        <div className="p-4 border border-red-200 rounded-lg bg-red-50 dark:bg-red-900/20 dark:border-red-800">
          <h2 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">
            Something went wrong
          </h2>
          <p className="text-red-600 dark:text-red-300">
            {this.state.error?.message || 'An unexpected error occurred'}
          </p>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="mt-3 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
          >
            Try again
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
