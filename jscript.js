$(document).ready(function(){
     $('#btn1').click(function() {
         
        var text;
        var textLen;
//        'Зашифрованный вариант
        var result="";

         text =$('#InputText').val();
        
        textLen = text.length;
       var key="";

//        'генерируем ключ
        for (var i = 0; i<textLen; i++)
        {
            key += String.fromCharCode(Math.floor(Math.random() * (255 - 0 + 1)) + 0);
        }
        $('#OutputKey').val(key); 

//        'шифруем сообщение
        for ( var i = 0; i<textLen; i++) {
            result += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i));
        }
         
        $('#OutputText').val(result);
     });   
    
    
     $('#btn2').click(function() {
        var result="";
        var text;
        var key="";
        text =$('#InputText2').val();
       
        key = $('#InputKey').val();

        for(var i = 0; i< text.length; i++)
        {
            result += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i));
        }
           
        $('#OutputText2').val(result);
    }); 
});