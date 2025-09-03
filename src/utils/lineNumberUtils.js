/**
 * 给代码块添加行号（基于highlight.js）
 * @param {string} selector - 代码块的CSS选择器（默认：pre code）
 */
function addLineNumbers(selector = 'pre code') {
    const codeBlocks = document.querySelectorAll(selector);
    
    codeBlocks.forEach(async (block) => {
      // 1. 用highlight.js高亮代码（若未高亮）
      if (!block.classList.contains('hljs')) {
        await hljs.highlightBlock(block); // 异步高亮（避免阻塞）
      }
      
      // 2. 拆分行代码（按原代码的换行符拆分）
      const codeContent = block.innerHTML;
    //   const lines = codeContent.split('\n').filter(line => line.trim() !== ''); // 过滤空行
      const lines = codeContent.split('\n')
      
      // 3. 生成line元素（每个原代码行对应一个span.line）
      const lineElements = lines.map(line => {
        if(line){
            return `<span class="line">${line}</span>`
        } else {
            // 不过滤空行的写法
            return `<span class="line"><br/></span>`
        }
      }).join('');
      
      // 4. 更新代码块内容（替换为line元素）
      block.innerHTML = lineElements;
      
      // 5. 给父元素（pre）添加样式类（用于应用行号CSS）
      const preElement = block.parentElement;
      preElement.classList.add('code-block');
      
      // 6. 自定义起始行号（从data-start属性获取）
      const startLine = preElement.getAttribute('data-start') || 1;
      preElement.style.counterReset = `line-number ${startLine - 1}`; // 计数器初始化为startLine-1（比如startLine=5，则初始化为4，行号从5开始）
    });
  }
  
  // 页面加载完成后执行（确保DOM已渲染）
  document.addEventListener('DOMContentLoaded', () => {
    addLineNumbers(); // 调用行号插件
  });

  export { addLineNumbers }