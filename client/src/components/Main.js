import React from 'react';
import './Main.css';
import axios from 'axios';
const Main = () => {
    const handleClick= ()=>{
        //  const instance = axios.create();
        // instance.interceptors.request.use((config) => {
        //     const authToken = localStorage.getItem('authToken');
        //     if (authToken) {
        //         config.headers['Authorization'] = authToken;
        //     }
        //     return config;
        // });
        // const config={
        //     headers:{
        //         'Authorization':localStorage.getItem('authToken')
        //     }
        // }
        axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('authToken');
        axios.post('/api/submit')
        .then((res)=>{
            console.log(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return(
        <div className='bf-container'>
            <div className='bf-header'>
                <div className='bfh2'>
                    <div className='bflogo'></div>
                    <div className='bflogotxt'>PriefPDF</div>
                </div>
                <div className='bfh'>
                    <div className='bfh-btn'>MAIN</div>
                    <div className='bfh-btn'><a href='#pricing'>PRICING</a></div>
                    <div className='bfh-btn'><a href='#help'>HELP</a></div>
                </div>
                <div className='bfh3'>
                    <div className='ico'>K</div>
                </div>
            </div>
            <div className='bf-body-main'>
                <div className='bfb-up'>
                    <div className='submit-head'>Submit Form</div>
                    <div className='submit-upload'>
                        <div>Upload</div>
                        <div className='upload-btn'>upload</div>
                    </div>
                    <div className='submit-url'>
                        <div>Upload PDF Url</div>
                        <div className='upload-url'>
                            <input className='url-input'/>
                            <div className='url-btn'>Browse</div>
                        </div>
                    </div>
                    <div className='submit-btn' onClick={handleClick}>Submit now</div>
                </div>
                <textarea className='bfb-rect'/>
            </div>
            <div id='pricing' className='bf-body-pricing'>
                <div className='help-t'>Pricing</div>
                <div className='help-c'>
                    <p>BriefPDFLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className='bfb-center'>
                    <div className='bfb-free'>
                        <div className='price'>$0</div>
                        <p>Allowed for below 3000 characters summarization</p>
                        <p>Free 100 AI summarization</p>
                        <p>File Upload upto 1 MB</p>
                        <div className='pay-btn'>free</div>
                    </div>
                    <div className='bfb-buy'>
                        <div className='price'>$5/mo</div>
                        <p>Upto 50000 characters Summarization</p>
                        <p>Upto 3000 characters AI Summarization</p>
                        <p>Unlimited AI summarization</p>
                        <p>File Upload upto 5 MB</p>
                        <p>Convert to PPT</p>
                        <p>NO AUTO-RENEWAL</p>
                        <div className='pay-btn'>buy</div>
                    </div>
                </div>
                
                
            </div>
            <div id="help" className='bf-body-help'>
                <div className='help-t'>BriefPDF</div>
                <div className='help-c'>
                    <p>BriefPDFLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className='help-c'>
                    <p>BriefPDFLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className='help-c'>
                    <p>BriefPDFLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className='help-c'>
                    <p>BriefPDFLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className='help-c'>
                    <p>BriefPDFLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className='help-c'>
                    <p>BriefPDFLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <div className='bf-footer'>

            </div>
        </div>
    );
}
export default Main;