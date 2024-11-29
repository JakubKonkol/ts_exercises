import pracownicy from '../dane/pracownicy.json' assert { type: "json" };
import { listaPracowników } from "./index.js";
import {Pracownik} from "./types/pracownikTypes.js";
import {Powód} from "./types/otherTypes.js";


export const dodajPracownikówZListy = () => {
    pracownicy.forEach(pracownik => {
        dodajPracownika(pracownik);
    });
};

export const dodajNowegoPracownika = (imie, nazwisko, stanowisko, pensja, zwolnij) => {
    listaPracowników.push({
        imie,
        nazwisko,
        stanowisko,
        pensja,
        zwolnij
    });
}

export const dodajPracownika = (pracownik: Pracownik) => {
    listaPracowników.push(pracownik);
}

export const zwolnijPracownika = (id: number, powody: Powód[]) => {
    const pracownik = listaPracowników/* ?? */.find(pracownik => pracownik.id === id);
    if (pracownik) {
            pracownik.zwolnij(powody);
    }
}

const zwolnijGo = (/* ?? */powody: Powód[]) =>{
    powody.forEach(powód => {
            console.log("Zwolniono z powodu numer: " + powód);
            console.log("Zwolniono z powodu: " + powód);
            console.log("NIE UDAŁO SIĘ ZWOLNIĆ, ZOSTAJĘ W TYM GRAJDOŁKU!");
    });
}