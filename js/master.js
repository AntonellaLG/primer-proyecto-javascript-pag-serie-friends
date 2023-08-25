let friendsPersonajes = [
    {
        nombre: "Mónica",
        apellido: "Geller",
        foto: 'https://media.tenor.com/TkZzzG3_tBYAAAAM/monica-gspot.gif',
        descripcion: "A pesar de su carácter extremadamente competitivo y su obsesión con la limpieza, es un personaje carismático y espontáneo, la más centrada del grupo y esta dispuesta en ayudar a sus amigos y no deja de ser una persona alegre y de buen corazón. La perfeccionista, cariñosa, obsesivo-compulsiva, perseverante, empática, competitiva, generosa, mandona y resolutiva Monica. El pegamento que mantiene unidos a los demás miembros de Friends.",
        frase: "",
    },
    {
        nombre: "Joey",
        apellido: "Tribbiani",
        foto : 'https://hips.hearstapps.com/hmg-prod/images/joey-1590653648.gif',
        descripcion: "Es una persona afable, encantadora y bien intencionada, pero no tan brillante. Le encanta la comida, las mujeres, el sexo, la familia, los amigos y los New York Knicks.",
        frase: "",
    },
    {
        nombre: "Rachel",
        apellido: "Green",
        foto : 'https://64.media.tumblr.com/a06e4927de1119e8f824746ff9f5eb35/tumblr_inline_pa4ff9CfCB1qlt39u_250.gifv',
        descripcion: "Al principio, se la retrata como una niña malcriada. A menudo puede ser egocéntrica, pero a menudo es dulce y trata de ser una buena amiga. Más adelante en la serie, especialmente después de dar a luz, se vuelve mucho menos ensimismada.",
        frase: "",
    },
    {
        nombre: "Chandler",
        apellido: "Bing",
        foto : 'https://media.tenor.com/LUFs-A8Gx0MAAAAC/dance-dancing.gif',
        descripcion: "Es diversión, lealtad, ternura e ingenio hecho hombre. El sarcasmo en sus chistes es su toque característico. Siempre ve el lado positivo de las cosas. Es el chico gracioso del grupo, mejor amigo y marido de Friends.",
        frase: "“Soy Chandler. Hago chistes cuando estoy incómodo”.",
    },
    {
        nombre: "Phoebe",
        apellido: "Buffay",
        foto : 'https://i.makeagif.com/media/4-15-2017/fmYuUD.gif',
        descripcion: "Es una chica típica del estilo de Nueva York, ruda y fuerte, tanto física como mentalmente. A lo largo de Friends tiene una «rara» pero adorable personalidad con una gran cantidad de divertidos matices. Por una parte, es inocente e ingenua y por otro lado tiene la inteligencia callejera que algunos de sus amigos no tienen.",
        frase: "",
    },
    {
        nombre: "Ross",
        apellido: "Geller",
        foto : 'https://media.tenor.com/ErwgCWVPlUQAAAAC/im-fine-friends.gif',
        descripcion: "Aunque en general tiene un carácter dulce, es a menudo socialmente torpe. Ross a veces es mostrado por tener un buen sentido del humor. Es el único miembro del grupo de amigos con un doctorado, y, puede ser arrogante. En la mayoría de los casos su arrogancia le hace fracasar o saca lo mejor de él.",
        frase: "",
    },
]


let tituloPag=document.getElementById('titulo')
tituloPag.innerHTML='Personajes de la serie';

tituloPag.classList.add('destacado')


for(let i=0; i<friendsPersonajes.length; i++){
    personajes.innerHTML+=`
    <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${friendsPersonajes[i].foto}" class="img-fluid rounded-start" alt="Imagen Personaje Friends">
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