const displayData = (data) => {
    // DOM elements
    const wordDOM = document.querySelector('.word');
    const phoneticsDOM = document.querySelector('.phonetics span');
    const meaningsDOM = document.querySelector('.meanings p');
    const exampleDOM = document.querySelector('.example p');
    const synonymsDOM = document.querySelector('.synonyms .btn-container');
    const antonymsDOM = document.querySelector('.antonyms .btn-container');
    // Destructuring data
    const {word} = data[0];
    const text = data[0].phonetics[0] ? data[0].phonetics[0]['text'] : 'no phonetics...';
    const {partOfSpeech} = data[0].meanings[0];
    const {definition, example, synonyms, antonyms} = data[0].meanings[0].definitions[0];
    const synonymsHTML = transformToHTML(synonyms);
    const antonymsHTML = transformToHTML(antonyms);
    // Adding HTML
    wordDOM.children[0].textContent = word;
    wordDOM.children[1].textContent = partOfSpeech;
    phoneticsDOM.textContent = text ? text : 'no phonetics...';
    meaningsDOM.textContent = definition ? definition : 'no meanings...';
    exampleDOM.textContent = example ? example : 'no examples...';
    synonymsDOM.innerHTML = synonymsHTML ? synonymsHTML : '<p>no synonyms...</p>';
    antonymsDOM.innerHTML = antonymsHTML ? antonymsHTML : '<p>no antonyms...</p>';
};

const transformToHTML = (items) => {
    return items.slice(0, 5).map(item => `<button>${item}</button>`).join('');
};

export default displayData;