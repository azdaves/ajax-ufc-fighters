document.getElementById('button').addEventListener('click', loadFighters);

// Load Users from GitHub
function loadFighters(){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://ufc-data-api.ufc.com/api/v3/us/fighters', true);

  xhr.onload = function(){
    if(this.status == 200){
      console.log(this.responseText);
      var fighters = JSON.parse(this.responseText);

      var output = '';
      for(var i in fighters){
        output +=
          '<div class="user">' +
          '<img src="'+fighters[i].thumbnail+'" width="70" height="70">' +
          '<ul>' +
          '<li>ID: '+fighters[i].id+'</li>' +
          '<li>FirstName: '+fighters[i].first_name+'</li>' +
          '<li>LastName: '+fighters[i].last_name+'</li>' +
          '</ul>' +
          '</div>';
      }

      document.getElementById('fighters').innerHTML = output;
    }
  }

  xhr.send();
}