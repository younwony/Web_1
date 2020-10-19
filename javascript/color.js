
var body = {
    setColor : function(color){
      $('body').css('color', color);
      // document.querySelector('body').style.color = color;
    },
    setBackgroudColor : function(color){
      $('body').css('backgroundColor', color);
      // document.querySelector('body').style.backgroundColor = color;
    }
  }
  
  var links = {
    setColor : function(color){
      // var aTagList = document.querySelectorAll('a');
      // for(var i = 0; i < aTagList.length; i++){
      //     aTagList[i].style.color = color;
      //   }
      $('a').css('color', color);
    }
  }
  
  function nightButtonHandler(self){    
      var aTagColor = '';
      if(self.value === 'night'){
        body.setBackgroudColor('black');
        body.setColor('white');
        self.value = 'day';
        links.setColor('powderblue');
      }else{      
        body.setBackgroudColor('white');
        body.setColor('black');
        self.value = 'night'
        links.setColor('blue');
      }  
  }   