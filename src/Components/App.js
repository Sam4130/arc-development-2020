import React, {useState} from 'react';
import { ThemeProvider } from '@material-ui/styles';
import {BrowserRouter,Route, Switch } from "react-router-dom";

// stylings compoents
import theme from './UI/Theme';
//core compoents
import Header from './UI/Header';
import Footer from './UI/Footer';
import LandingPage from "./Views/LandingPage";
import Services from "./Views/Services";
import CustomService from "./Views/ServicesViews/CustomSoftware";
import IosDevelopment from "./Views/ServicesViews/IosDevelopment";
import WebsiteDevelopment from "./Views/ServicesViews/WebsiteDevelopment";
import Revolution from "./Views/Revolution";
import Security from "./Views/ServicesViews/Security";
import Contact from "./Views/FormsPages/Contact";
import Estimate from "./Views/FormsPages/Estimate";
import About from './Views/About'

function App() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    // array to handel router
    const [value, setValue] = useState(0);
  return (
   <ThemeProvider theme={theme}>
       <BrowserRouter>
       <Header value={value} setValue={setValue} selectedIndex={selectedIndex}
       setSelectedIndex={setSelectedIndex}/>
           <Switch>
               <Route exact path={"/"} render={ (props) =>
                   <LandingPage
                       {...props}
                       setValue={setValue}
                        setSelectedIndex={setSelectedIndex}
                    />
                }
               />
               <Route exact path={"/services"} render={ (props) =>
                   <Services
                   {...props}
                   setValue={setValue}
                   setSelectedIndex={setSelectedIndex}
                    />
               }/>
               <Route exact path={"/custom-software"} render={ (props) =>
                   <CustomService
                       {...props}
                       setValue={setValue}
                       setSelectedIndex={setSelectedIndex}
                   />
               }/>
               <Route exact path={"/mobile-apps"} render={ (props) =>
                   <IosDevelopment
                       {...props}
                       setValue={setValue}
                       setSelectedIndex={setSelectedIndex}
                   />
               }/>
               <Route exact path={"/websites"} render={ (props) =>
                   <WebsiteDevelopment
                       {...props}
                       setValue={setValue}
                       setSelectedIndex={setSelectedIndex}
                   />
               }/>
               <Route exact path={"/security"}
                      render={ (props) =>
                          <Security
                              {...props}
                              setValue={setValue}
                              setSelectedIndex={setSelectedIndex}
                          />
                      }/>
               <Route exact path={"/revolution"} render={ (props) =>
                          <Revolution
                              {...props}
                              setValue={setValue}
                              setSelectedIndex={setSelectedIndex}
                          />
                      }/>
               <Route exact path={"/about"} render={ (props) =>
                   <About
                       {...props}
                       setValue={setValue}
                       setSelectedIndex={setSelectedIndex}
                   />
               }/>
               <Route exact path={"/contact"} render={ (props) =>
                   <Contact
                       {...props}
                       setValue={setValue}
                       setSelectedIndex={setSelectedIndex}
                   />
               }/>
               <Route exact path={"/estimates"} render={ (props) =>
                   <Estimate
                       {...props}
                       setValue={setValue}
                       setSelectedIndex={setSelectedIndex}
                   />
               }/>
           </Switch>
           <Footer value={value} setValue={setValue} selectedIndex={selectedIndex}
                   setSelectedIndex={setSelectedIndex}/>
       </BrowserRouter>

   </ThemeProvider>


  );
}

export default App;
