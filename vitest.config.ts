export default {
    test: {
        globals: true,
        root: './',
        coverage: {
            reporter: [
                'text',
                'json-summary',
                'json',
            ],
            reportOnFailure: true,
        },
    },
};
