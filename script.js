const quotes=[
    {
        text: "The only way to do great work is to love what you do",
        author: "Steve Jobs"
    },
    {
        text: "Life is what happens when you're bust making other plans",
        author: "John Lennon"
    },
    {
        text: "In three words I can sum up everything I've Learned about life: it goes on.",
        author: "Robert Frost"
    },
    {
        text: "The best time to plant a tree was 20 years ago. The second best time is now.",
        author: "chines proverb"
    },
    {
        text: "You miss 100% of the shots you can don't take.",
        author: "Wayne Gretzky"
    }
];

function generateRandomQuote(){
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    document.getElementById('quote-text').textContent = randomQuote.text;
    document.getElementById('quote-author').textContent = ` - ${randomQuote.author}`;
}


document.getElementById('new-quote-button').addEventListener('click', generateRandomQuote);
generateRandomQuote();
function readALoud(){
    const quoteText = document.getElementById('quote-text'.textContent);
    const utterance = new SpeechSynthesisUtterance(quoteText);
    speechSynthesis.speak(utterance);
}

function copyText (){
    const quoteText = document.getElementById('quote-text').textContent;
    const textArea = document.createElement('textarea');
    textArea.value = quoteText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert("Text copied to clipboard!");
}

function shareOnTwitter(){
    const quoteText = document.getElementById('quote-text').textContent;
    const quoteAuthor = document.getElementById('quote-author').textContent;
    const twitterURL = `https://twitter.com/intent/tweet?text=${encodeURLIComponent(quoteText + "\n- " + quoteAuthor)}`;
    window.open(twitterURL, "_blank");
}

document.getElementById('read-aloud-button').addEventListener(`click`, readALoud);
document.getElementById('copy-text-button').addEventListener(`click`, copyText);
document.getElementById('share-button').addEventListener(`click`, shareOnTwitter);