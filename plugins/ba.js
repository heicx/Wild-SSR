
export default ({ app }) => {
 if (process.env.NODE_ENV !== 'production') return

  var _hmt = _hmt || [];
  (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?36734dd47df42bbcaa2095b25bb3bbb6";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
  })();
}
