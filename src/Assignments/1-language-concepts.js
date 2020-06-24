const oneLanguageConcepts = function () {
    let testNull = null;
    let testString = 'test string value';
    let testEmptyString = '';
    let testZero = 0;
    let testOne = 1;
    let testStringZero = '0';
    let testStringOne = '1';
    let testUndefined = undefined;

    function proveConcept(description, result) {
        let li = '<li>' + description + ': ' + (result) + '</li>';
        document.getElementById('language-concepts').insertAdjacentHTML('beforeend', li);
    }

    (function showConcepts() {
        const conceptsList = $('#language-concepts');

        proveConcept('Null == String', testNull == testString); //false
        proveConcept('Null == EmptyString', testNull == testEmptyString); //false
        proveConcept('Null == Zero', testNull == testZero); //false
        proveConcept('EmptyString == Zero', testEmptyString == testZero); //true, just javascript things
        proveConcept('EmptyString == One', testEmptyString == testOne); //false
        proveConcept('EmptyString == StringZero', testEmptyString == testStringZero); //false
        proveConcept('Zero == StringZero', testZero == testStringZero); //true
        proveConcept('StringOne == One', testStringOne == testOne); //true
        proveConcept('EmptyString == undefined', testEmptyString == testUndefined); //false
        proveConcept('Null == Undefined', testNull == testUndefined); //true

        let testVariable;
        proveConcept('Testvariable now typeof', typeof (testVariable));

        testVariable = 'hello';
        proveConcept('Testvariable now typeof', typeof (testVariable));

        testVariable = 1;
        proveConcept('Testvariable now typeof', typeof (testVariable));

        testVariable = {
            'key': 'hi!'
        };
        proveConcept('Testvariable now typeof', typeof (testVariable));
    })();
};
