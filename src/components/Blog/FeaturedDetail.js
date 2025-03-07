'use client'

import { supabase } from '@/src/supabase';
import { blogs } from "@/.velite/generated";
import React, { useEffect, useState } from 'react'
// import BlogLayoutTwo from './BlogLayoutTwo';
// import BlogfeaturedDetail from './BlogLayoutFeaturedDetail';
import Link from 'next/link';

const FeaturedDetail = () => {
    const [featuredPost, setfeaturedPost] = useState([])

    const getTopViewedPosts = async (limit = 5) => {
        try {
            let { data: views, error } = await supabase
                .from('views')
                .select('*')
                .order('count', { ascending: false })
                .limit(limit);

            if (error) {
                throw new Error(error)
            }
            if (!views?.length) return

            const selectedPost = views.map((view) => {
                return view.slug
            })
            const filteredPosts = blogs.filter(post => selectedPost.includes(post.slug))
            setfeaturedPost(filteredPosts)

        } catch (error) {
            console.error("An error occurred while fetching top viewed posts:", error);

        }
    };

    useEffect(() => {
        getTopViewedPosts(10)
    }, [])



    return (

        <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h2 className="text-lg font-bold border-l-4 border-red-500 pl-2 mb-4">
                Bài viết xem nhiều nhất
            </h2>
            <ul className="space-y-4">

                {
                    featuredPost?.length > 0 &&
                    featuredPost?.map((b, index) => (
                        <li key={index} className="flex items-center gap-3 border-b pb-2">
                            <Link href={b?.url} className="block w-20 h-12">
                                <img
                                    src={b?.image?.src}
                                    alt=""
                                    className="w-12 h-12 rounded"
                                />
                            </Link>
                            <Link href={b?.url}>
                                <p className="text-sm">{b?.title}</p>
                            </Link>

                        </li>
                    ))
                }



            </ul>
        </div>
    )
}

export default FeaturedDetail