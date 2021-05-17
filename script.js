import isoCountries from './countryCode.js';
window.addEventListener('load', ()=>{
    let name;
    let imgFlag = document.getElementById('countryFlags');
    let button = document.getElementById("mainButton");
    let result = document.getElementById("countryHolder");
    let countryName;    

    input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            button.click();

        }
        });

    button.addEventListener('click',() =>{
        imgFlag.src="favpng_world-globe-earth-question-mark-stock-photography.png";
        result.textContent = "Loading...";
        countryName = undefined;

        name = document.getElementById("input").value;
        if(name ==""){
            result.textContent = "Please enter a name"
            
        }
        else{
            
            // Fetching the api from the side with user's name
            fetch(`https://api.nationalize.io?name=${name}`)
            .then(res =>res.json())
            .then(data => {
                //Logging all the data that side sent
                console.log(data);
    
                //Getting country from the returned object
                if(data.country[0] == undefined){
                    const country = undefined;
                }
                else{
                    const country = data.country[0].country_id;
                    //Changing the Country flag

                    imgFlag.src=`https://www.countryflags.io/${country}/flat/64.png`;
                    // function to convert the ISO code to country name
                    function convertedCountry(code){
                        if(code == undefined){
                            countryName= undefined;
                            return undefined;
                        }
                        else{    
                            return isoCountries[code].name;
                        }
                    }
                     countryName = convertedCountry(country); 
                }
                    if(countryName === undefined){
                        result.innerHTML=`Invalid Name:<br><h6>${name} is not availabe in our data base.</h6>`;
                    }else{
                        console.log(countryName);
                        result.textContent = countryName;
                    }
                
                })
        }
    })

    // Fucntion for toggle faq
    let toogleButton = document.getElementById("faqToggle");
    toogleButton.addEventListener('click', ()=>{

        let app = document.getElementById("mainApp");
        let faq = document.getElementById("faqApp");
        faq.style.display = "flex";
        console.log("somehniti");
        
        let faqDivv = document.querySelector(".faqDiv");
        console.log(faqDivv.style.top)
        if(faqDivv.style.top == "50px"){
            faqDivv.style.top = "1000px";
            app.classList.toggle("none");
            faqDivv.classList.toggle("none")

        }else{
            faqDivv.style.top == "50px"
            app.classList.toggle("none");
            faqDivv.classList.toggle("none")

        }
    });

});

