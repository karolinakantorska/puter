export type Verb = {
    id: string;
    conjugation: {
        id: string;
        form: string;
    }[]
    perfet: string[];
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
        ],
        perfet: ["sto", 'steda']
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
        ],
        perfet: ['gieu']
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
        ],
        perfet: ['fat', 'fatta']
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
        ],
        perfet: ['ieu', 'ida']
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
        ],
        perfet: ['do', 'deda']
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
        ],
        perfet: ['gnieu', 'gnida']
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
        ],
        perfet: ['vulieu', 'vulida']
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
        ],
        perfet: []
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
        ],
        perfet: ['stuvieu']
    },
    {
        id: "ster",
        conjugation: [
            {
                id: "eau",
                form: "stun"
            },
            {
                id: "tü",
                form: "stest"
            },
            {
                id: "el/alla",
                form: "sto"
            },
            {
                id: "nus",
                form: "stains"
            },
            {
                id: "vus",
                form: "stais"
            },
            {
                id: "els/ellas",
                form: "staun"
            }
        ],
        perfet: ['sto', 'steda']
    },
    {
        id: "dir",
        conjugation: [
            {
                id: "eau",
                form: "di"
            },
            {
                id: "tü",
                form: "dist"
            },
            {
                id: "el/alla",
                form: "disch"
            },
            {
                id: "nus",
                form: "dschains"
            },
            {
                id: "vus",
                form: "dschais"
            },
            {
                id: "els/ellas",
                form: "dian"
            }
        ],
        perfet: ['dit', 'ditta']
    },
    {
        id: "savair",
        conjugation: [
            {
                id: "eau",
                form: "se"
            },
            {
                id: "tü",
                form: "sest"
            },
            {
                id: "el/alla",
                form: "so"
            },
            {
                id: "nus",
                form: "savains"
            },
            {
                id: "vus",
                form: "savais"
            },
            {
                id: "els/ellas",
                form: "saun"
            }
        ],
        perfet: ['savieu', 'savida']
    },
    {
        id: "pudair",
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
                form: "pudais"
            },
            {
                id: "els/ellas",
                form: "paun"
            }
        ],
        perfet: ['pudieu']
    },
    {
        id: "metter",
        conjugation: [
            {
                id: "eau",
                form: "met"
            },
            {
                id: "tü",
                form: "mettast"
            },
            {
                id: "el/alla",
                form: "metta"
            },
            {
                id: "nus",
                form: "mettains"
            },
            {
                id: "vus",
                form: "mettais"
            },
            {
                id: "els/ellas",
                form: "mettan"
            }
        ],
        perfet: []
    },
    {
        id: "vzair",
        conjugation: [
            {
                id: "eau",
                form: "vez"
            },
            {
                id: "tü",
                form: "vezzast"
            },
            {
                id: "el/alla",
                form: "vezza"
            },
            {
                id: "nus",
                form: "vzains"
            },
            {
                id: "vus",
                form: "vzais"
            },
            {
                id: "els/ellas",
                form: "vezzan"
            }
        ],
        perfet: ['ves']
    },
]