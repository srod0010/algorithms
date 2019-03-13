function pathFinder(directories, targetFile) {
    for (let key in directories) {

        if (key === targetFile) return `/${targetFile}`;
        let history = key;
        debugger;
        if (pathFinder(directories[key], targetFile)) {
            return history + pathFinder(directories[key], targetFile);
        }
    }

    return null;
}

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

console.log(pathFinder(desktop, 'app_academy_logo.svg')); // => '/images/pets/trixie_lou.jpeg'
console.log(pathFinder(desktop, 'everlong.flac')); // => '/music/genres/rock/everlong.flac'
console.log(pathFinder(desktop, 'honeybadger.png')); // => null