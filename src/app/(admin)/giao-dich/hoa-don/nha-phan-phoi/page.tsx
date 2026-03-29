// src/app/(admin)/giao-dich/hoa-don/nha-phan-phoi/page.tsx
import { getDistributorsUseCase } from '@/application/use-cases/distributor/DistributorUseCases'
import DistributorTable from '@/presentation/components/distributor/DistributorTable'

export const dynamic = 'force-dynamic'

export default async function HoaDonNhaPhanPhoiPage() {
  const distributors = await getDistributorsUseCase()
  return <DistributorTable initialDistributors={distributors} />
}
