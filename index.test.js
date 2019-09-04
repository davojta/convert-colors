var { expect } = require('chai')

const convertColor = require('./src/index')


describe('convert-colors', () => {
    describe('from hex to rgb', () => {
        it('#000000 to rbg(0,0,0)', () => {
            const res = convertColor('#000000');

            expect(res).to.equal('rgb(0,0,0)')
        });
    });
});