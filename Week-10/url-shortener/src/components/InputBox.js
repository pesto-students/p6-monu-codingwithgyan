import {useState,useEffect} from "react";
import { RowBox } from "./RowBox";
export function InputBox({urlList,setUrlList})
{
    const [link,setLink] = useState();
    const handleLinkChange = (e) => {
            setLink(e.target.value);
    }
    const shortenAPI = () => {
        fetch(`https://api.shrtco.de/v2/shorten?url=${link}`).then(res=>res.json()).then(res=>{
            if(res?.ok)
            {
                let result = res?.result;
                let shortLink = result?.full_short_link;
                let list = JSON.parse(localStorage.getItem("urlList"));
                if(!list || list?.length===0)
                {
                    list = [];
                }
                let obj = {
                    originalLink:link,
                    shortLink:shortLink
                }
                list?.push(obj);
                localStorage.setItem("urlList",JSON.stringify(list));
                urlList?.push(obj);
                setUrlList([...urlList]);
                setLink("");
            }
        }).catch(error=>{
            console.log("error",error);
        })
    }

    return<div className="content-container"> 
            <div className="input-container">
                <input type="text" placeholder="Shorten your url here" value={link} className="input" onChange={handleLinkChange}/>
                <button className="btn" onClick={shortenAPI}>
                    <img className="icon" src="images/scissors.png"/>
                </button>
            </div>
            {
                urlList && urlList?.length>0?
                <RowBox urlObj={urlList?.[urlList?.length-1]}/>
                :""
            }
    </div>
}