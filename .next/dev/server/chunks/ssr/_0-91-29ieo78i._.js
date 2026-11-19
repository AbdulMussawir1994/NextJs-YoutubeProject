module.exports = [
"[project]/components/employee-form.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EmployeeForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$employee$2d$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/employee-ui.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$externals$2f$api$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/externals/api-service.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const fields = [
    {
        name: "name",
        label: "Full name",
        placeholder: "e.g. Alex Morgan"
    },
    {
        name: "department",
        label: "Department",
        placeholder: "e.g. Engineering"
    },
    {
        name: "salary",
        label: "Salary",
        placeholder: "e.g. 5000"
    }
];
function EmployeeForm({ employee }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const visible = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(true);
    const phase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])("idle");
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        visible.current = true;
        return ()=>{
            visible.current = false;
            setError("");
            if (phase.current === "saved") {
                phase.current = "idle";
                setSaving(false);
            }
        };
    }, []);
    async function handleSubmit(event) {
        event.preventDefault();
        if (phase.current !== "idle") return;
        const form = event.currentTarget;
        const values = new FormData(form);
        const text = (name)=>String(values.get(name) ?? "").trim();
        const salary = text("salary");
        const data = {
            name: text("name"),
            department: text("department"),
            salary: Number(salary)
        };
        setError("");
        if (!data.name || !data.department || !salary || !Number.isFinite(data.salary) || data.salary < 0) {
            setError("Enter a name, department, and a salary of zero or more.");
            return;
        }
        phase.current = "saving";
        setSaving(true);
        try {
            const response = employee ? await __TURBOPACK__imported__module__$5b$project$5d2f$externals$2f$api$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["employeeAPI"].update(employee.id, data) : await __TURBOPACK__imported__module__$5b$project$5d2f$externals$2f$api$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["employeeAPI"].create(data);
            const id = typeof response.data === "number" ? response.data : response.data.id;
            if (!employee) form.reset();
            phase.current = "saved";
            if (visible.current) {
                router.replace(`/employees/${id}?message=${encodeURIComponent(response.message)}`);
            } else {
                phase.current = "idle";
                setSaving(false);
            }
        } catch (error) {
            setError(error instanceof Error ? error.message : "Could not save the employee.");
            phase.current = "idle";
            setSaving(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: "card form-card",
        onSubmit: handleSubmit,
        "aria-busy": saving,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card-heading",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Employee details"
                    }, void 0, false, {
                        fileName: "[project]/components/employee-form.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "muted",
                        children: employee ? `Employee ID: ${employee.id}` : "An employee ID will be generated when you save."
                    }, void 0, false, {
                        fileName: "[project]/components/employee-form.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/employee-form.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$employee$2d$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorNotice"], {
                message: error
            }, void 0, false, {
                fileName: "[project]/components/employee-form.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                disabled: saving,
                className: "form-fields",
                children: fields.map(({ name, label, placeholder })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `field${name === "name" ? " full-width" : ""}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: name,
                                children: [
                                    label,
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "required",
                                        children: "*"
                                    }, void 0, false, {
                                        fileName: "[project]/components/employee-form.tsx",
                                        lineNumber: 87,
                                        columnNumber: 43
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/employee-form.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: name,
                                name: name,
                                defaultValue: employee?.[name] ?? "",
                                placeholder: placeholder,
                                type: name === "salary" ? "number" : "text",
                                min: name === "salary" ? 0 : undefined,
                                step: name === "salary" ? "0.01" : undefined,
                                autoComplete: name === "name" ? "name" : undefined,
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/components/employee-form.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this)
                        ]
                    }, name, true, {
                        fileName: "[project]/components/employee-form.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/employee-form.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "form-footer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "field-hint",
                        children: "* Required fields"
                    }, void 0, false, {
                        fileName: "[project]/components/employee-form.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "actions",
                        children: [
                            saving ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "button button-secondary",
                                "aria-disabled": "true",
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/components/employee-form.tsx",
                                lineNumber: 106,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/employees",
                                className: "button button-secondary",
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/components/employee-form.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$employee$2d$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BusyButton"], {
                                busy: saving,
                                type: "submit",
                                children: employee ? "Save changes" : "Add employee"
                            }, void 0, false, {
                                fileName: "[project]/components/employee-form.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/employee-form.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/employee-form.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/employee-form.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/employee-ui.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BusyButton",
    ()=>BusyButton,
    "EmployeeScreen",
    ()=>EmployeeScreen,
    "ErrorNotice",
    ()=>ErrorNotice,
    "LoadingState",
    ()=>LoadingState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spinner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/spinner.tsx [app-ssr] (ecmascript)");
;
;
;
function EmployeeScreen({ title, description, children, actions, back = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: back ? "narrow-page" : undefined,
        children: [
            back && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: "/employees",
                className: "back-link",
                children: "← All employees"
            }, void 0, false, {
                fileName: "[project]/components/employee-ui.tsx",
                lineNumber: 14,
                columnNumber: 16
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "page-heading",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow",
                                children: "EMPLOYEE DIRECTORY"
                            }, void 0, false, {
                                fileName: "[project]/components/employee-ui.tsx",
                                lineNumber: 17,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/components/employee-ui.tsx",
                                lineNumber: 18,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "muted",
                                children: description
                            }, void 0, false, {
                                fileName: "[project]/components/employee-ui.tsx",
                                lineNumber: 19,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/employee-ui.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    actions
                ]
            }, void 0, true, {
                fileName: "[project]/components/employee-ui.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/components/employee-ui.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
function LoadingState({ text = "Loading employee...", card = true }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${card ? "card " : ""}empty-state loading-state`,
        role: "status",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spinner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                size: "large"
            }, void 0, false, {
                fileName: "[project]/components/employee-ui.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: text
            }, void 0, false, {
                fileName: "[project]/components/employee-ui.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/employee-ui.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
function ErrorNotice({ message, retry }) {
    return message ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "notice notice-error",
        role: "alert",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: message
            }, void 0, false, {
                fileName: "[project]/components/employee-ui.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            retry && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "text-button",
                type: "button",
                onClick: retry,
                children: "Try again"
            }, void 0, false, {
                fileName: "[project]/components/employee-ui.tsx",
                lineNumber: 41,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/employee-ui.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this) : null;
}
function BusyButton({ busy, children, busyText = "Saving...", danger = false, type = "button", onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: type,
        className: `button button-${danger ? "danger" : "primary"}`,
        disabled: busy,
        "aria-busy": busy,
        onClick: onClick,
        children: [
            busy && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spinner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/employee-ui.tsx",
                lineNumber: 59,
                columnNumber: 16
            }, this),
            busy ? busyText : children
        ]
    }, void 0, true, {
        fileName: "[project]/components/employee-ui.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/spinner.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Spinner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Spinner({ size = "small" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `spinner${size === "large" ? " spinner-large" : ""}`,
        "aria-hidden": "true"
    }, void 0, false, {
        fileName: "[project]/components/spinner.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/externals/api-service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApiError",
    ()=>ApiError,
    "employeeAPI",
    ()=>employeeAPI,
    "isDemoMode",
    ()=>isDemoMode
]);
const baseUrl = (process.env.NEXT_PUBLIC_API_BASE_URL?.trim() || "https://localhost:7047").replace(/\/+$/, "");
const isDemoMode = false;
const storageKey = "employee-app-key";
const employeesList = [
    {
        id: 1,
        name: "Abdul",
        department: "I.T",
        salary: 50000
    },
    {
        id: 2,
        name: "Raheel",
        department: "Finance",
        salary: 65000
    },
    {
        id: 3,
        name: "Samad",
        department: "HR",
        salary: 40000
    }
];
class ApiError extends Error {
    status;
    constructor(message, status){
        super(message), this.status = status;
        this.name = "ApiError";
    }
}
const employeeAPI = {
    async list (signal) {
        signal?.throwIfAborted();
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const response = await GenericRequest("/List", "GET", undefined, signal);
        return {
            ...response,
            data: parseEmployees(response.data)
        };
    },
    async get (id, signal) {
        signal?.throwIfAborted();
        const employeeId = parseId(id);
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const response = await GenericRequest(`/GetById/${employeeId}`, "GET", undefined, signal);
        return {
            ...response,
            data: parseEmployee(response.data)
        };
    },
    async create (data, signal) {
        signal?.throwIfAborted();
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const response = await GenericRequest("/Add", "POST", {
            ...data,
            id: 0
        }, signal);
        if (!isEmployeeId(response.data)) {
            throw new ApiError("The API returned an invalid employee ID.", 502);
        }
        return response;
    },
    async update (id, data, signal) {
        signal?.throwIfAborted();
        const employeeId = parseId(id);
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const response = await GenericRequest("/Update", "PUT", {
            ...data,
            id: employeeId
        }, signal);
        return {
            ...response,
            data: parseEmployee(response.data)
        };
    },
    async delete (id, signal) {
        signal?.throwIfAborted();
        const employeeId = parseId(id);
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const response = await GenericRequest(`/Delete/${employeeId}`, "DELETE", undefined, signal);
        if (typeof response.data !== "boolean") {
            throw new ApiError("The API returned an invalid deletion result.", 502);
        }
        if (!response.data) {
            throw new ApiError("The API did not delete the employee.", 409);
        }
        return response;
    }
};
async function GenericRequest(path, method, body, signal) {
    const response = await fetch(`${baseUrl}${path}`, {
        method,
        signal,
        cache: "no-store",
        headers: {
            Accept: "application/json",
            ...body ? {
                "Content-Type": "application/json"
            } : {}
        },
        body: body ? JSON.stringify(body) : undefined
    }).catch((error)=>{
        if (signal?.aborted) throw error;
        throw new ApiError("Could not reach the employee API. Check that the backend is running, its HTTPS certificate is trusted, and CORS allows this app.", 0);
    });
    const text = await response.text().catch((error)=>{
        if (signal?.aborted) throw error;
        throw new ApiError("The API response could not be read. Please try again.", response.ok ? 502 : response.status);
    });
    signal?.throwIfAborted();
    let payload;
    try {
        payload = JSON.parse(text);
    } catch  {
        payload = null;
    }
    const message = isRecord(payload) && typeof payload.message === "string" ? payload.message.trim() : "";
    if (!response.ok) {
        throw new ApiError(message || `The API request failed (${response.status}). Please try again.`, response.status);
    }
    if (method === "DELETE" && (text.trim() === "" || !isRecord(payload) && response.headers.get("Content-Type")?.startsWith("text/plain"))) {
        return successResponse(true, text.trim() || "Employee deleted successfully.", response.status);
    }
    if (!isRecord(payload) || typeof payload.isSuccess !== "boolean" || typeof payload.message !== "string" || typeof payload.status !== "number" || !Number.isInteger(payload.status)) {
        throw new ApiError("The API returned an invalid response wrapper.", 502);
    }
    if (!payload.isSuccess || payload.status < 200 || payload.status >= 300) {
        throw new ApiError(message || "The employee operation failed.", payload.status);
    }
    return payload;
}
function successResponse(data, message, status = 200) {
    return {
        data,
        isSuccess: true,
        message,
        status
    };
}
function readDemoEmployees() {
    let stored;
    try {
        if (typeof localStorage === "undefined") {
            throw new Error("Browser storage is unavailable.");
        }
        stored = localStorage.getItem(storageKey);
    } catch  {
        throw new ApiError("Demo data could not be read. Allow browser storage and try again.", 0);
    }
    if (stored === null) {
        const employees = employeesList.map((employee)=>({
                ...employee
            }));
        saveDemoEmployees(employees);
        return employees;
    }
    try {
        return parseEmployees(JSON.parse(stored));
    } catch  {
        throw new ApiError("Stored demo data is invalid and could not be read.", 502);
    }
}
function saveDemoEmployees(employees) {
    try {
        localStorage.setItem(storageKey, JSON.stringify(employees));
    } catch  {
        throw new ApiError("Demo data could not be saved. Allow browser storage and try again.", 0);
    }
}
function findDemoEmployee(employees, id) {
    const employee = employees.find((item)=>item.id === id);
    if (!employee) {
        throw new ApiError("Employee not found.", 404);
    }
    return employee;
}
function isRecord(value) {
    return typeof value === "object" && value !== null;
}
function isEmployeeId(value) {
    return typeof value === "number" && Number.isInteger(value) && value > 0 && value <= 2_147_483_647;
}
function parseId(id) {
    const value = Number(id);
    if (typeof id === "string" && !/^\d+$/.test(id) || !isEmployeeId(value)) {
        throw new ApiError("Invalid employee ID.", 400);
    }
    return value;
}
function parseEmployee(value) {
    if (!isRecord(value)) {
        throw new ApiError("The API returned an invalid employee response.", 502);
    }
    const { id, name, department, salary, image } = value;
    if (!isEmployeeId(id) || typeof name !== "string" || typeof department !== "string" || typeof salary !== "number" || !Number.isFinite(salary) || image !== undefined && typeof image !== "string") {
        throw new ApiError("The API returned an invalid employee response.", 502);
    }
    return {
        id,
        name,
        department,
        salary,
        ...typeof image === "string" ? {
            image
        } : {}
    };
}
function parseEmployees(value) {
    if (!Array.isArray(value)) {
        throw new ApiError("The API returned an invalid employee list.", 502);
    }
    const ids = new Set();
    return value.map((item)=>{
        const employee = parseEmployee(item);
        if (ids.has(employee.id)) {
            throw new ApiError("The API returned duplicate employee IDs.", 502);
        }
        ids.add(employee.id);
        return employee;
    });
}
}),
];

//# sourceMappingURL=_0-91-29ieo78i._.js.map