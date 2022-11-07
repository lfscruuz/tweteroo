import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const usuarios = [
    {
        username: "cachorro",
        avatar: "http://s2.glbimg.com/cYa3pKAKIPidjKyGPuAd8T4Hd1I=/e.glbimg.com/og/ed/f/original/2017/08/21/dog-2570398_960_720.jpg"
    },
    {
        username: "gato",
        avatar: "https://jpimg.com.br/uploads/2020/10/cat-528386_1280.jpg"
    },
    {
        username: "tucano",
        avatar: "https://www.petz.com.br/blog/wp-content/uploads/2022/06/animais-selvagens-3.jpg"
    },
    {
        username: "leao",
        avatar: "https://www.petz.com.br/blog/wp-content/uploads/2022/07/animais-da-africa3.jpg"
    },
    {
        username: "tatu",
        avatar: "https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/01-amored-animals-nationalgeographic_1159498.jpg?w=1600&h=900"
    },
    {
        username: "arara",
        avatar: "https://leiturinha.com.br/blog/wp-content/uploads/2022/06/iStock-1314796448-1.jpg"
    },
    {
        username: "llama",
        avatar: "https://t1.ea.ltmcdn.com/pt/posts/4/1/1/os_animais_mais_fofos_do_mundo_23114_600_square.jpg"
    },
    {
        username: "onca",
        avatar: "https://reallylearnportuguese.com/wp-content/uploads/2022/04/onca-770x460.jpg"
    },
    {
        username: "golfinho",
        avatar: "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/o-golfinho-um-exemplo-animal-pertencente-ao-grupo-dos-mamiferos-5bd334f3235f1.jpg"
    },
    {
        username: "cobrafofa",
        avatar: "https://pbs.twimg.com/media/ERrYO5QWAAE88D9.jpg"
    }
];

const tweets = [
    {
        username: "cobrafofa",
        tweet: "boop. boop the snoot"
    },
    {
        username: "onca",
        tweet: "mamifero mais pica que tem"
    },
    {
        username: "golfinho",
        tweet: "mamifero mais fdp que tem"
    },
    {
        username: "cachorro",
        tweet: "auau"
    },
    {
        username: "gato",
        tweet: "miau"
    },
    {
        username: "tucano",
        tweet: "barulho de tucano"
    },
    {
        username: "leao",
        tweet: "preguicinha"
    },
    {
        username: "tatu",
        tweet: "em casa agora"
    },
    {
        username: "arara",
        tweet: "ahaha"
    },
    {
        username: "llama",
        tweet: "*cuspo na sua cara"
    },
];

app.get('/sign-up', (req, res) => {
    res.send(usuarios);
})

app.post('/sign-up', (req, res) => {
    const {username, avatar} = req.body;
    const novoUsuario = {
        username: username,
        avatar: avatar
    };
    usuarios.push(novoUsuario);
    res.send('OK');
})

app.get('/tweets', (req, res) =>{
    const novosTweets = []
    for (let i = 0; i < tweets.length; i++){
        const dadosUsuario = usuarios.find(e => e.username == tweets[i].username)
        const mostrarTweet = (dadosUsuario === undefined ? '' : {
            username: dadosUsuario.username,
            avatar: dadosUsuario.avatar,
            tweet: tweets[i].tweet
        })
        novosTweets.push(mostrarTweet)
    }
    res.send(novosTweets);
})

app.post('/tweets', (req, res) =>{
    const {username, tweet} = req.body;
    const novoTweet = {
        username: username,
        tweet: tweet
    };
    if (tweets.length = 10){
        tweets.pop(tweets[10])
    }
    tweets.unshift(novoTweet);
    res.send('OK');
})
app.listen(5000);