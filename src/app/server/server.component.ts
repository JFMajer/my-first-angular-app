import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    allowNewServer = false;
    serverCreationStatus = 'No server was created!';

    serverId = 10;
    serverStatus = 'offline';

    addNumbers(a: number, b: number) {
        return a + b;
    }

    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
    }

    onCreateServer() {
        this.serverCreationStatus = 'Server was created!';
    }

    onDisableServer() {
        this.serverCreationStatus = 'Server was removed!';
    }


}