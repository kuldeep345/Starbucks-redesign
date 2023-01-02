import * as React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded'
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded'
import './navbar.css'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ link, path, icon, goBackIcon, onClick, width }) => {
  
  return (
    <Link to={path} className={`${link !== 'Gift Cards' && 'link'} `} style={{textDecoration:'none'}}>
        <motion.li
          style={{ width }}
          onClick={onClick}
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="linkitem"
        >
          {goBackIcon && <ChevronLeftRoundedIcon fontSize='large' />}
          <h3 className='linkMenu'>{link}</h3>
          {icon && <ChevronRightRoundedIcon fontSize='large' />}
        </motion.li>
      </Link>
  );
};
