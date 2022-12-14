import { getHeroeByIdAsync } from "../base-pruebas/09-promesas";
import heroes from '../base-pruebas/data/heroes';

describe('Testing on promises', () => { 


    test("getHeroByIdAsync()",async ()=>{


        const id = 1
        const hero =   getHeroeByIdAsync(id);
        const exp = heroes.find(h =>h.id == id)
        expect(exp).toEqual(await hero);



    });
 })