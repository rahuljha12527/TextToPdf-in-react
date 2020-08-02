import React,{PureComponent} from 'react';

import jsPDF from 'jspdf';

export default class PdfGenerate extends PureComponent{
    constructor(props){
        super(props);
        this.state={

        }
    }

      
    jspdfGenerator=()=>{
        // 
         var doc=new jsPDF('p','pt');

         doc.text(20,20,'This is default text')

         doc.setFont('courier');

        //  set the font type

        doc.setFontType('bold');

        doc.text(20,30,'This is a text with courier font');

        doc.save("generated.pdf");

    }
    render(){
        return (<button onClick={this.jspdfGenerator}>Generate PDf</button>)
    }
}