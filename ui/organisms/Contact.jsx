import React from "react";
import {
  mixClass,
  useLazyInject,
  DividingHeader,
  Form,
  Field,
  Button,
} from "react-atomic-molecule";
import { pageStore } from "reshow";
import PhoneIcon from "ricon/Phone";

import Section from "../molecules/WhiteBlock";

const Header = (props) => (
  <DividingHeader {...props} className="grey inverte" style={Styles.header} />
);

const Tel = (props) => {
  const classes = mixClass(props.className, "tel");
  const { header, content } = props;
  return (
    <div style={Styles.block} className={classes}>
      <Header>{header}</Header>
      <div>
        <i style={Styles.phoneIcon}>
          <PhoneIcon />
        </i>
        {content}
      </div>
    </div>
  );
};

const ContactForm = (props) => {
  const I18N = pageStore.getMap("I18N");
  const classes = mixClass(props.className, "contact-form");
  const { header, content } = props;
  return (
    <Form className={classes} style={Styles.block}>
      <Header>{header}</Header>
      <div className="pure-g">
        <div style={Styles.formCol} className="pure-u-1 pure-u-md-1-2">
          <Field
            atom="input"
            style={Styles.input}
            placeholder={I18N.yourName}
          />
          <Field
            atom="input"
            style={Styles.input}
            placeholder={I18N.yourEmailAddress}
          />
          <Field
            atom="input"
            style={Styles.input}
            placeholder={I18N.yourPhone}
          />
        </div>
        <div style={Styles.formCol} className="pure-u-1 pure-u-md-1-2">
          <Field
            atom="textarea"
            placeholder={I18N.yourMessage}
            style={Styles.textarea}
          />
          <Button className="primary right floated huge">{I18N.submit}</Button>
        </div>
      </div>
    </Form>
  );
};

const Contact = (props) => {
  injects = useLazyInject(InjectStyles, injects);
  const { tel, form } = props;
  return (
    <Section className="contact" style={Styles.container}>
      <div className="pure-g" style={Styles.inside}>
        <Tel className="pure-u-1 pure-u-md-1-3" {...tel} />
        <ContactForm className="pure-u-1 pure-u-md-2-3" {...form} />
      </div>
    </Section>
  );
};

export default Contact;

const Styles = {
  container: {
    background: "#2b2b2b",
    maxWidth: "100%",
    color: "#fff",
    overflow: "hidden",
  },
  inside: {
    maxWidth: 930,
    margin: "0 auto",
  },
  block: {
    padding: "0 20px",
    fontSize: "1.063rem",
    fontFamily: "Raleway,sans-serif",
    boxSizing: "border-box",
    margin: "0 0 50px",
  },
  phoneIcon: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    display: "inline-block",
    background: "#0f87cd",
    padding: "10px",
    boxSizing: "border-box",
    marginRight: 10,
  },
  header: {
    textTransform: "uppercase",
    fontSize: "1.063rem",
    whiteSpace: "nowrap",
    marginBottom: 15,
  },
  formCol: {
    boxSizing: "border-box",
    padding: 15,
  },
  input: {
    marginBottom: 20,
    height: 60,
  },
  textarea: {
    height: 270,
  },
};

let injects;
const InjectStyles = {
  inputTextarea: [
    {
      background: "#3d3d3d",
      color: "#f3f3f3",
      fontSize: ".875rem",
    },
    "#contact form input, #contact form textarea",
  ],
};
