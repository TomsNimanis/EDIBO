
        // recepte Omlete izskatasPec Ediena
        //     constructor(configuration){
        //         this.color=configuration;
        //     }
        // var o = new Omlete("green"); 
        // o.color = "green"; 

        class TodayDateComponent extends HTMLElement {
                constructor(){
                        super();
                        setInterval(() => {
                        this.innerText=new Date();
                        }, 1000);
                        }
                }       

        const comp  = customElements.define('today-date', TodayDateComponent);

