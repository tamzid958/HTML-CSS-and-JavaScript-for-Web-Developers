((window) => {
   
    var goodbyeSpeaker = {};
    
    var message = 'Good Bye';

    goodbyeSpeaker.speak = (name) => {
       console.log(message + ' ' + name);
    };
 
    window.goodbyeSpeaker = goodbyeSpeaker;
 })(window);
 


 ((window) => {

    var helloSpeaker = {};
   
    var message = 'Hello';
    
    helloSpeaker.speak = (name) => {
       console.log(message + ' ' + name);
    };
    
    window.helloSpeaker = helloSpeaker;
 })(window);
 

(() => {
    var names = [
       'Yaakov',
       'John',
       'Jen',
       'Jason',
       'Paul',
       'Frank',
       'Larry',
       'Paula',
       'Laura',
       'Jim',
    ];
 
    
    for (let i = 0; i < names.length; i++) {
       
       var firstLetter = names[i].charAt(0).toUpperCase();
       
       if (firstLetter === 'J') {
          
          goodbyeSpeaker.speak(names[i]);
       } else {
          
          helloSpeaker.speak(names[i]);
       }
    }
 })();