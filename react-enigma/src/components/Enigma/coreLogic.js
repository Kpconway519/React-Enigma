const composeRotors = (rotor1, rotor2, rotor3, reflector) => {
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
    console.log('rotorsconfig', rc)
    console.log('reflector', reflector);


    // increment the position of the first rotor every time. TODO: come in and add in the notch functionality.
    rc[2].position === 26 ? rc[2].position = 1 : rc[2].position++;


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
    
    const rotor1return = await findLetterPosition(rc[2], letter);
    console.log(rc[2].name)
    // return await console.log(rotor1return, "rotor1return")
    var rotor2return = await findLetterPosition(rc[1], rotor1return);
    console.log(rotor2return, "rotor2return")
    var rotor3return = await findLetterPosition(rc[0], rotor2return);
    console.log(rotor3return, "rotor3return")
    const reflectorReturn = reflector.wiring[(await alphabet.indexOf(rotor3return))];
    console.log(reflectorReturn, "reflectorReturn")
    const rotor3backwards = await findLetterPosition(rc[0], reflectorReturn, "backwards");;
    console.log(rotor3backwards, "rotor3backwards")
    const rotor2backwards = await findLetterPosition(rc[1], rotor3backwards, "backwards");
    console.log(rotor2backwards, "rotor2backwards")
    const result = await findLetterPosition(rc[2], rotor2backwards, "backwards");
    // return console.log(result, 'result');
    return await result;
}

export {
    processRotors,
    composeRotors
}