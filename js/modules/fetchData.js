const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

const fetchData = async (value) => {
    try {
        const response = await fetch(`${url}${value}`);
        const data = await response.json();
        return data;
    } catch (error) {
        document.querySelector('.message').innerHTML = `Sorry, no results for word <span>${value}</span>... You can try to enter another word.`;
        console.log(error);
    }
};

export default fetchData;