import AboutHomeFour from "@/components/about/AboutHomeFour";
import BlogDetails from "@/components/details/BlogDetails";
import blog_data from "@/data/blog_data";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import { notFound } from "next/navigation";

type PageProps = {
  params: {
    slug: string;
  };
};

const BlogDetailsPage = ({ params }: PageProps) => {
  const blog = blog_data.find((item) => item.slug === params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BlogDetails
              content={{
                title: blog.title,
                info: [
                  { title: "Posted By", des: blog.author },
                  { title: "Published Date", des: blog.published },
                  { title: "Viewes", des: blog.readTime },
                ],
                title_2: blog.title2,
                des_1: blog.des1,
                features: blog.features,
                des_2: blog.des2,
                qute: blog.quote,
                writer: blog.writer,
                des_3: blog.des3,
                bannerImg: blog.bannerImg,
                detailImgs: blog.detailImgs,
              }}
            />
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default BlogDetailsPage;
