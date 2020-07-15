
        // recepte Omlete izskatasPec Ediena
        //     constructor(configuration){
        //         this.color=configuration;
        //     }
        // var o = new Omlete("green"); 
        // o.color = "green"; 

        class TodayDateComponent extends HTMLElement {
                constructor(){
                        super();
                        fetch('link')
                                .then(j=>j.json())
                                .then(text=>{this.innerText = JSON.stringify(text);
                                        
                        // setInterval(() => {
                //        this.innerText=new Date();
                //         }, 1000);
                //         }
                })
        } 
        }      

        const comp  = customElements.define('today-date', TodayDateComponent);

