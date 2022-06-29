import { useRef } from "react";
import { Return, Section as ReshowSection } from "reshow";
import {
  build,
  useLazyInject,
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

const Triangle = (props) => {
  return <div style={Styles.triangle} />;
};

const Util = (props) => {
  return <div style={Styles.util} />;
};

const Timebox = ({ children }) => {
  const times = children.split("-");
  const Begin = times[0];
  const DurationPos = times[1].indexOf("(");
  const End =
    -1 !== DurationPos ? times[1].substring(0, DurationPos) : times[1];
  const Duration = -1 !== DurationPos ? times[1].substring(DurationPos) : "";

  return (
    <div style={Styles.timebox}>
      <div>{Begin}</div>
      <Util />
      <div>{End}</div>
      <div>{Duration}</div>
    </div>
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
        <Row key={thisHeader[key]} style={Styles.experienceRow}>
          <Column className="pure-u-1-5" style={Styles.experienceMeta}>
            <Triangle />
            <Progress
              style={{ ...Styles.bar, ...Styles.subBar }}
              className="tiny blue"
              percent="100"
            />
            <Timebox>{thisHeader[key]}</Timebox>
          </Column>
          <Column className="pure-u-4-5">
            <CardView
              item
              key={thisHeader[key]}
              header={thisMeta[key]}
              description={<Unsafe>{marked(thisContent[key])}</Unsafe>}
            />
          </Column>
        </Row>
      ))}
    </List>
  );
};

const Skill = ({ cards }) => {
  const { header } = cards;
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
  injects = useLazyInject( InjectStyles, injects );
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
  bar: {
    margin: "15px 15px 0",
  },
  container: {
    margin: "0 auto",
    maxWidth: 900,
  },
  contact: {},
  download: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  experienceRow: {
    marginBottom: 50,
  },
  experienceMeta: {
    position: "relative",
    paddingTop: 10,
    fontSize: "0.7rem",
    color: "#2185d0",
  },
  name: {
    display: "inline-block",
    fontSize: "4rem",
    letterSpacing: "0.5rem",
  },
  pdf: {
    padding: "20px 5rem 20px",
  },
  subtitle: {
    marginBottom: "5rem",
  },
  section: {
    marginBottom: "3rem",
  },
  subBar: {
    margin: "0 15px 10px",
    height: 1,
    overflow: "hidden",
  },
  title: {
    fontSize: "2rem",
    color: "#2185d0",
    marginBottom: "1rem",
  },
  triangle: {
    width: 0,
    height: 0,
    border: "5px solid transparent",
    borderTop: 0,
    borderBottom: "7px solid #2185d0",
    position: "absolute",
    right: 10,
    top: 4,
  },
  timebox: {
    textAlign: "center",
  },
  util: {
    width: 1,
    height: 10,
    display: "inline-block",
    background: "#2185d0",
  },
};

let injects;
const InjectStyles = {
  link: [
    {
      color: "hsl(202, 35%, 44%)"
    }, 
    'a'
  ],
};
