function canTwoMoviesFillFlight(movieLengths, flightLength) {
    let set = new Set();
    // Determine if two movie runtimes add up to the flight length
    for (movie of movieLengths) {
        let hasFilm;
        let otherFilm = flightLength - movie;
        set.has(otherFilm) ? hasFilm = true : set.add(movie);
        if (hasFilm) return true;
    }

    return false;
}