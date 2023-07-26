import {FC, useEffect, useState} from 'react'

interface ImgFromDbProps {
  url: string,
  stylings: string,
  alt: string
}

const ImgFromDb: FC<ImgFromDbProps> = ({url,stylings, alt}) => {
    const[displayURL, setDisplayURL] =useState('')
    useEffect(() => {
        // GET request
        
        if ((url!.includes("http"))) setDisplayURL(url)
        else{
          fetch('/api/img_get',{
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({
           id:url
         })
         
             
        }).then((response) => response.json())
        .then((data) => {

            setDisplayURL(data.message)
        })
        }
      }, [url]);

return (displayURL)?<img src={displayURL} className={stylings} alt={alt} />:""

}
export default ImgFromDb