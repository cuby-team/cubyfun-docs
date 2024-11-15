---
layout: home

title: Cubyfun Docs 
titleTemplate: 

hero:
  name: Cubyfun Docs 
  text: " "
  tagline: " "
  actions:
    - theme: brand
      text: 官方网站
      link: https://www.cubyfun.com
    - theme: alt
      text: 快速开始
      link: /zh/easyplay/instructions
  image:
      src: /logo-large.webp
      alt: Cubyfun

features:
  # icon 可以直接放入 svg 图片
  - icon: 📝
    title: EasyPlay
    details: EasyPlay 描述
    link: /zh/easyplay/instructions
  - icon: 🚀
    title: Pocket2048
    details: Pocket2048 描述
    link: /zh/pocket2048/instructions
  - icon: 🆚
    title: JOYO
    details: JOYO 描述
    link: /zh/joyo/instructions
---
<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
