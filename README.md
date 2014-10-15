react-grid
==========

THIS IS BETA. API WILL CHANGE.

I am currently in the process of extracting this from a few of my closed source project.



```
["Customer_Code", "theCustomer_Code", "The-Customer_Code", "the_customer-code", "theFBI"].map(uncamel).forEach(function(x){jsprint(x)});


function uncamel(str){
    return str.replace(/([a-z])([A-Z])/g, function(m, a, b){
        return a + " " + b;
    })
    .split(/[^a-zA-Z0-9]/g)
    .map(function(s){
        return s[0].toUpperCase() + s.slice(1);
    })
    .join(" ");
}
```
