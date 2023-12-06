import axios from "axios";
import Blog from "@/components/Blog/Blog";

const Blogs = async () => {
  const data = await getBlogPosts();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[2em] gap-y-[1em]">
        {data?.data?.publication?.posts?.edges.map((blog, index) => (
          <Blog key={index} blogData={blog.node} />
        ))}
      </div>
    </>
  );
};

export default Blogs;

async function getBlogPosts() {
  const query = `
  query {
    publication(host: "sankalan.hashnode.dev") {
      posts(first: 0) {
        edges {
          node {
            title
            slug
            brief
            coverImage {
              url
            }
          }
        }
      }
    }
  }
  `;
  const response = await axios({
    url: "https://gql.hashnode.com/",
    method: "POST",
    data: {
      query,
    },
  });

  return response.data;
}
