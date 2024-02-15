import mercadopago from "mercadopago"
export const createOrder = async(req, res) => {
  mercadopago.configure({
    access_token:
      "TEST-4329707065712234-010917-e9d5098118451da1a78b6f5004fcba62-1629820555",
   
  });
const result = await  mercadopago.preferences.create({
    items:[
      {
        title:"laptop hp",
        unit_price: 5000000,
        currency_id:"ARS",
        quantity:1
      }
    ],
    back_urls:{
      success: "http://localhost:3000/sucess",
      failure: "http://localhost:3000/webhook",
      pending:"http://localhost:3000/pending"
    },
    notification_url:"http://localhost:3000/webhook"
  })
  console.log(result);
  res.send("creatin order");
};
export const  reciveWebhook = (req, res) => {
  console.log(req.query);
  res.send("webhook");
}
