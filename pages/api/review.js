const review = [
    {
        id: 1,
        clientName: '',
        clientLocation: '',
        clientSource: '',
        clientReview: ''
    },
    {
        id: 2,
        clientName: '',
        clientLocation: '',
        clientSource: '',
        clientReview: ''
    },
    {
        id: 3,
        clientName: '',
        clientLocation: '',
        clientSource: '',
        clientReview: ''
    },
    {
        id: 4,
        clientName: '',
        clientLocation: '',
        clientSource: '',
        clientReview: ''
    },
]
export default function handler(req, res) {
    res.status(200).json(review)
}
