import React from "react"


class AvengerImgComponent extends React.Component{

    constructor(props){
        super(props);

    }

    render(){

            return(
                <>
                    <img src={this.props.src} width={this.props.width} height={this.props.height} style={this.props.style} />
                </>
            )







    }

}

export default AvengerImgComponent;