export type Verb = {
    id: string;
    conjugation: {
        id: string;
        form: string;
    }[];
}

export const verbs: Verb[] = [
    {
        id: "esser",
        conjugation: [
            {
                id: "eau",
                form: "sun"
            },
            {
                id: "tü",
                form: "est"
            },
            {
                id: "el/alla",
                form: "es"
            },
            {
                id: "nus",
                form: "essans"
            },
            {
                id: "vus",
                form: "essas"
            },
            {
                id: "els/ellas",
                form: "sun"
            }
        ]
    },
    {
        id: "avair",
        conjugation: [
            {
                id: "eau",
                form: "d'he"
            },
            {
                id: "tü",
                form: "hest"
            },
            {
                id: "el/alla",
                form: "ho"
            },
            {
                id: "nus",
                form: "vains"
            },
            {
                id: "vus",
                form: "vais"
            },
            {
                id: "els/ellas",
                form: "haun"
            }
        ]
    },
    {
        id: "fer",
        conjugation: [
            {
                id: "eau",
                form: "fatsch"
            },
            {
                id: "tü",
                form: "fest"
            },
            {
                id: "el/alla",
                form: "fo"
            },
            {
                id: "nus",
                form: "fains"
            },
            {
                id: "vus",
                form: "fais"
            },
            {
                id: "els/ellas",
                form: "faun"
            }
        ]
    },
    {
        id: "ir",
        conjugation: [
            {
                id: "eau",
                form: "vegn"
            },
            {
                id: "tü",
                form: "vest"
            },
            {
                id: "el/alla",
                form: "vo"
            },
            {
                id: "nus",
                form: "giains"
            },
            {
                id: "vus",
                form: "giais"
            },
            {
                id: "els/ellas",
                form: "vaun"
            }
        ]
    },
    {
        id: "der",
        conjugation: [
            {
                id: "eau",
                form: "dun"
            },
            {
                id: "tü",
                form: "dest"
            },
            {
                id: "el/alla",
                form: "do"
            },
            {
                id: "nus",
                form: "dains"
            },
            {
                id: "vus",
                form: "dais"
            },
            {
                id: "els/ellas",
                form: "daun"
            }
        ]
    },
    {
        id: "gnir",
        conjugation: [
            {
                id: "eau",
                form: "vegn"
            },
            {
                id: "tü",
                form: "vainst"
            },
            {
                id: "el/alla",
                form: "vain"
            },
            {
                id: "nus",
                form: "gnins"
            },
            {
                id: "vus",
                form: "gnis"
            },
            {
                id: "els/ellas",
                form: "vegnan"
            }
        ]
    },
    {
        id: "vulair",
        conjugation: [
            {
                id: "eau",
                form: "vögl"
            },
            {
                id: "tü",
                form: "voust"
            },
            {
                id: "el/alla",
                form: "voul"
            },
            {
                id: "nus",
                form: "vulains"
            },
            {
                id: "vus",
                form: "vulais"
            },
            {
                id: "els/ellas",
                form: "vöglian"
            }
        ]
    },
    {
        id: "vudair",
        conjugation: [
            {
                id: "eau",
                form: "poss"
            },
            {
                id: "tü",
                form: "poust"
            },
            {
                id: "el/alla",
                form: "po"
            },
            {
                id: "nus",
                form: "pudains"
            },
            {
                id: "vus",
                form: "puais"
            },
            {
                id: "els/ellas",
                form: "paun"
            }
        ]
    },
    {
        id: "stuvair",
        conjugation: [
            {
                id: "eau",
                form: "stögl"
            },
            {
                id: "tü",
                form: "stust"
            },
            {
                id: "el/alla",
                form: "stu"
            },
            {
                id: "nus",
                form: "stuvains"
            },
            {
                id: "vus",
                form: "stuvais"
            },
            {
                id: "els/ellas",
                form: "stöglian"
            }
        ]
    },
]