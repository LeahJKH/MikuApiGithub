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
vocaloids(file name pfp[index]) {
    current objects: {
        vo1:Kaito v1
        vo2:kaito v3
        vo3:meiko v1
        vo4:meiko v3
    }
}

## Vocaloids
"https://leahjkh.github.io/mikuviteInfo/json/mikuVersions.json"
its set up as an array with objects
[
    {
        "name": "",
        "codename":"",
        "introduction":"",
        "Version":"",
        "image":"[currently not implimented]"
    }
]