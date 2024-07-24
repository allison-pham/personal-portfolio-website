// typing-effect.js

const typedTextElement = document.getElementById("typed-text");
const words = ["student", "developer", "designer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 150; // Adjust typing speed here
const erasingSpeed = 100; // Adjust erasing speed here
const delayBetweenWords = 2000; // Delay between each word

function type() {
  const currentWord = words[wordIndex];
  if (isDeleting) {
    typedTextElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex == 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(type, erasingSpeed);
    }
  } else {
    typedTextElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex == currentWord.length) {
      isDeleting = true;
      setTimeout(type, delayBetweenWords);
    } else {
      setTimeout(type, typingSpeed);
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (typedTextElement) {
    type();
  }
});
