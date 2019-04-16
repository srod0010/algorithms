function mergeRanges(meetings) {
    let sortedMeetings = meetings.sort((a, b) => a.startTime - b.startTime);
    let merged = [sortedMeetings[0]];

    for (let i = 1; i < sortedMeetings.length; i++) {
        let lastMerged = merged[merged.length - 1];
        let currentMeeting = sortedMeetings[i];

        if (currentMeeting.startTime <= lastMerged.endTime) {
            merged[merged.length - 1].endTime = currentMeeting.endTime > lastMerged.endTime ? currentMeeting.endTime : lastMerged.endTime;

        } else {
            merged.push(currentMeeting);
        }

    }
    return merged;
}