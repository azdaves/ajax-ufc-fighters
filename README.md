My first attempt at using an AJAX request to obtain the list of US based fighters in the UFC. My goal is to make a project using this or another UFC api in React.

A simple problem I encountered and how I resolved it:
I was getting an error : XMLHttpRequest cannot load http://ufc-data-api.ufc.com/api/v3/iphone/fighters/title_holders. 
No 'Access-Control-Allow-Origin' header is present on the requested resource.

After reading about the issue on stackoverflow I added the below chrome extension:
https://stackoverflow.com/questions/41497674/access-control-allow-origin-issue-when-api-call-made-from-react-isomorphic-ap
CORS is a browser feature. Servers need to opt into CORS to allow browsers to bypass same-origin policy. Your server would not have that same restriction and be able to make requests to any server with a public API. https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS

Use the google Chrome Extension called Allow-Control-Allow-Origin: *. It modifies the CORS headers on the fly in your application.

https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi
