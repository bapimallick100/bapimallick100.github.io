const background = [
    {
        eduCards: [
            {
                id: 0,
                title: '',
                degree: '',
                detail: "",
                year: ''
            },
            {
                id: 1,
                title: '',
                degree: '',
                detail: "",
                year: ''
            },
            {
                id: 2,
                title: '',
                degree: '',
                detail: "",
                year: ''
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: '',
                role: '',
                url: '',
                desc: '',
                year: '',
                location: ''
            },
            {
                id: 2,
                title: '',
                role: '',
                url: '',
                desc: '',
                year: '',
                location: ''
            },
            {
                id: 3,
                title: '',
                role: '',
                url: '',
                desc: "",
                year: '',
                location: ''
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
