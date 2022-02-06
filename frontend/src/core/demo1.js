const buy = () => {
    // rest of code
    processPayment(userId, token, paymentData)
        .then(response => {
            createOrder(userId, token, createOrderData)
                .then(response => {
                    // empty cart
                    emptyCart(() => {
                        console.log('payment success and empty cart');
                        setData({
                            loading: false,
                            success: true
                        });
                    });
                })
                .catch(error => {
                    console.log(error);
                    setData({ loading: false });
                });
        })
        .catch(error => {
            console.log(error);
            setData({ loading: false });
        });
})
.catch(error => {
    // console.log("dropin error: ", error);
    setData({ ...data, error: error.message });
});