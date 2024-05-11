const expertise = [
    {
        id: 0,
        title: 'A',
        desc: 'B',
    },
    {
        id: 1,
        title: 'c',
        desc: "m",
    },
    {
        id: 2,
        title: 'h',
        desc: ' n',
    },
    {
        id: 3,
        title: 'g',
        desc: "g",
    },
    {
        id: 4,
        title: '',
        desc: "",
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
