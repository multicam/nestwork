import {readFileSync,readdirSync} from 'fs'
import {join} from 'path'

const {log} = console


const getFile = name => {
  log('loading', name, new Date())
  return readFileSync(join('./src/data', name),'utf8')
}

export async function get({ params }) {
 const { slug } = params;
  return {
    body: {
      slug: slug,
      // raw: getFile(`${slug}.json`)
      // raw: getFile(`test-something.json`)
      raw: readdirSync('.')
    }
  }
}
