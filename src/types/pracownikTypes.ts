import {Powód, Stanowisko, Waluta, Wiek} from "./otherTypes.js";

export type Pracownik = {
    id?: number;
    imie: string
    nazwisko: string
    stanowisko: Stanowisko
    pseudonim?: string
    opis?: string
    pensja?: Map<number, Waluta>
    zwolnij?(...args: (string | number)[]): void;
}
export type PaniBasia = Pracownik & {
    graNaSkrzypcach: string
    bezNiejTenZakładUpadnie: boolean
}
export type Pies = {
    imie: string
    rasa: string
    isPies: boolean,
    nienawidzi: string[]
    wiek: Wiek
}