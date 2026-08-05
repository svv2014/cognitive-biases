import { useEffect, useState } from 'react';

/**
 * useState backed by localStorage. `fallback` is only consulted when nothing
 * has been stored yet. Storage failures (private mode, disabled cookies) are
 * swallowed so the app keeps working in memory.
 */
export function usePersistentState(key, fallback) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      if (stored !== null) return stored;
    } catch {
      /* storage unavailable — fall through */
    }
    return typeof fallback === 'function' ? fallback() : fallback;
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, value);
    } catch {
      /* storage unavailable — keep state in memory only */
    }
  }, [key, value]);

  return [value, setValue];
}
