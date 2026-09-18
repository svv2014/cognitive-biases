/**
 * The bias of the day. Derived from the calendar date alone, so everyone who
 * opens the page on the same day sees the same bias — no server, no storage.
 * Uses the local date, since "today" means the reader's today.
 */
export function dayNumber(date) {
  return Math.floor(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 86_400_000);
}

export function pickDaily(items, date = new Date()) {
  if (!items.length) return undefined;
  // A stride coprime with the list length walks every entry before repeating,
  // and keeps neighbours in the manifest from landing on consecutive days.
  const n = items.length;
  let stride = 17;
  while (gcd(stride, n) !== 1) stride++;
  return items[(((dayNumber(date) * stride) % n) + n) % n];
}

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}
