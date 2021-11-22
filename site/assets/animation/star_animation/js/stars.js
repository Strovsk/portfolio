var starc;

window.onload = ()=>{
    starc = new Constelation(
        quantity=40,
        size={
            max: 15,
            min: 8
        },
        viewbox={
            width: 400,
            height: 200,
            ox: 100,
            oy: 40,
        },
        container_id="animation_star",
        use_container_metrics_width = false,
        use_container_metrics_height = false,
        opacity_status = true
    )
    starc.gen();
}

class Star{
    constructor(size, position, opacity_status=false, delay={min:1, max:15}, duration={min:3, max:7}){
        this.master_container = document.createElement("div");
        this.master_container.classList.add("star_config");
        this.master_container.style.left = `${position.x}px`;
        this.master_container.style.top = `${position.y}px`;
        this.master_container.style.height = `${size.h}px`;
        this.master_container.style.width = `${size.w}px`;
        this.master_container.style.animationDelay = `${Math.floor(delay.min + ((delay.max-delay.min)*Math.random()))}s`;
        this.master_container.style.animationDuration = `${Math.floor(duration.min + ((duration.max-duration.min)*Math.random()))}s`;
        if(opacity_status){
            this.master_container.style.opacity = `${.1+(.5*Math.random())}`;
        }
    }
    get_star(){
        return this.master_container;
    }
}

class Constelation{
    constructor(quantity=40, size={max:75, min:20}, viewbox={width:400, height:400, ox:0, oy:0}, container_id, use_container_metrics_width=true, use_container_metrics_height=true, opacity_status=false, growth_scale=.4){
        this.container = document.getElementById(container_id);
        this.quantity = quantity;
        this.default_size = size;
        this.viewbox = viewbox;
        this.opacity_status = opacity_status;
        this.container_metrics = this.container.getBoundingClientRect();
        if(use_container_metrics_width) this.viewbox.width = this.container_metrics.width;
        if(use_container_metrics_height) this.viewbox.height = this.container_metrics.height;

        this.fast_velocity = false;
        this.growth_scale = growth_scale;
    }
    gen(){
        let size_buffer;
        let position_buffer;
        for(let i=0; i<this.quantity; i++){
            size_buffer = Math.floor(this.default_size.min + 1 + (this.default_size.max - this.default_size.min) * Math.random());
            position_buffer = {
                x: this.viewbox.ox + ((this.viewbox.width - this.viewbox.ox) * Math.random()),
                y: this.viewbox.oy + ((this.viewbox.height - this.viewbox.oy) * Math.random()),
            }
            let newborn_star = new Star({w: size_buffer, h:size_buffer}, {x:position_buffer.x, y:position_buffer.y}, this.opacity_status);
            // this.stars_list.push(newborn_star);
            this.container.appendChild(newborn_star.get_star());
        }
    }
    alternate_velocity(){
        let stars = this.container.childNodes;
        if(!this.fast_velocity){
            this.fast_velocity=true;
            for(let item=0; item<this.quantity; item++){
                let style_animation_duration = getComputedStyle(stars[item]);
                stars[item].style.animationDuration = `${parseFloat(style_animation_duration.animationDuration.slice(0, -1))*(this.growth_scale)}s`;
                stars[item].style.width = `${parseFloat(style_animation_duration.width.slice(0, -2))/(this.growth_scale)}px`;
                stars[item].style.height = `${parseFloat(style_animation_duration.height.slice(0, -2))/(this.growth_scale)}px`;
            }
        }else{
            this.fast_velocity=false;
            for(let item=0; item<this.quantity; item++){
                let style_animation_duration = getComputedStyle(stars[item]);
                stars[item].style.animationDuration = `${parseFloat(style_animation_duration.animationDuration.slice(0, -1))/(this.growth_scale)}s`;
                stars[item].style.width = `${parseFloat(style_animation_duration.width.slice(0, -2))*(this.growth_scale)}px`;
                stars[item].style.height = `${parseFloat(style_animation_duration.height.slice(0, -2))*(this.growth_scale)}px`;
            }
        }
    }
    get_container(){
        return this.container;
    }
}