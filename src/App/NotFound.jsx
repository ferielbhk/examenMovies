import React, { Component } from "react";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

class NotFound extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            showMessage: false,
          };
    }
    
    componentDidMount() {
        this.setState({ showMessage: true });
        setTimeout(() => {
          this.setState({ showMessage: false  });
        }, 3000);

      }
    render(){
        
        return(
            <div>
                {this.state.showMessage && (
                    <div><Alert variant="success">Redirect To Movies Page</Alert>
                    </div>
                )}
            </div>
        )
    }
}
export default NotFound;