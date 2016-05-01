
  xtag.register('tags-autocomplete', {
  lifecycle: {
    created: function(){
      this.update();
    }
  },
  methods: {
    update: function() {  

        _id = this.id;
        this.source = null;
        this.options = [];

        if(!this.attributes.source) {          

          this.source = [];

          for(i = 0; i < this.children.length; i++) {

               option = {  
                value: this.children[i].attributes.value.value,
                label: this.children[i].attributes.label.value
               };

               this.options.push(option.label);
            }

            this.source = this.options;
        } else {
          this.source = this.attributes.source.value;
        }

        this.innerHTML = nunjucks.render(Tags.path_template_for('autocomplete'), 
        { 
          id: this.id
        });

        $( "#autocomplete_input_" + _id).autocomplete({
            source: this.source
        });      

    }
  }
});