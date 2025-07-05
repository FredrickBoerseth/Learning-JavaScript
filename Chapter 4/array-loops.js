for (let i = 0; i < JOURNAL.length; i++) {
    let entry = JOURNAL[i];
    // do something with entry
}

// easier way to write such loops in modern js
for (let entry of JOURNAL) {
    console.log(`${entry.events.length} events.`);
}

