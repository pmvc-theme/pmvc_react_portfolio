import React from "react";
import { Section } from "reshow";
import { ContentBlock } from "pmvc_react_landing";

const MyContentBlock = (props) => (
  <ContentBlock style={props.style}>
    {React.Children.map(props.children, (child) => {
      const { children, ...others } = props;
      return React.cloneElement(child, {
        ...others,
        ...child.props,
      });
    })}
  </ContentBlock>
);

const MySection = (props) => (
  <Section {...props}>
    <MyContentBlock {...props} />
  </Section>
);

export default MySection;
