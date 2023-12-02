import { notFound } from "next/navigation";
import { getPostBySlug } from "@lib/utils";
import Layout  from "@components/Layout";
import { Mdx } from "@components/mdx/MdxComponents";

interface PageProps {
    params: {
        slug: string;
    };
}
export async function Page({ params }: PageProps) {
    console.log("params: ", params);
    const slug = params?.slug;
    console.log("slug : ", slug);
    if (!slug) {
        return notFound();
    }
    const post = await getPostBySlug(slug);
    if(!post){
        return notFound();
    }
    console.log("post : ", post?.body?.code);
    const code: string = post?.body?.code ?? "";
    const { title , date, authors, image } = post;
    console.log("code, title, date, authors, image: ", { code, title, date, authors, image });
    if (!code) {
        return notFound();
    }
    return (
        <Layout>
            <Mdx code={code} title={title} imageSrc={image} date={date} authors={authors} />
        </Layout>
    );
};





export default Page;

