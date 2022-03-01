class App {
    constructor(cpu, ram, bandwidth) {
        this.cpu = cpu;
        this.ram = ram;
        this.bandwidth = bandwidth;
    }
}

class Server {
    constructor(cpu, ram, bandwidth) {
        this.cpu = cpu;
        this.ram = ram;
        this.bandwidth = bandwidth;
    }
    
}

const appFitsOnServer = (app, server) => {
    if (app.bandwidth <= server.bandwidth 
        && app.cpu <= server.cpu 
        && app.ram <= server.ram) {
        return true;
        } else {
        return false;
        }
    }




module.exports = {
     App, Server, appFitsOnServer}