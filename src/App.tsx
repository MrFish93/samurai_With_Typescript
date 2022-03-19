import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {StoreType} from "./redux/state";

type AppPropsType = {
    store: StoreType
}

export function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/messages' element={<Dialogs 
                            dialogsPage={props.store.getState().dialogsPage} 
                            dispatch={props.store.dispatch.bind(props.store)}/>}/>
                        <Route path='/profile'
                               element={<Profile
                                   profilePage={props.store.getState().profilePage}
                                   dispatch={props.store.dispatch.bind(props.store)}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

