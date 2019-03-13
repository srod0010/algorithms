function fileFinder(directories, targetFile) {
    if (Object.keys(directories).length == 0) return false;
    if (Object.keys(directories).includes(targetFile)) return true;
    let keys = Object.keys(directories);
    for (key of keys) {
        if (key[0] === '/') {
            let found = fileFinder(directories[key], targetFile);
            if (found) return true;
        }
    }

    return false;
}


// function fileFinder1(directories, targetFile) {
//     for (key in directories) {
//         if (key === targetFile || fileFinder1(directories[key], targetFile)) {
//             return true;
//         }
//     }

//     return false;
// }

let desktop = {
    '/images': {
        'app_academy_logo.svg': null,
        '/parks': {
            'yosemite.jpeg': null,
            'acadia.jpeg': null,
            'yellowstone.png': null
        },
        '/pets': {
            'trixie_lou.jpeg': null,
            'rolo.jpeg': null,
            'opal.jpeg': null,
            'diana.jpeg': null,
        }
    },
    '/music': {
        'hey_programmers.mp3': null,
        '/genres': {
            '/rock': {
                'everlong.flac': null,
                'livin_on_a_prayer.mp3': null
            },
            '/hip_hop': {
                'express_yourself.wav': null,
                'ny_state_of_mind.mp3': null
            }
        }
    }
};
console.log(fileFinder1(desktop, 'app_academy_logo.svg')); // => true
console.log(fileFinder1(desktop, 'everlong.flac')); // => true
console.log(fileFinder1(desktop, 'sequoia.jpeg')); // => false