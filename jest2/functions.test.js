const functions = require('./functions');

// beforeEach(()=> initDatabase());
// afterEach(()=> closeDatabase())

// beforeAll(()=> initDatabase());
// afterAll(()=> closeDatabase())

// const initDatabase = () => console.log("Database initialized")
// const closeDatabase = () => console.log("Database closed")

const nameCheck = () => console.log("Name checked");

describe("checking names", () => {
    beforeEach(() => nameCheck())

    test("User is Jeff", () => {
        const user = "Jeff"
        expect(user).toBe("Jeff")
    })
}
)

test("adds 2 + 2 to equal 4", () => {
    expect(functions.add(2, 2)).toBe(4);
})

test("adds 2 + 2 to not equal 5", () => {
    expect(functions.add(2, 2)).not.toBe(5);
})

test("should be null", () => {
    expect(functions.isNull()).toBeNull();
})

test("should be falsy", () => {
    expect(functions.checkValue(null)).toBeFalsy();
})

test("User should be Brad Object", () => {
    expect(functions.createUser()).toEqual({firstName: 'Brad', lastName: 'Traversy'});
})

test("Shoud be under 1600", () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1+load2).toBeLessThan(1600);
})

test("there is no I in team", () => {
    expect("Team").not.toMatch(/I/);
})

test("Admin should be in Username", () => {
    usernames = ["John", "Karen", "admin"];
    expect(usernames).toContain("admin");
})

test("User fetched name should ne Leanne Graham", () => {
    expect.assertions(1);
    return functions.fetchUser().then(data => {
        expect(data.name).toEqual("Leanne Graham");
    })
})

test("User fetched name should ne Leanne Graham", async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
        expect(data.name).toEqual("Leanne Graham");
    
})