import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";

export default () => (
    <Layout>
        <Route exact path='/' component={About}/>
        <Route path='/experience' component={Experience} />
        <Route path='/education' component={Education} />
        <Route path='/skills' component={Skills} />
        <Route path='/projects' component={Experience} />
    </Layout>
);
