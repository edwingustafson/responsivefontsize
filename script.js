const handler = (event) => {
    document.getElementById('viewportWidth').textContent = window.visualViewport.width.toFixed(2);
    document.getElementById('fontSize').textContent = window.getComputedStyle(document.body).getPropertyValue('font-size');
};

addEventListener('load', handler);
addEventListener('resize', handler);