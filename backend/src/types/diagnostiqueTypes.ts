export interface IDiagnostique {
  diagnostique: DiagnostiqueName;
  description: string;
  objectif: string;
}

export interface IData {
  answers: {
    axis: string;
    answers: number;
  }[];
}

export interface TraitResult {
  type: string;
  score: number;
  desc: string;
}

export enum DiagnostiqueName {
  RAISEC = "RAISEC",
  BIG_5 = "Big 5",
  ANXIETE_SINCERE = "ANXIÉTÉ SINCÈRE",
  ANXIETE_EXAMENS = "ANXIÉTÉ AUX EXAMENS",
  ANXIETE_FUTUR = "ANXIÉTÉ FACE AU FUTUR",
  DEPRESSION = "DÉPRESSION",
  ESTIME_DE_SOI = "ESTIME DE SOI",
  DEPENDANCE_INTERNET = "DÉPENDANCE À INTERNET",
  PRESSION_PSYCHOLOGIQUE = "PRESSION PSYCHOLOGIQUE",
}
