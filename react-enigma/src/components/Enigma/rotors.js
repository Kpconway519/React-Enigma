const rotors = { // A becomes => EJKC
    1: {
        name: "I",
        wiring: "EKMFLGDQVZNTOWYHXUSPAIBRCJ",// for first rotation knotch, A is in the position where B used to be. K was the old output, but K is in the position where J used to be. Alphabet order is the absolute reference for position.
        notch: [1],
        position: 4,
        ringSetting: 1
    },
    2: {
        name: "II",
        wiring: "AJDKSIRUXBLHWTMCQGZNPYFVOE",// 
        notch: [1],
        position: 2,
        ringSetting: 1
    },
    3: {
        name: "III",
        wiring: "BDFHJLCPRTXVZNYEIWGAKMUSQO",// 
        notch: [1],
        position: 26,
        ringSetting: 1
    },
    4: {
        name: "IV",
        wiring: "ESOVPZJAYQUIRHXLNFTGKDCMWB",
        notch: [1],
        position: 1,
        ringSetting: 1
    },
    5: {
        name: "V",
        wiring: "VZBRGITYUPSDNHLXAWMJQOFECK",
        notch: [1],
        position: 1,
        ringSetting: 1
    },
    6: {
        name: "VI",
        wiring: "JPGVOUMFYQBENHZRDKASXLICTW",
        notch: [1],
        position: 1,
        ringSetting: 1
    },
    7: {
        name: "VII",
        wiring: "NZJHGRCXMYSWBOUFAIVLPEKQDT",
        notch: [1],
        position: 1,
        ringSetting: 1
    },
    8: {
        name: "VIII",
        wiring: "FKQHTLXOCBJSPDZRAMEWNIUYGV",
        notch: [1],
        position: 1,
        ringSetting: 1
    },
    reflector: {
        name: "Reflector",
        wiring: "YRUHQSLDPXNGOKMIEBFZCWVJAT" // G => L
    }
}

// export default rotors;

const rotorsConfigTest = {
    rotorsConfig: [
    rotors[1],
    rotors[2],
    rotors[3]
    ],
    reflector: rotors.reflector
}


const processRotors = async (letter, settings) => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';
    console.log(alphabet)
    const { rotorsConfig: rc, reflector } = settings

    // increment the position of the first rotor every time. TODO: come in and add in the notch functionality.
    rc[0].position++;

    const findLetterPosition = async (rotor, letter, direction = "forwards") => {
        if (typeof letter === "number") letter = alphabet[letter];
        const { position: rotorPosition } = rotor;
        const rotorPositionIndex = (rotorPosition - 1); // turning number into js index
        if (direction === "forwards") {
            let returnIndex = alphabet.indexOf(letter) + (rotorPositionIndex);
            if (returnIndex > 25) returnIndex = returnIndex - 26;
            console.log(returnIndex, 'returnindex')
            const adjustedPosition = rotor.wiring[returnIndex];
            const adjAlphabetPosition = alphabet.indexOf(adjustedPosition);
            console.log(adjAlphabetPosition, 'aap', rotorPositionIndex, 'rpi')
            const correctedForwardIndex = (adjAlphabetPosition - rotorPositionIndex);
            const correctedForwardValue = Math.sign(correctedForwardIndex) === -1 ? alphabet[alphabet.length - Math.abs(correctedForwardIndex)] : alphabet[correctedForwardIndex];
            // const adjustedValue = alphabet[(adjAlphabetPosition - rotorPositionIndex)];
            console.log(correctedForwardValue, 'adjustedvalue')
            return correctedForwardValue;
        } else if (direction === "backwards") {
            // rotor.wiring.indexOf((alphabet[letter] + rotorPositionIndex))
            // 
            console.log(letter, "letter", rotorPositionIndex, "rotorpositionindex")
            const newEntryPoint = alphabet[alphabet.indexOf(letter) + rotorPositionIndex]; // go up a letter in the alphabet
            console.log(newEntryPoint)
            const alphabetMatch = rotor.wiring.indexOf(newEntryPoint)
            console.log(alphabetMatch, 'alphabetmatch')
            // const correctedValue = alphabet[alphabetMatch - rotorPositionIndex]
            const correctedIndex = alphabetMatch - rotorPositionIndex;
            const correctedValue = Math.sign(correctedIndex) === -1 ? alphabet[alphabet.length - Math.abs(correctedIndex)] : alphabet[correctedIndex];
            console.log('correctedValue', correctedValue)
            return correctedValue;

        }
        return console.log('You didnt spell backwards correctly');
    };

    // this is how it would work if the rotors didn't move
    
    const rotor1return = await findLetterPosition(rc[0], letter);
    // return await console.log(rotor1return)
    var rotor2return = await findLetterPosition(rc[1], rotor1return);
    // return await console.log(rotor2return);
    var rotor3return = await findLetterPosition(rc[2], rotor2return);
    // return await console.log(rotor2return);
    const reflectorReturn = reflector.wiring[(await alphabet.indexOf(rotor3return))];
    await console.log(reflectorReturn)
    const rotor3backwards = await findLetterPosition(rc[2], reflectorReturn, "backwards");;
    // return console.log(rotor3backwards, "rotor3backwards");
    const rotor2backwards = await findLetterPosition(rc[1], rotor3backwards, "backwards");
    // return console.log(rotor2backwards);
    // const result = await rc[0].wiring.indexOf((alphabet[rotor2backwards] + rc[0].position));
    const result = await findLetterPosition(rc[0], rotor2backwards, "backwards");
    return console.log(result, 'result');
    return await result;
}

processRotors("A", rotorsConfigTest)
// processRotors("P", rotorsConfigTest)
// processRotors("C", rotorsConfigTest)