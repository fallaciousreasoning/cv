import { getCvHtml } from "../util/loader"

interface Props {
    cv: string;
}

export default function Home(props: Props) {
    return <div>
        <div dangerouslySetInnerHTML={{ __html: props.cv }} />
    </div>
}

export const getStaticProps = async () => {
    return {
        props: {
            cv: await getCvHtml()
        }
    }
}