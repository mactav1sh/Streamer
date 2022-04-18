// import React from "react";
// import { Router, BrowserRouter, Route, Link, Routes } from "react-router-dom";
// import Header from "./Header";
// import StreamEdit from "./streams/StreamEdit";
// import StreamShow from "./streams/StreamShow";
// import StreamCreate from "./streams/StreamCreate";
// import StreamList from "./streams/StreamList";
// import StreamDelete from "./streams/StreamDelete";
// import history from "../history";

// const App = () => {
//   return (
//     <div className="ui container">
//       <BrowserRouter history={history}>
//         <div>
//           <Header />
//           <Routes>
//             <Route path="/" exact element={<StreamList />} />
//             <Route path="/streams/new" exact element={<StreamCreate />} />
//             <Route path="/streams/edit/:id" exact element={<StreamEdit />} />
//             <Route path="/streams/delete" exact element={<StreamDelete />} />
//             <Route path="/streams/show" exact element={<StreamShow />} />
//           </Routes>
//         </div>
//       </BrowserRouter>
//     </div>
//   );
// };
// export default App;

// `538754592723-m1k5n49487p3qolut2ced49i2h77pjh9.apps.googleusercontent.com`;
import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/:id" exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
