// لودر سفارشی برای فایل‌های JSON تک‌شیء (خروجی singleton های Keystatic)
// برخلاف loader پیش‌فرض file()، این لودر کل فایل رو به‌عنوان یک entry واحد می‌خونه
// بدون اینکه کلیدهای سطح بالا رو با id اشتباه بگیره
import { readFile } from 'node:fs/promises';
import type { Loader } from 'astro/loaders';

export function singletonFile(path: string, id: string): Loader {
  return {
    name: `singleton-file:${id}`,
    load: async ({ store, config, parseData, logger }) => {
      const fullPath = new URL(path, config.root);
      const raw = await readFile(fullPath, 'utf-8');
      const data = JSON.parse(raw);
      const parsedData = await parseData({ id, data });
      store.clear();
      store.set({ id, data: parsedData });
      logger.info(`Loaded singleton "${id}" from ${path}`);
    },
  };
}
