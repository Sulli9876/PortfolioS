const btnMenu = document.querySelector('.btn-rond-menu');
const navMenu = document.querySelector('.nav-gauche');
const allItemNav = document.querySelectorAll('.nav-menu-item');
const ligne = document.querySelector('.cont-line');

btnMenu.addEventListener('click', () => {
    ligne.classList.toggle('active');
    navMenu.classList.toggle('menu-visible');

})

if(window.matchMedia("(max-width ; 1300px)")){
    allItemNav.forEach(item => {
        item.addEventListener('click',()=>{
            ligne.classList.toggle('active');
            navMenu.classList.toggle('menu-visible');
    })

    })

}

// Animation h1

const txtAnimation = document.querySelector('.txt-animation');

let typewriter = new Typewriter(txtAnimation, {
    loop: false,
    deleteSpeed: 20,
    });

    typewriter
    .pauseFor(1500)
    .changeDelay(20)
    .typeString('Sullivan Madureira')
    .pauseFor(300)
    .typeString('<strong> Développeur <span style="color: #ff6910;">Javascript</span></strong> ')
    .pauseFor(800)
    .deleteChars(12)
    .typeString('<span style="color: rgb(27, 140, 185);"> <strong>React</strong></span> !')
    .pauseFor(800)
    .deleteChars(8)
    .typeString('<span style="color: rgb(0, 0, 0);"> <strong>Fullstack</strong></span> !')
    .start();


    // ANimation contact

    const input_fields = document.querySelectorAll('input, textarea');
    const titre = document.querySelector('h1');
    const btn = document.querySelectorAll('.btn-acc');
    const medias = document.querySelectorAll('.media');
    const btnAccueil = document.querySelector('.btn-rond');


    for(let i = 0; i < input_fields.length; i++) {
    
        let field = input_fields[i];
    
        field.addEventListener('input', (e) => {
            if(e.target.value !== ''){
                e.target.parentNode.classList.add('animation')
            } else if (e.target.value == ''){
                e.target.parentNode.classList.remove('animation')
            }
        })
    
    }

    // Animation GSAP + scrollMagic

    const navbar = document.querySelector('.nav-gauche');

    const TL1 =gsap.timeline({paused:true})

    TL1
    .to(navbar, {left:'0px', ease: Power3.easeOut, duration : 0.6})
    .from(titre,{y:'-50', opacity : 0 , ease: Power3.easeOut, duration : 0.4})
    .staggerFrom(btn, 1 , {opacity : 0 } , 0.2,'-=0.30')
    .staggerFrom(medias, 1 , {opacity : 0 } , 0.2,'-=0.70')
    .from(btnAccueil, {y:'-50', opacity : 0 , ease: Power3.easeOut, duration : 0.4}, '-=1')


    window.addEventListener('load', () => {
        TL1.play();
    })

    // Animation présentation

    const presentation = document.querySelector('.presentation');
    const titrePres= document.querySelector('.titre-pres');
    const presGauche = document.querySelector('.pres-gauche');
    const listePres = document.querySelectorAll('.item-liste');
    const t1pres = new TimelineMax();

    t1pres
    .from(titrePres, {y:'-200', opacity : 0 , duration : 0.6})
    .from(presGauche, {y:'-20', opacity : 0 , duration : 0.6}, '-=0.5')
    .staggerFrom(listePres, 1 , {opacity : 0 } , 0.2,'-=0.30')

    const controller = new ScrollMagic.Controller();

    const scene = new ScrollMagic.Scene({
        triggerElement: presentation,
        triggerHook: 0.5,
        reverse : false
    })
    .setTween(t1pres)
    .addTo(controller);

    // ANimation portfolio

    const portfolio = document.querySelector('.portfolio');
    const titrePort= document.querySelector('.titre-port');
    const itemPort = document.querySelectorAll('.vague1');
    const t1port = new TimelineMax();

    t1port
    .from(titrePort, {y:'-50', opacity : 0 , duration : 0.5})
    .staggerFrom(itemPort, 1 , {opacity : 0 } , 0.2,'-=0.30')

    const scene2 = new ScrollMagic.Scene({
        triggerElement: portfolio,
        triggerHook: 0.5,
        reverse : false
    })
    .setTween(t1port)
    .addTo(controller);

    const itemPort2 = document.querySelectorAll('.vague2');
    const t2port = new TimelineMax();

    t2port
    .staggerFrom(itemPort2, 1 , {opacity : 0 } , 0.2,'-=0.50')

    const scene3 = new ScrollMagic.Scene({
        triggerElement: itemPort,
        triggerHook: 0.2,
        reverse : false
    })
    .setTween(t2port)
    .addTo(controller);

    // Animation Compétences

    const competence = document.querySelector('.section-range');
    const titreComp= document.querySelector('.titre-comp');
    const allLabels = document.querySelectorAll('.label-skill');
    const allPourcent = document.querySelectorAll('.number-skill');
    const allBarres = document.querySelectorAll('.barre-skill');
    const allShadowBarres = document.querySelectorAll('.barre-grises');
    const t1comp = new TimelineMax();

    t1comp
    .from(titreComp, {opacity : 0 , duration : 0.6})
    .staggerFrom(allLabels, 0.5 , {y:-50 , opacity : 0 } , 0.1,'-=0.5')
    .staggerFrom(allPourcent, 0.5 , {y:-10 ,opacity : 0 } , 0.1,'-=1')
    .staggerFrom(allShadowBarres, 0.5 , {y:-10 ,opacity : 0 } , 0.1,'-=1')
    .staggerFrom(allBarres, 0.5 , {y:-10 ,opacity : 0 } , 0.1,'-=1')
   

    const scene4 = new ScrollMagic.Scene({
        triggerElement: competence,
        reverse : false
    })
    .setTween(t1comp)
    .addTo(controller);


    // Initialisation du service 
    (function(){
        emailjs.init("PCryNYdVHwQVSrWS9"); 
    })();

    // Fonction d'envoi du formulaire via EmailJS
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Empêche le rechargement de la page après la soumission du formulaire

        // Récupère les valeurs des champs du formulaire
        const prenom = document.getElementById("prenom").value;
        const nom = document.getElementById("nom").value;
        const mail = document.getElementById("mail").value;
        const message = document.getElementById("txt").value;

        // Création de l'objet avec les données du formulaire
        const templateParams = {
            prenom: prenom,
            nom: nom,
            mail: mail,
            message: message
        };

        // Envoi de l'email via EmailJS avec ton Service ID et Template ID
        emailjs.send("service_igtq8bj", "template_51hoagh", templateParams)
            .then(function(response) {
                document.getElementById("confirmation-message").style.display = "block";
                document.getElementById("contact-form").reset(); // réinitialise le formulaire
            }, function(error) {
                alert("Erreur lors de l'envoi du message. Veuillez réessayer.");
                console.log("Erreur :", error);
            });
            
    });