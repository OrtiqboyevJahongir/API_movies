
 function $(selector){
   return document.querySelector(selector)
 }
 function $$(selector){
    return document.querySelectorAll(selector)
 }

 function createElement (tagName , className , content){
        const div=document.createElement(tagName);
              div.setAttribute("class" , className)
              div.innerHTML=`${content}`
              return div

 }