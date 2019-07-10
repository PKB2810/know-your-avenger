import React from "react";
import AvengerContext from "../../context/avenger-context";

class AvengerProvider extends React.Component {
        constructor(props){
                            super(props);
                            this.state = {
                              view: "List View",
                              selectedAvenger: null,
                              isLoading:true,
                              avengers: []
                            };
                          }
        componentDidMount(){

          fetch("https://gateway.marvel.com:443/v1/public/characters?apikey=63ed80dab91bb44381fc80ef363acde5")
          .then(res => res.json())
          .then(
            (result) => {
              console.log(result.data.results)
             this.setState({avengers : result.data.results,isLoading:false});
            },
            (error) => {
              console.log(error);
            }
          )
        }

        onViewChange = (value) =>{
            //console.log(e)
               this.setState({view:value}); 


        }

        handleSelectedAvenger = (avengerName) => {
            this.setState({selectedAvenger:avengerName}); 
        }

        render(){
                return (
                  <AvengerContext.Provider
                    value={{
                      view:this.state.view,
                      selectedAvenger:this.state.selectedAvenger,
                      avengerData: this.state.avengers,
                      onViewChange: this.onViewChange,
                      isLoading:this.state.isLoading,
                      handleSelectedAvenger:this.handleSelectedAvenger
                    }}
                  >
                    {this.props.children}
                  </AvengerContext.Provider>
                );

        }

}

export default AvengerProvider;