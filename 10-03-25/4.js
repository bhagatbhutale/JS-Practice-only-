function getUser(callback) {
  setTimeout(() => {
    console.log("User fetched");
    callback({ id: 1, name: "John" });
  }, 1000);
}

function getOrders(userId, callback) {
  setTimeout(() => {
    console.log(`Orders fetched for user ${userId}`);
    callback(["order1", "order2"]);
  }, 1000);
}

function processPayment(order, callback) {
  setTimeout(() => {
    console.log(`Payment processed for ${order}`);
    callback("Payment Successful");
  }, 1000);
}

function sendNotification(status, callback) {
  setTimeout(() => {
    console.log(`Notification sent: ${status}`);
    callback();
  }, 1000);
}

// 🚨 Callback Hell - Nested Callbacks (Pyramid of Doom)
getUser((user) => {
  getOrders(user.id, (orders) => {
    processPayment(orders[0], (paymentStatus) => {
      sendNotification(paymentStatus, () => {
        console.log("All tasks completed!");
      });
    });
  });
});
