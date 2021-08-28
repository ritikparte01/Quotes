const quoteText = document.getElementById('quote-text'),
        quoteTags = document.getElementById('quote-tags'),
        quoteAuther = document.getElementById('quote-author'),
        genQuotebtn = document.getElementById('gen-quote-btn');

        const tweet = document.getElementById('tweet');

        const tweetNow = () =>{
            let tweetPost = `https://twitter.com/intent/tweet?text=${quoteText.textContent} ${quoteAuther.textContent}`;
            window.open(tweetPost);

        }

        function randomQuote(){

        fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {

            quoteText.textContent = data.content;
            quoteTags.textContent = data.tags;
            quoteAuther.textContent = `-- ${data.author}`;
            tweet.addEventListener('click', tweetNow);
        })
    }



    randomQuote();
    genQuotebtn.addEventListener('click', () =>{
        randomQuote();
    });