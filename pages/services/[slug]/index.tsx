import {PATH_SERVICES} from "~shared/consts";
import {getErrorMessage} from "~shared/utilities";

const Post = (props: any) => {
  console.log({props});
  return <div>
    <h1>Service: {props.title}</h1>
    <p>{props.text}</p>
  </div>
}

export default Post


export async function getStaticProps({params: {slug}}: any) {
  const services = await (
    await fetch(`${process.env.API_URL}${PATH_SERVICES}`, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'GET'
      }
    )).json();

  const {title, description} = services.find((slug: any) => slug === slug)
  return {
    props: {
      title: title,
      text: description
    }
  };
}


export async function getStaticPaths() {
  let paths = [];
  try {
    const services = await (
      await fetch(`${process.env.API_URL}${PATH_SERVICES}`, {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'GET'
        }
      )).json();
    paths = services.map(({slug}: any) => ({
      params: {slug},
    }));

  } catch (err) {
    // to Sentry
    console.error(getErrorMessage(err));
  }
  console.log('~~', paths)
  return {paths, fallback: false};
}
