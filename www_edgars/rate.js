
        // recepte Omlete izskatasPec Ediena
        //     constructor(configuration){
        //         this.color=configuration;
        //     }
        // var o = new Omlete("green"); 
        // o.color = "green"; 

        const fixerURL = 'http://data.fixer.io/api/2013-12-24?access_key=d1750a6120d947dff0e645a63ca7dc06&base=EUR&symbols=USD,GBP,EUR'

        class RateComponent extends HTMLElement {
                constructor(){
                        super();
                        var response
                        
                        fetch(fixerURL)
                                .then(j=>j.json())
                                // .then(text=>{this.innerText = JSON.stringify(text)
                                .then(data=>response=data)
                                .then(data=>this.innerText = ("test THEN: "+response))
                                // .then(data=>console.log("test THEN: "+response))
                        console.log("test OUTER: "+response)
                                        
                
                }
        }
          

        // const comp  = customElements.define('today-date', RateComponent);

