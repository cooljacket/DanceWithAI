// 初始化Mermaid图表渲染和TOC功能
document.addEventListener('DOMContentLoaded', () => {
    // 生成TOC目录
    const tocContainer = document.getElementById('toc');
    if (tocContainer) {
        const headings = document.querySelectorAll('.markdown-body h1, .markdown-body h2, .markdown-body h3, .markdown-body h4, .markdown-body h5, .markdown-body h6');
        const tocItems = [];

        headings.forEach((heading, index) => {
            // 为每个标题添加ID
            const id = `heading-${index}`;
            heading.id = id;

            // 创建目录项
            const tocItem = document.createElement('div');
            tocItem.className = `toc-item toc-${heading.tagName.toLowerCase()}`;
            
            const link = document.createElement('a');
            link.href = `#${id}`;
            link.className = 'toc-link';
            link.textContent = heading.textContent;
            
            tocItem.appendChild(link);
            tocContainer.appendChild(tocItem);
            tocItems.push({ link, heading });

            // 点击目录项时平滑滚动到对应位置
            link.addEventListener('click', (e) => {
                e.preventDefault();
                heading.scrollIntoView({ behavior: 'smooth' });
            });
        });

        // 监听滚动事件，更新目录项高亮状态
        let lastActiveLink = null;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const index = Array.from(headings).indexOf(entry.target);
                if (index !== -1) {
                    const { link } = tocItems[index];
                    if (entry.isIntersecting) {
                        if (lastActiveLink) {
                            lastActiveLink.classList.remove('active');
                        }
                        link.classList.add('active');
                        lastActiveLink = link;
                    }
                }
            });
        }, {
            rootMargin: '-60px 0px -90% 0px'
        });

        headings.forEach(heading => observer.observe(heading));
    }
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

    // 加载KaTeX
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/katex@0.16.21/dist/katex.min.css';
    document.head.appendChild(link);

    import('https://cdn.jsdelivr.net/npm/katex@0.16.21/dist/katex.min.js')
        .then(() => {
            import('https://cdn.jsdelivr.net/npm/katex@0.16.21/dist/contrib/auto-render.min.js')
                .then(() => {
                    renderMathInElement(document.body, {
                        delimiters: [
                            { left: '$$', right: '$$', display: true },
                            { left: '$', right: '$', display: false },
                            { left: '\\[', right: '\\]', display: true },
                            { left: '\\(', right: '\\)', display: false }
                        ],
                        throwOnError: false
                    });
                });
        });
});