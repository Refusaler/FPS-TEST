// script.js
let startBtn = document.getElementById("startBtn");
let fpsDisplay = document.getElementById("fps");
let fps = 0;
let frameCount = 0;
let lastTime = 0;
let fpsInterval = 1000; // 1 second interval

// Function to calculate FPS
function updateFPS() {
    let now = performance.now();
    frameCount++;

    if (now - lastTime >= fpsInterval) {
        fps = frameCount;
        fpsDisplay.innerText = fps; // Display FPS
        frameCount = 0;
        lastTime = now;
    }

    requestAnimationFrame(updateFPS); // Keep updating
}

// Start the FPS test when the button is clicked
startBtn.addEventListener("click", () => {
    lastTime = performance.now();
    frameCount = 0;
    fps = 0;
    fpsDisplay.innerText = "FPS: 0";
    updateFPS(); // Start the FPS update loop
});
