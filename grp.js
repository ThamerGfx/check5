import React, {Component} from "react";
import myfont from './Courgette-Regular.ttf';
import myfont1 from './JosefinSans-Bold.ttf';

class Grp extends Component {
    render(props) {
        let group = {};
        if (this.props.gender === "female"){
            group = {
                border:'3px solid #FFAC13',
                
            }
        }
        else if(this.props.gender === "male"){
            group = {
                border: '3px solid #295A85',
                
            }
        }
        const job = {
            color: 'rgb(161, 159, 159)',
            fontSize: '150%',
            margin: '0%',
            fontFamily: myfont1,
            paddingBbottom: '10px'
            }
        const name = {
            display: 'flex',
            fontSize: '160%',
            fontFamily: myfont,
            color:'rgb(94, 94, 94)'
          }
        const sname = {
            paddingLeft: '10px',
            color:'rgb(65, 64, 64)'
          }
        return(
            <div className="grp">
                <img style={group} src={this.props.pic} alt=""/>
                <div style={group}>
                    <div style={name}>
                        <h3>{this.props.fname}</h3>
                        <h3><b style={sname}>{this.props.sname}</b></h3>
                    </div>
                </div>
                <h4 style = {job}>{this.props.job1}</h4>
                <h4 style={job}>{this.props.job2}</h4>
            </div>
        );
    }

}
export default Grp;