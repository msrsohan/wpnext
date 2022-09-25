import type { GetStaticProps, NextPage } from "next";
import {getBlogPosts} from '../utils/backendFetching'
import {BlogPosts} from '../utils/exportTypes'

export const getStaticProps : GetStaticProps = async () => {
    const blogPosts = await getBlogPosts()

    return{
        props: {
            blogPosts: blogPosts,
        },
        revalidate: 60
    }

}

const AboutUs: NextPage<{blogPosts: BlogPosts}> = ({blogPosts}) => {
    console.log(blogPosts)
    return (
        <div className="w-54 bg-black">

        </div>
    )
}

export default AboutUs