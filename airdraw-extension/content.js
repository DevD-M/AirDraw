
const videoEl = document.createElement('video');
videoEl.autoplay = true;
videoEl.playsInline = true;
videoEl.muted = true;
videoEl.style.position = 'fixed';
videoEl.style.top = '0';
videoEl.style.left = '0';
videoEl.style.width = '640px';
videoEl.style.height = '480px';
videoEl.style.zIndex = '99999';
videoEl.style.opacity = '0.3';
document.body.appendChild(videoEl);

const drawingCanvas = document.createElement('canvas');
drawingCanvas.width = 640;
drawingCanvas.height = 480;
drawingCanvas.style.position = 'fixed';
drawingCanvas.style.top = '0';
drawingCanvas.style.left = '0';
drawingCanvas.style.width = '640px';
drawingCanvas.style.height = '480px';
drawingCanvas.style.zIndex = '999999';
drawingCanvas.style.pointerEvents = 'none';
document.body.appendChild(drawingCanvas);

const drawCtx = drawingCanvas.getContext('2d');
drawCtx.strokeStyle = '#7fffd4';
drawCtx.lineWidth = 4;
drawCtx.lineCap = 'round';