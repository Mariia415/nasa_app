const NewsCard = ({content}) => {
    const {title, explanation} = content;

    return (
        <>
            <h2>{title}</h2>
            <p>{explanation} </p>
        </>
    )
}

export default NewsCard;