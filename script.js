function scare() {
    document.getElementById('scary').style.display = 'block';
    setTimeout(function() {
        document.getElementById('scary').style.display = 'none';
    }, 1000);
    return;
}

function setTheme(theme) {
    const root = document.querySelector(':root');
    
    if (theme === 'default') {
        // Default cyan theme (current theme)
        root.style.setProperty('--primary-color', '#03d5ff');
        root.style.setProperty('--secondary-color', '#74c5eb');
        root.style.setProperty('--shadow-color', '#00af49');
        root.style.setProperty('--background-color', '#000000');
        root.style.setProperty('--text-primary', '#e3f2fd');
        root.style.setProperty('--text-secondary', '#90a4ae');
        root.style.setProperty('--link-color', '#6ec1f4');
        root.style.setProperty('--link-hover-color', '#e3f2fd');
        root.style.setProperty('--bg-surface', '#131417');
        root.style.setProperty('--bg-elevated', '#1c1e23');
        root.style.setProperty('--nav-background-color', '#0f1115');
        root.style.setProperty('--grid-line-color', 'rgba(79, 209, 255, 0.25)');
    }
    else if (theme === 'blue') {
        // Blue/Purple theme
        root.style.setProperty('--primary-color', '#00d4ff');
        root.style.setProperty('--secondary-color', '#8080ff');
        root.style.setProperty('--shadow-color', '#8000ff');
        root.style.setProperty('--background-color', '#000000');
        root.style.setProperty('--text-primary', '#e6e6ff');
        root.style.setProperty('--text-secondary', '#a0a0d0');
        root.style.setProperty('--link-color', '#9090ff');
        root.style.setProperty('--link-hover-color', '#e6e6ff');
        root.style.setProperty('--bg-surface', '#0f0f1f');
        root.style.setProperty('--bg-elevated', '#1a1a2e');
        root.style.setProperty('--nav-background-color', '#0a0a15');
        root.style.setProperty('--grid-line-color', 'rgba(128, 128, 255, 0.25)');
    }
    else if (theme === 'green') {
        // Green theme
        root.style.setProperty('--primary-color', '#00ff00');
        root.style.setProperty('--secondary-color', '#7fff00');
        root.style.setProperty('--shadow-color', '#008000');
        root.style.setProperty('--background-color', '#000000');
        root.style.setProperty('--text-primary', '#e6ffe6');
        root.style.setProperty('--text-secondary', '#90d090');
        root.style.setProperty('--link-color', '#90ff90');
        root.style.setProperty('--link-hover-color', '#e6ffe6');
        root.style.setProperty('--bg-surface', '#0a1f0a');
        root.style.setProperty('--bg-elevated', '#0f2e0f');
        root.style.setProperty('--nav-background-color', '#051505');
        root.style.setProperty('--grid-line-color', 'rgba(0, 255, 0, 0.25)');
    }
    else if (theme === 'red') {
        // Red/Orange theme
        root.style.setProperty('--primary-color', '#ff3030');
        root.style.setProperty('--secondary-color', '#ff8080');
        root.style.setProperty('--shadow-color', '#ff0000');
        root.style.setProperty('--background-color', '#000000');
        root.style.setProperty('--text-primary', '#ffe6e6');
        root.style.setProperty('--text-secondary', '#d0a0a0');
        root.style.setProperty('--link-color', '#ff9090');
        root.style.setProperty('--link-hover-color', '#ffe6e6');
        root.style.setProperty('--bg-surface', '#1f0a0a');
        root.style.setProperty('--bg-elevated', '#2e0f0f');
        root.style.setProperty('--nav-background-color', '#150505');
        root.style.setProperty('--grid-line-color', 'rgba(255, 48, 48, 0.25)');
    }
    else if (theme === 'purple') {
        root.style.setProperty('--primary-color', '#bf00ff');
        root.style.setProperty('--secondary-color', '#ff00ff');
        root.style.setProperty('--shadow-color', '#ff00a0');
        root.style.setProperty('--background-color', '#0a0012');
        root.style.setProperty('--text-primary', '#f0d0ff');
        root.style.setProperty('--text-secondary', '#b080d0');
        root.style.setProperty('--link-color', '#e060ff');
        root.style.setProperty('--link-hover-color', '#ff40ff');
        root.style.setProperty('--bg-surface', '#150020');
        root.style.setProperty('--bg-elevated', '#1f0030');
        root.style.setProperty('--nav-background-color', '#0d0018'); 
        root.style.setProperty('--grid-line-color', 'rgba(191, 0, 255, 0.15)'); 
    }
    else if (theme === 'rainbow') {
        document.getElementById('scary').style.display = 'block';
        setTimeout(function() {
            document.getElementById('scary').style.display = 'none';
        }, 1000);
        return;
    }
}

