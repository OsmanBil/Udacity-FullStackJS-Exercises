// Path Module

The path module must be imported via 
// const path = require('path');
. Once imported, there are three commonly used options that you should know.


// path.resolve
Enables you to get the absolute path from a relative path.
console.log(path.resolve('index.js'));


// path.normalize
Normalizes any path by removing instances of . , turning double slashes into single slashes and removing a directory when .. is found.
console.log(path.normalize('./app//src//util/..'));


// path.join
Used to concatenate strings to create a path that works across operating systems. It joins the strings, then normalizes the result.
console.log(path.join('/app', 'src', 'util', '..', '/index.js'));
____________________________________________________________________________________________________________________________________________________________________________________

// File System Module
The File System Module is highly sophisticated and must be imported using the module system's 
// const fs = require('fs');
 File system (fs) allows for reading and writing to files with many options.

____________________________________________________________________________________________________________________________________________________________________________________
Other Core Modules

    HTTP/HTTPS is used to transfer data. Later on, we’ll be using Express, which builds on top of this module, to create our server
    URL is used for parsing and resolving URLs
    TLS/SSL implements security protocols on top of OpenSSL There are more core modules worth checking out in the Node.js documentation

    




