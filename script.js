fetch('https://api.github.com/users/DimkaVeselov')
  .then(response => response.json())
  .then(json => {

    let avatarUser = document.createElement('img');
    avatarUser.className = 'img';
    avatarUser.src = json.avatar_url;
    document.body.append(avatarUser);

    let nameUser = document.createElement('h2');
    nameUser.className = 'name';
    nameUser.innerHTML = json.name;
    document.body.prepend(nameUser);

    let bioUser = document.createElement('p');
    bioUser.className = 'bio';
    bioUser.innerHTML = json.company;
    document.body.append(bioUser);

    let linkUser = document.createElement('a');
    linkUser.className = 'link';
    linkUser.innerHTML = json.html_url;
    linkUser.href = json.html_url;
    document.body.append(linkUser);

  })

  .catch(function (error) {
    document.body.innerHTML = `УПС =( ${error}`  
  })