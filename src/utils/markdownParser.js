import MarkdownIt from "markdown-it";
import hljs from "highlight.js";
import 'highlight.js/styles/github.css'

const md = new MarkdownIt({
    html: true,
    linkify: true,
    highlight: (code, lang) => {
        if(lang && hljs.getLanguage(lang)){
            return hljs.highlight(code, {language: lang}).value
        }
        return code
    }
})

export const parseMarkdown = content => md.render(content)