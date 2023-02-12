const rotors = { // A becomes => EJKC
    1: {
        name: "I",
        wiring: "EKMFLGDQVZNTOWYHXUSPAIBRCJ",// for first rotation knotch, A is in the position where B used to be. K was the old output, but K is in the position where J used to be. Alphabet order is the absolute reference for position.
        notch: [1],
        position: 1,
        ringSetting: 1
    },
    2: {
        name: "II",
        wiring: "AJDKSIRUXBLHWTMCQGZNPYFVOE",// 
        notch: [1],
        position: 1,
        ringSetting: 1
    },
    3: {
        name: "III",
        wiring: "BDFHJLCPRTXVZNYEIWGAKMUSQO",// 
        notch: [1],
        position: 1,
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
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    console.log(alphabet)
    const { rotorsConfig: rc, reflector } = settings
    // const { indexOf: ai } = alphabet;

    // fill in the plugboard later

    const findLetterPosition = async (rotor, letter) => {
        // rc[0].wiring[(alphabet.indexOf(letter))];
        const { position: rotorPosition } = rotor;
        const rotorPositionIndex = (rotorPosition - 1); // turning number into js index
        // letter is "a" and rotorPosition is 2
        const returnIndex = alphabet.indexOf(letter) + (rotorPositionIndex);
        const adjustedPosition = rotor.wiring[returnIndex];
        const adjAlphabetPosition = alphabet.indexOf(adjustedPosition);
        const adjustedValue = alphabet[(adjAlphabetPosition - rotorPositionIndex)];
        console.log("returnIndex", returnIndex)
console.log("adjustedPosition", adjustedPosition)
console.log("adjAlphabetPosition", adjAlphabetPosition)
        console.log("adjustedValue", adjustedValue)
        return adjustedValue;
    };

    // this is how it would work if the rotors didn't move
    
    const rotor1return = await findLetterPosition(rc[0], letter);
    return await console.log(rotor1return)
    var rotor2return = rc[1].wiring[(alphabet.indexOf(await rotor1return))];
    const rotor3return = await rc[2].wiring[(alphabet.indexOf(await rotor2return))];

    const reflectorReturn = reflector.wiring[(await alphabet.indexOf(rotor3return))];

    const rotor3backwards = await rc[2].wiring.indexOf(reflectorReturn);
    const rotor2backwards = await rc[1].wiring.indexOf(alphabet[rotor3backwards]);
    const result = await await rc[0].wiring.indexOf(alphabet[rotor2backwards]);
    return await result;
}

processRotors("A", rotorsConfigTest)