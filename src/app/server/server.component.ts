import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    allowNewServer = false;
    serverCreationStatus = 'No server was created!';
    serverName : string = '';
    serverCreated = false;
    userName : string = '';

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
        this.serverCreated = true;
        this.serverCreationStatus = 'Server was created with the name ' + this.serverName;
    }

    onDisableServer() {
        this.serverCreationStatus = 'Server was removed!';
    }

    onResetUserName() {
        this.userName = '';
    }

    isUserNameEmpty() {
        return this.userName === '';
    }


}