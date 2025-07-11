
let Version = "1.6"

console.log("Version: " + Version)


let Site_Data

function update_topbar(data1) {
  for (let index = 0; index < document.getElementsByClassName("topbar ")[0].children[0].children.length; index++) {
    const card = document.getElementsByClassName("topbar ")[0].children[0].children[index];
    const data = data1["topbar"][index]
    console.log(card)
    card.addEventListener("click", function () {
      window.open(data1.link, '_blank').focus();
    });
    card.children[0].innerHTML = data.button_text
  }
}

function update_util(data1) {
  for (let index = 0; index < document.getElementsByClassName("card").length; index++) {
    const card = document.getElementsByClassName("card")[index];
    const data = data1["util"][index]
    for (const child of card.children) {
      if (child.className == "button_download") {
        child.addEventListener("click", function () {
          window.open(data.link, '_blank').focus();
        });
      }
      if (child.className == "text2") {
        child.innerHTML = data.title
      } 
      if (child.className == "text3") {
        child.innerHTML = data.description
      }
      if (child.className == "Status_Working") {
         child.innerHTML = data.status
      }
    }
  }
}

function update_prox(data1) {
  for (let index = 0; index < document.getElementsByClassName("card").length; index++) {
    const card = document.getElementsByClassName("card")[index];
    const data = data1["prox"][index]
    for (const child of card.children) {
      if (child.className == "button_download") {
        child.addEventListener("click", function () {
          window.open(data.link, '_blank').focus();
        });
      }
      if (child.className == "text2") {
        child.innerHTML = data.title
      } 
      if (child.className == "text3") {
        child.innerHTML = data.description
      }
      if (child.className == "Status_Working") {
         child.innerHTML = data.status
      }
    }
  }
}

function Update_Site(data) {

  update_topbar(data)

  if (document.URL == "https://guinea1980-svg.github.io/ZYME/Utilities/") {
    update_util(data)
  }
  if (document.URL == "https://guinea1980-svg.github.io/ZYME/Proxies/") {
    update_prox(data)
  }

}




async function fetchData(url, callback) { 
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json(); // Assuming the response is JSON
    if (callback && typeof callback === 'function') {
      callback(data); // Run the callback with the fetched data
    }
  } catch (error) {
    console.error('Fetch error:', error);
  }
}


fetchData("https://guinea1980-svg.github.io/ZYME/site_data.json", Update_Site)

function getAllUrlParams(url) {

  // get query string from url (optional) or window
  var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

  // we'll store the parameters here
  var obj = {};

  // if query string exists
  if (queryString) {

    // stuff after # is not part of query string, so get rid of it
    queryString = queryString.split('#')[0];

    // split our query string into its component parts
    var arr = queryString.split('&');

    for (var i = 0; i < arr.length; i++) {
      // separate the keys and the values
      var a = arr[i].split('=');

      // set parameter name and value (use 'true' if empty)
      var paramName = a[0];
      var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];

      // (optional) keep case consistent
      paramName = paramName.toLowerCase();
      if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase();

      // if the paramName ends with square brackets, e.g. colors[] or colors[2]
      if (paramName.match(/\[(\d+)?\]$/)) {

        // create key if it doesn't exist
        var key = paramName.replace(/\[(\d+)?\]/, '');
        if (!obj[key]) obj[key] = [];

        // if it's an indexed array e.g. colors[2]
        if (paramName.match(/\[\d+\]$/)) {
          // get the index value and add the entry at the appropriate position
          var index = /\[(\d+)\]/.exec(paramName)[1];
          obj[key][index] = paramValue;
        } else {
          // otherwise add the value to the end of the array
          obj[key].push(paramValue);
        }
      } else {
        // we're dealing with a string
        if (!obj[paramName]) {
          // if it doesn't exist, create property
          obj[paramName] = paramValue;
        } else if (obj[paramName] && typeof obj[paramName] === 'string') {
          // if property does exist and it's a string, convert it to an array
          obj[paramName] = [obj[paramName]];
          obj[paramName].push(paramValue);
        } else {
          // otherwise add the property
          obj[paramName].push(paramValue);
        }
      }
    }
  }
  return obj;
}



document.onkeypress = function (e) {
  e = e || window.event;
  console.log(e)
  prevkey = e.key
  if (prevkey == "p") {
    if (e.key == "d") {
      window.location.href = "https://guinea1980-svg.github.io/ZYME/ZYME/gggg/guyinsuite.webp"

    }
  }
  prevkey = e.keyCode
};



function Redirect(Link) {
  window.location.href = Link
};

function NewTabLink(url) {

  console.log(url)

  window.open(url, '_blank').focus();
};




