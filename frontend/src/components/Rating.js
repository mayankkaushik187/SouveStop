import React from "react"

const Rating = ({ value, text, color, key }) => {
    return (
        <div className="rating">
            <span>
                {[1, 2, 3, 4, 5].map((index) => (
                    <i
                        style={{ color }}
                        className={
                            value >= index
                                ? "fas fa-star"
                                : value >= index - 0.5
                                ? "fas fa-star-half-alt"
                                : "far fa-star"
                        }
                    ></i>
                ))}
            </span>
            <span>{text && text}</span>
        </div>
    )
}
Rating.defaultProps = {
    color: "#f8e825",
}
export default Rating
