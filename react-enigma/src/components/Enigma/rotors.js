const rotors = {
    1: {
        name: "I",
        wiring: "EKMFLGDQVZNTOWYHXUSPAIBRCJ",// A => E // W => N
        notch: 1,
        position: 1
    },
    2: {
        name: "II",
        wiring: "AJDKSIRUXBLHWTMCQGZNPYFVOE",// E => S // F => W
        notch: 1,
        position: 1
    },
    3: {
        name: "III",
        wiring: "BDFHJLCPRTXVZNYEIWGAKMUSQO",// S => G // L => F
        notch: 1,
        position: 1
    },
    4: {
        name: "IV",
        wiring: "ESOVPZJAYQUIRHXLNFTGKDCMWB",
        notch: 1,
        position: 1
    },
    5: {
        name: "V",
        wiring: "VZBRGITYUPSDNHLXAWMJQOFECK",
        notch: 1,
        position: 1
    },
    6: {
        name: "VI",
        wiring: "JPGVOUMFYQBENHZRDKASXLICTW",
        notch: 1,
        position: 1
    },
    7: {
        name: "VII",
        wiring: "NZJHGRCXMYSWBOUFAIVLPEKQDT",
        notch: 1,
        position: 1
    },
    8: {
        name: "VIII",
        wiring: "FKQHTLXOCBJSPDZRAMEWNIUYGV",
        notch: 1,
        position: 1
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
        // console.log(alphabet.indexOf(letter), alphabet.indexOf('A'), ai('A'))
        console.log('letter', letter)

        const returnIndex = alphabet.indexOf(letter) + (rotor.position === 1 ? 0 : rotor.position - 1);
        const rotorLength = (rotor.wiring.length - 1)
        // console.log(rotor, letter)
        // console.log('letter', letter, 'alphabet', alphabet)
        // console.log('ai letter', alphabet.indexOf(letter), 'rotorposition', rotor.position)
        // console.log('returnindex', returnIndex, 'rotorlength', rotorLength)
        if (rotorLength < returnIndex) return (returnIndex - rotorLength) // should correct overflow but i may be off by one
        // console.log('returning second one')
        return returnIndex; // if all is well, return normal index.
    };

    // this is how it would work if the rotors didn't move
    
    const rotor1return = rc[0].wiring[(alphabet.indexOf(letter))];
    var rotor2return = rc[1].wiring[(alphabet.indexOf(await rotor1return))];
    const rotor3return = await rc[2].wiring[(alphabet.indexOf(await rotor2return))];

    const reflectorReturn = reflector.wiring[(await alphabet.indexOf(rotor3return))];
    
    const rotor3backwards = await rc[2].wiring.indexOf(reflectorReturn);
    const rotor2backwards = await rc[1].wiring.indexOf(alphabet[rotor3backwards]);
    const result = await await rc[0].wiring.indexOf(alphabet[rotor2backwards]);
    return await result;
}

processRotors("A", rotorsConfigTest)