import {BrowserRouter, Route, Switch} from "react-router-dom";

import NewsListContainer from "../NewsList/NewsListContainer";
import PictureListContainer from "../PictureList/PictureListContainer";
import About from "../About/About";
import NavMain from "../NavMain/NavMain";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";


const App = () => {
    const [galleryTheme, setGalleryTheme] = useState("light")

    return (
        <BrowserRouter>
            <NavMain/>

            <Switch>
                <Route exact path="/">
                    <NewsListContainer/>
                </Route>
                <Route path="/gallery">
                    <PictureListContainer
                        setGalleryTheme={setGalleryTheme}
                        galleryTheme={galleryTheme}
                    />
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default App;