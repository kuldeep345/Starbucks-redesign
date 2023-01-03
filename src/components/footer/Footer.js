import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ContentPlaceholder } from "./ContentPlaceholder";
import { Link } from "react-router-dom";
import { KeyboardArrowDownRounded, KeyboardArrowUpRounded } from "@mui/icons-material";

const Footer = ({ 
  i, 
  expanded,
   setExpanded,
   linkHeading,
   link1,
   link2,
   link3,
   link4,
   link5,
   link6
   }) => {

  const isOpen = i === expanded;

  return (
    <>
      <motion.header
        initial={false}
        className='accordian_header'
        onClick={() => setExpanded(isOpen ? false : i)}
      >
      <Link>{linkHeading}</Link>
      <div className="accordian_icon">
        {isOpen ? (
          <KeyboardArrowUpRounded fontSize="large"/>
        ) : (
            <KeyboardArrowDownRounded fontSize="large"/>
        )}
      </div>
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
          className="accordian_section"
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <ContentPlaceholder 
            link1={link1}
            link2={link2}
            link3={link3}
            link4={link4}
            link5={link5}
            link6={link6}
            />
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export const Example = () => {
  const [expanded, setExpanded] = useState(0);

  return (
    <div style={{marginTop:"50px"}}>
    <Footer
    expanded={expanded}
    setExpanded={setExpanded}
    linkHeading='About Us'
    i={0}
    link1='Our Heritage'
    link2='Our Coffee'
    link3='Stories and News'
    link4='Investor Relations'
    link5='Policies and Standards'
    link6='Customer Service'
  />
  <Footer
    expanded={expanded}
    setExpanded={setExpanded}
    linkHeading='Careers'
    i={1}
    link1='Culture and Values'
    link2='Inclusion, Diversity, and Equity'
    link3='College Achievement Plan'
    link4='U.S. Careers'
    link5='International Careers'
  />
  <Footer
    expanded={expanded}
    setExpanded={setExpanded}
    linkHeading='Social Impact'
    i={2}
    link1='Ethical Sourcing'
    link2='Leading in Sustainability'
    link3='Strengthening Communities'
    link4='Creating Oppurtunities'
    link5='Global Social Impact Report'
  />
  <Footer
    expanded={expanded}
    setExpanded={setExpanded}
    linkHeading='For Business Partners'
    i={3}
    link1='Landlord Support Center'
    link2='Suppliers'
    link3='Corporate Gift Card Sales'
    link4='Office and Foodservice Coffee'
  />
  <Footer
    expanded={expanded}
    setExpanded={setExpanded}
    linkHeading='Order and Pickup'
    i={4}
    link1='Order on the App'
    link2='Order on the Web'
    link3='Delivery'
    link4='Order and Pickup Options'
    link5='Explore and Find Coffee for Home'
  />
  </div>
  );
};


