export const saveTrip = postObj => {
    return fetch("http://localhost:8088/trips", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postObj)
    })
        .then(response => response.json())
}

export const getTrips = () => {
    return fetch("http://localhost:8088/trips")
    .then(response => response.json())
    .then(apiStates => {
        return apiStates;
    })
}

// ......................................__................................................
// .............................,-~*`¯lllllll`*~,..........................................
// .......................,-~*`lllllllllllllllllllllllllll¯`*-,....................................
// ..................,-~*llllllllllllllllllllllllllllllllllllllllllll*-,..................................
// ...............,-*llllllllllllllllllllllllllllllllllllllllllllllllllllll.\.......................... .......
// .............;*`lllllllllllllllllllllllllll,-~*~-,llllllllllllllllllll\................................
// ..............\lllllllllllllllllllllllllll/.........\;;;;llllllllllll,-`~-,......................... ..
// ...............\lllllllllllllllllllll,-*...........`~-~-,...(.(¯`*,`,..........................
// ................\llllllllllll,-~*.....................)_-\..*`*;..)..........................
// .................\,-*`¯,*`)............,-~*`~................/.....................
// ..................|/.../.../~,......-~*,-~*`;................/.\..................
// ................./.../.../.../..,-,..*~,.`*~*................*...\.................
// ................|.../.../.../.*`...\...........................)....)¯`~,..................
// ................|./.../..../.......)......,.)`*~-,............/....|..)...`~-,.............
// ..............././.../...,*`-,.....`-,...*`....,---......\..../...../..|.........¯```*~-,,,,
// ...............(..........)`*~-,....`*`.,-~*.,-*......|.../..../.../............\........
// ................*-,.......`*-,...`~,..``.,,,-*..........|.,*...,*...|..............\........
// ...................*,.........`-,...)-,..............,-*`...,-*....(`-,............\.......
// ......................f`-,.........`-,/...*-,___,,-~*....,-*......|...`-,..........\........