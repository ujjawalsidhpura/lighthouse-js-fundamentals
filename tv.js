
let form = document.querySelector('#searchForm');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  let userinput = form.elements.query.value;
  let res =
    await axios.get(`https://api.tvmaze.com/search/shows?q=${userinput}`)
  makeImages(res.data);
  form.elements.query.value = '';
});

let makeImages = (shows) => {
  for (let x of shows) {
    let img = document.createElement('IMG');
    img.src = x.show.image.medium;
    //show.image.medium is coming from API object
    document.body.append(img);
  }
}



