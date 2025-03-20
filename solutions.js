export const rectPerimeter = (x, y) => 2 * (x + y);

export const rectArea = (x, y) => x * y;

export const triArea = (x, y) => (x * y) / 2;

export const ringArea = (x, y) => {
    let outerRing = Math.PI * Math.pow(x, 2);
    let innerRing = Math.PI * Math.pow(y, 2);
    let ringArea = outerRing - innerRing;
    return ringArea * -1;
}

export const f2c = (x) => {
    return ((x - 32) * (5 / 9));
}

export const c2f = (x) => {
    return x * (9 / 5) + 32;
}

export const makeName = (firstName, lastName) => {
    return lastName + ', ' + firstName;
}

export const ellide = (s, n) => {
    return s.slice(0, n) + '...';
}

export const longer = (string1, string2) => {
    if (string1.length >= string2.length) {
        return string1;
    } else {
        return string2;
    }
}

export const mid3 = (x, y, z) => {
    if ((x <= y && y <= z) || (z <= y && y <= x)) {
        return y;
    } else if ((y <= x && x <= z) || (z <= x && x <= y)) {
        return x;
    } else {
        return z;
    }
}

export const lastFirst = (name) => {
    if (name.first && name.last) {
        return `${name.last}, ${name.first}`;
    }
    return name.first || name.last || '';
}

export const subArray = (x, y) => {
    return y.map(index => x[index]);
}

export const over21 = (array) => {
    return array.filter(person => person.age >= 21);
}

export const product = (array) => {
    return array.reduce((acc, num) => acc * num);
}

export const getRepeats = (array) => {
    let repeats = [];

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j] && !repeats.includes(array[i])) {
                repeats.push(array[i]);
                break;
            }
        }
    }
    return repeats;
}

export const aboveAverage = (array) => {
    let result = [];
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i].score;
    }

    let averageScore = sum / array.length;
    for (let i = 0; i < array.length; i++) {
        if (array[i].score > averageScore) {
            result.push({ name: array[i].name, score: array[i].score });
        }
    }
    return result;
}

export const reverseNumber = (number) => {
    return parseInt(number.toString().split('').reverse().join(''));
}

export const isWordAnagram = (word1, word2) => {
    let word1Sorted = word1.split('').sort().join('');
    let word2Sorted = word2.split('').sort().join('');

    if (word1Sorted === word2Sorted) {
        return true
    } else {
        return false;
    }
}

export const isPhraseAnagram = (phrase1, phrase2) => {
    let phrase1Sorted = phrase1.replace(/\s/g, '').toLowerCase().split('').sort().join('');
    let phrase2Sorted = phrase2.replace(/\s/g, '').toLowerCase().split('').sort().join('');

    return phrase1Sorted === phrase2Sorted ? true : false;
}

export const longestWords = (stringPhrase) => {
    const words = stringPhrase.split(/\s+/).map(word => word.replace(/[^a-zA-Z0-9]/g, ''));

    let maxLength = 0;
    for (const word of words) {
        if (word.length > maxLength) {
            maxLength = word.length;
        }
    }

    const longest = [];
    for (const word of words) {
        if (word.length === maxLength && word.length > 0) {
            longest.push(word);
        }
    }
    return longest;
}

export const moduleTitles = () => {
    const titles = document.getElementsByClassName("module-title card-header");
    const titleArray = Array.from(titles);

    return titleArray.map(title => title.textContent);
}

export const goPurple = () => {
    let colorChange = document.getElementsByClassName('exercise-name card-header');

    for (let i = 0; i < colorChange.length; i++) {
        colorChange[i].style.backgroundColor = 'purple';
        colorChange[i].style.color = 'white';
    }
    return 'Go Purple!';
}

export const copycat = (n) => {
    if (n === undefined) {
        return null
    } else {
        const tableRow = document.querySelector(`#copycat > div > table > tbody > tr:nth-child(${n})`);

        const givenAnswer = tableRow.querySelector("td:nth-child(2)");

        const expectedAnswer = givenAnswer.innerText;

        return eval(expectedAnswer);
    }
}