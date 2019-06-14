export const canvas_circle = function ({w, canvasOption, canvasCtx}) {
    canvasOption.circle_x += 1

    if (canvasOption.circle_x>w) { canvasOption.circle_x = 100 }
    
    canvasCtx.beginPath()
    canvasCtx.arc(canvasOption.circle_x, 100, 50, 0, Math.PI * 2, true)
    canvasCtx.closePath()
    canvasCtx.fillStyle = "teal"
    canvasCtx.fill()
}