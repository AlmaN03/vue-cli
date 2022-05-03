export default {
    methods:{
        onScrolEnd(){
            console.warn('You must override onBodyScroll methods');
        },
        onBodyScroll(event){
            const container = event.target
            if(container.clientHeight+ container.scrollTop >= container.scrollHeight ){
                this.onScrolEnd()
                // this.isRulesReaded = true
            }
        }
    }
}

// Object.assign({}, ...mixin, ...component)