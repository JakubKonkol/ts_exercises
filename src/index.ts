import { dodajNowegoPracownika, dodajPracownika, dodajPracownikówZListy, zwolnijPracownika } from "./pracownicy.js";
import { generujRaport } from "./raporty.js";
import {Stanowisko} from "./types/otherTypes.js";
import {Pies, Pracownik} from "./types/pracownikTypes.js";

export const listaPracowników: Pracownik[] = [];

const paniBasia = {
    id: 0,
    imie: "Basia",
    nazwisko: "Kowalska",
    stanowisko: Stanowisko.pani_basia,
    //pensja: ??,
    graNaSkrzypcach: "pięknie",
    bezNiejTenZakładUpadnie: true
}

const uruchomDzieńPracy = async () => {
    dodajNowegoPracownika("Jan", "Kowalski", "Sprzątacz", /* ?? ---> */ 0);
    dodajPracownikówZListy();
    dodajPracownika(paniBasia);
    zwolnijPracownika(0, 1);

    const efektyPracy = {
        obniżonaEfektywność: true,
        spadekPensji: 1000
    };
    const raportPracownika = generujRaport(efektyPracy, 0, "brak");
    const raportPracowników = generujRaport({
        0: efektyPracy,
        1: efektyPracy
    }, 0, "brak");
    const raportPieseczka = await generujRaport({szczekanie: true, isPies: true, aKtoToJestTakimSłodkimPieseczkiem: true}, 0, "brak");

    if(raportPieseczka.isPies){
        console.log("Dobra psinka!");
    }
}

uruchomDzieńPracy();