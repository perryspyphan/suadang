'use client'
import React, { useState } from 'react'
import { useAuth } from '@/presentation/hooks/useAuth'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export const LoginForm = () => {
  const { login, loading, error } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const searchParams = useSearchParams()
  const justRegistered = searchParams.get('registered') === 'true'

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    login(email, password)
  }

  return (
    <div className="min-h-screen bg-[#F5F7FA] flex items-center justify-center px-4">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-2">
            <div className="w-10 h-10 bg-[#253980] rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <span className="text-[#253980] text-2xl font-black font-['Montserrat',sans-serif]">DGFarm</span>
          </div>
          <h1 className="text-[#343C6A] text-2xl font-semibold">Đăng nhập</h1>
          <p className="text-[#718EBF] text-sm mt-1">Chào mừng bạn trở lại!</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-[25px] p-8 shadow-sm">

          {/* Success message */}
          {justRegistered && (
            <div className="mb-4 p-3 bg-[#DCFAF8] rounded-xl text-[#16DBCC] text-sm text-center">
              ✓ Đăng ký thành công! Vui lòng kiểm tra email để xác nhận.
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="mb-4 p-3 bg-[#FFE0EB] rounded-xl text-red-600 text-sm text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Email */}
            <div>
              <label className="text-[#343C6A] text-sm font-medium mb-1.5 block">Email</label>
              <div className="relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#718EBF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                <input
                  type="email"
                  placeholder="email@example.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-[#DFE5EE] rounded-xl text-sm text-[#343C6A] placeholder-[#718EBF] focus:outline-none focus:border-[#253980] transition-colors"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-[#343C6A] text-sm font-medium mb-1.5 block">Mật khẩu</label>
              <div className="relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#718EBF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                <input
                  type={showPass ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  className="w-full pl-10 pr-10 py-3 border border-[#DFE5EE] rounded-xl text-sm text-[#343C6A] placeholder-[#718EBF] focus:outline-none focus:border-[#253980] transition-colors"
                />
                <button type="button" onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#718EBF] hover:text-[#253980]">
                  {showPass
                    ? <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                    : <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                  }
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#253980] hover:bg-[#1a2d6b] text-white py-3 rounded-xl font-semibold text-sm transition-colors disabled:opacity-60 mt-2"
            >
              {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
            </button>
          </form>

          <p className="text-center text-[#718EBF] text-sm mt-6">
            Chưa có tài khoản?{' '}
            <Link href="/register" className="text-[#253980] font-semibold hover:underline">
              Đăng ký ngay
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}