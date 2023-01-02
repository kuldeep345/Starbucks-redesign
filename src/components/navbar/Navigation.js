import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import FindAStore from '../findAStore/FindAStore'
import { useSelector } from "react-redux";
import SignInButton from "../signInButton/SignInButton";
import SignUpButton from "../signUpButton/SignUpButton";
import LogoutButton from "../logoutButton/LogoutButton";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const variants2 = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const Navigation = ({toggle}) =>{
  const user = useSelector(state => state.user.user)
  const [showMenuCategories, setShowMenuCategories] = React.useState(false);

  return (
    <>   
     {showMenuCategories ? (
        <motion.ul variants={variants} style={{display:"flex" , flexDirection:"column"}}>
          <MenuItem
            link="Menu"
            goBackIcon
            onClick={() => {
              setShowMenuCategories(false);
            }}
            width="60%"
          />
          <MenuItem
            link="All products"
            path="/menu"
            onClick={() => {
              setShowMenuCategories(false);
              toggle();
            }}
          />
          <MenuItem
            link="Featured"
            path="/menu/featured"
            onClick={() => {
              setShowMenuCategories(false);
              toggle();
            }}
          />
          <MenuItem
            link="Previous Orders"
            onClick={() => {
              setShowMenuCategories(false);
              toggle();
            }}
          />
          <MenuItem
            link="Favorite Products"
            onClick={() => {
              setShowMenuCategories(false);
              toggle();
            }}
          />
        </motion.ul>
      ) : (
        <motion.ul variants={variants}>
          <MenuItem
            link="Menu"
            icon
            onClick={() => setShowMenuCategories(true)}
          />
          <MenuItem link="Rewards" />
          <MenuItem link="Gift Cards" />
          <motion.hr variants={variants2} />
          <motion.div className="navigation__buttons" variants={variants2}>
          {!user ? (
            <>
            <SignInButton/>
            <SignUpButton/>
            </>
          ): (
            <LogoutButton/>
          )}
          </motion.div>
          <motion.div variants={variants2}>
            <FindAStore />
          </motion.div>
        </motion.ul>
      )}
    </>

  )
 
};

const itemIds = [0, 1, 2, 3, 4];
