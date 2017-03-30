import React,{Component} from 'react'; 
import get from 'get-object-value';

import Header from '../molecules/AnimateHeader';
import Content from '../molecules/AnimateContent';
import Section from '../molecules/SvgBlackBlock';

var PieChart;

class TimeBody extends Component
{
    
    componentDidMount()
    {
        System.import('rd3').then((rd3)=>{
            PieChart = rd3.PieChart;
            this.setState({'isLoad':true});        
        });
    }

    render()
    {
        if (!get(this, ['state', 'isLoad'])) {
            return null;
        }
        const {header, content, data} = this.props;
        let pieData = [];
        get(data,['label'], []).forEach((label,num)=>{
            pieData.push({
                label: get(data,['label', num]),
                value: get(data,['value', num])
            });    
        });
        return (
            <div>
                <Header style={Styles.header}>
                    {header}
                </Header>
                <Content style={Styles.content}>
                    {content}
                </Content>
                <div style={Styles.pie}>
                    <PieChart
                      data={pieData}
                      width={450}
                      height={400} 
                      radius={110}
                      innerRadius={20}
                      labelTextFill="#fff"
                      sectorBorderColor="white"
                      showTooltip={false}
                    />
                </div>
            </div>
        );
    }
}

const MyTime = (props) =>
    <Section name="mytime">
    <TimeBody {...props} />
    </Section>

export default MyTime;

const Styles = {
    pie: {
        textAlign: 'center'
    } 
};
