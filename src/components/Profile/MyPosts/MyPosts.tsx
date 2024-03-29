import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostType} from "redux/profileReducer";
import AddPostForm, {AddPostFormData} from "./AddPostForm/AddPostForm";

export type MapStateToPropsType = {
    posts: PostType[]
}

export type MapDispatchToPropsType = {
    addPost: (newPostText: string) => void
}

type MyPosts = MapStateToPropsType & MapDispatchToPropsType


const MyPosts = React.memo((props: MyPosts) => {

    let postsElement = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    const onAddPost = (values: AddPostFormData) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddPostForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
})

export default MyPosts;