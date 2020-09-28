import React from 'react';

class PaymentForm extends React.Component {

    constructor(props){
        super(props);

        this.paymentAmountRef = React.createRef();
        this.paymentCurrencyRef = React.createRef();
        this.paymentMethodRef = React.createRef();
        this.paymentDescriptionRef = React.createRef();

        this.state = {
            showLoadingSpinner: false
        }
    }

    initiateAAP = () => {
        this.props.initiateAAP(this.paymentCurrencyRef.current.value, this.paymentAmountRef.current.value, this.paymentMethodRef.current.value, this.paymentDescriptionRef.current.value);
    }

    render() 
    {
        if(!this.props.isDisplayed){
            return null;
        }
        return (
            <div style={{padding:'12px', backgroundColor: 'white', borderBottom:'1px solid rgb(198, 202, 215)', borderLeft:'1px solid rgb(198, 202, 215)'}}>
                <h1 class="Twilio">Request Payment via Telephone</h1>
                
                <h2 class="Twilio">Currency</h2>
                <select class="Twilio" ref={this.paymentCurrencyRef}>
                    <option value='gbp'>GBP (£)</option>
                    <option value='usd'>USD ($)</option>
                </select>
                <hr />

                <h2 class="Twilio">Payment Method</h2>
                <select class="Twilio" ref={this.paymentMethodRef}>
                    <option value='credit-card'>Credit Card</option>
                    <option value='ach-debit'>ACH Debit</option>
                </select>
                <hr />

                <h2 class="Twilio">Charge Amount</h2>
                <input ref={this.paymentAmountRef} defaultValue="10"/>
                <hr />

                <h2 class="Twilio">Description</h2>
                <input ref={this.paymentDescriptionRef} placeholder="i.e. Pay via Flex!" />
                <hr />


                <button className="Twilio-Button Twilio-TaskCanvasHeader-EndButton css-gm15qx" onClick={this.initiateAAP}>REQUEST PAYMENT</button>
        </div>);
    }
}

export default PaymentForm;