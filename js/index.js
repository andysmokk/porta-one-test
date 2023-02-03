const form = document.querySelector(".form");
const title = document.querySelector(".title");

form.addEventListener("submit", getText);

function getText(event) {
  event.preventDefault();
  const phrase = event.currentTarget.elements[0].value;

  const getFirstSymbols = (text) => {
    const words = text.split(" ");
    const firstLettersOfWords = words.reduce(
      (acc, word) => [...acc, word[0]],
      []
    );
    return firstLettersOfWords;
  };

  const firstSymbols = getFirstSymbols(phrase);

  const uniqueSymbols = firstSymbols.filter(
    (element, index, array) => array.indexOf(element) === index
  );

  const repeatingSymbols = firstSymbols.filter(
    (element, index, array) => array.indexOf(element) !== index
  );

  const uniqueSymbol = (array1, array2) => {
    const symbols = array1.reduce((acc, element) => {
      if (array2.includes(element)) {
        return acc;
      }
      return [...acc, element];
    }, []);
    return symbols[0];
  };

  title.innerHTML = uniqueSymbol(uniqueSymbols, repeatingSymbols);
  getFirstSymbols(phrase);
}
