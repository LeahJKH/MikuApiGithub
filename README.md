# how too use the mikuvite
## json file:
"https://leahjkh.github.io/mikuviteInfo/json/FunFactsMiku.json"
do as you would an api
its an array so remember index
253 objects 
251 indexes

example:
const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        
## images:
### current working:
"https://leahjkh.github.io/mikuviteInfo/images/[add the right folder here].jpg"

folders:
cosplay(file name c[index])  {
    current objects: {
        c1: 
        c2: webp file instead
    }
}
fullBg(file name fb[index]) {
    current objects: {
        fb1:
        fb2:
        fb3:
        fb4:
    }
}
pfp(file name pfp[index]) {
    current objects: {
        pfp1:
    }
}