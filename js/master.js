let friendsPersonajes = [
    {
        nombre: "Mónica",
        apellido: "Geller",
        foto: 'https://media.tenor.com/TkZzzG3_tBYAAAAM/monica-gspot.gif',
        descripcion: "La perfeccionista, cariñosa, obsesivo-compulsiva, perseverante, empática, competitiva, generosa, mandona, carismática, espontánea y resolutiva Monica. El pegamento que mantiene unidos a los demás miembros de Friends.",
        frase: "“I know!”",
    },
    {
        nombre: "Joey",
        apellido: "Tribbiani",
        foto : 'https://hips.hearstapps.com/hmg-prod/images/joey-1590653648.gif',
        descripcion: "Es un chico encantador, extrovertido, perseverante, cariñoso con sus amigas y un fiel amigo. Un poco lento para entender las cosas, pero aun así es muy comprensivo y tierno, de carácter infantil e inocente.",
        frase: "“How you doing?”",
    },
    {
        nombre: "Rachel",
        apellido: "Green",
        foto : 'https://64.media.tumblr.com/a06e4927de1119e8f824746ff9f5eb35/tumblr_inline_pa4ff9CfCB1qlt39u_250.gifv',
        descripcion: "Al principio es como una niña malcriada. Puede ser egocéntrica, pero es dulce y trata de ser una buena amiga. Con el paso del tiempo se vuelve más independiente, se fortalece, y es una amiga generosa.",
        frase: "“ Dios mío. Me he convertido en mi padre. Me he esforzado tanto por no convertirme en mi madre, que no vi venir esto.”", //No uterus no opinion
    },
    {
        nombre: "Chandler",
        apellido: "Bing",
        foto : 'https://media.tenor.com/LUFs-A8Gx0MAAAAC/dance-dancing.gif',
        descripcion: "Es diversión, lealtad, ternura e ingenio hecho hombre. El sarcasmo en sus chistes es su toque característico. Siempre ve el lado positivo de las cosas. Es el chico gracioso del grupo, mejor amigo y marido de Friends.",
        frase: "“Soy Chandler. Hago chistes cuando estoy incómodo.”",
    },
    {
        nombre: "Phoebe",
        apellido: "Buffay",
        foto : 'https://i.makeagif.com/media/4-15-2017/fmYuUD.gif',
        descripcion: "Es una chica ruda y fuerte, tanto física como mentalmente. Tiene una rara pero adorable personalidad, con una gran cantidad de divertidos matices. Es inocente e ingenua y por otro lado tiene la inteligencia callejera que algunos de sus amigos no.",
        frase: "“Ellos no saben que nosotros sabemos que ellos saben que nosotros sabemos.”",
    },
    {
        nombre: "Ross",
        apellido: "Geller",
        foto : 'https://media.tenor.com/ErwgCWVPlUQAAAAC/im-fine-friends.gif',
        descripcion: "Aunque en general tiene un carácter dulce, a menudo es socialmente torpe. Tiene un buen sentido del humor y muchas veces resulta gracioso por sus gestos y acciones. Puede ser algo arrogante, pero es bien intencionado y un muy buen amigo.",
        frase: "“We were on a break!”",
    },
]


let tituloPag=document.getElementById('titulo')
tituloPag.innerHTML='Personajes de la serie';

tituloPag.classList.add('destacado')


for(let i=0; i<friendsPersonajes.length; i++){
    personajes.innerHTML+=`
    <div class="card mb-3 mx-auto" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${friendsPersonajes[i].foto}" class="img-fluid rounded-start" alt="Imagen ${friendsPersonajes[i].nombre} Friends">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${friendsPersonajes[i].nombre} ${friendsPersonajes[i].apellido}</h5>
                    <p class="card-text">${friendsPersonajes[i].descripcion}</p>
                    <p class="card-text"><small class="text-body-secondary">${friendsPersonajes[i].frase}</small></p>
                </div>
            </div>
        </div>
    </div>
    `;
}