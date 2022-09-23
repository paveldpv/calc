const staticCacheName = `s-app-v2`

const assetURLs=[
   'index.html',
   `static/js/bundle.js`
]

self.addEventListener(`install`,async e=>{
   const cache = await caches.open(staticCacheName)
   await cache.addAll(assetURLs)

})

self.addEventListener(`activate`,async e=>{
   const chahesNames = await caches.keys()
   await Promise.all(
      chahesNames.filter(name =>name!=staticCacheName)
      .map(name=>caches.delete(name))//очищаем старые кеш
   )
   
})

self.addEventListener(`fetch`,e=>{
   console.log(`fethc`,e.request);

   e.respondWith(cahceFirst(e.request))
})



async function cahceFirst(request){
  const cahced =  await caches.match(request)
  return cahced ?? await fetch(request)
}