import { useRef } from "react";
import { Return, Section as ReshowSection } from "reshow";
import {
  build,
  SemanticUI,
  Button,
  Card,
  List,
  Item,
  Row,
  Column,
  Progress,
  Unsafe,
} from "react-atomic-molecule";
import { CardView } from "react-atomic-organism";
import { HTMLToPDF, PDFPage } from "organism-react-html2canvas";
import get from "get-object-value";
import { marked } from "marked";
import { KEYS } from "reshow-constant";

const Name = ({ firstName, lastName }) => {
  return (
    <SemanticUI style={Styles.name}>
      <span style={{ fontWeight: 600, marginRight: "2rem" }}>{firstName}</span>
      {lastName}
    </SemanticUI>
  );
};

const Subtitle = ({ children }) => (
  <SemanticUI style={Styles.subtitle}>
    {get(children, ["bd", "animation", 0])}
  </SemanticUI>
);

const ContactInfo = (props) => {
  return (
    <List style={Styles.contact}>
      <Item>GIT: https://github.com/HillLiu</Item>
      <Item>Email: hill@kimo.com</Item>
      <Item>Portfolio: https://hillliu.github.io/</Item>
    </List>
  );
};

const Experience = ({ items, begin, end }) => {
  const { header, meta, content } = items;
  const thisHeader = header.slice(begin, end);
  const thisMeta = meta.slice(begin, end);
  const thisContent = content.slice(begin, end);
  return (
    <List>
      {thisHeader.map((item, key) => (
        <CardView
          item
          key={thisHeader[key]}
          header={thisHeader[key]}
          meta={thisMeta[key]}
          description={<Unsafe>{marked(thisContent[key])}</Unsafe>}
        />
      ))}
    </List>
  );
};

const Skill = ({ cards }) => {
  const { header } = cards;
  console.log({ header });
  return (
    <List>
      {(header || []).map((item, key) => {
        return <Card key={key}>{header[key]}</Card>;
      })}
    </List>
  );
};

const SectionHeader = ({ title }) => {
  return (
    <Row>
      <Column className="pure-u-1-5">
        <Progress style={Styles.bar} className="tiny blue" percent="100" />
      </Column>
      <Column style={Styles.title} className="pure-u-4-5">
        {title}
      </Column>
    </Row>
  );
};

const SectionBody = ({ children, auto, name, ...others }) => {
  let thisChildren;
  if (name) {
    thisChildren = (
      <ReshowSection name={name} {...others}>
        {children}
      </ReshowSection>
    );
  } else {
    thisChildren = children;
  }
  if (auto) {
    return (
      <Row>
        <Column className="pure-u-1-5"></Column>
        <Column className="pure-u-4-5">{thisChildren}</Column>
      </Row>
    );
  } else {
    return thisChildren;
  }
};

const Section = ({ name, title, children, auto, ...others }) => {
  return (
    <SemanticUI style={Styles.section}>
      {title && <SectionHeader title={title} />}
      <SectionBody name={name} auto={auto} {...others}>
        {children}
      </SectionBody>
    </SemanticUI>
  );
};

const Resume = (props) => {
  const lastPdf = useRef();
  const lastEl = useRef();

  const handleClick = () => {
    lastPdf.current.download(lastEl.current);
  };

  return (
    <Return
      initStates={[
        "freelancerFirstName",
        "freelancerLastName",
        "introduce",
        "pdf",
      ]}
    >
      {({ freelancerFirstName, freelancerLastName, introduce, pdf }) => {
        if (!pdf) {
          return null;
        }

        const components = {
          name: (
            <Name
              firstName={freelancerFirstName}
              lastName={freelancerLastName}
            />
          ),
          subTitle: <Subtitle>{introduce}</Subtitle>,
          contactInfo: (
            <Section title="Personal Information" auto>
              <ContactInfo />
            </Section>
          ),
          experienceWithTitle: (
            <Section name="detail" title="Work Experience">
              <Experience />
            </Section>
          ),
          experience: (
            <Section name="detail">
              <Experience />
            </Section>
          ),
          skills: (
            <Section name="skillset" title="Skills">
              <Skill />
            </Section>
          ),
        };

        return (
          <>
            <Button onClick={handleClick} style={Styles.download}>
              Download Resume
            </Button>
            <HTMLToPDF ref={lastPdf} hideHtml />
            <SemanticUI refCb={lastEl} style={Styles.container}>
              {KEYS(pdf).map((key) => {
                const pdfData = pdf[key];
                return (
                  <PDFPage style={Styles.pdf} key={key}>
                    {pdfData.map((p, key1) => {
                      const pData = 0 === p.indexOf("[") ? JSON.parse(p) : [p];
                      return build(components[pData[0]])({
                        key: key1,
                        ...pData[1],
                      });
                    })}
                  </PDFPage>
                );
              })}
            </SemanticUI>
          </>
        );
      }}
    </Return>
  );
};

export default Resume;

const Styles = {
  download: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  pdf: {
    padding: "20px 5rem 20px",
  },
  container: {
    margin: "0 auto",
    maxWidth: 900,
  },
  name: {
    display: "inline-block",
    fontSize: "4rem",
    letterSpacing: "0.5rem",
  },
  subtitle: {
    marginBottom: "5rem",
  },
  contact: {},
  section: {
    marginBottom: "3rem",
  },
  bar: {
    margin: "15px 15px 0",
  },
  title: {
    fontSize: "2rem",
    color: "#2185d0",
    marginBottom: "1rem",
  },
};
