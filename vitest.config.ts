export default {
    test: {
        globals: true,
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
