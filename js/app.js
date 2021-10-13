import fetchData from './modules/fetchData.js';
import displayData from './modules/displayData.js';

const startAPP = () => {

    // DOM elements
    const form = document.querySelector('.search-form');
    const input = form.querySelector('input');
    const messageDOM = document.querySelector('.message');
    const buttonsDOM = document.querySelector('.btn-container');
    const clearBtn = document.querySelector('.clear-btn');
    const audioBtn = document.querySelector('.audio-btn');
    // This we will get dynamically
    let audioTrack;

    // Arrow functions
    const startSearch = async (value) => {
        messageDOM.classList.remove('hide');
        messageDOM.innerHTML = `Searching for a word <span>${value}</span>...`;
        const data = await fetchData(value);
        if (data.title) {
            messageDOM.innerHTML = `Sorry, no results for word <span>${value}</span>... You can try to enter another word.`;
        } else {
            displayData(data);
            setupAudio(data);
            messageDOM.classList.add('hide');
        }
    };

    const setupAudio = (data) => {
        audioTrack = null;
        const audio = data[0].phonetics[0] ? data[0].phonetics[0]['audio'] : null;
        if (!audio) return;
        const audioURL = `https:${audio}`;
        audioTrack = new Audio(audioURL);
    };

    // Event Listeners
    form.addEventListener('submit', event => {
        event.preventDefault();
        const value = input.value;
        input.value = '';
        input.blur();
        startSearch(value);
    });

    clearBtn.addEventListener('click', () => {
        input.value = '';
    });

    audioBtn.addEventListener('click', () => {
        if (!audioTrack) return;
        audioTrack.play();
    });

    buttonsDOM.addEventListener('click', event => {
        if (!event.target.tagName === 'BUTTON') return;
        const value = event.target.textContent;
        startSearch(value);
    });

};

startAPP();