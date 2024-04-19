# how too use the mikuvite

## First off
if you see anything wrong gladly give me an issue and none of the things in this is owned by me so use with caution

this was just made as a fun side project. and because i refuse too use the miku api XD

i will add more and more stuff like Vocaloid lists, fun facts, songs(maybe)

## json file:
# funfact:
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
# vocaloids

"https://leahjkh.github.io/mikuviteInfo/json/mikuVersions.json"
its set up as an array with objects
[
    {
        "name": "",
        "codename":"",
        "introduction":"",
        "Version":"",
        "image":"[currently not implimented fully. VOCALOID has images]"
    }
]
currently it has 16 diffrent vocaloids
all of the original VOCALOID program
currently doing VOCALOID2 

## images:
### current working:
"https://leahjkh.github.io/mikuviteInfo/images/[add the right folder here]/[add the code and index here].webp"

folders:
cosplay(file name c[index])  {
    current objects: {
        c1: 
        c2: 
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
TransP(file name pfp[index]) {
    current objects: {
        tp1:
        tp2:
        tp3:
        tp4:
    }
}
vocaloids(file name pfp[index]) {
    current objects: {
        vo1:Kaito v1
        vo2:kaito v3
        vo3:meiko v1
        vo4:meiko v3
        vo5:Miriam
        vo6:Leon
        vo7:Lola
        vo8:Sweet ANN Standard
        vo9:Sweet ANN taiwanese
        vo10: Hatsune Miku v2
        vo11: Hatsune Miku v3
        vo12: Hatsune Miku v4
    }
}
