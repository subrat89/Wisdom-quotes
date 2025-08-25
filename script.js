// Quotes Database
const quotes = [
    // The Alchemist - Paulo Coelho
    {
        text: "And, when you want something, all the universe conspires in helping you to achieve it.",
        book: "The Alchemist",
        author: "Paulo Coelho"
    },
    {
        text: "It's the possibility of having a dream come true that makes life interesting.",
        book: "The Alchemist",
        author: "Paulo Coelho"
    },
    {
        text: "When we love, we always strive to become better than we are. When we strive to become better than we are, everything around us becomes better too.",
        book: "The Alchemist",
        author: "Paulo Coelho"
    },
    {
        text: "The secret of life, though, is to fall seven times and to get up eight times.",
        book: "The Alchemist",
        author: "Paulo Coelho"
    },
    {
        text: "Everyone seems to have a clear idea of how other people should lead their lives, but none about his or her own.",
        book: "The Alchemist",
        author: "Paulo Coelho"
    },
    {
        text: "Remember that wherever your heart is, there you will find your treasure.",
        book: "The Alchemist",
        author: "Paulo Coelho"
    },
    {
        text: "The world's greatest lie is that at a certain point in our lives, we lose control of what's happening to us, and our lives become controlled by fate.",
        book: "The Alchemist",
        author: "Paulo Coelho"
    },
    {
        text: "People are capable, at any time in their lives, of doing what they dream of.",
        book: "The Alchemist",
        author: "Paulo Coelho"
    },
    {
        text: "There is only one thing that makes a dream impossible to achieve: the fear of failure.",
        book: "The Alchemist",
        author: "Paulo Coelho"
    },
    {
        text: "Tell your heart that the fear of suffering is worse than the suffering itself.",
        book: "The Alchemist",
        author: "Paulo Coelho"
    },
    {
        text: "If you start by promising what you don't even have yet, you'll lose your desire to work toward getting it.",
        book: "The Alchemist",
        author: "Paulo Coelho"
    },
    {
        text: "The simple things are also the most extraordinary things, and only the wise can see them.",
        book: "The Alchemist",
        author: "Paulo Coelho"
    },
    {
        text: "Every blessing ignored becomes a curse.",
        book: "The Alchemist",
        author: "Paulo Coelho"
    },
    {
        text: "Courage is the quality most essential to understanding the language of the world.",
        book: "The Alchemist",
        author: "Paulo Coelho"
    },
    {
        text: "What you still need to know is this: before a dream is realized, the Soul of the World tests everything that was learned along the way.",
        book: "The Alchemist",
        author: "Paulo Coelho"
    },

    // Atomic Habits - James Clear
    {
        text: "You do not rise to the level of your goals. You fall to the level of your systems.",
        book: "Atomic Habits",
        author: "James Clear"
    },
    {
        text: "Every action you take is a vote for the type of person you wish to become.",
        book: "Atomic Habits",
        author: "James Clear"
    },
    {
        text: "The most effective way to change your habits is to focus not on what you want to achieve, but on who you wish to become.",
        book: "Atomic Habits",
        author: "James Clear"
    },
    {
        text: "Habits are the compound interest of self-improvement.",
        book: "Atomic Habits",
        author: "James Clear"
    },
    {
        text: "You should be far more concerned with your current trajectory than with your current results.",
        book: "Atomic Habits",
        author: "James Clear"
    },
    {
        text: "Success is the product of daily habits—not once-in-a-lifetime transformations.",
        book: "Atomic Habits",
        author: "James Clear"
    },
    {
        text: "The purpose of setting goals is to win the game. The purpose of building systems is to continue playing the game.",
        book: "Atomic Habits",
        author: "James Clear"
    },
    {
        text: "Make it obvious. Make it attractive. Make it easy. Make it satisfying.",
        book: "Atomic Habits",
        author: "James Clear"
    },
    {
        text: "The secret to getting results that last is to never stop making improvements.",
        book: "Atomic Habits",
        author: "James Clear"
    },
    {
        text: "Environment is the invisible hand that shapes human behavior.",
        book: "Atomic Habits",
        author: "James Clear"
    },
    {
        text: "If you want to master a habit, the key is to start with repetition, not perfection.",
        book: "Atomic Habits",
        author: "James Clear"
    },
    {
        text: "The difference a tiny improvement can make over time is astounding.",
        book: "Atomic Habits",
        author: "James Clear"
    },
    {
        text: "True long-term thinking is goal-less thinking. It's not about any single accomplishment. It is about the cycle of endless refinement.",
        book: "Atomic Habits",
        author: "James Clear"
    },
    {
        text: "Your outcomes are a lagging measure of your habits.",
        book: "Atomic Habits",
        author: "James Clear"
    },
    {
        text: "Breakthrough moments are often the result of many previous actions.",
        book: "Atomic Habits",
        author: "James Clear"
    },
    {
        text: "The more you repeat a behavior, the more you reinforce the identity associated with that behavior.",
        book: "Atomic Habits",
        author: "James Clear"
    },
    {
        text: "What we really need is a few reliable ways to address the root cause of our problems.",
        book: "Atomic Habits",
        author: "James Clear"
    },

    // 21 Lessons for the 21st Century - Yuval Noah Harari
    {
        text: "In a world deluged by irrelevant information, clarity is power.",
        book: "21 Lessons for the 21st Century",
        author: "Yuval Noah Harari"
    },
    {
        text: "Humans were always far better at inventing tools than using them wisely.",
        book: "21 Lessons for the 21st Century",
        author: "Yuval Noah Harari"
    },
    {
        text: "The greatest scientific discovery was the discovery of ignorance.",
        book: "21 Lessons for the 21st Century",
        author: "Yuval Noah Harari"
    },
    {
        text: "Questions you cannot answer are usually far better for you than answers you cannot question.",
        book: "21 Lessons for the 21st Century",
        author: "Yuval Noah Harari"
    },
    {
        text: "If you don't know what you want in life, it will be all too easy for technology to shape your aims for you.",
        book: "21 Lessons for the 21st Century",
        author: "Yuval Noah Harari"
    },
    {
        text: "Most people prefer to believe pleasant lies rather than face disturbing truths.",
        book: "21 Lessons for the 21st Century",
        author: "Yuval Noah Harari"
    },
    {
        text: "The most important thing is the ability to reinvent yourself again and again.",
        book: "21 Lessons for the 21st Century",
        author: "Yuval Noah Harari"
    },
    {
        text: "Truth and power can travel together only so far. Sooner or later they go their separate ways.",
        book: "21 Lessons for the 21st Century",
        author: "Yuval Noah Harari"
    },
    {
        text: "If you want reliable information, pay good money for it.",
        book: "21 Lessons for the 21st Century",
        author: "Yuval Noah Harari"
    },
    {
        text: "Perhaps the greatest danger facing humankind today is not nuclear war or ecological collapse, but rather the collapse of the global conversation.",
        book: "21 Lessons for the 21st Century",
        author: "Yuval Noah Harari"
    },
    {
        text: "The individual voter cannot understand the world and therefore cannot make informed choices.",
        book: "21 Lessons for the 21st Century",
        author: "Yuval Noah Harari"
    },
    {
        text: "Meditation is not an escape from reality. It is getting in touch with reality.",
        book: "21 Lessons for the 21st Century",
        author: "Yuval Noah Harari"
    },
    {
        text: "When technology knows you better than you know yourself, control will shift from humans to algorithms.",
        book: "21 Lessons for the 21st Century",
        author: "Yuval Noah Harari"
    },
    {
        text: "The more we know, the more we realize how little we understand.",
        book: "21 Lessons for the 21st Century",
        author: "Yuval Noah Harari"
    },
    {
        text: "The big question is not what we should learn, but what we should unlearn.",
        book: "21 Lessons for the 21st Century",
        author: "Yuval Noah Harari"
    },
    {
        text: "Liberty is not a biological reality. It is an intersubjective reality.",
        book: "21 Lessons for the 21st Century",
        author: "Yuval Noah Harari"
    },
    {
        text: "Homo sapiens is just not built to deal with twenty-first-century information overload.",
        book: "21 Lessons for the 21st Century",
        author: "Yuval Noah Harari"
    },
    {
        text: "You cannot really know yourself unless you observe your mind.",
        book: "21 Lessons for the 21st Century",
        author: "Yuval Noah Harari"
    },
    {
        text: "The real question is not whether machines think but whether humans do.",
        book: "21 Lessons for the 21st Century",
        author: "Yuval Noah Harari"
    }
];

// Application State
let currentFilter = 'all';
let currentQuoteIndex = 0;
let filteredQuotes = [...quotes];

// DOM Elements
const quoteText = document.getElementById('quote-text');
const quoteBook = document.getElementById('quote-book');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote-btn');
const shareBtn = document.getElementById('share-btn');
const shareModal = document.getElementById('share-modal');
const shareQuoteText = document.getElementById('share-quote-text');
const copyBtn = document.getElementById('copy-btn');
const closeModalBtn = document.getElementById('close-modal');
const filterBtns = document.querySelectorAll('.filter-btn');

// Utility Functions
function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

function filterQuotes(bookTitle) {
    if (bookTitle === 'all') {
        return [...quotes];
    }
    return quotes.filter(quote => quote.book === bookTitle);
}

function displayQuote(index) {
    if (filteredQuotes.length === 0) return;
    
    const quote = filteredQuotes[index];
    
    // Add fade out effect
    const quoteCard = document.getElementById('quote-card');
    quoteCard.style.opacity = '0';
    quoteCard.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
        quoteText.textContent = quote.text;
        quoteBook.textContent = quote.book;
        quoteAuthor.textContent = `— ${quote.author}`;
        
        // Add fade in effect
        quoteCard.style.opacity = '1';
        quoteCard.style.transform = 'translateY(0)';
    }, 150);
}

function showRandomQuote() {
    if (filteredQuotes.length === 0) return;
    
    let newIndex;
    do {
        newIndex = getRandomIndex(filteredQuotes.length);
    } while (newIndex === currentQuoteIndex && filteredQuotes.length > 1);
    
    currentQuoteIndex = newIndex;
    displayQuote(currentQuoteIndex);
}

function setActiveFilter(bookTitle) {
    // Update filter buttons
    filterBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.book === bookTitle);
    });
    
    // Update filtered quotes
    currentFilter = bookTitle;
    filteredQuotes = filterQuotes(bookTitle);
    
    // Show random quote from filtered collection
    currentQuoteIndex = 0;
    showRandomQuote();
}

function openShareModal() {
    const currentQuote = filteredQuotes[currentQuoteIndex];
    if (!currentQuote) return;
    
    const shareText = `"${currentQuote.text}" — ${currentQuote.author}, ${currentQuote.book}`;
    shareQuoteText.textContent = shareText;
    shareModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeShareModal() {
    shareModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

async function copyToClipboard() {
    const textToCopy = shareQuoteText.textContent;
    
    try {
        await navigator.clipboard.writeText(textToCopy);
        
        // Show feedback
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        copyBtn.style.background = '#27ae60';
        
        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.style.background = '';
        }, 2000);
        
    } catch (err) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        copyBtn.textContent = 'Copied!';
        setTimeout(() => {
            copyBtn.textContent = 'Copy Text';
        }, 2000);
    }
}

// Event Listeners
newQuoteBtn.addEventListener('click', showRandomQuote);
shareBtn.addEventListener('click', openShareModal);
copyBtn.addEventListener('click', copyToClipboard);
closeModalBtn.addEventListener('click', closeShareModal);

// Filter buttons
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        setActiveFilter(btn.dataset.book);
    });
});

// Modal backdrop click
shareModal.addEventListener('click', (e) => {
    if (e.target === shareModal) {
        closeShareModal();
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Space or Enter for new quote
    if (e.code === 'Space' || e.code === 'Enter') {
        if (!shareModal.classList.contains('active')) {
            e.preventDefault();
            showRandomQuote();
        }
    }
    
    // Escape to close modal
    if (e.code === 'Escape') {
        closeShareModal();
    }
    
    // S for share
    if (e.code === 'KeyS' && !shareModal.classList.contains('active')) {
        shareModel.classList.contains('active'); 
    }
});

