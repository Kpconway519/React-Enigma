const rotors = {
    1: {
        name: "I",
        wiring: "EKMFLGDQVZNTOWYHXUSPAIBRCJ",
        notch: 1,
        position: 1
    },
    2: {
        name: "II",
        wiring: "AJDKSIRUXBLHWTMCQGZNPYFVOE",
        notch: 1,
        position: 1
    },
    3: {
        name: "III",
        wiring: "BDFHJLCPRTXVZNYEIWGAKMUSQO",
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
        wiring: "QYHOGNECVPUZTFDJAXWMKISRBL"
    }
}

export default rotors;

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const processRotors = (letter, settings) => {
    const { rotorsConfig: rc, reflector } = settings
    const { indexOf: ai } = alphabet;

    // fill in the plugboard later


    // this is how it would work if the rotors didn't move
    const rotor1return = rc[1].wiring[(ai(letter))];
    const rotor2return = rc[2].wiring[(ai(rotor1return))];
    const rotor3return = rc[3].wiring[(ai(rotor2return))];

    const reflectorReturn = reflector.wiring[(ai(rotor3return))];

    const rotor3backwards = rc[3].wiring.indexOf(reflectorReturn);
    const rotor2backwards = rc[2].wiring.indexOf(rotor3backwards);
    const result = rc[1].wiring.indexOf(rotor2backwards);
    
    return result;
}

