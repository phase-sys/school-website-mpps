// components/layout-wrapper.tsx
interface PageWrapperProps {
  children: React.ReactNode
}

export function PageWrapper({ children }: PageWrapperProps) {
  return <div className="min-h-screen bg-background">{children}</div>
}
