const c= document.querySelector('#clock');
setInterval(function(){
    let date = new Date();
    c.innerHTML = date.toLocaleTimeString();
},1000)