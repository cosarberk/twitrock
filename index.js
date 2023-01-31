
const { By, Key, Builder,until,executeScript  } = require('selenium-webdriver');
require('chromedriver')


const TwitterConfig={
    login:{
      xpath:{
          username:"/html/body/div/div/div/div[1]/div/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div/div/div/div[5]/label/div/div[2]/div/input",
          password:"/html/body/div/div/div/div[1]/div/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div[1]/div/div/div[3]/div/label/div/div[2]/div[1]/input",
          page:'//*[@id="react-root"]/div/div/div[2]/header/div/div/div/div[1]/div[3]/a'
      },
      name:{
        username:'text',
        password:'password',
      }
      } ,
      
      tweet:{
        xpath:{
            content:"/html/body/div[1]/div/div/div[1]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div/div[3]/div[2]/div[1]/div/div/div/div/div[2]/div[1]/div/div/div/div/div/div[2]/div/div/div/div/label/div[1]/div/div/div/div/div/div[2]/div",
            button:'/html/body/div[1]/div/div/div[1]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div/div[3]/div[2]/div[1]/div/div/div/div/div[2]/div[3]/div/div/div[1]/div[1]',
            img:"/html/body/div[1]/div/div/div[1]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div/div[3]/div[2]/div[1]/div/div/div/div/div[2]/div[3]/div/div/div[1]/input"
        }
      }
}

const Root = { username: "Ceyda38365910", pass: "88r50p22", mail: "rehillemakm@hotmail.com",tweet:"#hello",img:"C:\\Users\\Sistem\\Desktop\\TwitterBot\\TwitterBot\\bin\\Debug\\twitter\\Gönderiler\\1.jpg" }

const hesaplar = [
    { username: "AndreaHodson11", pass: "55i54y12", mail: "laertifhfgu@hotmail.com" },
    { username: "lovey_steven", pass: "73j36n93", mail: "ntathuliliul@outlook.com" },
    { username: "Kathrin10069495", pass: "15f46m63", mail: "laryhlusbin1@outlook.com" },
    { username: "Magdale04789423", pass: "94r49w41", mail: "afisahshoaeir@hotmail.com" },
    { username: "Stacy11618938", pass: "14p68v57", mail: "wakntifi9@outlook.com" },
    { username: "Santa46312832", pass: "25y82o78", mail: "jorevblfd@hotmail.com" },
    { username: "LajuanaPaige", pass: "50p78k90", mail: "avekormoviiu@hotmail.com" },
    { username: "EvelineRomans", pass: "36v61r50", mail: "carpajalelw@outlook.com" },
    { username: "EwartAngeline", pass: "39n84r19", mail: "tzakiabassimn@outlook.com" },
    { username: "Tressa58270563", pass: "90d85f92", mail: "arakelmeitok@outlook.com" },
    { username: "pike_tawny", pass: "39t16x16", mail: "urabibrookss@hotmail.com" },
    { username: "EarlieLange", pass: "54s41b69", mail: "anomahmarmeni@hotmail.com" },
    { username: "ShaylaKirby10", pass: "22e95u65", mail: "choksinadenen@outlook.com" },
    { username: "LuceyShala", pass: "72f14u25", mail: "pinnokamayf@hotmail.com" },
    { username: "AtiyeZor", pass: "31m52x93", mail: "kutijezondoh@outlook.com" },
    { username: "Uurgl66212694", pass: "95r82e58", mail: "tomannradogof@hotmail.com" },
    { username: "Nazliha26172378", pass: "83g80a90", mail: "otreraezzakyt@hotmail.com" },
    { username: "ruchan_seyrek", pass: "38f69q33", mail: "hafijavidusho@hotmail.com" },
    { username: "BabatKivanc", pass: "35l72w18", mail: "hajhojneskee@hotmail.com" },
    { username: "Rezzan81596158", pass: "17a16m12", mail: "mlcjekwan@hotmail.com" },
    { username: "sezin_tamturk", pass: "13c11w13", mail: "andohziyadg@hotmail.com" },
    { username: "Cihannu44842856", pass: "19h94f38", mail: "stefikoran4@hotmail.com" },
    { username: "RimaBozbey", pass: "26v57t14", mail: "masnecrramizh@hotmail.com" },
    { username: "Naz53821868", pass: "12s39n39", mail: "thyninuncac@hotmail.com" },
    { username: "Ceyda38365910", pass: "88r50p22", mail: "rehillemakm@hotmail.com" },
    { username: "Berrak70528313", pass: "77p51y73", mail: "loologetintm@outlook.com" },
    { username: "gulgun_iyem", pass: "17d37u54", mail: "khdhirpagooz@hotmail.com" },
    
]


async function Run(params) {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get("https://google.com")
    await driver.findElement(By.name("q")).sendKeys("Hello world", Key.RETURN)
    setTimeout(() => {
        driver.quit()
    }, 3500);
}

async function TwitterLogin(i,D) {
    const prm = new Promise(async(resolve,reject)=>{
        await D.get("https://twitter.com/login").then(
            async()=>{
      
              await D.wait(until.elementLocated(By.name(i.elem.i1)), 30000);
              D.findElement(By.xpath(i.elem.iu)).sendKeys(i.infos.u, Key.RETURN)
              await D.wait(until.elementLocated(By.name(i.elem.i2)), 30000);
              D.findElement(By.xpath(i.elem.ip)).sendKeys(i.infos.p, Key.RETURN)
              await D.wait(until.elementLocated(By.xpath(i.elem.ipage)), 30000);
              console.log("bitti")
              resolve()
            }   
          
        )
    })
     return prm
}

async function Tweet(i,D) {
    await D.get("https://twitter.com/compose/tweet").then(
        async()=>{
           
          await D.wait(until.elementLocated(By.xpath(i.elem.ic)), 30000);
          D.findElement(By.xpath(i.elem.c1)).sendKeys(i.infos.c,Key.RETURN)
          //await D.wait(until.elementLocated(By.name(i.elem.ib)), 30000);
          await D.wait(until.elementLocated(By.name(i.elem.im)), 30000);
      //  /html/body/div[1]/div/div/div[1]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div/div[3]/div[2]/div[1]/div/div/div/div/div[2]/div[1]/div/div/div/div/div/div[2]/div/div/div/div[2]/div[1]/div/div[2]/div/div/div[1]/div/div/img   
        await D.findElement(By.xpath('/html/body/div[1]/div/div/div[1]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div/div[3]/div[2]/div[1]/div/div/div/div/div[2]/div[3]/div/div/div[2]/div[4]'))
           
      return
      D.findElement(By.xpath("/html/body/div[1]/div/div/div[1]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div/div[3]/div[2]/div[1]/div/div/div/div/div[2]/div[1]/div/div/div/div/div/div[2]/div/div/div/div[2]/div[1]/div/div[2]/div/div/div[1]/div/div/img")).sendKeys(i.infos.c,Key.RETURN)
          let input = await D.findElement(By.xpath(i.elem.im))
          D.executeScript("arguments[0].setAttribute('style','display:block;')", input)
          input.sendKeys(i.infos.i)
         D.findElement(By.xpath(i.elem.b1)).click()
       
        }   
      
    ) 
}



// async function RootLogin(DRIVER,ROOT,CONFIG) {
//     const I = {
//         elem:{
//             i1:CONFIG.login.name.username,
//             i2:CONFIG.login.name.password,
//             iu:CONFIG.login.xpath.username,
//             ip:CONFIG.login.xpath.password
//         },
//         infos:{
//             u:ROOT.username,
//             p:ROOT.pass
//         }
//     }
//     TwitterLogin(I,DRIVER)
// }

async function RootLogin(DRIVER,ROOT,CONFIG){
     let prm = new Promise((resolve,reject)=>{
        const I = {
            elem:{
                i1:CONFIG.login.name.username,
                i2:CONFIG.login.name.password,
                iu:CONFIG.login.xpath.username,
                ip:CONFIG.login.xpath.password,
                ipage:CONFIG.login.xpath.page
            },
            infos:{
                u:ROOT.username,
                p:ROOT.pass
            }
        }
        TwitterLogin(I,DRIVER).then(
            (res)=>{resolve()}
        )
     })
    
       return  prm
 
};

async function RootTweet(DRIVER,ROOT,CONFIG) {
    const I = {
        elem:{
            c1:CONFIG.tweet.xpath.content,
            ic:CONFIG.tweet.xpath.content,
            b1:CONFIG.tweet.xpath.button,
            ib:CONFIG.tweet.xpath.button,
            im:CONFIG.tweet.xpath.img
        },
        infos:{
            c:ROOT.tweet,
            i:ROOT.img
        }
    }
    console.log(I)
    Tweet(I,DRIVER)
}

async function TWITTER(root, counts, config) {
    let driver = await new Builder().forBrowser('chrome').build();
    await RootLogin(driver,Root,TwitterConfig).then(
        ()=>{
        
            // setTimeout(() => {
                 RootTweet(driver,Root,TwitterConfig)
            // }, 40000);
         
        }
    )


    
    //
   

    setTimeout(() => {
       // driver.quit()
    }, 85000);
}



TWITTER(Root)

