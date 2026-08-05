import { useEffect, useState } from 'react';

/** Returns `value` after it has stopped changing for `delay` ms. */
export function useDebounced(value, delay = 200) {
  const [settled, setSettled] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => setSettled(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);

  return settled;
}
