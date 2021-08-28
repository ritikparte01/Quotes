const quoteText = document.getElementById('quote-text'),
        quoteTags = document.getElementById('quote-tags'),
        quoteAuther = document.getElementById('quote-author'),
        genQuotebtn = document.getElementById('gen-quote-btn');

        function randomQuote(){

        fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {

            quoteText.textContent = data.content;
            quoteTags.textContent = data.tags;
            quoteAuther.textContent = `-- ${data.author}`;
        })
    }

    randomQuote();
    genQuotebtn.addEventListener('click', () =>{
        randomQuote();
    });