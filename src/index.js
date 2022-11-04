import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const usuarios = [
    {
        username: "bobesponja",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
    },
    {
        username: "patrick",
        avatar: "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Patrick-Star.SpongeBob-SquarePants.webp"
    }
]

app.get('/sign-up', (req, res) => {
    res.send(usuarios);
})
app.post('/sign-up', (req, res) => {
    console.log(req.body)
    const novoUsuario = {
        username: req.body.username,
        avatar: req.body.avatar
    };
    usuarios.push(novoUsuario);
    res.send('OK');
})

app.listen(5000);