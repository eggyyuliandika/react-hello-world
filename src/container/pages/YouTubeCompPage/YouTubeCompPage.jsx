import React, {Component, Fragment} from "react";
import YouTubeComp from "../../../component/YouTubeComp/YouTubeComp";

class YouTubeCompPage extends Component {
  render(){
    return(
      <Fragment>
       <p>Youtube Component</p>
       <hr/>
       <YouTubeComp time="7.12" title="Tutor React JS - Bagian 1" desc="2x ditonton, 2 hari yang lalu"/>
       <YouTubeComp time="8.02" title="Tutor React JS - Bagian 2" desc="200x ditonton, 10 hari yang lalu" />
       <YouTubeComp time="5.04" title="Tutor React JS - Bagian 3" desc="500x ditonton, 4 hari yang lalu"/> 
       <YouTubeComp time="5.04" title="Tutor React JS - Bagian 4" desc="1k ditonton, 14 hari yang lalu"/> 
       <YouTubeComp/> 
      </Fragment>
      
    )
  }
}

export default YouTubeCompPage;