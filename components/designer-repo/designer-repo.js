export class DesignerRepo extends crsbinding.classes.BindableElement{
    get html() { 
        return import.meta.url.replace(".js", ".html");
    }

    preLoad () {
        this.setProperty ("displayStatus", "grid");
    }


    async connectedCallback() {
        await super.connectedCallback();
        this.loadHTML();
        this.display = this.querySelector("#display");


        this.listHandler = this.displayList.bind(this);
        this.addEventListener("click", this.listHandler);

        this.gridHandler = this.displayGrid.bind(this);
        this.addEventListener("click", this.gridHandler);

    }

    async disconnectedCallback () {
        this.removeEventListener("click", this.listHandler);
        this.listHandler = null;

        this.removeEventListener("click", this.gridHandler);
        this.gridHandler = null;
        await super.disconnectedCallback();
    }

    async loadHTML () {
        let status = this.getProperty("displayStatus");
        let gridFile = `/templates/designer-repo/${this.dataset.repo}-${status}.html`;

        let var1 = await fetch(gridFile).then(result => result.text());
        // console.log(var1);
        console.log(gridFile);
        // this.querySelector("#display").innerHTML = gridFile;

        this.display.innerHTML = await fetch(gridFile).then(result => result.text());
        // this.querySelector("#display").innerHtml = var1;
        // this.display.innerHtml = this.setProperty("display" , var1)
        // this.display.textContent = "hello world";

        
        
        // 1. use fetch api to fetch the html
        // 2. append the html to the ul
    }

    async displayList (event) {
        console.log(event.target)
    
        console.log("on point LIST")
        this.display.innerHTML = '';

        this.setProperty ("displayStatus", "list");

        
        let status = this.getProperty("displayStatus");
        let listFile = `/templates/designer-repo/${this.dataset.repo}-${status}.html`;

        // let var2 = await fetch(listFile).then(result => result.text());

        this.display.innerHTML = await fetch(listFile).then(result => result.text());

    }
    // =============================================================================

        // if(event.target.matches = this.querySelector("#listBtn"){
        //     console.log("on point LIST")

        //     this.setProperty ("displayStatus", "list");

        //     this.display.innerHTML = '';


        //     let status = this.getProperty("displayStatus");
        //     let listFile = `/templates/designer-repo/${this.dataset.repo}-${status}.html`;

        //     let var2 = await fetch(listFile).then(result => result.text());

        //     this.display.innerHTML = await fetch(listFile).then(result => result.text());

        // }


        // if(event.target.matches = this.querySelector("#gridBtn")){
        //     this.display.innerHTML = '';
        //     console.log("on point")

        //     this.setProperty ("displayStatus", "grid");

            


        //     let status = this.getProperty("displayStatus");
        //     let gridFile = `/templates/designer-repo/${this.dataset.repo}-${status}.html`;

        //     const var1 = await fetch(gridFile).then(result => result.text());

        //     this.display.innerHTML = await fetch(gridFile).then(result => result.text());

        // }

    // }

    async displayGrid(event) {
        console.log(event.target)
        console.log("on point Grid");
        
        this.setProperty ("displayStatus", "grid");
        this.display.innerHTML = '';

        
        let status = this.getProperty("displayStatus");
        let gridFile = `/templates/designer-repo/${this.dataset.repo}-${status}.html`;

        // let var1 = await fetch(gridFile).then(result => result.text());

        this.display.innerHTML = await fetch(gridFile).then(result => result.text());
        // ================================================================================
    
            
        // if(this.querySelector("#gridBtn")){
        //     this.display.innerHTML = '';
            
        //     console.log("on point Grid");

        //     this.setProperty ("displayStatus", "grid");
            

            


        //     let status = this.getProperty("displayStatus");
        //     let gridFile = `/templates/designer-repo/${this.dataset.repo}-${status}.html`;

        //     let var1 = await fetch(gridFile).then(result => result.text());

        //     this.display.innerHTML = await fetch(gridFile).then(result => result.text());

        // }
        
    
    }
}
customElements.define("designer-repo", DesignerRepo);
