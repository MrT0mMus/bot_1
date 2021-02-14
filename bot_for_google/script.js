   let keywords = ["Гобой", "Как звучит флейта", "Кларнет"];
   let keyword = keywords[getRandom(0, keywords.length)];
   let btnK = document.getElementsByName('btnK')[0];

  if(btnK != undefined){
    document.getElementsByName('q')[0].value = keyword;

    document.getElementsByName('btnK')[0].click();
    }else{
    let links = document.links;

    for(let i = 0; i<links.length; i++){
        if(links[i].href.indexOf("https://ru.wikipedia.org/wiki/%D0%93%D0%BE%D0%B1%D0%BE%D0%B9") != -1){
            console.log("Ссылка найдена " + links[i]);
            links[i].click();
            break;
        }
    }
}

function getRandom(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}
