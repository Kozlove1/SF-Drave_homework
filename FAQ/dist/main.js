(()=>{const e=document.querySelectorAll(".questions__box-collapsible");for(let t=0;t<e.length;t++)e[t].addEventListener("click",(function(){this.classList.toggle("active");const e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"em"}))})();