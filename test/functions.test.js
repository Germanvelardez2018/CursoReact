import { getUser, getUsuarioActivo } from "../base-pruebas/05-funciones";

describe('Testing on functions.js',()=>{

    test('getUser',()=>{
    const userA = 
        {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
    expect(userA).toEqual(getUser());
    });


    test('getUsuarioActivo',()=>{
        const userB = 
            {
                uid: 'ABC567',
                username: 'Fernando'
            };
        expect(userB).toEqual(getUsuarioActivo("Fernando"));
    });

});