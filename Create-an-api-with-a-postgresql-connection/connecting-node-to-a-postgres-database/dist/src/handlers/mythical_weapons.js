"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mythical_weapons_1 = require("../models/mythical_weapons");
const store = new mythical_weapons_1.MythicalWeaponStore();
const index = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const weapons = yield store.index();
    res.json(weapons);
});
const mythical_weapons_routes = (app) => {
    app.get('/products', index);
};
exports.default = mythical_weapons_routes;
