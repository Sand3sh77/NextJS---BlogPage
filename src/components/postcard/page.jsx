import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"

const PostCard = ({ post }) => {


    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src="https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className={styles.img} />
                </div>
                <span className={styles.date}>2019-02-20</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>Hello World</h1>
                <p className={styles.desc}>hello everyone how are yall?</p>
                <Link className={styles.link} href={`/blog/test`}>READ MORE</Link>
            </div>
        </div>

        // <div className={styles.container}>
        //     <div className={styles.top}>
        //         {post.img && <div className={styles.imgContainer}>
        //             <Image src={post.img} alt="" fill className={styles.img} />
        //         </div>}
        //         <span className={styles.date}>{post.createdAt?.toString().slice(4, 16)}</span>
        //     </div>
        //     <div className={styles.bottom}>
        //         <h1 className={styles.title}>{post.title}</h1>
        //         <p className={styles.desc}>{post.body}</p>
        //         <Link className={styles.link} href={`/blog/${post.slug}`}>READ MORE</Link>
        //     </div>
        // </div>
    )


}

export default PostCard