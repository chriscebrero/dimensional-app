export type Trait = {
    name: string;
    colorHextCodes: string[];
    score: number;
}

export type SummaryTableValue = {
    text: string;
    isHighlighted: boolean;
}

export type SummaryTableRow = {
    title: string;
    values: SummaryTableValue[];
}

export type SummaryTableRows = {
    summaryTableRows: SummaryTableRow[];
}

export type Profile = {
    description: string;
    userName: string;
    profileUrl: string;
    adjectives: string[];
    id: string;
    mostEndorsedElements: Trait[];
}