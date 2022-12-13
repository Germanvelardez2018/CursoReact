import { retornaArreglo } from "../base-pruebas/07-deses-arr"

describe('Testing en arrays',()=>{


    test('testing on retornarArreglo',()=>{

    
        const [letter,number] = retornaArreglo();

        expect(letter).toBe('ABC');
        expect(number).toBe(123);

        
    })

})