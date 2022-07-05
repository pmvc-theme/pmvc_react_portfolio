import { Section } from "reshow";
import { ContentBlock } from "pmvc_react_landing";
import { build } from "react-atomic-molecule";

const MyContentBlock = ({style, children, backgroundStyle, ...restProps}) => (
  <ContentBlock style={style} backgroundStyle={backgroundStyle}>
    {build(children)(restProps)}
  </ContentBlock>
);

const MySection = (props) => (
  <Section {...props}>
    <MyContentBlock {...props} />
  </Section>
);

export default MySection;
