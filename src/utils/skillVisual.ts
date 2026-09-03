// تولید خودکار رنگ و لیبل کوتاه برای هر مهارت (تا نیازی به وارد کردن دستی رنگ توی CMS نباشه)
const PALETTE = [
  'bg-blue-600',
  'bg-yellow-500',
  'bg-orange-600',
  'bg-emerald-600',
  'bg-slate-600',
  'bg-violet-600',
  'bg-sky-500',
  'bg-indigo-500',
  'bg-purple-600',
  'bg-cyan-500',
  'bg-red-500',
  'bg-teal-600',
  'bg-amber-500',
  'bg-pink-600',
  'bg-lime-600',
];

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export function getSkillVisual(name: string) {
  const color = PALETTE[hashString(name) % PALETTE.length];
  // لیبل کوتاه: اگه اسم چند کلمه‌ست حرف اول هر کلمه (حداکثر ۲ حرف)، وگرنه ۲ حرف اول
  const words = name.trim().split(/\s+/);
  let letter: string;
  if (words.length > 1) {
    letter = words.slice(0, 2).map((w) => w[0]).join('').toUpperCase();
  } else {
    letter = name.slice(0, 2);
  }
  return { color, letter };
}
