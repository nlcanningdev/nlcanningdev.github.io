function createStateGeneral() {
    return {
        player0: createStatePlayer(),
        player1: createStatePlayer(),
        player2: createStatePlayer(),
        player3: createStatePlayer(),
        wall: createWall(),
        discard: createDiscar()
    };
}

function createStatePlayer() {
    return {
        displayName: 0,
        seatWind: 0,
        points: 0,
        concealedHand: createConcealedHand(),
        revealedHand: createRevealedHand()
    };
}

function createState0() {
    return {

    };
}

function createState1() {
    return {
        body: createState0BodyElement(),
        bodyElement: 0
    };
}

function createState1BodyElement() {
    return {
        displayNameFieldElement0: 0,
        submitButtonElement: 0
    };
}

function createState2a() {
    return {

    };
}

function createState3a() {
    return {

    };
}

function setupState1() {
    state0.body.displayNameFieldElement = document.createElement('input');
    state0.body.displayNameFieldElement.id = 'state0BodyDisplayNameFieldElement';
    state0.body.displayNameFieldElement.type = 'text';
    state0.body.displayNameFieldElement.placeholder = 'display name';
    state0.body.displayNameFieldElement.maxLength = "18";

    state0.body.submitButtonElement = document.createElement('button');
    state0.body.submitButtonElement.id = 'state0BodySubmitButtonElement';
    state0.body.submitButtonElement.textContent = 'submit';
    state0.body.submitButtonElement.cursor = 'pointer';

    state0.bodyElement = document.createElement('div');
    state0.bodyElement.id = 'state0BodyElement';

    state0.bodyElement.appendChild(state0.body.displayNameFieldElement);
    state0.bodyElement.appendChild(state0.body.submitButtonElement);
    document.body.appendChild(state0.bodyElement);
}

var stateGeneral = createStateGeneral();
var state0  = createState0();
var state1 = createState1();
var state2a = createState2a();
var state3a = createState3a();

setupState0();
