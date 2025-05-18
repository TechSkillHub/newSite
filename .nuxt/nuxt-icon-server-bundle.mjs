function createRemoteCollection(fetchEndpoint) {
  let _cache
  return async () => {
    if (_cache)
      return _cache
    const res = await fetch(fetchEndpoint).then(r => r.json())
    _cache = res
    return res
  }
}

export const collections = {
  'fa6-brands': () => import('@iconify-json/fa6-brands/icons.json', { with: { type: 'json' } }).then(m => m.default),
  'fluent': () => import('@iconify-json/fluent/icons.json', { with: { type: 'json' } }).then(m => m.default),
  'logos': () => import('@iconify-json/logos/icons.json', { with: { type: 'json' } }).then(m => m.default),
  'material-symbols': () => import('@iconify-json/material-symbols/icons.json', { with: { type: 'json' } }).then(m => m.default),
  'mdi': () => import('@iconify-json/mdi/icons.json', { with: { type: 'json' } }).then(m => m.default),
  'ri': () => import('@iconify-json/ri/icons.json', { with: { type: 'json' } }).then(m => m.default),
  'svg-spinners': () => import('@iconify-json/svg-spinners/icons.json', { with: { type: 'json' } }).then(m => m.default),
}