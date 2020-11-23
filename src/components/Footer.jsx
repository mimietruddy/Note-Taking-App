import React, {Component} from "react";
import { NoteContext } from "../store/NoteContext";

class Footer extends Component {
  static contextType = NoteContext;
  render(){
    const {notes, setNotes} = this.context
    
  return (
    <footer className="mastfoot mt-auto mb-0 pt-5">
      <div className="inner">
        <p>
          Developed by <span>mimietruddy</span>. Check the{" "}
          <a href="https://github.com/mimietruddy/my-blog-app.git"> GitHub Repo</a>
        </p>
        <p>Copyright &copy; 2020</p>
      </div>
    </footer>
  );}
}

export default Footer;
