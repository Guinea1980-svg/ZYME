let Version = "1.6"

console.log("Version: " + Version)


let Site_Data

function Update_Site(data) {

  let Util = data.util

  for (let index = 0; index < Util.length - 1; index++) {

    console.log(index)


    console.log(data.util[index + 1])


    let div = document.getElementsByClassName("card")[index]

    console.log(data.util[index + 1].type)

    if (window.location.href == "https://guinea1980-svg.github.io/ZYME/Utilities/") {
      for (let number = 0; number < document.getElementsByClassName("card")[index].children.length; number++) {

        console.log(document.getElementsByClassName("card")[index].children[number])
        if (data.util[index + 1].type == "Link") {

          if (document.getElementsByClassName("card")[index].children[number].className == "button_download") {

            console.log(data.util[index + 1].link)

            document.getElementsByClassName("card")[index].children[number].addEventListener("click", function () {

                window.open(data.util[index + 1].link, '_blank')

              })
            }
        }
        if (document.getElementsByClassName("card")[index].children[number].className == "button_download") {
          console.log(data.util[index + 1].button_text)
          document.getElementsByClassName("card")[index].children[number].innerHTML= data.util[index + 1].button_text
        }
        if (document.getElementsByClassName("card")[index].children[number].className == "text2") {

         console.log(data.util[index + 1].title)

          document.getElementsByClassName("card")[index].children[number].innerHTML= data.util[index + 1].title
        }
        if (document.getElementsByClassName("card")[index].children[number].className == "text3") {

          console.log(data.util[index + 1].description)

          document.getElementsByClassName("card")[index].children[number].innerHTML= data.util[index + 1].description

        }
        if (document.getElementsByClassName("card")[index].children[number].id == "Status") {

          console.log(data.util[index + 1].status)

          document.getElementsByClassName("card")[index].children[number].innerHTML= data.util[index + 1].status

        }
      }
    }
    if (window.location.href == "https://guinea1980-svg.github.io/ZYME/Proxies/") {
      for (let number = 0; number < document.getElementsByClassName("card")[index].children.length; number++) {

        console.log(document.getElementsByClassName("card")[index].children[number])
        if (data.prox[index + 1].type == "Link") {

          if (document.getElementsByClassName("card")[index].children[number].className == "button_download") {

            console.log(data.prox[index + 1].link)

            document.getElementsByClassName("card")[index].children[number].addEventListener("click", function () {

                window.open(data.prox[index + 1].link, '_blank')
                
              })

          }
        }
        if (document.getElementsByClassName("card")[index].children[number].className == "button_download") {
          console.log(data.prox[index + 1].button_text)
          document.getElementsByClassName("card")[index].children[number].innerHTML= data.prox[index + 1].button_text
        }
        if (document.getElementsByClassName("card")[index].children[number].className == "text2") {

         console.log(data.prox[index + 1].title)

          document.getElementsByClassName("card")[index].children[number].innerHTML= data.prox[index + 1].title
        }
        if (document.getElementsByClassName("card")[index].children[number].className == "text3") {

          console.log(data.prox[index + 1].description)

          document.getElementsByClassName("card")[index].children[number].innerHTML= data.prox[index + 1].description

        }
        if (document.getElementsByClassName("card")[index].children[number].id == "Status") {

          console.log(data.prox[index + 1].status)

          document.getElementsByClassName("card")[index].children[number].innerHTML= data.prox[index + 1].status

        }
      }
    }
  }
};

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    Site_Data = data
    console.log(`Data Version: ${data.version}`)
    console.log(`Data: ${Site_Data}`)
    Update_Site(data)
  }

  catch (error) {
    console.error('Fetch error:', error);
  }
}

fetchData("https://guinea1980-svg.github.io/ZYME/site_data.json")

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