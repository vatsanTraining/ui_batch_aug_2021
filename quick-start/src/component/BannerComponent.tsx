import React from 'react'
import Banner from '../model/Banner'

const BannerComponent:React.FunctionComponent<Banner>=
           ({title ,subtitle})  =>{
    return (
        <div>
            <h2>{title}</h2>
            <h4>{subtitle}</h4>
        </div>
    )
}

export default BannerComponent;
