function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("User fetched");
      resolve({ id: 1, name: "John" });
    }, 1000);
  });
}

function getOrders(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Orders fetched for user ${userId}`);
      resolve(["order1", "order2"]);
    }, 1000);
  });
}

function processPayment(order) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Payment processed for ${order}`);
      resolve("Payment Successful");
    }, 1000);
  });
}

function sendNotification(status) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Notification sent: ${status}`);
      resolve();
    }, 1000);
  });
}

// ✅ Promise Chaining (Better than Callback Hell)
getUser()
  .then((user) => getOrders(user.id))
  .then((orders) => processPayment(orders[0]))
  .then((paymentStatus) => sendNotification(paymentStatus))
  .then(() => console.log("All tasks completed!"))
  .catch((error) => console.log("Error:", error));
