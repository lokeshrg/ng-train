/**
 * Created by abridge on 1/18/2017.
 */
System.config({
    /*app key used here is custom - uit can be abc also
     but the corresponding package and map keys should match*/
    packages: {
        app: {
            main: 'main',
            defaultExtension: "js"
        }
    },
    map:{
        app: "js" /*this is the folder[location] of the packages above*/
    }
});
System.import('app'); /*this is the key used above*/