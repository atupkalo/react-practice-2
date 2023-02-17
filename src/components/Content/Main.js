import React from 'react';
import './main.css';

import Form from '../Form/Form'
import ToGo from './Lists/ToGo'
import Done from './Lists/Done'

class Main extends React.Component{
    render(){
        return <main className="main">
                 <div className="container">
                     <Form />
                     <div className="lists-box">
                         <ToGo />
                         <Done />
                     </div>
                 </div>
               </main>
    }
}
export default Main
