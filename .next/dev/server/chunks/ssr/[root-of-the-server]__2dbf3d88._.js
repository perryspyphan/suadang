module.exports = [
"[project]/src/infrastructure/supabase/server.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createServerClient.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
;
;
async function createClient() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerClient"])(("TURBOPACK compile-time value", "https://srgeakntlgtmdbiaedxb.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNyZ2Vha250bGd0bWRiaWFlZHhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMxNzY3NzYsImV4cCI6MjA4ODc1Mjc3Nn0.BtagwhNq6YkzqfN6n5oCPFrb4Zb-n6iCZMcPmPmoutQ"), {
        cookies: {
            getAll () {
                return cookieStore.getAll();
            },
            setAll (cookiesToSet) {
                try {
                    cookiesToSet.forEach(({ name, value, options })=>cookieStore.set(name, value, options));
                } catch  {
                // Server Component — ignored
                }
            }
        }
    });
}
}),
"[project]/src/infrastructure/supabase/repositories/SupabaseProductRepository.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SupabaseProductRepository",
    ()=>SupabaseProductRepository
]);
// src/infrastructure/supabase/repositories/SupabaseProductRepository.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/infrastructure/supabase/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
;
;
class SupabaseProductRepository {
    // ── Helpers ─────────────────────────────────────────────────
    toEntity(row) {
        return {
            id: row.id,
            code: row.id,
            name: row.name,
            group: row.group,
            type: row.type,
            sell_price: Number(row.sell_price),
            cost_price: Number(row.cost_price),
            stock: Number(row.stock),
            min_stock: Number(row.min_stock ?? 0),
            max_stock: Number(row.max_stock ?? 9999),
            location: row.location ?? null,
            brand: row.brand ?? null,
            supplier_id: row.supplier_id ?? null,
            supplier_name: row.supplier_name ?? null,
            can_sell_direct: row.can_sell_direct ?? true,
            has_points: row.has_points ?? false,
            note: row.note ?? null,
            image_url: row.image_url ?? null,
            expected_order: row.expected_order != null ? Number(row.expected_order) : null,
            created_at: row.created_at
        };
    }
    async genId(supabase) {
        const { data: last } = await supabase.from('products').select('id').order('id', {
            ascending: false
        }).limit(1);
        const nextNum = last?.[0]?.id ? parseInt(last[0].id.replace('SP', ''), 10) + 1 : 1;
        return 'SP' + String(nextNum).padStart(6, '0');
    }
    // ── Read ────────────────────────────────────────────────────
    async getAll(filters) {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        let q = supabase.from('products').select('*').order('id', {
            ascending: true
        });
        if (filters?.search) {
            const s = filters.search;
            q = q.or(`id.ilike.%${s}%,name.ilike.%${s}%`);
        }
        if (filters?.type) q = q.eq('type', filters.type);
        if (filters?.group) q = q.eq('group', filters.group);
        if (filters?.stock_status === 'out_of_stock') q = q.eq('stock', 0);
        if (filters?.stock_status === 'in_stock') q = q.gt('stock', 0);
        // below_min và above_max cần so sánh 2 cột → xử lý client-side bên dưới
        const { data, error } = await q;
        if (error) throw new Error(error.message);
        let rows = (data ?? []).map(this.toEntity);
        // client-side filter for below_min / above_max (cần so sánh 2 cột)
        if (filters?.stock_status === 'below_min') {
            rows = rows.filter((p)=>p.stock < p.min_stock);
        }
        if (filters?.stock_status === 'above_max') {
            rows = rows.filter((p)=>p.stock > p.max_stock);
        }
        return rows;
    }
    async getById(id) {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { data, error } = await supabase.from('products').select('*').eq('id', id).single();
        if (error) return null;
        return this.toEntity(data);
    }
    // ── Mutate ──────────────────────────────────────────────────
    async add(data) {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const id = await this.genId(supabase);
        const { error } = await supabase.from('products').insert({
            id,
            name: data.name,
            group: data.group,
            type: data.type,
            sell_price: data.sell_price,
            cost_price: data.cost_price,
            stock: data.stock,
            min_stock: data.min_stock,
            max_stock: data.max_stock,
            location: data.location ?? null,
            brand: data.brand ?? null,
            supplier_id: data.supplier_id ?? null,
            can_sell_direct: data.can_sell_direct,
            has_points: data.has_points,
            note: data.note ?? null,
            image_url: data.image_url ?? null,
            expected_order: data.expected_order ?? null,
            created_at: new Date().toISOString()
        });
        if (error) throw new Error(error.message);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/hang-hoa');
    }
    async update(id, data) {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { code, ...rest } = data;
        const { error } = await supabase.from('products').update(rest).eq('id', id);
        if (error) throw new Error(error.message);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/hang-hoa');
    }
    async deleteMany(ids) {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { error } = await supabase.from('products').delete().in('id', ids);
        if (error) throw new Error(error.message);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/hang-hoa');
    }
    async findTopSelling() {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { data, error } = await supabase.from('order_items').select('product_id, product_name, quantity, unit').order('quantity', {
            ascending: false
        });
        if (error) throw new Error(error.message);
        const map = new Map();
        for (const row of data ?? []){
            const ex = map.get(row.product_id) ?? {
                name: row.product_name,
                total: 0
            };
            map.set(row.product_id, {
                ...ex,
                total: ex.total + Number(row.quantity)
            });
        }
        return Array.from(map.entries()).map(([id, val])=>({
                product: {
                    id,
                    code: id,
                    name: val.name
                },
                totalSold: val.total
            })).sort((a, b)=>b.totalSold - a.totalSold).slice(0, 5);
    }
}
}),
"[project]/src/infrastructure/supabase/repositories/SupabaseOrderRepository.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SupabaseOrderRepository",
    ()=>SupabaseOrderRepository
]);
// src/infrastructure/supabase/repositories/SupabaseOrderRepository.ts
// Sửa: dùng server client (createClient từ server.ts), không dùng browser client
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/infrastructure/supabase/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
;
;
class SupabaseOrderRepository {
    async findAll() {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { data, error } = await supabase.from('orders').select('*').order('ordered_at', {
            ascending: false
        });
        if (error) throw error;
        return data ?? [];
    }
    async findTodaySummary() {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const { data, error } = await supabase.from('orders').select('total, workflow_status').gte('ordered_at', today.toISOString());
        if (error) throw error;
        const completed = (data ?? []).filter((o)=>o.workflow_status === 'Hoàn thành');
        const totalRevenue = completed.reduce((s, o)=>s + Number(o.total), 0);
        const totalOrders = (data ?? []).length;
        const pendingOrders = (data ?? []).filter((o)=>[
                'Chờ xác nhận',
                'Đã xác nhận',
                'Đang giao'
            ].includes(o.workflow_status)).length;
        return {
            totalRevenue,
            totalOrders,
            pendingOrders
        };
    }
    async findMonthlyRevenue() {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { data, error } = await supabase.from('orders').select('total, ordered_at').eq('workflow_status', 'Hoàn thành').order('ordered_at', {
            ascending: true
        });
        if (error) throw error;
        const map = new Map();
        for (const row of data ?? []){
            const month = new Date(row.ordered_at).toLocaleDateString('vi-VN', {
                month: 'short',
                year: '2-digit'
            });
            map.set(month, (map.get(month) ?? 0) + Number(row.total));
        }
        return Array.from(map.entries()).map(([month, revenue])=>({
                month,
                revenue
            }));
    }
    async findTopSellingProducts() {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { data, error } = await supabase.from('order_items').select('product_name, product_code, quantity');
        if (error) throw error;
        const map = new Map();
        for (const row of data ?? []){
            const existing = map.get(row.product_code) ?? {
                name: row.product_name,
                total: 0
            };
            map.set(row.product_code, {
                ...existing,
                total: existing.total + Number(row.quantity)
            });
        }
        return Array.from(map.entries()).map(([code, val])=>({
                code,
                name: val.name,
                totalSold: val.total
            })).sort((a, b)=>b.totalSold - a.totalSold).slice(0, 5);
    }
    // Lấy danh sách orders đang conflict trên 1 sản phẩm, sắp xếp theo priority
    async findConflictedOrders(productCode) {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { data, error } = await supabase.rpc('get_conflicted_orders', {
            p_product_code: productCode
        });
        if (error) throw new Error(error.message);
        return data ?? [];
    }
    // Resolve conflict: xác nhận đơn cao priority, hủy/pending đơn còn lại
    async resolveConflict(conflictId, resolution) {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        // Cập nhật conflict record
        await supabase.from('order_conflicts').update({
            status: 'resolved',
            resolution: 'confirmed_high',
            handled_by: resolution.handledBy,
            note: resolution.note ?? null,
            resolved_at: new Date().toISOString(),
            resolved_by_priority: true
        }).eq('id', conflictId);
        // Xác nhận đơn được ưu tiên
        await supabase.from('orders').update({
            workflow_status: 'Đã xác nhận'
        }).eq('id', resolution.confirmOrderId);
        // Hủy các đơn thấp hơn
        if (resolution.cancelOrderIds.length > 0) {
            await supabase.from('orders').update({
                workflow_status: 'Đã hủy'
            }).in('id', resolution.cancelOrderIds);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/giao-dich/dat-hang/khach-hang');
    }
}
}),
"[project]/src/domain/value-objects/CustomerTier.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/domain/value-objects/CustomerTier.ts
// Single source of truth – XOÁ Customer-tier.ts sau khi dùng file này
// Ngưỡng hạng phù hợp với đơn online nhỏ
__turbopack_context__.s([
    "TIER_RANK",
    ()=>TIER_RANK,
    "TIER_THRESHOLDS",
    ()=>TIER_THRESHOLDS,
    "calcPriorityScore",
    ()=>calcPriorityScore,
    "calcTier",
    ()=>calcTier,
    "shouldUpgrade",
    ()=>shouldUpgrade
]);
const TIER_THRESHOLDS = {
    Vàng: 2_000_000,
    Bạc: 500_000
};
const TIER_RANK = {
    Đồng: 0,
    Bạc: 1,
    Vàng: 2
};
function calcTier(total) {
    if (total >= TIER_THRESHOLDS.Vàng) return 'Vàng';
    if (total >= TIER_THRESHOLDS.Bạc) return 'Bạc';
    return 'Đồng';
}
function shouldUpgrade(current, next) {
    return TIER_RANK[next] > TIER_RANK[current];
}
function calcPriorityScore(tier, orderedAt) {
    const tierRank = TIER_RANK[tier];
    // Đảo timestamp: đặt sớm hơn → số nhỏ hơn → cần đảo
    const tsInverse = 9999999999 - Math.floor(orderedAt.getTime() / 1000);
    return tierRank * 10_000_000 + tsInverse;
}
}),
"[project]/src/infrastructure/supabase/repositories/SupabaseCustomerRepository.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SupabaseCustomerRepository",
    ()=>SupabaseCustomerRepository
]);
// src/infrastructure/supabase/repositories/SupabaseCustomerRepository.ts
// XOÁ customer-repository.impl.ts sau khi dùng file này
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/infrastructure/supabase/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$domain$2f$value$2d$objects$2f$CustomerTier$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/domain/value-objects/CustomerTier.ts [app-rsc] (ecmascript)");
;
;
;
class SupabaseCustomerRepository {
    async getAll(filters) {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        let q = supabase.from('customers').select('*').order('id');
        if (filters?.tier) q = q.eq('tier', filters.tier);
        if (filters?.minTotal) q = q.gte('total', filters.minTotal);
        if (filters?.maxTotal) q = q.lte('total', filters.maxTotal);
        if (filters?.dateFrom) q = q.gte('created_at', filters.dateFrom);
        if (filters?.dateTo) q = q.lte('created_at', filters.dateTo);
        if (filters?.search) {
            const s = filters.search;
            q = q.or(`id.ilike.%${s}%,name.ilike.%${s}%,phone.ilike.%${s}%`);
        }
        const { data, error } = await q;
        if (error) throw new Error(error.message);
        return data ?? [];
    }
    async getOrdersByCustomer(customerId) {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { data, error } = await supabase.from('orders').select('*').eq('customer_id', customerId).order('ordered_at', {
            ascending: false
        });
        if (error) throw new Error(error.message);
        return data ?? [];
    }
    async getOrderWithItems(orderId) {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { data, error } = await supabase.from('orders').select('*, order_items(*)').eq('id', orderId).single();
        if (error) throw new Error(error.message);
        return data;
    }
    async add(form) {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        // Sinh ID dạng KH001 – race condition thấp với quy mô nhỏ
        const { data: last } = await supabase.from('customers').select('id').order('id', {
            ascending: false
        }).limit(1);
        const nextNum = last?.[0]?.id ? parseInt(last[0].id.replace('KH', ''), 10) + 1 : 1;
        const id = 'KH' + String(nextNum).padStart(3, '0');
        const { error } = await supabase.from('customers').insert({
            id,
            name: form.name,
            phone: form.phone || null,
            email: form.email || null,
            tier: form.tier,
            total: 0,
            created_at: new Date().toISOString().split('T')[0]
        });
        if (error) throw new Error(error.message);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/khach-hang');
    }
    async update(id, form) {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { error } = await supabase.from('customers').update({
            name: form.name,
            phone: form.phone,
            email: form.email,
            tier: form.tier
        }).eq('id', id);
        if (error) throw new Error(error.message);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/khach-hang');
    }
    async deleteMany(ids) {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { error } = await supabase.from('customers').delete().in('id', ids);
        if (error) throw new Error(error.message);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/khach-hang');
    }
    // Dùng khi cần force sync tier (tier thường do DB trigger tự cập nhật)
    async syncTier(customerId) {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { data: c } = await supabase.from('customers').select('total, tier').eq('id', customerId).single();
        if (!c) return;
        const newTier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$domain$2f$value$2d$objects$2f$CustomerTier$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calcTier"])(c.total);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$domain$2f$value$2d$objects$2f$CustomerTier$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["shouldUpgrade"])(c.tier, newTier)) {
            await supabase.from('customers').update({
                tier: newTier
            }).eq('id', customerId);
        }
    }
}
}),
"[project]/src/infrastructure/supabase/repositories/SupabaseDistributorRepository.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SupabaseDistributorRepository",
    ()=>SupabaseDistributorRepository
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/infrastructure/supabase/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
;
;
class SupabaseDistributorRepository {
    async getAll(filters) {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        let q = supabase.from('distributors').select('*').order('id');
        if (filters?.group) q = q.eq('group', filters.group);
        if (filters?.status) q = q.eq('status', filters.status);
        if (filters?.minTotal) q = q.gte('total_buy', filters.minTotal);
        if (filters?.maxTotal) q = q.lte('total_buy', filters.maxTotal);
        if (filters?.minDebt) q = q.gte('debt', filters.minDebt);
        if (filters?.maxDebt) q = q.lte('debt', filters.maxDebt);
        if (filters?.dateFrom) q = q.gte('created_at', filters.dateFrom);
        if (filters?.dateTo) q = q.lte('created_at', filters.dateTo);
        if (filters?.search) {
            const s = filters.search;
            q = q.or(`id.ilike.%${s}%,name.ilike.%${s}%,phone.ilike.%${s}%,email.ilike.%${s}%`);
        }
        const { data, error } = await q;
        if (error) throw new Error(error.message);
        return data ?? [];
    }
    async getOrdersByDistributor(distributorId) {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { data, error } = await supabase.from('distributor_orders').select('*').eq('distributor_id', distributorId).order('ordered_at', {
            ascending: false
        });
        if (error) throw new Error(error.message);
        return data ?? [];
    }
    async add(form) {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { data: all } = await supabase.from('distributors').select('id').order('id', {
            ascending: false
        }).limit(1);
        let nextNum = 1;
        if (all && all.length > 0) nextNum = parseInt(all[0].id.replace('NPP', ''), 10) + 1;
        const id = 'NPP' + String(nextNum).padStart(3, '0');
        const { error } = await supabase.from('distributors').insert({
            id,
            name: form.name,
            phone: form.phone || null,
            email: form.email || null,
            address: form.address || null,
            tax_code: form.tax_code || null,
            group: form.group,
            total_buy: 0,
            debt: 0,
            status: 'Đã thanh toán',
            created_at: new Date().toISOString().split('T')[0]
        });
        if (error) throw new Error(error.message);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/nha-phan-phoi');
    }
    async update(id, form) {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { error } = await supabase.from('distributors').update({
            name: form.name,
            phone: form.phone,
            email: form.email,
            address: form.address,
            tax_code: form.tax_code,
            group: form.group
        }).eq('id', id);
        if (error) throw new Error(error.message);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/nha-phan-phoi');
    }
    async deleteMany(ids) {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { error } = await supabase.from('distributors').delete().in('id', ids);
        if (error) throw new Error(error.message);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/nha-phan-phoi');
    }
}
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/src/infrastructure/supabase/repositories/SupabaseStaffRepository.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SupabaseStaffRepository",
    ()=>SupabaseStaffRepository
]);
// src/infrastructure/supabase/repositories/SupabaseStaffRepository.ts
// Sửa: PIN hash dùng bcrypt thay vì plain text compare
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/infrastructure/supabase/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-rsc] (ecmascript)");
;
;
;
class SupabaseStaffRepository {
    // ── EMPLOYEES ────────────────────────────────────────────────
    async getEmployees(search) {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        let q = supabase.schema('nhan_su').from('employees').select('*').order('id');
        if (search) q = q.or(`id.ilike.%${search}%,name.ilike.%${search}%,phone.ilike.%${search}%`);
        const { data, error } = await q;
        if (error) throw new Error(error.message);
        return data ?? [];
    }
    async addEmployee(form) {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { data: all } = await supabase.schema('nhan_su').from('employees').select('id').order('id', {
            ascending: false
        }).limit(1);
        const nextNum = all?.[0]?.id ? parseInt(all[0].id.replace('NV', ''), 10) + 1 : 1;
        const id = 'NV' + String(nextNum).padStart(3, '0');
        const { error } = await supabase.schema('nhan_su').from('employees').insert({
            id,
            name: form.name,
            phone: form.phone || null,
            birthday: form.birthday || null,
            position: form.position || null,
            created_at: new Date().toISOString().split('T')[0]
        });
        if (error) throw new Error(error.message);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/nhan-vien');
    }
    async updateEmployee(id, form) {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { error } = await supabase.schema('nhan_su').from('employees').update({
            name: form.name,
            phone: form.phone || null,
            birthday: form.birthday || null,
            position: form.position || null
        }).eq('id', id);
        if (error) throw new Error(error.message);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/nhan-vien');
    }
    async deleteEmployees(ids) {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { error } = await supabase.schema('nhan_su').from('employees').delete().in('id', ids);
        if (error) throw new Error(error.message);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/nhan-vien');
    }
    // ── ACCOUNTS ─────────────────────────────────────────────────
    async getAccounts(search) {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        let q = supabase.schema('nhan_su').from('accounts').select('*').order('id');
        if (search) q = q.or(`id.ilike.%${search}%,name.ilike.%${search}%,email.ilike.%${search}%`);
        const { data, error } = await q;
        if (error) throw new Error(error.message);
        const accounts = data ?? [];
        const empIds = accounts.map((a)=>a.employee_id).filter(Boolean);
        if (empIds.length > 0) {
            const { data: emps } = await supabase.schema('nhan_su').from('employees').select('id, name').in('id', empIds);
            const empMap = Object.fromEntries((emps ?? []).map((e)=>[
                    e.id,
                    e.name
                ]));
            return accounts.map((a)=>({
                    ...a,
                    employee_name: a.employee_id ? empMap[a.employee_id] || null : null
                }));
        }
        return accounts;
    }
    async addAccount(form) {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { data: all } = await supabase.schema('nhan_su').from('accounts').select('id').order('id', {
            ascending: false
        }).limit(1);
        const nextNum = all?.[0]?.id ? parseInt(all[0].id.replace('ACC', ''), 10) + 1 : 1;
        const id = 'ACC' + String(nextNum).padStart(3, '0');
        const { error } = await supabase.schema('nhan_su').from('accounts').insert({
            id,
            name: form.name,
            email: form.email,
            role: form.role,
            employee_id: form.employee_id || null,
            created_at: new Date().toISOString().split('T')[0]
        });
        if (error) throw new Error(error.message);
        if (form.employee_id) {
            await supabase.schema('nhan_su').from('employees').update({
                account_id: id
            }).eq('id', form.employee_id);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/tai-khoan');
    }
    async updateAccount(id, form) {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { error } = await supabase.schema('nhan_su').from('accounts').update({
            name: form.name,
            email: form.email,
            role: form.role
        }).eq('id', id);
        if (error) throw new Error(error.message);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/tai-khoan');
    }
    async deleteAccounts(ids) {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { error } = await supabase.schema('nhan_su').from('accounts').delete().in('id', ids);
        if (error) throw new Error(error.message);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/tai-khoan');
    }
    // ── PIN (bcrypt) ──────────────────────────────────────────────
    async verifyPin(accountId, pin) {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { data } = await supabase.schema('nhan_su').from('accounts').select('pin_hash').eq('id', accountId).single();
        if (!data?.pin_hash) return false;
        // So sánh bằng bcrypt (an toàn hơn plain text)
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].compare(pin, data.pin_hash);
    }
    async updatePin(accountId, pin) {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        // Hash PIN trước khi lưu (salt rounds = 10)
        const pin_hash = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].hash(pin, 10);
        const { error } = await supabase.schema('nhan_su').from('accounts').update({
            pin_hash
        }).eq('id', accountId);
        if (error) throw new Error(error.message);
    }
}
}),
"[project]/src/infrastructure/supabase/repositories/SupabaseCashbookRepository.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SupabaseLoaiThuChiRepository",
    ()=>SupabaseLoaiThuChiRepository,
    "SupabasePhieuThuChiRepository",
    ()=>SupabasePhieuThuChiRepository,
    "SupabaseTaiKhoanQuyRepository",
    ()=>SupabaseTaiKhoanQuyRepository
]);
// src/infrastructure/supabase/repositories/SupabaseCashbookRepository.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/infrastructure/supabase/server.ts [app-rsc] (ecmascript)");
;
class SupabasePhieuThuChiRepository {
    async findAll(filter) {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { tai_khoan_quy_id, kieu, trang_thai, tu_ngay, den_ngay, tu_khoa, loai_thu_chi_id, page = 1, page_size = 20 } = filter;
        let q = supabase.from('cashbook_phieu').select('*, loai_thu_chi:cashbook_loai(id,ten,kieu,hach_toan_kd), tai_khoan_quy:cashbook_tai_khoan(id,ten_tai_khoan,loai)', {
            count: 'exact'
        }).order('thoi_gian', {
            ascending: false
        });
        if (tai_khoan_quy_id) q = q.eq('tai_khoan_quy_id', tai_khoan_quy_id);
        if (kieu) q = q.eq('kieu', kieu);
        if (trang_thai) q = q.eq('trang_thai', trang_thai);
        if (tu_ngay) q = q.gte('thoi_gian', tu_ngay);
        if (den_ngay) q = q.lte('thoi_gian', den_ngay);
        if (loai_thu_chi_id) q = q.eq('loai_thu_chi_id', loai_thu_chi_id);
        if (tu_khoa) {
            q = q.or(`ma_phieu.ilike.%${tu_khoa}%,ten_doi_tuong.ilike.%${tu_khoa}%,ghi_chu.ilike.%${tu_khoa}%`);
        }
        const from = (page - 1) * page_size;
        q = q.range(from, from + page_size - 1);
        const { data, error, count } = await q;
        if (error) throw new Error(error.message);
        return {
            data: data ?? [],
            total: count ?? 0,
            page,
            page_size
        };
    }
    async findById(id) {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { data, error } = await supabase.from('cashbook_phieu').select('*, loai_thu_chi:cashbook_loai(*), tai_khoan_quy:cashbook_tai_khoan(*)').eq('id', id).single();
        if (error) return null;
        return data;
    }
    async create(payload) {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { data, error } = await supabase.from('cashbook_phieu').insert(payload).select().single();
        if (error) throw new Error(error.message);
        return data;
    }
    async update(id, payload) {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { data, error } = await supabase.from('cashbook_phieu').update({
            ...payload,
            updated_at: new Date().toISOString()
        }).eq('id', id).select().single();
        if (error) throw new Error(error.message);
        return data;
    }
    async huy(id) {
        return this.update(id, {
            trang_thai: 'da_huy'
        });
    }
    async genMaPhieu(prefix) {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { count } = await supabase.from('cashbook_phieu').select('*', {
            count: 'exact',
            head: true
        }).like('ma_phieu', `${prefix}%`);
        const seq = (count ?? 0) + 1;
        return `${prefix}${String(seq).padStart(6, '0')}`;
    }
}
class SupabaseLoaiThuChiRepository {
    async findAll(kieu) {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        let q = supabase.from('cashbook_loai').select('*').order('la_he_thong', {
            ascending: false
        }).order('ten');
        if (kieu) q = q.eq('kieu', kieu);
        const { data, error } = await q;
        if (error) throw new Error(error.message);
        return data ?? [];
    }
    async create(payload) {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { data, error } = await supabase.from('cashbook_loai').insert({
            ...payload,
            la_he_thong: false
        }).select().single();
        if (error) throw new Error(error.message);
        return data;
    }
    async delete(id) {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { error } = await supabase.from('cashbook_loai').delete().eq('id', id).eq('la_he_thong', false);
        if (error) throw new Error(error.message);
    }
}
class SupabaseTaiKhoanQuyRepository {
    async findAll() {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { data, error } = await supabase.from('cashbook_tai_khoan').select('*').order('la_mac_dinh', {
            ascending: false
        });
        if (error) throw new Error(error.message);
        return data ?? [];
    }
    async findById(id) {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { data, error } = await supabase.from('cashbook_tai_khoan').select('*').eq('id', id).single();
        if (error) return null;
        return data;
    }
    async create(payload) {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { data, error } = await supabase.from('cashbook_tai_khoan').insert(payload).select().single();
        if (error) throw new Error(error.message);
        return data;
    }
    async update(id, payload) {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { data, error } = await supabase.from('cashbook_tai_khoan').update(payload).eq('id', id).select().single();
        if (error) throw new Error(error.message);
        return data;
    }
    async delete(id) {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { error } = await supabase.from('cashbook_tai_khoan').delete().eq('id', id);
        if (error) throw new Error(error.message);
    }
    async getTongQuy() {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { data, error } = await supabase.from('v_cashbook_tong_quy').select('*');
        if (error) throw new Error(error.message);
        return data ?? [];
    }
}
}),
"[project]/src/infrastructure/container/DIContainer.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCustomerRepository",
    ()=>getCustomerRepository,
    "getDistributorRepository",
    ()=>getDistributorRepository,
    "getLoaiThuChiRepository",
    ()=>getLoaiThuChiRepository,
    "getOrderRepository",
    ()=>getOrderRepository,
    "getPhieuThuChiRepository",
    ()=>getPhieuThuChiRepository,
    "getProductRepository",
    ()=>getProductRepository,
    "getStaffRepository",
    ()=>getStaffRepository,
    "getTaiKhoanQuyRepository",
    ()=>getTaiKhoanQuyRepository
]);
// src/infrastructure/container/DIContainer.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$repositories$2f$SupabaseProductRepository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/infrastructure/supabase/repositories/SupabaseProductRepository.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$repositories$2f$SupabaseOrderRepository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/infrastructure/supabase/repositories/SupabaseOrderRepository.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$repositories$2f$SupabaseCustomerRepository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/infrastructure/supabase/repositories/SupabaseCustomerRepository.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$repositories$2f$SupabaseDistributorRepository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/infrastructure/supabase/repositories/SupabaseDistributorRepository.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$repositories$2f$SupabaseStaffRepository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/infrastructure/supabase/repositories/SupabaseStaffRepository.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$repositories$2f$SupabaseCashbookRepository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/infrastructure/supabase/repositories/SupabaseCashbookRepository.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
// ── Lazy singletons ────────────────────────────────────────────
let customerRepo = null;
let distributorRepo = null;
let staffRepo = null;
let orderRepo = null;
let productRepo = null;
let phieuRepo = null;
let loaiRepo = null;
let taiKhoanRepo = null;
function getCustomerRepository() {
    if (!customerRepo) customerRepo = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$repositories$2f$SupabaseCustomerRepository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SupabaseCustomerRepository"]();
    return customerRepo;
}
function getDistributorRepository() {
    if (!distributorRepo) distributorRepo = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$repositories$2f$SupabaseDistributorRepository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SupabaseDistributorRepository"]();
    return distributorRepo;
}
function getStaffRepository() {
    if (!staffRepo) staffRepo = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$repositories$2f$SupabaseStaffRepository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SupabaseStaffRepository"]();
    return staffRepo;
}
function getOrderRepository() {
    if (!orderRepo) orderRepo = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$repositories$2f$SupabaseOrderRepository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SupabaseOrderRepository"]();
    return orderRepo;
}
function getProductRepository() {
    if (!productRepo) productRepo = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$repositories$2f$SupabaseProductRepository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SupabaseProductRepository"]();
    return productRepo;
}
function getPhieuThuChiRepository() {
    if (!phieuRepo) phieuRepo = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$repositories$2f$SupabaseCashbookRepository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SupabasePhieuThuChiRepository"]();
    return phieuRepo;
}
function getLoaiThuChiRepository() {
    if (!loaiRepo) loaiRepo = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$repositories$2f$SupabaseCashbookRepository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SupabaseLoaiThuChiRepository"]();
    return loaiRepo;
}
function getTaiKhoanQuyRepository() {
    if (!taiKhoanRepo) taiKhoanRepo = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$supabase$2f$repositories$2f$SupabaseCashbookRepository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SupabaseTaiKhoanQuyRepository"]();
    return taiKhoanRepo;
}
}),
"[project]/src/application/use-cases/staff/StaffUseCases.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"400ce58dd1d1ca07c310b33eddc99652e338b63871":"addEmployeeUseCase","405c294d1f1fe2ebbd1230ffc4d4067171ee17ee53":"getEmployeesUseCase","40630100e70cdfd83491dc130ef14a71febf85262a":"addAccountUseCase","4087f8768424352e8abb70dd20c5f341f87e077fcf":"deleteEmployeesUseCase","40b678ec791937d27e385ae4742fc557a62a3a9a0a":"getAccountsUseCase","40e0c511393c7e65465606ad7794b6d475deccf157":"deleteAccountsUseCase","60679fac2f8bfa38c75ff91023d20bc528940363fd":"updatePinUseCase","607b78480865ccc64b64779431523d9bd741bdb1cc":"updateAccountUseCase","608166755d95c29e444277b7118d28b3eed0ab292e":"updateEmployeeUseCase","60f0c414ee475968eee5faeaec7f6facfc250438af":"verifyPinUseCase"},"",""] */ __turbopack_context__.s([
    "addAccountUseCase",
    ()=>addAccountUseCase,
    "addEmployeeUseCase",
    ()=>addEmployeeUseCase,
    "deleteAccountsUseCase",
    ()=>deleteAccountsUseCase,
    "deleteEmployeesUseCase",
    ()=>deleteEmployeesUseCase,
    "getAccountsUseCase",
    ()=>getAccountsUseCase,
    "getEmployeesUseCase",
    ()=>getEmployeesUseCase,
    "updateAccountUseCase",
    ()=>updateAccountUseCase,
    "updateEmployeeUseCase",
    ()=>updateEmployeeUseCase,
    "updatePinUseCase",
    ()=>updatePinUseCase,
    "verifyPinUseCase",
    ()=>verifyPinUseCase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$container$2f$DIContainer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/infrastructure/container/DIContainer.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
async function getEmployeesUseCase(search) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$container$2f$DIContainer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStaffRepository"])().getEmployees(search);
}
async function addEmployeeUseCase(form) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$container$2f$DIContainer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStaffRepository"])().addEmployee(form);
}
async function updateEmployeeUseCase(id, form) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$container$2f$DIContainer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStaffRepository"])().updateEmployee(id, form);
}
async function deleteEmployeesUseCase(ids) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$container$2f$DIContainer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStaffRepository"])().deleteEmployees(ids);
}
async function getAccountsUseCase(search) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$container$2f$DIContainer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStaffRepository"])().getAccounts(search);
}
async function addAccountUseCase(form) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$container$2f$DIContainer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStaffRepository"])().addAccount(form);
}
async function updateAccountUseCase(id, form) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$container$2f$DIContainer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStaffRepository"])().updateAccount(id, form);
}
async function deleteAccountsUseCase(ids) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$container$2f$DIContainer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStaffRepository"])().deleteAccounts(ids);
}
async function verifyPinUseCase(accountId, pin) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$container$2f$DIContainer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStaffRepository"])().verifyPin(accountId, pin);
}
async function updatePinUseCase(accountId, pinHash) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$container$2f$DIContainer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStaffRepository"])().updatePin(accountId, pinHash);
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getEmployeesUseCase,
    addEmployeeUseCase,
    updateEmployeeUseCase,
    deleteEmployeesUseCase,
    getAccountsUseCase,
    addAccountUseCase,
    updateAccountUseCase,
    deleteAccountsUseCase,
    verifyPinUseCase,
    updatePinUseCase
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEmployeesUseCase, "405c294d1f1fe2ebbd1230ffc4d4067171ee17ee53", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addEmployeeUseCase, "400ce58dd1d1ca07c310b33eddc99652e338b63871", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateEmployeeUseCase, "608166755d95c29e444277b7118d28b3eed0ab292e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteEmployeesUseCase, "4087f8768424352e8abb70dd20c5f341f87e077fcf", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAccountsUseCase, "40b678ec791937d27e385ae4742fc557a62a3a9a0a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addAccountUseCase, "40630100e70cdfd83491dc130ef14a71febf85262a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateAccountUseCase, "607b78480865ccc64b64779431523d9bd741bdb1cc", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteAccountsUseCase, "40e0c511393c7e65465606ad7794b6d475deccf157", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(verifyPinUseCase, "60f0c414ee475968eee5faeaec7f6facfc250438af", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updatePinUseCase, "60679fac2f8bfa38c75ff91023d20bc528940363fd", null);
}),
"[project]/.next-internal/server/app/(admin)/nhan-vien/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/application/use-cases/staff/StaffUseCases.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$application$2f$use$2d$cases$2f$staff$2f$StaffUseCases$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/application/use-cases/staff/StaffUseCases.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/.next-internal/server/app/(admin)/nhan-vien/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/application/use-cases/staff/StaffUseCases.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "400ce58dd1d1ca07c310b33eddc99652e338b63871",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$application$2f$use$2d$cases$2f$staff$2f$StaffUseCases$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addEmployeeUseCase"],
    "405c294d1f1fe2ebbd1230ffc4d4067171ee17ee53",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$application$2f$use$2d$cases$2f$staff$2f$StaffUseCases$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEmployeesUseCase"],
    "40630100e70cdfd83491dc130ef14a71febf85262a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$application$2f$use$2d$cases$2f$staff$2f$StaffUseCases$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addAccountUseCase"],
    "4087f8768424352e8abb70dd20c5f341f87e077fcf",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$application$2f$use$2d$cases$2f$staff$2f$StaffUseCases$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteEmployeesUseCase"],
    "40b678ec791937d27e385ae4742fc557a62a3a9a0a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$application$2f$use$2d$cases$2f$staff$2f$StaffUseCases$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAccountsUseCase"],
    "40e0c511393c7e65465606ad7794b6d475deccf157",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$application$2f$use$2d$cases$2f$staff$2f$StaffUseCases$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteAccountsUseCase"],
    "60679fac2f8bfa38c75ff91023d20bc528940363fd",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$application$2f$use$2d$cases$2f$staff$2f$StaffUseCases$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updatePinUseCase"],
    "607b78480865ccc64b64779431523d9bd741bdb1cc",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$application$2f$use$2d$cases$2f$staff$2f$StaffUseCases$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateAccountUseCase"],
    "608166755d95c29e444277b7118d28b3eed0ab292e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$application$2f$use$2d$cases$2f$staff$2f$StaffUseCases$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateEmployeeUseCase"],
    "60f0c414ee475968eee5faeaec7f6facfc250438af",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$application$2f$use$2d$cases$2f$staff$2f$StaffUseCases$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyPinUseCase"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$admin$292f$nhan$2d$vien$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$application$2f$use$2d$cases$2f$staff$2f$StaffUseCases$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(admin)/nhan-vien/page/actions.js { ACTIONS_MODULE0 => "[project]/src/application/use-cases/staff/StaffUseCases.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$application$2f$use$2d$cases$2f$staff$2f$StaffUseCases$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/application/use-cases/staff/StaffUseCases.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2dbf3d88._.js.map