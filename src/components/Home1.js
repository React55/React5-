import React from "react"
import "../css/home1.css"
import $ from "jquery";

class Home1 extends React.Component{
    render(){
        return(
            <div className="Home1">
          
            </div>
        )
        
    }
    componentWillMount(){
        var _this = this;
        $.ajax({
            type:"post",
            url:"/api/creditUnion/largeCredit/getPageLargeCredit",
            async:false,
            dataType:"json",
            success:function (data) {
                console.log(data.data.pageDate.list)
               
            }

        })
    }
   
    
}

export default Home1;