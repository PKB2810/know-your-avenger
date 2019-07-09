import React from "../../node_modules/react";
import AvengerContext from "../context/avenger-context";

class AvengerProvider extends React.Component {
        constructor(props){
            super(props);
               this.state = {
                 view: "List View",
                 selectedAvenger: null,

                 avengers: [
                   {
                     avenger_id: 1,
                     avenger_name: "Captain America",
                     avenger_description:
                       "Captain America has agility, strength, speed, endurance, and reaction time superior to any Olympic athlete who ever competed. The Super-Soldier formula that he has metabolized has enhanced all of his bodily functions to the peak of human efficiency. Notably, his body eliminates the excessive build-up of fatigue-producing poisons in his muscles, granting him phenomenal endurance.Captain America has mastered the martial art of American-style boxing and judo, and has combined these disciplines with his own unique hand-to-hand style of combat. He engages in a daily regimen of rigorous exercise (including aerobics, weight lifting, gymnastics, and simulated combat) to keep himself in peek condition. Captain America is one of the finest human combatants Earth has ever known.",
                     avenger_image:
                       "/images/capt_america.jpg",
                       avenger_list_image:"/images/capt_amer_list.jpeg"
                   },
                   {
                     avenger_id: 2,
                     avenger_name: "Iron Man",
                     avenger_description:
                       "Iron Man possesses a wealth of powers through his powered armor suit. These powers include super strength, the ability to fly, durability, and a number of weapons. The primary weapons used by Iron Man are rays that are shot from the palms of his gauntlets.Iron Man gets his superpowers from his metallic suit of armor and other technologies invented by his alter ego Tony Stark. Tony is a genius engineer and wealthy owner of a technology company. Tony built the Iron Man suit when he was kidnapped and suffered an injury to his heart. The suit was meant to save his life and help him escape. Tony also has an improved artificial nervous system which gives him greater healing powers, super perception, and the ability to merge with his suit of armor. Outside of his armor he has been trained in hand-to-hand combat. ",
                     avenger_image:
                       "/images/iron_man.jpeg",
                       avenger_list_image:"/images/iron_man_list.png"
                   },
                   {
                     avenger_id: 3,
                     avenger_name: "Thor",
                     avenger_description:
                       "Thor is the only Avenger of alien origin and one of the most powerful beings in the entire universe. Thor wields the mystical war hammer Mjölnir, which controls the weather, but he himself also has god-like strength, durability and agility. Thor was the prince of Asgard; until the death of his father, Odin.",
                     avenger_image:
                       "/images/Thor.jpg",
                       avenger_list_image:"/images/thor_list.jpeg"
                   },
                   {
                     avenger_id: 4,
                     avenger_name: "Black Widow",
                     avenger_description:
                       "Black Widow is a human, trained in the arts of espionage and martial arts, with specialities in hand-to-hand combat and interrogation. She has the athletic prowess of an Olympic class athlete and appears nearly superhuman at times.",
                     avenger_image:
                       "/images/black_widow.jpg",
                       avenger_list_image:"/images/black_widow_list.jpeg"
                   },
                   {
                     avenger_id: 5,
                     avenger_name: "Hawkeye",
                     avenger_description:
                       "While Hawkeye has no superhuman powers (with the exception of the period when using Pym particles to become Goliath), he is at the very peak of human conditioning. He is an exceptional fencer, acrobat and marksman, having been trained from childhood in the circus and by the criminals Trick Shot and Swordsman",
                     avenger_image:
                       "/images/hawkeye.jpeg",
                    avenger_list_image:"/images/hawkeye_list.jpeg"
                   }
                 ]
               }; 



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
                      handleSelectedAvenger:this.handleSelectedAvenger
                    }}
                  >
                    {this.props.children}
                  </AvengerContext.Provider>
                );

        }

}

export default AvengerProvider;