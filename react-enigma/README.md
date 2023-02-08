# Planning

1. Maintain state of key mapping to keyboard. For this, the keyboard keys will be the keys -- duh! Values will be the return of rotor[key]

2. Rotor state object: 

{
    "a": "a",
    "b": "b",
    "c": "c",
    "d": "d",
    "e": "e",
    "f": "f",
    "g": "g",
    "h": "h",
    "i": "i",
    "j": "j",
    "k": "k",
    "l": "l",
    "m": "m",
    "n": "n",
    "o": "o",
    "p": "p",
    "q": "q",
    "r": "r",
    "s": "s",
    "t": "t",
    "u": "u",
    "v": "v",
    "w": "w",
    "x": "x",
    "y": "y",
    "z": "z"
}

3. Rotation function

Object.entries(rotor).map((element, index) => {
    let next = rotor.length - 1 === index ? 0 : index + 1;
    let coconut = rotor[next]
    console.log(rotor[next][0], index, next)
    return [element[0], rotor[next][0]]
})

May want to add an Object.assign to the above later so that we don't mutate state, React probably does that for me tho.

4. plugboard

TBA. may be simplest component, we'll see.

5. UI

Should start out as simple as possible initially. Will compare against an online enigma machine to test.