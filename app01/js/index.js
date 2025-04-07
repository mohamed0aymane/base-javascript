const path= 'photos/authors/';

function main() {
    let content =`
            <h1>Liste des auteurs</h1>
            <div class="authors-list"> 
    `
    /*
    for( let a of authors){
        content +=`

            <div>
                <img src="${path}${a.photo}" alt="${a.name}"/>
                <div><span>${a.name}</span> (<span>${a.yearBorn}</span>) , (<span>${a.country}</span>)</div>
                <div><span>Oeuvre Principale</span> : <span>${a.technology}</span></div>
            </div>
        `
    }*/
    //arrow function ES-6
   //et quand il n'y a qu'un seul paramètre, on peut omettre les parenthèses authors.map(a=>{})
   //map qui s'applique en entre sur un tableau et qui retourne un autre tableau
   //reduce prend la valeur precendente pv et la valeur courante  cv et les concatène

    content +=authors.map(a=>
        `
            <div>
                <img src="${path}${a.photo}" alt="${a.name}"/>
                <div><span>${a.name}</span> (<span>${a.yearBorn}</span>), <span>${a.country}</span></div>
                <div><span>Oeuvre Principale</span> : <span>${a.technology}</span></div>
            </div>
        `
    ).reduce((pv,cv)=> pv+cv,'');

    content += '</div>';
    document.getElementById('root').innerHTML = content;
}