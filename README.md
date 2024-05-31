# how too use the mikuvite

## First off
if you see anything wrong gladly give me an issue and none of the things in this is owned by me so use with caution <br>

### !DISCLAIMER!
all of this is thanks too Miku fans. i am myself a miku fan. thank you for supporting our queen and thanks too all the creators of the images and wikis! <3 <br>

this was just made as a fun side project. and because i refuse too use the miku api XD <br>

i will add more and more stuff like Vocaloid lists, fun facts, songs(maybe) <br>

## json file:
# funfact:
I have since learned of RAW usage so i will convert it but still keep the pages version for people intrested <br>
"https://raw.githubusercontent.com/LeahJKH/MikuApiGithub/main/json/FunFactsMiku.json" <br>
this is the raw link ^ 
<br>
"https://leahjkh.github.io/MikuApiGithub/json/FunFactsMiku.json" <br>
do as you would an api <br>
its an array so remember index <br>
253 objects <br>
251 indexes <br>
<br>
Example in typescript:
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
the raw for this:
"https://github.com/LeahJKH/MikuApiGithub/blob/main/json/mikuVersions.json" 
<br>
<br>
"https://leahjkh.github.io/MikuApiGithub/json/mikuVersions.json" <br>
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
Currently it has 29 diffrent vocaloids <br>
All of the original VOCALOID and VOCALOID 2 <br>
Currently doing VOCALOID3 <br>

## images:
### current working:

"https://leahjkh.github.io/MikuApiGithub/images/(add_the_right_folder_here)/(add_the_code_and_index_here).webp"

folders:
<details>
    <summary>cosplay</summary>

cosplay(file name c[index])  {<br>
    current objects: {<br>
        c1: <br>
        c2: <br>
    }<br>
}
</details>

<details>
    <summary>Full background</summary>
fullBg(file name fb[index]) {<br>
    current objects: {<br>
        fb1:<br>
        fb2:<br>
        fb3:<br>
    }<br>
}
</details>

<details>
    <summary>Profile pictures</summary>
pfp(file name pfp[index]) {<br>
    current objects: {<br>
        pfp1:<br>
        pfp2:<br>
        pfp3:<br>
        pfp4:<br>
        pfp5:<br>
        pfp6:<br>
        pfp7:<br>
        pfp8:<br>
        pfp9:<br>
        pfp10:<br>
        pfp11:<br>
        pfp12:<br>
    }<br>
}
</details>
<details>
    <summary>Transparent Background</summary>
TransP(file name pfp[index]) {<br>
    current objects: {<br>
        tp1:<br>
        tp2:<br>
        tp3:<br>
        tp4:<br>
        tp5:<br>
    }<br>
}
</details>
<details>
    <summary>Vocaloids</summary>
vocaloids(file name pfp[index]) {<br>
    current objects: {<br>
        vo1: Kaito v1<br>
        vo2: kaito v3<br>
        vo3: meiko v1<br>
        vo4: meiko v3<br>
        vo5: Miriam<br>
        vo6: Leon<br>
        vo7: Lola<br>
        vo8: Sweet ANN Standard<br>
        vo9: Sweet ANN Taiwanese<br>
        vo10: Hatsune Miku v2<br>
        vo11: Hatsune Miku v3<br>
        vo12: Hatsune Miku v4<br>
        vo13: Prima Standard<br>
        vo14: Prima Taiwanese<br>
        vo15: kagamine rin act 1<br>
        vo16: kagamine rin act 2<br>
        vo17: kagamine rin append<br>
        vo18: kagamine len act 1<br>
        vo19: kagamine len act 2<br>
        vo20: kagamine len append<br>
        vo21: Camui Gackpo V2<br>
        vo22: SONiKA Standard<br>
        vo23: SONiKA Debute<br>
        vo24: SONiKA Chinese<br>
        vo25: SONiKA Taiwanese<br>
        vo26: SONiKA V4 concept<br>
        vo27: SF-A2 codename miki<br>
        vo28: kaai yuki<br>
        vo29: Hiyama Kiyoteru Default<br>
        vo30: Hiyama Kiyoteru ICE MOUNTAIN <br>
        vo31: BIG AL V2 Default<br>
        vo32: BIG AL V2 Taiwanese<br>
        vo33: BIG AL Debute<br>
        vo34: Tonio V2 Default<br>
        vo35: Tonio V2 Taiwanese<br>
        vo36: lily V2 standard<br>
        vo37: lily V3 standard<br>
        vo38: Ryuto V2 standard<br>
        vo39: Ryuto V3 standard<br>
        vo40: Nekomura Iroha V2 Default<br>
        vo41: Nekomura Iroha V2 Kittyler<br>
        vo42: Nekomura Iroha V4 Natural<br>
        vo43: Nekomura Iroha V4 Soft<br>
        vo44: Utatane Piko V2 Default<br>
    }<br>
}

</details>
