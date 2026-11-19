self.addEventListener("install",e=>self.skipWaiting());
self.addEventListener("activate",e=>e.waitUntil(clients.claim()));
self.addEventListener("notificationclick",e=>{e.notification.close();e.waitUntil(clients.matchAll({type:"window"}).then(l=>{for(const c of l){if("focus"in c)return c.focus()}return clients.openWindow("./#dhikr")}))});
self.addEventListener("periodicsync",e=>{if(e.tag!=="nw-adhkar")return;const h=new Date().getHours(),m=h>=4&&h<12?"الصباح":h>=15?"المساء":null;
  if(m)e.waitUntil(self.registration.showNotification("نويس",{body:"حان وقت أذكار "+m+" — اقرأها الآن",icon:"icon-192.png",tag:"nw-"+m,lang:"ar",dir:"rtl"}))});
