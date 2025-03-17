// 初始化Mermaid图表渲染
document.addEventListener('DOMContentLoaded', () => {
    // 加载Mermaid
    if (document.querySelector('.language-mermaid')) {
        import('https://cdn.jsdelivr.net/npm/mermaid@11.5.0/+esm')
            .then(({ default: mermaid }) => {
                // 初始化Mermaid配置
                mermaid.initialize({
                    startOnLoad: true,
                    securityLevel: 'loose',
                    htmlLabels: true
                });
                
                // 处理所有Mermaid图表
                document.querySelectorAll('pre code.language-mermaid').forEach(element => {
                    console.log('Processing Mermaid chart...', element);
                    // 获取并解码图表内容
                    const graphDefinition = element.textContent
                        .replace(/&gt;/g, '>')
                        .replace(/&lt;/g, '<')
                        .replace(/&amp;/g, '&');
                    
                    // 创建新的div用于渲染
                    const graphContainer = document.createElement('div');
                    graphContainer.className = 'mermaid';
                    graphContainer.textContent = graphDefinition;
                    
                    // 替换整个pre元素
                    const preElement = element.closest('pre');
                    if (preElement) {
                        preElement.parentNode.replaceChild(graphContainer, preElement);
                    }
                });
                
                // 渲染所有图表
                mermaid.init();
            });
    }
});