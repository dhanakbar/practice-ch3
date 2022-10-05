import { mahasiswa } from "../../data/mahasiswa";

export default function handler(req, res) {
    const method = req.method
    let { location, name, id, image } = req.body

    switch (method) {
        case 'GET':
        res.status(200).json(mahasiswa)
        break;
        case 'POST':
        const newMahasiswa = { 
            id: mahasiswa.length + 1,
            location,
            name,
            id,
            image
        }
        mahasiswa.push(newMahasiswa)
        res.status(200).json(mahasiswa)
        break;
        default:
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }
}