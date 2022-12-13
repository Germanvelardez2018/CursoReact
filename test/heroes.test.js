




import { getHeroeById } from '../base-pruebas/08-imp-exp';
import heroes from '../base-pruebas/data/heroes';

describe('Testing on heroes.js',()=>{

    test("testing getHeroById",()=>{
        const id = 1
        const hero = getHeroeById(id);
        const exp = heroes.find(h =>h.id == id)
        expect(heroes.find((h)=>h.id == id)).toEqual(hero);
    });


})