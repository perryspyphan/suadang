(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/infrastructure/supabase/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-client] (ecmascript)");
;
function createClient() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBrowserClient"])(("TURBOPACK compile-time value", "https://srgeakntlgtmdbiaedxb.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNyZ2Vha250bGd0bWRiaWFlZHhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMxNzY3NzYsImV4cCI6MjA4ODc1Mjc3Nn0.BtagwhNq6YkzqfN6n5oCPFrb4Zb-n6iCZMcPmPmoutQ"));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/presentation/components/ui/SharedUI.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConfirmDeleteModal",
    ()=>ConfirmDeleteModal,
    "DeleteBar",
    ()=>DeleteBar,
    "Overlay",
    ()=>Overlay,
    "PgBtn",
    ()=>PgBtn,
    "SbCard",
    ()=>SbCard,
    "btnGreen",
    ()=>btnGreen,
    "btnIcon",
    ()=>btnIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Overlay({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.45)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/presentation/components/ui/SharedUI.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = Overlay;
function PgBtn({ children, active, disabled, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        disabled: disabled,
        style: {
            minWidth: 28,
            height: 28,
            border: '1px solid #ccc',
            background: active ? '#253584' : '#fff',
            color: active ? '#fff' : '#000',
            borderColor: active ? '#253584' : '#ccc',
            borderRadius: 4,
            fontSize: 12,
            cursor: disabled ? 'default' : 'pointer',
            opacity: disabled ? 0.4 : 1,
            padding: '0 6px'
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/presentation/components/ui/SharedUI.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c1 = PgBtn;
function SbCard({ title, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: '#fff',
            borderRadius: 8,
            boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
            padding: '12px 14px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontWeight: 700,
                    fontSize: 13,
                    color: '#000',
                    marginBottom: 8
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/src/presentation/components/ui/SharedUI.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                style: {
                    border: 'none',
                    borderTop: '1px solid #E0E0E0',
                    margin: '0 0 8px'
                }
            }, void 0, false, {
                fileName: "[project]/src/presentation/components/ui/SharedUI.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/presentation/components/ui/SharedUI.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c2 = SbCard;
function DeleteBar({ count, onDelete }) {
    if (count === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            bottom: 28,
            right: 36,
            zIndex: 300
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onDelete,
            style: {
                background: '#FF7433',
                color: '#fff',
                border: 'none',
                borderRadius: 7,
                height: 42,
                padding: '0 24px',
                fontWeight: 700,
                fontSize: 14,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 9
            },
            children: [
                "🗑 Xóa đã chọn (",
                count,
                ")"
            ]
        }, void 0, true, {
            fileName: "[project]/src/presentation/components/ui/SharedUI.tsx",
            lineNumber: 58,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/presentation/components/ui/SharedUI.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_c3 = DeleteBar;
function ConfirmDeleteModal({ count, onConfirm, onCancel, isPending }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Overlay, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                width: 300,
                background: '#fff',
                borderRadius: 16,
                padding: '24px 20px 18px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.22)',
                textAlign: 'center'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        fontSize: 13,
                        color: '#222',
                        lineHeight: 1.65,
                        marginBottom: 18
                    },
                    children: [
                        "Xóa ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            style: {
                                color: '#253584'
                            },
                            children: count
                        }, void 0, false, {
                            fileName: "[project]/src/presentation/components/ui/SharedUI.tsx",
                            lineNumber: 85,
                            columnNumber: 15
                        }, this),
                        " mục đã chọn?"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/presentation/components/ui/SharedUI.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        gap: 12,
                        justifyContent: 'center'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onCancel,
                            style: {
                                flex: 1,
                                height: 36,
                                border: 'none',
                                borderRadius: 7,
                                background: '#ADFF66',
                                color: '#2d6a00',
                                fontWeight: 700,
                                fontSize: 13,
                                cursor: 'pointer'
                            },
                            children: "Hủy"
                        }, void 0, false, {
                            fileName: "[project]/src/presentation/components/ui/SharedUI.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onConfirm,
                            disabled: isPending,
                            style: {
                                flex: 1,
                                height: 36,
                                border: 'none',
                                borderRadius: 7,
                                background: '#FF7433',
                                color: '#fff',
                                fontWeight: 700,
                                fontSize: 13,
                                cursor: 'pointer'
                            },
                            children: isPending ? '...' : 'Xóa'
                        }, void 0, false, {
                            fileName: "[project]/src/presentation/components/ui/SharedUI.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/presentation/components/ui/SharedUI.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/presentation/components/ui/SharedUI.tsx",
            lineNumber: 80,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/presentation/components/ui/SharedUI.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
_c4 = ConfirmDeleteModal;
const btnGreen = {
    background: '#4BCC3A',
    color: '#fff',
    border: 'none',
    borderRadius: 5,
    height: 38,
    padding: '0 18px',
    fontWeight: 700,
    fontSize: 13,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    whiteSpace: 'nowrap'
};
const btnIcon = {
    background: '#4BCC3A',
    color: '#fff',
    border: 'none',
    borderRadius: 5,
    height: 38,
    width: 38,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
};
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "Overlay");
__turbopack_context__.k.register(_c1, "PgBtn");
__turbopack_context__.k.register(_c2, "SbCard");
__turbopack_context__.k.register(_c3, "DeleteBar");
__turbopack_context__.k.register(_c4, "ConfirmDeleteModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/presentation/components/order/OrderTable.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OrderTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/infrastructure/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$components$2f$ui$2f$SharedUI$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/components/ui/SharedUI.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
const fmt = (n)=>n.toLocaleString('vi-VN');
const wsBadge = (s)=>{
    const map = {
        'Chờ xác nhận': {
            background: '#FAEEDA',
            color: '#633806'
        },
        'Đã xác nhận': {
            background: '#E6F1FB',
            color: '#0C447C'
        },
        'Đang giao': {
            background: '#EEEDFE',
            color: '#3C3489'
        },
        'Hoàn thành': {
            background: '#EAF3DE',
            color: '#27500A'
        },
        'Đã hủy': {
            background: '#fee2e2',
            color: '#b91c1c'
        },
        'Từ chối': {
            background: '#FCEBEB',
            color: '#791F1F'
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            display: 'inline-flex',
            alignItems: 'center',
            padding: '2px 10px',
            borderRadius: 10,
            fontSize: 11,
            fontWeight: 500,
            whiteSpace: 'nowrap',
            ...map[s]
        },
        children: s
    }, void 0, false, {
        fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const timeAgo = (dateStr)=>{
    const diff = Math.floor((Date.now() - new Date(dateStr).getTime()) / 60000);
    if (diff < 1) return 'Vừa xong';
    if (diff < 60) return `${diff} phút trước`;
    const h = Math.floor(diff / 60);
    if (h < 24) return `${h}h trước`;
    return `${Math.floor(h / 24)} ngày trước`;
};
const STATUSES = [
    'Chờ xác nhận',
    'Đã xác nhận',
    'Đang giao',
    'Hoàn thành',
    'Đã hủy',
    'Từ chối'
];
const NEXT_ACTION = {
    'Chờ xác nhận': {
        label: 'Xác nhận',
        next: 'Đã xác nhận'
    },
    'Đã xác nhận': {
        label: 'Bắt đầu giao',
        next: 'Đang giao'
    },
    'Đang giao': {
        label: 'Đã giao',
        next: 'Hoàn thành'
    }
};
const DATE_OPTS = [
    'Hôm nay',
    'Hôm qua',
    'Tuần này',
    'Tuần trước',
    'Tháng này',
    'Tháng trước'
];
function getDateRange(opt) {
    const now = new Date();
    const f = (d)=>d.toISOString().split('T')[0];
    if (opt === 'Hôm nay') {
        const s = f(now);
        return {
            from: s,
            to: s
        };
    }
    if (opt === 'Hôm qua') {
        const d = new Date(now);
        d.setDate(d.getDate() - 1);
        const s = f(d);
        return {
            from: s,
            to: s
        };
    }
    if (opt === 'Tuần này') {
        const d = new Date(now);
        d.setDate(d.getDate() - d.getDay() + 1);
        const e = new Date(d);
        e.setDate(e.getDate() + 6);
        return {
            from: f(d),
            to: f(e)
        };
    }
    if (opt === 'Tuần trước') {
        const d = new Date(now);
        d.setDate(d.getDate() - d.getDay() - 6);
        const e = new Date(d);
        e.setDate(e.getDate() + 6);
        return {
            from: f(d),
            to: f(e)
        };
    }
    if (opt === 'Tháng này') return {
        from: f(new Date(now.getFullYear(), now.getMonth(), 1)),
        to: f(new Date(now.getFullYear(), now.getMonth() + 1, 0))
    };
    if (opt === 'Tháng trước') return {
        from: f(new Date(now.getFullYear(), now.getMonth() - 1, 1)),
        to: f(new Date(now.getFullYear(), now.getMonth(), 0))
    };
    return {
        from: '',
        to: ''
    };
}
// ── DateDropdown ──────────────────────────────────────────────
function DateDropdown({ label, dateFrom, dateTo, onSelect }) {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [customFrom, setCustomFrom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(dateFrom);
    const [customTo, setCustomTo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(dateTo);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DateDropdown.useEffect": ()=>{
            const h = {
                "DateDropdown.useEffect.h": (e)=>{
                    if (ref.current && !ref.current.contains(e.target)) setOpen(false);
                }
            }["DateDropdown.useEffect.h"];
            document.addEventListener('mousedown', h);
            return ({
                "DateDropdown.useEffect": ()=>document.removeEventListener('mousedown', h)
            })["DateDropdown.useEffect"];
        }
    }["DateDropdown.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        style: {
            position: 'relative',
            marginTop: 6
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: ()=>setOpen((p)=>!p),
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '7px 12px',
                    border: '1.5px solid #d0d7e2',
                    borderRadius: 20,
                    cursor: 'pointer',
                    background: '#f7f9fc',
                    fontSize: 13
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#555",
                        strokeWidth: "2.5",
                        style: {
                            transition: 'transform 0.2s',
                            transform: open ? 'rotate(180deg)' : 'rotate(0deg)'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                            points: "6 9 12 15 18 9"
                        }, void 0, false, {
                            fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    background: '#fff',
                    border: '1px solid #ddd',
                    borderRadius: 8,
                    boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
                    zIndex: 300,
                    overflow: 'hidden',
                    marginTop: 4
                },
                children: [
                    DATE_OPTS.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: ()=>{
                                const r = getDateRange(opt);
                                onSelect(opt, r.from, r.to);
                                setOpen(false);
                            },
                            style: {
                                padding: '9px 14px',
                                fontSize: 13,
                                cursor: 'pointer'
                            },
                            onMouseEnter: (e)=>e.currentTarget.style.background = '#f0f5ff',
                            onMouseLeave: (e)=>e.currentTarget.style.background = 'transparent',
                            children: opt
                        }, opt, false, {
                            fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                            lineNumber: 103,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            borderTop: '1px solid #eee',
                            padding: '8px 14px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 6,
                                    fontSize: 13,
                                    color: '#555',
                                    marginBottom: 8,
                                    fontWeight: 500
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "14",
                                        height: "14",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "3",
                                                y: "4",
                                                width: "18",
                                                height: "18",
                                                rx: "2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                                lineNumber: 114,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "16",
                                                y1: "2",
                                                x2: "16",
                                                y2: "6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                                lineNumber: 115,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "8",
                                                y1: "2",
                                                x2: "8",
                                                y2: "6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                                lineNumber: 116,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "3",
                                                y1: "10",
                                                x2: "21",
                                                y2: "10"
                                            }, void 0, false, {
                                                fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                                lineNumber: 117,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                        lineNumber: 113,
                                        columnNumber: 15
                                    }, this),
                                    "Lựa chọn khác"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                lineNumber: 112,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 12,
                                    color: '#888',
                                    marginBottom: 3
                                },
                                children: "Từ ngày"
                            }, void 0, false, {
                                fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "date",
                                value: customFrom,
                                onChange: (e)=>{
                                    setCustomFrom(e.target.value);
                                    onSelect('Lựa chọn khác', e.target.value, customTo);
                                },
                                style: {
                                    width: '100%',
                                    height: 32,
                                    border: '1px solid #ccc',
                                    borderRadius: 6,
                                    padding: '0 8px',
                                    fontSize: 12,
                                    outline: 'none',
                                    marginBottom: 6
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 12,
                                    color: '#888',
                                    marginBottom: 3
                                },
                                children: "Đến ngày"
                            }, void 0, false, {
                                fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "date",
                                value: customTo,
                                onChange: (e)=>{
                                    setCustomTo(e.target.value);
                                    onSelect('Lựa chọn khác', customFrom, e.target.value);
                                },
                                style: {
                                    width: '100%',
                                    height: 32,
                                    border: '1px solid #ccc',
                                    borderRadius: 6,
                                    padding: '0 8px',
                                    fontSize: 12,
                                    outline: 'none'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                lineNumber: 101,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
_s(DateDropdown, "bohqlmnMls/fQfN4CCVTCVGO6r8=");
_c = DateDropdown;
// ── SbCard ────────────────────────────────────────────────────
function SbCard({ title, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: '#fff',
            borderRadius: 8,
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            padding: '12px 14px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontWeight: 700,
                    fontSize: 13,
                    color: '#000',
                    marginBottom: 8
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                style: {
                    border: 'none',
                    borderTop: '1px solid #E0E0E0',
                    margin: '0 0 8px'
                }
            }, void 0, false, {
                fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
        lineNumber: 139,
        columnNumber: 5
    }, this);
}
_c1 = SbCard;
function OrderTable({ role, accountId }) {
    _s1();
    const [orders, setOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [statusFilter, setStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Tất cả');
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Chờ xác nhận');
    // ── FIX 1: Mặc định "Toàn thời gian" — không filter ngày ──
    const [dateLabel, setDateLabel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Toàn thời gian');
    const [dateFrom, setDateFrom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [dateTo, setDateTo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const PER = 10;
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    const [confirmAction, setConfirmAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
    // ── FIX 2: fetchOrders trả về Promise, useEffect await đúng cách ──
    const fetchOrders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "OrderTable.useCallback[fetchOrders]": async ()=>{
            const { data, error } = await supabase.from('orders').select('*, customers(name)').order('ordered_at', {
                ascending: false
            });
            if (error) {
                console.error('fetchOrders error:', error.message);
                return;
            }
            if (data) {
                setOrders(// eslint-disable-next-line @typescript-eslint/no-explicit-any
                data.map({
                    "OrderTable.useCallback[fetchOrders]": (o)=>({
                            id: o.id,
                            customer_id: o.customer_id,
                            customer_name: o.customers?.name || o.customer_id,
                            seller: o.seller ?? '',
                            total: o.total ?? 0,
                            status: o.status ?? '',
                            workflow_status: o.workflow_status || 'Chờ xác nhận',
                            ordered_at: o.ordered_at,
                            handled_by: o.handled_by ?? null,
                            tracking_code: o.tracking_code ?? null,
                            note: o.note ?? null
                        })
                }["OrderTable.useCallback[fetchOrders]"]));
            }
        }
    }["OrderTable.useCallback[fetchOrders]"], []) // eslint-disable-line react-hooks/exhaustive-deps
    ;
    // ── FIX 3: useEffect dùng async IIFE, setLoading sau khi fetch xong ──
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrderTable.useEffect": ()=>{
            let active = true;
            ({
                "OrderTable.useEffect": async ()=>{
                    await fetchOrders();
                    if (active) setLoading(false);
                }
            })["OrderTable.useEffect"]();
            return ({
                "OrderTable.useEffect": ()=>{
                    active = false;
                }
            })["OrderTable.useEffect"];
        }
    }["OrderTable.useEffect"], [
        fetchOrders
    ]);
    const updateStatus = (orderId, next)=>{
        startTransition(async ()=>{
            const { error } = await supabase.from('orders').update({
                workflow_status: next,
                handled_by: accountId,
                ...next === 'Hoàn thành' ? {
                    status: 'Đã thanh toán'
                } : {}
            }).eq('id', orderId);
            if (!error) {
                setOrders((p)=>p.map((o)=>o.id === orderId ? {
                            ...o,
                            workflow_status: next
                        } : o));
            }
        });
    };
    const doAction = (orderId, type)=>{
        const next = type === 'reject' ? 'Từ chối' : 'Đã hủy';
        startTransition(async ()=>{
            const { error } = await supabase.from('orders').update({
                workflow_status: next,
                status: next
            }).eq('id', orderId);
            if (!error) {
                setOrders((p)=>p.map((o)=>o.id === orderId ? {
                            ...o,
                            workflow_status: next
                        } : o));
            }
            setConfirmAction(null);
        });
    };
    const exportCSV = ()=>{
        let csv = '\uFEFFMã đơn,Khách hàng,Tổng tiền,Trạng thái,Thời gian\n';
        filtered.forEach((o)=>{
            csv += [
                o.id,
                `"${o.customer_name}"`,
                o.total,
                o.workflow_status,
                new Date(o.ordered_at).toLocaleString('vi-VN')
            ].join(',') + '\n';
        });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(new Blob([
            csv
        ], {
            type: 'text/csv;charset=utf-8;'
        }));
        a.download = 'DGFarm_DonHang.csv';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };
    // Stats tính trên TOÀN BỘ orders, không bị ảnh hưởng bởi date filter
    const stats = STATUSES.reduce((acc, s)=>{
        acc[s] = orders.filter((o)=>o.workflow_status === s).length;
        return acc;
    }, {});
    const filtered = orders.filter((o)=>{
        const q = search.toLowerCase();
        if (q && !o.id.toLowerCase().includes(q) && !(o.customer_name || '').toLowerCase().includes(q)) return false;
        if (statusFilter !== 'Tất cả' && o.workflow_status !== statusFilter) return false;
        // Chỉ filter ngày nếu đã chọn (không phải 'Toàn thời gian')
        if (dateFrom || dateTo) {
            const oDate = o.ordered_at?.split('T')[0] || '';
            if (dateFrom && oDate < dateFrom) return false;
            if (dateTo && oDate > dateTo) return false;
        }
        if (activeTab === 'Lịch sử') {
            return o.workflow_status === 'Hoàn thành' || o.workflow_status === 'Đã hủy' || o.workflow_status === 'Từ chối';
        }
        return o.workflow_status === activeTab;
    });
    const pages = Math.max(1, Math.ceil(filtered.length / PER));
    const safePage = Math.min(page, pages);
    const slice = filtered.slice((safePage - 1) * PER, safePage * PER);
    const rowGrid = {
        display: 'grid',
        gridTemplateColumns: '36px 110px 1fr 140px 150px 100px 1fr',
        padding: '0 12px',
        alignItems: 'center',
        fontSize: 12
    };
    // RBAC helpers
    const canConfirm = role === 'admin' || role === 'staff';
    const canReject = role === 'admin' || role === 'staff';
    const canCancel = role === 'admin';
    // manager chỉ xem, không thao tác đơn online
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    height: 40,
                    background: '#e8e8e8',
                    display: 'flex',
                    alignItems: 'center',
                    paddingLeft: 16
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        fontSize: 15,
                        fontWeight: 500
                    },
                    children: "Đặt hàng — Khách hàng"
                }, void 0, false, {
                    fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                    lineNumber: 297,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                lineNumber: 296,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    minHeight: 'calc(100vh - 136px)',
                    background: '#f5f5f5'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        style: {
                            width: 220,
                            minWidth: 220,
                            padding: 12,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 10,
                            borderRight: '0.5px solid #e0e0e0',
                            background: '#f5f5f5'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SbCard, {
                                title: "Thời gian",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DateDropdown, {
                                    label: dateLabel,
                                    dateFrom: dateFrom,
                                    dateTo: dateTo,
                                    onSelect: (opt, from, to)=>{
                                        setDateLabel(opt);
                                        setDateFrom(from);
                                        setDateTo(to);
                                        setPage(1);
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                    lineNumber: 306,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                lineNumber: 305,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SbCard, {
                                title: "Trạng thái",
                                children: [
                                    'Tất cả',
                                    ...STATUSES
                                ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 7,
                                            fontSize: 12,
                                            color: '#555',
                                            marginTop: 5,
                                            cursor: 'pointer'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: 13,
                                                    height: 13,
                                                    borderRadius: '50%',
                                                    border: '1.5px solid #253584',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    flexShrink: 0
                                                },
                                                children: statusFilter === s && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        width: 6,
                                                        height: 6,
                                                        borderRadius: '50%',
                                                        background: '#253584'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                                    lineNumber: 323,
                                                    columnNumber: 42
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                                lineNumber: 322,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "radio",
                                                name: "ws-filter",
                                                checked: statusFilter === s,
                                                onChange: ()=>{
                                                    setStatusFilter(s);
                                                    setPage(1);
                                                },
                                                style: {
                                                    display: 'none'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                                lineNumber: 325,
                                                columnNumber: 17
                                            }, this),
                                            s
                                        ]
                                    }, s, true, {
                                        fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                        lineNumber: 321,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                lineNumber: 319,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                        lineNumber: 303,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        style: {
                            flex: 1,
                            padding: '12px 14px',
                            minWidth: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(4,1fr)',
                                    gap: 8,
                                    marginBottom: 12
                                },
                                children: [
                                    [
                                        'Chờ xác nhận',
                                        '#633806'
                                    ],
                                    [
                                        'Đã xác nhận',
                                        '#0C447C'
                                    ],
                                    [
                                        'Đang giao',
                                        '#3C3489'
                                    ],
                                    [
                                        'Hoàn thành',
                                        '#27500A'
                                    ]
                                ].map(([label, color])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>{
                                            setActiveTab(label);
                                            setPage(1);
                                        },
                                        style: {
                                            background: '#fff',
                                            borderRadius: 8,
                                            padding: '10px 12px',
                                            border: activeTab === label ? `1.5px solid ${color}` : '0.5px solid #e0e0e0',
                                            textAlign: 'center',
                                            cursor: 'pointer'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 20,
                                                    fontWeight: 500,
                                                    color
                                                },
                                                children: stats[label] || 0
                                            }, void 0, false, {
                                                fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                                lineNumber: 353,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 11,
                                                    color: '#666',
                                                    marginTop: 2
                                                },
                                                children: label
                                            }, void 0, false, {
                                                fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                                lineNumber: 354,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, label, true, {
                                        fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                        lineNumber: 346,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                lineNumber: 339,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    marginBottom: 10
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 320,
                                            height: 34,
                                            border: '0.5px solid #ccc',
                                            borderRadius: 8,
                                            display: 'flex',
                                            alignItems: 'center',
                                            padding: '0 10px',
                                            gap: 8,
                                            background: '#fff'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "13",
                                                height: "13",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "#999",
                                                strokeWidth: "2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "11",
                                                        cy: "11",
                                                        r: "8"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                                        lineNumber: 363,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "21",
                                                        y1: "21",
                                                        x2: "16.65",
                                                        y2: "16.65"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                                        lineNumber: 363,
                                                        columnNumber: 48
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                                lineNumber: 362,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                value: search,
                                                onChange: (e)=>{
                                                    setSearch(e.target.value);
                                                    setPage(1);
                                                },
                                                placeholder: "Tìm theo mã đơn, tên khách...",
                                                style: {
                                                    border: 'none',
                                                    outline: 'none',
                                                    fontSize: 12,
                                                    background: 'transparent',
                                                    width: '100%'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                                lineNumber: 365,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                        lineNumber: 361,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: exportCSV,
                                        style: {
                                            height: 34,
                                            background: '#253584',
                                            color: '#fff',
                                            border: 'none',
                                            borderRadius: 8,
                                            padding: '0 14px',
                                            fontSize: 12,
                                            fontWeight: 500,
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 6
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "13",
                                                height: "13",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                                        lineNumber: 372,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                        points: "7 10 12 15 17 10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                                        lineNumber: 373,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "12",
                                                        y1: "15",
                                                        x2: "12",
                                                        y2: "3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                                        lineNumber: 374,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                                lineNumber: 371,
                                                columnNumber: 15
                                            }, this),
                                            "Xuất file"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                        lineNumber: 369,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                lineNumber: 360,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    borderBottom: '0.5px solid #e0e0e0'
                                },
                                children: [
                                    'Chờ xác nhận',
                                    'Đã xác nhận',
                                    'Đang giao',
                                    'Lịch sử'
                                ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>{
                                            setActiveTab(tab);
                                            setPage(1);
                                        },
                                        style: {
                                            padding: '8px 14px',
                                            fontSize: 12,
                                            cursor: 'pointer',
                                            fontWeight: activeTab === tab ? 500 : 400,
                                            color: activeTab === tab ? '#253584' : '#666',
                                            borderBottom: activeTab === tab ? '2px solid #253584' : '2px solid transparent',
                                            whiteSpace: 'nowrap'
                                        },
                                        children: [
                                            tab,
                                            tab !== 'Lịch sử' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    marginLeft: 5,
                                                    background: '#f0f0f0',
                                                    borderRadius: 10,
                                                    padding: '1px 6px',
                                                    fontSize: 10
                                                },
                                                children: stats[tab] || 0
                                            }, void 0, false, {
                                                fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                                lineNumber: 387,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, tab, true, {
                                        fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                        lineNumber: 383,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                lineNumber: 381,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: '#fff',
                                    borderRadius: '0 0 8px 8px',
                                    border: '0.5px solid #e0e0e0',
                                    borderTop: 'none',
                                    overflow: 'hidden'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            ...rowGrid,
                                            background: '#E8F0FE',
                                            height: 40,
                                            fontWeight: 500,
                                            fontSize: 11,
                                            color: '#0C447C',
                                            borderBottom: '0.5px solid #e0e0e0'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                                lineNumber: 398,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: "Mã đơn"
                                            }, void 0, false, {
                                                fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                                lineNumber: 398,
                                                columnNumber: 22
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: "Khách hàng"
                                            }, void 0, false, {
                                                fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                                lineNumber: 398,
                                                columnNumber: 39
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: "Tổng tiền"
                                            }, void 0, false, {
                                                fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                                lineNumber: 399,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: "Trạng thái"
                                            }, void 0, false, {
                                                fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                                lineNumber: 399,
                                                columnNumber: 35
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: "Thời gian"
                                            }, void 0, false, {
                                                fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                                lineNumber: 400,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: "Thao tác"
                                            }, void 0, false, {
                                                fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                                lineNumber: 400,
                                                columnNumber: 35
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                        lineNumber: 397,
                                        columnNumber: 13
                                    }, this),
                                    loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            textAlign: 'center',
                                            padding: 40,
                                            color: '#aaa',
                                            fontSize: 13
                                        },
                                        children: "Đang tải..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                        lineNumber: 404,
                                        columnNumber: 15
                                    }, this),
                                    !loading && slice.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            textAlign: 'center',
                                            padding: 40,
                                            color: '#aaa',
                                            fontSize: 13
                                        },
                                        children: "Không có đơn hàng nào"
                                    }, void 0, false, {
                                        fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                        lineNumber: 409,
                                        columnNumber: 15
                                    }, this),
                                    !loading && slice.map((o)=>{
                                        const action = NEXT_ACTION[o.workflow_status];
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                ...rowGrid,
                                                minHeight: 46,
                                                background: '#fff',
                                                borderBottom: '0.5px solid #f0f0f0',
                                                padding: '7px 12px'
                                            },
                                            onMouseEnter: (e)=>e.currentTarget.style.background = '#f9fbff',
                                            onMouseLeave: (e)=>e.currentTarget.style.background = '#fff',
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        style: {
                                                            width: 13,
                                                            height: 13,
                                                            accentColor: '#253584',
                                                            cursor: 'pointer'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                                        lineNumber: 422,
                                                        columnNumber: 24
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                                    lineNumber: 422,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        color: '#253584',
                                                        fontWeight: 500
                                                    },
                                                    children: o.id
                                                }, void 0, false, {
                                                    fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                                    lineNumber: 423,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis',
                                                        whiteSpace: 'nowrap'
                                                    },
                                                    children: o.customer_name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                                    lineNumber: 424,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontWeight: 500
                                                    },
                                                    children: fmt(o.total)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                                    lineNumber: 425,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: wsBadge(o.workflow_status)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                                    lineNumber: 426,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        color: '#888',
                                                        fontSize: 11
                                                    },
                                                    children: timeAgo(o.ordered_at)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                                    lineNumber: 427,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'flex',
                                                        gap: 5,
                                                        flexWrap: 'wrap'
                                                    },
                                                    children: [
                                                        action && canConfirm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            disabled: isPending,
                                                            onClick: ()=>updateStatus(o.id, action.next),
                                                            style: {
                                                                height: 26,
                                                                padding: '0 10px',
                                                                background: '#253584',
                                                                color: '#fff',
                                                                border: 'none',
                                                                borderRadius: 6,
                                                                fontSize: 11,
                                                                fontWeight: 500,
                                                                cursor: 'pointer',
                                                                whiteSpace: 'nowrap'
                                                            },
                                                            children: action.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                                            lineNumber: 432,
                                                            columnNumber: 23
                                                        }, this),
                                                        o.workflow_status === 'Chờ xác nhận' && canReject && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setConfirmAction({
                                                                    order: o,
                                                                    type: 'reject'
                                                                }),
                                                            style: {
                                                                height: 26,
                                                                padding: '0 10px',
                                                                background: '#fff',
                                                                color: '#791F1F',
                                                                border: '0.5px solid #F09595',
                                                                borderRadius: 6,
                                                                fontSize: 11,
                                                                fontWeight: 500,
                                                                cursor: 'pointer'
                                                            },
                                                            children: "Từ chối"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                                            lineNumber: 441,
                                                            columnNumber: 23
                                                        }, this),
                                                        canCancel && (o.workflow_status === 'Đã xác nhận' || o.workflow_status === 'Đang giao') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setConfirmAction({
                                                                    order: o,
                                                                    type: 'cancel'
                                                                }),
                                                            style: {
                                                                height: 26,
                                                                padding: '0 10px',
                                                                background: '#fff',
                                                                color: '#b91c1c',
                                                                border: '0.5px solid #fca5a5',
                                                                borderRadius: 6,
                                                                fontSize: 11,
                                                                fontWeight: 500,
                                                                cursor: 'pointer'
                                                            },
                                                            children: "Hủy"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                                            lineNumber: 450,
                                                            columnNumber: 23
                                                        }, this),
                                                        role === 'manager' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: 11,
                                                                color: '#aaa',
                                                                fontStyle: 'italic'
                                                            },
                                                            children: "Chỉ xem"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                                            lineNumber: 459,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                                    lineNumber: 429,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, o.id, true, {
                                            fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                            lineNumber: 418,
                                            columnNumber: 17
                                        }, this);
                                    }),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'flex-end',
                                            padding: '8px 12px',
                                            borderTop: '0.5px solid #eee',
                                            gap: 4
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 11,
                                                    color: '#666',
                                                    marginRight: 8
                                                },
                                                children: [
                                                    "Tổng: ",
                                                    filtered.length,
                                                    " đơn"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                                lineNumber: 468,
                                                columnNumber: 15
                                            }, this),
                                            pages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$components$2f$ui$2f$SharedUI$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PgBtn"], {
                                                        disabled: safePage === 1,
                                                        onClick: ()=>setPage(safePage - 1),
                                                        children: "‹"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                                        lineNumber: 470,
                                                        columnNumber: 17
                                                    }, this),
                                                    Array.from({
                                                        length: pages
                                                    }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$components$2f$ui$2f$SharedUI$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PgBtn"], {
                                                            active: i + 1 === safePage,
                                                            onClick: ()=>setPage(i + 1),
                                                            children: i + 1
                                                        }, i, false, {
                                                            fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                                            lineNumber: 472,
                                                            columnNumber: 19
                                                        }, this)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$components$2f$ui$2f$SharedUI$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PgBtn"], {
                                                        disabled: safePage === pages,
                                                        onClick: ()=>setPage(safePage + 1),
                                                        children: "›"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                                        lineNumber: 474,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                        lineNumber: 467,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                lineNumber: 396,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                        lineNumber: 336,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                lineNumber: 300,
                columnNumber: 7
            }, this),
            confirmAction && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    inset: 0,
                    background: 'rgba(0,0,0,0.45)',
                    zIndex: 1000,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: '#fff',
                        borderRadius: 12,
                        padding: '24px 28px',
                        width: 320,
                        boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                        textAlign: 'center'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: 15,
                                fontWeight: 700,
                                color: '#0E176E',
                                marginBottom: 8
                            },
                            children: confirmAction.type === 'reject' ? 'Từ chối đơn hàng?' : 'Hủy đơn hàng?'
                        }, void 0, false, {
                            fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                            lineNumber: 485,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: 13,
                                color: '#555',
                                marginBottom: 20
                            },
                            children: confirmAction.type === 'reject' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Đơn ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: confirmAction.order.id
                                    }, void 0, false, {
                                        fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                        lineNumber: 490,
                                        columnNumber: 25
                                    }, this),
                                    " sẽ bị từ chối do không đủ hàng."
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Đơn ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: confirmAction.order.id
                                    }, void 0, false, {
                                        fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                        lineNumber: 491,
                                        columnNumber: 25
                                    }, this),
                                    " sẽ bị hủy. Không thể hoàn tác!"
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                            lineNumber: 488,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: 10
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setConfirmAction(null),
                                    style: {
                                        flex: 1,
                                        height: 36,
                                        background: '#eee',
                                        border: 'none',
                                        borderRadius: 8,
                                        fontSize: 13,
                                        cursor: 'pointer'
                                    },
                                    children: "Không"
                                }, void 0, false, {
                                    fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                    lineNumber: 495,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>doAction(confirmAction.order.id, confirmAction.type),
                                    disabled: isPending,
                                    style: {
                                        flex: 1,
                                        height: 36,
                                        background: confirmAction.type === 'reject' ? '#791F1F' : '#e53e3e',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: 8,
                                        fontSize: 13,
                                        fontWeight: 600,
                                        cursor: 'pointer'
                                    },
                                    children: isPending ? '...' : confirmAction.type === 'reject' ? 'Từ chối' : 'Hủy đơn'
                                }, void 0, false, {
                                    fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                                    lineNumber: 499,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                            lineNumber: 494,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                    lineNumber: 484,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/presentation/components/order/OrderTable.tsx",
                lineNumber: 483,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s1(OrderTable, "VMBaDrCMkYr/hiq90OFXTew4g54=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"]
    ];
});
_c2 = OrderTable;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "DateDropdown");
__turbopack_context__.k.register(_c1, "SbCard");
__turbopack_context__.k.register(_c2, "OrderTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_e2785844._.js.map