class lateral_selector {
    constructor(container_id='lateral_selector', default_active_node=1) {
        this.container = document.getElementById(container_id);
        this.default_active_node = default_active_node-1;
        this.selectors_list = [];
    }
    add_selector(text="default", text_horizontal_distance_inactive = 100, text_horizontal_distance_active=100, fontSizeActive=13, fontSizeInactive=13, href) {
        let generic_selector = document.createElement('a');
        generic_selector.href = href;
        
        let text_node = document.createElement('p');
        text_node.innerHTML = text;
        text_node.classList.add('lateral_selector_node_text');
        text_node.style.fontSize = `${fontSizeInactive}px`;
        
        text_node.style.left = `${text_horizontal_distance_inactive}px`;

        generic_selector.appendChild(text_node);
        generic_selector.id = `selector_${this.selectors_list.length}`;
        generic_selector.classList.add('lateral_selector_node');
        generic_selector.classList.add('inactive');
        generic_selector.onclick = ()=>{
            this.update_active_selector(parseInt(generic_selector.id.slice(-1)));
        }
        this.container.appendChild(generic_selector);
        this.selectors_list.push({
            is_active:false,
            node: generic_selector,
            dh_active: text_horizontal_distance_active,
            dh_inactive: text_horizontal_distance_inactive,
            fs_active: fontSizeActive,
            fs_inactive: fontSizeInactive
        });
        console.log(this.selectors_list);

        this.update_active_selector(this.default_active_node);
    }
    update_active_selector(index_selector){
        let text_node;
        for (let i = 0; i < this.selectors_list.length; i++) {
            if(i==index_selector){
                text_node = document.getElementById(`selector_${i}`).children[0];
                text_node.classList.add('active');
                text_node.style.left = `${this.selectors_list[i].dh_active}px`;
                text_node.style.fontSize = `${this.selectors_list[i].fs_active}px`;
                
                this.selectors_list[i].node.classList.remove('inactive');
                this.selectors_list[i].node.classList.add('active');
                this.selectors_list[i].is_active = true;
            }else if(this.selectors_list[i].is_active){
                text_node = document.getElementById(`selector_${i}`).children[0];
                text_node.classList.remove('active');
                text_node.style.fontSize = `${this.selectors_list[i].fs_inactive}px`;
                text_node.style.left = `${this.selectors_list[i].dh_inactive}px`;

                this.selectors_list[i].node.classList.remove('active');
                this.selectors_list[i].node.classList.add('inactive');
                this.selectors_list[i].is_active = false;
            }
        }
    }
}

var init_selectors = () => {
    selector_obj = new lateral_selector();
    selector_obj.add_selector('Intro', -50, 0, 13, 13, '#Home');
    selector_obj.add_selector('Meu trabalho', -100, 0, 10, 13, '#my_work');
    selector_obj.add_selector('Mockups', -80, 0, 10, 13, '#');
    console.log('seletores iniciados');
}