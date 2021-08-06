import {readFileSync,readdirSync,statSync} from 'fs'
import {join} from 'path'

import test from '../data/test-something.json'
const {log} = console

const getAllFiles = function(dirPath, arrayOfFiles) {
  const files = readdirSync(dirPath)

  arrayOfFiles = arrayOfFiles || []

  files.forEach(function(file) {
    if (statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
    } else {
      arrayOfFiles.push(join(dirPath, "/", file))
    }
  })

  return arrayOfFiles
}

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
      raw: test
    }
  }
}
