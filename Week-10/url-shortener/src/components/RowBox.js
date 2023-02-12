export const RowBox = ({urlObj}) => {
    const handleCopy = (value) => {
        navigator.clipboard.writeText(value);
    }
    return <div className="result-url-container">
        <div className="text-box">
            <div className="original-text">{urlObj?.originalLink}</div>
            <div className="result-text">{urlObj?.shortLink || ""}</div>
        </div>
    &nbsp;&nbsp;
    <button className="copy-btn" onClick={()=>handleCopy(urlObj?.shortLink)}>Copy</button>
</div>
}