import axios from 'axios';

const domain = 'http://localhost:8000';

const addItem = async (id) => {
    const path = domain + '/add' + id;
    await axios.post(path); // POST /add/:id -> append to shopping cart DS
    const resp = await axios(domain + '/total'); // get total by calling GET /total
    return {
        type: 'ADD',
        value: id,
        total: resp.data
    };
}

const clearCart = () => {
    return {
        type: 'INIT'
    };
}

export const CartActions = {
    addItem,
    clearCart,
};