import Head from 'next/head';
import Image from 'next/image';
import client from '../utils/apollo-client';
import GQL_GET_LATEST_TEN_BLOGS from '../utils/gql-queries/getLatestTenBlogs';

const Home = ({ blogs }) => (
    <div className="">
        <Head>
            <title>JPBoom</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="robots" content="noindex" />
        </Head>
        <main className="flex flex-col items-center">
            {blogs.map((blog) => (
                <article key={blog.sys.id} className="max-w-prose py-8">
                    <h2 className="text-xl font-bold pb-4">{blog.title}</h2>
                    <p className="text-base">{blog.shortDescription}</p>
                </article>
            ))}
        </main>
    </div>
);

export default Home;

export async function getStaticProps(context) {
    const { data } = await client.query({
        query: GQL_GET_LATEST_TEN_BLOGS,
    });
    console.log('data.blogCollection.items = ', data.blogCollection.items);
    return {
        props: {
            blogs: data.blogCollection.items,
        },
    };
}
