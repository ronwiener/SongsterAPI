const baseUrl = "https://www.songsterr.com/a/ra/songs.json?pattern="
let url;

const searchTerm = document.querySelector('.search');
const submitBtn = document.querySelector('.submit');
const section = document.querySelector('section');

submitBtn.addEventListener('click', submitSearch);

function submitSearch(e) {
    e.preventDefault();
    fetchResults(e);

}

function fetchResults(e) {
    //console.log(e);
    url = baseUrl + searchTerm.value;
    //console.log("Url:", url);


fetch(url)
.then(function(result) {
    //console.log(result)
    return result.json();
}) .then(function(json) {
    displayResults(json);
    console.log(json);
});

}

function displayResults(json) { 
    
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }

    for(i=0; i < json.length; i++) {
        let song = json[i].title
        let tabs = json[i].tabTypes
        //console.log (json[i]);
        let para = document.createElement('h2');
        let types = document.createElement('p');
        para.textContent = 'song title: ' + song;
        types.textContent = 'TAB types: '+ tabs;
        section.appendChild(para);
        section.appendChild(types);
        

    }

    if(searchTerm.value === '') {
        alert("Please enter a valid artist name!");
    }
    
   
}

