import Dropform from '../components/common/Dropform'
import Blogs from '../components/blogpage//Blogs'
import Insights from '../components/blogpage/Insights'
import Post from '../components/blogpage/Post'
import Topics from '../components/blogpage/Topics'

function Blogpage() {
    return (
        <>
            <Insights />
            <Topics />
            <Post />
            <Blogs />
            <Dropform />
        </>
    )
}

export default Blogpage