# how too use the mikuvite

## First off
if you see anything wrong gladly give me an issue and none of the things in this is owned by me so use with caution <br>

this was just made as a fun side project. and because i refuse too use the miku api XD <br>

i will add more and more stuff like Vocaloid lists, fun facts, songs(maybe) <br>

## json file:
# funfact:
"https://leahjkh.github.io/mikuviteInfo/json/FunFactsMiku.json" <br>
do as you would an api <br>
its an array so remember index <br>
253 objects <br>
251 indexes <br>
<br>
Example:
```ts
const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
```
# vocaloids
"https://leahjkh.github.io/mikuviteInfo/json/mikuVersions.json" <br>
its set up as an array with objects
```json
[
    {
        "name": "",
        "codename":"",
        "introduction":"",
        "Version":"",
        "image":"[currently not implimented fully. VOCALOID has images, and some VOCALOID2 (refer too list)]"
    }
]
```
Currently it has 21 diffrent vocaloids <br>
All of the original VOCALOID program <br>
Currently doing VOCALOID2 <br>

## images:
### current working:

"https://leahjkh.github.io/mikuviteInfo/images/(add_the_right_folder_here)/(add_the_code_and_index_here).webp"

folders:
```txt
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
        vo1: Kaito v1
        vo2: kaito v3
        vo3: meiko v1
        vo4: meiko v3
        vo5: Miriam
        vo6: Leon
        vo7: Lola
        vo8: Sweet ANN Standard
        vo9: Sweet ANN Taiwanese
        vo10: Hatsune Miku v2
        vo11: Hatsune Miku v3
        vo12: Hatsune Miku v4
        vo13: Prima Standard
        vo14: Prima Taiwanese
        vo15: kagamine rin act 1
        vo16: kagamine rin act 2
        vo17: kagamine rin append
        vo18: kagamine len act 1
        vo19: kagamine len act 2
        vo20: kagamine len append
        vo21: Camui Gackpo V2
        vo22: SONiKA Standard
        vo23: SONiKA Debute
        vo24: SONiKA Chinese
        vo25: SONiKA Taiwanese
        vo26: SONiKA V4 concept
    }
}
```
