<template>
    <div class="not-found">
      <div class="stars"></div>
      
      <div class="container">
        <h1>404</h1>
        <h2>哎呀！页面飞走了...</h2>
        
        <div class="lost-planet"></div>
        
        <p>
          看起来您探索到了未知的星系。<br>
          您要找的页面可能已被黑洞吞噬，或者只是暂时离开了轨道。
        </p>
        
        <div class="path-message">{{ randomPath }}</div>
        
        <div class="suggestions">
          <h3>不如试试这些安全航道:</h3>
          <ul>
            <li>返回首页重新开始航行</li>
            <li>探索我们的最新博客内容</li>
            <li>联系指挥中心获取帮助</li>
          </ul>
        </div>
        
        <router-link to="/" class="btn">返回地球 (主页)</router-link>
      </div>
      
      <div class="error-code">ERROR-0x1F4</div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const randomPath = ref('/unknown-galaxy')
  const paths = [
    "/galaxy-explorer-2023",
    "/infinite-dimensions",
    "/quantum-data",
    "/digital-black-hole",
    "/cyber-nova"
  ];
  
  onMounted(() => {
    // 随机选择路径
    randomPath.value = paths[Math.floor(Math.random() * paths.length)]
    
    // 创建星空
    createStars()
  })
  
  function createStars() {
    const starsContainer = document.querySelector('.stars');
    const count = 200;
    
    for(let i = 0; i < count; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.width = Math.random() * 3 + 'px';
      star.style.height = star.style.width;
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.opacity = Math.random() * 0.7 + 0.1;
      star.style.animationDuration = (Math.random() * 5 + 3) + 's';
      star.style.animationDelay = (Math.random() * 3) + 's';
      starsContainer.appendChild(star);
    }
  }
  </script>
  
  <style scoped>
  .not-found {
    --primary: #6c5ce7;
    --accent: #00cec9;
    --dark: #0f0f1e;
    --darker: #0a0a14;
    --light: #f7f7f7;
    
    background: linear-gradient(135deg, var(--darker), var(--dark));
    color: var(--light);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
  }
  
  .stars {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  
  .star {
    position: absolute;
    background: white;
    border-radius: 50%;
    animation: twinkle 3s infinite ease-in-out;
  }
  
  @keyframes twinkle {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; }
  }
  
  .container {
    position: relative;
    z-index: 2;
    text-align: center;
    max-width: 800px;
    padding: 2rem;
    background: rgba(15, 15, 30, 0.7);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    border: 1px solid rgba(108, 92, 231, 0.3);
    box-shadow: 
      0 0 30px rgba(108, 92, 231, 0.1),
      0 0 60px rgba(0, 206, 201, 0.05);
  }
  
  h1 {
    font-size: 9rem;
    margin-bottom: -1rem;
    background: linear-gradient(135deg, var(--primary), var(--accent));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 20px rgba(108, 92, 231, 0.4);
  }
  
  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: var(--accent);
  }
  
  .lost-planet {
    margin: 2rem auto;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle at 30% 30%, var(--accent), var(--primary) 70%);
    border-radius: 50%;
    box-shadow: 
      0 0 60px rgba(0, 206, 201, 0.3),
      0 0 20px rgba(108, 92, 231, 0.8);
    position: relative;
    overflow: hidden;
    animation: rotate 20s infinite linear;
  }
  
  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  .lost-planet::before {
    content: '';
    position: absolute;
    top: 20%;
    left: 10%;
    width: 60px;
    height: 60px;
    background: var(--darker);
    border-radius: 50%;
  }
  
  .lost-planet::after {
    content: '';
    position: absolute;
    top: 60%;
    right: 20%;
    width: 40px;
    height: 40px;
    background: var(--darker);
    border-radius: 50%;
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    line-height: 1.6;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .path-message {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: rgba(108, 92, 231, 0.2);
    border-radius: 10px;
    font-family: monospace;
    margin: 1rem 0;
    border: 1px solid var(--primary);
  }
  
  .suggestions {
    margin: 2rem 0;
    text-align: left;
    background: rgba(0, 0, 0, 0.2);
    padding: 1.5rem;
    border-radius: 15px;
    border-left: 3px solid var(--accent);
  }
  
  .suggestions h3 {
    color: var(--accent);
    margin-bottom: 1rem;
  }
  
  .suggestions ul {
    list-style: none;
  }
  
  .suggestions li {
    margin-bottom: 0.8rem;
    padding-left: 2rem;
    position: relative;
  }
  
  .suggestions li::before {
    content: '→';
    position: absolute;
    left: 0;
    color: var(--accent);
  }
  
  .btn {
    display: inline-block;
    padding: 0.8rem 2rem;
    background: linear-gradient(135deg, var(--primary), var(--accent));
    color: white;
    font-size: 1.1rem;
    border: none;
    border-radius: 50px;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 1rem;
    font-weight: bold;
    box-shadow: 0 5px 15px rgba(108, 92, 231, 0.4);
  }
  
  .btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 206, 201, 0.6);
  }
  
  .error-code {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    color: rgba(255, 255, 255, 0.1);
    font-size: 0.8rem;
    letter-spacing: 0.1em;
  }
  
  @media (max-width: 768px) {
    .container {
      width: 90%;
    }
    
    h1 {
      font-size: 7rem;
    }
    
    h2 {
      font-size: 1.6rem;
    }
  }
  </style>