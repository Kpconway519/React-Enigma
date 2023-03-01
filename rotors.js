const rotors = { // A becomes => EJKC
    1: {
        name: "I",
        wiring: "EKMFLGDQVZNTOWYHXUSPAIBRCJ",// for first rotation knotch, A is in the position where B used to be. K was the old output, but K is in the position where J used to be. Alphabet order is the absolute reference for position.
        notch: [1],
        position: 24,
        ringSetting: 1
    },
    2: {
        name: "II",
        wiring: "AJDKSIRUXBLHWTMCQGZNPYFVOE",// 
        notch: [1],
        position: 9,
        ringSetting: 1
    },
    3: {
        name: "III",
        wiring: "BDFHJLCPRTXVZNYEIWGAKMUSQO",// 
        notch: [1],
        position: 22,
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
        wiring: "YRUHQSLDPXNGOKMIEBFZCWVJAT"
    }
};

const composeRotors = (rotor1, rotor2, rotor3, reflector = rotors.reflector) => {
return (
    {
        rotorsConfig: [rotor1, rotor2, rotor3],
        reflector: reflector
    }
)
}


const processRotors = async (letter, settings) => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const { rotorsConfig: rc, reflector } = settings

    // increment the position of the first rotor every time. TODO: come in and add in the notch functionality.
    rc[0].position === 26 ? rc[0].position = 1 : rc[0].position++;

    const findLetterPosition = async (rotor, letter, direction = "forwards") => {
        if (typeof letter === "number") letter = alphabet[letter];
        const { position: rotorPosition } = rotor;
        const rotorPositionIndex = (rotorPosition - 1); // turning number into js index
        if (direction === "forwards") {
            let returnIndex = alphabet.indexOf(letter) + (rotorPositionIndex);
            // console.log(returnIndex, "returnIndex");
            if (returnIndex > 25) returnIndex = returnIndex - 26;
            const adjustedPosition = rotor.wiring[returnIndex];
            // console.log(adjustedPosition, "adjustedPosition")
            const adjAlphabetPosition = alphabet.indexOf(adjustedPosition);
            // console.log(adjAlphabetPosition, "adjAlphabetPosition")
            const correctedForwardIndex = (adjAlphabetPosition - rotorPositionIndex);
            // console.log(correctedForwardIndex, "correctedForwardIndex")
            const correctedForwardValue = Math.sign(correctedForwardIndex) === -1 ? alphabet[alphabet.length - Math.abs(correctedForwardIndex)] : alphabet[correctedForwardIndex];
            // console.log(correctedForwardValue, "correctedForwardValue")
            return correctedForwardValue;
        } else if (direction === "backwards") {
            const newEntryPoint = alphabet[alphabet.indexOf(letter) + rotorPositionIndex]; // go up a letter in the alphabet
            const alphabetMatch = rotor.wiring.indexOf(newEntryPoint)
            const correctedIndex = alphabetMatch - rotorPositionIndex;
            const correctedValue = Math.sign(correctedIndex) === -1 ? alphabet[alphabet.length - Math.abs(correctedIndex)] : alphabet[correctedIndex];
            return correctedValue;

        }
        return console.log('You didnt spell backwards correctly');
    };

    // this is how it would work if the rotors didn't move
    
    const rotor1return = await findLetterPosition(rc[0], letter);
    console.log(rc[0].name)
    // return await console.log(rotor1return, "rotor1return")
    var rotor2return = await findLetterPosition(rc[1], rotor1return);
    console.log(rotor2return, "rotor2return")
    var rotor3return = await findLetterPosition(rc[2], rotor2return);
    console.log(rotor3return, "rotor3return")
    const reflectorReturn = reflector.wiring[(await alphabet.indexOf(rotor3return))];
    console.log(reflectorReturn, "reflectorReturn")
    const rotor3backwards = await findLetterPosition(rc[2], reflectorReturn, "backwards");;
    console.log(rotor3backwards, "rotor3backwards")
    const rotor2backwards = await findLetterPosition(rc[1], rotor3backwards, "backwards");
    console.log(rotor2backwards, "rotor2backwards")
    const result = await findLetterPosition(rc[0], rotor2backwards, "backwards");
    // return console.log(result, 'result');
    return await result;
}

const rotorsConfigTest = composeRotors(rotors[1], rotors[2], rotors[3], rotors.reflector);
processRotors("Y", rotorsConfigTest)
