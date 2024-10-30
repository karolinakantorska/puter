export type Verb = {
    id: string;
    conjugation: {
        id: string;
        form: string;
    }[];
    perfet: string[];

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
        ],
        perfet: ["salüdo", "salüdeda"]
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
        ],
        perfet: ["vendieu", "vendida"]
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
        ],
        perfet: ["partieu", "partida"]
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
        ],
        perfet: ["giodieu", 'giodida']
    },

]