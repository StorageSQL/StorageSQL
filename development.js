/**
 * StorageSQL JavaScript v 0.1.0
 *  Latest update:
 *      @see GitHub https://github.com/StorageSQL
 *      @see npm https://www.npmjs.com/package/storagesql
 *      @license ISC
 *  Date: 2022
 * 
 *  Description:
 *  StorageSQL engine v1.0 for MySQL.
 * @see https://github.com/StorageSQL
 * 
 * The above copyright notice shall be included in all copies or substantial portions of the Software.
 * 
 * Copyright (c) 2022
 *  Description updatedAt 2022 additions for the latest version of the StorageSQL MySQL plugin.
 */
 (function (global, factory) {
    "use strict";

   /* Checking if the module is an object and if the module.exports is an object. If it is, then it is
   checking if the global.document is true. If it is, then it is returning the factory(global,
   true). If it is not, then it is returning a function that checks if the document is not true. If
   it is not, then it is throwing an error. If it is, then it is returning the factory(a). If it is
   not, then it is returning the factory(global). */
    // CommonJS implementation
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = global.document ? factory(global, true):
        function (a) {
            if (!a.document) {
                throw new Error('StorageSQL requires a window with a document');
            }

            return factory(a);
        };

    } else {
        factory(global);
    }

})(typeof window !== "undefined" ? window : this, function(window, noGlobal) {
    "use strict";

    /* Checking if the module is an object and if the module.exports = function is an object. If it is, then it is
    checking if the global.document is true. If it is, then it is returning the factory (global, true). If it is
     not, then it is returning a function that checks if the document is not true. If it is not, then it is throwing an
     error. If it is, then it is returning the factory (global). */
    const STORAGESQL_VERSION = Symbol.for('1.0');
    const STORAGESQL_GLOBAL = Symbol.for('2.0');
    const STORAGESQL_STORAGE = Symbol.for('3.0');
    const STORAGESQL_LOCAL = Symbol.for('4.0');
    const STORAGESQL_STORAGE_LOCAL = Symbol.for('5.0');
    const STORAGESQL_STORAGE_SESSION = Symbol.for('6.0');
    const STORAGESQL_STORAGE_SESSION_LOCAL = Symbol.for('7.0');
    const STORAGESQL_STORAGE_SESSION_SESSION = Symbol.for('8.0');

    /**
     * StorageSQL implementation v1.0 is available setup for use in the following functions.
     * See the GNU General Public License for more details.
     */
    class StorageSQL {
        /**
         * It creates a new object with a bunch of properties, and then returns that object.
         */
        constructor() {
            this[STORAGESQL_VERSION] = '0.1.0';
            this[STORAGESQL_GLOBAL] = global;
            this[STORAGESQL_STORAGE] = {};
            this[STORAGESQL_LOCAL] = {};
            this[STORAGESQL_STORAGE_LOCAL] = {};
            this[STORAGESQL_STORAGE_SESSION] = {};
            this[STORAGESQL_STORAGE_SESSION_LOCAL] = {};
            this[STORAGESQL_STORAGE_SESSION_SESSION] = {};

            return this;
        }

        /**
         * The function returns the version of the StorageSQL library.
         * @returns The version of the database.
         */
        get version() {
            return this[STORAGESQL_VERSION];
        }

        /**
         * The function returns the value of the global variable.
         * @returns The global object.
         */
        get global() {
            return this[STORAGESQL_GLOBAL];
        }

        /**
         * "If the storage object is not defined, then create it and return it, otherwise return the storage
         * object."
         * 
         * The storage object is a private variable that is defined in the constructor.
         * 
         * The storage object is a SQLite database.
         * 
         * The storage object is used to store the data.
         * 
         * The storage object is created when the first call to the storage property is made.
         * 
         * The storage object is created by calling the openDatabase method of the window object.
         * 
         * The openDatabase method takes four parameters:
         * 
         * 1. The name of the database.
         * 2. The version of the database.
         * 3. The description of the database.
         * 4. The size of the database.
         * 
         * The openDatabase method returns a database object.
         * 
         * The database object is assigned to the storage object.
         * 
         * The storage object
         * @returns The storage property is being returned.
         */
        get storage() {
            return this[STORAGESQL_STORAGE];
        }

        /**
         * The function returns the value of the property named "local" of the object that is the value of the
         * "this" keyword.
         * 
         * The "this" keyword is a special keyword in JavaScript that is used to refer to the object that is
         * the context of the current function.
         * 
         * In this case, the context of the function is the object that is the
         * @returns The localStorage object.
         */
        get local() {
            return this[STORAGESQL_LOCAL];
        }

        /**
         * It returns the value of the private property `this[STORAGESQL_STORAGE_LOCAL]`
         * 
         * The value of `this[STORAGESQL_STORAGE_LOCAL]` is set in the constructor.
         * 
         * The value of `this[STORAGESQL_STORAGE_LOCAL]` is set to the value of the `StorageSQL` property of
         * the `window` object.
         * 
         * The value of the `StorageSQL` property of the `window` object is an object that has a `getItem`
         * method and a `setItem` method.
         * 
         * The `getItem` method takes a string as an argument and returns the value of the item with the key
         * that matches the string.
         * 
         * The `setItem` method takes two strings as arguments. The first string is the key and the second
         * string is the value.
         * @returns The value of the property.
         */
        get storageLocal() {
            return this[STORAGESQL_STORAGE_LOCAL];
        }

        /**
         * "If the storageSession property is not defined, then define it as a new instance of the StorageSQL
         * class, passing in the sessionStorage object as the first argument."
         * 
         * The first time the storageSession property is accessed, the function will be executed. The function
         * will only be executed once, because the storageSession property will be defined after the first time
         * the function is executed.
         * 
         * The storageSession property is defined as a new instance of the StorageSQL class, passing in the
         * sessionStorage object as the first argument.
         * 
         * @returns The value of the property.
         */
        get storageSession() {
            return this[STORAGESQL_STORAGE_SESSION];
        }

        /**
         * It returns the value of the private property `STORAGESQL_STORAGE_SESSION_LOCAL` which is a string.
         * @returns The value of the property.
         */
        get storageSessionLocal() {
            return this[STORAGESQL_STORAGE_SESSION_LOCAL];
        }

        /**
         * It returns the value of the private property `STORAGESQL_STORAGE_SESSION_SESSION` of the object
         * `this`.
         * 
         * The `this` object is the object that the function is a method of.
         * @returns The value of the property.
         */
        get storageSessionSession() {
            return this[STORAGESQL_STORAGE_SESSION_SESSION];
        }
        
        /**
         * It returns an object with the same keys as the object passed to it, but with the values of the keys
         * being the values of the keys in the object passed to it.
         * 
         * So, if you pass in an object like this:
         * 
         *     {
         *         a: 1,
         *         b: 2,
         *         c: 3
         *     }
         * 
         * You'll get back an object like this:
         * 
         *     {
         *         a: 1,
         *         b: 2,
         *         c: 3
         *     }
         * 
         * So, what's the point?
         * 
         * Well, the point is that the object passed to the function is the object that the function is a
         * method of.
         * 
         * So, if you call the function like this:
         * 
         *     myObject.factoryDeps
         * 
         * You'll get back
         * @returns The factoryDeps method is returning an object with the following properties:
         */
        get factoryDeps() {
            return {
                [STORAGESQL_VERSION]: this[STORAGESQL_VERSION],
                [STORAGESQL_GLOBAL]: this[STORAGESQL_GLOBAL],
                [STORAGESQL_STORAGE]: this[STORAGESQL_STORAGE],
                [STORAGESQL_LOCAL]: this[STORAGESQL_LOCAL],
                [STORAGESQL_STORAGE_LOCAL]: this[STORAGESQL_STORAGE_LOCAL],
                [STORAGESQL_STORAGE_SESSION]: this[STORAGESQL_STORAGE_SESSION],
                [STORAGESQL_STORAGE_SESSION_LOCAL]: this[STORAGESQL_STORAGE_SESSION_LOCAL],
                [STORAGESQL_STORAGE_SESSION_SESSION]: this[STORAGESQL_STORAGE_SESSION_SESSION]
            }
        }
    }

    class DataBase extends IDBFactory {
        constructor(){
            super();
            this[STORAGESQL_VERSION] = "1.0.0";
            this[STORAGESQL_GLOBAL] = {};
            this[STORAGESQL_STORAGE] = {};
            this[STORAGESQL_LOCAL] = {};
        }

        createShema(options, callback){
            this.schemaName = options.name || "store";

            if(!options.storage){
                options.storage = {};
            }

            /* Checking if the options parameter is a function. If it is, it will throw an error. */
            if(typeof options === "function"){
                new Error('error: options no must be a function');
            }

            /* Checking if the callback is a function. */
            if(typeof callback !== "function"){
                new Error('error: options must be a function');
            }

            if (typeof options === "function"){
                this.openRequest =  IDBFactory.prototype.open(this.schemaName);

                this.openRequest.onupgradeneeded = function (e) {
                    this.db = e.target.result;
                    this.db.createObjectStore(this.schemaName, { keyPath: options.keyPath });
                }

                this.openRequest.onsuccess = function (e) {
                    this.db = e.target.result;
                    callback(null, this.db.transaction(this.schemaName).objectStore(this.schemaName));
                }

                this.openRequest.onerror = function (e) {
                    callback(e);
                }

                this.openRequest.onblocked = function (e) {
                    callback(e);
                }
            }

        }

        open(options, callback){
            if(typeof options === "function"){
                callback = options;
                options = {};
            }
            options = options || {};

            if(!options.name){
                options.name = "store";
            }

            if(!options.storage){
                options.storage = {};
            }

            /* Checking if the options parameter is a function. If it is, it will throw an error
            * @param options
             */
            if(typeof options === "function"){
                new Error('error: options no must be a function');
            }

            /* Checking if the callback is a function. */
            if(typeof callback!== "function"){
                new Error('error: options must be a function');
            }

            if (typeof options === "function"){
                this.openRequest =  IDBFactory.prototype.open(this.schemaName);
                this.openRequest.onupgradeneeded = function (e) {
                    this.db = e.target.result;
                    this.db.createObjectStore(this.schemaName, { keyPath: options.keyPath });
                }

                this.openRequest.onsuccess = function (e) {
                    this.db = e.target.result;
                    callback(null, this.db.transaction(this.schemaName).objectStore(this.schemaName));
                }

                this.openRequest.onerror = function (e) {
                    callback(e);
                }

                this.openRequest.onblocked = function (e) {
                    callback(e);
                }
            }
        }

        clear(callback){
            if(typeof callback !== "function"){
                new Error('error: options must be a function');
            }

            if(this.openRequest){
                this.openRequest.onsuccess = function (e) {
                    this.db = e.target.result;
                    callback(null, this.db.transaction(this.schemaName).objectStore(this.schemaName));
                }

                this.openRequest.onerror = function (e) {
                    callback(e);
                }
            }
        }

        /**
         * It deletes a record from the database.
         * 
         * The function takes two arguments:
         * 
         * * key: The key of the record to delete.
         * * callback: A function to call when the operation is complete.
         * 
         * The callback function takes two arguments:
         * 
         * * err: An error object if an error occurred, otherwise null.
         * * result: The result of the operation.
         * 
         * The function first checks that the callback is a function. If it isn't, it throws an error.
         * 
         * Next, it checks that the database is open. If it is, it calls the callback function with the result
         * of the delete operation.
         * 
         * If the database isn't open, it calls the callback function with an error.
         * @param key - The key of the record you want to delete.
         * @param callback - A function that will be called when the operation is complete.
         */
        delete(key, callback){
            if(typeof callback !== "function"){
                new Error('error: options must be a function');
            }

            if(this.openRequest){
                this.openRequest.onsuccess = function (e) {
                    this.db = e.target.result;
                    callback(null, this.db.transaction(this.schemaName).objectStore(this.schemaName).delete(key));
                }

                this.openRequest.onerror = function (e) {
                    callback(e);
                }
            }
        }

        /**
         * It's a function that takes a key and a callback function as parameters. It then checks if the
         * callback is a function, if it's not, it throws an error. If it is, it then checks if the
         * openRequest is defined, if it is, it then sets the onsuccess and onerror functions of the
         * openRequest.
         * 
         * The onsuccess function then sets the db variable to the result of the openRequest, and then calls
         * the callback function with the result of the get function. The onerror function then calls the
         * callback function with the error.
         * 
         * If the openRequest is not defined, it does nothing.
         * @param key - The key of the record you want to retrieve.
         * @param callback - The callback function that will be called when the operation is complete.
         */
        get(key, callback){
            if(typeof callback !== "function"){
                new Error('error: options must be a function');
            }

            if(this.openRequest){
                this.openRequest.onsuccess = function (e) {
                    this.db = e.target.result;
                    callback(null, this.db.transaction(this.schemaName).objectStore(this.schemaName).get(key));
                }

                this.openRequest.onerror = function (e) {
                    callback(e);
                }
            }
        }

        /**
         * It's a function that takes a callback function as an argument, and if the callback function is a
         * function, it will open a request to the database, and if the request is successful, it will return
         * the result of the getAll() method, and if the request is unsuccessful, it will return an error.
         * @param callback - a function that will be called when the operation is complete.
         */
        getAll(callback){
            if(typeof callback !== "function"){
                new Error('error: options must be a function');
            }

            if(this.openRequest){
                this.openRequest.onsuccess = function (e) {
                    this.db = e.target.result;
                    callback(null, this.db.transaction(this.schemaName).objectStore(this.schemaName).getAll());
                }

                this.openRequest.onerror = function (e) {
                    callback(e);
                }
            }
        }

        /**
         * It takes a data object and a callback function as parameters, and if the callback function is not a
         * function, it throws an error. If the openRequest is successful, it adds the data object to the
         * object store. If the openRequest is not successful, it calls the callback function with an error.
         * @param data - The data you want to store in the database.
         * @param callback - A function that will be called when the operation is complete.
         */
        set(data, callback){
            if(typeof callback !== "function"){
                new Error('error: options must be a function');
            }

            if(this.openRequest){
                this.openRequest.onsuccess = function (e) {
                    this.db = e.target.result;
                    callback(null, this.db.transaction(this.schemaName).objectStore(this.schemaName).add(data));
                }

                this.openRequest.onerror = function (e) {
                    callback(e);
                }
            }
        }
    }

    function getStorage() {
        return window.localStorage;
    }

    function setStorage(storage) {
        window.localStorage = storage;
    }

    /**
     * It returns a string that is the key to use in StorageSQL
     * @param key - The key to store the value under.
     * @returns the string 'StorageSQL.' + key.
     */
    function getStorageKey(key) {
        return 'StorageSQL.' + key;
    }

    /**
     * It takes a key and a value, and then sets the value of the key in StorageSQL.
     * @param key - The key to store the value under.
     * @param value - The value to set the key to.
     */
    function setStorageKey(key, value) {
        window.localStorage.setItem(getStorageKey(key), value);
    }

    /**
     * It removes a key from local storage
     * @param key - The key to store the value under.
     */
    function removeStorageKey(key) {
        window.localStorage.removeItem(getStorageKey(key));
    }

    /**
     * @param key - The key to store the value under.
     * @returns The value of the key in StorageSQL.
     */
    function getStorageValue(key) {
        return window.localStorage.getItem(getStorageKey(key));
    }

    /**
     * It takes a key and a value, and then it sets the value of the key in local storage.
     * @param key - The key to store the value under.
     * @param value - The value to store.
     */
    function setStorageValue(key, value) {
        window.localStorage.setItem(getStorageKey(key), value);
    }

    /**
     * The function takes a key as a parameter, and then removes the value from local storage.
     * @param key - The key to store the value under.
     */
    function removeStorageValue(key) {
        window.localStorage.removeItem(getStorageKey(key));
    }

    /**
     * It returns an array of all the keys in the StorageSQL object.
     * @returns An array of all the keys in the StorageSQL object.
     */
    function getStorageKeys() {
        return Object.keys(window.localStorage);
    }

    /**
     * It takes an array of keys, and for each key, it sets the value of the key in the StorageSQL to the
     * value of the key in the StorageSQL.
     * @param keys - An array of strings that are the keys of the StorageSQL items you want to set.
     */
    function setStorageKeys(keys) {
        keys.forEach(key => {
            setStorageKey(key, window.localStorage[key]);
        });
    }

    /**
     * @param keys - An array of strings that are the keys of the StorageSQL items you want to remove.
     */
    function removeStorageKeys(keys) {
        keys.forEach(key => {
            removeStorageKey(key);
        });
    }

    /**
     * 
     * The function `isStorageKey` takes a parameter `key` and returns the result of the function
     * `getStorageKey` with the parameter `key` not equal to undefined.
     * 
     * The function `getStorageKey` takes a parameter `key` and returns the result of the function
     * `getStorage` with the parameter `key` or the result of the function `getCookie` with the parameter
     * `key`.
     * 
     * The function `getStorage` takes a parameter `key` and returns the result of the function
     * `getLocalStorage` with the parameter `key` or the result of the function `getSessionStorage` with
     * the parameter `key`.
     * 
     * The function `getLocalStorage` takes a parameter `key` and returns the result of the function
     * `getItem
     * @param key - The key to check for.
     * @returns the value of the key in the storage object.
     */
    function isStorageKey(key) {
        return getStorageKey(key)!== undefined;
    }

    /**
     * `isStorageValue` returns `true` if the value passed to it is a key in `StorageSQL` and `false`
     * otherwise
     * @param value - The value to be stored.
     * @returns The value of the key in StorageSQL.
     */
    function isStorageValue(value) {
        return window.localStorage.getItem(getStorageKey(value))!== undefined;
    }

    /**
     * `isStorageKeys` returns `true` if all of the keys in the `keys` array are valid storage keys.
     * @param keys - An array of strings that are the keys of the items to be retrieved.
     * @returns The value of the keys array if `keys === undefined`, `false` otherwise.
     */
    function isStorageKeys(keys) {
        return keys.every(key => isStorageKey(key));
    }

    class Storage {
        /**
         * It returns a reference to the localStorage object if it exists, otherwise it returns a reference to
         * a new object.
         */
        constructor() {
            this.storage = getStorage();
        }

        /**
         * It sets the value of the key in the local storage.
         * @param key - The key to store the value under.
         * @param value - The value to be stored.
         */
        set(key, value) {
            setStorageValue(key, value);
        }

        /**
         * It returns the value of the key passed to it.
         * @param key - The key of the item you want to get.
         * @returns The value of the key.
         */
        get(key) {
            return getStorageValue(key);
        }

        /**
         * It removes the value of the key from the local storage
         * @param key - The key of the item you want to remove.
         */
        remove(key) {
            removeStorageValue(key);
        }

        /**
         * `keys()` returns an array of all the keys in the local storage.
         * @returns The keys() method returns an array of strings that represent all the enumerable properties
         * of the given object.
         */
        keys() {
            return getStorageKeys();
        }

        /**
         * `has` returns `true` if the `key` is a valid storage key, otherwise it returns `false`.
         * @param key - The key to check for.
         * @returns The function isStorageKey is being returned.
         */
        has(key) {
            return isStorageKey(key);
        }

        /**
         * It removes all the keys from the local storage.
         */
        clear() {
            removeStorageKeys();
        }
    }

    {
        /* Creating a new instance of the Storage class and then setting the storage variable to that instance.
        It is then setting the storageKeys variable to the result of the getStorageKeys function. It is then
        removing the storageKeys variable to the result of the getStorageKeys function. */
        const storage = new Storage();
        // setStorage(storage);
        setStorageKeys(getStorageKeys());
        removeStorageKeys(getStorageKeys());

        /* Setting the value of the storage key to the value of the storage. */
        if (isStorageValue(storage.storage)) {
            setStorageValue(getStorageKey(storage.storage), storage.storage);
        }

        /* Checking if the storage is a storage key. If it is, it will set the storage keys and remove the
        storage keys. */
        if (isStorageKeys(storage.storage)) {
            setStorageKeys(getStorageKeys());
            removeStorageKeys(getStorageKeys());
        }

        /* Setting the value of the storage key to the value of the storage. */
        if (isStorageKey(storage.storage)) {
            setStorageValue(getStorageKey(storage.storage), storage.storage);
        }
    }

    /* Checking if the noGlobal is not true. If it is not, then it is setting
    the window.StorageSQL to the StorageSQL. It is also setting the window.Storage to
    the Storage and the window.StorageSQL to the StorageSQL. */
    if(!noGlobal){
        /* Creating a global variable called StorageSQL. */
        window.StorageSQL = StorageSQL;
        window.Storage = Storage;
        window.DataBase = DataBase;

        /* Creating a global variable in the browser. */
        window.STORAGESQL_VERSION = STORAGESQL_VERSION;
        window.STORAGESQL_GLOBAL = STORAGESQL_GLOBAL;
        window.STORAGESQL_STORAGE = STORAGESQL_STORAGE;
        window.STORAGESQL_LOCAL = STORAGESQL_LOCAL;
        window.STORAGESQL_STORAGE_LOCAL = STORAGESQL_STORAGE_LOCAL;
        window.STORAGESQL_STORAGE_SESSION = STORAGESQL_STORAGE_SESSION;
        window.STORAGESQL_STORAGE_SESSION_LOCAL = STORAGESQL_STORAGE_SESSION_LOCAL;
        window.STORAGESQL_STORAGE_SESSION_SESSION =STORAGESQL_STORAGE_SESSION_SESSION;
    }

    /* Exporting the module. */
    module.exports = {
        StorageSQL: StorageSQL,
        Storage: Storage,
        DataBase: DataBase,
        STORAGESQL_VERSION: STORAGESQL_VERSION,
        STORAGESQL_GLOBAL: STORAGESQL_GLOBAL,
        STORAGESQL_STORAGE: STORAGESQL_STORAGE,
        STORAGESQL_LOCAL: STORAGESQL_LOCAL,
        STORAGESQL_STORAGE_LOCAL: STORAGESQL_STORAGE_LOCAL,
        STORAGESQL_STORAGE_SESSION: STORAGESQL_STORAGE_SESSION,
        STORAGESQL_STORAGE_SESSION_LOCAL: STORAGESQL_STORAGE_SESSION_LOCAL,
        STORAGESQL_STORAGE_SESSION_SESSION: STORAGESQL_STORAGE_SESSION_SESSION
    }

    /* Creating a JavaScript object with the following properties: */
    return {
        Storage: Storage,
        StorageSQL: StorageSQL,
        DataBase: DataBase
    }

});