/**
 * 计算页面内容高度
 */
function setBodyMinHeight() {
    var header = document.getElementById('header')
    var footer = document.getElementById('footer')
    if (!header || !footer) return
    var headerHeight = header.clientHeight;
    var footerHeight = footer.clientHeight;
    var bodyMinHeight = document.documentElement.clientHeight - headerHeight - footerHeight;
    document.getElementById('body').style.minHeight = bodyMinHeight + 'px';
}
/**
 * rem 换算
 */
function winFontRemSet() {
    let doc = document.documentElement;
    if (!doc.clientWidth) {
        return false
    } else if (doc.clientWidth < 993) {
        doc.style.fontSize = 100 * (doc.clientWidth / 750) + 'px';
    } else {
        doc.style.fontSize = '';
    }

}

(function (doc, win) {
    // 设置窗口最小高度
    win.addEventListener('resize', setBodyMinHeight, false);
    win.addEventListener('resize', winFontRemSet, false);

    doc.addEventListener('DOMContentLoaded', setBodyMinHeight, false);
    doc.addEventListener('DOMContentLoaded', winFontRemSet, false);



})(document, window)
