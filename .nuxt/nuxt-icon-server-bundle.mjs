import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
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
  'fa6-brands': () => require('@iconify-json/fa6-brands/icons.json'),
  'fluent': () => require('@iconify-json/fluent/icons.json'),
  'logos': () => require('@iconify-json/logos/icons.json'),
  'material-symbols': () => require('@iconify-json/material-symbols/icons.json'),
  'mdi': () => require('@iconify-json/mdi/icons.json'),
  'ri': () => require('@iconify-json/ri/icons.json'),
  'svg-spinners': () => require('@iconify-json/svg-spinners/icons.json'),
}