export async function get({ params }) {
 const { slug } = params;
  return {
    body: {
      slug: slug
    }
  }
}
