import React from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Error from './Error';
import './RouterStyle.css'

const RouterContainer = ({location}) => {
    return (
    <div>
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={300}
          classNames="fade"
        >
          <section className="route-section">
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/services" component={Services} />
              <Route component={Error} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default withRouter(RouterContainer);