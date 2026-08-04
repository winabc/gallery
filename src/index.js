import {
    SocketRoom
} from "./socket.js";

export default {
async fetch(request,env){

    const id =
    env.SOCKET_ROOM.idFromName(
        "main"
    );
    const room =
    env.SOCKET_ROOM.get(id);
    return room.fetch(request);
}
};
export {
    SocketRoom
};
