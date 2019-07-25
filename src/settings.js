const settings = {
    /** Time is measured in ms */
    fakeLoadingDelay: 1000,
    fakeTodos:[
        {
            id: 1,
            title: 'FAKE första',
            description: 'första description',
            isFinished: true,
        },
        {
            id: 2,
            title: 'FAKE Andra',
            description: 'Den andra beskrivningen',
            isFinished: false,
        }
    ],
    apiURI: "http://localhost:61309"

};

export default settings;