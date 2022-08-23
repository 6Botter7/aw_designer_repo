export class DesignerRepo extends crsbinding.classes.BindableElement{
    get html() { 
        return import.meta.url.replace(".js", ".html");
        
        this.loadHTML();
    }

    preLoad () {
        this.setProperty ("displayStatus", "grid");
    }

    loadHTML () {
        const status = this.getProperty ("displayStatus");
        const file = `/templates/designer-repo/${this.dataset.repo}-${status}.html`;
    }

       

    // connectedCallback() {
    //     await super.connectedCallback();

    // }

    // disconnectedCallback () {

    //     await super.disconnectedCallback();
    // }
}

customElements.define("designer-repo", DesignerRepo);