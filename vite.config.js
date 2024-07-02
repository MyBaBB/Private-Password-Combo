import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./" , 
  plugins:  [
    react(),
    VitePWA({
      manifest: {
        "name":"Password-Generator",
        "short_name":"Notes",
        "start_url":"./",
        "display":"standalone",
        "background_color":"#2a61a1",
        "lang":"en","scope":"./",
        "icons":[
          {
            "src":"favicon-32x32.png",
             "sizes":"32x32","type":"image/png",
             "purpose":"any maskable"
            },
             {
              "src":"favicon-16x16.png",
              "sizes":"16x16",
              "type":"image/png",
              "purpose":"any maskable"
            },
              
              {
                "src":"maskable_icon.png",
                "sizes":"192x192","type":"image/png",
                "purpose":"any maskable"
            },
              {
                "src":"logo192.png",
              "sizes":"192x192",
              "type":"image/png"
            },
              {
                "src":"logo256.png",
                "sizes":"256x256",
                "type":"image/png"
            },
              {
                "src":"logo384.png",
                "sizes":"384x384",
                "type":"image/png"
            },
              {
                "src":"logo512.png",
                "sizes":"512x512",
                "type":"image/png"
            },
              {
                "src":"android-chrome-512.png",
                "sizes":"512x512","type":"image/png",
                "purpose":"any maskable"
            },
              {
                "src":"android-chrome-192.png",
                "sizes":"192x192","type":"image/png",
                "purpose":"any maskable"
            },
              {
                "src":"apple-touch-icon.png",
                "sizes":"180x180","type":"image/png",
                "purpose":"any maskable"
            }],
              "theme_color":"#0d2657"
            }
    }),
  ],
})
