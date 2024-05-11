// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: '',
    image: "",
    designation: '',
    view: "",
    linkednURL: ""
  },
  {
    id: 1,
    name: 't',
    image: "",
    designation: '',
    view: "",
    linkednURL: ""
  },
  {
    id: 2,
    name: '',
    image: "",
    designation: '',
    view: "",
    linkednURL: ""
  },
  {
    id: 3,
    name: '',
    image: "",
    designation: '',
    view: "",
    linkednURL: "/"
  },
]
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
