module.exports = [
"[project]/src/application/use-cases/customer/data:2c80ac [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getOrdersByCustomerUseCase",
    ()=>$$RSC_SERVER_ACTION_1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40abc9c3283ae5b70a246c9343f217703605ba7171":"getOrdersByCustomerUseCase"},"src/application/use-cases/customer/CustomerUsecase.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40abc9c3283ae5b70a246c9343f217703605ba7171", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getOrdersByCustomerUseCase");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vQ3VzdG9tZXJVc2VjYXNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9hcHBsaWNhdGlvbi91c2UtY2FzZXMvY3VzdG9tZXIvQ3VzdG9tZXJVc2VDYXNlcy50c1xuLy8gR+G7mXAgR2V0Q3VzdG9tZXJzVXNlQ2FzZSArIEdldE9yZGVyc1VzZUNhc2UgKyBNdXRhdGVDdXN0b21lclVzZUNhc2UgdsOgbyAxIGZpbGVcbi8vIFhPw4EgMyBmaWxlIGPFqSBzYXUga2hpIGTDuW5nIGZpbGUgbsOgeVxuXG4ndXNlIHNlcnZlcidcblxuaW1wb3J0IHsgZ2V0Q3VzdG9tZXJSZXBvc2l0b3J5IH0gZnJvbSAnQC9pbmZyYXN0cnVjdHVyZS9jb250YWluZXIvRElDb250YWluZXInXG5pbXBvcnQgdHlwZSB7IEFkZEN1c3RvbWVyRFRPLCBVcGRhdGVDdXN0b21lckRUTywgQ3VzdG9tZXJGaWx0ZXJzRFRPIH0gZnJvbSAnQC9hcHBsaWNhdGlvbi9kdG8vQ3VzdG9tZXJEVE8nXG5cbi8vIOKUgOKUgCBSZWFkIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEN1c3RvbWVyc1VzZUNhc2UoZmlsdGVycz86IEN1c3RvbWVyRmlsdGVyc0RUTykge1xuICByZXR1cm4gZ2V0Q3VzdG9tZXJSZXBvc2l0b3J5KCkuZ2V0QWxsKGZpbHRlcnMpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRPcmRlcnNCeUN1c3RvbWVyVXNlQ2FzZShjdXN0b21lcklkOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGdldEN1c3RvbWVyUmVwb3NpdG9yeSgpLmdldE9yZGVyc0J5Q3VzdG9tZXIoY3VzdG9tZXJJZClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE9yZGVyV2l0aEl0ZW1zVXNlQ2FzZShvcmRlcklkOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGdldEN1c3RvbWVyUmVwb3NpdG9yeSgpLmdldE9yZGVyV2l0aEl0ZW1zKG9yZGVySWQpXG59XG5cbi8vIOKUgOKUgCBNdXRhdGUg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkQ3VzdG9tZXJVc2VDYXNlKGZvcm06IEFkZEN1c3RvbWVyRFRPKSB7XG4gIGlmICghZm9ybS5uYW1lPy50cmltKCkpIHRocm93IG5ldyBFcnJvcignVMOqbiBraMO0bmcgxJHGsOG7o2MgcuG7l25nJylcbiAgcmV0dXJuIGdldEN1c3RvbWVyUmVwb3NpdG9yeSgpLmFkZChmb3JtKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ3VzdG9tZXJVc2VDYXNlKGlkOiBzdHJpbmcsIGZvcm06IFVwZGF0ZUN1c3RvbWVyRFRPKSB7XG4gIGlmICghZm9ybS5uYW1lPy50cmltKCkpIHRocm93IG5ldyBFcnJvcignVMOqbiBraMO0bmcgxJHGsOG7o2MgcuG7l25nJylcbiAgcmV0dXJuIGdldEN1c3RvbWVyUmVwb3NpdG9yeSgpLnVwZGF0ZShpZCwgZm9ybSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUN1c3RvbWVyc1VzZUNhc2UoaWRzOiBzdHJpbmdbXSkge1xuICBpZiAoaWRzLmxlbmd0aCA9PT0gMCkgdGhyb3cgbmV3IEVycm9yKCdDaMawYSBjaOG7jW4ga2jDoWNoIGjDoG5nJylcbiAgcmV0dXJuIGdldEN1c3RvbWVyUmVwb3NpdG9yeSgpLmRlbGV0ZU1hbnkoaWRzKVxufVxuXG4vLyBTeW5jIHRpZXIgdGjhu6cgY8O0bmcgKHRoxrDhu51uZyBEQiB0cmlnZ2VyIHThu7EgbG8pXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3luY0N1c3RvbWVyVGllclVzZUNhc2UoY3VzdG9tZXJJZDogc3RyaW5nKSB7XG4gIHJldHVybiBnZXRDdXN0b21lclJlcG9zaXRvcnkoKS5zeW5jVGllcihjdXN0b21lcklkKVxufSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoib1VBY3NCLHVNQUFBIn0=
}),
"[project]/src/application/use-cases/customer/data:d0a49d [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getOrderWithItemsUseCase",
    ()=>$$RSC_SERVER_ACTION_2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40e88be8383d3f63acafb899001aed90e0e8b868a8":"getOrderWithItemsUseCase"},"src/application/use-cases/customer/CustomerUsecase.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40e88be8383d3f63acafb899001aed90e0e8b868a8", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getOrderWithItemsUseCase");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vQ3VzdG9tZXJVc2VjYXNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9hcHBsaWNhdGlvbi91c2UtY2FzZXMvY3VzdG9tZXIvQ3VzdG9tZXJVc2VDYXNlcy50c1xuLy8gR+G7mXAgR2V0Q3VzdG9tZXJzVXNlQ2FzZSArIEdldE9yZGVyc1VzZUNhc2UgKyBNdXRhdGVDdXN0b21lclVzZUNhc2UgdsOgbyAxIGZpbGVcbi8vIFhPw4EgMyBmaWxlIGPFqSBzYXUga2hpIGTDuW5nIGZpbGUgbsOgeVxuXG4ndXNlIHNlcnZlcidcblxuaW1wb3J0IHsgZ2V0Q3VzdG9tZXJSZXBvc2l0b3J5IH0gZnJvbSAnQC9pbmZyYXN0cnVjdHVyZS9jb250YWluZXIvRElDb250YWluZXInXG5pbXBvcnQgdHlwZSB7IEFkZEN1c3RvbWVyRFRPLCBVcGRhdGVDdXN0b21lckRUTywgQ3VzdG9tZXJGaWx0ZXJzRFRPIH0gZnJvbSAnQC9hcHBsaWNhdGlvbi9kdG8vQ3VzdG9tZXJEVE8nXG5cbi8vIOKUgOKUgCBSZWFkIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEN1c3RvbWVyc1VzZUNhc2UoZmlsdGVycz86IEN1c3RvbWVyRmlsdGVyc0RUTykge1xuICByZXR1cm4gZ2V0Q3VzdG9tZXJSZXBvc2l0b3J5KCkuZ2V0QWxsKGZpbHRlcnMpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRPcmRlcnNCeUN1c3RvbWVyVXNlQ2FzZShjdXN0b21lcklkOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGdldEN1c3RvbWVyUmVwb3NpdG9yeSgpLmdldE9yZGVyc0J5Q3VzdG9tZXIoY3VzdG9tZXJJZClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE9yZGVyV2l0aEl0ZW1zVXNlQ2FzZShvcmRlcklkOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGdldEN1c3RvbWVyUmVwb3NpdG9yeSgpLmdldE9yZGVyV2l0aEl0ZW1zKG9yZGVySWQpXG59XG5cbi8vIOKUgOKUgCBNdXRhdGUg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkQ3VzdG9tZXJVc2VDYXNlKGZvcm06IEFkZEN1c3RvbWVyRFRPKSB7XG4gIGlmICghZm9ybS5uYW1lPy50cmltKCkpIHRocm93IG5ldyBFcnJvcignVMOqbiBraMO0bmcgxJHGsOG7o2MgcuG7l25nJylcbiAgcmV0dXJuIGdldEN1c3RvbWVyUmVwb3NpdG9yeSgpLmFkZChmb3JtKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ3VzdG9tZXJVc2VDYXNlKGlkOiBzdHJpbmcsIGZvcm06IFVwZGF0ZUN1c3RvbWVyRFRPKSB7XG4gIGlmICghZm9ybS5uYW1lPy50cmltKCkpIHRocm93IG5ldyBFcnJvcignVMOqbiBraMO0bmcgxJHGsOG7o2MgcuG7l25nJylcbiAgcmV0dXJuIGdldEN1c3RvbWVyUmVwb3NpdG9yeSgpLnVwZGF0ZShpZCwgZm9ybSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUN1c3RvbWVyc1VzZUNhc2UoaWRzOiBzdHJpbmdbXSkge1xuICBpZiAoaWRzLmxlbmd0aCA9PT0gMCkgdGhyb3cgbmV3IEVycm9yKCdDaMawYSBjaOG7jW4ga2jDoWNoIGjDoG5nJylcbiAgcmV0dXJuIGdldEN1c3RvbWVyUmVwb3NpdG9yeSgpLmRlbGV0ZU1hbnkoaWRzKVxufVxuXG4vLyBTeW5jIHRpZXIgdGjhu6cgY8O0bmcgKHRoxrDhu51uZyBEQiB0cmlnZ2VyIHThu7EgbG8pXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3luY0N1c3RvbWVyVGllclVzZUNhc2UoY3VzdG9tZXJJZDogc3RyaW5nKSB7XG4gIHJldHVybiBnZXRDdXN0b21lclJlcG9zaXRvcnkoKS5zeW5jVGllcihjdXN0b21lcklkKVxufSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoia1VBa0JzQixxTUFBQSJ9
}),
"[project]/src/application/use-cases/customer/data:d8e48d [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addCustomerUseCase",
    ()=>$$RSC_SERVER_ACTION_3
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"4028572b16f567add9a517b7c4fc5ddf4cbf3eb15e":"addCustomerUseCase"},"src/application/use-cases/customer/CustomerUsecase.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("4028572b16f567add9a517b7c4fc5ddf4cbf3eb15e", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "addCustomerUseCase");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vQ3VzdG9tZXJVc2VjYXNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9hcHBsaWNhdGlvbi91c2UtY2FzZXMvY3VzdG9tZXIvQ3VzdG9tZXJVc2VDYXNlcy50c1xuLy8gR+G7mXAgR2V0Q3VzdG9tZXJzVXNlQ2FzZSArIEdldE9yZGVyc1VzZUNhc2UgKyBNdXRhdGVDdXN0b21lclVzZUNhc2UgdsOgbyAxIGZpbGVcbi8vIFhPw4EgMyBmaWxlIGPFqSBzYXUga2hpIGTDuW5nIGZpbGUgbsOgeVxuXG4ndXNlIHNlcnZlcidcblxuaW1wb3J0IHsgZ2V0Q3VzdG9tZXJSZXBvc2l0b3J5IH0gZnJvbSAnQC9pbmZyYXN0cnVjdHVyZS9jb250YWluZXIvRElDb250YWluZXInXG5pbXBvcnQgdHlwZSB7IEFkZEN1c3RvbWVyRFRPLCBVcGRhdGVDdXN0b21lckRUTywgQ3VzdG9tZXJGaWx0ZXJzRFRPIH0gZnJvbSAnQC9hcHBsaWNhdGlvbi9kdG8vQ3VzdG9tZXJEVE8nXG5cbi8vIOKUgOKUgCBSZWFkIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEN1c3RvbWVyc1VzZUNhc2UoZmlsdGVycz86IEN1c3RvbWVyRmlsdGVyc0RUTykge1xuICByZXR1cm4gZ2V0Q3VzdG9tZXJSZXBvc2l0b3J5KCkuZ2V0QWxsKGZpbHRlcnMpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRPcmRlcnNCeUN1c3RvbWVyVXNlQ2FzZShjdXN0b21lcklkOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGdldEN1c3RvbWVyUmVwb3NpdG9yeSgpLmdldE9yZGVyc0J5Q3VzdG9tZXIoY3VzdG9tZXJJZClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE9yZGVyV2l0aEl0ZW1zVXNlQ2FzZShvcmRlcklkOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGdldEN1c3RvbWVyUmVwb3NpdG9yeSgpLmdldE9yZGVyV2l0aEl0ZW1zKG9yZGVySWQpXG59XG5cbi8vIOKUgOKUgCBNdXRhdGUg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkQ3VzdG9tZXJVc2VDYXNlKGZvcm06IEFkZEN1c3RvbWVyRFRPKSB7XG4gIGlmICghZm9ybS5uYW1lPy50cmltKCkpIHRocm93IG5ldyBFcnJvcignVMOqbiBraMO0bmcgxJHGsOG7o2MgcuG7l25nJylcbiAgcmV0dXJuIGdldEN1c3RvbWVyUmVwb3NpdG9yeSgpLmFkZChmb3JtKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ3VzdG9tZXJVc2VDYXNlKGlkOiBzdHJpbmcsIGZvcm06IFVwZGF0ZUN1c3RvbWVyRFRPKSB7XG4gIGlmICghZm9ybS5uYW1lPy50cmltKCkpIHRocm93IG5ldyBFcnJvcignVMOqbiBraMO0bmcgxJHGsOG7o2MgcuG7l25nJylcbiAgcmV0dXJuIGdldEN1c3RvbWVyUmVwb3NpdG9yeSgpLnVwZGF0ZShpZCwgZm9ybSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUN1c3RvbWVyc1VzZUNhc2UoaWRzOiBzdHJpbmdbXSkge1xuICBpZiAoaWRzLmxlbmd0aCA9PT0gMCkgdGhyb3cgbmV3IEVycm9yKCdDaMawYSBjaOG7jW4ga2jDoWNoIGjDoG5nJylcbiAgcmV0dXJuIGdldEN1c3RvbWVyUmVwb3NpdG9yeSgpLmRlbGV0ZU1hbnkoaWRzKVxufVxuXG4vLyBTeW5jIHRpZXIgdGjhu6cgY8O0bmcgKHRoxrDhu51uZyBEQiB0cmlnZ2VyIHThu7EgbG8pXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3luY0N1c3RvbWVyVGllclVzZUNhc2UoY3VzdG9tZXJJZDogc3RyaW5nKSB7XG4gIHJldHVybiBnZXRDdXN0b21lclJlcG9zaXRvcnkoKS5zeW5jVGllcihjdXN0b21lcklkKVxufSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiNFRBdUJzQiwrTEFBQSJ9
}),
"[project]/src/application/use-cases/customer/data:bfc82a [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateCustomerUseCase",
    ()=>$$RSC_SERVER_ACTION_4
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"60b7f2ccdc5917e978c5626c27e269274fe47c9cac":"updateCustomerUseCase"},"src/application/use-cases/customer/CustomerUsecase.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("60b7f2ccdc5917e978c5626c27e269274fe47c9cac", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateCustomerUseCase");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vQ3VzdG9tZXJVc2VjYXNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9hcHBsaWNhdGlvbi91c2UtY2FzZXMvY3VzdG9tZXIvQ3VzdG9tZXJVc2VDYXNlcy50c1xuLy8gR+G7mXAgR2V0Q3VzdG9tZXJzVXNlQ2FzZSArIEdldE9yZGVyc1VzZUNhc2UgKyBNdXRhdGVDdXN0b21lclVzZUNhc2UgdsOgbyAxIGZpbGVcbi8vIFhPw4EgMyBmaWxlIGPFqSBzYXUga2hpIGTDuW5nIGZpbGUgbsOgeVxuXG4ndXNlIHNlcnZlcidcblxuaW1wb3J0IHsgZ2V0Q3VzdG9tZXJSZXBvc2l0b3J5IH0gZnJvbSAnQC9pbmZyYXN0cnVjdHVyZS9jb250YWluZXIvRElDb250YWluZXInXG5pbXBvcnQgdHlwZSB7IEFkZEN1c3RvbWVyRFRPLCBVcGRhdGVDdXN0b21lckRUTywgQ3VzdG9tZXJGaWx0ZXJzRFRPIH0gZnJvbSAnQC9hcHBsaWNhdGlvbi9kdG8vQ3VzdG9tZXJEVE8nXG5cbi8vIOKUgOKUgCBSZWFkIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEN1c3RvbWVyc1VzZUNhc2UoZmlsdGVycz86IEN1c3RvbWVyRmlsdGVyc0RUTykge1xuICByZXR1cm4gZ2V0Q3VzdG9tZXJSZXBvc2l0b3J5KCkuZ2V0QWxsKGZpbHRlcnMpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRPcmRlcnNCeUN1c3RvbWVyVXNlQ2FzZShjdXN0b21lcklkOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGdldEN1c3RvbWVyUmVwb3NpdG9yeSgpLmdldE9yZGVyc0J5Q3VzdG9tZXIoY3VzdG9tZXJJZClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE9yZGVyV2l0aEl0ZW1zVXNlQ2FzZShvcmRlcklkOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGdldEN1c3RvbWVyUmVwb3NpdG9yeSgpLmdldE9yZGVyV2l0aEl0ZW1zKG9yZGVySWQpXG59XG5cbi8vIOKUgOKUgCBNdXRhdGUg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkQ3VzdG9tZXJVc2VDYXNlKGZvcm06IEFkZEN1c3RvbWVyRFRPKSB7XG4gIGlmICghZm9ybS5uYW1lPy50cmltKCkpIHRocm93IG5ldyBFcnJvcignVMOqbiBraMO0bmcgxJHGsOG7o2MgcuG7l25nJylcbiAgcmV0dXJuIGdldEN1c3RvbWVyUmVwb3NpdG9yeSgpLmFkZChmb3JtKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ3VzdG9tZXJVc2VDYXNlKGlkOiBzdHJpbmcsIGZvcm06IFVwZGF0ZUN1c3RvbWVyRFRPKSB7XG4gIGlmICghZm9ybS5uYW1lPy50cmltKCkpIHRocm93IG5ldyBFcnJvcignVMOqbiBraMO0bmcgxJHGsOG7o2MgcuG7l25nJylcbiAgcmV0dXJuIGdldEN1c3RvbWVyUmVwb3NpdG9yeSgpLnVwZGF0ZShpZCwgZm9ybSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUN1c3RvbWVyc1VzZUNhc2UoaWRzOiBzdHJpbmdbXSkge1xuICBpZiAoaWRzLmxlbmd0aCA9PT0gMCkgdGhyb3cgbmV3IEVycm9yKCdDaMawYSBjaOG7jW4ga2jDoWNoIGjDoG5nJylcbiAgcmV0dXJuIGdldEN1c3RvbWVyUmVwb3NpdG9yeSgpLmRlbGV0ZU1hbnkoaWRzKVxufVxuXG4vLyBTeW5jIHRpZXIgdGjhu6cgY8O0bmcgKHRoxrDhu51uZyBEQiB0cmlnZ2VyIHThu7EgbG8pXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3luY0N1c3RvbWVyVGllclVzZUNhc2UoY3VzdG9tZXJJZDogc3RyaW5nKSB7XG4gIHJldHVybiBnZXRDdXN0b21lclJlcG9zaXRvcnkoKS5zeW5jVGllcihjdXN0b21lcklkKVxufSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiK1RBNEJzQixrTUFBQSJ9
}),
"[project]/src/application/use-cases/customer/data:2a04bf [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteCustomersUseCase",
    ()=>$$RSC_SERVER_ACTION_5
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"409c0a535d6cfe7a464fdf385240f30f651830e189":"deleteCustomersUseCase"},"src/application/use-cases/customer/CustomerUsecase.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("409c0a535d6cfe7a464fdf385240f30f651830e189", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteCustomersUseCase");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vQ3VzdG9tZXJVc2VjYXNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9hcHBsaWNhdGlvbi91c2UtY2FzZXMvY3VzdG9tZXIvQ3VzdG9tZXJVc2VDYXNlcy50c1xuLy8gR+G7mXAgR2V0Q3VzdG9tZXJzVXNlQ2FzZSArIEdldE9yZGVyc1VzZUNhc2UgKyBNdXRhdGVDdXN0b21lclVzZUNhc2UgdsOgbyAxIGZpbGVcbi8vIFhPw4EgMyBmaWxlIGPFqSBzYXUga2hpIGTDuW5nIGZpbGUgbsOgeVxuXG4ndXNlIHNlcnZlcidcblxuaW1wb3J0IHsgZ2V0Q3VzdG9tZXJSZXBvc2l0b3J5IH0gZnJvbSAnQC9pbmZyYXN0cnVjdHVyZS9jb250YWluZXIvRElDb250YWluZXInXG5pbXBvcnQgdHlwZSB7IEFkZEN1c3RvbWVyRFRPLCBVcGRhdGVDdXN0b21lckRUTywgQ3VzdG9tZXJGaWx0ZXJzRFRPIH0gZnJvbSAnQC9hcHBsaWNhdGlvbi9kdG8vQ3VzdG9tZXJEVE8nXG5cbi8vIOKUgOKUgCBSZWFkIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEN1c3RvbWVyc1VzZUNhc2UoZmlsdGVycz86IEN1c3RvbWVyRmlsdGVyc0RUTykge1xuICByZXR1cm4gZ2V0Q3VzdG9tZXJSZXBvc2l0b3J5KCkuZ2V0QWxsKGZpbHRlcnMpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRPcmRlcnNCeUN1c3RvbWVyVXNlQ2FzZShjdXN0b21lcklkOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGdldEN1c3RvbWVyUmVwb3NpdG9yeSgpLmdldE9yZGVyc0J5Q3VzdG9tZXIoY3VzdG9tZXJJZClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE9yZGVyV2l0aEl0ZW1zVXNlQ2FzZShvcmRlcklkOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGdldEN1c3RvbWVyUmVwb3NpdG9yeSgpLmdldE9yZGVyV2l0aEl0ZW1zKG9yZGVySWQpXG59XG5cbi8vIOKUgOKUgCBNdXRhdGUg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkQ3VzdG9tZXJVc2VDYXNlKGZvcm06IEFkZEN1c3RvbWVyRFRPKSB7XG4gIGlmICghZm9ybS5uYW1lPy50cmltKCkpIHRocm93IG5ldyBFcnJvcignVMOqbiBraMO0bmcgxJHGsOG7o2MgcuG7l25nJylcbiAgcmV0dXJuIGdldEN1c3RvbWVyUmVwb3NpdG9yeSgpLmFkZChmb3JtKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ3VzdG9tZXJVc2VDYXNlKGlkOiBzdHJpbmcsIGZvcm06IFVwZGF0ZUN1c3RvbWVyRFRPKSB7XG4gIGlmICghZm9ybS5uYW1lPy50cmltKCkpIHRocm93IG5ldyBFcnJvcignVMOqbiBraMO0bmcgxJHGsOG7o2MgcuG7l25nJylcbiAgcmV0dXJuIGdldEN1c3RvbWVyUmVwb3NpdG9yeSgpLnVwZGF0ZShpZCwgZm9ybSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUN1c3RvbWVyc1VzZUNhc2UoaWRzOiBzdHJpbmdbXSkge1xuICBpZiAoaWRzLmxlbmd0aCA9PT0gMCkgdGhyb3cgbmV3IEVycm9yKCdDaMawYSBjaOG7jW4ga2jDoWNoIGjDoG5nJylcbiAgcmV0dXJuIGdldEN1c3RvbWVyUmVwb3NpdG9yeSgpLmRlbGV0ZU1hbnkoaWRzKVxufVxuXG4vLyBTeW5jIHRpZXIgdGjhu6cgY8O0bmcgKHRoxrDhu51uZyBEQiB0cmlnZ2VyIHThu7EgbG8pXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3luY0N1c3RvbWVyVGllclVzZUNhc2UoY3VzdG9tZXJJZDogc3RyaW5nKSB7XG4gIHJldHVybiBnZXRDdXN0b21lclJlcG9zaXRvcnkoKS5zeW5jVGllcihjdXN0b21lcklkKVxufSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiZ1VBaUNzQixtTUFBQSJ9
}),
"[project]/src/presentation/components/ui/SharedUI.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Overlay({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
function PgBtn({ children, active, disabled, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
function SbCard({ title, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: '#fff',
            borderRadius: 8,
            boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
            padding: '12px 14px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
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
function DeleteBar({ count, onDelete }) {
    if (count === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            bottom: 28,
            right: 36,
            zIndex: 300
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
function ConfirmDeleteModal({ count, onConfirm, onCancel, isPending }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Overlay, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                width: 300,
                background: '#fff',
                borderRadius: 16,
                padding: '24px 20px 18px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.22)',
                textAlign: 'center'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        fontSize: 13,
                        color: '#222',
                        lineHeight: 1.65,
                        marginBottom: 18
                    },
                    children: [
                        "Xóa ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        gap: 12,
                        justifyContent: 'center'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
}),
"[project]/src/presentation/components/customer/CustomerTable.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomerTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$application$2f$use$2d$cases$2f$customer$2f$data$3a$2c80ac__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/application/use-cases/customer/data:2c80ac [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$application$2f$use$2d$cases$2f$customer$2f$data$3a$d0a49d__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/application/use-cases/customer/data:d0a49d [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$application$2f$use$2d$cases$2f$customer$2f$data$3a$d8e48d__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/application/use-cases/customer/data:d8e48d [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$application$2f$use$2d$cases$2f$customer$2f$data$3a$bfc82a__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/application/use-cases/customer/data:bfc82a [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$application$2f$use$2d$cases$2f$customer$2f$data$3a$2a04bf__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/application/use-cases/customer/data:2a04bf [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$components$2f$ui$2f$SharedUI$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/components/ui/SharedUI.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const fmt = (n)=>n.toLocaleString('vi-VN');
const tierBadge = (t)=>{
    const styles = {
        'Vàng': {
            background: '#fff3cc',
            color: '#b07d00',
            border: '1px solid #f0d060'
        },
        'Bạc': {
            background: '#e4e8ef',
            color: '#3d5a80',
            border: '1px solid #b0bcd0'
        },
        'Đồng': {
            background: '#e8e0d4',
            color: '#7a5c3a',
            border: '1px solid #c0a888'
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '3px 12px',
            borderRadius: 20,
            fontSize: 12,
            fontWeight: 600,
            whiteSpace: 'nowrap',
            ...styles[t]
        },
        children: t
    }, void 0, false, {
        fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
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
const rowGrid = {
    display: 'grid',
    gridTemplateColumns: '44px repeat(6,1fr) 50px',
    padding: '0 14px',
    alignItems: 'center',
    fontSize: 13,
    color: '#000'
};
// ── DateDropdown nằm NGOÀI CustomerTable ─────────────────────
function DateDropdown({ refEl, label, from, to, show, setShow, setFrom, setTo, setLabel }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: refEl,
        style: {
            position: 'relative',
            marginTop: 6
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: ()=>setShow(!show),
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#555",
                        strokeWidth: "2.5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                            points: "6 9 12 15 18 9"
                        }, void 0, false, {
                            fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                            lineNumber: 60,
                            columnNumber: 101
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            show && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    background: '#fff',
                    border: '1px solid #ddd',
                    borderRadius: 8,
                    boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
                    zIndex: 200,
                    overflow: 'hidden',
                    marginTop: 4
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>{
                            setFrom('');
                            setTo('');
                            setLabel('Toàn thời gian');
                            setShow(false);
                        },
                        style: {
                            padding: '9px 14px',
                            fontSize: 13,
                            cursor: 'pointer'
                        },
                        onMouseEnter: (e)=>e.currentTarget.style.background = '#f0f5ff',
                        onMouseLeave: (e)=>e.currentTarget.style.background = 'transparent',
                        children: "Toàn thời gian"
                    }, void 0, false, {
                        fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this),
                    DATE_OPTS.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: ()=>{
                                const r = getDateRange(opt);
                                setFrom(r.from);
                                setTo(r.to);
                                setLabel(opt);
                                setShow(false);
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
                            fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                            lineNumber: 71,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            borderTop: '1px solid #eee',
                            padding: '8px 14px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 12,
                                    color: '#888',
                                    marginBottom: 4
                                },
                                children: "Từ ngày"
                            }, void 0, false, {
                                fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "date",
                                value: from,
                                onChange: (e)=>{
                                    setFrom(e.target.value);
                                    setLabel('Lựa chọn khác');
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
                                fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 12,
                                    color: '#888',
                                    margin: '6px 0 4px'
                                },
                                children: "Đến ngày"
                            }, void 0, false, {
                                fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "date",
                                value: to,
                                onChange: (e)=>{
                                    setTo(e.target.value);
                                    setLabel('Lựa chọn khác');
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
                                fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                lineNumber: 63,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
function CustomerTable({ initialCustomers }) {
    const [customers, setCustomers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialCustomers);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [tierFilter, setTierFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [minTotal, setMinTotal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [maxTotal, setMaxTotal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [dateFrom, setDateFrom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [dateTo, setDateTo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [dateLabel, setDateLabel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Toàn thời gian');
    const [showDateDrop, setShowDateDrop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [bdFrom, setBdFrom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [bdTo, setBdTo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [bdLabel, setBdLabel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Toàn thời gian');
    const [showBdDrop, setShowBdDrop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const PER = 8;
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [expandedId, setExpandedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [orders, setOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [loadingOrders, setLoadingOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [invoice, setInvoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loadingInvoice, setLoadingInvoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showConfirmDelete, setShowConfirmDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showAddModal, setShowAddModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editCustomer, setEditCustomer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransition"])();
    const [fName, setFName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [fPhone, setFPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [fEmail, setFEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [fTier, setFTier] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Đồng');
    const dateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const bdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const h = (e)=>{
            if (dateRef.current && !dateRef.current.contains(e.target)) setShowDateDrop(false);
            if (bdRef.current && !bdRef.current.contains(e.target)) setShowBdDrop(false);
        };
        document.addEventListener('mousedown', h);
        return ()=>document.removeEventListener('mousedown', h);
    }, []);
    const filtered = customers.filter((c)=>{
        const q = search.toLowerCase();
        if (q && !c.id.toLowerCase().includes(q) && !c.name.toLowerCase().includes(q) && !(c.phone || '').includes(q)) return false;
        if (tierFilter && c.tier !== tierFilter) return false;
        if (minTotal && c.total < Number(minTotal)) return false;
        if (maxTotal && c.total > Number(maxTotal)) return false;
        if (dateFrom && c.created_at < dateFrom) return false;
        if (dateTo && c.created_at > dateTo) return false;
        return true;
    });
    const pages = Math.max(1, Math.ceil(filtered.length / PER));
    const safePage = Math.min(page, pages);
    const slice = filtered.slice((safePage - 1) * PER, safePage * PER);
    const toggleExpand = async (id)=>{
        if (expandedId === id) {
            setExpandedId(null);
            return;
        }
        setExpandedId(id);
        if (!orders[id]) {
            setLoadingOrders(id);
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$application$2f$use$2d$cases$2f$customer$2f$data$3a$2c80ac__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getOrdersByCustomerUseCase"])(id);
            setOrders((p)=>({
                    ...p,
                    [id]: data
                }));
            setLoadingOrders(null);
        }
    };
    const openInvoice = async (orderId, e)=>{
        e.stopPropagation();
        setLoadingInvoice(true);
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$application$2f$use$2d$cases$2f$customer$2f$data$3a$d0a49d__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getOrderWithItemsUseCase"])(orderId);
        setInvoice(data);
        setLoadingInvoice(false);
    };
    const toggleRow = (id)=>setSelected((p)=>{
            const n = new Set(p);
            n.has(id) ? n.delete(id) : n.add(id);
            return n;
        });
    const toggleAll = (checked)=>setSelected(checked ? new Set(slice.map((c)=>c.id)) : new Set());
    const doDelete = ()=>startTransition(async ()=>{
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$application$2f$use$2d$cases$2f$customer$2f$data$3a$2a04bf__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteCustomersUseCase"])([
                ...selected
            ]);
            setCustomers((p)=>p.filter((c)=>!selected.has(c.id)));
            setSelected(new Set());
            setShowConfirmDelete(false);
        });
    const openAdd = ()=>{
        setFName('');
        setFPhone('');
        setFEmail('');
        setFTier('Đồng');
        setShowAddModal(true);
    };
    const openEdit = (c, e)=>{
        e.stopPropagation();
        setEditCustomer(c);
        setFName(c.name);
        setFPhone(c.phone || '');
        setFEmail(c.email || '');
        setFTier(c.tier);
    };
    const doAdd = ()=>{
        if (!fName) {
            alert('Vui lòng nhập tên!');
            return;
        }
        startTransition(async ()=>{
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$application$2f$use$2d$cases$2f$customer$2f$data$3a$d8e48d__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["addCustomerUseCase"])({
                name: fName,
                phone: fPhone,
                email: fEmail,
                tier: fTier
            });
            const today = new Date().toISOString().split('T')[0];
            const newId = 'KH' + String(customers.length + 1).padStart(3, '0');
            setCustomers((p)=>[
                    {
                        id: newId,
                        name: fName,
                        phone: fPhone || null,
                        email: fEmail || null,
                        tier: fTier,
                        total: 0,
                        auth_id: null,
                        created_at: today
                    },
                    ...p
                ]);
            setShowAddModal(false);
        });
    };
    const doEdit = ()=>{
        if (!editCustomer || !fName) return;
        startTransition(async ()=>{
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$application$2f$use$2d$cases$2f$customer$2f$data$3a$bfc82a__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateCustomerUseCase"])(editCustomer.id, {
                name: fName,
                phone: fPhone || null,
                email: fEmail || null,
                tier: fTier
            });
            setCustomers((p)=>p.map((c)=>c.id === editCustomer.id ? {
                        ...c,
                        name: fName,
                        phone: fPhone || null,
                        email: fEmail || null,
                        tier: fTier
                    } : c));
            setEditCustomer(null);
        });
    };
    const exportCSV = ()=>{
        let csv = '\uFEFFMã KH,Tên KH,Điện thoại,Email,Hạng,Tổng bán (VNĐ),Ngày tạo\n';
        customers.forEach((c)=>{
            csv += [
                c.id,
                `"${c.name}"`,
                c.phone || '',
                c.email || '',
                c.tier,
                c.total,
                c.created_at
            ].join(',') + '\n';
        });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(new Blob([
            csv
        ], {
            type: 'text/csv;charset=utf-8;'
        }));
        a.download = 'DGFarm_KhachHang.csv';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    height: 44,
                    display: 'flex',
                    alignItems: 'center',
                    background: '#E5E5E5',
                    paddingLeft: 16
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        fontWeight: 700,
                        fontSize: 20,
                        color: '#000'
                    },
                    children: "Khách hàng"
                }, void 0, false, {
                    fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                    lineNumber: 218,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                lineNumber: 217,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    minHeight: 'calc(100vh - 138px)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        style: {
                            width: 260,
                            minWidth: 260,
                            padding: '14px 12px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 12
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$components$2f$ui$2f$SharedUI$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SbCard"], {
                                title: "Nhóm khách hàng",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: tierFilter,
                                    onChange: (e)=>{
                                        setTierFilter(e.target.value);
                                        setPage(1);
                                    },
                                    style: {
                                        width: '100%',
                                        border: '1.5px solid #d0d7e2',
                                        borderRadius: 20,
                                        fontSize: 13,
                                        padding: '7px 32px 7px 14px',
                                        outline: 'none',
                                        color: '#222',
                                        background: '#f7f9fc',
                                        cursor: 'pointer',
                                        appearance: 'none',
                                        marginTop: 6
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "Tất cả nhóm"
                                        }, void 0, false, {
                                            fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                            lineNumber: 226,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Đồng",
                                            children: "Đồng"
                                        }, void 0, false, {
                                            fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                            lineNumber: 227,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Bạc",
                                            children: "Bạc"
                                        }, void 0, false, {
                                            fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                            lineNumber: 228,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Vàng",
                                            children: "Vàng"
                                        }, void 0, false, {
                                            fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                            lineNumber: 229,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                    lineNumber: 224,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$components$2f$ui$2f$SharedUI$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SbCard"], {
                                title: "Ngày tạo",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DateDropdown, {
                                    refEl: dateRef,
                                    label: dateLabel,
                                    from: dateFrom,
                                    to: dateTo,
                                    show: showDateDrop,
                                    setShow: setShowDateDrop,
                                    setFrom: setDateFrom,
                                    setTo: setDateTo,
                                    setLabel: setDateLabel
                                }, void 0, false, {
                                    fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                    lineNumber: 234,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                lineNumber: 233,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$components$2f$ui$2f$SharedUI$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SbCard"], {
                                title: "Sinh nhật",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DateDropdown, {
                                    refEl: bdRef,
                                    label: bdLabel,
                                    from: bdFrom,
                                    to: bdTo,
                                    show: showBdDrop,
                                    setShow: setShowBdDrop,
                                    setFrom: setBdFrom,
                                    setTo: setBdTo,
                                    setLabel: setBdLabel
                                }, void 0, false, {
                                    fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                    lineNumber: 240,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                lineNumber: 239,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$components$2f$ui$2f$SharedUI$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SbCard"], {
                                title: "Tổng bán",
                                children: [
                                    [
                                        'Từ:',
                                        minTotal,
                                        setMinTotal
                                    ],
                                    [
                                        'Đến:',
                                        maxTotal,
                                        setMaxTotal
                                    ]
                                ].map(([label, val, setter])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 6,
                                            marginTop: 5
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 12,
                                                    color: '#555',
                                                    width: 28
                                                },
                                                children: label
                                            }, void 0, false, {
                                                fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                lineNumber: 248,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                value: val,
                                                onChange: (e)=>{
                                                    setter(e.target.value);
                                                    setPage(1);
                                                },
                                                style: {
                                                    flex: 1,
                                                    height: 28,
                                                    border: '1px solid #ccc',
                                                    borderRadius: 4,
                                                    fontSize: 12,
                                                    padding: '0 7px',
                                                    outline: 'none',
                                                    textAlign: 'right'
                                                },
                                                placeholder: label === 'Đến:' ? 'Tất cả' : '0'
                                            }, void 0, false, {
                                                fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                lineNumber: 249,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, label, true, {
                                        fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                        lineNumber: 247,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                lineNumber: 245,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                        lineNumber: 222,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        style: {
                            flex: 1,
                            padding: '14px 16px',
                            minWidth: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    marginBottom: 12
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 400,
                                            position: 'relative',
                                            height: 38,
                                            background: '#fff',
                                            borderRadius: 4,
                                            display: 'flex',
                                            alignItems: 'center',
                                            border: '1px solid #ddd'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: search,
                                                onChange: (e)=>{
                                                    setSearch(e.target.value);
                                                    setPage(1);
                                                },
                                                placeholder: "Tìm kiếm theo mã, tên, điện thoại...",
                                                style: {
                                                    width: '100%',
                                                    height: '100%',
                                                    border: 'none',
                                                    outline: 'none',
                                                    fontSize: 13,
                                                    padding: '0 40px 0 14px',
                                                    background: 'transparent'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                lineNumber: 260,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    position: 'absolute',
                                                    right: 12,
                                                    color: '#797979',
                                                    fontSize: 16,
                                                    pointerEvents: 'none'
                                                },
                                                children: "🔍"
                                            }, void 0, false, {
                                                fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                lineNumber: 263,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                        lineNumber: 259,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: 8
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: openAdd,
                                                style: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$components$2f$ui$2f$SharedUI$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["btnGreen"],
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "13",
                                                        height: "13",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "white",
                                                        strokeWidth: "3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "12",
                                                                y1: "5",
                                                                x2: "12",
                                                                y2: "19"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                                lineNumber: 267,
                                                                columnNumber: 108
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "5",
                                                                y1: "12",
                                                                x2: "19",
                                                                y2: "12"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                                lineNumber: 267,
                                                                columnNumber: 147
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                        lineNumber: 267,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Thêm mới"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                lineNumber: 266,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: exportCSV,
                                                style: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$components$2f$ui$2f$SharedUI$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["btnIcon"],
                                                title: "Xuất CSV",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "14",
                                                    height: "14",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "white",
                                                    strokeWidth: "2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                            lineNumber: 271,
                                                            columnNumber: 108
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                            points: "7 10 12 15 17 10"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                            lineNumber: 271,
                                                            columnNumber: 162
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                            x1: "12",
                                                            y1: "15",
                                                            x2: "12",
                                                            y2: "3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                            lineNumber: 271,
                                                            columnNumber: 200
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                    lineNumber: 271,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                lineNumber: 270,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                        lineNumber: 265,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                lineNumber: 258,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    borderRadius: 4,
                                    overflow: 'hidden',
                                    boxShadow: '0 1px 4px rgba(0,0,0,0.08)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            ...rowGrid,
                                            background: '#CEE8FF',
                                            height: 44,
                                            fontWeight: 700,
                                            borderBottom: '1px solid #b8d8f0'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: slice.length > 0 && slice.every((c)=>selected.has(c.id)),
                                                    onChange: (e)=>toggleAll(e.target.checked),
                                                    style: {
                                                        width: 15,
                                                        height: 15,
                                                        accentColor: '#253584',
                                                        cursor: 'pointer'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                    lineNumber: 278,
                                                    columnNumber: 20
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                lineNumber: 278,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: "Mã KH"
                                            }, void 0, false, {
                                                fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                lineNumber: 279,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: "Tên KH"
                                            }, void 0, false, {
                                                fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                lineNumber: 279,
                                                columnNumber: 31
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: "Điện thoại"
                                            }, void 0, false, {
                                                fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                lineNumber: 279,
                                                columnNumber: 48
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: "Hạng"
                                            }, void 0, false, {
                                                fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                lineNumber: 279,
                                                columnNumber: 69
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: "Tổng bán (VNĐ)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                lineNumber: 280,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: "Ngày tạo"
                                            }, void 0, false, {
                                                fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                lineNumber: 280,
                                                columnNumber: 40
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                lineNumber: 280,
                                                columnNumber: 59
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                        lineNumber: 277,
                                        columnNumber: 13
                                    }, this),
                                    slice.map((c)=>{
                                        const isExp = expandedId === c.id;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `tbl-row${isExp ? ' expanded' : ''}`,
                                                    style: {
                                                        ...rowGrid,
                                                        height: 46,
                                                        background: isExp ? '#BED4CB' : '#fff',
                                                        cursor: 'pointer',
                                                        borderBottom: '1px solid #f0f0f0'
                                                    },
                                                    onClick: ()=>toggleExpand(c.id),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: selected.has(c.id),
                                                                onChange: ()=>toggleRow(c.id),
                                                                onClick: (e)=>e.stopPropagation(),
                                                                style: {
                                                                    width: 15,
                                                                    height: 15,
                                                                    accentColor: '#253584',
                                                                    cursor: 'pointer'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                                lineNumber: 290,
                                                                columnNumber: 26
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                            lineNumber: 290,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                color: '#253584',
                                                                fontWeight: 700,
                                                                overflow: 'hidden',
                                                                textOverflow: 'ellipsis',
                                                                whiteSpace: 'nowrap'
                                                            },
                                                            children: c.id
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                            lineNumber: 291,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                overflow: 'hidden',
                                                                textOverflow: 'ellipsis',
                                                                whiteSpace: 'nowrap'
                                                            },
                                                            children: c.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                            lineNumber: 292,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                overflow: 'hidden',
                                                                textOverflow: 'ellipsis',
                                                                whiteSpace: 'nowrap'
                                                            },
                                                            children: c.phone || '-'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                            lineNumber: 293,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: tierBadge(c.tier)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                            lineNumber: 294,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: c.total > 0 ? fmt(c.total) : '-'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                            lineNumber: 295,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                overflow: 'hidden',
                                                                textOverflow: 'ellipsis',
                                                                whiteSpace: 'nowrap'
                                                            },
                                                            children: c.created_at
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                            lineNumber: 296,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: (e)=>openEdit(c, e),
                                                                style: {
                                                                    background: 'none',
                                                                    border: 'none',
                                                                    cursor: 'pointer',
                                                                    padding: 4,
                                                                    borderRadius: 4,
                                                                    color: '#f97316'
                                                                },
                                                                title: "Chỉnh sửa",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    width: "15",
                                                                    height: "15",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                                            lineNumber: 299,
                                                                            columnNumber: 123
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                                            lineNumber: 299,
                                                                            columnNumber: 194
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                                    lineNumber: 299,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                                lineNumber: 298,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                            lineNumber: 297,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                    lineNumber: 287,
                                                    columnNumber: 19
                                                }, this),
                                                isExp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        background: '#BED4CB',
                                                        borderTop: '1px solid #a8ccc4',
                                                        borderBottom: '2px solid #8ab8b0',
                                                        padding: '14px 20px 16px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                borderBottom: '2px solid #b0ccc8',
                                                                marginBottom: 12
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    padding: '7px 18px',
                                                                    fontSize: 13,
                                                                    fontWeight: 600,
                                                                    color: '#253584',
                                                                    borderBottom: '2px solid #253584',
                                                                    display: 'inline-block',
                                                                    marginBottom: -2
                                                                },
                                                                children: "Lịch sử bán hàng"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                                lineNumber: 307,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                            lineNumber: 306,
                                                            columnNumber: 23
                                                        }, this),
                                                        loadingOrders === c.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                textAlign: 'center',
                                                                padding: 16,
                                                                color: '#666'
                                                            },
                                                            children: "Đang tải..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                            lineNumber: 310,
                                                            columnNumber: 25
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                            style: {
                                                                width: '100%',
                                                                borderCollapse: 'collapse',
                                                                fontSize: 13
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                        children: [
                                                                            'Mã hóa đơn',
                                                                            'Thời gian',
                                                                            'Người bán',
                                                                            'Tổng cộng',
                                                                            'Trạng thái'
                                                                        ].map((hd)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                style: {
                                                                                    background: '#CEE8FF',
                                                                                    padding: '9px 12px',
                                                                                    textAlign: hd === 'Tổng cộng' ? 'right' : 'left',
                                                                                    fontWeight: 700
                                                                                },
                                                                                children: hd
                                                                            }, hd, false, {
                                                                                fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                                                lineNumber: 315,
                                                                                columnNumber: 31
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                                        lineNumber: 314,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                                    lineNumber: 313,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                    children: (orders[c.id] || []).length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            colSpan: 5,
                                                                            style: {
                                                                                textAlign: 'center',
                                                                                padding: 16,
                                                                                color: '#aaa'
                                                                            },
                                                                            children: "Chưa có lịch sử giao dịch"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                                            lineNumber: 320,
                                                                            columnNumber: 35
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                                        lineNumber: 320,
                                                                        columnNumber: 31
                                                                    }, this) : (orders[c.id] || []).map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                            style: {
                                                                                borderBottom: '1px solid #d8eae6',
                                                                                background: '#fff'
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    style: {
                                                                                        padding: '9px 12px'
                                                                                    },
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        onClick: (e)=>openInvoice(o.id, e),
                                                                                        style: {
                                                                                            color: '#253584',
                                                                                            fontWeight: 600,
                                                                                            cursor: 'pointer'
                                                                                        },
                                                                                        onMouseEnter: (e)=>e.currentTarget.style.textDecoration = 'underline',
                                                                                        onMouseLeave: (e)=>e.currentTarget.style.textDecoration = 'none',
                                                                                        children: o.id
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                                                        lineNumber: 324,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                                                    lineNumber: 323,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    style: {
                                                                                        padding: '9px 12px'
                                                                                    },
                                                                                    children: new Date(o.ordered_at).toLocaleString('vi-VN')
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                                                    lineNumber: 328,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    style: {
                                                                                        padding: '9px 12px'
                                                                                    },
                                                                                    children: o.seller
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                                                    lineNumber: 329,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    style: {
                                                                                        padding: '9px 12px',
                                                                                        textAlign: 'right'
                                                                                    },
                                                                                    children: fmt(o.total)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                                                    lineNumber: 330,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    style: {
                                                                                        padding: '9px 12px',
                                                                                        color: '#27ae60',
                                                                                        fontWeight: 600
                                                                                    },
                                                                                    children: o.status
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                                                    lineNumber: 331,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, o.id, true, {
                                                                            fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                                            lineNumber: 322,
                                                                            columnNumber: 31
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                                    lineNumber: 318,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                            lineNumber: 312,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                    lineNumber: 305,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, c.id, true, {
                                            fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                            lineNumber: 286,
                                            columnNumber: 17
                                        }, this);
                                    }),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'flex-end',
                                            padding: '10px 14px',
                                            background: '#fff',
                                            borderTop: '1px solid #eee',
                                            gap: 4
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 12,
                                                    color: '#666',
                                                    marginRight: 10
                                                },
                                                children: [
                                                    "Tổng: ",
                                                    filtered.length,
                                                    " khách"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                lineNumber: 344,
                                                columnNumber: 15
                                            }, this),
                                            pages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$components$2f$ui$2f$SharedUI$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PgBtn"], {
                                                        disabled: safePage === 1,
                                                        onClick: ()=>setPage(safePage - 1),
                                                        children: "‹"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                        lineNumber: 346,
                                                        columnNumber: 17
                                                    }, this),
                                                    Array.from({
                                                        length: pages
                                                    }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$components$2f$ui$2f$SharedUI$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PgBtn"], {
                                                            active: i + 1 === safePage,
                                                            onClick: ()=>setPage(i + 1),
                                                            children: i + 1
                                                        }, i, false, {
                                                            fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                            lineNumber: 347,
                                                            columnNumber: 58
                                                        }, this)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$components$2f$ui$2f$SharedUI$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PgBtn"], {
                                                        disabled: safePage === pages,
                                                        onClick: ()=>setPage(safePage + 1),
                                                        children: "›"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                        lineNumber: 348,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                        lineNumber: 343,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                lineNumber: 276,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                        lineNumber: 257,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$components$2f$ui$2f$SharedUI$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeleteBar"], {
                count: selected.size,
                onDelete: ()=>setShowConfirmDelete(true)
            }, void 0, false, {
                fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                lineNumber: 355,
                columnNumber: 7
            }, this),
            showConfirmDelete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$components$2f$ui$2f$SharedUI$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConfirmDeleteModal"], {
                count: selected.size,
                onConfirm: doDelete,
                onCancel: ()=>setShowConfirmDelete(false),
                isPending: isPending
            }, void 0, false, {
                fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                lineNumber: 357,
                columnNumber: 29
            }, this),
            showAddModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$components$2f$ui$2f$SharedUI$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomerForm, {
                    title: "Thêm khách hàng mới",
                    name: fName,
                    phone: fPhone,
                    email: fEmail,
                    tier: fTier,
                    setName: setFName,
                    setPhone: setFPhone,
                    setEmail: setFEmail,
                    setTier: setFTier,
                    onSave: doAdd,
                    onCancel: ()=>setShowAddModal(false),
                    isPending: isPending
                }, void 0, false, {
                    fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                    lineNumber: 361,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                lineNumber: 360,
                columnNumber: 9
            }, this),
            editCustomer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$components$2f$ui$2f$SharedUI$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomerForm, {
                    title: `Chỉnh sửa: ${editCustomer.id}`,
                    name: fName,
                    phone: fPhone,
                    email: fEmail,
                    tier: fTier,
                    setName: setFName,
                    setPhone: setFPhone,
                    setEmail: setFEmail,
                    setTier: setFTier,
                    onSave: doEdit,
                    onCancel: ()=>setEditCustomer(null),
                    isPending: isPending
                }, void 0, false, {
                    fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                    lineNumber: 369,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                lineNumber: 368,
                columnNumber: 9
            }, this),
            (loadingInvoice || invoice) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$components$2f$ui$2f$SharedUI$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: '#fff',
                        borderRadius: 12,
                        padding: '24px 28px 20px',
                        width: 700,
                        maxWidth: '95vw',
                        maxHeight: '85vh',
                        overflowY: 'auto',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.22)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginBottom: 18
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: 15,
                                        fontWeight: 700,
                                        color: '#0E176E'
                                    },
                                    children: loadingInvoice ? 'Đang tải...' : `Hóa đơn ${invoice?.id}`
                                }, void 0, false, {
                                    fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                    lineNumber: 379,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setInvoice(null),
                                    style: {
                                        background: 'none',
                                        border: 'none',
                                        fontSize: 20,
                                        cursor: 'pointer',
                                        color: '#888'
                                    },
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                    lineNumber: 380,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                            lineNumber: 378,
                            columnNumber: 13
                        }, this),
                        invoice && !loadingInvoice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: 12,
                                        color: '#555',
                                        marginBottom: 14,
                                        display: 'flex',
                                        gap: 24
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "🕐 ",
                                                new Date(invoice.ordered_at).toLocaleString('vi-VN')
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                            lineNumber: 385,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "👤 Người bán: ",
                                                invoice.seller
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                            lineNumber: 386,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                    lineNumber: 384,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    style: {
                                        width: '100%',
                                        borderCollapse: 'separate',
                                        borderSpacing: 0,
                                        fontSize: 13,
                                        border: '1px solid #d0e4f0',
                                        borderRadius: 8,
                                        overflow: 'hidden'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    'Mã hàng',
                                                    'Tên hàng',
                                                    'Số lượng',
                                                    'Đơn giá',
                                                    'Giảm giá',
                                                    'Giá bán',
                                                    'Thành tiền'
                                                ].map((hd, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        style: {
                                                            background: '#CEE8FF',
                                                            padding: '10px 12px',
                                                            textAlign: i >= 2 ? 'right' : 'left',
                                                            fontWeight: 700
                                                        },
                                                        children: hd
                                                    }, hd, false, {
                                                        fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                        lineNumber: 391,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                lineNumber: 390,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                            lineNumber: 389,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: invoice.order_items.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    style: {
                                                        borderTop: '1px solid #eef2f7'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: '9px 12px',
                                                                color: '#253584',
                                                                fontWeight: 600
                                                            },
                                                            children: item.product_code
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                            lineNumber: 397,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: '9px 12px'
                                                            },
                                                            children: item.product_name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                            lineNumber: 398,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: '9px 12px',
                                                                textAlign: 'right'
                                                            },
                                                            children: item.quantity
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                            lineNumber: 399,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: '9px 12px',
                                                                textAlign: 'right'
                                                            },
                                                            children: fmt(item.unit_price)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                            lineNumber: 400,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: '9px 12px',
                                                                textAlign: 'right'
                                                            },
                                                            children: item.discount > 0 ? fmt(item.discount) : '-'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                            lineNumber: 401,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: '9px 12px',
                                                                textAlign: 'right'
                                                            },
                                                            children: fmt(item.sell_price)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                            lineNumber: 402,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: '9px 12px',
                                                                textAlign: 'right'
                                                            },
                                                            children: fmt(item.quantity * item.sell_price)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                            lineNumber: 403,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                                    lineNumber: 396,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                            lineNumber: 394,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                    lineNumber: 388,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InvoiceSummary, {
                                    items: invoice.order_items
                                }, void 0, false, {
                                    fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                    lineNumber: 408,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                    lineNumber: 377,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                lineNumber: 376,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
function CustomerForm({ title, name, phone, email, tier, setName, setPhone, setEmail, setTier, onSave, onCancel, isPending }) {
    const inp = {
        width: '100%',
        height: 34,
        padding: '0 10px',
        border: '1.5px solid #ddd',
        borderRadius: 7,
        fontSize: 13,
        outline: 'none',
        color: '#222',
        background: '#fafafa'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: '#fff',
            borderRadius: 10,
            padding: '20px 18px',
            width: 300,
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 14,
                    fontWeight: 700,
                    color: '#0E176E',
                    marginBottom: 14
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                lineNumber: 426,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 10
                },
                children: [
                    [
                        [
                            'Tên khách hàng *',
                            name,
                            setName,
                            'Nhập tên'
                        ],
                        [
                            'Số điện thoại',
                            phone,
                            setPhone,
                            'Nhập SĐT'
                        ],
                        [
                            'Email',
                            email,
                            setEmail,
                            'Nhập email'
                        ]
                    ].map(([label, val, setter, ph])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: 11,
                                        fontWeight: 600,
                                        color: '#555',
                                        marginBottom: 3
                                    },
                                    children: label
                                }, void 0, false, {
                                    fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                    lineNumber: 430,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: val,
                                    onChange: (e)=>setter(e.target.value),
                                    placeholder: ph,
                                    style: inp
                                }, void 0, false, {
                                    fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                    lineNumber: 431,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, label, true, {
                            fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                            lineNumber: 429,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 11,
                                    fontWeight: 600,
                                    color: '#555',
                                    marginBottom: 3
                                },
                                children: "Hạng"
                            }, void 0, false, {
                                fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                lineNumber: 435,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: tier,
                                onChange: (e)=>setTier(e.target.value),
                                style: {
                                    ...inp,
                                    cursor: 'pointer',
                                    appearance: 'none'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "Đồng",
                                        children: "Đồng"
                                    }, void 0, false, {
                                        fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                        lineNumber: 437,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "Bạc",
                                        children: "Bạc"
                                    }, void 0, false, {
                                        fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                        lineNumber: 438,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "Vàng",
                                        children: "Vàng"
                                    }, void 0, false, {
                                        fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                        lineNumber: 439,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                lineNumber: 436,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                        lineNumber: 434,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                lineNumber: 427,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    gap: 10,
                    marginTop: 16,
                    justifyContent: 'center'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onSave,
                        disabled: isPending,
                        style: {
                            flex: 1,
                            height: 38,
                            background: '#4BCC3A',
                            color: '#fff',
                            border: 'none',
                            borderRadius: 8,
                            fontSize: 13,
                            fontWeight: 700,
                            cursor: 'pointer'
                        },
                        children: isPending ? '...' : 'Lưu'
                    }, void 0, false, {
                        fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                        lineNumber: 444,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onCancel,
                        style: {
                            flex: 1,
                            height: 38,
                            background: '#eee',
                            border: 'none',
                            borderRadius: 8,
                            fontSize: 13,
                            cursor: 'pointer'
                        },
                        children: "Hủy"
                    }, void 0, false, {
                        fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                        lineNumber: 445,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                lineNumber: 443,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
        lineNumber: 425,
        columnNumber: 5
    }, this);
}
function InvoiceSummary({ items }) {
    const totalQty = items.reduce((s, i)=>s + i.quantity, 0);
    const totalAmt = items.reduce((s, i)=>s + i.quantity * i.sell_price, 0);
    const totalDiscount = items.reduce((s, i)=>s + i.quantity * i.discount, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: 16
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            style: {
                fontSize: 13,
                minWidth: 260
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                style: {
                                    padding: '4px 8px',
                                    color: '#333'
                                },
                                children: "Tổng số lượng:"
                            }, void 0, false, {
                                fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                lineNumber: 459,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                style: {
                                    padding: '4px 8px',
                                    textAlign: 'right',
                                    fontWeight: 600
                                },
                                children: totalQty
                            }, void 0, false, {
                                fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                lineNumber: 459,
                                columnNumber: 84
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                        lineNumber: 459,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                style: {
                                    padding: '4px 8px',
                                    color: '#333'
                                },
                                children: "Tổng tiền hàng:"
                            }, void 0, false, {
                                fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                lineNumber: 460,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                style: {
                                    padding: '4px 8px',
                                    textAlign: 'right',
                                    fontWeight: 600
                                },
                                children: fmt(totalAmt + totalDiscount)
                            }, void 0, false, {
                                fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                lineNumber: 460,
                                columnNumber: 85
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                        lineNumber: 460,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                style: {
                                    padding: '4px 8px',
                                    color: '#333'
                                },
                                children: "Giảm giá:"
                            }, void 0, false, {
                                fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                lineNumber: 461,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                style: {
                                    padding: '4px 8px',
                                    textAlign: 'right',
                                    fontWeight: 600
                                },
                                children: totalDiscount > 0 ? fmt(totalDiscount) : '-'
                            }, void 0, false, {
                                fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                lineNumber: 461,
                                columnNumber: 79
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                        lineNumber: 461,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        style: {
                            borderTop: '1px solid #ddd'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                style: {
                                    padding: '8px 8px 4px',
                                    fontWeight: 700,
                                    fontSize: 14,
                                    color: '#0E176E'
                                },
                                children: "Khách cần trả:"
                            }, void 0, false, {
                                fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                lineNumber: 463,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                style: {
                                    padding: '8px 8px 4px',
                                    textAlign: 'right',
                                    fontWeight: 700,
                                    fontSize: 14,
                                    color: '#0E176E'
                                },
                                children: fmt(totalAmt)
                            }, void 0, false, {
                                fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                                lineNumber: 464,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                        lineNumber: 462,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
                lineNumber: 458,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
            lineNumber: 457,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/presentation/components/customer/CustomerTable.tsx",
        lineNumber: 456,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_1d779563._.js.map