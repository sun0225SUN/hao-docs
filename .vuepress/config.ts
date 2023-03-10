import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  title: "Halo-Theme-Hao",
  description: "一款精美的 Halo2.x 主题",
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  lang: "zh-CN",
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "程序员小航",
    authorAvatar: "/logo.png",
    lastUpdatedText: "最后更新时间",
    series: {
      "/docs/guide/": [
        {
          text: "开始",
          children: ["introduce","quick-start"],
        },
        {
          text: "配置文档",
          children: ["setting"],
        },
      ],
    },
    navbar: [
      { text: "首页", icon: 'Home', link: "/" },
      { text: "文档", icon: 'Document', link: "/docs/guide/introduce" },
      { text: "常见问题", icon: 'Help', link: "/docs/question" },
      { text: "留言反馈", icon: 'Chat', link: "/docs/comments" },
      { text: "站点示例", icon: 'Events', link: "/docs/example" },
    ],
    bulletin: {
      body: [
        {
          type: "title",
          content: `🎉欢迎大家使用 Hao 主题🎉`,
          style: "font-size: 14px;",
        },
        {
          type: "hr",
        },
        {
          type: "text",
          content: `想了解更多信息可以关注微信公众号 「 程序员小航 」。<br><br>发送 "hao群" 可以加群 （群验证信息最好是个人网站）<br><br>发送"加好友"，可以加我微信，我拉你进群 （群二维码失效时）`,
          style: "font-size: 13px;",
        },
        {
          type: "hr",
        },
        {
          type: "title",
          content: "GitHub",
        },
        {
          type: "text",
          content: `
          <ul>
            <li><a href="https://github.com/liuzhihang/halo-theme-hao/issues">Issues<a/></li>
            <li><a href="https://github.com/liuzhihang/halo-theme-hao/discussions">Discussions<a/></li>
          </ul>`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "buttongroup",
          children: [
            {
              text: "打赏",
              link: "/docs/donate.html",
            },
          ],
        },
      ],
    },
    commentConfig: {
      type: 'waline',
      options: {
        serverURL: 'https://docs-waline.vercel.sunguoqi.com/',
      },
    },
  }),
  // debug: true,
});
