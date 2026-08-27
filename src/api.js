/**
 * آدرس پایهٔ API در یک نقطه نگه‌داری می‌شود.
 *
 * توسعه (npm run dev)  → VITE_API_URL از .env.development خوانده می‌شود
 *                        و به json-server روی http://localhost:3000 وصل می‌شویم.
 * پروداکشن (Vercel)    → متغیر تعریف نشده و مقدار پیش‌فرض «/api» استفاده می‌شود؛
 *                        یعنی Serverless Function های همین پروژه روی همان دامنه.
 */
export const API_BASE = import.meta.env.VITE_API_URL || '/api';
