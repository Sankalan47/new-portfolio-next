import { SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import Blog from "@/components/Blog/Blog";

const Blogs = async () => {
  const data = await getBlogPosts();

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacingX="2em" spacingY="1em">
        {data?.data?.publication?.posts?.edges.map((blog, index) => (
          <Blog key={index} blogData={blog.node} />
        ))}
      </SimpleGrid>
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
