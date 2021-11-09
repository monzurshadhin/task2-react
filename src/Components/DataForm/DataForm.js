import React, { useState } from 'react';
import './DataForm.css';

const DataForm = () => {
    const [itemName,setItemName] = useState('HeadPhone')
    const handleItemName = e =>{
        const updateName = e.target.value
        setItemName(updateName)
    }
    const [itemName2,setItemName2] = useState('Keyboard')
    const handleItemName2 = e =>{
        const updateName = e.target.value
        setItemName2(updateName)
    }
    const [itemName3,setItemName3] = useState('Mouse')
    const handleItemName3 = e =>{
        const updateName = e.target.value
        setItemName3(updateName)
    }

    const [quantity1,setQuantity1] = useState('10');
    const [quantity2,setQuantity2] = useState('5');
    const [quantity3,setQuantity3] = useState('7');

    const handleQuantity1 = e =>{
        const updateQuantity = e.target.value
        setQuantity1(updateQuantity)
    }
    const handleQuantity2 = e =>{
        const updateQuantity = e.target.value
        setQuantity2(updateQuantity)
    }
    const handleQuantity3 = e =>{
        const updateQuantity = e.target.value
        setQuantity3(updateQuantity)
    }

    const [rate1,setRate1] = useState('80');
    const [rate2,setRate2] = useState('120');
    const [rate3,setRate3] = useState('70');

    const handleRate1 = e =>{
        const updateRate = e.target.value
        setRate1(updateRate)
    }
    const handleRate2 = e =>{
        const updateRate = e.target.value
        setRate2(updateRate)
    }
    const handleRate3 = e =>{
        const updateRate = e.target.value
        setRate3(updateRate)
    }

    
    
    return (
        <div className="container mt-5">
        <form id="cart">
          <table name="cart">
            <tr className="table-header">
              <th>Item</th>
              <th>Quantity</th>
              <th>Rate</th>
              <th>&nbsp;</th>
              <th>Amount</th>
              <th></th>
            </tr>
            <tr className="line_items">
              <td><input onChange={handleItemName} type="text" value={itemName||''} /></td>
              <td><input onChange={handleQuantity1} value={quantity1||''} type="text" name="qty" /></td>
              <td><input type="text" name="price" onChange={handleRate1} value={rate1||''} /></td>
              <th>&nbsp;</th>
              <td>
                <input
                  type="text"
                  name="item_total"
                  className="total-amount-input"
                  jAutoCalc="{qty} * {price}"
                />
              </td>
              <td>
                <button className="row-remove">
                  <i className="fas fa-trash-alt"></i>
                </button>
              </td>
            </tr>
            <tr className="line_items">
              <td><input onChange={handleItemName2} type="text" value={itemName2||''} /></td>
              <td><input onChange={handleQuantity2} value={quantity2||''} type="text" name="qty" /></td>
              <td><input type="text" name="price" onChange={handleRate2} value={rate2||''} /></td>
              <th>&nbsp;</th>
              <td>
                <input
                  type="text"
                  name="item_total"
                  className="total-amount-input"
                  jAutoCalc="{qty} * {price}"
                />
              </td>
              <td>
                <button className="row-remove">
                  <i className="fas fa-trash-alt"></i>
                </button>
              </td>
            </tr>
  
            <tr className="line_items">
              <td><input onChange={handleItemName3} type="text" value={itemName3||''} /></td>
              <td><input type="text" name="qty" onChange={handleQuantity3} value={quantity3||''} /></td>
              <td><input type="text" name="price" onChange={handleRate3} value={rate3||''} /></td>
              <th>&nbsp;</th>
              <td>
                <input
                  type="text"
                  name="item_total"
                  className="total-amount-input"
                  jAutoCalc="{qty} * {price}"
                />
              </td>
              <td>
                <button className="row-remove">
                  <i className="fas fa-trash-alt"></i>
                </button>
              </td>
            </tr>
  
            <tr>
              <td colspan="99">
                <button className="row-add">
                  <i className="fas fa-plus"></i> Line Item
                </button>
              </td>
            </tr>
  
            <tr>
              <td colspan="3">
                <h4 className="mt-5">Notes</h4>
                <div className="note">
                  <p>Notes: any relevant information not already covered</p>
                </div>
              </td>
              <td>Subtotal</td>
  
              <td>
                <input
                  type="text"
                  name="sub_total"
                  className="total-amount-input"
                  jAutoCalc="SUM({item_total})"
                />
              </td>
            </tr>
            <tr>
              <td colspan="3">&nbsp;</td>
              <td>Discount 2%</td>
  
              <td>
                <input
                  type="text"
                  name="discount_total"
                  jAutoCalc="{sub_total} *(2/100)"
                />
              </td>
            </tr>
            <tr>
              <td colspan="3">&nbsp;</td>
              <td>Tax: 5%</td>
  
              <td>
                <input
                  type="text"
                  name="tax_total"
                  jAutoCalc="{sub_total} * (5/100)"
                />
              </td>
            </tr>
            <tr>
              <td colspan="3">
                <h4 className="mt-5">Terms</h4>
                <div className="note">
                  <p>
                    Terms and Conditions - late fees, payment methon delivery
                    schedule
                  </p>
                </div>
              </td>
              <td>Shipping</td>
  
              <td>
                <input type="text" name="shipping_total" value="80" />
              </td>
            </tr>
            <tr>
              <td colspan="3">&nbsp;</td>
              <td>Total</td>
  
              <td>
                <input
                  type="text"
                  name="grand_total"
                  className="total-amount-input"
                  jAutoCalc="{sub_total} + {tax_total} - {discount_total} + {shipping_total}"
                />
              </td>
            </tr>
  
            <tr>
              <td colspan="3">&nbsp;</td>
              <td>Amount paid</td>
  
              <td>
                <input type="text" name="pain-amount" value="500" />
              </td>
            </tr>
  
            <tr>
              <td colspan="3">&nbsp;</td>
              <td>Balance due</td>
  
              <td>
                <input
                  type="text"
                  name="grand_total"
                  value=""
                  className="total-amount-input"
                  jAutoCalc="{sub_total} + {tax_total} - {discount_total} + {shipping_total} - {pain-amount}"
                />
              </td>
            </tr>
          </table>
        </form>
      </div>
    );
};

export default DataForm;