import Header from '@/presentation/components/layout/Header'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}