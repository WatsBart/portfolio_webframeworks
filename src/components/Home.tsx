import { TwitterTweetEmbed } from "react-twitter-embed"
import "../styles/Styles.css"

export const Home = () => {
    return (
        <div className="homepage">
            <h2>Mijn portfolio</h2>
            <TwitterTweetEmbed
                tweetId={'1607311129075761154'}
            />
        </div>

    )
}