// Hello World App JavaScript
let messages = [
    "Hello, World!",
    "¡Hola Mundo!",
    "Bonjour le Monde!",
    "Hallo Welt!",
    "Ciao Mondo!",
    "你好，世界！"
];

let currentIndex = 0;

function changeMessage() {
    const title = document.querySelector('.title');
    currentIndex = (currentIndex + 1) % messages.length;
    
    // Add fade-out effect
    title.style.opacity = '0';
    
    setTimeout(() => {
        title.textContent = messages[currentIndex];
        // Add fade-in effect
        title.style.opacity = '1';
    }, 300);
}