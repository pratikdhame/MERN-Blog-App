import React from 'react'
import {Link} from 'react-router-dom'
import PostAuthor from '../components/PostAuthor'
import Thumbnail from '../images/blog22.jpg'

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor/>
          <div className="post-detail__buttons">
            <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
            <Link to={`/posts/werwer/delete`} className='btn sm danger'>Delete</Link>
          </div>
        </div>
        <h1>This is the post title!</h1>
        <div className="post-detail__thumnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum minima corporis consectetur totam recusandae in architecto iste. Eveniet laboriosam veritatis inventore reprehenderit recusandae consequuntur iste dolore hic minus, aperiam incidunt facilis magnam autem numquam at amet voluptate. Vero, ut placeat.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum corrupti exercitationem iste nostrum culpa vero libero quisquam ullam similique laborum. Totam accusamus ducimus consectetur velit aut dolore facere asperiores corporis illo optio nulla aliquam impedit quasi magni, nisi eum neque aliquid minus consequatur. Rerum dolores ipsam eos esse recusandae ducimus nihil dignissimos possimus id. Nisi architecto deserunt iure cumque, eveniet corrupti odio sequi, sunt tempore tempora magnam doloremque facilis aliquid perferendis asperiores maxime! Deleniti soluta fuga ut quae corporis commodi unde, eligendi aliquam doloribus officia.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis saepe rerum aut quod nobis eveniet, dolorem voluptates illum soluta dolore officiis incidunt. Accusantium, eos nesciunt. Aperiam sint officia pariatur culpa fuga voluptatibus? Praesentium optio quae obcaecati unde eos repellendus? Deserunt enim rem, veritatis officiis dolor dicta. Pariatur necessitatibus labore soluta optio quibusdam libero voluptate architecto consequatur animi repudiandae magnam, dignissimos sequi nam dolore facilis, molestias minima praesentium nulla rem voluptatem veniam velit! Cupiditate vel iure vero ipsam voluptas magni eligendi suscipit veritatis, molestias ullam temporibus placeat adipisci ex. Laboriosam fugiat nobis vel enim consectetur rem quam dolorem vitae corporis illo recusandae sed vero voluptatibus praesentium non, fuga quae labore et ut.
        </p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit ab, beatae fugiat voluptate veniam eos? Architecto, expedita, praesentium porro, voluptas ex et sed laboriosam culpa ducimus ipsum perferendis maxime placeat inventore! Porro corporis, voluptatum perferendis vero nisi facere sint ratione laboriosam exercitationem, laudantium animi! Non eos voluptatem veritatis corporis odio.
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum distinctio minima laborum. Ratione modi consequatur doloribus quas quia illum repellendus laudantium incidunt ab iste a minus autem iure deserunt maxime, cumque commodi dolor ea asperiores praesentium rerum tempora ipsum in?
        </p>
      </div>
    </section>
  )
}

export default PostDetail