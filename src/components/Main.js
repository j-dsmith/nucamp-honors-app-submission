import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import HomeInfo from "./Home/HomeInfo";
import EditorContainer from "./Editor/EditorContainer";
import Trash from "./Trash/Trash";

const mapStateToProps = (state) => ({
  projects: state.projects,
  contentSelected: state.contentSelected,
});

class Main extends Component {
  render() {
    return (
      <div className={"grid-container"}>
        <Sidebar />
        {/* create routes here, home - projects, notes (note id for custom param routes), trash */}
        <Switch>
          <Route path="/home" render={() => <HomeInfo />} />

          <Route exact path="/projects" />
          <Route
            exact
            path="/projects/:projectId"
            render={() => <EditorContainer />}
          />
          <Route
            path="/projects/:projectId/:noteId"
            render={() => <EditorContainer />}
          />
          <Route path="/trash" exact component={Trash} />
        </Switch>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Main);
