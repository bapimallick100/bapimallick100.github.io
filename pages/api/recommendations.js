// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: '',
    image: "images/testImage.jpeg",
    designation: '',
    view: "",
    linkednURL: ""
  },
  {
    id: 1,
    name: 't',
    image: "images/testImage.jpeg",
    designation: '',
    view: "",
    linkednURL: ""
  },
  {
    id: 2,
    name: '',
    image: "images/testImage.jpeg",
    designation: '',
    view: "",
    linkednURL: ""
  },
  {
    id: 3,
    name: '',
    image: "images/testImage.jpeg",
    designation: '',
    view: "",
    linkednURL: "/"
  },
]
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
