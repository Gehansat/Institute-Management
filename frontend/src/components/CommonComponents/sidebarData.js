import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import PaidIcon from '@mui/icons-material/Paid';
import BoyIcon from '@mui/icons-material/Boy';
import PeopleIcon from '@mui/icons-material/People';

export const sidebarData =[
    {
        title :"Notice",
        icon :<AddAlertIcon/>,
        link :"/notice",
    },
    {
        title :"Payment",
        icon :<PaidIcon/>,
        link :"/payment",
    },

    {
        title :"Staff",
        icon :<PeopleIcon/>,
        link :"/staff",
    },
    {
        title :"Student",
        icon :<BoyIcon/>,
        link :"/student",
    },

]