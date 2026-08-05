/**
 * Lower-cases and strips diacritics so "zolc" matches "żółć" and
 * "Memoria" matches "memória".
 */
export function normalize(value) {
  return String(value)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

/**
 * Filters entries by free-text query and selected categories.
 * Categories combine as OR (any match); the query must also match.
 */
export function filterBiases(entries, query, activeCategories) {
  const needle = normalize(query ?? '').trim();
  const cats = activeCategories ?? [];

  return entries.filter((entry) => {
    if (cats.length && !cats.some((c) => entry.categories.includes(c))) return false;
    return !needle || entry.haystack.includes(needle);
  });
}
