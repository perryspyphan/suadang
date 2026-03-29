// src/app/(admin)/giao-dich/dat-hang/nha-phan-phoi/page.tsx
import { getDistributorsUseCase } from '@/application/use-cases/distributor/DistributorUseCases'
import DistributorTable from '@/presentation/components/distributor/DistributorTable'

export const dynamic = 'force-dynamic'

export default async function DatHangNhaPhanPhoiPage() {
  const distributors = await getDistributorsUseCase()
  return <DistributorTable initialDistributors={distributors} />
}
