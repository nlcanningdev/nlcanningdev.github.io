var state0_0;

function createState0_0HostContainer() {
    return {
        text: 0,
        checkBox: 0
    };
}

function createState0_0RoomIDContainer() {
    return {
        text: 0,
        field: 0
    }
}

function createState0_0() {
    return {
        isHostContainer: createState0_0HostContainer(),
        roomIDContainer: createState0_0RoomIDContainer(),
        localOrOnlineContainer: createState0_0LocalOrOnlineContainer()
    };
}

function setupState0_0() {
    state_0_0 = createState0_0();
}

function setup() {
    setupState0_0();
}

window.addEventListener("load", setup);
