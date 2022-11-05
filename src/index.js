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

const tweets = [
    {
        username: "bobesponja",
      tweet: "eu amo o hub"
    },
    {
        username: "patrick",
      tweet: "va dao cu"
    }
]

app.get('/sign-up', (req, res) => {
    res.send(usuarios);
})
app.post('/sign-up', (req, res) => {
    const {username, avatar} = req.body
    console.log(req.body)
    const novoUsuario = {
        username: username,
        avatar: avatar
    };
    usuarios.push(novoUsuario);
    res.send('OK');
})


app.get('/tweets', (req, res) =>{
    res.send(tweets);
    console.log(tweets)
})

app.post('/tweets', (req, res) =>{
    const {username, tweet} = req.body;
    const novoTweet = {
        username: username,
        tweet: tweet
    }
    tweets.push(novoTweet)
    res.send('OK');
})
app.listen(5000);