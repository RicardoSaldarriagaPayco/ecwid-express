import React from 'react';

function Login(){
    return(
        <div>
        <div>
            <div className="named-area">
                <div className="named-area__body">
                    <div className="a-card a-card--normal">
                        <div className="a-card__paddings">
                            <div className="payment-method">
                                <div className="payment-method__header">
                                    <div className="payment-method__logo">
                                        <img src="https://369969691f476073508a-60bf0867add971908d4f26a64519c2aa.ssl.cf5.rackcdn.com/logos/logo_epayco_400px.png" width="336" height="144" alt=""/>
                                    </div>
                                </div>
                                <div className="payment-method__title">Accept payments on your website</div>

                                <div className="payment-method__content">
                                    <div className="form-area">
                                        <div className="form-area__content">
                                            <p>
											ePayco is a company that specializes in processing online payments allowing people or businesses to make payments, collections and recharges in an easy and secure way </p>
                                            <p>Your customers' data is completely safe and with a system of anti-fraud options
                                			to suit your business.
                                            </p>
                                        </div>

                                        <div className="columned tap-settings">
                                            <div className="columned__item">
                                                <div className="form-area__content">
                                                    <div className="fieldsets-batch">
                                                    <div className="form-area__title">Configure Account</div>
                                                        <div className="fieldset fieldset-itransact">
                                                            <div className="fieldset__field-wrapper">
                                                                <div className="field field--medium">
                                                                    <span className="fieldset__svg-icon"></span>
                                                                    <label className="field__label">P_CUST_ID_CLIENTE</label>
                                                                    <input data-name="p_cust_id_cliente"
                                                                        data-visibility="private" type="text"
                                                                        className="field__input" />
                                                                    <div className="field__placeholder">P_CUST_ID_CLIENTE
                                                                    </div>
                                                                    <span className="field-state--success"><svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="26px" height="26px"
                                                                            viewBox="0 0 26 26" focusable="false">
                                                                            <path
                                                                                d="M5 12l5.02 4.9L21.15 4c.65-.66 1.71-.66 2.36 0 .65.67.65 1.74 0 2.4l-12.3 14.1c-.33.33-.76.5-1.18.5-.43 0-.86-.17-1.18-.5l-6.21-6.1c-.65-.66-.65-1.74 0-2.41.65-.65 1.71-.65 2.36.01z">

                                                                            </path>

                                                                        </svg></span><span
                                                                        className="field-state--close"><svg version="1.1"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                            x="0px" y="0px" viewBox="0 0 16 16"
                                                                            enableBackground="new 0 0 16 16"
                                                                            xmlSpace="preserve" focusable="false">
                                                                            <path
                                                                                d="M15.6,15.5c-0.53,0.53-1.38,0.53-1.91,0L8.05,9.87L2.31,15.6c-0.53,0.53-1.38,0.53-1.91,0 c-0.53-0.53-0.53-1.38,0-1.9l5.65-5.64L0.4,2.4c-0.53-0.53-0.53-1.38,0-1.91c0.53-0.53,1.38-0.53,1.91,0l5.64,5.63l5.74-5.73 c0.53-0.53,1.38-0.53,1.91,0c0.53,0.53,0.53,1.38,0,1.91L9.94,7.94l5.66,5.65C16.12,14.12,16.12,14.97,15.6,15.5z">
                                                                            </path>
                                                                        </svg></span>
                                                                </div>
                                                                <div className="fieldset__field-prefix"></div>
                                                                <div className="fieldset__field-suffix"></div>
                                                            </div>

                                                            <div className="field__error" aria-hidden="true"
                                                               style={{display:'none'}}></div>

                                                            <div className="fieldset__note" aria-hidden="true"
                                                               style={{maxHeight: 2000+'vh',display:'none'}}></div>
                                                        </div>
                                                        <div className="fieldset fieldset-itransact">
                                                            <div className="fieldset__field-wrapper">
                                                                <div className="field field--medium">
                                                                    <span className="fieldset__svg-icon"></span>
                                                                    <label className="field__label">PUBLIC_KEY</label>
                                                                    <input data-name="public_key"
                                                                        data-visibility="private" type="password"
                                                                        className="field__input" />
                                                                    <div className="field__placeholder">PUBLIC_KEY
                                                                    </div>
                                                                    <span className="field-state--success"><svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="26px" height="26px"
                                                                            viewBox="0 0 26 26" focusable="false">
                                                                            <path
                                                                                d="M5 12l5.02 4.9L21.15 4c.65-.66 1.71-.66 2.36 0 .65.67.65 1.74 0 2.4l-12.3 14.1c-.33.33-.76.5-1.18.5-.43 0-.86-.17-1.18-.5l-6.21-6.1c-.65-.66-.65-1.74 0-2.41.65-.65 1.71-.65 2.36.01z">
                                                                            </path>
                                                                        </svg></span><span
                                                                        className="field-state--close"><svg version="1.1"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                            x="0px" y="0px" viewBox="0 0 16 16"
                                                                            enableBackground="new 0 0 16 16"
                                                                            xmlSpace="preserve" focusable="false">
                                                                            <path
                                                                                d="M15.6,15.5c-0.53,0.53-1.38,0.53-1.91,0L8.05,9.87L2.31,15.6c-0.53,0.53-1.38,0.53-1.91,0 c-0.53-0.53-0.53-1.38,0-1.9l5.65-5.64L0.4,2.4c-0.53-0.53-0.53-1.38,0-1.91c0.53-0.53,1.38-0.53,1.91,0l5.64,5.63l5.74-5.73 c0.53-0.53,1.38-0.53,1.91,0c0.53,0.53,0.53,1.38,0,1.91L9.94,7.94l5.66,5.65C16.12,14.12,16.12,14.97,15.6,15.5z">
                                                                            </path>
                                                                        </svg></span>
                                                                </div>
                                                                <div className="fieldset__field-prefix"></div>
                                                                <div className="fieldset__field-suffix"></div>

                                                            </div>
                                                            <div className="field__error" aria-hidden="true"
                                                               style={{maxHeight: 2000+'vh', display:'none'}}></div>
                                                            <div className="fieldset__note" aria-hidden="true"
                                                               style={{maxHeight: 2000+'vh',display:'none'}}></div>
                                                        </div>
                                                        <div className="fieldset fieldset-itransact">
                                                            <div className="fieldset__field-wrapper">
                                                                <div className="field field--medium">
                                                                    <span className="fieldset__svg-icon"></span>
                                                                    <label className="field__label">P_KEY</label>
                                                                    <input data-name="p_key"
                                                                        data-visibility="private" type="password"
                                                                        className="field__input" />
                                                                    <div className="field__placeholder">P_KEY
                                                                    </div>
                                                                    <span className="field-state--success"><svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="26px" height="26px"
                                                                            viewBox="0 0 26 26" focusable="false">
                                                                            <path
                                                                                d="M5 12l5.02 4.9L21.15 4c.65-.66 1.71-.66 2.36 0 .65.67.65 1.74 0 2.4l-12.3 14.1c-.33.33-.76.5-1.18.5-.43 0-.86-.17-1.18-.5l-6.21-6.1c-.65-.66-.65-1.74 0-2.41.65-.65 1.71-.65 2.36.01z">
                                                                            </path>
                                                                        </svg></span><span
                                                                        className="field-state--close"><svg version="1.1"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                            x="0px" y="0px" viewBox="0 0 16 16"
                                                                            enableBackground="new 0 0 16 16"
                                                                            xmlSpace="preserve" focusable="false">
                                                                            <path
                                                                                d="M15.6,15.5c-0.53,0.53-1.38,0.53-1.91,0L8.05,9.87L2.31,15.6c-0.53,0.53-1.38,0.53-1.91,0 c-0.53-0.53-0.53-1.38,0-1.9l5.65-5.64L0.4,2.4c-0.53-0.53-0.53-1.38,0-1.91c0.53-0.53,1.38-0.53,1.91,0l5.64,5.63l5.74-5.73 c0.53-0.53,1.38-0.53,1.91,0c0.53,0.53,0.53,1.38,0,1.91L9.94,7.94l5.66,5.65C16.12,14.12,16.12,14.97,15.6,15.5z">
                                                                            </path>
                                                                        </svg></span>
                                                                </div>
                                                                <div className="fieldset__field-prefix"></div>
                                                                <div className="fieldset__field-suffix"></div>
                                                            </div>
                                                            <div className="field__error" aria-hidden="true"
                                                               style={{maxHeight: 2000+'vh',display:'none'}}></div>
                                                            <div className="fieldset__note" aria-hidden="true"
                                                               style={{maxHeight: 2000+'vh',display:'none'}}></div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="collapsible collapsible--opened">
                                                    <div className="collapsible__header">Advanced settings</div>
                                                    <div className="collapsible__body" style={{maxHeight: 2000+'vh'}}>
    
                                                        <div className="form-area__content">
                                                            <div className="custom-checkbox">
                                                                <label>
                                                                    <input data-name="testMode"
                                                                        data-visibility="private" type="checkbox"
                                                                        checked={true} value="on"
                                                                        className="custom-checkbox__input" />

                                                                    <span className="custom-checkbox__label"></span>

                                                                    <span className="custom-checkbox__text">Enable test mode

                                                                        (no charges)</span>

                                                                </label>

                                                                <div className="custom-checkbox__note muted text-small">

                                                                    Place here an instruction how to work in dev/test

                                                                    mode (if available)</div>

                                                            </div>

                                                        </div>

                                                    </div>

                                                </div>






                                            </div>



                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>
    )
}   
export default Login;