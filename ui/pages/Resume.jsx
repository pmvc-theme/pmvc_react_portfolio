import { useRef } from "react";
import smoothScrollTo from "smooth-scroll-to";
import { ReLink, Return, Section as ReshowSection } from "reshow";
import {
  build,
  useLazyInject,
  Button,
  Card,
  Column,
  Content,
  Item,
  Icon,
  List,
  Menu,
  Progress,
  Row,
  SemanticUI,
  Unsafe,
} from "react-atomic-molecule";
import { CardView } from "react-atomic-organism";
import { HTMLToPDF, PDFPage } from "organism-react-html2canvas";
import get from "get-object-value";
import { marked } from "marked";
import { KEYS } from "reshow-constant";
import Home from "ricon/Home";
import GoToTop from "ricon/GoToTop";
import { Dropdown } from "organism-react-navigation";
import Me from "../organisms/Me";

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

const ContactInfo = ({ keyArr, data }) => (
  <>
    {keyArr?.map((key, index) => (
      <Row key={key} style={Styles.oneLineRow} className="one-line">
        <Column className="pure-u-1-5 title" style={Styles.oneLineColTitle}>
          {key}
        </Column>
        <Column className="pure-u-4-5 content">
          <Unsafe>{marked(data[index])}</Unsafe>
        </Column>
      </Row>
    ))}
  </>
);

const Triangle = (props) => <div style={Styles.triangle} />;

const Until = (props) => <div style={Styles.until} />;

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
      <Until />
      <div>{End}</div>
      <div>{Duration}</div>
    </div>
  );
};

const Experience = ({ items, begin, end }) => {
  const { header, meta, content, role } = items;
  const thisHeader = header.slice(begin, end);
  const thisMeta = meta.slice(begin, end);
  const thisContent = content.slice(begin, end);
  const thisRole = role.slice(begin, end);
  return (
    <>
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
          <Column className="pure-u-4-5 ui items" style={{ margin: 0 }}>
            <CardView
              item
              key={thisHeader[key]}
              header={thisMeta[key]}
              meta={thisRole[key] ? `Role: ${thisRole[key]}` : null}
              description={<Unsafe>{marked(thisContent[key])}</Unsafe>}
            />
          </Column>
        </Row>
      ))}
    </>
  );
};

const Skill = ({ cards }) => {
  const { header } = cards;
  return (
    <List type="cards" className="four">
      {header?.map((item, key) => {
        return (
          <Card key={key}>
            <Content>{header[key]}</Content>
          </Card>
        );
      })}
    </List>
  );
};

const Interests = ({ data }) => {
  return (
    <List type="cards" className="four">
      {data?.map((item) => {
        return (
          <Card key={item}>
            <Content>{item}</Content>
          </Card>
        );
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

const ResumeMenu = ({ onDownload }) => {
  const DropList = (props) => (
    <Menu {...props}>
      <Item onClick={onDownload}>Download Resume</Item>
    </Menu>
  );

  return (
    <Menu type="buttons" style={Styles.buttons} className="text">
      <ReLink href="/" component={Item} atom="a">
        <Icon>
          <Home />
        </Icon>
      </ReLink>
      <Icon
        className="item"
        style={{ cursor: "pointer" }}
        onClick={() => smoothScrollTo(0)}
      >
        <GoToTop />
      </Icon>
      <Dropdown list={DropList} right item>
        Download
      </Dropdown>
    </Menu>
  );
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
  injects = useLazyInject(InjectStyles, injects);
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
          contactInfo: (
            <>
              <Name
                firstName={freelancerFirstName}
                lastName={freelancerLastName}
              />
              <Subtitle>{introduce}</Subtitle>
              <Section name="info" title="Personal Information">
                <ContactInfo />
              </Section>
              <Me style={Styles.me} />
            </>
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
            <Section name="skillset" title="Skills" auto>
              <Skill />
            </Section>
          ),
          interests: (
            <Section name="interests" title="Interests" auto>
              <Interests />
            </Section>
          ),
        };

        return (
          <>
            <HTMLToPDF
              ref={lastPdf}
              hideHtml
              downloadFileName={`${freelancerFirstName}-resume.pdf`}
            />
            <SemanticUI
              className="pdf-root"
              refCb={lastEl}
              style={Styles.container}
            >
              <ResumeMenu onDownload={handleClick} />
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
  buttons: {
    position: "fixed",
    top: 10,
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 1,
    backgroundColor: "hsl(0, 100%, 100%)",
  },
  container: {
    margin: "0 auto",
    maxWidth: 900,
    position: "relative",
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
  me: {
    position: "absolute",
    top: 10,
    right: 20,
  },
  name: {
    display: "inline-block",
    fontSize: "4rem",
    letterSpacing: "0.5rem",
    marginTop: "5rem",
  },
  oneLineRow: {
    marginBottom: 20,
  },
  oneLineColTitle: {
    textAlign: "right",
    paddingRight: 10,
    boxSizing: "border-box",
    content: ":",
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
  until: {
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
      color: "hsl(202, 35%, 44%)",
    },
    "a",
  ],
  oneLineTitle: [
    {
      content: ":",
    },
    ".one-line .title:after",
  ],
  oneLineContent: [
    {
      margin: 0,
    },
    ".one-line .content p",
  ],
};
