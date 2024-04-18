import React from 'react'
import { useState } from 'react'

import Thumbnail1 from '../images/blog1.jpg'
import Thumbnail2 from '../images/blog2.jpg'
import Thumbnail3 from '../images/blog3.jpg'
import Thumbnail4 from '../images/blog4.jpg'

import PostItem from './PostItem'

const DUMMY_POSTS =[
    {
        id: '1',
        thumbnail: Thumbnail1,
        category: 'education',
        title: 'This it the title of the very first post on this blog',
        desc: 'ipsum dolor sit amet consectetur adipisicing elit. Sunt mollitia deleniti corporis fuga reiciendis at, consequatur rem assumenda molestias, quo rerum autem ducimus aliquid dolore perferendis ullam dignissimos earum neque quibusdam tempore provident velit excepturi nihil.',
        authorID: 3
    },
    {
        id: '2',
        thumbnail: Thumbnail2,
        category: 'education',
        title: 'This it the title of the very first post on this blog',
        desc: 'ipsum dolor sit amet consectetur adipisicing elit. Sunt mollitia deleniti corporis fuga reiciendis at, consequatur rem assumenda molestias, quo rerum autem ducimus aliquid dolore perferendis ullam dignissimos earum neque quibusdam tempore provident velit excepturi nihil.',
        authorID: 3
    },
    {
        id: '3',
        thumbnail: Thumbnail3,
        category: 'education',
        title: 'This it the title of the very first post on this blog',
        desc: 'ipsum dolor sit amet consectetur adipisicing elit. Sunt mollitia deleniti corporis fuga reiciendis at, consequatur rem assumenda molestias, quo rerum autem ducimus aliquid dolore perferendis ullam dignissimos earum neque quibusdam tempore provident velit excepturi nihil.',
        authorID: 3
    },
    {
        id: '4',
        thumbnail: Thumbnail4,
        category: 'education',
        title: 'This it the title of the very first post on this blog',
        desc: 'ipsum dolor sit amet consectetur adipisicing elit. Sunt mollitia deleniti corporis fuga reiciendis at, consequatur rem assumenda molestias, quo rerum autem ducimus aliquid dolore perferendis ullam dignissimos earum neque quibusdam tempore provident velit excepturi nihil.',
        authorID: 3
    }
]

const Posts = () => {

    const [posts, setPosts] = useState(DUMMY_POSTS);

  return (
    <section className="posts">
        <div className="container posts__container">
        {
            posts.map(({id, thumbnail, category, title, desc, authorID}) => 
            <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} description={desc} authorID={authorID}/>)
        }
        </div>
    </section>
  )
}

export default Posts