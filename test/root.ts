function importTest(name, path) {
    describe(name, () => {
        require(path);
    })
}

describe('root', () => {
    importTest('firstTest', './firstTest/test');
    // importTest('secondTest', './secondTest/test2');
})