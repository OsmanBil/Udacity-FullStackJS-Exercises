"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mythical_weapons_1 = require("../mythical_weapons");
const store = new mythical_weapons_1.MythicalWeaponStore();
describe("Mythical Weapon Model", () => {
    it("should have an index method", () => {
        expect(store.index).toBeDefined();
    });
    // it("index method should return a list of weapons", async () => {
    //     const result = await store.index();
    //     expect(result).toEqual([]);
    // });
});
