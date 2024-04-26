function aspect(x) {
    const scale = window.devicePixelRatio || 1;
    const textsize = (x * scale) / (1920 / screenWidth)
    
    return textsize
}