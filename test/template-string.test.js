import { getSaludo } from "../base-pruebas/02-template-string";

describe("Testing in String file",()=>{
    test("'getSaludo should return 'hola Fernando'",()=>{
        const name = 'Fernando';
        const message = getSaludo(name);
        expect(message).toBe(`Hola ${name}`);

    });

});