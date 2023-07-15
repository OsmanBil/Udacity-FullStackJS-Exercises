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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MythicalWeaponStore = void 0;
const database_1 = __importDefault(require("../database"));
class MythicalWeaponStore {
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield (database_1.default === null || database_1.default === void 0 ? void 0 : database_1.default.connect()); //connect to database
                const sql = 'SELECT * FROM mythical_weapons'; // select all from mythical_weapons table
                const result = yield (conn === null || conn === void 0 ? void 0 : conn.query(sql)); // run query
                conn === null || conn === void 0 ? void 0 : conn.release(); // release connection
                return result.rows; // return rows
            }
            catch (err) {
                throw new Error(`Could not get weapons. Error: ${err}`);
            }
        });
    }
}
exports.MythicalWeaponStore = MythicalWeaponStore;
