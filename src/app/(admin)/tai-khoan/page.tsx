import { getAccountsUseCase, getEmployeesUseCase } from '@/application/use-cases/staff/StaffUseCases'
import AccountTable from '@/presentation/components/account/AccountTable'

export const dynamic = 'force-dynamic'

export default async function TaiKhoanPage() {
  const [accounts, employees] = await Promise.all([
    getAccountsUseCase(),
    getEmployeesUseCase(),
  ])
  return <AccountTable initialAccounts={accounts} employees={employees} />
}