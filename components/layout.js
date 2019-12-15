import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

class Layout extends React.Component {
 constructor(props) {
    super(props);
    this.state = {selectedOption: null};
  }

	render() {
		return (
      <div>
        <Head>
          <title>Fallout</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
	    		<link href="https://fonts.googleapis.com/css?family=Share+Tech+Mono&display=swap"
	    			rel="stylesheet"></link>
	    		<link rel="stylesheet"
	    			href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css"></link>
          <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
        </Head>

	    	<div className="body">
					<h1
						onMouseEnter={()=>{
					  	  this.setState(state=>{
					  	  	state.selectedOption = 'title'
                  return state
					  	  })
					  	}
					  }
						onMouseLeave={()=>{
						    this.setState(state=>{
						    	state.selectedOption = null
						    	return state
						    })
						  }
					  }
						className={this.state.selectedOption == 'title' ? "selected-term-text" : "termtext"}>{'Property of Wata Pa'}</h1>
	        {this.props.children}
	    	</div>

        <style jsx global>{`
	    		.body {
	    		  height: 100vh;
	    			width: 100vw;
	    		  background-color: black;
	    			padding: 10vw;
	    		}

	    		.termtext {
	    		  font-family: 'Share Tech Mono', monospace;
	    		  color: rgb(27,255,18);
	    			font-size: 32px;
	    		}
					.selected-term-text {
	    		  font-family: 'Share Tech Mono', monospace;
	    		  color: black;
						background-color: rgb(27,255,18);
	    			font-size: 32px;
					}
        `}</style>
      </div>
	  )
	}
}

export default Layout
