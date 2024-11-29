export enum Stanowisko {
    szef = "szef",
    anetka = "anetka",
    pani_basia = "pani_basia",
    podbutnik = "podbutnik",
}
export enum Waluta {
    Złoty_Polski_Peelen,
    Erło_jedne_niemieckie,
    Dolar_fajny_taki_amerykanski
}
export type Powód = {
    powód: (string | number)[]
}
export type Wiek = {
    wPsich: number
    wLudzkich: number,
    mentalnie: number
}
