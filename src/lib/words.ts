export interface Word {
    id: number;
    indonesian: string;
    english: string;
    indonesianDefinition: string; // KBBI (https://kbbi.web.id/)
    englishDefinition: string; // Cambridge Dictionary (https://dictionary.cambridge.org/dictionary/english/)
    indonesianExample: string;
    englishExample: string;
    partOfSpeech?: string; // Optional, e.g., noun, verb, adjective
    category?: string; // Optional 
    difficulty?: 1 | 2 | 3; // Optional 
}

export const partsOfSpeech = [
    "noun",
    "verb",
    "adjective",    
    "adverb",
];

export const categories = [
    "daily life",
]

export const difficultyLevel = {
    1: "Beginner / Pemula",
    2: "Intermediate / Menengah",
    3: "Advanced / Sulit"
};

export const words: Word[] = [
    {
        id: 1,
        indonesian: "makan",
        english: "eat",
        indonesianDefinition: "memasukkan makanan pokok ke dalam mulut serta mengunyah dan menelannya.",
        englishDefinition: "to put food into the mouth, chew it, and swallow it.",
        indonesianExample: "Saya suka makan nasi goreng.",  
        englishExample: "I like to eat fried rice.",
        partOfSpeech: "verb",
        category: "daily life",
        difficulty: 1
    },
];