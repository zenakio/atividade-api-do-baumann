import { Injectable } from '@nestjs/common';

@Injectable()
export class ConversorService {
    //Comprimento
    metrosParaKm(valor: number) {
        return valor / 1000;
    }
    // m² → km²
    m2ParaKm2(valor: number): number {
        return valor / 1_000_000;
    }

    // m² → acres
    m2ParaAcres(valor: number): number {
        return valor / 4046.86;
    }

    // m² → pés²
    m2ParaPes2(valor: number): number {
        return valor * 10.7639;
    }
    // kg → g
    kgParaGramas(valor: number): number {
        return valor * 1000;
    }

    // kg → libras
    kgParaLibras(valor: number): number {
        return valor * 2.20462;
    }

    // kg → onças
    kgParaOncas(valor: number): number {
        return valor * 35.274;
    }
    // °C → °F
    cParaF(valor: number): number {
        return (valor * 9 / 5) + 32;
    }

    // °C → K
    cParaK(valor: number): number {
        return valor + 273.15;
    }

    // °F → °C
    fParaC(valor: number): number {
        return (valor - 32) * 5 / 9;
    }
    // km/h → m/s
    kmhParaMs(valor: number): number {
        return valor / 3.6;
    }

    // km/h → mph
    kmhParaMph(valor: number): number {
        return valor * 0.621371;
    }

    // nós → km/h
    nosParaKmh(valor: number): number {
        return valor * 1.852;
    }
}
