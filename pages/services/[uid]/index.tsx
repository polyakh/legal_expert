import {useRouter} from 'next/router'

const Post = () => {
  const router = useRouter().query;
  console.log({router});
  return <p>Post: </p>
}

export default Post

