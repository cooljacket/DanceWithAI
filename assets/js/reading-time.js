// 计算阅读时间和字数的函数
function calculateReadingStats(content) {
    // 中文字符匹配正则
    const chineseRegex = /[\u4e00-\u9fa5]/g;
    // 英文单词匹配正则
    const englishRegex = /\b[a-zA-Z]+\b/g;
    // 图片标签匹配正则
    const imageRegex = /<img[^>]*>/g;

    // 获取中文字符数
    const chineseChars = (content.match(chineseRegex) || []).length;
    // 获取英文单词数
    const englishWords = (content.match(englishRegex) || []).length;
    // 获取图片数量
    const images = (content.match(imageRegex) || []).length;

    // 设定阅读速度参数
    const chineseSpeed = 300; // 每分钟阅读300个中文字
    const englishSpeed = 200; // 每分钟阅读200个英文单词
    const imageTime = 8; // 每张图片8秒

    // 计算阅读时间（分钟）
    const chineseTime = chineseChars / chineseSpeed;
    const englishTime = englishWords / englishSpeed;
    const totalImageTime = (images * imageTime) / 60; // 转换为分钟

    // 总阅读时间（分钟）
    const totalTime = chineseTime + englishTime + totalImageTime;

    // 计算总字数（将英文单词也算作一个字）
    const totalWords = chineseChars + englishWords;

    // 格式化阅读时间
    let readingTime;
    if (totalTime < 1) {
        readingTime = '小于1分钟';
    } else {
        readingTime = `约${Math.ceil(totalTime)}分钟`;
    }

    return {
        readingTime,
        wordCount: totalWords
    };
}

// 在页面加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    const articleContent = document.querySelector('.page-content');
    if (articleContent) {
        const stats = calculateReadingStats(articleContent.innerHTML);
        const readingTimeElement = document.querySelector('.reading-time');
        if (readingTimeElement) {
            readingTimeElement.textContent = `字数：${stats.wordCount} | 阅读时间：${stats.readingTime}`;
        }
    }
});