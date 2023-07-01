import { style } from "@mui/system";
import React from "react";

export default function AdminViewFooter(){
    return(

        <footer id="sticky-footer" class="flex-shrink-0 py-4 bg-dark text-white-50" style={{position:"fixed", left:"0", bottom:"0", width:"100%"}}>
        <div class="container text-center">
          <small>Copyright &copy; ShilpaInsitute</small>
        </div>
      </footer>

    )
}