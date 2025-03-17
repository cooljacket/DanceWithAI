document.addEventListener('DOMContentLoaded', () => {
    // 获取主题切换按钮和根元素
    const themeToggle = document.querySelector('.theme-toggle');
    const root = document.documentElement;

    // 从本地存储中获取主题设置
    const savedTheme = localStorage.getItem('theme') || 'light';
    root.setAttribute('data-theme', savedTheme);

    // 切换主题
    themeToggle.addEventListener('click', () => {
        const currentTheme = root.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        root.setAttribute('data-theme', newTheme);
        document.body.style.backgroundColor = getComputedStyle(root).getPropertyValue('--bg');
        document.body.style.color = getComputedStyle(root).getPropertyValue('--text');
        localStorage.setItem('theme', newTheme);

        // 添加全局过渡动画类
        document.body.style.transition = 'background-color 0.1s, color 0.1s, text-color 0.1s';
    });
});