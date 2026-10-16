<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'

const { lang } = useData()
const zh = computed(() => lang.value.toLowerCase().startsWith('zh'))

const copy = computed(() =>
  zh.value
    ? {
        eyebrow: '开源网页画板',
        title: 'Paint Board',
        lede: '一款完全开源的 Web 端创意画板。支持多种画笔、涂鸦图形、文字和图片，可以满足你的无限创作可能',
        try: '在线体验',
        source: '查看源码',
        guide: '从这里开始',
        features: [
          {
            icon: 'brush',
            title: '自由绘画',
            text: '十多种画笔。颜色、宽度、线型和阴影等各种自定义配置都可以设置。'
          },
          {
            icon: 'shape',
            title: '图形与文字',
            text: '内置多种自定义涂鸦图形、字体和图片，并有丰富的自定义配置。'
          },
          {
            icon: 'select',
            title: '选择编辑',
            text: '所有绘制内容均可移动、缩放、旋转，并可设置图层、透明度和锁定。'
          },
          {
            icon: 'boards',
            title: '多画板',
            text: 'Paint Board 同一页面下支持多个画板，满足你丰富的创作需求。'
          }
        ]
      }
    : {
        eyebrow: 'Open-source web canvas',
        title: 'Paint Board',
        lede: 'A fully open-source creative canvas for the web. Brushes, sketched shapes, text, and pictures, with room for whatever you want to make.',
        try: 'Try it online',
        source: 'View source',
        guide: 'Start here',
        features: [
          {
            icon: 'brush',
            title: 'Free drawing',
            text: 'A dozen brushes. Color, width, line style, shadow, and the other custom settings can all be changed.'
          },
          {
            icon: 'shape',
            title: 'Shapes and text',
            text: 'Built-in sketched shapes, fonts, and pictures, with a wide set of custom settings.'
          },
          {
            icon: 'select',
            title: 'Select and edit',
            text: 'Move, scale, and rotate anything you draw, and set its layer, opacity, and lock.'
          },
          {
            icon: 'boards',
            title: 'Multiple boards',
            text: 'Paint Board can hold several boards on the same page, enough for a wider range of work.'
          }
        ]
      }
)

const guideHref = computed(() =>
  withBase(zh.value ? '/zh/guide/getting-started' : '/guide/getting-started')
)
</script>

<template>
  <div class="home">
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">{{ copy.eyebrow }}</p>
        <h1>{{ copy.title }}</h1>
        <p class="lede">{{ copy.lede }}</p>
        <div class="actions">
          <a class="btn primary" href="https://songlh.top/paint-board/">{{
            copy.try
          }}</a>
          <a class="btn quiet" href="https://github.com/LHRUN/paint-board">{{
            copy.source
          }}</a>
          <a class="btn quiet" :href="guideHref">{{ copy.guide }}</a>
        </div>
      </div>

      <div class="hero-visual">
        <div class="hero-glow" aria-hidden="true"></div>
        <img
          class="hero-shot"
          :src="withBase('/images/preview_device.png')"
          alt="Paint Board on a laptop, tablet, and phone"
        />
      </div>
    </section>

    <section class="feature-row">
      <div
        v-for="item in copy.features"
        :key="item.title"
        class="feature"
      >
        <span class="feature-icon" aria-hidden="true">
          <svg
            v-if="item.icon === 'brush'"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.7"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M4 16c2.5-4 5-6 8.5-6.5" />
            <path d="M13 9.5c2.2-.4 4.2.2 6.2-1.2-1 3.2-.4 5.2-2.4 7.2-1.6 1.6-3.8 2-5.6 1.2" />
            <path d="M9.2 15.2 4.8 19.6" />
          </svg>
          <svg
            v-else-if="item.icon === 'shape'"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.7"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="3.5" y="3.5" width="8" height="8" rx="1.5" />
            <circle cx="16.5" cy="8" r="4" />
            <path d="M12.5 20.5 16 13.5l3.5 7z" />
          </svg>
          <svg
            v-else-if="item.icon === 'select'"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.7"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 4.5 5 16l3.2-3.1 2.2 5.2 2.3-1-2.2-5.1H15L5 4.5z" />
          </svg>
          <svg
            v-else
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.7"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="3.5" y="5" width="12" height="9" rx="1.6" />
            <rect x="8.5" y="10" width="12" height="9" rx="1.6" />
          </svg>
        </span>
        <h2>{{ item.title }}</h2>
        <p>{{ item.text }}</p>
      </div>
    </section>
  </div>
</template>
