export class SocketRoom {
    constructor(state, env) {
        this.state = state;
        this.clients = new Map();
    }
    async fetch(request) {
        const upgradeHeader =
            request.headers.get("Upgrade");
        if(upgradeHeader !== "websocket"){
            return new Response(
                "Expected websocket",
                {
                    status:400
                }
            );
        }
        const pair = new WebSocketPair();
        const client = pair[0];
        const server = pair[1];
        server.accept();
        server.send(JSON.stringify({
            type:"connected"
        }));
        this.clients.set(
            crypto.randomUUID(),
            server
        );
        return new Response(null,{
            status:101,
            webSocket:client
        });
    }

}
