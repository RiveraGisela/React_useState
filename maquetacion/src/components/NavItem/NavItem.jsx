import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavItem = ({ to, content }) => <li><NavLink to={to}>{content}</NavLink></li>;