export type Verb = {
    id: string;
    conjugation: {
        id: string;
        form: string;
    }[];
}

export const verbsRegular: Verb[] = [
    {
        id: "salüder",
        conjugation: [
            {
                id: "eau",
                form: "slüd"
            },
            {
                id: "tü",
                form: "salüdast"
            },
            {
                id: "el/alla",
                form: "slüda"
            },
            {
                id: "nus",
                form: "slüdains"
            },
            {
                id: "vus",
                form: "slüdais"
            },
            {
                id: "els/ellas",
                form: "slüdan"
            }
        ]
    },
    {
        id: "vender",
        conjugation: [
            {
                id: "eau",
                form: "vend"
            },
            {
                id: "tü",
                form: "vendast"
            },
            {
                id: "el/alla",
                form: "venda"
            },
            {
                id: "nus",
                form: "vendains"
            },
            {
                id: "vus",
                form: "vendais"
            },
            {
                id: "els/ellas",
                form: "vendan"
            }
        ]
    },
    {
        id: "partir",
        conjugation: [
            {
                id: "eau",
                form: "part"
            },
            {
                id: "tü",
                form: "partast"
            },
            {
                id: "el/alla",
                form: "parta"
            },
            {
                id: "nus",
                form: "partains"
            },
            {
                id: "vus",
                form: "partais"
            },
            {
                id: "els/ellas",
                form: "partan"
            }
        ]
    },
    {
        id: "giodair",
        conjugation: [
            {
                id: "eau",
                form: "giod"
            },
            {
                id: "tü",
                form: "giodast"
            },
            {
                id: "el/alla",
                form: "gioda"
            },
            {
                id: "nus",
                form: "giodains"
            },
            {
                id: "vus",
                form: "giodais"
            },
            {
                id: "els/ellas",
                form: "giodan"
            }
        ]
    },

]