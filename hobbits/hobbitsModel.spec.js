const request = require('supertest');

const db = require('../data/dbConfig.js');
const Hobbits = require('./hobbitsModel.js');

describe('hobbits model', () => {
    describe('insert()', () => {
        afterEach(async () => {
            await db('hobbits').truncate();
        })
        

        it('should insert provided hobbits into the db', async () => {
            await Hobbits.insert({ name: 'sam'});
            await Hobbits.insert({ name: 'gaffer'});

            const hobbits = await db('hobbits');
            expect(hobbits).toHaveLength(2);
        });

        it('should insert provided hobbit into the db', async () => {
            let hobbit = await Hobbits.insert({ name: 'gaffer'});
            expect(hobbit.name).toBe('gaffer');

            hobbit = await Hobbits.insert({ name: 'sam'});
            expect(hobbit.name).toBe('sam');
        });
    });
});