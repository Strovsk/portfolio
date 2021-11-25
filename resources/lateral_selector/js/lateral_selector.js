class lateral_selector {
    constructor(container_id='lateral_selector', default_active_node=1) {
        this.container = document.getElementById(container_id);
        this.default_active_node = default_active_node-1;
        this.selectors_list = [];
    }
    add_selector(text="default"){
        let generic_selector = document.createElement('div');
        generic_selector.innerHTML = text;
        generic_selector.id = `selector_${this.selectors_list.length}`;
        generic_selector.classList.add('lateral_selector_node');
        generic_selector.classList.add('inactive');
        generic_selector.onclick = ()=>{
            this.update_active_selector(parseInt(generic_selector.id.slice(-1)));
        }
        this.container.appendChild(generic_selector);
        this.selectors_list.push({is_active:false, node: generic_selector});
        console.log(this.selectors_list);

        this.update_active_selector(this.default_active_node);
    }
    update_active_selector(index_selector){
        for (let i = 0; i < this.selectors_list.length; i++) {
            if(i==index_selector){
                this.selectors_list[i].node.classList.remove('inactive');
                this.selectors_list[i].node.classList.add('active');
                this.selectors_list[i].is_active = true;
            }else if(this.selectors_list[i].is_active){
                this.selectors_list[i].node.classList.remove('active');
                this.selectors_list[i].node.classList.add('inactive');
                this.selectors_list[i].is_active = false;
            }
        }
    }
}

var init_selectors = ()=> {
    selector_obj = new lateral_selector();
    selector_obj.add_selector('intro');
    selector_obj.add_selector('more');
    selector_obj.add_selector('final');
    console.log('seletores iniciados');
}