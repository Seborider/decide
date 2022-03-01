const { App, Server, appFitsOnServer} = require("./check")

// test("Ist die CPU ausreichend für die App Check24", ()=>{
//     expect(check24.cpu).toBe(1)
// })

test("Läuft die App24 auf Server24", ()=>{
    const app = new App(1,2,3)
    const server = new Server(1,2,3)
    expect(appFitsOnServer(app, server)).toBe(true)
})

test("Is App not running on server", ()=>{
    const app = new App(2,3,4)
    const server = new Server(1,2,3)
    expect(appFitsOnServer(app, server)).toBe(false)
    
})