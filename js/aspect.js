function aspect(x) {

   
    
    const textsize = (x) / (1920 / screenWidth)
    return textsize
}
let screenWidth = 1920;
let screenHeight = 1080;
(function(d) {
    var config = {
      kitId: 'YOUR_ADOBE_FONTS_KIT_ID',
      scriptTimeout: 3000,
      async: true
    };
    var h = d.documentElement, t = setTimeout(function() {
      h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
    }, config.scriptTimeout), tk = d.createElement("script"), f = false, s = d.getElementsByTagName("script")[0], a;
    h.className += " wf-loading";
    
    tk.async = true;
    tk.onload = tk.onreadystatechange = function() {
      a = this.readyState;
      if (f || a && a != "complete" && a != "loaded") return;
      f = true;
      clearTimeout(t);
      try {
        Typekit.load(config);
      } catch (e) {}
    };
    s.parentNode.insertBefore(tk, s);
  })(document);