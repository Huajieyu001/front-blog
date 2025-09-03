import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';
import highlightjs from 'markdown-it-highlightjs';
import 'highlight.js/styles/agate.css'; // 选择你喜欢的主题
// import 'highlightjs-line-numbers.js';// 行号插件

// 创建 MarkdownIt 实例
const md = new MarkdownIt({
  html: false,       // 允许 HTML 标签
  linkify: true,    // 自动转换 URL 为链接
  typographer: true // 美化排版（如引号转换）
}).use(highlightjs, { 
  // 传递给 highlight.js 的选项
  hljs: hljs,       // 传入 highlight.js 实例
  auto: true,       // 自动检测语言
  code: true,       // 启用代码块高亮
  inline: false,     // 不处理行内代码
});

// 可选：自定义语言别名
hljs.configure({
  languages: ['javascript', 'typescript', 'java', 'python', 'html', 'css', 'vue']
});

// 导出解析函数
export const parseMarkdown = (content) => {
  return md.render(content);
};