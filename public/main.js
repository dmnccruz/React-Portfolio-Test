// const logo = document.querySelectorAll("#circleSvg path");

// for (let i=0; i < logo.length; i++) {
//     console.log(`letter ${i} is ${logo[i].getTotalLength()}`);
// }

setTimeout(function(){ 
    options = {
        "cursorOuter": "circle-basic",
        "hoverEffect": "pointer-overlay",
        "hoverItemMove": this,
        "defaultCursor": false,
        "outerWidth": 10,
        "outerHeight": 10
    }
    magicMouse(options);
}, 100);


document.addEventListener('DOMContentLoaded', () => {

    let controller = new ScrollMagic.Controller();
    let timeline = new TimelineMax();
    timeline

    .to('#swipeColor2', 10, {
        height: '0%'
    })

    .to(['#letters'], 50, {
        transform: "scale(200)", ease: Power3.easeInOut
    })

    .from('#faceContainer', 10, {
        display: 'none'
    })

    .from('#shapesContainer', 10, {
        display: 'none'
    })

    .from('#helloIamDmbc', 50, {
        display: 'none'
    })

    .from(['#archiInfo', '#arrowsSvgContainer1'], 50, {
        display: 'none'
    })

    .to('#wrapper', 10, {
        display: 'none'
    })
    
    .from(['#webDevInfo', '#arrowsSvgContainer2'], 50, {
        display: 'none'
    })

    .from('#secondSectionDashContainer', 10, {
        display: 'none'
    })

    .to(['#secondSectionContainer', '#lightSvg', '#lightRaySvg'], 10, {
        display: 'none'
    })

    .to('#startButton', 10, {
        display: 'flex'
    })

    // .to('#bulbContainer', 10, {
    //     opacity: '1'
    // })

    // .from('#bulbContainer2', 10, {
    //     display: 'none',
    // })

    let scene = new ScrollMagic.Scene({
        triggerElement: '#firstSection',
        duration: '200%',
        triggerHook: 0,
        offset: '0'
    })
    .setTween(timeline)
    .setPin('#firstSection')
    .addTo(controller);

// // SECOND SECTION-------------------------------------------------------------------------

//     let controller2 = new ScrollMagic.Controller();
//     let timeline2 = new TimelineMax();
//     timeline2

//     .from('#thirdSectionDashContainer', 10, {
//         display: 'none'
//     })

//     .from('#thirdSection', 10, {
//         display: 'none'
//     })

//     let scene2 = new ScrollMagic.Scene({
//         triggerElement: '#secondSection',
//         duration: '25%',
//         triggerHook: 0,
//         offset: '0'
//     })
//     .setTween(timeline2)
//     .setPin('#secondSection')
//     .addTo(controller2);
})



setTimeout(function(){ 

    const previousButton = document.getElementById('previousButton');
    const nextButton = document.getElementById('nextButton');
    const projects = document.getElementsByClassName('project');
    const projectTotal = document.getElementById('projectTotal');
    const projectNumber = document.getElementById('projectNumber');

    function projectsInitialize() {
        previousButton.style.display = 'none'

        for (i = 0; i < projects.length; i++) {
            if(i === 0) {
                projects[i].style.display = 'flex'
            }
            else {
                projects[i].style.display = 'none'
            }
        }

        projectTotal.textContent = projects.length
    }

    projectsInitialize()

    nextButton.addEventListener("click", function(){
        for (i = 0; i < projects.length; i++) {
            if(projects[i].style.display === 'flex') {
                projects[i].style.display = 'none'
                projects[i + 1].style.display = 'flex'

                if(projects[0].style.display === 'none') {
                    previousButton.style.display = 'flex'
                }

                if(projects[projects.length - 1].style.display === 'flex') {
                    nextButton.style.display = 'none'
                }

                projectNumber.textContent = i + 2

                break;
            }
        }
    })

    previousButton.addEventListener("click", function(){
        for (i = 0; i < projects.length; i++) {
            if(projects[i].style.display === 'flex') {
                projects[i].style.display = 'none'
                projects[i - 1].style.display = 'flex'

                if(projects[0].style.display === 'flex') {
                    previousButton.style.display = 'none'
                }

                if(projects[projects.length - 1].style.display === 'none') {
                    nextButton.style.display = 'flex'
                }

                projectNumber.textContent = i
                
                break;
            }
        }
    })

    const secondSectionContainer = document.getElementById('secondSectionContainer');
    const bulbContainer = document.getElementById('bulbContainer');
    const startButton = document.getElementById('startButton');
    const lightRaySvg = document.getElementById('lightRaySvg');
    const lightSvg = document.getElementById('lightSvg');
    
    secondSectionContainer.style.display = 'none';
    
    startButton.addEventListener("click", function(){
        lightRaySvg.style.display = 'flex';
        lightSvg.style.display = 'flex';
        startButton.style.display = 'none';
    
        setTimeout(function(){ 
            secondSectionContainer.style.display = 'flex';
            bulbContainer.style.opacity = '.5';
        }, 1500);
    })





// THIRD SECTION-------------------------------------------------------------------------

const certificatesWrapper = document.getElementById('certificatesWrapper')
const previousCert = document.getElementById('previousCert')
const nextCert = document.getElementById('nextCert')
const cert = document.getElementsByClassName('cert')

cert[0].style.display = 'flex'

if(cert.length > 1) {
    nextCert.style.display = 'flex'
}

previousCert.addEventListener("click", function() {
    var i;
    nextCert.style.display = 'flex'    

    for (i = 0; i < cert.length; i++) {
        if(cert[i].style.display === 'flex') {
            cert[i].style.display = 'none'
            cert[i - 1].style.display = 'flex'

            break
        }
    }

    if(cert[0].style.display === 'flex') {
        previousCert.style.display = 'none'       
    }
})

nextCert.addEventListener("click", function() {
    var i;
    previousCert.style.display = 'flex'       

    for (i = 0; i < cert.length; i++) {
        if(cert[i].style.display === 'flex') {
            cert[i].style.display = 'none'
            cert[i + 1].style.display = 'flex'

            break
        }
    }

    if(cert[cert.length - 1].style.display === 'flex') {
        nextCert.style.display = 'none'       

    }
})

document.getElementById('showResume').addEventListener("click", function(){
    resumeWrapper.style.display = 'flex'
})

document.getElementById('closeResume').addEventListener("click", function(){
    resumeWrapper.style.display = 'none'
})

document.getElementById('showCerts').addEventListener("click", function(){
    certificatesWrapper.style.display = 'flex'
})

document.getElementById('closeCerts').addEventListener("click", function(){
    certificatesWrapper.style.display = 'none'
})

const resume1 = document.getElementById('resume1')
const resume2 = document.getElementById('resume2')
const toggleResumeButton = document.getElementById('toggleResume')
const downloadPdfWhite = document.getElementById('downloadPdfWhite')
const downloadPdfBlack = document.getElementById('downloadPdfBlack')
resume1.style.display = 'flex'

toggleResumeButton.addEventListener("click", function(){
    if(resume1.style.display === 'flex') {
        resume1.style.display = 'none'
        resume2.style.display = 'flex'
        downloadPdfWhite.style.display = 'flex'
        downloadPdfBlack.style.display = 'none'
        toggleResumeButton.classList.remove('fa-rotate-180')
    }

    else {
        resume1.style.display = 'flex'
        resume2.style.display = 'none'
        downloadPdfWhite.style.display = 'none'
        downloadPdfBlack.style.display = 'flex'
        toggleResumeButton.classList.add('fa-rotate-180')
    }})

const mailSvgContainerClosedContainer = document.getElementById('mailSvgContainerClosedContainer')
const mailSvgContainerOpenedContainer = document.getElementById('mailSvgContainerOpenedContainer')
const stampSvgContainer = document.getElementById('stampSvgContainer')
const formContainer = document.getElementById('formContainer')
const formContainer2 = document.getElementById('formContainer2')
const nameInput = document.getElementById('nameInput')
const emailInput = document.getElementById('emailInput')
const messageInput = document.getElementById('messageInput')
const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

mailSvgContainerClosedContainer.style.display = 'none';
formContainer2.style.display = 'none';
stampSvgContainer.style.display = 'none';
// console.log('test')

formContainer.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('nameInput')
    const emailInput = document.getElementById('emailInput')
    const messageInput = document.getElementById('messageInput')

    if(nameInput.value !== "" && emailInput.value.match(emailRegex) && messageInput.value !== "") {


        const formData = new FormData(formContainer);

        fetch(formContainer.getAttribute('action'), {
            method: 'POST',
            headers: {
                'Accept': 'application/x-www-form-urlencoded;charset=UTF-8',
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: new URLSearchParams(formData).toString()
            })
            .then(res => {
                console.log('nice');
                    nameInput.value = "";
                    emailInput.value = "";
                    messageInput.value = "";
            })
            .catch(function (error) {
                console.log(error);
        });
    
        formContainer.style.display = 'none';
        formContainer2.style.display = 'flex';
        stampSvgContainer.style.display = 'flex';
    
        mailSvgContainerClosedContainer.style.display = 'flex';
        mailSvgContainerOpenedContainer.style.display = 'none';
    
        setTimeout(function(){ 
            mailSvgContainerClosedContainer.style.display = 'none';
            mailSvgContainerOpenedContainer.style.display = 'flex';
            stampSvgContainer.style.display = 'none';
            formContainer2.style.display = 'none';
            formContainer.style.display = 'flex';
        }, 4000);
    }

    else {

        if(nameInput.value === "") {
            nameInput.classList.add("formInputRed");
            nameInput.setAttribute('placeholder', "may I know your name?");

            setTimeout( function(){ 
                nameInput.classList.remove("formInputRed");
                nameInput.setAttribute('placeholder', `who's this?`);
            }, 2800);
        }

        if(emailInput.value === "") {
            emailInput.classList.add("formInputRed");
            emailInput.setAttribute('placeholder', "what's your email?");

            setTimeout( function(){ 
                emailInput.classList.remove("formInputRed");
                emailInput.setAttribute('placeholder', 'where can I contact you?');
            }, 2900);
        }

        if(!emailInput.value.match(emailRegex) && emailInput.value !== "") {
            emailInput.classList.add("formInputRed");
            var currentValue = emailInput.value;
            emailInput.value = "";
            emailInput.setAttribute('placeholder', 'email invalid.');

            setTimeout( function(){ 
                emailInput.value = currentValue;

                emailInput.classList.remove("formInputRed");
                emailInput.setAttribute('placeholder', 'where can I contact you?');
            }, 3100);
        }

        if(messageInput.value === "") {
            messageInput.classList.add("formInputRed");
            messageInput.setAttribute('placeholder', "what's on your mind?");

            setTimeout( function(){ 
                messageInput.classList.remove("formInputRed");
                messageInput.setAttribute('placeholder', "what can I do for you?");
            }, 3000);
        }
    }
});

}, 2000);

const body = document.getElementById('body')

setTimeout( function(){ 
    body.style.overflowY = "scroll";
}, 3500);

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}




