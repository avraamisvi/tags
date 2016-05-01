
  xtag.register('tags-accordion', {
  lifecycle: {
    created: function(){
      this.update();
    }
  },
  methods: {
    update: function() {  

        //tags_sections = this.querySelector("tags-accordion-section");
        sections = [];

        for(i = 0; i < this.children.length; i++) {
           
           section = {  
            id: this.id + "_section_" + i, 
            label: this.children[i].attributes.title.value
           };

           sections.push(section);
        }        

        this.innerHTML += nunjucks.render(Tags.path_template_for('accordion'), 
        { 
          sections: sections,
          id: this.id
        });    

        /*for(i = 0; i < sections.length; i++) {
            tag_child =  this.querySelector("#" + filters_options[i].id);
            tag_target = this.querySelector("#alpar_filter_" + filters_options[i].id + "_target_field");
            tag_target.appendChild(tag_child);
        }*/

        //this.outerHTML = this.querySelector("#filters" + this.id).outerHTML;

        //Definindo o controller

      /*  if(!window.Alpar) {
          window.Alpar = {}
        }

        if(!window.Alpar.Filter) {
          window.Alpar.Filter = {
            filters:{},            
          }
        }

        window.Alpar.Filter.filters["" + this.id] = {
          options: filters_options,

          update: function() {

              $('.search-box .filters .search-option').click(function(self){
                return function(e) {
                    
                    self.selectedOption = this;
                    
                    var type = $(this).data('type');
                    
                    $('.search-type-box').hide();
                    $('#'+type).show();

                };
              }(this));

              this.selectFirst();            
          },

          selected: function() {
            return 
          },

          selectOption: function(id) {
            $("#alpar_filter_" + id +"_option").trigger('click');
          },

          selectFirst: function() {
            $('.search-box .filters .search-option').first().trigger('click');
          }
        }

        window.Alpar.Filter.filters["" + this.id].update();        */
    }
  }
});