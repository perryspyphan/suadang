'use client'

import React, { useState, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useAuth } from '@/presentation/hooks/useAuth'

interface NavChild {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

interface NavItem {
  label: string
  href: string
  children?: NavChild[]
}

const navItems: NavItem[] = [
  { label: 'Tổng quan', href: '/dashboard' },
  { label: 'Hàng hóa', href: '/hang-hoa' },
  {
    label: 'Giao dịch',
    href: '/giao-dich/dat-hang/khach-hang',
    children: [
      {
        label: 'Đặt hàng',
        href: '/giao-dich/dat-hang/khach-hang',
        children: [
          { label: 'Khách hàng', href: '/giao-dich/dat-hang/khach-hang' },
          { label: 'Nhà phân phối', href: '/giao-dich/dat-hang/nha-phan-phoi' },
        ],
      },
      {
        label: 'Hóa đơn',
        href: '/giao-dich/hoa-don/khach-hang',
        children: [
          { label: 'Khách hàng', href: '/giao-dich/hoa-don/khach-hang' },
          { label: 'Nhà phân phối', href: '/giao-dich/hoa-don/nha-phan-phoi' },
        ],
      },
    ],
  },
  {
    label: 'Đối tác',
    href: '/khach-hang',
    children: [
      { label: 'Khách hàng', href: '/khach-hang' },
      { label: 'Nhà phân phối', href: '/nha-phan-phoi' },
    ],
  },
  {
    label: 'Nhân viên',
    href: '/nhan-vien',
    children: [
      { label: 'Thông tin', href: '/nhan-vien' },
      { label: 'Danh sách tài khoản', href: '/tai-khoan' },
    ],
  },
  { label: 'Sổ quỹ', href: '/so-quy' },
  { label: 'Báo cáo', href: '/bao-cao' },
]

const CLOSE_DELAY = 150

export default function Header() {
  const pathname = usePathname()
  const router = useRouter()
  const { logout } = useAuth()
  const [openLabel, setOpenLabel] = useState<string | null>(null)
  const [openSubLabel, setOpenSubLabel] = useState<string | null>(null)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const userMenuRef = useRef<HTMLDivElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const subCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clearClose = () => { if (closeTimer.current) clearTimeout(closeTimer.current) }
  const clearSubClose = () => { if (subCloseTimer.current) clearTimeout(subCloseTimer.current) }

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => {
      setOpenLabel(null)
      setOpenSubLabel(null)
    }, CLOSE_DELAY)
  }, [])

  const scheduleSubClose = useCallback(() => {
    subCloseTimer.current = setTimeout(() => setOpenSubLabel(null), CLOSE_DELAY)
  }, [])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenLabel(null); setOpenSubLabel(null)
      }
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
        setUserMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current)
      if (subCloseTimer.current) clearTimeout(subCloseTimer.current)
    }
  }, [])

  const isActive = (item: NavItem): boolean => {
    if (item.children) {
      return item.children.some(c =>
        c.children
          ? c.children.some(gc => pathname.startsWith(gc.href))
          : pathname.startsWith(c.href)
      )
    }
    return pathname === item.href || pathname.startsWith(item.href + '/')
  }

  return (
    <>
      <div style={{
        height: 40, background: '#1a2560',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 24px', fontSize: 13, color: '#fff',
      }}>
        <span style={{ fontWeight: 700, letterSpacing: 1 }}>DGFarm Admin</span>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <span style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
            Bán online
          </span>
          <div ref={userMenuRef} style={{ position: 'relative' }}>
            <span
              style={{ display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer', padding: '4px 8px', borderRadius: 6, transition: 'background 0.15s', background: userMenuOpen ? 'rgba(255,255,255,0.15)' : 'transparent' }}
              onClick={() => setUserMenuOpen(v => !v)}
            >
              <div style={{ width: 26, height: 26, background: '#253584', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, border: '2px solid rgba(255,255,255,0.3)' }}>A</div>
              Admin
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                style={{ transition: 'transform 0.2s', transform: userMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)', opacity: 0.7 }}>
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </span>

            {userMenuOpen && (
              <div style={{
                position: 'absolute', top: 'calc(100% + 8px)', right: 0, minWidth: 160, background: '#fff',
                borderRadius: 8, boxShadow: '0 8px 24px rgba(0,0,0,0.15)', border: '1px solid #e5e7eb',
                zIndex: 999, paddingTop: 4, paddingBottom: 4,
              }}>
                <div style={{ padding: '8px 16px 8px', borderBottom: '1px solid #f0f0f0', marginBottom: 4 }}>
                  <div style={{ fontSize: 12, color: '#888' }}>Tài khoản</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#333' }}>Admin</div>
                </div>
                <button
                  onClick={() => { setUserMenuOpen(false); logout() }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 8, width: 'calc(100% - 8px)',
                    padding: '10px 16px', fontSize: 13, fontWeight: 500,
                    color: '#dc2626', background: 'transparent', border: 'none',
                    cursor: 'pointer', textAlign: 'left', borderRadius: 4, margin: '0 4px',
                    transition: 'background 0.15s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#fef2f2')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                    <polyline points="16 17 21 12 16 7"/>
                    <line x1="21" y1="12" x2="9" y2="12"/>
                  </svg>
                  Đăng xuất
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div style={{
        height: 56, background: '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 24px', borderBottom: '1px solid #e5e7eb',
        boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
      }}>
        <Link href="/dashboard" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          <div style={{ width: 32, height: 32, background: '#253584', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
          </div>
          <span style={{ fontWeight: 800, fontSize: 18, color: '#253584', letterSpacing: '-0.5px' }}>DGFarm</span>
        </Link>

        <nav ref={navRef} style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {navItems.map(item => {
            const active = isActive(item)
            const isOpen = openLabel === item.label
            return (
              <div key={item.label} style={{ position: 'relative' }}
                onMouseEnter={() => { clearClose(); if (item.children) setOpenLabel(item.label) }}
                onMouseLeave={() => { if (item.children) scheduleClose() }}
              >
                <div
                  style={{
                    display: 'flex', alignItems: 'center', gap: 4,
                    padding: '6px 12px', borderRadius: 6, cursor: 'pointer',
                    fontWeight: active ? 700 : 500, fontSize: 14,
                    color: active ? '#253584' : '#444',
                    background: active ? '#eef2ff' : isOpen ? '#f5f7ff' : 'transparent',
                    userSelect: 'none', transition: 'background 0.15s',
                  }}
                  onClick={() => { router.push(item.href); if (!item.children) setOpenLabel(null); setOpenSubLabel(null) }}
                >
                  {item.label}
                  {item.children && (
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2.5"
                      style={{ transition: 'transform 0.2s', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', opacity: 0.6 }}>
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  )}
                </div>

                {item.children && isOpen && (
                  <div
                    style={{
                      position: 'absolute', top: '100%', left: 0, minWidth: 160, background: '#fff',
                      borderRadius: 8, boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                      border: '1px solid #e5e7eb', zIndex: 500, marginTop: 2,
                      paddingTop: 4, paddingBottom: 4,
                    }}
                    onMouseEnter={() => { clearClose(); clearSubClose() }}
                    onMouseLeave={() => { scheduleClose() }}
                  >
                    {item.children.map(child => {
                      const childActive = child.children
                        ? child.children.some(gc => pathname.startsWith(gc.href))
                        : pathname.startsWith(child.href)
                      const subOpen = openSubLabel === child.label
                      return (
                        <div key={child.label} style={{ position: 'relative' }}
                          onMouseEnter={() => { clearClose(); clearSubClose(); if (child.children) setOpenSubLabel(child.label); else setOpenSubLabel(null) }}
                          onMouseLeave={() => { if (child.children) scheduleSubClose() }}
                        >
                          <div
                            style={{
                              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                              gap: 8, padding: '10px 16px', fontSize: 14,
                              fontWeight: childActive ? 700 : 500,
                              color: childActive ? '#253584' : '#333',
                              background: childActive ? '#eef2ff' : subOpen ? '#f5f7ff' : 'transparent',
                              cursor: 'pointer', whiteSpace: 'nowrap', borderRadius: 4, margin: '0 4px',
                            }}
                            onClick={() => { router.push(child.href); setOpenLabel(null); setOpenSubLabel(null) }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                              <span style={{ width: 6, height: 6, borderRadius: '50%', background: childActive ? '#253584' : '#ccc', flexShrink: 0 }} />
                              {child.label}
                            </div>
                            {child.children && (
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" opacity={0.5}>
                                <polyline points="9 18 15 12 9 6" />
                              </svg>
                            )}
                          </div>

                          {child.children && subOpen && (
                            <div
                              style={{
                                position: 'absolute', top: -4, left: '100%', minWidth: 160, background: '#fff',
                                borderRadius: 8, boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                                border: '1px solid #e5e7eb', zIndex: 600, marginLeft: -4,
                                paddingTop: 4, paddingBottom: 4,
                              }}
                              onMouseEnter={() => { clearClose(); clearSubClose() }}
                              onMouseLeave={() => { scheduleSubClose(); scheduleClose() }}
                            >
                              {child.children.map(grandchild => {
                                const gcActive = pathname.startsWith(grandchild.href)
                                return (
                                  <Link key={grandchild.href} href={grandchild.href}
                                    onClick={() => { setOpenLabel(null); setOpenSubLabel(null) }}
                                    style={{
                                      display: 'flex', alignItems: 'center', gap: 8,
                                      padding: '10px 16px', fontSize: 14,
                                      fontWeight: gcActive ? 700 : 500,
                                      color: gcActive ? '#253584' : '#333',
                                      background: gcActive ? '#eef2ff' : 'transparent',
                                      textDecoration: 'none', borderRadius: 4, margin: '0 4px',
                                    }}
                                    onMouseEnter={e => { if (!gcActive) (e.currentTarget as HTMLElement).style.background = '#f5f7ff' }}
                                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = gcActive ? '#eef2ff' : 'transparent' }}
                                  >
                                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: gcActive ? '#253584' : '#ddd', flexShrink: 0 }} />
                                    {grandchild.label}
                                  </Link>
                                )
                              })}
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </nav>

        {/* Search — nhấn Enter để tìm hàng hóa */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2"
            style={{ position: 'absolute', left: 10, pointerEvents: 'none' }}>
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            type="text"
            placeholder="Tìm hàng hóa..."
            style={{
              height: 34, paddingLeft: 32, paddingRight: 12,
              border: '1px solid #e5e7eb', borderRadius: 8,
              fontSize: 13, outline: 'none', color: '#333',
              background: '#f9fafb', width: 180,
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                const q = (e.target as HTMLInputElement).value.trim()
                if (q) router.push(`/hang-hoa?q=${encodeURIComponent(q)}`)
              }
            }}
          />
        </div>
      </div>
    </>
  )
}