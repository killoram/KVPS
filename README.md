# KVPS
A robust Key and Value Pair System.
KVPS works very much like the localStorage and sessionStorage only KVPS data will only last as long as any normal variable, and KVPS provides more features than simply setting, getting, removing and clearing.

```js
var dataSystem = new KVP_system();

//set adds/overwrites a key value pair
dataSystem.set("testKey", "Test value");

//get returns the value of a key
dataSystem.get("testKey");

//remove deletes a key value pair
dataSystem.remove("testKey");

//has returns true or false for weather or not a key exists
dataSystem.has("testKey");

//clear deletes all key value pairs
dataSystem.clear();

//length returns the number of stored key value pairs
dataSystem.Length();

//all returns all key value pairs as an object of properties (as keys) and property values (as values)
dataSystem.all();
//NOTE that this function will not exist if you define the KVPS as protected (e.g. new KVP_system(true) )


```
