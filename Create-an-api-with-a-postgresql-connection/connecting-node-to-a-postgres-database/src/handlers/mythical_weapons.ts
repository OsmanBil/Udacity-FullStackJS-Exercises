import express, { Request, Response } from 'express'
import  { Weapon, MythicalWeaponStore } from '../models/mythical_weapons'

const store = new MythicalWeaponStore()

const index = async (_req: Request, res: Response) => {
    const weapons = await store.index()
    res.json(weapons)
}

const mythical_weapons_routes = (app: express.Application) => {
    app.get('/products', index)
}

export default mythical_weapons_routes