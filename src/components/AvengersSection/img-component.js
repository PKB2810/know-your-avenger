import React from "react"


class AvengerImgComponent extends React.Component{


    render(){

            return(
                <>
                    <img src={this.props.src} alt="avenger" width={this.props.width} height={this.props.height} style={this.props.style} />
                </>
            )







    }

}

export default AvengerImgComponent;