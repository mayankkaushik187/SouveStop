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
    keywords: "Buy cheap products, electronics and gadgets!",
    description: "We sell the most genuine products at the best prices!",
}

export default Meta
