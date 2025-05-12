let odpowiedzi = [
    "Świetnie!",
    "Kto gra główną rolę?",
    "Lubisz filmy Tego reżysera?",
    "Będę 10 minut wcześniej",
    "Może kupimy sobie popcorn?",
    "Ja wolę Colę",
    "Zaproszę jeszcze Grześka",
    "Tydzień temu też byłem w kinie na Diunie",
    "Ja funduję bilety"
];

function wyslijwiadomosc() {
    let creating = document.createElement('div');
    creating.classList.add('czatwiadomosc');

    let image = document.createElement('img');
    image.src = 'Jolka.jpg';
    image.alt = 'Jolanta Nowak';
    image.style.marginRight = '10px';

    let inputValue = document.getElementById("wiadomoscinput").value;
    let text = document.createElement('p');
    text.textContent = inputValue;

    creating.appendChild(image);
    creating.appendChild(text);

    creating.style.justifyContent = 'flex-start';

    document.querySelector('.oknoczat').appendChild(creating);
}

function generujlosowaodpowiedz() {
    let x = Math.floor(Math.random() * odpowiedzi.length);

    let creating = document.createElement('div');
    creating.classList.add('czatwiadomosc');

    let inputValue = odpowiedzi[x];
    let text = document.createElement('p');
    text.textContent = inputValue;

    let image = document.createElement('img');
    image.src = 'Krzysiek.jpg';
    image.alt = 'Krzysztof Łukasiński';
    image.style.marginLeft = '10px';

    creating.appendChild(text);
    creating.appendChild(image);

    creating.style.justifyContent = 'flex-end';

    document.querySelector('.oknoczat').appendChild(creating);
}
