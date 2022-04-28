// import { expect, server, BASE_URL } from './setup.js';

import supertest from 'supertest';
import chai from 'chai';
import sinonChai from 'sinon-chai';
import app from '../src/app.js';

chai.use(sinonChai);

export const expert  = chai;
export const server = supertest.agent(app);
export const BASE_URL = '/v1';



describe('Index page test', () => {
  it('gets base url', done => {
    server
      .get(`${BASE_URL}/`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal(
          'Environment variable is coming across.'
        );
        done();
      });
  });
});
