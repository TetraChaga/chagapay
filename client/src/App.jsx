import React, { Component, useState  } from 'react'
import styles from "./styles"
// import './App.css'
// import axios from 'axios'
// import { URL } from './config'
// import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/home";
import Footer from "./components/Footer";
import ContactUs from './pages/contact';
// import About from './pages/About/About';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: '',
      id: '',
      loading: false,
    }
  }

  //Function called when the button is clicked
  getServerDetails = async () => {
    const { id } = this.state

    this.setState({ loading: true, message: '' })

    const baseUrl = `${URL}${id}`

    try {
      // const result = await axios.get(baseUrl) //Call the Cloud Function

      // if (result.data && result.data.status === 200) {
      //   this.setState({ message: result.data.message })
      // } else {
      //   console.log(result)
      // }
    } catch (err) {
      console.log('ERROR', err)
      this.setState({ message: 'An internal error happened.' })
    }
    this.setState({ loading: false })
  }

  //Function called when inserting a value
  handleChange = ev => {
    const { value, name } = ev.target

    if (value.match(/\d/g))
      this.setState({ [name]: value.match(/\d/g).join('') })
    else this.setState({ [name]: '' })
  }

  //When user press Enter
  handleKeyDown = ev => {
    if (ev.key === 'Enter') {
      this.getDiagnosis()
    }
  }

  render() {

    const { message, id, loading } = this.state

    return (
      <div className='App'>
		<div className="w-full overflow-hidden bg-primary">
				<div className={`${styles.paddingX} ${styles.flexCenter} relative`}>
					<div
						className={`w-full z-50 bg-primary/0 backdrop-blur-xl fixed top-0 sm:px-32 px-12`}>
						<Navbar />
					</div>
				</div>     
			<Routes>
				<Route exact path="/" element={<Homepage />} />
				<Route exact path="/contact" element={<ContactUs />} />
				{/* <Route exact path="/about" element={<About />} /> */}
			</Routes>      
		{<Footer />}
		</div>
	  </div>
    )
  }
}

export default App
