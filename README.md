# HOW THE SERVER WORKS

This particular project relies on the Node.js built-in modules for constructing a simple web server. Here, the http module deals with the browser's request, and fs is used for reading the HTML and CSS files.

The server loads all the pages and the CSS file when it is started and hence there is no need for it to read them again each time a request is received.
When a client accesses a URL, the server looks at the route and responds to it with the appropriate HTML page or the CSS file based on its type.

The server includes three main pages a Home page, an About page, and a Contact page. Each page is served based on the URL requested by the user.
If the requested page does not exist, the server displays the error page 404. This project demonstrates the functionality of a simple server that uses no frameworks.
