import { RowBox } from "./RowBox";

export const HistoryModal = ({urlList,showModal,closeModal}) => {
    if(!showModal)
    return;
    return <div className="history-modal-container">
            <div className="black-container"></div>
            <div className="main-container">
                <div className="close-box">
                    <div className="close" onClick={closeModal}>
                        <img src='./images/close.png' height="18px" width="18px"/>
                    </div>
                </div>
                <div className="modal-body">
                {
                    urlList && urlList?.length>0? urlList?.map(link=>{
                        return <>
                                <RowBox urlObj= {link}/>
                                <hr/>
                                </> 
                    })
                    : 
                    <div>
                        <center>
                            <h4>No short link</h4>
                    </center>
                </div>
                }
                </div>
            </div>
    </div>
}