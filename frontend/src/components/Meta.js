import React from "react"
import { Helmet } from "react-helmet"

const Meta = ({ title, description, keywords }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
        </Helmet>
    )
}

Meta.defaultProps = {
    title: "Welcome To SouveStop",
    keywords: "Souvenirs of your favourite artists and influencers",
    description:
        "We sell the most genuine souvenirs of your favourite artist at the best price!",
}

export default Meta
