import { mkdirSync, rmdirSync, readdirSync, unlinkSync } from 'fs';
import { convert } from '../src/index';

const fixturesDir = `${__dirname}/data`;
const outDir = `${__dirname}/out`;

before(() => mkdirSync(outDir));

describe('json to', () => {
  const from = `${fixturesDir}/config.json`;

  it('xml', async done => {
    const to = `${outDir}/json.to.xml`;
    await convert(from, to);
    done();
  });

  it('yaml', async done => {
    const to = `${outDir}/json.to.yml`;
    await convert(from, to);
    done();
  });
});

describe('yaml to', () => {
  const from = `${fixturesDir}/config.yml`;
  it('xml', async done => {
    const to = `${outDir}/yaml.to.xml`;
    await convert(from, to);
    done();
  });
  it('json', async done => {
    const to = `${outDir}/yaml.to.json`;
    await convert(from, to);
    done();
  });
});

describe('xml to', () => {
  const from = `${fixturesDir}/config.xml`;
  it('json', async done => {
    const to = `${outDir}/xml.to.json`;
    await convert(from, to);
    done();
  });
  it('yaml', async done => {
    const to = `${outDir}/xml.to.yml`;
    await convert(from, to);
    done();
  });
});

after(() => {
  readdirSync(outDir).forEach(file => unlinkSync(`${outDir}/${file}`));
  rmdirSync(outDir);
});
