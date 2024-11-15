const quoteArray = [
    {'author': 'Oscar Wilde', 
     'quote': 'Be yourself; everyone else is already taken.'
    },
    {'author': 'Frank Zappa', 
     'quote': 'So many books, so little time.'
    },
    {'author': 'Marcus Tullius Cicero',
     'quote': 'A room without books is like a body without a soul.'
    },
    {'author': 'William W. Purkey', 
     'quote': 'You\'ve gotta dance like there\'s nobody watching Love like you\'ll never be hurt, Sing like there\'s nobody listening, And live like it\'s heaven on earth.'
    },
    {'author': 'Mae West', 
     'quote': 'You only live once, but if you do it right, once is enough.'
    },
    {'author': 'Mahatma Gandhi', 
     'quote': 'Be the change that you wish to see in the world.'
    },
    {'author': 'Robert Frost', 
     'quote': 'In three words I can sum up everything I\'ve learned about life: it goes on.'
    },
    {'author': 'Albert Camus', 
        'quote': 'Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend'
    },
];

function generateQuote(){
    const random = Number.parseInt(Math.random()*quoteArray.length + 1);
    document.querySelector('#generatedQuote').textContent = `\"${quoteArray[random].quote}\"`;
    document.querySelector('#generatedAuthor').textContent = `-- ${quoteArray[random].author}`;
    
}
