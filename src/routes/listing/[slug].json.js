const {log} = console

const getFile = name => {
  log('loading', name, new Date())
  return 123
}

export async function get({ params }) {
 const { slug } = params;
  return {
    body: {
      slug: slug,
      raw: getFile(`${slug}.yaml`)
    }
  }
}
