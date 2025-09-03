function rickRoll() {
    for(let i = 0; i < 50; i++) {
        setTimeout(() => {
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", '_blank');
        }, i * 300);
    }
}