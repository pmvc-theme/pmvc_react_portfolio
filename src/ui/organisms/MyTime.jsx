import React, { lazy, Suspense, PureComponent } from "react";
import get from "get-object-value";

import Header from "../molecules/AnimateHeader";
import Content from "../molecules/AnimateContent";
import Section from "../molecules/SvgBlackBlock";

const PieChart = lazy(() => import("organism-react-d3-piechart"));

class TimeBody extends PureComponent {
  render() {
    const { header, content, data } = this.props;
    let pieData = [];
    get(data, ["label"], []).forEach((label, num) => {
      pieData.push({
        label: get(data, ["label", num]),
        value: get(data, ["value", num]),
      });
    });
    return (
      <div>
        <Header style={Styles.header}>{header}</Header>
        <Content style={Styles.content}>{content}</Content>
        <div style={Styles.pie}>
          <Suspense fallback={<div />}>
            <PieChart
              data={pieData}
              outerRadius={60}
              innerRadius={10}
              labelTextFill="#fff"
              valueTextFill="#fff"
              sectorBorderColor="#fff"
              style={{
                maxWidth: 450,
              }}
            />
          </Suspense>
        </div>
      </div>
    );
  }
}

const MyTime = (props) => (
  <Section name="mytime">
    <TimeBody {...props} />
  </Section>
);

export default MyTime;

const Styles = {
  pie: {
    textAlign: "center",
  },
};
