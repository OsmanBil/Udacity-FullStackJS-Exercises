import Client from "../database";

export type Weapon = {
    id: number;
    name: string;
    type: string;
    weight: number;
}

export class MythicalWeaponStore {
    async index(): Promise<Weapon[]> {
        try {
            const conn = await Client?.connect(); //connect to database
            const sql = 'SELECT * FROM mythical_weapons';  // select all from mythical_weapons table
            const result = await conn?.query(sql); // run query
            conn?.release(); // release connection
            return result!.rows; // return rows
        } catch (err) {
            throw new Error(`Could not get weapons. Error: ${err}`);
        }
    }
}