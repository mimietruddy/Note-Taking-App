import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="mastfoot mt-auto mb-0 pt-5">
        <div className="inner">
          <p>
            Developed by <span>mimietruddy</span>. Check the{" "}
            <a href="https://github.com/mimietruddy/my-blog-app.git">
              {" "}
              GitHub Repo
            </a>
          </p>
          <p>Copyright &copy; 2020</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
