const cron = require('node-cron')
const axios = require('axios')
const { sendEmail } = require('./lib/mailer')
require('dotenv').config()

function monit (arguments) {
  axios.post(`${process.env.SERVER_HOST}/api/monitor`) 
    .then(res => {
      const data = res.data || {} // { errno, data, msg }
      const { errno, msg } = data;
      if (errno !== 0) {
        // 出错，发邮件
        console.log('msg: ', msg)
        sendEmail({ subject: '【划水AI】接口检测失败', text: msg})
      }
    })
    .catch(err => {
      // 出错，发邮件
      console.log('err: ', err.message)
      sendEmail({ subject: '【划水AI】接口检测出错', text: err.message })
    })
}

cron.schedule('*/15 * * * *', () => {
  console.log('invoke every 15 mins', new Date().toISOString())
  monit()
})

monit()
console.log('start cron job...')
