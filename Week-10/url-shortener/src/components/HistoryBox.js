export const HistoryBox = ({openModal}) => {
    return <div className="history-container">
               <div className="history-btn" onClick={openModal}> 
                    <img className="history-img" src="./images/history.png"/>
                    History
                </div>
    </div>
}